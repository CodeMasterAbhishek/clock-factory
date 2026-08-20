import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const desert_dunesTheme: ClockThemeRenderer = {
  name: 'desert_dunes',
  description: 'Golden undulating sand dunes under a radiant desert sun leading to a palm oasis',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<polygon points="150,12 153,18 147,18" fill="#fef08a" stroke="#451a03" stroke-width="0.6" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="desert_dunes_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="desert_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="dune_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ea580c"/>
          <stop offset="40%" stop-color="#fb923c"/>
          <stop offset="80%" stop-color="#fed7aa"/>
          <stop offset="100%" stop-color="#fef08a"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#dune_sky)" stroke="#d97706" stroke-width="2.5"/>
      <g clip-path="url(#desert_dial_clip)">
        <!-- Radiant Sun -->
        <circle cx="150" cy="90" r="35" fill="#fef08a" opacity="0.9"/>
        <!-- Dune Ridges -->
        <path d="M 0 170 C 80 140 160 190 300 160 L 300 300 L 0 300 Z" fill="#d97706"/>
        <path d="M 0 205 C 100 180 190 230 300 195 L 300 300 L 0 300 Z" fill="#b45309"/>
        <path d="M 0 245 C 110 220 200 270 300 235 L 300 300 L 0 300 Z" fill="#78350f"/>
        <!-- Oasis Water & Palm -->
        <ellipse cx="110" cy="245" rx="30" ry="10" fill="#0284c7"/>
        <path d="M 125 245 Q 135 210 140 190" stroke="#451a03" stroke-width="3" fill="none"/>
        <path d="M 140 190 Q 120 180 105 195" stroke="#15803d" stroke-width="2.5" fill="none"/>
        <path d="M 140 190 Q 160 180 170 195" stroke="#15803d" stroke-width="2.5" fill="none"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#451a03" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="68" r="3.5" fill="#f59e0b"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#78350f" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="32" r="3" fill="#fef08a"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#451a03" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#fef08a"/>
      </g>
    
    `;
  }
};
