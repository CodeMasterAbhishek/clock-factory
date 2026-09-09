import { AnalogClock } from './AnalogClock';
import { ClockOptions } from './types';
import { getTimeData } from './engine/time';
import { renderClockSVG } from './engine/renderer';
/**
 * Programmatic helper to create and mount an analog clock to any DOM element.
 */
export declare function createClock(target: HTMLElement | string, options?: ClockOptions): AnalogClock;
export { AnalogClock, getTimeData, renderClockSVG };
export * from './themes';
export * from './types';
export default AnalogClock;
