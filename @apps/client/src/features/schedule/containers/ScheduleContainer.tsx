import styled from '@emotion/native';
import dayjs from 'dayjs';

import { Schedule } from '../components';

const schedules = [
  {
    start: dayjs('2023-01-01 07:00:00'),
    end: dayjs('2023-01-01 07:00:00'),
    title: '기상',
    color: 'yellow',
  },
  {
    start: dayjs('2023-01-01 09:00:00'),
    end: dayjs('2023-01-01 10:00:00'),
    title: '아침 식사',
    color: 'blue',
  },
  {
    start: dayjs('2023-01-01 10:20:00'),
    end: dayjs('2023-01-01 11:00:00'),
    title: '아침 산책',
    color: 'green',
  },
  {
    start: dayjs('2023-01-01 12:00:00'),
    end: dayjs('2023-01-01 14:00:00'),
    title: '코딩 공부',
    color: 'lavender',
  },
  {
    start: dayjs('2023-01-01 24:00:00'),
    end: dayjs('2023-01-01 24:00:00'),
    title: '취침',
    color: 'blue',
  },
];

export const ScheduleContainer = () => {
  return (
    <S.Wrap>
      {schedules.map((schedule) => (
        <Schedule
          key={schedule.title}
          time={{ start: schedule.start, end: schedule.end }}
          color={schedule.color}
          title={schedule.title}
        />
      ))}
    </S.Wrap>
  );
};

const S = {
  Wrap: styled.View`
    flex: 1;
    margin-top: 24px;
  `,
  Text: styled.Text``,
};
