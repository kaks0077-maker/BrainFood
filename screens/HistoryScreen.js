import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CAT_COLOR, DIFF_LABELS } from '../data';

export default function HistoryScreen() {
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
    <ScrollView style={styles.bg} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.title}>📚 History</Text>
        <Text style={styles.sub}>Cards you've already seen</Text>
      </View>

      {history.length === 0 ? (
        <Text style={styles.empty}>No history yet.{'\n'}Start swiping cards on the Learn tab!</Text>
      ) : (
        history.map((item, i) => {
          const card = item.card;
          const col = CAT_COLOR[card.cat] || '#aaa';
          return (
            <View key={i} style={styles.card}>
              <View style={styles.cardTop}>
                <View style={[styles.badge, { backgroundColor: col + '22' }]}>
                  <Text style={[styles.badgeTxt, { color: col }]}>{card.emoji} {card.subject}</Text>
                </View>
                <Text style={styles.time}>{formatTime(item.ts)}</Text>
              </View>
              <Text style={styles.hook}>"{card.hook}"</Text>
              <Text style={styles.fact}>{card.fact}</Text>
              <Text style={styles.diff}>{DIFF_LABELS[card.diff]}</Text>
            </View>
          );
        })
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: '#0d1117' },
  content: { padding: 16, paddingTop: 56, paddingBottom: 40, gap: 12 },
  header: { marginBottom: 4 },
  title: { fontSize: 24, fontWeight: '900', color: '#fff' },
  sub: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.28)', marginTop: 3 },
  empty: { textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: 14, fontWeight: '700', paddingVertical: 40, lineHeight: 24 },
  card: { backgroundColor: 'rgba(255,255,255,0.04)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)', borderRadius: 16, padding: 14, gap: 6 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { borderRadius: 8, paddingHorizontal: 9, paddingVertical: 3 },
  badgeTxt: { fontSize: 10, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1 },
  time: { fontSize: 10, color: 'rgba(255,255,255,0.3)', fontWeight: '700' },
  hook: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic', paddingLeft: 8, borderLeftWidth: 2, borderLeftColor: 'rgba(255,255,255,0.12)' },
  fact: { fontSize: 14, fontWeight: '700', color: 'rgba(255,255,255,0.86)', lineHeight: 22 },
  diff: { fontSize: 10, color: 'rgba(255,255,255,0.2)', fontWeight: '700' },
});
