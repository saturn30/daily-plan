import { type Dayjs } from 'dayjs';

interface Params {
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

  constructor(params: Params) {
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

  get description() {
    if (this.isZeroDuration) return this.startTime;
    return `${this.startTime} ~ ${this.endTime} (${this.duration}m)`;
  }

  get isZeroDuration() {
    return this.duration === 0;
  }
}
