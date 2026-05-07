import { useEffect, useRef, useState } from 'react';
import {
  Animated, Dimensions, SafeAreaView, StyleSheet,
  Text, TouchableOpacity, View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

const SLIDES = [
  {
    emoji: '🍕',
    title: 'Welcome to BrainFood',
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
    sub: 'When should we nudge you? Pick a time and we\'ll send a daily reminder.',
    accent: '#a29bfe',
    isNotif: true,
  },
];

const NOTIF_TIMES = [
  { label: '6am', hour: 6 },
  { label: '7am', hour: 7 },
  { label: '8am', hour: 8 },
  { label: '9am', hour: 9 },
  { label: '10am', hour: 10 },
  { label: '11am', hour: 11 },
  { label: '12pm', hour: 12 },
  { label: '1pm', hour: 13 },
  { label: '2pm', hour: 14 },
  { label: '3pm', hour: 15 },
  { label: '4pm', hour: 16 },
  { label: '5pm', hour: 17 },
  { label: '6pm', hour: 18 },
  { label: '7pm', hour: 19 },
  { label: '8pm', hour: 20 },
  { label: '9pm', hour: 21 },
  { label: '10pm', hour: 22 },
];

export default function OnboardingScreen({ onDone }) {
  const [page, setPage] = useState(0);
  const [selectedHour, setSelectedHour] = useState(9);
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
        onDone(selectedHour);
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

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        {/* Dots */}
        <View style={styles.dots}>
          {SLIDES.map((_, i) => (
            <View key={i} style={[styles.dot, i === page && { backgroundColor: slide.accent, width: 20 }]} />
          ))}
        </View>

        {/* Content */}
        <Animated.View style={[styles.content, { opacity: fadeAnim, transform: [{ translateY: slideAnim }] }]}>
          <Text style={styles.emoji}>{slide.emoji}</Text>
          <Text style={[styles.title, { color: slide.accent }]}>{slide.title}</Text>
          <Text style={styles.sub}>{slide.sub}</Text>

          {slide.isNotif && (
            <View style={styles.timeGrid}>
              {NOTIF_TIMES.map(t => (
                <TouchableOpacity
                  key={t.hour}
                  onPress={() => setSelectedHour(t.hour)}
                  style={[styles.timeBtn, selectedHour === t.hour && { backgroundColor: slide.accent }]}
                >
                  <Text style={[styles.timeTxt, selectedHour === t.hour && { color: '#000' }]}>{t.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </Animated.View>

        {/* Buttons */}
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
  timeGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 8, marginTop: 24, justifyContent: 'center' },
  timeBtn: {
    paddingHorizontal: 14, paddingVertical: 10, borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.08)', borderWidth: 1, borderColor: 'rgba(255,255,255,0.12)',
  },
  timeTxt: { fontSize: 14, fontWeight: '700', color: 'rgba(255,255,255,0.7)' },
  footer: { paddingBottom: 32, gap: 12 },
  btn: {
    height: 56, borderRadius: 16, justifyContent: 'center', alignItems: 'center',
  },
  btnTxt: { fontSize: 16, fontWeight: '900', color: '#000', letterSpacing: 1 },
  skipBtn: { alignItems: 'center', paddingVertical: 8 },
  skipTxt: { color: 'rgba(255,255,255,0.3)', fontSize: 14 },
});
