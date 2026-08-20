import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const american_footballTheme: ClockThemeRenderer = {
  name: 'american_football',
  description: '100-yard striped football turf with white yard-line hash marks, endzones, and laced pigskin football',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<rect x="148" y="10" width="4" height="10" fill="#ffffff" stroke="#14532d" stroke-width="0.5" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="american_football_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="af_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="af_turf" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#15803d"/>
          <stop offset="100%" stop-color="#14532d"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#af_turf)" stroke="#15803d" stroke-width="3"/>
      <g clip-path="url(#af_dial_clip)">
        <!-- 10-Yard Turf Stripes -->
        <rect x="0" y="30" width="300" height="30" fill="#16a34a" opacity="0.3"/>
        <rect x="0" y="90" width="300" height="30" fill="#16a34a" opacity="0.3"/>
        <rect x="0" y="150" width="300" height="30" fill="#16a34a" opacity="0.3"/>
        <rect x="0" y="210" width="300" height="30" fill="#16a34a" opacity="0.3"/>
        <!-- White Yard Lines & Hashes -->
        <g stroke="#ffffff" stroke-width="2" fill="none">
          <line x1="0" y1="60" x2="300" y2="60"/><line x1="0" y1="120" x2="300" y2="120"/>
          <line x1="0" y1="150" x2="300" y2="150" stroke-width="3.5"/>
          <line x1="0" y1="180" x2="300" y2="180"/><line x1="0" y1="240" x2="300" y2="240"/>
        </g>
        <!-- Center Pigskin Football with White Laces -->
        <g transform="translate(150, 150) rotate(-45)">
          <ellipse cx="0" cy="0" rx="36" ry="20" fill="#78350f" stroke="#451a03" stroke-width="2"/>
          <!-- White Stripes on Ends -->
          <path d="M -22 -16 Q -18 0 -22 16" stroke="#ffffff" stroke-width="3" fill="none"/>
          <path d="M 22 -16 Q 18 0 22 16" stroke="#ffffff" stroke-width="3" fill="none"/>
          <!-- Laces -->
          <line x1="-12" y1="0" x2="12" y2="0" stroke="#ffffff" stroke-width="2.5"/>
          <line x1="-8" y1="-4" x2="-8" y2="4" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="-3" y1="-4" x2="-3" y2="4" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="3" y1="-4" x2="3" y2="4" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="8" y1="-4" x2="8" y2="4" stroke="#ffffff" stroke-width="1.5"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#ffffff" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#f59e0b"/>
      </g>
    
    `;
  }
};
