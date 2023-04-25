import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen, SettingScreen, StatisticsScreen } from '@/screens';

import { MyTabBar } from './BottomBar';

const Tab = createBottomTabNavigator();

export const BottomNavigator = () => {
  return (
    <Tab.Navigator tabBar={(props) => <MyTabBar {...props} />}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Statistics" component={StatisticsScreen} />
      <Tab.Screen name="Settings" component={SettingScreen} />
    </Tab.Navigator>
  );
};
