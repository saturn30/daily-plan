import { Schedule, ScheduleSpace, type ScheduleParams } from '../domains';

class ScheduleFactory {
  createSchedules = (data: ScheduleParams[]) => {
    return data
      .map((value, index) => {
        if (index !== 0)
          return [
            new ScheduleSpace({
              start: data[index - 1].end,
              end: value.start,
              color: { top: data[index - 1].color, bottom: value.color },
            }),
            new Schedule(value),
          ];
        return new Schedule(value);
      })
      .flat();
  };
}

export const scheduleFactory = new ScheduleFactory();
