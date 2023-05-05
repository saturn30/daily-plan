import { type Dayjs } from 'dayjs';

export interface ScheduleParams {
  id: string;
  start: Dayjs;
  end: Dayjs;
  color: string;
  title: string;
}

export class Schedule {
  private readonly start: Dayjs;
  private readonly end: Dayjs;
  title: string;
  color: string;
  id: string;
  duration: number;

  constructor(params: ScheduleParams) {
    this.id = params.id;
    this.start = params.start;
    this.end = params.end;
    this.color = params.color;
    this.title = params.title;
    this.duration = this.end.diff(this.start, 'm');
  }

  get startTime() {
    return this.start.format('HH:mm');
  }

  get endTime() {
    return this.end.format('HH:mm');
  }

  get lineHeight() {
    return (this.end.diff(this.start, 'm') / 15 + 1) * 15;
  }

  get isZeroDuration() {
    return this.duration === 0;
  }
}
