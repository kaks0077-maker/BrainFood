import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import { ThemeContext, DARK, LIGHT } from './ThemeContext';
import FavoritesScreen from './screens/FavoritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import LearnScreen from './screens/LearnScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import PubQuizScreen from './screens/PubQuizScreen';

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
      trigger: { hour, minute: 0, repeats: true },
    });
  } catch (e) { console.log('Notif error:', e); }
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator({ theme }) {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: theme.tabBg, borderTopColor: theme.tabBorder, height: 60, paddingBottom: 8 },
        tabBarActiveTintColor: theme.accent,
        tabBarInactiveTintColor: theme.textMuted,
        tabBarLabelStyle: { fontSize: 11, fontWeight: '800', letterSpacing: 0.5 },
      }}
    >
      <Tab.Screen name="Learn" component={LearnScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 18 }}>🍕</Text>, tabBarLabel: 'LEARN' }} />
      <Tab.Screen name="History" component={HistoryScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 18 }}>📚</Text>, tabBarLabel: 'HISTORY' }} />
      <Tab.Screen name="Favorites" component={FavoritesScreen}
        options={{ tabBarIcon: () => <Text style={{ fontSize: 18 }}>⭐</Text>, tabBarLabel: 'FAVORITES' }} />
    </Tab.Navigator>
  );
}

export default function App() {
  const [theme, setTheme] = useState(DARK);
  const [onboardingDone, setOnboardingDone] = useState(null);
  const toggleTheme = () => setTheme(t => t.mode === 'dark' ? LIGHT : DARK);

  useEffect(() => {
    AsyncStorage.getItem('bf_onboarding_done').then(val => setOnboardingDone(val === 'true'));
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
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <OnboardingScreen onDone={finishOnboarding} />
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Main">
            {() => <TabNavigator theme={theme} />}
          </Stack.Screen>
          <Stack.Screen name="PubQuiz" component={PubQuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
