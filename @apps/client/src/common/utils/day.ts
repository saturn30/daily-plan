/* eslint-disable import/no-named-as-default-member */
import dayjs from 'dayjs';
import timezone from 'dayjs/plugin/timezone';
import utc from 'dayjs/plugin/utc';
import { getCalendars } from 'expo-localization';

dayjs.extend(utc);
dayjs.extend(timezone);

export const day = (() => {
  const [calendar] = getCalendars();
  return dayjs.tz(calendar.timeZone);
})();
