import styled from '@emotion/native';
import { AntDesign } from '@expo/vector-icons';
import { type Dayjs } from 'dayjs';

import { COLOR } from '@/common/constants';

import { DayButton } from './DayButton';

interface Props {
  days: Dayjs[];
  selectedDay: Dayjs;
  onSelect: (value: Dayjs) => void;
  onNextButtonClick: () => void;
  onPrevButtonClick: () => void;
}

export const SmallCalendar = ({
  days,
  selectedDay,
  onSelect,
  onNextButtonClick,
  onPrevButtonClick,
}: Props) => {
  return (
    <S.Wrap>
      <S.IconWrap onPress={onPrevButtonClick}>
        <S.Icon name="left" size={20} color={COLOR.DARK_TINT_LINE} />
      </S.IconWrap>
      <S.ButtonWrap>
        {days.map((day) => (
          <DayButton
            key={day.toISOString()}
            day={day}
            isSelected={day === selectedDay}
            onSelect={onSelect}
          />
        ))}
      </S.ButtonWrap>
      <S.IconWrap onPress={onNextButtonClick}>
        <S.Icon name="right" size={20} color={COLOR.DARK_TINT_LINE} />
      </S.IconWrap>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  `,
  ButtonWrap: styled.View`
    flex: 1;
    flex-direction: row;
    gap: 8px;
  `,
  IconWrap: styled.TouchableOpacity`
    padding: 12px;
  `,
  Icon: styled(AntDesign)`
    color: ${({ theme }) => theme.color.secondaryText};
  `,
};
