import styled from '@emotion/native';
import { type Dayjs } from 'dayjs';

interface Props {
  days: Dayjs[];
  selectedDay: Dayjs;
  onSelect: (value: Dayjs) => void;
}

const DayString = ['Sun', 'Mon', 'Tus', 'Wed', 'Thu', 'Fri', 'Sat'];

export const SmallCalendar = ({ days, selectedDay, onSelect }: Props) => {
  return (
    <S.Wrap>
      {days.map((day) => {
        const isSelected = day === selectedDay;

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
              <S.DayText isSelected={isSelected}>
                {DayString[day.day()]}
              </S.DayText>
            </>
          </S.Day>
        );
      })}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    padding: 0 20px;
    flex-direction: row;
    justify-content: space-between;
  `,
  Day: styled.TouchableOpacity<{ isSelected: boolean }>`
    align-items: center;

    padding: 20px;
    border: ${({ isSelected, theme }) =>
      `1.5px solid ${isSelected ? 'transparent' : theme.color.tintLine}`};
    border-radius: 24px;
    background-color: ${({ isSelected, theme }) =>
      isSelected ? theme.color.primary : theme.color.tint};
  `,
  DayText: styled.Text<{ isSelected: boolean }>`
    color: ${({ isSelected, theme }) =>
      isSelected ? 'white' : theme.color.primaryText};
    font-size: 16px;
    & + & {
      margin-top: 8px;
    }
  `,
};
