import { Modal, View, Text, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';

const PLAY_STORE_URL = 'https://play.google.com/store/apps/details?id=com.brainfoodapp.main';

export default function UpdateModal({ visible, message, onDismiss }) {
  const { theme: t } = useContext(ThemeContext);

  const openStore = () => {
    Linking.openURL(PLAY_STORE_URL).catch(() => {});
    onDismiss();
  };

  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onDismiss}>
      <View style={styles.overlay}>
        <View style={[styles.card, { backgroundColor: t.card, borderColor: t.accent }]}>
          <Text style={styles.emoji}>🎉</Text>
          <Text style={[styles.title, { color: t.text }]}>New Update Available!</Text>
          <Text style={[styles.message, { color: t.textMuted }]}>{message}</Text>
          <Text style={[styles.sub, { color: t.textMuted }]}>
            Update on Google Play to get all the new content.
          </Text>
          <TouchableOpacity style={[styles.btn, { backgroundColor: t.accent }]} onPress={openStore}>
            <Text style={styles.btnTxt}>Update Now</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.later} onPress={onDismiss}>
            <Text style={[styles.laterTxt, { color: t.textMuted }]}>Maybe Later</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  card: {
    width: '100%',
    borderRadius: 20,
    borderWidth: 1.5,
    padding: 28,
    alignItems: 'center',
  },
  emoji: { fontSize: 48, marginBottom: 12 },
  title: { fontSize: 22, fontWeight: '800', marginBottom: 10, textAlign: 'center' },
  message: { fontSize: 15, textAlign: 'center', marginBottom: 8, fontWeight: '600' },
  sub: { fontSize: 13, textAlign: 'center', marginBottom: 24 },
  btn: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  btnTxt: { color: '#000', fontWeight: '800', fontSize: 16 },
  later: { paddingVertical: 8 },
  laterTxt: { fontSize: 14 },
});
