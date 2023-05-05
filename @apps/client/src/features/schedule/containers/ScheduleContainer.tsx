import styled from '@emotion/native';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import { ScheduleRow, ScheduleSpaceRow } from '../components';
import { Schedule } from '../domains';
import { scheduleFactory } from '../useCases';

const data = [
  {
    id: '1',
    start: dayjs('2023-01-01 07:00:00'),
    end: dayjs('2023-01-01 07:00:00'),
    title: '기상',
    color: '#ffbe0b',
  },
  {
    id: '2',
    start: dayjs('2023-01-01 09:00:00'),
    end: dayjs('2023-01-01 10:00:00'),
    title: '아침 식사',
    color: '#ffc8dd',
  },
  {
    id: '3',
    start: dayjs('2023-01-01 10:20:00'),
    end: dayjs('2023-01-01 11:00:00'),
    title: '아침 산책',
    color: '#fb5607',
  },
  {
    id: '4',
    start: dayjs('2023-01-01 12:00:00'),
    end: dayjs('2023-01-01 14:00:00'),
    title: '코딩 공부',
    color: '#d9ed92',
  },
  {
    id: '5',
    start: dayjs('2023-01-01 24:00:00'),
    end: dayjs('2023-01-01 24:00:00'),
    title: '취침',
    color: '#3a86ff',
  },
];

export const ScheduleContainer = () => {
  const schedulesWithSpaces = useMemo(
    () => scheduleFactory.createSchedules(data),
    [data],
  );

  const components = useMemo(() => {
    return schedulesWithSpaces.map((value) => {
      if (value instanceof Schedule) {
        return <ScheduleRow key={value.id} schedule={value} />;
      }
      return <ScheduleSpaceRow key={value.startTime} scheduleSpace={value} />;
    });
  }, [schedulesWithSpaces]);

  return <S.Wrap>{components}</S.Wrap>;
};

const S = {
  Wrap: styled.View`
    flex: 1;
    margin-top: 24px;
  `,
  Text: styled.Text``,
};
