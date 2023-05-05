import styled from '@emotion/native';
import { useState } from 'react';
import BouncyCheckbox from 'react-native-bouncy-checkbox';

import { type Schedule } from '@/features/schedule/domains';

interface Props {
  schedule: Schedule;
}

export const ScheduleRow = ({ schedule }: Props) => {
  const [isDone, setIsDone] = useState(false);

  return (
    <S.Wrap>
      {schedule.isZeroDuration ? (
        <S.TimeWrap isZeroDuration>
          <S.Time>{schedule.startTime}</S.Time>
        </S.TimeWrap>
      ) : (
        <S.TimeWrap>
          <S.Time>{schedule.startTime}</S.Time>
          <S.Time>{schedule.endTime}</S.Time>
        </S.TimeWrap>
      )}
      <S.Line height={schedule.lineHeight} color={schedule.color} />
      <S.ContentWrap>
        <S.Title isDone={isDone}>{schedule.title}</S.Title>
        <S.Description>
          {schedule.isZeroDuration
            ? schedule.startTime
            : `${schedule.startTime} ~ ${schedule.endTime} (${schedule.duration}m)`}
        </S.Description>
      </S.ContentWrap>
      <S.CheckWrap>
        <BouncyCheckbox
          isChecked={isDone}
          onPress={setIsDone}
          fillColor={schedule.color}
        />
      </S.CheckWrap>
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    flex-direction: row;
  `,
  TimeWrap: styled.View<{ isZeroDuration?: boolean }>`
    width: 40px;
    justify-content: ${({ isZeroDuration }) =>
      isZeroDuration ? 'center' : 'space-between'};
    align-items: center;
  `,
  Time: styled.Text`
    font-size: 12px;
    color: ${({ theme }) => theme.color.secondaryText};
  `,
  Line: styled.View<{ height: number; color: string }>`
    margin-left: 12px;
    width: 24px;
    height: ${({ height }) => height}px;
    min-height: 100%;
    background-color: ${({ color }) => color};
    border-radius: 100px;
  `,
  ContentWrap: styled.View`
    flex: 1;
    padding-left: 24px;
    justify-content: center;
  `,
  Title: styled.Text<{ isDone: boolean }>`
    text-decoration-line: ${({ isDone }) => (isDone ? 'line-through' : '')};
    font-weight: 500;
    font-size: 16px;
    color: ${({ isDone, theme }) =>
      isDone ? theme.color.secondaryText : theme.color.primaryText};
  `,
  Description: styled.Text`
    margin-top: 4px;
    font-size: 12px;
    color: ${({ theme }) => theme.color.secondaryText};
  `,
  CheckWrap: styled.View`
    justify-content: center;
  `,
  CheckBox: styled.TextInput``,
};
