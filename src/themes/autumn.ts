import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const autumnTheme: ClockThemeRenderer = {
  name: 'autumn',
  description: 'Rich amber maple leaf with delicate veins and sunset forest colors',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
      for (let i = 0; i < 12; i++) {
        ticks += `<circle cx="150" cy="18" r="3.5" fill="#9a3412" transform="rotate(${i*30} 150 150)"/>`;
      }
    
    return `
      
      
      <defs>
        <clipPath id="autumn_dial_clip">
          <circle cx="150" cy="150" r="145"/>

      
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <radialGradient id="autumn_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff7ed"/>
          <stop offset="80%" stop-color="#fed7aa"/>
          <stop offset="100%" stop-color="#fdba74"/>
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#autumn_grad)" stroke="#c2410c" stroke-width="3"/>

      <g clip-path="url(#autumn_dial_clip)">
      <!-- Maple Leaf Silhouette -->
      <g fill="#ea580c" stroke="#9a3412" stroke-width="2">
        <path d="M 150 45 L 165 95 L 195 85 L 185 115 L 225 125 L 195 155 L 205 185 L 165 175 L 150 235 L 135 175 L 95 185 L 105 155 L 75 125 L 115 115 L 105 85 L 135 95 Z"/>
      </g>
      <!-- Leaf Veins -->
      <line x1="150" y1="65" x2="150" y2="225" stroke="#ffedd5" stroke-width="2"/>
      <line x1="150" y1="135" x2="195" y2="105" stroke="#ffedd5" stroke-width="1.5"/>
      <line x1="150" y1="135" x2="105" y2="105" stroke="#ffedd5" stroke-width="1.5"/>
    
      </g>

      </g>

      <g class="ticks">${ticks}
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <polygon points="146,150 154,150 150,75" fill="#7c2d12" transform="rotate(${time.hourAngle} 150 150)"/>
      <polygon points="147,150 153,150 150,35" fill="#9a3412" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `
      <line x1="150" y1="160" x2="150" y2="20" stroke="#f97316" stroke-width="1.5" transform="rotate(${time.secondAngle} 150 150)"/>
      <circle cx="150" cy="20" r="3" fill="#f97316"/>
      ` : ''}
      <circle cx="150" cy="150" r="5" fill="#7c2d12"/>
    
    
    `;
  }
};
