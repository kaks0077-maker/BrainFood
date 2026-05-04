import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useTheme } from '../ThemeContext';
import { CAT_COLOR, DIFF_LABELS } from '../data';

export default function HistoryScreen() {
  const { theme: t } = useTheme();
  const [history, setHistory] = useState([]);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      setHistory(s.history || []);
    } catch (e) {}
  }

  function formatTime(ts) {
    const d = new Date(ts);
    return d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  return (
    <ScrollView style={[styles.bg, { backgroundColor: t.bg }]} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: t.text }]}>📚 History</Text>
        <Text style={[styles.sub, { color: t.textMuted }]}>Cards you've already seen</Text>
      </View>

      {history.length === 0 ? (
        <Text style={[styles.empty, { color: t.textMuted }]}>No history yet.{'\n'}Start swiping cards on the Learn tab!</Text>
      ) : (
        history.map((item, i) => {
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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1 },
  content: { padding: 16, paddingTop: 56, paddingBottom: 40, gap: 12 },
  header: { marginBottom: 4 },
  title: { fontSize: 24, fontWeight: '900' },
  sub: { fontSize: 12, fontWeight: '700', marginTop: 3 },
  empty: { textAlign: 'center', fontSize: 14, fontWeight: '700', paddingVertical: 40, lineHeight: 24 },
  card: { borderWidth: 1, borderRadius: 16, padding: 14, gap: 6 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { borderRadius: 8, paddingHorizontal: 9, paddingVertical: 3 },
  badgeTxt: { fontSize: 10, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1 },
  time: { fontSize: 10, fontWeight: '700' },
  hook: { fontSize: 12, fontWeight: '700', fontStyle: 'italic', paddingLeft: 8, borderLeftWidth: 2 },
  fact: { fontSize: 14, fontWeight: '700', lineHeight: 22 },
  diff: { fontSize: 10, fontWeight: '700' },
});

