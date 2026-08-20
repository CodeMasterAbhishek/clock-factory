import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const penguinTheme: ClockThemeRenderer = {
  name: 'penguin',
  description: 'Adorable Arctic penguin standing on an icy glacier beneath starry polar skies',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      ticks += `<circle cx="150" cy="18" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="penguin_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="penguin_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="40%" stop-color="#1e293b"/>
          <stop offset="75%" stop-color="#0369a1"/>
          <stop offset="100%" stop-color="#38bdf8"/>
        </linearGradient>
        <linearGradient id="glacier_ice" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#e0f2fe"/>
          <stop offset="100%" stop-color="#bae6fd"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <circle cx="150" cy="150" r="145" fill="url(#penguin_sky)" stroke="#38bdf8" stroke-width="2.5"/>

      <g clip-path="url(#penguin_dial_clip)">
        <!-- Polar Stars & Constellations -->
        <g fill="#ffffff" opacity="0.85">
          <circle cx="45" cy="50" r="1.2"/>
          <circle cx="95" cy="35" r="1"/>
          <circle cx="150" cy="45" r="1.4"/>
          <circle cx="210" cy="35" r="1"/>
          <circle cx="255" cy="55" r="1.2"/>
        </g>

        <!-- Glacier Ice Shelf Platform -->
        <path d="M 20 235 Q 150 215 280 235 L 295 300 L 5 300 Z" fill="url(#glacier_ice)" stroke="#7dd3fc" stroke-width="1.5"/>
        <path d="M 40 248 Q 150 230 260 248" stroke="#38bdf8" stroke-width="2" fill="none" opacity="0.6"/>

        <!-- Arctic Penguin Character -->
        <g transform="translate(150, 195)">
          <!-- Flippers -->
          <ellipse cx="-28" cy="-5" rx="8" ry="24" fill="#0f172a" transform="rotate(20 -28 -5)"/>
          <ellipse cx="28" cy="-5" rx="8" ry="24" fill="#0f172a" transform="rotate(-20 28 -5)"/>
          <!-- Body -->
          <ellipse cx="0" cy="0" rx="30" ry="42" fill="#0f172a"/>
          <!-- White Belly -->
          <ellipse cx="0" cy="4" rx="20" ry="32" fill="#ffffff"/>
          <!-- Golden Emperor Collar -->
          <path d="M -12 -18 Q 0 -10 12 -18" stroke="#facc15" stroke-width="5" fill="none" stroke-linecap="round"/>
          <!-- Head -->
          <circle cx="0" cy="-32" r="22" fill="#0f172a"/>
          <!-- Eyes -->
          <circle cx="-7" cy="-35" r="3.5" fill="#ffffff"/>
          <circle cx="-7" cy="-35" r="1.8" fill="#0f172a"/>
          <circle cx="7" cy="-35" r="3.5" fill="#ffffff"/>
          <circle cx="7" cy="-35" r="1.8" fill="#0f172a"/>
          <!-- Orange Beak -->
          <polygon points="-6,-28 6,-28 0,-20" fill="#f97316"/>
          <!-- Feet -->
          <ellipse cx="-12" cy="40" rx="8" ry="4" fill="#f97316"/>
          <ellipse cx="12" cy="40" rx="8" ry="4" fill="#f97316"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0f172a"/>
          <circle cx="150" cy="75" r="3.5" fill="#38bdf8"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,38" fill="#0284c7"/>
          <circle cx="150" cy="38" r="3" fill="#bae6fd"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="20" stroke="#f97316" stroke-width="1.8"/>
          <circle cx="150" cy="20" r="3.5" fill="#f97316" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f97316"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
