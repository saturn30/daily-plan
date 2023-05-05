import { type Dayjs } from 'dayjs';

interface Params {
  start: Dayjs;
  end: Dayjs;
  color: {
    top: string;
    bottom: string;
  };
}

export class ScheduleSpace {
  start: Dayjs;
  end: Dayjs;
  color: {
    top: string;
    bottom: string;
  };

  constructor(params: Params) {
    this.start = params.start;
    this.end = params.end;
    this.color = params.color;
  }

  get startTime() {
    return this.start.format('HH:mm');
  }

  get endTime() {
    return this.end.format('HH:mm');
  }

  get lineHeight() {
    return Math.min((this.duration / 15 + 1) * 15, 100);
  }

  get duration() {
    return this.end.diff(this.start, 'm');
  }

  get isSkipped() {
    return this.duration > 100;
  }
}
