import { useState } from 'react';
import { type PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const useScheduleDrag = () => {
  const [isMoving, setIsMoving] = useState(false);
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const stopMoving = () => {
    setTimeout(() => {
      setIsMoving(false);
    }, 1000);
  };

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { translateX: number; translateY: number }
  >({
    onStart: (event, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
      runOnJS(setIsMoving)(true);
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event, context) => {
      translateX.value = withSpring(0, { mass: 0.7 });
      translateY.value = withSpring(0, { mass: 0.7 });
      runOnJS(stopMoving)();
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
      zIndex: isMoving ? 10 : 0,
    };
  });

  return { rStyle, panGestureEvent, isMoving };
};
