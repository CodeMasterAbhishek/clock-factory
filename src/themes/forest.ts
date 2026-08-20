import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const forestTheme: ClockThemeRenderer = {
  name: 'forest',
  description: 'Layered evergreen tree silhouettes beneath a soft mountain mist',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
      for (let i = 0; i < 12; i++) {
        ticks += `<circle cx="150" cy="18" r="3" fill="#a7f3d0" transform="rotate(${i*30} 150 150)"/>`;
      }
    
    return `
      
      
      <defs>
        <clipPath id="forest_dial_clip">
          <circle cx="150" cy="150" r="145"/>

      
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <linearGradient id="forest_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#064e3b"/>
          <stop offset="60%" stop-color="#0f766e"/>
          <stop offset="100%" stop-color="#134e4a"/>
        </linearGradient>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#forest_sky)" stroke="#34d399" stroke-width="2"/>

      <g clip-path="url(#forest_dial_clip)">
      <!-- Distant Trees -->
      <g fill="#047857" opacity="0.6">
        <polygon points="60,250 80,170 100,250"/>
        <polygon points="130,250 150,150 170,250"/>
        <polygon points="200,250 220,165 240,250"/>
      </g>
      <!-- Foreground Trees -->
      <g fill="#064e3b">
        <polygon points="20,290 50,190 80,290"/>
        <polygon points="90,290 120,180 150,290"/>
        <polygon points="160,290 190,175 220,290"/>
        <polygon points="230,290 260,195 290,290"/>
      </g>
      <!-- Moon in Sky -->
      <circle cx="230" cy="70" r="16" fill="#fef08a" opacity="0.85"/>
    
      </g>

      </g>

      <g class="ticks">${ticks}
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <line x1="150" y1="150" x2="150" y2="80" stroke="#fef08a" stroke-width="4" stroke-linecap="round" transform="rotate(${time.hourAngle} 150 150)"/>
      <line x1="150" y1="150" x2="150" y2="40" stroke="#fef08a" stroke-width="2.5" stroke-linecap="round" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `
      <line x1="150" y1="160" x2="150" y2="25" stroke="#34d399" stroke-width="1.5" transform="rotate(${time.secondAngle} 150 150)"/>
      ` : ''}
      <circle cx="150" cy="150" r="5" fill="#fef08a"/>
    
    
    `;
  }
};
