import React, { useState, useEffect, useRef } from 'react';
import {
  View, Text, TouchableOpacity, TextInput,
  StyleSheet, ScrollView, BackHandler
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Haptics from 'expo-haptics';
import { ref, set, get, update, onValue, off, remove } from 'firebase/database';
import { db, isFirebaseConfigured } from '../firebase';
import QUIZ_DATA from '../quiz_data.js';
import { useTheme } from '../ThemeContext';

const QUESTION_TIME = 15;
const NUM_QUESTIONS = 10;
const MAX_PTS = 1000;
const MIN_PTS = 100;
const LETTERS = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function generateCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  return Array.from({ length: 6 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
}

async function getPlayerId() {
  let id = await AsyncStorage.getItem('bf_player_id');
  if (!id) {
    id = Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
    await AsyncStorage.setItem('bf_player_id', id);
  }
  return id;
}

export default function MultiplayerScreen({ navigation }) {
  const { theme: t } = useTheme();

  const [phase, setPhase] = useState('setup');
  const [nameInput, setNameInput] = useState('');
  const [codeInput, setCodeInput] = useState('');
  const [myName, setMyName] = useState('');
  const [myId, setMyId] = useState('');
  const [roomCode, setRoomCode] = useState('');
  const [isHost, setIsHost] = useState(false);
  const [roomData, setRoomData] = useState(null);
  const [myAnswer, setMyAnswer] = useState(null);
  const [timeLeft, setTimeLeft] = useState(QUESTION_TIME);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const timerRef = useRef(null);
  const roomRef = useRef(null);
  const advancedRef = useRef(false);
  const answeringRef = useRef(false);
  const startingRef = useRef(false);
  const isHostRef = useRef(false);
  const roomCodeRef = useRef('');
  const myIdRef = useRef('');
  const phaseRef = useRef('setup');

  useEffect(() => {
    AsyncStorage.getItem('bf_player_name').then(n => { if (n) setNameInput(n); });
    getPlayerId().then(id => { setMyId(id); myIdRef.current = id; });
    return cleanup;
  }, []);

  useEffect(() => { phaseRef.current = phase; }, [phase]);

  // Phase transitions driven by Firebase
  useEffect(() => {
    if (!roomData) return;
    if (roomData.status === 'playing' && phase !== 'playing' && phase !== 'results') {
      setPhase('playing');
    }
    if (roomData.status === 'finished') {
      clearTimer();
      setPhase('results');
    }
    if (phase === 'create' && Object.keys(roomData.players || {}).length >= 2) {
      setPhase('lobby');
    }
  }, [roomData]);

  // New question: reset answer, start timer
  useEffect(() => {
    if (phase !== 'playing' || !roomData?.questionStartedAt) return;
    setMyAnswer(null);
    advancedRef.current = false;
    answeringRef.current = false;
    startTimer(roomData.questionStartedAt);
  }, [phase, roomData?.currentQ, roomData?.questionStartedAt]);

  // Android hardware back — same cleanup as the Leave button
  useEffect(() => {
    const sub = BackHandler.addEventListener('hardwareBackPress', () => {
      if (phase === 'create' || phase === 'lobby' || phase === 'playing') {
        leaveGame();
        return true;
      }
      return false;
    });
    return () => sub.remove();
  }, [phase]);

  // Both answered → advance early (host only)
  useEffect(() => {
    if (!isHostRef.current || phase !== 'playing' || !roomData) return;
    const currentQ = roomData.currentQ ?? 0;
    const answers = roomData.answers?.[currentQ] || {};
    const playerIds = Object.keys(roomData.players || {});
    if (playerIds.length === 2 && playerIds.every(pid => answers[pid]) && !advancedRef.current) {
      advancedRef.current = true;
      setTimeout(() => doAdvance(currentQ), 2000);
    }
  }, [roomData?.answers]);

  function startTimer(startedAt) {
    clearTimer();
    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startedAt) / 1000;
      const remaining = Math.max(0, QUESTION_TIME - elapsed);
      setTimeLeft(Math.ceil(remaining));
      if (remaining <= 0) {
        clearTimer();
        if (isHostRef.current && !advancedRef.current) {
          advancedRef.current = true;
          const currentQ = roomData?.currentQ ?? 0;
          doAdvance(currentQ);
        }
      }
    }, 200);
  }

  function clearTimer() {
    if (timerRef.current) { clearInterval(timerRef.current); timerRef.current = null; }
  }

  function subscribeRoom(code) {
    const r = ref(db, `rooms/${code}`);
    roomRef.current = r;
    onValue(r, snap => {
      const data = snap.val();
      if (!data) {
        if (phaseRef.current === 'results') return;
        setError('Room was closed.'); cleanup(); setRoomData(null); setPhase('setup'); return;
      }
      setRoomData(data);
    });
  }

  function cleanup() {
    clearTimer();
    if (roomRef.current) { off(roomRef.current); roomRef.current = null; }
  }

  async function createRoom() {
    if (!nameInput.trim()) { setError('Enter a nickname first.'); return; }
    setLoading(true); setError('');
    try {
      const pid = myIdRef.current || await getPlayerId();
      myIdRef.current = pid;
      const code = generateCode();
      const name = nameInput.trim();
      setMyName(name); setRoomCode(code); setIsHost(true);
      isHostRef.current = true; roomCodeRef.current = code;
      await AsyncStorage.setItem('bf_player_name', name);
      await set(ref(db, `rooms/${code}`), {
        status: 'waiting',
        hostId: pid,
        players: { [pid]: { name, score: 0 } },
        createdAt: Date.now(),
      });
      subscribeRoom(code);
      setPhase('create');
    } catch (e) {
      setError('Failed to create room. Check your connection.');
    }
    setLoading(false);
  }

  async function joinRoom() {
    if (!nameInput.trim()) { setError('Enter a nickname first.'); return; }
    if (!codeInput.trim()) { setError('Enter the room code.'); return; }
    setLoading(true); setError('');
    try {
      const pid = myIdRef.current || await getPlayerId();
      myIdRef.current = pid;
      const code = codeInput.trim().toUpperCase();
      const name = nameInput.trim();
      const snap = await get(ref(db, `rooms/${code}`));
      if (!snap.exists()) { setError('Room not found. Check the code.'); setLoading(false); return; }
      const room = snap.val();
      if (room.status !== 'waiting') { setError('Game already started.'); setLoading(false); return; }
      if (Object.keys(room.players || {}).length >= 2) { setError('Room is full.'); setLoading(false); return; }
      setMyName(name); setRoomCode(code); setIsHost(false);
      isHostRef.current = false; roomCodeRef.current = code;
      await AsyncStorage.setItem('bf_player_name', name);
      await update(ref(db, `rooms/${code}/players/${pid}`), { name, score: 0 });
      subscribeRoom(code);
      setPhase('lobby');
    } catch (e) {
      setError('Failed to join room. Check your connection.');
    }
    setLoading(false);
  }

  async function startGame() {
    if (!isHostRef.current || startingRef.current) return;
    startingRef.current = true;
    const selected = shuffle(QUIZ_DATA).slice(0, NUM_QUESTIONS).map(q => q.id);
    await update(ref(db, `rooms/${roomCodeRef.current}`), {
      status: 'playing',
      questions: selected,
      currentQ: 0,
      questionStartedAt: Date.now(),
      answers: null,
    });
  }

  async function handleAnswer(letter) {
    if (myAnswer !== null || !roomData || answeringRef.current) return;
    answeringRef.current = true;
    const currentQ = roomData.currentQ ?? 0;
    const q = getQuestion(currentQ);
    if (!q) { answeringRef.current = false; return; }
    const correct = letter === q.correct;
    const elapsed = (Date.now() - roomData.questionStartedAt) / 1000;
    const remaining = Math.max(0, QUESTION_TIME - elapsed);
    const pts = correct ? Math.max(MIN_PTS, Math.round(MAX_PTS * (remaining / QUESTION_TIME))) : 0;
    setMyAnswer(letter);
    Haptics.notificationAsync(correct ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Error);
    const currentScore = roomData.players?.[myIdRef.current]?.score || 0;
    const pid = myIdRef.current;
    const code = roomCodeRef.current;
    await update(ref(db, `rooms/${code}/answers/${currentQ}/${pid}`), { letter, correct, pts });
    if (correct && pts > 0) {
      await update(ref(db, `rooms/${code}/players/${pid}`), { score: currentScore + pts });
    }
  }

  async function doAdvance(qIdx) {
    const code = roomCodeRef.current;
    if (!code) return;
    if (qIdx + 1 >= NUM_QUESTIONS) {
      await update(ref(db, `rooms/${code}`), { status: 'finished' });
    } else {
      await update(ref(db, `rooms/${code}`), {
        currentQ: qIdx + 1,
        questionStartedAt: Date.now(),
      });
    }
  }

  async function leaveGame() {
    cleanup();
    const code = roomCodeRef.current;
    if (isHostRef.current && code) {
      try { await remove(ref(db, `rooms/${code}`)); } catch (_) {}
    } else if (!isHostRef.current && code && phase === 'lobby') {
      try { await remove(ref(db, `rooms/${code}/players/${myIdRef.current}`)); } catch (_) {}
    }
    setMyAnswer(null);
    setError('');
    setRoomData(null); setRoomCode(''); setCodeInput(''); setIsHost(false);
    isHostRef.current = false; roomCodeRef.current = '';
    setPhase('setup');
  }

  function getQuestion(idx) {
    if (!roomData?.questions) return null;
    const questionsArr = Array.isArray(roomData.questions)
      ? roomData.questions : Object.values(roomData.questions);
    const id = questionsArr[idx];
    return QUIZ_DATA.find(q => q.id === id) || null;
  }

  function getPlayers() {
    if (!roomData?.players) return [];
    return Object.entries(roomData.players)
      .map(([id, data]) => ({ id, ...data }))
      .sort((a, b) => b.score - a.score);
  }

  function getMe() { return getPlayers().find(p => p.id === myIdRef.current); }
  function getOpponent() { return getPlayers().find(p => p.id !== myIdRef.current); }

  // ─── NOT CONFIGURED ───────────────────────────────────────
  if (!isFirebaseConfigured) {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: t.bg }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={[styles.backTxt, { color: t.textMuted }]}>← Back</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: t.text }]}>⚔️ Play vs Friend</Text>
          <View style={{ width: 60 }} />
        </View>
        <View style={styles.centerContent}>
          <Text style={{ fontSize: 48, marginBottom: 16 }}>🔧</Text>
          <Text style={[styles.bigBtnTxt, { color: t.text, marginBottom: 8 }]}>Not Set Up Yet</Text>
          <Text style={[styles.waitSub, { color: t.textMuted, textAlign: 'center' }]}>
            Firebase needs to be configured first.{'\n'}See the setup guide.
          </Text>
        </View>
      </SafeAreaView>
    );
  }

  // ─── SETUP / JOIN ─────────────────────────────────────────
  if (phase === 'setup' || phase === 'join') {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: t.bg }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { if (phase === 'join') { setError(''); setPhase('setup'); } else navigation.goBack(); }} style={styles.backBtn}>
            <Text style={[styles.backTxt, { color: t.textMuted }]}>← Back</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: t.text }]}>⚔️ Play vs Friend</Text>
          <View style={{ width: 60 }} />
        </View>
        <ScrollView contentContainerStyle={styles.content}>
          <Text style={[styles.label, { color: t.textMuted }]}>YOUR NICKNAME</Text>
          <TextInput
            style={[styles.input, { backgroundColor: t.input, borderColor: t.inputBorder, color: t.text }]}
            placeholder="Enter your nickname"
            placeholderTextColor={t.textMuted}
            value={nameInput}
            onChangeText={setNameInput}
            maxLength={20}
            autoCapitalize="words"
          />

          {phase === 'setup' ? (
            <>
              <TouchableOpacity style={[styles.bigBtn, { backgroundColor: t.accent }]} onPress={createRoom} disabled={loading}>
                <Text style={styles.bigBtnTxt}>🎮 Create Game</Text>
                <Text style={styles.bigBtnSub}>Share the code with your friend</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.bigBtn, { backgroundColor: t.card, borderColor: t.cardBorder, borderWidth: 1 }]} onPress={() => { setError(''); setPhase('join'); }} disabled={loading}>
                <Text style={[styles.bigBtnTxt, { color: t.text }]}>🔗 Join Game</Text>
                <Text style={[styles.bigBtnSub, { color: t.textMuted }]}>Enter your friend's code</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              <Text style={[styles.label, { color: t.textMuted, marginTop: 8 }]}>ROOM CODE</Text>
              <TextInput
                style={[styles.input, styles.codeInput, { backgroundColor: t.input, borderColor: t.inputBorder, color: t.text }]}
                placeholder="ABC123"
                placeholderTextColor={t.textMuted}
                value={codeInput}
                onChangeText={v => setCodeInput(v.toUpperCase())}
                maxLength={6}
                autoCapitalize="characters"
              />
              <TouchableOpacity style={[styles.bigBtn, { backgroundColor: t.accent }]} onPress={joinRoom} disabled={loading}>
                <Text style={styles.bigBtnTxt}>{loading ? 'Joining…' : '🔗 Join Game'}</Text>
              </TouchableOpacity>
            </>
          )}

          {!!error && <Text style={styles.error}>{error}</Text>}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── WAITING FOR FRIEND ───────────────────────────────────
  if (phase === 'create') {
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: t.bg }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={leaveGame} style={styles.backBtn}>
            <Text style={[styles.backTxt, { color: t.textMuted }]}>✕ Cancel</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: t.text }]}>⚔️ Play vs Friend</Text>
          <View style={{ width: 60 }} />
        </View>
        <View style={styles.centerContent}>
          <Text style={[styles.label, { color: t.textMuted }]}>SHARE THIS CODE</Text>
          <View style={[styles.codeBox, { backgroundColor: t.card, borderColor: t.accent }]}>
            <Text style={[styles.bigCodeTxt, { color: t.accent }]}>{roomCode}</Text>
          </View>
          <Text style={[styles.waitSub, { color: t.textMuted }]}>Waiting for your friend to join…</Text>
        </View>
      </SafeAreaView>
    );
  }

  // ─── LOBBY ────────────────────────────────────────────────
  if (phase === 'lobby') {
    const players = getPlayers();
    const ready = players.length >= 2;
    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: t.bg }]}>
        <View style={styles.header}>
          <TouchableOpacity onPress={leaveGame} style={styles.backBtn}>
            <Text style={[styles.backTxt, { color: t.textMuted }]}>✕ Leave</Text>
          </TouchableOpacity>
          <Text style={[styles.headerTitle, { color: t.text }]}>⚔️ Play vs Friend</Text>
          <View style={{ width: 60 }} />
        </View>
        <View style={styles.centerContent}>
          <Text style={[styles.label, { color: t.textMuted }]}>PLAYERS</Text>
          {players.map((p, i) => (
            <View key={p.id} style={[styles.playerRow, { backgroundColor: t.card, borderColor: p.id === myIdRef.current ? t.accent : t.cardBorder }]}>
              <Text style={styles.playerEmoji}>{i === 0 ? '👑' : '🎮'}</Text>
              <Text style={[styles.playerName, { color: t.text }]}>{p.name}{p.id === myIdRef.current ? ' (You)' : ''}</Text>
              <Text style={{ color: '#2ecc71', fontSize: 16 }}>✓</Text>
            </View>
          ))}
          {!ready && <Text style={[styles.waitSub, { color: t.textMuted, marginTop: 16 }]}>Waiting for opponent…</Text>}
          {isHostRef.current && ready && (
            <TouchableOpacity style={[styles.bigBtn, { backgroundColor: t.accent, marginTop: 32, width: '100%' }]} onPress={startGame}>
              <Text style={styles.bigBtnTxt}>🚀 Start Game!</Text>
              <Text style={styles.bigBtnSub}>{NUM_QUESTIONS} questions · {QUESTION_TIME}s each</Text>
            </TouchableOpacity>
          )}
          {!isHostRef.current && ready && (
            <Text style={[styles.waitSub, { color: t.textMuted, marginTop: 24 }]}>Waiting for host to start…</Text>
          )}
        </View>
      </SafeAreaView>
    );
  }

  // ─── PLAYING ──────────────────────────────────────────────
  if (phase === 'playing') {
    const currentQ = roomData?.currentQ ?? 0;
    const q = getQuestion(currentQ);
    const me = getMe();
    const opponent = getOpponent();
    const answers = roomData?.answers?.[currentQ] || {};
    const myAns = answers[myIdRef.current];
    const oppAns = opponent ? answers[opponent.id] : null;
    const timerPct = (timeLeft / QUESTION_TIME) * 100;
    const timerColor = timeLeft > 10 ? '#2ecc71' : timeLeft > 5 ? '#f5c842' : '#e8457a';

    if (!q) return null;

    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: '#0a0a0f' }]}>
        {/* SCOREBOARD */}
        <View style={styles.scoreboard}>
          <View style={{ flex: 1 }}>
            <Text style={styles.scoreName} numberOfLines={1}>{me?.name || 'You'}</Text>
            <Text style={[styles.scoreNum, { color: t.accent }]}>{me?.score || 0}</Text>
          </View>
          <Text style={styles.vsText}>VS</Text>
          <View style={{ flex: 1, alignItems: 'flex-end' }}>
            <Text style={styles.scoreName} numberOfLines={1}>{opponent?.name || '…'}</Text>
            <Text style={[styles.scoreNum, { color: '#e8457a' }]}>{opponent?.score || 0}</Text>
          </View>
        </View>

        {/* TIMER BAR */}
        <View style={styles.timerTrack}>
          <View style={[styles.timerFill, { width: `${timerPct}%`, backgroundColor: timerColor }]} />
        </View>
        <View style={styles.timerRow}>
          <Text style={[styles.timerTxt, { color: timerColor }]}>{timeLeft}s</Text>
          <Text style={styles.qCounter}>Q{currentQ + 1}/{NUM_QUESTIONS}</Text>
          <TouchableOpacity onPress={leaveGame}>
            <Text style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, fontWeight: '700' }}>✕ Leave</Text>
          </TouchableOpacity>
        </View>

        <ScrollView contentContainerStyle={styles.playContent}>
          <View style={styles.questionCard}>
            <Text style={styles.questionTxt}>{q.question}</Text>
          </View>

          {LETTERS.map(letter => {
            const answered = myAnswer !== null;
            const isMyPick = myAnswer === letter;
            const isCorrect = letter === q.correct;
            let bg = 'rgba(255,215,0,0.05)';
            let border = 'rgba(255,215,0,0.2)';
            if (answered) {
              if (isCorrect) { bg = 'rgba(46,204,113,0.15)'; border = '#2ecc71'; }
              else if (isMyPick) { bg = 'rgba(232,69,122,0.15)'; border = '#e8457a'; }
              else { bg = 'rgba(255,255,255,0.02)'; border = 'rgba(255,255,255,0.05)'; }
            }
            return (
              <TouchableOpacity
                key={letter}
                style={[styles.answerBtn, { backgroundColor: bg, borderColor: border }]}
                onPress={() => handleAnswer(letter)}
                disabled={answered || timeLeft <= 0}
                activeOpacity={0.7}
              >
                <View style={[styles.letterBadge, {
                  backgroundColor: answered && isCorrect ? '#2ecc71' : answered && isMyPick ? '#e8457a' : 'rgba(255,215,0,0.1)'
                }]}>
                  <Text style={styles.letterTxt}>{letter}</Text>
                </View>
                <Text style={[styles.answerTxt, { opacity: answered && !isCorrect && !isMyPick ? 0.3 : 1 }]}>
                  {q.answers[letter]}
                </Text>
              </TouchableOpacity>
            );
          })}

          {myAnswer !== null && (
            <View style={[styles.resultRow, {
              borderColor: myAnswer === q.correct ? 'rgba(46,204,113,0.3)' : 'rgba(232,69,122,0.3)',
              backgroundColor: myAnswer === q.correct ? 'rgba(46,204,113,0.08)' : 'rgba(232,69,122,0.08)',
            }]}>
              <Text style={[styles.resultTxt, { color: myAnswer === q.correct ? '#2ecc71' : '#e8457a' }]}>
                {myAnswer === q.correct ? `✅ Correct! +${myAns?.pts || 0} pts` : '❌ Wrong — no points'}
              </Text>
              <Text style={styles.resultOpp}>
                {oppAns
                  ? (oppAns.correct ? `${opponent?.name || '?'}: ✅ +${oppAns.pts}` : `${opponent?.name || '?'}: ❌`)
                  : `${opponent?.name || '?'}: thinking…`}
              </Text>
            </View>
          )}
        </ScrollView>
      </SafeAreaView>
    );
  }

  // ─── RESULTS ──────────────────────────────────────────────
  if (phase === 'results') {
    const players = getPlayers();
    const winner = players[0];
    const loser = players[1];
    const iWon = winner?.id === myIdRef.current;
    const isDraw = loser && winner.score === loser.score;

    return (
      <SafeAreaView style={[styles.safe, { backgroundColor: t.bg }]}>
        <View style={styles.centerContent}>
          <Text style={{ fontSize: 72, marginBottom: 16 }}>{isDraw ? '🤝' : iWon ? '🏆' : '💪'}</Text>
          <Text style={[styles.resultTitle, { color: t.text }]}>
            {isDraw ? "It's a Draw!" : iWon ? 'You Win! 🎉' : `${winner?.name || '?'} Wins!`}
          </Text>
          {players.map((p, i) => (
            <View key={p.id} style={[styles.playerRow, { backgroundColor: t.card, borderColor: i === 0 && !isDraw ? t.accent : t.cardBorder }]}>
              <Text style={styles.playerEmoji}>{i === 0 ? (isDraw ? '🤝' : '🥇') : '🥈'}</Text>
              <Text style={[styles.playerName, { color: t.text }]}>{p.name}{p.id === myIdRef.current ? ' (You)' : ''}</Text>
              <Text style={[styles.scoreNum, { color: i === 0 ? t.accent : t.textMuted, fontSize: 18 }]}>{p.score} pts</Text>
            </View>
          ))}
          <TouchableOpacity
            style={[styles.bigBtn, { backgroundColor: t.accent, marginTop: 32, width: '100%' }]}
            onPress={() => {
              cleanup();
              if (isHostRef.current && roomCodeRef.current) {
                remove(ref(db, `rooms/${roomCodeRef.current}`)).catch(() => {});
              }
              navigation.goBack();
            }}
          >
            <Text style={styles.bigBtnTxt}>Back to BrainFood 🍕</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return null;
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 16, paddingVertical: 14, borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.08)' },
  backBtn: { width: 60 },
  backTxt: { fontSize: 14, fontWeight: '700' },
  headerTitle: { fontSize: 16, fontWeight: '900', letterSpacing: 0.5 },
  content: { padding: 20, gap: 14 },
  label: { fontSize: 10, fontWeight: '900', letterSpacing: 1.5 },
  input: { borderWidth: 1.5, borderRadius: 14, padding: 14, fontSize: 16, fontWeight: '700' },
  codeInput: { letterSpacing: 6, fontSize: 22, textAlign: 'center' },
  bigBtn: { borderRadius: 16, padding: 18, alignItems: 'center', gap: 4 },
  bigBtnTxt: { fontSize: 17, fontWeight: '900', color: '#1a0533' },
  bigBtnSub: { fontSize: 12, fontWeight: '700', color: 'rgba(26,5,51,0.6)' },
  error: { color: '#e8457a', fontWeight: '700', fontSize: 13, textAlign: 'center' },
  centerContent: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 24 },
  waitSub: { fontSize: 14, fontWeight: '700' },
  codeBox: { borderWidth: 2, borderRadius: 20, paddingHorizontal: 32, paddingVertical: 20, marginVertical: 20 },
  bigCodeTxt: { fontSize: 42, fontWeight: '900', letterSpacing: 10 },
  playerRow: { flexDirection: 'row', alignItems: 'center', gap: 12, borderWidth: 1.5, borderRadius: 14, padding: 14, width: '100%', marginBottom: 8 },
  playerEmoji: { fontSize: 20 },
  playerName: { flex: 1, fontSize: 15, fontWeight: '800' },
  scoreboard: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 12, backgroundColor: '#0a0a0f' },
  scoreName: { fontSize: 13, fontWeight: '800', color: '#fff' },
  scoreNum: { fontSize: 24, fontWeight: '900' },
  vsText: { fontSize: 12, fontWeight: '900', color: 'rgba(255,255,255,0.3)', marginHorizontal: 12 },
  timerTrack: { height: 5, backgroundColor: 'rgba(255,255,255,0.08)' },
  timerFill: { height: '100%' },
  timerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 8, backgroundColor: '#0a0a0f' },
  timerTxt: { fontSize: 14, fontWeight: '900', width: 40 },
  qCounter: { fontSize: 11, color: 'rgba(255,215,0,0.5)', fontWeight: '700' },
  playContent: { padding: 16, paddingBottom: 40, gap: 10 },
  questionCard: { backgroundColor: '#12120a', borderRadius: 18, borderWidth: 1, borderColor: 'rgba(255,215,0,0.25)', padding: 20 },
  questionTxt: { fontSize: 18, fontWeight: '800', color: '#fff', lineHeight: 26 },
  answerBtn: { flexDirection: 'row', alignItems: 'center', gap: 12, padding: 16, borderRadius: 14, borderWidth: 1 },
  letterBadge: { width: 34, height: 34, borderRadius: 10, alignItems: 'center', justifyContent: 'center', flexShrink: 0 },
  letterTxt: { fontSize: 13, fontWeight: '800', color: '#fff' },
  answerTxt: { flex: 1, fontSize: 15, color: '#fff', lineHeight: 22, fontWeight: '500' },
  resultRow: { borderRadius: 14, borderWidth: 1, padding: 14, gap: 6 },
  resultTxt: { fontSize: 15, fontWeight: '800' },
  resultOpp: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.4)' },
  resultTitle: { fontSize: 26, fontWeight: '900', marginBottom: 24, textAlign: 'center' },
});
