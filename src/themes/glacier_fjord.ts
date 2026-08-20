import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const glacier_fjordTheme: ClockThemeRenderer = {
  name: 'glacier_fjord',
  description: 'Majestic crystalline blue glacier ice walls calving into an icy turquoise fjord with floating icebergs',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="glacier_fjord_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="glacier_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="ice_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0c4a6e"/>
          <stop offset="40%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#e0f2fe"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#ice_sky)" stroke="#38bdf8" stroke-width="2.5"/>
      <g clip-path="url(#glacier_dial_clip)">
        <!-- Massive Blue Glacier Ice Wall -->
        <polygon points="30,190 60,90 120,80 150,110 190,85 240,95 270,190" fill="#bae6fd" stroke="#38bdf8" stroke-width="1.5"/>
        <polygon points="70,95 110,85 140,115 100,190 50,190" fill="#38bdf8" opacity="0.6"/>
        <polygon points="160,110 190,88 230,98 250,190 200,190" fill="#0284c7" opacity="0.5"/>
        <!-- Icy Turquoise Fjord Water -->
        <path d="M 0 185 Q 150 175 300 185 L 300 300 L 0 300 Z" fill="#0369a1"/>
        <path d="M 20 215 Q 150 205 280 215" stroke="#7dd3fc" stroke-width="2" fill="none" opacity="0.6"/>
        <!-- Floating Icebergs -->
        <polygon points="70,240 85,225 100,240 90,250 80,250" fill="#ffffff" stroke="#38bdf8" stroke-width="1"/>
        <polygon points="180,250 200,230 220,250 210,260 190,260" fill="#ffffff" stroke="#38bdf8" stroke-width="1"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#0c4a6e" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#0284c7" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#bae6fd" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#38bdf8" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#38bdf8"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#0c4a6e" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#38bdf8"/>
      </g>
    
    `;
  }
};
