import { ClockOptions, ThemeColors, TimeData } from '../types';
export declare function resolveColors(defaultColors: ThemeColors, options: ClockOptions): ThemeColors;
export declare function renderClockSVG(options: ClockOptions, time: TimeData): string;
