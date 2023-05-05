import { useRef, useState } from 'react';
import { type PanGestureHandlerGestureEvent } from 'react-native-gesture-handler';
import {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export const useScheduleDrag = () => {
  const isAnimated = useRef(false);
  const [isMoving, setIsMoving] = useState(false);
  const translateY = useSharedValue(0);

  const stopMoving = () => {
    setTimeout(() => {
      !isAnimated.current && setIsMoving(false);
    }, 1000);
  };

  const setRef = (value: boolean) => {
    isAnimated.current = value;
  };

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { translateX: number; translateY: number }
  >({
    onStart: (event, context) => {
      context.translateY = translateY.value;
      runOnJS(setIsMoving)(true);
      runOnJS(setRef)(true);
    },
    onActive: (event, context) => {
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: (event, context) => {
      translateY.value = withSpring(0, { mass: 0.7 });
      runOnJS(setRef)(false);
      runOnJS(stopMoving)();
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: translateY.value,
        },
      ],
      zIndex: isMoving ? 10 : 0,
    };
  });

  return { rStyle, panGestureEvent, isMoving };
};
