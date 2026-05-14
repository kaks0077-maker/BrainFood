import React, { useState, useEffect, useCallback } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet,
  StatusBar, Animated, ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import QUIZ_DATA from '../quiz_data.js';

const LETTERS = ['A', 'B', 'C', 'D'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function shuffleAnswers(q) {
  const shuffled = shuffle(LETTERS);
  const newAnswers = {};
  let newCorrect = 'A';
  shuffled.forEach((orig, i) => {
    const dest = LETTERS[i];
    newAnswers[dest] = q.answers[orig];
    if (orig === q.correct) newCorrect = dest;
  });
  return { ...q, answers: newAnswers, correct: newCorrect };
}

function saveSession(correct, wrong) {
  if (correct + wrong === 0) return;
  const total = correct + wrong;
  const accuracy = Math.round((correct / total) * 100);
  const entry = { ts: Date.now(), correct, wrong, total, accuracy };
  AsyncStorage.getItem('bf_quiz_history').then(raw => {
    const hist = raw ? JSON.parse(raw) : [];
    AsyncStorage.setItem('bf_quiz_history', JSON.stringify([entry, ...hist].slice(0, 100)));
  }).catch(() => {});
}

export default function PubQuizScreen({ navigation }) {
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [finished, setFinished] = useState(false);
  const [fadeAnim] = useState(new Animated.Value(1));

  useEffect(() => {
    async function loadQuiz() {
      try {
        const raw = await AsyncStorage.getItem('bf_quiz_seen');
        const seenIds = raw ? JSON.parse(raw) : [];
        const seenSet = new Set(seenIds);
        let available = QUIZ_DATA.filter(q => !seenSet.has(q.id));
        if (available.length === 0) {
          available = QUIZ_DATA;
          await AsyncStorage.setItem('bf_quiz_seen', JSON.stringify([]));
        }
        setQuestions(shuffle(available).map(shuffleAnswers));
      } catch (e) {
        setQuestions(shuffle(QUIZ_DATA).map(shuffleAnswers));
      }
    }
    loadQuiz();
  }, []);

  const q = questions[index];

  const handleAnswer = useCallback((letter) => {
    if (selected !== null) return;
    setSelected(letter);
    if (letter === q.correct) setCorrect(c => c + 1);
    else setWrong(w => w + 1);
    // Persist this question as seen so it doesn't repeat next session
    AsyncStorage.getItem('bf_quiz_seen').then(raw => {
      const seenIds = raw ? JSON.parse(raw) : [];
      if (!seenIds.includes(q.id)) {
        AsyncStorage.setItem('bf_quiz_seen', JSON.stringify([...seenIds, q.id]));
      }
    }).catch(() => {});
  }, [selected, q]);

  const nextQuestion = useCallback(() => {
    Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      setSelected(null);
      if (index + 1 >= questions.length) {
        setFinished(true);
      } else {
        setIndex(i => i + 1);
      }
      Animated.timing(fadeAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  }, [fadeAnim, questions, index]);

  useEffect(() => {
    if (!finished) return;
    saveSession(correct, wrong);
  }, [finished]);

  useEffect(() => {
    const unsub = navigation.addListener('beforeRemove', () => {
      if (!finished) saveSession(correct, wrong);
    });
    return unsub;
  }, [navigation, correct, wrong, finished]);

  const diffColor = (d) => {
    if (d === 'easy') return '#2ecc71';
    if (d === 'medium') return '#f5c842';
    return '#e8457a';
  };

  const getBtnBg = (letter) => {
    if (!selected) return 'rgba(255,215,0,0.05)';
    if (letter === q.correct) return 'rgba(46,204,113,0.15)';
    if (letter === selected) return 'rgba(232,69,122,0.15)';
    return 'rgba(255,255,255,0.02)';
  };

  const getBtnBorder = (letter) => {
    if (!selected) return 'rgba(255,215,0,0.2)';
    if (letter === q.correct) return '#2ecc71';
    if (letter === selected) return '#e8457a';
    return 'rgba(255,255,255,0.05)';
  };

  const getLetterBg = (letter) => {
    if (!selected) return 'rgba(255,215,0,0.1)';
    if (letter === q.correct) return '#2ecc71';
    if (letter === selected) return '#e8457a';
    return 'rgba(255,255,255,0.05)';
  };

  if (!q) return (
    <SafeAreaView style={styles.safe}>
      <Text style={styles.loading}>Loading questions...</Text>
    </SafeAreaView>
  );

  if (finished) {
    const total = correct + wrong;
    const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;
    const emoji = accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🎯' : '💪';
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Text style={styles.backText}>← Back</Text>
          </TouchableOpacity>
          <View style={styles.titleWrap}>
            <Text style={styles.title}>🍺 Pub Quiz</Text>
            <Text style={styles.titleSub}>Special</Text>
          </View>
          <View style={styles.scoreRow}>
            <Text style={styles.scoreCorrect}>✅ {correct}</Text>
            <Text style={styles.scoreWrong}>❌ {wrong}</Text>
          </View>
        </View>
        <View style={styles.finishedWrap}>
          <Text style={styles.finishedEmoji}>{emoji}</Text>
          <Text style={styles.finishedTitle}>You've smashed all our questions!</Text>
          <Text style={styles.finishedScore}>{correct}/{total} correct · {accuracy}% accuracy</Text>
          <View style={styles.finishedDivider} />
          <Text style={styles.finishedTeaser}>{'🍺 Stay tuned — more questions\ncoming soon!'}</Text>
          <TouchableOpacity style={styles.finishedBtn} onPress={() => navigation.goBack()}>
            <Text style={styles.finishedBtnTxt}>Back to BrainFood</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const total = correct + wrong;
  const accuracy = total > 0 ? Math.round((correct / total) * 100) : 0;

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#0a0a0f" />

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>
        <View style={styles.titleWrap}>
          <Text style={styles.title}>🍺 Pub Quiz</Text>
          <Text style={styles.titleSub}>Special</Text>
        </View>
        <View style={styles.scoreRow}>
          <Text style={styles.scoreCorrect}>✅ {correct}</Text>
          <Text style={styles.scoreWrong}>❌ {wrong}</Text>
        </View>
      </View>

      {/* ACCURACY BAR */}
      {total > 0 && (
        <View style={styles.accuracyWrap}>
          <View style={styles.accuracyBar}>
            <View style={[styles.accuracyFill, { width: `${accuracy}%` }]} />
          </View>
          <Text style={styles.accuracyTxt}>{accuracy}% accuracy</Text>
        </View>
      )}

      <Animated.ScrollView
        style={{ opacity: fadeAnim }}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        {/* QUESTION CARD */}
        <View style={styles.card}>
          <View style={styles.cardTop}>
            <View style={[styles.diffBadge, { backgroundColor: diffColor(q.difficulty) + '22' }]}>
              <Text style={[styles.diffText, { color: diffColor(q.difficulty) }]}>
                {q.difficulty.charAt(0).toUpperCase() + q.difficulty.slice(1)}
              </Text>
            </View>
          </View>
          <Text style={styles.question}>{q.question}</Text>
        </View>

        {/* ANSWER BUTTONS */}
        {LETTERS.map(letter => (
          <TouchableOpacity
            key={letter}
            style={[styles.answerBtn, {
              backgroundColor: getBtnBg(letter),
              borderColor: getBtnBorder(letter),
            }]}
            onPress={() => handleAnswer(letter)}
            disabled={!!selected}
            activeOpacity={0.7}
          >
            <View style={[styles.letterBadge, { backgroundColor: getLetterBg(letter) }]}>
              <Text style={styles.letterText}>{letter}</Text>
            </View>
            <Text style={[styles.answerText, { opacity: selected && letter !== q.correct && letter !== selected ? 0.35 : 1 }]}>
              {q.answers[letter]}
            </Text>
            {selected && letter === q.correct && <Text style={styles.checkmark}>✓</Text>}
            {selected && letter === selected && letter !== q.correct && <Text style={styles.cross}>✗</Text>}
          </TouchableOpacity>
        ))}

        {/* RESULT BAR */}
        {selected && (
          <View style={[styles.resultBar, {
            borderColor: selected === q.correct ? 'rgba(46,204,113,0.3)' : 'rgba(232,69,122,0.3)',
            backgroundColor: selected === q.correct ? 'rgba(46,204,113,0.08)' : 'rgba(232,69,122,0.08)',
          }]}>
            <Text style={[styles.resultText, { color: selected === q.correct ? '#2ecc71' : '#e8457a' }]}>
              {selected === q.correct
                ? '✅ Correct! Well done!'
                : `❌ The answer was ${q.correct}: ${q.answers[q.correct]}`}
            </Text>
            <TouchableOpacity style={styles.nextBtn} onPress={nextQuestion}>
              <Text style={styles.nextBtnText}>Next →</Text>
            </TouchableOpacity>
          </View>
        )}

        {/* SCORE CARD after 10 questions */}
        {total > 0 && total % 10 === 0 && selected && (
          <View style={styles.milestone}>
            <Text style={styles.milestoneEmoji}>{accuracy >= 80 ? '🏆' : accuracy >= 60 ? '🎯' : '💪'}</Text>
            <Text style={styles.milestoneTxt}>{total} questions done! {accuracy}% accuracy</Text>
          </View>
        )}

      </Animated.ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#0a0a0f',
  },
  loading: {
    textAlign: 'center',
    marginTop: 100,
    fontSize: 16,
    color: 'gold',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,215,0,0.1)',
    backgroundColor: '#0a0a0f',
  },
  backBtn: { padding: 4 },
  backText: { fontSize: 15, color: 'rgba(255,215,0,0.7)', fontWeight: '600' },
  titleWrap: { alignItems: 'center' },
  title: { fontSize: 16, fontWeight: '900', color: 'gold', letterSpacing: 0.5 },
  titleSub: { fontSize: 10, color: 'rgba(255,215,0,0.5)', fontWeight: '700', letterSpacing: 2, textTransform: 'uppercase' },
  scoreRow: { flexDirection: 'row', gap: 10 },
  scoreCorrect: { fontSize: 15, fontWeight: '800', color: '#2ecc71' },
  scoreWrong: { fontSize: 15, fontWeight: '800', color: '#e8457a' },
  accuracyWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#0d0d14',
  },
  accuracyBar: {
    flex: 1,
    height: 3,
    backgroundColor: 'rgba(255,215,0,0.1)',
    borderRadius: 2,
    overflow: 'hidden',
  },
  accuracyFill: {
    height: '100%',
    backgroundColor: 'gold',
    borderRadius: 2,
  },
  accuracyTxt: {
    fontSize: 11,
    color: 'rgba(255,215,0,0.5)',
    fontWeight: '700',
    width: 80,
    textAlign: 'right',
  },
  content: {
    padding: 16,
    paddingBottom: 40,
    gap: 10,
  },
  card: {
    backgroundColor: '#12120a',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,215,0,0.25)',
    padding: 22,
    marginBottom: 6,
  },
  cardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 14,
  },
  diffBadge: { borderRadius: 100, paddingHorizontal: 12, paddingVertical: 4 },
  diffText: { fontSize: 11, fontWeight: '800', textTransform: 'uppercase', letterSpacing: 0.5 },
  question: {
    fontSize: 20,
    fontWeight: '800',
    color: '#fff',
    lineHeight: 28,
    letterSpacing: -0.3,
  },
  answerBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  letterBadge: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  letterText: { fontSize: 14, fontWeight: '800', color: '#fff' },
  answerText: { flex: 1, fontSize: 15, color: '#fff', lineHeight: 22, fontWeight: '500' },
  checkmark: { fontSize: 18, color: '#2ecc71', fontWeight: '900' },
  cross: { fontSize: 18, color: '#e8457a', fontWeight: '900' },
  resultBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    gap: 12,
    marginTop: 4,
  },
  resultText: { flex: 1, fontSize: 14, fontWeight: '600', lineHeight: 20 },
  nextBtn: {
    backgroundColor: 'gold',
    borderRadius: 100,
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  nextBtnText: { color: '#0a0a0f', fontWeight: '900', fontSize: 14 },
  milestone: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'rgba(255,215,0,0.05)',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255,215,0,0.2)',
    marginTop: 4,
  },
  milestoneEmoji: { fontSize: 36, marginBottom: 8 },
  milestoneTxt: { color: 'gold', fontWeight: '700', fontSize: 14 },
  finishedWrap: { flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 32 },
  finishedEmoji: { fontSize: 72, marginBottom: 16 },
  finishedTitle: { fontSize: 22, fontWeight: '900', color: '#fff', textAlign: 'center', lineHeight: 30, marginBottom: 10 },
  finishedScore: { fontSize: 14, fontWeight: '700', color: 'rgba(255,215,0,0.7)', marginBottom: 24 },
  finishedDivider: { width: 48, height: 2, backgroundColor: 'rgba(255,215,0,0.25)', borderRadius: 1, marginBottom: 24 },
  finishedTeaser: { fontSize: 16, fontWeight: '700', color: 'rgba(255,215,0,0.55)', textAlign: 'center', lineHeight: 26, marginBottom: 36 },
  finishedBtn: { backgroundColor: 'gold', borderRadius: 100, paddingHorizontal: 32, paddingVertical: 14 },
  finishedBtnTxt: { color: '#0a0a0f', fontWeight: '900', fontSize: 15 },
});
