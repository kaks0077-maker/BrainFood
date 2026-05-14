import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useContext, useEffect, useState } from 'react';
import { Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import * as Updates from 'expo-updates';
import Constants from 'expo-constants';
import { ThemeContext, DARK, LIGHT } from './ThemeContext';
import FavoritesScreen from './screens/FavoritesScreen';
import LearnScreen from './screens/LearnScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import PubQuizScreen from './screens/PubQuizScreen';
import StatsScreen from './screens/StatsScreen';
import UpdateModal from './components/UpdateModal';

const VERSION_URL = 'https://raw.githubusercontent.com/kaks0077-maker/BrainFood/main/version.json';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true, shouldPlaySound: true, shouldSetBadge: false,
  }),
});

const NOTIF_MSGS = [
  { title: '🍕 Your BrainFood is ready!', body: 'A fresh fact is waiting for you.' },
  { title: '🧠 Feed your brain!', body: 'One new thing to learn today.' },
  { title: '⚡ Quick brain boost?', body: 'Only takes 30 seconds.' },
  { title: '🌟 Did you know...', body: 'Open BrainFood to find out!' },
  { title: '🔥 Keep your streak alive!', body: 'Open BrainFood before midnight.' },
];

async function scheduleDailyNotification(hour = 9) {
  try {
    await Notifications.cancelAllScheduledNotificationsAsync();
    const msg = NOTIF_MSGS[Math.floor(Math.random() * NOTIF_MSGS.length)];
    await Notifications.scheduleNotificationAsync({
      content: { title: msg.title, body: msg.body, sound: true },
      trigger: { type: 'daily', hour, minute: 0 },
    });
  } catch (_) {}
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  const insets = useSafeAreaInsets();
  const { theme } = useContext(ThemeContext);
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.tabBg, borderTopColor: theme.tabBorder, height: 60 + insets.bottom, paddingBottom: insets.bottom + 8 },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '800', letterSpacing: 0.5 },
      }}
    >
      <Tab.Screen name="Learn" component={LearnScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 18 }}>🍕</Text>, tabBarLabel: 'LEARN' }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 18 }}>⭐</Text>, tabBarLabel: 'FAVORITES' }} />
      <Tab.Screen name="Stats" component={StatsScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 18 }}>📊</Text>, tabBarLabel: 'STATS' }} />
    </Tab.Navigator>
  );
}

async function checkOTAUpdate() {
  try {
    if (__DEV__) return;
    const update = await Updates.checkForUpdateAsync();
    if (update.isAvailable) {
      await Updates.fetchUpdateAsync();
      await Updates.reloadAsync();
    }
  } catch (_) {}
}

async function checkStoreUpdate(setUpdateInfo) {
  try {
    const res = await fetch(VERSION_URL);
    const remote = await res.json();
    const localCode = Constants.expoConfig?.android?.versionCode ?? 0;
    if (remote.versionCode > localCode) {
      setUpdateInfo({ visible: true, message: remote.message });
    }
  } catch (_) {}
}

export default function App() {
  const [theme, setTheme] = useState(DARK);
  const [onboardingDone, setOnboardingDone] = useState(null);
  const [updateInfo, setUpdateInfo] = useState({ visible: false, message: '' });
  const toggleTheme = () => setTheme(t => t.mode === 'dark' ? LIGHT : DARK);

  useEffect(() => {
    AsyncStorage.getItem('bf_onboarding_done')
      .then(val => setOnboardingDone(val === 'true'))
      .catch(() => setOnboardingDone(false));
    checkOTAUpdate();
    checkStoreUpdate(setUpdateInfo);
  }, []);

  const finishOnboarding = async (notifHour) => {
    await AsyncStorage.setItem('bf_onboarding_done', 'true');
    if (notifHour !== null) {
      const { status } = await Notifications.requestPermissionsAsync();
      if (status === 'granted') await scheduleDailyNotification(notifHour);
    }
    setOnboardingDone(true);
  };

  if (onboardingDone === null) return null;

  if (!onboardingDone) {
    return (
      <SafeAreaProvider>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <StatusBar style="light" backgroundColor="#0d1117" />
          <OnboardingScreen onDone={finishOnboarding} />
        </ThemeContext.Provider>
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <StatusBar
          style={theme.mode === 'dark' ? 'light' : 'dark'}
          backgroundColor={theme.bg}
        />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Main" component={TabNavigator} />
            <Stack.Screen name="PubQuiz" component={PubQuizScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <UpdateModal
          visible={updateInfo.visible}
          message={updateInfo.message}
          onDismiss={() => setUpdateInfo(u => ({ ...u, visible: false }))}
        />
      </ThemeContext.Provider>
    </SafeAreaProvider>
  );
}
