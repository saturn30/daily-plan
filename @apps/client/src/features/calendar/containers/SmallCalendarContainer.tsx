import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';

import { SmallCalendar } from '../components';

export const SmallCalendarContainer = () => {
  const [selectedDay, setSelectedDay] = useState(dayjs());
  const [days, setDays] = useState(() => createDefaultDays(selectedDay));

  const onNextButtonClick = () => {
    updateDays((day) => day.add(5, 'day'));
  };

  const onPrevButtonClick = () => {
    updateDays((day) => day.subtract(5, 'day'));
  };

  return (
    <SmallCalendar
      days={days}
      selectedDay={selectedDay}
      onSelect={setSelectedDay}
      onNextButtonClick={onNextButtonClick}
      onPrevButtonClick={onPrevButtonClick}
    />
  );

  function createDefaultDays(now: Dayjs) {
    const base = now.subtract(now.day(), 'day');
    const result = [];

    for (let i = 0; i < 7; i++) {
      result.push(base.add(i, 'day'));
    }

    return result;
  }

  function updateDays(callback: (value: Dayjs) => Dayjs) {
    const nextDays = days.map(callback);
    const selectedDayIndex = days.findIndex((day) => day === selectedDay);
    setDays(nextDays);
    setSelectedDay(nextDays[selectedDayIndex]);
  }
};
