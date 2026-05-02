import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createContext, useContext, useState } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import FavoritesScreen from './screens/FavoritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import LearnScreen from './screens/LearnScreen';

export const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export const DARK = {
  mode: 'dark',
  bg: '#0d1117',
  card: 'rgba(255,255,255,0.04)',
  cardBorder: 'rgba(255,255,255,0.08)',
  text: '#ffffff',
  textSub: 'rgba(255,255,255,0.5)',
  textMuted: 'rgba(255,255,255,0.28)',
  accent: '#ffd93d',
  tabBg: '#0d1117',
  tabBorder: 'rgba(255,255,255,0.08)',
  input: 'rgba(255,255,255,0.05)',
  inputBorder: 'rgba(255,255,255,0.08)',
};

export const LIGHT = {
  mode: 'light',
  bg: '#f5f5f5',
  card: '#ffffff',
  cardBorder: 'rgba(0,0,0,0.08)',
  text: '#111111',
  textSub: 'rgba(0,0,0,0.5)',
  textMuted: 'rgba(0,0,0,0.35)',
  accent: '#e6a800',
  tabBg: '#ffffff',
  tabBorder: 'rgba(0,0,0,0.1)',
  input: 'rgba(0,0,0,0.05)',
  inputBorder: 'rgba(0,0,0,0.12)',
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [theme, setTheme] = useState(DARK);
  const toggleTheme = () => setTheme(t => t.mode === 'dark' ? LIGHT : DARK);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarStyle: {
              backgroundColor: theme.tabBg,
              borderTopColor: theme.tabBorder,
              height: 60,
              paddingBottom: 8,
            },
            tabBarActiveTintColor: theme.accent,
            tabBarInactiveTintColor: theme.textMuted,
            tabBarLabelStyle: {
              fontSize: 11,
              fontWeight: '800',
              letterSpacing: 0.5,
            },
          }}
        >
          <Tab.Screen
            name="Learn"
            component={LearnScreen}
            options={{
              tabBarIcon: () => <Text style={{ fontSize: 18 }}>🍕</Text>,
              tabBarLabel: 'LEARN',
            }}
          />
          <Tab.Screen
            name="History"
            component={HistoryScreen}
            options={{
              tabBarIcon: () => <Text style={{ fontSize: 18 }}>📚</Text>,
              tabBarLabel: 'HISTORY',
            }}
          />
          <Tab.Screen
            name="Favorites"
            component={FavoritesScreen}
            options={{
              tabBarIcon: () => <Text style={{ fontSize: 18 }}>⭐</Text>,
              tabBarLabel: 'FAVORITES',
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}