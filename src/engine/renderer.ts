import { ClockOptions, ThemeColors, TimeData } from '../types';
import { getTheme } from '../themes';

export function resolveColors(defaultColors: ThemeColors, options: ClockOptions): ThemeColors {
  const colors = { ...defaultColors };
  if (options.faceColor) colors.face = options.faceColor;
  if (options.accentColor) {
    colors.accent = options.accentColor;
    colors.secondHand = options.accentColor;
    colors.centerCap = options.accentColor;
  }
  if (options.handColor) {
    colors.hourHand = options.handColor;
    colors.minuteHand = options.handColor;
  }
  return colors;
}

export function renderClockSVG(options: ClockOptions, time: TimeData): string {
  const theme = getTheme(options.theme);
  const colors = resolveColors(theme.defaultColors as ThemeColors, options);

  const dialMarkup = theme.renderDial(options, colors, time);
  const handsMarkup = theme.renderHands(options, colors, time);
  const overlayMarkup = theme.renderOverlay ? theme.renderOverlay(options, colors, time) : '';

  return `
    <svg 
      class="clock-svg" 
      viewBox="0 0 300 300" 
      width="100%" 
      height="100%" 
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Analog Clock showing ${time.timeString12} (${time.timezoneName})"
    >
      <defs>
        <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
        <filter id="inset-shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="1" dy="1" stdDeviation="1.5" flood-color="#000000" flood-opacity="0.3"/>
        </filter>
      </defs>

      <!-- Dial Base Layer -->
      <g class="dial-layer">
        ${dialMarkup}
      </g>

      <!-- Hands Layer -->
      <g class="hands-layer">
        ${handsMarkup}
      </g>

      <!-- Overlay Layer -->
      ${overlayMarkup ? `<g class="overlay-layer">${overlayMarkup}</g>` : ''}
    </svg>
  `;
}

