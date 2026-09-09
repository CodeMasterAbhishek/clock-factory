import { AnalogClock } from './AnalogClock';
import { ClockOptions } from './types';
import { getTimeData } from './engine/time';
import { renderClockSVG } from './engine/renderer';

// Auto-register custom element if in a browser environment
if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
  if (!customElements.get('analog-clock')) {
    customElements.define('analog-clock', AnalogClock);
  }
}

/**
 * Programmatic helper to create and mount an analog clock to any DOM element.
 */
export function createClock(target: HTMLElement | string, options: ClockOptions = {}): AnalogClock {
  const container = typeof target === 'string' ? document.querySelector(target) : target;
  if (!container) {
    throw new Error(`Target element "${target}" not found.`);
  }

  const clock = document.createElement('analog-clock') as AnalogClock;
  if (options.theme) clock.setAttribute('theme', options.theme);
  if (options.timezone) clock.setAttribute('timezone', options.timezone);
  if (options.size) clock.setAttribute('size', options.size);
  if (options.smooth !== undefined) clock.setAttribute('smooth', String(options.smooth));
  if (options.accentColor) clock.setAttribute('accent-color', options.accentColor);
  if (options.faceColor) clock.setAttribute('face-color', options.faceColor);
  if (options.handColor) clock.setAttribute('hand-color', options.handColor);
  if (options.showSeconds !== undefined) clock.setAttribute('show-seconds', String(options.showSeconds));
  if (options.showNumbers !== undefined) clock.setAttribute('show-numbers', String(options.showNumbers));
  if (options.showTicks !== undefined) clock.setAttribute('show-ticks', String(options.showTicks));
  if (options.label) clock.setAttribute('label', options.label);

  container.appendChild(clock);
  return clock;
}

// Named exports
export {
  AnalogClock,
  getTimeData,
  renderClockSVG
};

// Re-export all themes and helper functions
export * from './themes';

// Export all types
export * from './types';

// Default export
export default AnalogClock;
