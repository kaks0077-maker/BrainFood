import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import FavoritesScreen from './screens/FavoritesScreen';
import HistoryScreen from './screens/HistoryScreen';
import LearnScreen from './screens/LearnScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#0d1117',
            borderTopColor: 'rgba(255,255,255,0.08)',
            height: 60,
            paddingBottom: 8,
          },
          tabBarActiveTintColor: '#ffd93d',
          tabBarInactiveTintColor: 'rgba(255,255,255,0.32)',
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
  );
}