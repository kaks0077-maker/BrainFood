import { useEffect, useRef, useState } from 'react';
import {
  Animated, ScrollView, StyleSheet,
  Text, TouchableOpacity, useWindowDimensions, View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SLIDES = [
  {
    emoji: '⚡',
    title: 'Welcome to Fact Fight',
    sub: 'Bite-sized knowledge that actually sticks. One fascinating fact at a time.',
    accent: '#ffd93d',
  },
  {
    emoji: '🧠',
    title: 'Endless Things to Know',
    sub: 'Science, history, psychology, economics, trivia and more — all in your pocket.',
    accent: '#7bed9f',
  },
  {
    emoji: '🔥',
    title: 'Build a Streak',
    sub: 'Open the app every day to keep your streak alive. Consistency beats cramming.',
    accent: '#ff6b6b',
  },
  {
    emoji: '🔔',
    title: 'Daily Reminder',
    sub: "When should we nudge you? Scroll to pick a time.",
    accent: '#a29bfe',
    isNotif: true,
  },
];

const HOURS = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
const PERIODS = ['AM', 'PM'];
const ITEM_H = 54;

function toHour24(hourIdx, periodIdx) {
  if (periodIdx === 0) return hourIdx === 0 ? 0 : hourIdx;
  return hourIdx === 0 ? 12 : hourIdx + 12;
}

function WheelPicker({ items, selectedIndex, onSelect, accent, width: w }) {
  const ref = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      ref.current?.scrollTo({ y: selectedIndex * ITEM_H, animated: false });
    }, 80);
    return () => clearTimeout(t);
  }, []);

  const onScrollEnd = (e) => {
    const idx = Math.max(0, Math.min(Math.round(e.nativeEvent.contentOffset.y / ITEM_H), items.length - 1));
    onSelect(idx);
  };

  return (
    <View style={{ width: w, height: ITEM_H * 5, overflow: 'hidden' }}>
      <View pointerEvents="none" style={[styles.highlight, { borderColor: accent, backgroundColor: accent + '18', top: ITEM_H * 2 }]} />
      <ScrollView
        ref={ref}
        showsVerticalScrollIndicator={false}
        snapToInterval={ITEM_H}
        decelerationRate="fast"
        onMomentumScrollEnd={onScrollEnd}
        onScrollEndDrag={onScrollEnd}
        contentContainerStyle={{ paddingVertical: ITEM_H * 2 }}
      >
        {items.map((item, i) => (
          <View key={i} style={{ height: ITEM_H, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{
              fontSize: i === selectedIndex ? 28 : 20,
              fontWeight: i === selectedIndex ? '900' : '400',
              color: i === selectedIndex ? '#fff' : 'rgba(255,255,255,0.2)',
            }}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default function OnboardingScreen({ onDone }) {
  const { width } = useWindowDimensions();
  const [page, setPage] = useState(0);
  const [hourIdx, setHourIdx] = useState(9);
  const [periodIdx, setPeriodIdx] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(0)).current;

  const slide = SLIDES[page];
  const isLast = page === SLIDES.length - 1;

  const goNext = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, { toValue: 0, duration: 200, useNativeDriver: true }),
      Animated.timing(slideAnim, { toValue: -30, duration: 200, useNativeDriver: true }),
    ]).start(() => {
      if (isLast) {
        onDone(toHour24(hourIdx, periodIdx));
        return;
      }
      setPage(p => p + 1);
      slideAnim.setValue(30);
      Animated.parallel([
        Animated.timing(fadeAnim, { toValue: 1, duration: 250, useNativeDriver: true }),
        Animated.timing(slideAnim, { toValue: 0, duration: 250, useNativeDriver: true }),
      ]).start();
    });
  };

  const skipNotif = () => onDone(null);

  const pickerW = (width - 56) * 0.4;

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <View style={styles.dots}>
          {SLIDES.map((_, i) => (
            <View key={i} style={[styles.dot, i === page && { backgroundColor: slide.accent, width: 20 }]} />
          ))}
        </View>

        <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <Text style={styles.emoji}>{slide.emoji}</Text>
          <Text style={[styles.title, { color: slide.accent }]}>{slide.title}</Text>
          <Text style={styles.sub}>{slide.sub}</Text>

          {slide.isNotif && (
            <View style={styles.pickerRow}>
              <WheelPicker
                items={HOURS}
                selectedIndex={hourIdx}
                onSelect={setHourIdx}
                accent={slide.accent}
                width={pickerW}
              />
              <View style={[styles.pickerDivider, { backgroundColor: 'rgba(255,255,255,0.08)' }]} />
              <WheelPicker
                items={PERIODS}
                selectedIndex={periodIdx}
                onSelect={setPeriodIdx}
                accent={slide.accent}
                width={pickerW}
              />
            </View>
          )}
        </Animated.View>

        <View style={styles.footer}>
          <TouchableOpacity style={[styles.btn, { backgroundColor: slide.accent }]} onPress={goNext}>
            <Text style={styles.btnTxt}>{isLast ? "LET'S GO 🚀" : 'NEXT →'}</Text>
          </TouchableOpacity>
          {slide.isNotif && (
            <TouchableOpacity onPress={skipNotif} style={styles.skipBtn}>
              <Text style={styles.skipTxt}>Don't remind me</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: '#0d1117' },
  container: { flex: 1, paddingHorizontal: 28, paddingTop: 20, justifyContent: 'space-between' },
  dots: { flexDirection: 'row', gap: 6, justifyContent: 'center', paddingTop: 8 },
  dot: { height: 6, width: 6, borderRadius: 3, backgroundColor: 'rgba(255,255,255,0.2)' },
  content: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emoji: { fontSize: 80, marginBottom: 24 },
  title: { fontSize: 28, fontWeight: '900', textAlign: 'center', marginBottom: 16, letterSpacing: -0.5 },
  sub: { fontSize: 16, color: 'rgba(255,255,255,0.55)', textAlign: 'center', lineHeight: 24, maxWidth: 300 },
  pickerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 32,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.08)',
    overflow: 'hidden',
  },
  pickerDivider: { width: 1, height: ITEM_H * 5 },
  highlight: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: ITEM_H,
    borderTopWidth: 1,
    borderBottomWidth: 1,
  },
  footer: { paddingBottom: 32, gap: 12 },
  btn: { height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center' },
  btnTxt: { fontSize: 16, fontWeight: '900', color: '#000', letterSpacing: 1 },
  skipBtn: { alignItems: 'center', paddingVertical: 8 },
  skipTxt: { color: 'rgba(255,255,255,0.3)', fontSize: 14 },
});
