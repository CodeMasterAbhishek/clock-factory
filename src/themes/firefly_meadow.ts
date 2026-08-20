import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const firefly_meadowTheme: ClockThemeRenderer = {
  name: 'firefly_meadow',
  description: 'Summer twilight grass meadow filled with glowing bioluminescent fireflies and wild reeds',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#4ade80" stroke="#000000" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <filter id="blur_filter" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter>
        <clipPath id="firefly_meadow_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="firefly_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="twilight_grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="40%" stop-color="#1e1b4b"/>
          <stop offset="75%" stop-color="#312e81"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#twilight_grad)" stroke="#22c55e" stroke-width="2.5"/>
      <g clip-path="url(#firefly_dial_clip)">
        <!-- Wild Meadow Grass & Reeds Silhouettes -->
        <g stroke="#052e16" stroke-width="3" stroke-linecap="round" fill="none">
          <path d="M 30 295 Q 50 190 70 140"/>
          <path d="M 60 295 Q 75 210 95 160"/>
          <path d="M 110 295 Q 115 180 120 130"/>
          <path d="M 180 295 Q 175 190 170 145"/>
          <path d="M 220 295 Q 210 200 200 150"/>
          <path d="M 260 295 Q 245 190 230 135"/>
        </g>
        <!-- Glowing Bioluminescent Fireflies -->
        <g>
          <circle cx="85" cy="110" r="8" fill="#fef08a" opacity="0.3" filter="url(#blur_filter)"/>
          <circle cx="85" cy="110" r="3" fill="#fde047"/>
          <circle cx="140" cy="90" r="9" fill="#86efac" opacity="0.35" filter="url(#blur_filter)"/>
          <circle cx="140" cy="90" r="3.5" fill="#4ade80"/>
          <circle cx="210" cy="105" r="8" fill="#fef08a" opacity="0.3" filter="url(#blur_filter)"/>
          <circle cx="210" cy="105" r="3" fill="#fde047"/>
          <circle cx="170" cy="165" r="7" fill="#86efac" opacity="0.3" filter="url(#blur_filter)"/>
          <circle cx="170" cy="165" r="2.5" fill="#4ade80"/>
          <circle cx="100" cy="180" r="7" fill="#fef08a" opacity="0.3" filter="url(#blur_filter)"/>
          <circle cx="100" cy="180" r="2.5" fill="#fde047"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#4ade80" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#facc15" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#facc15" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#064e3b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#4ade80"/>
      </g>
    
    `;
  }
};
