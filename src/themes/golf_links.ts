import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const golf_linksTheme: ClockThemeRenderer = {
  name: 'golf_links',
  description: 'Lush green fairway with flagstick cup, sand bunker trap, and dimpled golf ball texture',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#ffffff" stroke="#15803d" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="golf_links_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="golf_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="golf_grass" cx="40%" cy="40%" r="60%">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="60%" stop-color="#16a34a"/>
          <stop offset="100%" stop-color="#14532d"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#golf_grass)" stroke="#15803d" stroke-width="3"/>
      <g clip-path="url(#golf_dial_clip)">
        <!-- Sand Trap Bunker (Bottom Left) -->
        <path d="M 40 220 C 60 190 110 200 120 240 C 130 270 70 290 40 260 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="2"/>
        <!-- Putting Green -->
        <ellipse cx="180" cy="120" rx="45" ry="35" fill="#22c55e"/>
        <!-- Hole & Red Flagstick Pin -->
        <circle cx="185" cy="120" r="4" fill="#000000"/>
        <line x1="185" y1="120" x2="185" y2="80" stroke="#ffffff" stroke-width="2"/>
        <polygon points="185,80 205,88 185,96" fill="#ef4444"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#052e16" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#052e16" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#052e16" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#fef08a"/>
      </g>
    
    `;
  }
};
