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
      <S.RowWrap>
        <S.IconWrap onPress={onPrevButtonClick}>
          <S.Icon name="left" size={16} color={COLOR.DARK_TINT_LINE} />
        </S.IconWrap>
        <S.Title>
          {selectedDay.year()}. {selectedDay.month() + 1}
        </S.Title>
        <S.IconWrap onPress={onNextButtonClick}>
          <S.Icon name="right" size={16} color={COLOR.DARK_TINT_LINE} />
        </S.IconWrap>
      </S.RowWrap>
      <S.RowWrap>
        <S.ButtonWrap>
          {days.map((day) => (
            <DayButton
              key={day.toISOString()}
              day={day}
              isSelected={day.isSame(selectedDay)}
              onSelect={onSelect}
            />
          ))}
        </S.ButtonWrap>
      </S.RowWrap>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    padding-bottom: 8px;
    border-bottom-width: 1px;
    border-color: ${({ theme }) => theme.color.tintLine};
  `,
  Title: styled.Text`
    padding: 20px 0 16px;
    font-weight: 700;
    font-size: 24px;
    color: ${({ theme }) => theme.color.primaryText};
  `,
  RowWrap: styled.View`
    flex-direction: row;
    align-items: center;
    padding: 0 20px;
  `,
  ButtonWrap: styled.View`
    flex: 1;
    flex-direction: row;
    gap: 8px;
  `,
  IconWrap: styled.TouchableOpacity`
    padding: 12px;
    align-items: center;
    justify-content: center;
  `,
  Icon: styled(AntDesign)`
    color: ${({ theme }) => theme.color.secondaryText};
  `,
};
