import { TimeData } from '../types';

export function getTimeData(timezone?: string, smooth: boolean = true): TimeData {
  const now = new Date();
  
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let milliseconds = now.getMilliseconds();
  let dateNumber = now.getDate();
  let dayName = '';
  let monthName = '';
  let timezoneName = '';

  if (timezone && timezone.trim() !== '') {
    try {
      const dtf = new Intl.DateTimeFormat('en-US', {
        timeZone: timezone,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        fractionalSecondDigits: 3,
        hour12: false,
        weekday: 'short',
        month: 'short',
        day: 'numeric',
        timeZoneName: 'short'
      } as any);

      const parts = dtf.formatToParts(now);
      const partMap: Record<string, string> = {};
      for (const p of parts) {
        partMap[p.type] = p.value;
      }

      if (partMap.hour !== undefined) {
        hours = parseInt(partMap.hour, 10);
        if (hours === 24) hours = 0;
      }
      if (partMap.minute !== undefined) {
        minutes = parseInt(partMap.minute, 10);
      }
      if (partMap.second !== undefined) {
        seconds = parseInt(partMap.second, 10);
      }
      if (partMap.fractionalSecond !== undefined) {
        milliseconds = parseInt(partMap.fractionalSecond.padEnd(3, '0').slice(0, 3), 10);
      } else {
        milliseconds = now.getMilliseconds();
      }
      if (partMap.day !== undefined) {
        dateNumber = parseInt(partMap.day, 10);
      }
      dayName = partMap.weekday || '';
      monthName = partMap.month || '';
      timezoneName = partMap.timeZoneName || timezone;
    } catch {
      dayName = now.toLocaleDateString('en-US', { weekday: 'short' });
      monthName = now.toLocaleDateString('en-US', { month: 'short' });
      timezoneName = 'Local';
    }
  } else {
    dayName = now.toLocaleDateString('en-US', { weekday: 'short' });
    monthName = now.toLocaleDateString('en-US', { month: 'short' });
    timezoneName = 'Local';
  }

  const msFraction = smooth ? milliseconds / 1000 : 0;
  const preciseSeconds = seconds + msFraction;
  const preciseMinutes = minutes + preciseSeconds / 60;
  const preciseHours = (hours % 12) + preciseMinutes / 60;

  const secondAngle = preciseSeconds * 6;
  const minuteAngle = preciseMinutes * 6;
  const hourAngle = preciseHours * 30;

  const isPm = hours >= 12;
  const h12 = hours % 12 || 12;
  const pad = (n: number) => n.toString().padStart(2, '0');

  const timeString12 = `${h12}:${pad(minutes)}:${pad(seconds)} ${isPm ? 'PM' : 'AM'}`;
  const timeString24 = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
  const dateString = `${dayName.toUpperCase()} ${dateNumber} ${monthName.toUpperCase()}`;

  return {
    hours,
    minutes,
    seconds,
    hour: hours,
    minute: minutes,
    second: seconds,
    date: dateNumber,
    day: dateNumber,
    milliseconds,
    hourAngle,
    minuteAngle,
    secondAngle,
    dateString,
    dayString: dayName,
    monthString: monthName,
    timeString12,
    timeString24,
    timezoneName,
    isPm
  };
}
