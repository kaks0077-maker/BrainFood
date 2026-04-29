import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Speech from 'expo-speech';
import { useEffect, useRef, useState } from 'react';
import {
    Animated,
    ScrollView,
    Share,
    StyleSheet, Switch,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { CARDS, DIFF_LABELS, GRADS, WOTD_LIST } from '../data';

const CATS = [
  { id: 'all', label: '🌍 All' },
  { id: 'pub', label: '🍺 Pub Quiz' },
  { id: 'science', label: '🔬 Science' },
  { id: 'history', label: '📜 History' },
  { id: 'geo', label: '🗺️ Geography' },
  { id: 'body', label: '🫀 Body' },
  { id: 'grammar', label: '✍️ Grammar' },
  { id: 'psychology', label: '🧠 Psychology' },
  { id: 'economics', label: '💰 Economics' },
  { id: 'inventions', label: '💡 Inventions' },
  { id: 'food', label: '🍕 Food' },
  { id: 'math', label: '🔢 Maths' },
];

export default function LearnScreen() {
  const [card, setCard] = useState(null);
  const [cat, setCat] = useState('all');
  const [seen, setSeen] = useState(0);
  const [streak, setStreak] = useState(0);
  const [favs, setFavs] = useState([]);
  const [history, setHistory] = useState([]);
  const [usedIds, setUsedIds] = useState([]);
  const [gradIdx, setGradIdx] = useState(0);
  const [speaking, setSpeaking] = useState(false);
  const [autoplay, setAutoplay] = useState(false);
  const [apSpeed, setApSpeed] = useState(20);
  const [apCountdown, setApCountdown] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const apInterval = useRef(null);
  const wotd = WOTD_LIST[Math.floor(Date.now() / 86400000) % WOTD_LIST.length];

  useEffect(() => { loadState(); }, []);
  useEffect(() => { if (autoplay && card) startAutoplay(); else stopAutoplay(); }, [autoplay]);

  async function loadState() {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      setSeen(s.seen || 0);
      setStreak(s.streak || 0);
      setFavs(s.favs || []);
      setHistory(s.history || []);
      setUsedIds(s.usedIds || []);
      setGradIdx(s.gradIdx || 0);
      pickCard(s.usedIds || [], 'all');
    } catch (e) { pickCard([], 'all'); }
  }

  async function saveState(updates) {
    try {
      const raw = await AsyncStorage.getItem('bf_state');
      const s = raw ? JSON.parse(raw) : {};
      await AsyncStorage.setItem('bf_state', JSON.stringify({ ...s, ...updates }));
    } catch (e) {}
  }

  function getPool(c) {
    return c === 'all' ? CARDS : CARDS.filter(x => x.cat === c);
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
    if (newUsed.length > 80) newUsed.splice(0, 30);
    const newSeen = seen + 1;
    const newStreak = streak + 1;
    const newGrad = gradIdx + 1;
    setUsedIds(newUsed);
    setSeen(newSeen);
    setStreak(newStreak);
    setGradIdx(newGrad);
    const picked = pickCard(newUsed, cat);
    const newHist = [{ card: picked, ts: Date.now() }, ...history].slice(0, 200);
    setHistory(newHist);
    saveState({ usedIds: newUsed, seen: newSeen, streak: newStreak, gradIdx: newGrad, history: newHist });
    if (autoplay) setTimeout(() => startAutoplay(), 400);
  }

  function changeCat(c) {
    setCat(c);
    Speech.stop();
    setSpeaking(false);
    stopAutoplay();
    pickCard(usedIds, c);
  }

  function toggleFav() {
    if (!card) return;
    const newFavs = favs.includes(card.id) ? favs.filter(f => f !== card.id) : [...favs, card.id];
    setFavs(newFavs);
    saveState({ favs: newFavs });
  }

  async function shareCard() {
    if (!card) return;
    await Share.share({ message: `🍕 BrainFood\n\n"${card.hook}"\n\n${card.fact}\n\n${card.tip}` });
  }

  function speakCard() {
    if (!card) return;
    if (speaking) { Speech.stop(); setSpeaking(false); return; }
    Speech.speak(`${card.hook}. ${card.fact}. Memory tip: ${card.tip.replace('🧠 ', '')}`, {
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
    Speech.speak(`${card.hook}. ${card.fact}. Memory tip: ${card.tip.replace('🧠 ', '')}`, {
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

  return (
    <ScrollView style={styles.bg} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>

      <View style={styles.hero}>
        <Text style={styles.logo}>Brain<Text style={styles.logoY}>Food</Text> 🍕</Text>
        <Text style={styles.heroSub}>Feed your brain. One card at a time.</Text>
      </View>

      <View style={styles.wotd}>
        <Text style={styles.wotdLbl}>📖 Word of the Day</Text>
        <Text style={styles.wotdWord}>{wotd.word}</Text>
        <Text style={styles.wotdPhon}>{wotd.phonetic}</Text>
        <Text style={styles.wotdDef}>{wotd.def}</Text>
        <Text style={styles.wotdEx}>{wotd.example}</Text>
      </View>

      <View style={[styles.apBar, autoplay && styles.apBarOn]}>
        <View style={{ flex: 1 }}>
          <Text style={styles.apTitle}>🚗 Hands-Free Mode</Text>
          <Text style={styles.apSub}>
            {autoplay
              ? (apCountdown > 0 ? `Next card in ${apCountdown}s…` : 'Reading aloud…')
              : 'Reads cards aloud automatically'}
          </Text>
        </View>
        <View style={styles.apRight}>
          <View style={styles.speedRow}>
            {[15, 20, 30, 45].map(s => (
              <TouchableOpacity key={s} onPress={() => setApSpeed(s)}
                style={[styles.spdBtn, apSpeed === s && styles.spdBtnOn]}>
                <Text style={[styles.spdTxt, apSpeed === s && styles.spdTxtOn]}>{s}s</Text>
              </TouchableOpacity>
            ))}
          </View>
          <Switch
            value={autoplay}
            onValueChange={v => { setAutoplay(v); if (!v) stopAutoplay(); }}
            trackColor={{ false: 'rgba(255,255,255,0.15)', true: '#ffd93d' }}
            thumbColor="#fff"
          />
        </View>
      </View>

      <View style={styles.progWrap}>
        <View style={styles.progTop}>
          <Text style={styles.progLbl}>{cat === 'all' ? 'All' : cat} · {seenInCat}/{pool.length}</Text>
          <Text style={styles.progPct}>{pct}%</Text>
        </View>
        <View style={styles.progBar}>
          <View style={[styles.progFill, { width: `${pct}%` }]} />
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.catRow}>
          {CATS.map(c => (
            <TouchableOpacity key={c.id} onPress={() => changeCat(c.id)}
              style={[styles.catBtn, cat === c.id && styles.catBtnOn,
                c.id === 'pub' && styles.catBtnPub,
                c.id === 'pub' && cat === c.id && styles.catBtnPubOn]}>
              <Text style={[styles.catTxt, cat === c.id && styles.catTxtOn,
                c.id === 'pub' && cat === c.id && { color: 'gold' }]}>
                {c.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {card && (
        <Animated.View style={[styles.card, { opacity: fadeAnim, backgroundColor: grad }]}>
          <View style={styles.cardGlow} />
          <View style={styles.cardRing} />
          <View style={styles.cardRing2} />

          <View style={styles.cardTop}>
            <View style={styles.cardTopL}>
              <View style={[styles.badge, card.cat === 'pub' && styles.pubBadge]}>
                <Text style={[styles.badgeTxt, card.cat === 'pub' && { color: 'gold' }]}>
                  {card.emoji} {card.subject}
                </Text>
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
            <Text style={styles.tipTxt}>{card.tip.replace('🧠 ', '')}</Text>
          </View>

          <View style={styles.cardBot}>
            <View style={styles.actionRow}>
              <TouchableOpacity onPress={toggleFav}
                style={[styles.iconBtn, favs.includes(card.id) && styles.iconBtnFav]}>
                <Text style={styles.iconTxt}>{favs.includes(card.id) ? '⭐' : '☆'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={speakCard}
                style={[styles.iconBtn, speaking && styles.iconBtnSpeak]}>
                <Text style={styles.iconTxt}>{speaking ? '⏹️' : '🔊'}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={shareCard} style={styles.iconBtn}>
                <Text style={styles.iconTxt}>📤</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      )}

      <TouchableOpacity onPress={nextCard}
        style={[styles.nextBtn, autoplay && { opacity: 0.5 }]}
        disabled={autoplay}>
        <Text style={styles.nextTxt}>Next Card ⚡</Text>
      </TouchableOpacity>
      <Text style={styles.nextHint}>
        {autoplay ? '🚗 Hands-free on — sit back and listen' : 'One card a day keeps the ignorance away 🏆'}
      </Text>

      <View style={styles.statsRow}>
        {[['Seen', seen], ['Streak 🔥', streak], ['Saved ⭐', favs.length]].map(([l, v]) => (
          <View key={l} style={styles.statBox}>
            <Text style={styles.statNum}>{v}</Text>
            <Text style={styles.statLbl}>{l}</Text>
          </View>
        ))}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  bg: { flex: 1, backgroundColor: '#0d1117' },
  content: { padding: 16, paddingTop: 56, paddingBottom: 40, gap: 14 },
  hero: { alignItems: 'center', marginBottom: 4 },
  logo: { fontSize: 32, fontWeight: '900', color: '#fff', letterSpacing: 2 },
  logoY: { color: '#ffd93d' },
  heroSub: { fontSize: 12, fontWeight: '700', color: 'rgba(255,255,255,0.28)', marginTop: 4, letterSpacing: 0.8 },
  wotd: { backgroundColor: 'rgba(77,150,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 14, gap: 3 },
  wotdLbl: { fontSize: 10, fontWeight: '900', color: 'rgba(255,255,255,0.35)', textTransform: 'uppercase', letterSpacing: 1.2 },
  wotdWord: { fontSize: 22, fontWeight: '900', color: '#fff' },
  wotdPhon: { fontSize: 12, color: 'rgba(255,255,255,0.38)', fontStyle: 'italic' },
  wotdDef: { fontSize: 13, fontWeight: '700', color: 'rgba(255,255,255,0.7)', lineHeight: 20, marginTop: 4 },
  wotdEx: { fontSize: 12, fontWeight: '600', color: 'rgba(255,255,255,0.4)', fontStyle: 'italic' },
  apBar: { backgroundColor: 'rgba(255,255,255,0.04)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', borderRadius: 16, padding: 12, flexDirection: 'row', alignItems: 'center', gap: 8 },
  apBarOn: { backgroundColor: 'rgba(255,193,7,0.08)', borderColor: 'rgba(255,193,7,0.3)' },
  apTitle: { fontSize: 13, fontWeight: '900', color: '#fff' },
  apSub: { fontSize: 11, fontWeight: '700', color: 'rgba(255,255,255,0.3)', marginTop: 2 },
  apRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  speedRow: { flexDirection: 'row', gap: 4 },
  spdBtn: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 8, backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)' },
  spdBtnOn: { backgroundColor: 'rgba(255,193,7,0.2)', borderColor: 'rgba(255,193,7,0.5)' },
  spdTxt: { fontSize: 11, fontWeight: '800', color: 'rgba(255,255,255,0.5)' },
  spdTxtOn: { color: '#ffd93d' },
  progWrap: { gap: 5 },
  progTop: { flexDirection: 'row', justifyContent: 'space-between' },
  progLbl: { fontSize: 10, fontWeight: '800', color: 'rgba(255,255,255,0.28)', textTransform: 'uppercase', letterSpacing: 0.8 },
  progPct: { fontSize: 10, fontWeight: '800', color: '#ffd93d' },
  progBar: { height: 4, backgroundColor: 'rgba(255,255,255,0.08)', borderRadius: 4, overflow: 'hidden' },
  progFill: { height: '100%', backgroundColor: '#ffd93d', borderRadius: 4 },
  catRow: { flexDirection: 'row', gap: 6, paddingBottom: 4 },
  catBtn: { paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgba(255,255,255,0.04)' },
  catBtnOn: { backgroundColor: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.4)' },
  catBtnPub: { borderColor: 'rgba(255,215,0,0.35)' },
  catBtnPubOn: { backgroundColor: 'rgba(255,215,0,0.12)', borderColor: 'gold' },
  catTxt: { fontSize: 11, fontWeight: '800', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase' },
  catTxtOn: { color: '#fff' },
  card: { borderRadius: 26, padding: 24, overflow: 'hidden', minHeight: 280, elevation: 20 },
  cardGlow: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: 26 },
  cardRing: { position: 'absolute', bottom: -35, right: -35, width: 160, height: 160, borderRadius: 80, backgroundColor: 'rgba(255,255,255,0.07)' },
  cardRing2: { position: 'absolute', bottom: 8, right: 8, width: 90, height: 90, borderRadius: 45, backgroundColor: 'rgba(255,255,255,0.05)' },
  cardTop: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 },
  cardTopL: { flexDirection: 'row', alignItems: 'center', gap: 8, flexShrink: 1 },
  badge: { backgroundColor: 'rgba(0,0,0,0.22)', borderRadius: 10, paddingHorizontal: 11, paddingVertical: 4 },
  pubBadge: { backgroundColor: 'rgba(255,215,0,0.2)' },
  badgeTxt: { fontSize: 11, fontWeight: '900', color: 'rgba(255,255,255,0.88)', textTransform: 'uppercase', letterSpacing: 0.9 },
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
  nextBtn: { backgroundColor: '#ffd93d', borderRadius: 18, padding: 17, alignItems: 'center', elevation: 10 },
  nextTxt: { fontSize: 17, fontWeight: '900', color: '#1a0533', letterSpacing: 1.2 },
  nextHint: { fontSize: 11, fontWeight: '700', color: 'rgba(255,255,255,0.22)', textAlign: 'center' },
  statsRow: { flexDirection: 'row', gap: 10 },
  statBox: { flex: 1, backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.08)', borderRadius: 14, padding: 12, alignItems: 'center' },
  statNum: { fontSize: 22, fontWeight: '900', color: '#ffd93d' },
  statLbl: { fontSize: 10, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: 0.5, fontWeight: '800', marginTop: 2 },
});
