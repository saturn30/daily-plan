import dayjs from 'dayjs';
import { useState } from 'react';

import { SmallCalendar } from '../components';

export const SmallCalendarContainer = () => {
  const [days, setDays] = useState(() => createDefaultDays());
  const [selectedDay, setSelectedDay] = useState(days[2]);

  return (
    <SmallCalendar
      days={days}
      selectedDay={selectedDay}
      onSelect={setSelectedDay}
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
};
