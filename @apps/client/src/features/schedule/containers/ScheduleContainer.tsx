import styled from '@emotion/native';
import dayjs from 'dayjs';
import { useMemo } from 'react';

import { COLOR } from '@/common/constants';

import { DragableSchedule, ScheduleSpaceRow } from '../components';
import { Schedule } from '../domains';
import { scheduleFactory } from '../useCases';

const data = [
  {
    id: '1',
    start: dayjs('2023-01-01 07:00:00'),
    end: dayjs('2023-01-01 07:00:00'),
    title: '기상',
    color: COLOR.PRIMARY,
  },
  {
    id: '2',
    start: dayjs('2023-01-01 09:00:00'),
    end: dayjs('2023-01-01 10:00:00'),
    title: '아침 식사',
    color: '#75BFCF',
  },
  {
    id: '3',
    start: dayjs('2023-01-01 10:20:00'),
    end: dayjs('2023-01-01 11:00:00'),
    title: '아침 산책',
    color: '#F0F3BD',
  },
  {
    id: '4',
    start: dayjs('2023-01-01 12:00:00'),
    end: dayjs('2023-01-01 14:00:00'),
    title: '코딩 공부',
    color: COLOR.PRIMARY,
  },
  {
    id: '6',
    start: dayjs('2023-01-01 14:00:00'),
    end: dayjs('2023-01-01 14:30:00'),
    title: '책읽기',
    color: '#61E786',
  },
  {
    id: '5',
    start: dayjs('2023-01-01 24:00:00'),
    end: dayjs('2023-01-01 24:00:00'),
    title: '취침',
    color: '#7144D2',
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
        return <DragableSchedule key={value.id} schedule={value} />;
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
    padding-bottom: 48px;
  `,
};
