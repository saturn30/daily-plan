import analytics from '@react-native-firebase/analytics';
import {
  NavigationContainer,
  type NavigationContainerRef,
} from '@react-navigation/native';
import { type PropsWithChildren, useRef } from 'react';

export const NavigationWithAnalytics = ({ children }: PropsWithChildren) => {
  const prevRouteNameRef = useRef('');
  const navigationRef = useRef<NavigationContainerRef<any>>(null);

  const onReady = () => {
    prevRouteNameRef.current = getCurrentRouteName();
  };

  const onStateChange = async () => {
    const previousRouteName = prevRouteNameRef.current;
    const currentRouteName = getCurrentRouteName();

    if (currentRouteName.length > 0 && previousRouteName !== currentRouteName) {
      await analytics().logScreenView({
        screen_name: currentRouteName,
        screen_class: currentRouteName,
      });
    }

    prevRouteNameRef.current = currentRouteName;
  };

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={onReady}
      onStateChange={onStateChange}
    >
      {children}
    </NavigationContainer>
  );

  function getCurrentRouteName() {
    return navigationRef?.current?.getCurrentRoute()?.name ?? '';
  }
};
