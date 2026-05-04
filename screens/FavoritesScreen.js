import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { useEffect, useState } from 'react';
import { ScrollView, Share, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useTheme } from '../ThemeContext';
import { CARDS, CAT_COLOR, DIFF_LABELS } from '../data';

export default function FavoritesScreen() {
  const { theme: t } = useTheme();
  const [favs, setFavs] = useState([]);
  const [search, setSearch] = useState('');
  const [speaking, setSpeaking] = useState(null);

  useEffect(() => { load(); }, []);

  async function load() {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      setFavs(s.favs || []);
    } catch (e) {}
  }

  async function toggleFav(id) {
    const newFavs = favs.includes(id) ? favs.filter(f => f !== id) : [...favs, id];
    setFavs(newFavs);
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      s.favs = newFavs;
      await AsyncStorage.setItem('bf_state', JSON.stringify(s));
    } catch (e) {}
  }

  async function shareCard(card) {
    await Share.share({ message: `🍕 BrainFood\n\n"${card.hook}"\n\n${card.fact}\n\n${card.tip}` });
  }

  function speakCard(card) {
    if (speaking === card.id) { Speech.stop(); setSpeaking(null); return; }
    Speech.stop();
    Speech.speak(`${card.hook}. ${card.fact}. Memory tip: ${card.tip.replace('🧠 ', '')}`, {
      rate: 0.88, pitch: 1.0, language: 'en-US',
      onDone: () => setSpeaking(null),
      onError: () => setSpeaking(null),
    });
    setSpeaking(card.id);
  }

  const favCards = CARDS.filter(c =>
    favs.includes(c.id) &&
    (!search ||
      c.fact.toLowerCase().includes(search.toLowerCase()) ||
      c.hook.toLowerCase().includes(search.toLowerCase()) ||
      c.subject.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <ScrollView style={[styles.bg, { backgroundColor: t.bg }]} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={[styles.title, { color: t.text }]}>⭐ Favorites</Text>
        <Text style={[styles.sub, { color: t.textMuted }]}>Your personal knowledge menu</Text>
      </View>

      <TextInput
        style={[styles.input, { backgroundColor: t.input, borderColor: t.inputBorder, color: t.text }]}
        placeholder="Search favorites…"
        placeholderTextColor={t.textMuted}
        value={search}
        onChangeText={setSearch}
      />

      {favCards.length === 0 ? (
        <Text style={[styles.empty, { color: t.textMuted }]}>
          {search ? 'No matches found.' : 'No favorites yet.\nTap ☆ on any card to save it! ⭐'}
        </Text>
      ) : (
        favCards.map((card) => {
          const col = CAT_COLOR[card.cat] || '#aaa';
          return (
            <View key={card.id} style={[styles.card, { backgroundColor: t.card, borderColor: t.cardBorder }]}>
              <View style={styles.cardTop}>
                <View style={[styles.badge, { backgroundColor: col + '22' }]}>
                  <Text style={[styles.badgeTxt, { color: col }]}>{card.emoji} {card.subject}</Text>
                </View>
                <View style={styles.cardTopRight}>
                  <Text style={[styles.diff, { color: t.textMuted }]}>{DIFF_LABELS[card.diff]}</Text>
                  <TouchableOpacity onPress={() => toggleFav(card.id)}>
                    <Text style={styles.favBtn}>⭐</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <Text style={[styles.hook, { color: t.textSub, borderLeftColor: t.cardBorder }]}>"{card.hook}"</Text>
              <Text style={[styles.fact, { color: t.text }]}>{card.fact}</Text>
              <Text style={[styles.tip, { color: t.textMuted }]}>{card.tip}</Text>
              <View style={styles.cardFoot}>
                <Text style={[styles.footLeft, { color: t.textMuted }]}>{DIFF_LABELS[card.diff]}</Text>
                <View style={styles.footBtns}>
                  <TouchableOpacity onPress={() => shareCard(card)} style={[styles.footBtn, { backgroundColor: t.input }]}>
                    <Text style={styles.footBtnTxt}>📤</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => speakCard(card)} style={[styles.footBtn, { backgroundColor: t.input }]}>
                    <Text style={styles.footBtnTxt}>{speaking === card.id ? '⏹️' : '🔊'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
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
  input: { borderWidth: 1.5, borderRadius: 13, padding: 10, fontSize: 14, fontWeight: '600' },
  empty: { textAlign: 'center', fontSize: 14, fontWeight: '700', paddingVertical: 40, lineHeight: 24 },
  card: { borderWidth: 1, borderRadius: 16, padding: 14, gap: 6 },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  badge: { borderRadius: 8, paddingHorizontal: 9, paddingVertical: 3 },
  badgeTxt: { fontSize: 10, fontWeight: '900', textTransform: 'uppercase', letterSpacing: 1 },
  cardTopRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  diff: { fontSize: 10 },
  favBtn: { fontSize: 16 },
  hook: { fontSize: 12, fontWeight: '700', fontStyle: 'italic', paddingLeft: 8, borderLeftWidth: 2 },
  fact: { fontSize: 14, fontWeight: '700', lineHeight: 22 },
  tip: { fontSize: 12, fontWeight: '600', lineHeight: 18 },
  cardFoot: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 4 },
  footLeft: { fontSize: 10, fontWeight: '700' },
  footBtns: { flexDirection: 'row', gap: 6 },
  footBtn: { borderRadius: 14, width: 30, height: 30, alignItems: 'center', justifyContent: 'center' },
  footBtnTxt: { fontSize: 14 },
});

