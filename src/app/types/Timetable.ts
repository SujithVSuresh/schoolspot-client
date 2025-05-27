export interface Period {
  subject: string;
  startTime: string;
  endTime: string;
}

export interface DaySchedule {
  day: string;
  periods: Period[];
}
