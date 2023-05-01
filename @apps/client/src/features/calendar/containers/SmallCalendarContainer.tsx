import dayjs, { type Dayjs } from 'dayjs';
import { useState } from 'react';

import { SmallCalendar } from '../components';

export const SmallCalendarContainer = () => {
  const [days, setDays] = useState(() => createDefaultDays());
  const [selectedDay, setSelectedDay] = useState(days[2]);

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

  function createDefaultDays() {
    const now = dayjs();
    return [
      now.subtract(2, 'day'),
      now.subtract(1, 'day'),
      now,
      now.add(1, 'day'),
      now.add(2, 'day'),
    ];
  }

  function updateDays(callback: (value: Dayjs) => Dayjs) {
    const nextDays = days.map(callback);
    const selectedDayIndex = days.findIndex((day) => day === selectedDay);
    setDays(nextDays);
    setSelectedDay(nextDays[selectedDayIndex]);
  }
};
