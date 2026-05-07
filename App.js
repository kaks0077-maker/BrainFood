import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ThemeContext, DARK, LIGHT } from './ThemeContext';
import FavoritesScreen from './screens/FavoritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import LearnScreen from './screens/LearnScreen';
import OnboardingScreen from './screens/OnboardingScreen';
import PubQuizScreen from './screens/PubQuizScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: { backgroundColor: '#1a1a26', borderTopColor: 'rgba(255,255,255,0.08)', height: 60, paddingBottom: 8 },
        tabBarActiveTintColor: '#e8457a',
        tabBarInactiveTintColor: '#666',
        tabBarLabelStyle: { fontSize: 11, fontWeight: '800', letterSpacing: 0.5 },
      })}
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

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('bf_onboarding_done', 'true');
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
          <Stack.Screen name="Main" component={TabNavigator} />
          <Stack.Screen name="PubQuiz" component={PubQuizScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
