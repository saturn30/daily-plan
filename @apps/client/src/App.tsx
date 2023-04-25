import { ThemeProvider } from '@emotion/react';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';
import { getTheme } from '@/styles';

import { BottomNavigator } from './navigators';
// import { AuthScreen } from './screens/Auth';

void SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isLoading, isDark } = useDarkMode();

  useEffect(() => {
    if (!isLoading) {
      void SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <NavigationContainer>
      <ThemeProvider theme={getTheme({ isDark })}>
        {/* <AuthScreen /> */}
        <BottomNavigator />
      </ThemeProvider>
    </NavigationContainer>
  );
}
