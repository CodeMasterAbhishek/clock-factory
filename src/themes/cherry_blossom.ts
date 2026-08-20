import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cherry_blossomTheme: ClockThemeRenderer = {
  name: 'cherry_blossom',
  description: 'Lush Japanese cherry blossom canopy with drifting sakura petals and a peaceful koi pond',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#e11d48" stroke="#ffffff" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="cherry_blossom_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="sakura_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fdf2f8"/>
          <stop offset="50%" stop-color="#fce7f3"/>
          <stop offset="100%" stop-color="#bae6fd"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#sakura_sky)" stroke="#f43f5e" stroke-width="2.5"/>
      <g clip-path="url(#cherry_blossom_dial_clip)">
        <!-- Koi Pond Water -->
        <path d="M 0 190 C 80 170 220 170 300 190 L 300 300 L 0 300 Z" fill="#0284c7"/>
        <path d="M 30 220 Q 150 205 270 220" stroke="#7dd3fc" stroke-width="2" fill="none" opacity="0.6"/>
        <!-- Orange & White Koi Fish -->
        <g transform="translate(140, 235) rotate(20) scale(0.8)">
          <path d="M -15 0 C -10 -8 10 -8 18 0 C 10 8 -10 8 -15 0 Z" fill="#ea580c"/>
          <path d="M -5 -6 Q 0 0 -5 6" stroke="#ffffff" stroke-width="3" fill="none"/>
          <polygon points="-15,0 -22,-6 -20,0 -22,6" fill="#ea580c"/>
        </g>
        <!-- Cherry Tree Branches -->
        <path d="M 280 20 Q 200 45 150 25 Q 100 40 40 30" stroke="#78350f" stroke-width="6" stroke-linecap="round" fill="none"/>
        <path d="M 170 30 Q 140 70 120 85" stroke="#78350f" stroke-width="4" stroke-linecap="round" fill="none"/>
        <!-- Sakura Petal Clusters -->
        <g fill="#f472b6" opacity="0.95">
          <circle cx="50" cy="35" r="9"/><circle cx="75" cy="45" r="10"/><circle cx="110" cy="30" r="11"/>
          <circle cx="140" cy="55" r="10"/><circle cx="170" cy="35" r="12"/><circle cx="210" cy="40" r="11"/>
          <circle cx="250" cy="30" r="9"/><circle cx="120" cy="85" r="8"/>
        </g>
        <g fill="#fbcfe8" opacity="0.85">
          <circle cx="75" cy="45" r="5"/><circle cx="140" cy="55" r="5"/><circle cx="170" cy="35" r="6"/>
        </g>
        <!-- Drifting Airborne Petals -->
        <circle cx="95" cy="115" r="3.5" fill="#f43f5e" opacity="0.75"/>
        <circle cx="180" cy="130" r="4" fill="#f43f5e" opacity="0.75"/>
        <circle cx="225" cy="155" r="3.5" fill="#f43f5e" opacity="0.75"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#881337" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="68" r="3.5" fill="#f43f5e"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#be123c" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="32" r="3" fill="#fbcfe8"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f43f5e" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#f43f5e" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f43f5e"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#881337" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#fbcfe8"/>
      </g>
    
    `;
  }
};
