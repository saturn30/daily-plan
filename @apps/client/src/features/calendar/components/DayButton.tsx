import styled from '@emotion/native';
import { type Dayjs } from 'dayjs';

const DayString = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'];

export const DayButton = ({
  day,
  isSelected,
  onSelect,
}: {
  day: Dayjs;
  isSelected: boolean;
  onSelect: (value: Dayjs) => void;
}) => {
  return (
    <S.Day
      key={day.toISOString()}
      isSelected={isSelected}
      onPress={() => {
        onSelect(day);
      }}
    >
      <>
        <S.DayText isSelected={isSelected}>{day.date()}</S.DayText>
        <S.DayText isSelected={isSelected}>{DayString[day.day()]}</S.DayText>
      </>
    </S.Day>
  );
};

const S = {
  Day: styled.TouchableOpacity<{ isSelected: boolean }>`
    flex: 1;
    padding: 15px 0;
    align-items: center;
    border: ${({ isSelected, theme }) =>
      `1.5px solid ${isSelected ? 'transparent' : theme.color.tintLine}`};
    border-radius: 18px;
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary : theme.color.tint};
  `,
  DayText: styled.Text<{ isSelected: boolean }>`
    color: ${({ isSelected, theme }) =>
      isSelected ? 'white' : theme.color.primaryText};
    font-size: 14px;
    text-align: center;
    width: 30px;
    & + & {
      margin-top: 8px;
    }
  `,
};
