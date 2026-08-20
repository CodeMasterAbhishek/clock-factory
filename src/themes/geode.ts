import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const geodeTheme: ClockThemeRenderer = {
  name: 'geode',
  description: 'Raw stone geode rim with glittering purple crystalline quartz interior',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<polygon points="150,16 153,22 147,22" fill="#f3e8ff" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      
      <defs>
        <clipPath id="geode_dial_clip">
          <circle cx="150" cy="150" r="145"/>

      
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <radialGradient id="geode_core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#3b0764"/>
          <stop offset="60%" stop-color="#581c87"/>
          <stop offset="85%" stop-color="#9333ea"/>
          <stop offset="100%" stop-color="#e9d5ff"/>
        </radialGradient>
      </defs>
      <!-- Rocky Crust -->
      <circle cx="150" cy="150" r="145" fill="#44403c" stroke="#292524" stroke-width="8"/>

      <g clip-path="url(#geode_dial_clip)">
      <circle cx="150" cy="150" r="136" fill="#a8a29e"/>
      <!-- Crystal Bed -->
      <circle cx="150" cy="150" r="128" fill="url(#geode_core)"/>
      <!-- Faceted Crystal Teeth -->
      <g fill="#c084fc" stroke="#581c87" stroke-width="1">
        ${Array.from({length: 12}).map((_, i) => `
          <polygon points="146,28 154,28 150,42" transform="rotate(${i * 30} 150 150)"/>
        `).join('')}
      </g>
    
      </g>

      </g>

      <g class="ticks">${ticks}
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <polygon points="146,150 154,150 150,75" fill="#e9d5ff" transform="rotate(${time.hourAngle} 150 150)"/>
      <polygon points="147,150 153,150 150,35" fill="#ffffff" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `<line x1="150" y1="160" x2="150" y2="20" stroke="#f472b6" stroke-width="1.5" transform="rotate(${time.secondAngle} 150 150)"/>` : ''}
      <circle cx="150" cy="150" r="5" fill="#ffffff"/>
    
    
    `;
  }
};
