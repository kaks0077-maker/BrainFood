import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    AppState,
    Modal,
    ScrollView,
    Share,
    StyleSheet, Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { useTheme } from '../ThemeContext';
import ViewShot from 'react-native-view-shot';
import { CARDS, DIFF_LABELS, GRADS, WOTD_LIST } from '../data';


function getStreakEmoji(streak) {
  if (streak >= 365) return '🏆';
  if (streak >= 100) return '💎';
  if (streak >= 30) return '🔥';
  if (streak >= 7) return '⚡';
  if (streak >= 3) return '✨';
  return '🌱';
}

function getStreakMessage(streak) {
  if (streak === 1) return "Welcome back! Day 1 — every streak starts here.";
  if (streak < 3) return `Day ${streak} — you're building a habit!`;
  if (streak < 7) return `${streak} days straight! Keep it up!`;
  if (streak < 14) return `${streak} days! You're on fire! 🔥`;
  if (streak < 30) return `${streak} days! Impressive consistency!`;
  if (streak < 100) return `${streak} days! You're a BrainFood legend!`;
  return `${streak} days! Absolutely unstoppable! 🏆`;
}

export default function LearnScreen({ navigation }) {
  const { theme, toggleTheme } = useTheme();
  const [card, setCard] = useState(null);
  const [cat, setCat] = useState('all');
  const [seen, setSeen] = useState(0);
  const [streak, setStreak] = useState(0);
  const [bestStreak, setBestStreak] = useState(0);
  const [favs, setFavs] = useState([]);
  const [history, setHistory] = useState([]);
  const [usedIds, setUsedIds] = useState([]);
  const [gradIdx, setGradIdx] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [apSpeed, setApSpeed] = useState(10);
  const [apCountdown, setApCountdown] = useState(0);
  const [streakModal, setStreakModal] = useState(false);
  const [todayStreak, setTodayStreak] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const modalScale = useRef(new Animated.Value(0.7)).current;
  const modalOpacity = useRef(new Animated.Value(0)).current;
  const apInterval = useRef(null);
  const shareRef = useRef(null);
  const isInitialized = useRef(false);
  const wotd = WOTD_LIST[Math.floor(Date.now() / 86400000) % WOTD_LIST.length];

  useEffect(() => {
    loadState();
    const sub = AppState.addEventListener('change', (nextState) => {
      if (nextState === 'active' && isInitialized.current) checkDailyStreak();
    });
    return () => sub.remove();
  }, []);
  useEffect(() => { if (autoplay && card) startAutoplay(); else stopAutoplay(); }, [autoplay]);

  function getTodayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  }

  function getYesterdayKey() {
    const d = new Date();
    d.setDate(d.getDate() - 1);
    return `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
  }

  function showStreakPopup(streakVal) {
    setTodayStreak(streakVal);
    setStreakModal(true);
    modalScale.setValue(0.7);
    modalOpacity.setValue(0);
    Animated.parallel([
      Animated.spring(modalScale, { toValue: 1, useNativeDriver: true, tension: 80, friction: 8 }),
      Animated.timing(modalOpacity, { toValue: 1, duration: 200, useNativeDriver: true }),
    ]).start();
  }

  function closeStreakModal() {
    Animated.parallel([
      Animated.timing(modalScale, { toValue: 0.8, duration: 150, useNativeDriver: true }),
      Animated.timing(modalOpacity, { toValue: 0, duration: 150, useNativeDriver: true }),
    ]).start(() => setStreakModal(false));
  }

  async function loadState() {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};

      const todayKey = getTodayKey();
      const yesterdayKey = getYesterdayKey();
      const lastLogin = s.lastLoginDay || null;
      let dailyStreak = s.dailyStreak || 0;
      let best = s.bestStreak || 0;
      let newDay = false;

      if (lastLogin !== todayKey) {
        newDay = true;
        if (lastLogin === yesterdayKey) {
          dailyStreak += 1;
        } else {
          dailyStreak = 1;
        }
        if (dailyStreak > best) best = dailyStreak;
      }

      setStreak(dailyStreak);
      setBestStreak(best);
      setSeen(s.seen || 0);
      setFavs(s.favs || []);
      setHistory(s.history || []);
      setGradIdx(s.gradIdx || 0);

      const usedArr = s.usedIds || [];
      const picked = pickCard(usedArr, 'all');
      // Immediately mark displayed card as seen so it won't repeat if app is closed
      const newUsed = picked && !usedArr.includes(picked.id) ? [...usedArr, picked.id] : usedArr;
      setUsedIds(newUsed);

      await AsyncStorage.setItem('bf_state', JSON.stringify({
        ...s,
        lastLoginDay: todayKey,
        dailyStreak,
        bestStreak: best,
        usedIds: newUsed,
      }));

      isInitialized.current = true;
      if (newDay) setTimeout(() => showStreakPopup(dailyStreak), 800);
    } catch (e) { pickCard([], 'all'); isInitialized.current = true; }
  }

  async function checkDailyStreak() {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      const todayKey = getTodayKey();
      const yesterdayKey = getYesterdayKey();
      const lastLogin = s.lastLoginDay || null;
      if (lastLogin === todayKey) return;

      let dailyStreak = s.dailyStreak || 0;
      let best = s.bestStreak || 0;
      if (lastLogin === yesterdayKey) {
        dailyStreak += 1;
      } else {
        dailyStreak = 1;
      }
      if (dailyStreak > best) best = dailyStreak;

      await AsyncStorage.setItem('bf_state', JSON.stringify({ ...s, lastLoginDay: todayKey, dailyStreak, bestStreak: best }));
      setStreak(dailyStreak);
      setBestStreak(best);
      showStreakPopup(dailyStreak);
    } catch (e) {}
  }

  async function saveState(updates) {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      await AsyncStorage.setItem('bf_state', JSON.stringify({ ...s, ...updates }));
    } catch (e) {}
  }

  function getPool(c) {
    return c === 'pub' ? CARDS.filter(x => x.cat === 'pub') : CARDS.filter(x => x.cat !== 'pub');
  }

  function pickCard(used, c) {
    const pool = getPool(c);
    let avail = pool.filter(x => !used.includes(x.id));
    if (!avail.length) avail = pool;
    const picked = avail[Math.floor(Math.random() * avail.length)];
    setCard(picked);
    return picked;
  }

  function nextCard() {
    Speech.stop();
    setSpeaking(false);
    clearInterval(apInterval.current);
    setApCountdown(0);
    Animated.sequence([
      Animated.timing(fadeAnim, { toValue: 0, duration: 150, useNativeDriver: true }),
      Animated.timing(fadeAnim, { toValue: 1, duration: 300, useNativeDriver: true }),
    ]).start();
    const newUsed = [...usedIds];
    if (card && !newUsed.includes(card.id)) newUsed.push(card.id);
    const newSeen = seen + 1;
    const newGrad = gradIdx + 1;
    const picked = pickCard(newUsed, cat);
    // Immediately mark the newly displayed card as seen too
    const finalUsed = picked && !newUsed.includes(picked.id) ? [...newUsed, picked.id] : newUsed;
    setUsedIds(finalUsed);
    setSeen(newSeen);
    setGradIdx(newGrad);
    const newHist = [{ card: picked, ts: Date.now() }, ...history].slice(0, 200);
    setHistory(newHist);
    saveState({ usedIds: finalUsed, seen: newSeen, gradIdx: newGrad, history: newHist });
    if (autoplay) setTimeout(() => startAutoplay(), 400);
  }

  function changeCat(c) {
    setCat(c);
    Speech.stop();
    setSpeaking(false);
    stopAutoplay();
    const picked = pickCard(usedIds, c);
    if (picked && !usedIds.includes(picked.id)) {
      const newUsed = [...usedIds, picked.id];
      setUsedIds(newUsed);
      saveState({ usedIds: newUsed });
    }
  }

  function toggleFav() {
    if (!card) return;
    const newFavs = favs.includes(card.id) ? favs.filter(f => f !== card.id) : [...favs, card.id];
    setFavs(newFavs);
    saveState({ favs: newFavs });
  }

  async function shareCard() {
    if (!card) return;
    try {
      const uri = await shareRef.current.capture();
      await Share.share({ url: uri, message: '🍕 BrainFood — Feed your brain!' });
    } catch (e) {
      // Fallback to text share
      await Share.share({ message: `🍕 BrainFood\n\n${card.fact}\n\nbrainfood.app` });
    }
  }

  function speakCard() {
    if (!card) return;
    if (speaking) { Speech.stop(); setSpeaking(false); return; }
    Speech.speak(card.fact, {
      rate: 0.88, pitch: 1.0, language: 'en-US',
      onDone: () => setSpeaking(false),
      onError: () => setSpeaking(false),
    });
    setSpeaking(true);
  }

  function startAutoplay() {
    if (!card) return;
    Speech.stop();
    clearInterval(apInterval.current);
    Speech.speak(card.fact, {
      rate: 0.88, pitch: 1.0, language: 'en-US',
      onDone: () => {
        let secs = apSpeed;
        setApCountdown(secs);
        apInterval.current = setInterval(() => {
          secs--;
          setApCountdown(secs);
          if (secs <= 0) { clearInterval(apInterval.current); nextCard(); }
        }, 1000);
      },
      onError: () => {},
    });
  }

  function stopAutoplay() {
    Speech.stop();
    clearInterval(apInterval.current);
    setApCountdown(0);
  }

  const pool = getPool(cat);
  const seenInCat = pool.filter(c => usedIds.includes(c.id)).length;
  const pct = pool.length ? Math.round((seenInCat / pool.length) * 100) : 0;
  const grad = card?.cat === 'pub' ? '#8B6914' : (GRADS[gradIdx % GRADS.length] || '#4d96ff');
  const t = theme;


  const cardColor = card?.cat === 'pub' ? '#8B6914' : (GRADS[gradIdx % GRADS.length] || '#4d96ff');

  const ShareCardView = () => (
    <ViewShot ref={shareRef} options={{ format: 'png', quality: 1.0 }} style={{ position: 'absolute', top: -9999, left: -9999 }}>
      <View style={[styles.shareCard, { backgroundColor: t.bg }]}>
        <View style={[styles.shareInner, { backgroundColor: cardColor }]}>
          <View style={styles.shareGlow} />
          <View style={styles.shareRing} />
          <Text style={styles.shareLogo}>Brain<Text style={{ color: '#ffd93d' }}>Food</Text> 🍕</Text>
          {card && <Text style={styles.shareEmoji}>{card.emoji}</Text>}
          {card && <Text style={styles.shareFact}>{card.fact}</Text>}
          <View style={styles.shareFooter}>
            <Text style={styles.shareFooterTxt}>Feed your brain. One card at a time.</Text>
          </View>
        </View>
      </View>
    </ViewShot>
  );

  return (
    <View style={{ flex: 1, backgroundColor: t.bg }}>

      <ShareCardView />

      {/* DAILY STREAK MODAL */}
      <Modal transparent visible={streakModal} animationType="none" onRequestClose={closeStreakModal}>
        <View style={styles.modalOverlay}>
          <Animated.View style={[
            styles.modalBox,
            { backgroundColor: t.card, borderColor: t.accent },
            { transform: [{ scale: modalScale }], opacity: modalOpacity }
          ]}>
            <Text style={styles.modalEmoji}>{getStreakEmoji(todayStreak)}</Text>
            <Text style={[styles.modalStreakNum, { color: t.accent }]}>{todayStreak}</Text>
            <Text style={[styles.modalStreakLabel, { color: t.textMuted }]}>DAY STREAK</Text>
            <Text style={[styles.modalMessage, { color: t.text }]}>{getStreakMessage(todayStreak)}</Text>
            {bestStreak > 1 && (
              <Text style={[styles.modalBest, { color: t.textMuted }]}>🏅 Best streak: {bestStreak} days</Text>
            )}
            <TouchableOpacity style={[styles.modalBtn, { backgroundColor: t.accent }]} onPress={closeStreakModal}>
              <Text style={styles.modalBtnTxt}>Let's go! 🍕</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>

      <ScrollView style={{ flex: 1 }} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

        {/* HERO */}
        <View style={styles.hero}>
          <View style={styles.heroRow}>
            <Text style={[styles.logo, { color: t.text }]}>Brain<Text style={{ color: t.accent }}>Food</Text> 🍕</Text>
            <View style={styles.heroRight}>
              <TouchableOpacity onPress={() => showStreakPopup(streak)} style={[styles.streakBadge, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
                <Text style={styles.streakBadgeTxt}>{getStreakEmoji(streak)} {streak}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={toggleTheme} style={[styles.themeBtn, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
                <Text style={styles.themeBtnTxt}>{t.mode === 'dark' ? '☀️' : '🌙'}</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={[styles.heroSub, { color: t.textMuted }]}>Feed your brain. One card at a time.</Text>
        </View>

        {/* PUB QUIZ SPECIAL BANNER */}
        <TouchableOpacity
          onPress={() => { Speech.stop(); setSpeaking(false); stopAutoplay(); setAutoplay(false); navigation.navigate('PubQuiz'); }}
          style={{ borderRadius: 18, overflow: 'hidden', borderWidth: 1.5, borderColor: 'rgba(255,215,0,0.5)', backgroundColor: '#12120a' }}
          activeOpacity={0.85}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 14, paddingHorizontal: 18 }}>
            <View>
              <Text style={{ color: 'gold', fontWeight: '900', fontSize: 13, letterSpacing: 1.5 }}>{'🍺 PUB QUIZ SPECIAL'}</Text>
              <Text style={{ color: 'rgba(255,215,0,0.6)', fontWeight: '700', fontSize: 11, marginTop: 2 }}>Who Wants to Be a Millionaire style</Text>
            </View>
            <Text style={{ fontSize: 28 }}>🎯</Text>
          </View>
        </TouchableOpacity>

        {/* WORD OF THE DAY */}
        <View style={[styles.wotd, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
          <Text style={[styles.wotdLbl, { color: t.textMuted }]}>{'📖 WORD OF THE DAY'}</Text>
          <Text style={[styles.wotdWord, { color: t.text }]}>{wotd.word}</Text>
          <Text style={[styles.wotdPhon, { color: t.textSub }]}>{wotd.phonetic}</Text>
          <Text style={[styles.wotdDef, { color: t.textSub }]}>{wotd.def}</Text>
          <Text style={[styles.wotdEx, { color: t.textMuted }]}>{wotd.example}</Text>
        </View>

        {/* AUTOPLAY BAR */}
        <View style={[styles.apBar, { backgroundColor: t.card, borderColor: t.cardBorder }, autoplay && { backgroundColor: t.mode === 'dark' ? 'rgba(255,193,7,0.08)' : 'rgba(230,168,0,0.1)', borderColor: 'rgba(255,193,7,0.3)' }]}>
          <View style={{ flex: 1 }}>
            <Text style={[styles.apTitle, { color: t.text }]}>🚗 Hands-Free Mode</Text>
            <Text style={[styles.apSub, { color: t.textMuted }]}>
              {autoplay ? (apCountdown > 0 ? `Next card in ${apCountdown}s…` : 'Reading aloud…') : 'Reads cards aloud automatically'}
            </Text>
          </View>
          <View style={styles.apRight}>
            <View style={styles.speedRow}>
              {[5, 10, 15, 30].map(s => (
                <TouchableOpacity key={s} onPress={() => setApSpeed(s)}
                  style={[styles.spdBtn, { backgroundColor: t.input, borderColor: t.inputBorder }, apSpeed === s && styles.spdBtnOn]}>
                  <Text style={[styles.spdTxt, { color: t.textSub }, apSpeed === s && styles.spdTxtOn]}>{s}s</Text>
                </TouchableOpacity>
              ))}
            </View>
            <Switch
              value={autoplay}
              onValueChange={v => { setAutoplay(v); if (!v) stopAutoplay(); }}
              trackColor={{ false: t.mode === 'dark' ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)', true: '#ffd93d' }}
              thumbColor="#fff"
            />
          </View>
        </View>

        {/* CARD */}
        {card && (
          <Animated.View style={[styles.card, { opacity: fadeAnim, backgroundColor: grad }]}>
            <View style={styles.cardGlow} />
            <View style={styles.cardRing} />
            <View style={styles.cardRing2} />
            <View style={styles.cardTop}>
              <View style={styles.cardTopL}>
                <View style={[styles.badge, card.cat === 'pub' && styles.pubBadge]}>
                  <Text style={[styles.badgeTxt, card.cat === 'pub' && { color: 'gold' }]}>{card.emoji} {card.subject.toUpperCase()}</Text>
                </View>
                <Text style={styles.diff}>{DIFF_LABELS[card.diff]}</Text>
              </View>
              <Text style={styles.cardNum}>#{seen}</Text>
            </View>
            <View style={styles.hookBox}>
              <Text style={styles.hookTxt}>"{card.hook}"</Text>
            </View>
            <Text style={styles.factTxt}>{card.fact}</Text>
            <View style={styles.tipRow}>
              <Text style={styles.tipIcon}>🧠</Text>
              <Text style={styles.tipTxt}>{(card.tip || '').replace('🧠 ', '')}</Text>
            </View>
            <View style={styles.cardBot}>
              <View style={styles.actionRow}>
                <TouchableOpacity onPress={toggleFav} style={[styles.iconBtn, favs.includes(card.id) && styles.iconBtnFav]}>
                  <Text style={styles.iconTxt}>{favs.includes(card.id) ? '⭐' : '☆'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={speakCard} style={[styles.iconBtn, speaking && styles.iconBtnSpeak]}>
                  <Text style={styles.iconTxt}>{speaking ? '⏹️' : '🔊'}</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={shareCard} style={styles.iconBtn}>
                  <Text style={styles.iconTxt}>📤</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Animated.View>
        )}

        {/* NEXT BUTTON */}
        <TouchableOpacity onPress={nextCard} style={[styles.nextBtn, { backgroundColor: t.accent }, autoplay && { opacity: 0.5 }]} disabled={autoplay}>
          <Text style={styles.nextTxt}>Next Card ⚡</Text>
        </TouchableOpacity>
        <Text style={[styles.nextHint, { color: t.textMuted }]}>
          {autoplay ? '🚗 Hands-free on — sit back and listen' : 'One card a day keeps the ignorance away 🏆'}
        </Text>

        {/* STATS */}
        <View style={styles.statsRow}>
          {[['Seen', seen], [`Streak ${getStreakEmoji(streak)}`, streak], ['Saved ⭐', favs.length]].map(([l, v]) => (
            <View key={l} style={[styles.statBox, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
              <Text style={[styles.statNum, { color: t.accent }]}>{v}</Text>
              <Text style={[styles.statLbl, { color: t.textMuted }]}>{l}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  content: { padding: 16, paddingTop: 56, paddingBottom: 40, gap: 14 },
  hero: { marginBottom: 4 },
  heroRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  heroRight: { flexDirection: 'row', gap: 8, alignItems: 'center' },
  logo: { fontSize: 32, fontWeight: '900', letterSpacing: 2 },
  heroSub: { fontSize: 12, fontWeight: '700', marginTop: 4, letterSpacing: 0.8 },
  streakBadge: { borderRadius: 20, borderWidth: 1.5, paddingHorizontal: 10, height: 40, alignItems: 'center', justifyContent: 'center' },
  streakBadgeTxt: { fontSize: 14, fontWeight: '900' },
  themeBtn: { borderRadius: 20, borderWidth: 1.5, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },
  themeBtnTxt: { fontSize: 18 },
  wotd: { borderWidth: 1, borderRadius: 16, padding: 14, gap: 3 },
  wotdLbl: { fontSize: 10, fontWeight: '900', letterSpacing: 1.2 },
  wotdWord: { fontSize: 22, fontWeight: '900' },
  wotdPhon: { fontSize: 12, fontStyle: 'italic' },
  wotdDef: { fontSize: 13, fontWeight: '700', lineHeight: 20, marginTop: 4 },
  wotdEx: { fontSize: 12, fontWeight: '600', fontStyle: 'italic' },
  apBar: { borderWidth: 1, borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 8 },
  apTitle: { fontSize: 13, fontWeight: '900' },
  apSub: { fontSize: 11, fontWeight: '700', marginTop: 2 },
  apRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  speedRow: { flexDirection: 'row', gap: 4 },
  spdBtn: { paddingHorizontal: 6, paddingVertical: 4, borderRadius: 8, borderWidth: 1 },
  spdBtnOn: { backgroundColor: 'rgba(255,193,7,0.2)', borderColor: 'rgba(255,193,7,0.5)' },
  spdTxt: { fontSize: 10, fontWeight: '800' },
  spdTxtOn: { color: '#ffd93d' },
  progWrap: { gap: 5 },
  progTop: { flexDirection: 'row', justifyContent: 'space-between' },
  progLbl: { fontSize: 10, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.8 },
  progPct: { fontSize: 10, fontWeight: '800' },
  progBar: { height: 4, borderRadius: 4, overflow: 'hidden' },
  progFill: { height: '100%', borderRadius: 4 },
  catRow: { flexDirection: 'row', gap: 6, paddingBottom: 4 },
  catBtn: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, borderWidth: 1.5 },
  catTxt: { fontSize: 11, fontWeight: '800' },
  card: { borderRadius: 26, padding: 24, overflow: 'hidden', minHeight: 280, elevation: 20 },
  cardGlow: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 26 },
  cardRing: { position: 'absolute', bottom: -35, right: -35, width: 160, height: 160, borderRadius: 80, backgroundColor: 'rgba(255,255,255,0.07)' },
  cardRing2: { position: 'absolute', bottom: 8, right: 8, width: 90, height: 90, borderRadius: 45, backgroundColor: 'rgba(255,255,255,0.05)' },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  cardTopL: { flexDirection: 'row', alignItems: 'center', gap: 8, flexShrink: 1 },
  badge: { backgroundColor: 'rgba(0,0,0,0.22)', borderRadius: 10, paddingHorizontal: 11, paddingVertical: 4 },
  pubBadge: { backgroundColor: 'rgba(255,215,0,0.2)' },
  badgeTxt: { fontSize: 11, fontWeight: '900', color: 'rgba(255,255,255,0.88)', letterSpacing: 0.9 },
  diff: { fontSize: 11, color: 'rgba(255,255,255,0.7)' },
  cardNum: { fontSize: 11, fontWeight: '700', color: 'rgba(255,255,255,0.38)' },
  hookBox: { backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 12, padding: 10, marginBottom: 12, borderLeftWidth: 3, borderLeftColor: 'rgba(255,255,255,0.25)' },
  hookTxt: { fontSize: 13, fontWeight: '700', color: 'rgba(255,255,255,0.7)', lineHeight: 20, fontStyle: 'italic' },
  factTxt: { fontSize: 16, fontWeight: '800', color: '#fff', lineHeight: 26 },
  tipRow: { flexDirection: 'row', gap: 8, alignItems: 'flex-start', marginTop: 12 },
  tipIcon: { fontSize: 16 },
  tipTxt: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.52)', lineHeight: 19, flex: 1 },
  cardBot: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 18 },
  actionRow: { flexDirection: 'row', gap: 8 },
  iconBtn: { backgroundColor: 'rgba(0,0,0,0.22)', borderRadius: 22, width: 44, height: 44, alignItems: 'center', justifyContent: 'center' },
  iconBtnFav: { backgroundColor: 'rgba(255,200,0,0.22)' },
  iconBtnSpeak: { backgroundColor: 'rgba(32,201,151,0.22)' },
  iconTxt: { fontSize: 18 },
  nextBtn: { borderRadius: 18, padding: 17, alignItems: 'center', elevation: 10 },
  nextTxt: { fontSize: 17, fontWeight: '900', color: '#1a0533', letterSpacing: 1.2 },
  nextHint: { fontSize: 11, fontWeight: '700', textAlign: 'center' },
  statsRow: { flexDirection: 'row', gap: 10 },
  statBox: { flex: 1, borderWidth: 1, borderRadius: 14, padding: 12, alignItems: 'center' },
  statNum: { fontSize: 22, fontWeight: '900' },
  statLbl: { fontSize: 10, textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: '800', marginTop: 2 },
  shareCard: { width: 380, padding: 12, borderRadius: 0 },
  shareInner: { borderRadius: 24, padding: 28, overflow: 'hidden', minHeight: 320, justifyContent: 'space-between' },
  shareGlow: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 24 },
  shareRing: { position: 'absolute', bottom: -40, right: -40, width: 200, height: 200, borderRadius: 100, backgroundColor: 'rgba(255,255,255,0.07)' },
  shareLogo: { fontSize: 18, fontWeight: '900', color: '#fff', letterSpacing: 1.5, marginBottom: 16 },
  shareEmoji: { fontSize: 40, marginBottom: 12 },
  shareFact: { fontSize: 17, fontWeight: '800', color: '#fff', lineHeight: 28, flex: 1 },
  shareFooter: { marginTop: 20, borderTopWidth: 1, borderTopColor: 'rgba(255,255,255,0.2)', paddingTop: 12 },
  shareFooterTxt: { fontSize: 11, color: 'rgba(255,255,255,0.5)', fontWeight: '700' },
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', alignItems: 'center', justifyContent: 'center' },
  modalBox: { width: 300, borderRadius: 28, padding: 32, alignItems: 'center', borderWidth: 2, elevation: 30 },
  modalEmoji: { fontSize: 64, marginBottom: 8 },
  modalStreakNum: { fontSize: 72, fontWeight: '900', lineHeight: 80 },
  modalStreakLabel: { fontSize: 13, fontWeight: '900', letterSpacing: 2, textTransform: 'uppercase', marginBottom: 12 },
  modalMessage: { fontSize: 16, fontWeight: '700', textAlign: 'center', lineHeight: 24, marginBottom: 8 },
  modalBest: { fontSize: 12, fontWeight: '700', marginBottom: 24 },
  modalBtn: { borderRadius: 16, paddingHorizontal: 32, paddingVertical: 14 },
  modalBtnTxt: { fontSize: 16, fontWeight: '900', color: '#1a0533' },
});








