import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../ThemeContext';
import { CAT_COLOR, DIFF_LABELS } from '../data';

export default function HistoryScreen() {
  const { theme: t } = useTheme();
  const [tab, setTab] = useState('cards');
  const [history, setHistory] = useState([]);
  const [quizHistory, setQuizHistory] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      setHistory(s.history || []);
    } catch (e) {}
    try {
      const raw = await AsyncStorage.getItem('bf_quiz_history');
      setQuizHistory(raw ? JSON.parse(raw) : []);
    } catch (e) {}
  }

  function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function formatDate(ts) {
    const d = new Date(ts);
    return d.toLocaleDateString([], { day: 'numeric', month: 'short', year: 'numeric' });
  }

  function accuracyColor(pct) {
    if (pct >= 80) return '#2ecc71';
    if (pct >= 60) return '#f5c842';
    return '#e8457a';
  }

  function resultEmoji(pct) {
    if (pct >= 80) return '🏆';
    if (pct >= 60) return '🎯';
    return '💪';
  }

  return (
    <ScrollView style={[styles.bg, { backgroundColor: t.bg }]} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: t.text }]}>📚 History</Text>
      </View>

      {/* TAB TOGGLE */}
      <View style={[styles.tabs, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
        <TouchableOpacity
          style={[styles.tab, tab === 'cards' && { backgroundColor: t.accent }]}
          onPress={() => setTab('cards')}
        >
          <Text style={[styles.tabTxt, { color: tab === 'cards' ? '#1a0533' : t.textMuted }]}>Cards</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, tab === 'quiz' && { backgroundColor: '#8B6914' }]}
          onPress={() => setTab('quiz')}
        >
          <Text style={[styles.tabTxt, { color: tab === 'quiz' ? '#fff' : t.textMuted }]}>{'🍺 Pub Quiz'}</Text>
        </TouchableOpacity>
      </View>

      {/* CARDS HISTORY */}
      {tab === 'cards' && (
        history.length === 0
          ? <Text style={[styles.empty, { color: t.textMuted }]}>No history yet.{'\n'}Start swiping cards on the Learn tab!</Text>
          : history.map((item, i) => {
              const card = item.card;
              const col = CAT_COLOR[card.cat] || '#aaa';
              return (
                <View key={i} style={[styles.card, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
                  <View style={styles.cardTop}>
                    <View style={[styles.badge, { backgroundColor: col + '22' }]}>
                      <Text style={[styles.badgeTxt, { color: col }]}>{card.emoji} {card.subject}</Text>
                    </View>
                    <Text style={[styles.time, { color: t.textMuted }]}>{formatTime(item.ts)}</Text>
                  </View>
                  <Text style={[styles.hook, { color: t.textSub, borderLeftColor: t.cardBorder }]}>"{card.hook}"</Text>
                  <Text style={[styles.fact, { color: t.text }]}>{card.fact}</Text>
                  <Text style={[styles.diff, { color: t.textMuted }]}>{DIFF_LABELS[card.diff]}</Text>
                </View>
              );
            })
      )}

      {/* QUIZ HISTORY */}
      {tab === 'quiz' && (
        quizHistory.length === 0
          ? <Text style={[styles.empty, { color: t.textMuted }]}>No quiz sessions yet.{'\n'}Tap the Pub Quiz Special banner to play!</Text>
          : quizHistory.map((session, i) => (
              <View key={i} style={[styles.quizCard, { backgroundColor: t.card, borderColor: i === 0 ? 'rgba(255,215,0,0.35)' : t.cardBorder }]}>
                <View style={styles.quizTop}>
                  <View style={styles.quizLeft}>
                    <Text style={styles.quizEmoji}>{resultEmoji(session.accuracy)}</Text>
                    <View>
                      <Text style={[styles.quizDate, { color: t.text }]}>{formatDate(session.ts)}</Text>
                      <Text style={[styles.quizTime, { color: t.textMuted }]}>{formatTime(session.ts)}</Text>
                    </View>
                  </View>
                  <View style={[styles.accuracyBadge, { backgroundColor: accuracyColor(session.accuracy) + '22' }]}>
                    <Text style={[styles.accuracyTxt, { color: accuracyColor(session.accuracy) }]}>{session.accuracy}%</Text>
                  </View>
                </View>
                <View style={styles.quizStats}>
                  <View style={styles.quizStat}>
                    <Text style={styles.quizStatNum}>{session.total}</Text>
                    <Text style={[styles.quizStatLbl, { color: t.textMuted }]}>ANSWERED</Text>
                  </View>
                  <View style={styles.quizStat}>
                    <Text style={[styles.quizStatNum, { color: '#2ecc71' }]}>{session.correct}</Text>
                    <Text style={[styles.quizStatLbl, { color: t.textMuted }]}>CORRECT</Text>
                  </View>
                  <View style={styles.quizStat}>
                    <Text style={[styles.quizStatNum, { color: '#e8457a' }]}>{session.wrong}</Text>
                    <Text style={[styles.quizStatLbl, { color: t.textMuted }]}>WRONG</Text>
                  </View>
                </View>
                <View style={[styles.quizBar, { backgroundColor: t.mode === 'dark' ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)' }]}>
                  <View style={[styles.quizBarFill, { width: `${session.accuracy}%`, backgroundColor: accuracyColor(session.accuracy) }]} />
                </View>
              </View>
            ))
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  content: { padding: 16, paddingTop: 56, paddingBottom: 40, gap: 12 },
  header: { marginBottom: 4 },
  title: { fontSize: 24, fontWeight: '900' },
  empty: { textAlign: 'center', fontSize: 14, fontWeight: '700', paddingVertical: 40, lineHeight: 24 },
  tabs: { flexDirection: 'row', borderRadius: 14, borderWidth: 1, padding: 4, marginBottom: 4 },
  tab: { flex: 1, paddingVertical: 9, borderRadius: 10, alignItems: 'center' },
  tabTxt: { fontSize: 13, fontWeight: '800' },
  card: { borderWidth: 1, borderRadius: 16, padding: 14, gap: 6 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { borderRadius: 8, paddingHorizontal: 9, paddingVertical: 3 },
  badgeTxt: { fontSize: 10, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1 },
  time: { fontSize: 10, fontWeight: '700' },
  hook: { fontSize: 12, fontWeight: '700', fontStyle: 'italic', paddingLeft: 8, borderLeftWidth: 2 },
  fact: { fontSize: 14, fontWeight: '700', lineHeight: 22 },
  diff: { fontSize: 10, fontWeight: '700' },
  quizCard: { borderWidth: 1, borderRadius: 16, padding: 16, gap: 12 },
  quizTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  quizLeft: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  quizEmoji: { fontSize: 28 },
  quizDate: { fontSize: 14, fontWeight: '800' },
  quizTime: { fontSize: 11, fontWeight: '600', marginTop: 1 },
  accuracyBadge: { borderRadius: 10, paddingHorizontal: 12, paddingVertical: 5 },
  accuracyTxt: { fontSize: 16, fontWeight: '900' },
  quizStats: { flexDirection: 'row', gap: 0 },
  quizStat: { flex: 1, alignItems: 'center' },
  quizStatNum: { fontSize: 20, fontWeight: '900', color: '#fff' },
  quizStatLbl: { fontSize: 9, fontWeight: '800', letterSpacing: 0.8, marginTop: 2 },
  quizBar: { height: 4, borderRadius: 4, overflow: 'hidden' },
  quizBarFill: { height: '100%', borderRadius: 4 },
});
