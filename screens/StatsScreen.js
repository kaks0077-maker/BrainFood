import AsyncStorage from '@react-native-async-storage/async-storage';
import { useCallback, useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { useTheme } from '../ThemeContext';
export default function StatsScreen() {
  const { theme: t } = useTheme();
  const [cards, setCards] = useState({ streak: 0, bestStreak: 0, seen: 0, favs: 0 });
  const [quiz, setQuiz] = useState(null);

  useFocusEffect(useCallback(() => { load(); }, []));

  async function load() {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      setCards({
        streak: s.dailyStreak || 0,
        bestStreak: s.bestStreak || 0,
        seen: s.seen || 0,
        favs: (s.favs || []).length,
      });
    } catch (e) {}
    try {
      const raw = await AsyncStorage.getItem('bf_quiz_history');
      const hist = raw ? JSON.parse(raw) : [];
      if (hist.length === 0) return;
      const totalQ = hist.reduce((a, b) => a + b.total, 0);
      const correct = hist.reduce((a, b) => a + b.correct, 0);
      const wrong = hist.reduce((a, b) => a + b.wrong, 0);
      const avgAcc = Math.round(hist.reduce((a, b) => a + b.accuracy, 0) / hist.length);
      const bestAcc = Math.max(...hist.map(b => b.accuracy));
      setQuiz({ sessions: hist.length, avgAcc, bestAcc, totalQ, correct, wrong });
    } catch (e) {}
  }

  return (
    <ScrollView
      style={[styles.bg, { backgroundColor: t.bg }]}
      contentContainerStyle={styles.content}
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.header}>
        <Text style={[styles.title, { color: t.text }]}>{'📊 Stats'}</Text>
      </View>

      {/* CARDS SECTION */}
      <Text style={[styles.sectionLabel, { color: t.textMuted }]}>{'🍕 CARDS'}</Text>
      <View style={styles.row}>
        <StatTile emoji="🔥" label="Streak" value={`${cards.streak}d`} accent="#f5a623" t={t} />
        <StatTile emoji="🏆" label="Best Streak" value={`${cards.bestStreak}d`} accent="#f5c842" t={t} />
      </View>
      <View style={styles.row}>
        <StatTile emoji="📚" label="Cards Seen" value={cards.seen} accent={t.accent} t={t} />
        <StatTile emoji="⭐" label="Favourites" value={cards.favs} accent="#f5c842" t={t} />
      </View>

      {/* QUIZ SECTION */}
      <Text style={[styles.sectionLabel, { color: t.textMuted, marginTop: 8 }]}>{'🍺 PUB QUIZ'}</Text>

      {!quiz ? (
        <View style={[styles.emptyQuiz, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
          <Text style={{ fontSize: 32, marginBottom: 8 }}>🍺</Text>
          <Text style={[styles.emptyTxt, { color: t.textMuted }]}>No quiz sessions yet.{'\n'}Tap the Pub Quiz Special banner to play!</Text>
        </View>
      ) : (
        <>
          <View style={styles.row}>
            <StatTile emoji="🎮" label="Sessions" value={quiz.sessions} accent={t.accent} t={t} />
            <StatTile emoji="🎯" label="Avg Accuracy" value={`${quiz.avgAcc}%`} accent={accuracyColor(quiz.avgAcc)} t={t} />
          </View>
          <View style={styles.row}>
            <StatTile emoji="🏆" label="Best Score" value={`${quiz.bestAcc}%`} accent={accuracyColor(quiz.bestAcc)} t={t} />
            <StatTile emoji="❓" label="Total Answered" value={quiz.totalQ} accent="#a78bfa" t={t} />
          </View>

          <View style={[styles.correctWrongCard, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
            <View style={styles.cwItem}>
              <Text style={styles.cwNum}>{'✅'} {quiz.correct}</Text>
              <Text style={[styles.cwLabel, { color: t.textMuted }]}>CORRECT</Text>
            </View>
            <View style={[styles.cwDivider, { backgroundColor: t.cardBorder }]} />
            <View style={styles.cwItem}>
              <Text style={styles.cwNum}>{'❌'} {quiz.wrong}</Text>
              <Text style={[styles.cwLabel, { color: t.textMuted }]}>WRONG</Text>
            </View>
            <View style={[styles.cwDivider, { backgroundColor: t.cardBorder }]} />
            <View style={styles.cwItem}>
              <Text style={[styles.cwNum, { color: accuracyColor(quiz.avgAcc) }]}>
                {quiz.totalQ > 0 ? Math.round((quiz.correct / quiz.totalQ) * 100) : 0}%
              </Text>
              <Text style={[styles.cwLabel, { color: t.textMuted }]}>OVERALL</Text>
            </View>
          </View>
        </>
      )}
    </ScrollView>
  );
}

function accuracyColor(pct) {
  if (pct >= 80) return '#2ecc71';
  if (pct >= 60) return '#f5c842';
  return '#e8457a';
}

function StatTile({ emoji, label, value, accent, t }) {
  return (
    <View style={[styles.tile, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
      <Text style={styles.tileEmoji}>{emoji}</Text>
      <Text style={[styles.tileValue, { color: accent }]}>{value}</Text>
      <Text style={[styles.tileLabel, { color: t.textMuted }]}>{label}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  content: { padding: 16, paddingTop: 56, paddingBottom: 40, gap: 10 },
  header: { marginBottom: 4 },
  title: { fontSize: 24, fontWeight: '900' },
  sectionLabel: { fontSize: 10, fontWeight: '800', letterSpacing: 1.5, marginBottom: 2 },
  row: { flexDirection: 'row', gap: 10 },
  tile: { flex: 1, borderRadius: 16, borderWidth: 1, padding: 16, alignItems: 'center', gap: 4 },
  tileEmoji: { fontSize: 24 },
  tileValue: { fontSize: 26, fontWeight: '900' },
  tileLabel: { fontSize: 10, fontWeight: '800', letterSpacing: 0.8 },
  emptyQuiz: { borderRadius: 16, borderWidth: 1, padding: 28, alignItems: 'center' },
  emptyTxt: { fontSize: 13, fontWeight: '700', textAlign: 'center', lineHeight: 22 },
  correctWrongCard: { borderRadius: 16, borderWidth: 1, flexDirection: 'row', overflow: 'hidden' },
  cwItem: { flex: 1, alignItems: 'center', paddingVertical: 16, gap: 4 },
  cwNum: { fontSize: 18, fontWeight: '900', color: '#fff' },
  cwLabel: { fontSize: 9, fontWeight: '800', letterSpacing: 0.8 },
  cwDivider: { width: 1 },
});
