import styled from '@emotion/native';
import { LinearGradient } from 'expo-linear-gradient';

import { type ScheduleSpace } from '../domains';

interface Props {
  scheduleSpace: ScheduleSpace;
}

export const ScheduleSpaceRow = ({ scheduleSpace }: Props) => {
  return (
    <S.Wrap>
      <S.LineWrap>
        <S.Line
          colors={[scheduleSpace.color.top, scheduleSpace.color.bottom]}
          height={scheduleSpace.lineHeight}
        />
      </S.LineWrap>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    padding-left: 60px;
  `,
  LineWrap: styled.View`
    margin-left: 12px;
    width: 24px;
    align-items: center;
  `,
  Line: styled(LinearGradient)<{ height: number }>`
    height: ${({ height }) => height}px;
    width: 3px;
    background-color: blue;
  `,
};
