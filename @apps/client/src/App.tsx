import { ThemeProvider } from '@emotion/react';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

import { useDarkMode } from '@/hooks/useDarkMode';
import { getTheme } from '@/styles';

// import { BottomNavigator } from './navigators';
import { NavigationWithAnalytics } from './container/NavigationWithAnalytics';
import { AuthScreen } from './screens/Auth';

void SplashScreen.preventAutoHideAsync();

export default function App() {
  const { isLoading, isDark } = useDarkMode();

  useEffect(() => {
    if (!isLoading) {
      void SplashScreen.hideAsync();
    }
  }, [isLoading]);

  return (
    <NavigationWithAnalytics>
      <ThemeProvider theme={getTheme({ isDark })}>
        <AuthScreen />
        {/* <BottomNavigator /> */}
      </ThemeProvider>
    </NavigationWithAnalytics>
  );
}
