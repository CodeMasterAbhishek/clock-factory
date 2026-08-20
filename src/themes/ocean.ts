import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const oceanTheme: ClockThemeRenderer = {
  name: 'ocean',
  description: 'Majestic cresting deep-blue tidal wave with seafoam spray droplets',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
      for (let i = 0; i < 12; i++) {
        ticks += `<circle cx="150" cy="18" r="3.5" fill="#e0f2fe" transform="rotate(${i*30} 150 150)"/>`;
      }
    
    return `
      
      
      <defs>
        <clipPath id="ocean_dial_clip">
          <circle cx="150" cy="150" r="145"/>

      
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <radialGradient id="ocean_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#0c4a6e"/>
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#ocean_grad)" stroke="#38bdf8" stroke-width="2"/>

      <g clip-path="url(#ocean_dial_clip)">
      <!-- Wave Layer 1 -->
      <path d="M 5 210 Q 75 140 150 200 T 295 180 L 295 295 L 5 295 Z" fill="#0369a1" opacity="0.8"/>
      <!-- Main Cresting Wave -->
      <path d="M 5 180 Q 90 60 170 120 Q 230 160 295 130 L 295 295 L 5 295 Z" fill="#0284c7"/>
      <!-- Foam Top -->
      <path d="M 5 180 Q 90 60 170 120 Q 230 160 295 130" fill="none" stroke="#ffffff" stroke-width="8" stroke-linecap="round"/>
      <circle cx="165" cy="115" r="5" fill="#ffffff"/>
      <circle cx="180" cy="125" r="4" fill="#ffffff"/>
      <circle cx="150" cy="100" r="3" fill="#ffffff"/>
    
      </g>

      </g>

      <g class="ticks">${ticks}
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <polygon points="146,150 154,150 150,75" fill="#f8fafc" transform="rotate(${time.hourAngle} 150 150)"/>
      <polygon points="147,150 153,150 150,35" fill="#bae6fd" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `
      <line x1="150" y1="160" x2="150" y2="20" stroke="#38bdf8" stroke-width="1.5" transform="rotate(${time.secondAngle} 150 150)"/>
      <circle cx="150" cy="20" r="3" fill="#38bdf8" transform="rotate(${time.secondAngle} 150 150)"/>
      ` : ''}
      <circle cx="150" cy="150" r="5" fill="#38bdf8"/>
    
    
    `;
  }
};
