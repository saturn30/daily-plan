import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, SettingScreen, StatisticsScreen } from '@/screens';

import { MyTabBar } from './BottomBar';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator
      tabBar={(props) => <MyTabBar {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarLabel: 'home' }}
      />
      <Tab.Screen
        name="Statistics"
        component={StatisticsScreen}
        options={{ tabBarLabel: 'bar-chart-2' }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingScreen}
        options={{ tabBarLabel: 'settings' }}
      />
    </Tab.Navigator>
  );
};
