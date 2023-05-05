import styled from '@emotion/native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import { ScheduleRow } from './ScheduleRow';
import { useScheduleDrag } from './useScheduleDrag';
import { type Schedule } from '../../domains';

interface Props {
  schedule: Schedule;
}

export const DragableSchedule = ({ schedule }: Props) => {
  const { panGestureEvent, rStyle, isMoving } = useScheduleDrag();

  return (
    <S.Wrap>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={rStyle}>
          <ScheduleRow schedule={schedule} />
        </Animated.View>
      </PanGestureHandler>
      {isMoving && (
        <S.SnapShotWrap>
          <ScheduleRow schedule={schedule} />
        </S.SnapShotWrap>
      )}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    position: relative;
  `,
  SnapShotWrap: styled.View`
    position: absolute;
    width: 100%;
    opacity: 0.4;
  `,
};
