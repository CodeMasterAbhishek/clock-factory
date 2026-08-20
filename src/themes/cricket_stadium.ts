import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cricket_stadiumTheme: ClockThemeRenderer = {
  name: 'cricket_stadium',
  description: 'Lush green oval cricket ground with central pitch crease, polished leather red cricket ball, and white seam',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#ffffff" stroke="#15803d" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="cricket_stadium_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="cricket_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="cricket_grass" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#4ade80"/>
          <stop offset="60%" stop-color="#16a34a"/>
          <stop offset="100%" stop-color="#14532d"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#cricket_grass)" stroke="#15803d" stroke-width="3"/>
      <g clip-path="url(#cricket_dial_clip)">
        <!-- Mowed Oval Outfield Grass Rings -->
        <circle cx="150" cy="150" r="120" fill="none" stroke="#22c55e" stroke-width="8" opacity="0.35"/>
        <circle cx="150" cy="150" r="85" fill="none" stroke="#22c55e" stroke-width="8" opacity="0.35"/>
        <!-- Central 22-Yard Clay Pitch Strip -->
        <rect x="132" y="80" width="36" height="140" fill="#fed7aa" stroke="#ca8a04" stroke-width="1.5" rx="2"/>
        <!-- Bowling & Popping Crease White Lines -->
        <line x1="126" y1="95" x2="174" y2="95" stroke="#ffffff" stroke-width="2"/>
        <line x1="126" y1="205" x2="174" y2="205" stroke="#ffffff" stroke-width="2"/>
        <!-- Wooden Wickets & Bails -->
        <g stroke="#78350f" stroke-width="1.5" stroke-linecap="round">
          <line x1="145" y1="90" x2="145" y2="95"/><line x1="150" y1="90" x2="150" y2="95"/><line x1="155" y1="90" x2="155" y2="95"/>
          <line x1="144" y1="90" x2="156" y2="90" stroke-width="1"/>
          <line x1="145" y1="205" x2="145" y2="210"/><line x1="150" y1="205" x2="150" y2="210"/><line x1="155" y1="205" x2="155" y2="210"/>
          <line x1="144" y1="210" x2="156" y2="210" stroke-width="1"/>
        </g>
        <!-- Red Leather Cricket Ball with White Raised Seam (Bottom Right) -->
        <g transform="translate(225, 225)">
          <circle cx="0" cy="0" r="18" fill="#b91c1c" stroke="#7f1d1d" stroke-width="1.5"/>
          <path d="M -16 0 Q 0 -10 16 0" stroke="#ffffff" stroke-width="2" fill="none"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#fde047" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fed7aa" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#dc2626" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#dc2626" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#dc2626"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#fde047"/>
      </g>
    
    `;
  }
};
