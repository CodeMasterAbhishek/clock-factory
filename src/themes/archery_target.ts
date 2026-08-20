import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const archery_targetTheme: ClockThemeRenderer = {
  name: 'archery_target',
  description: 'Target bullseye rings (Gold 10/9, Red 8/7, Blue 6/5, Black 4/3, White 2/1) with arrow shaft',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#000000" stroke="#ffffff" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="archery_target_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="arch_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="#f8fafc" stroke="#000000" stroke-width="2"/>
      <g clip-path="url(#arch_dial_clip)">
        <!-- Concentric Target Rings -->
        <circle cx="150" cy="150" r="120" fill="#0f172a"/>
        <circle cx="150" cy="150" r="95" fill="#0284c7"/>
        <circle cx="150" cy="150" r="70" fill="#ef4444"/>
        <circle cx="150" cy="150" r="45" fill="#facc15"/>
        <!-- Inner X Bullseye Ring -->
        <circle cx="150" cy="150" r="22" fill="none" stroke="#ca8a04" stroke-width="1.5"/>
        <line x1="145" y1="150" x2="155" y2="150" stroke="#ca8a04" stroke-width="1.5"/>
        <line x1="150" y1="145" x2="150" y2="155" stroke="#ca8a04" stroke-width="1.5"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#facc15" stroke-width="2.5" stroke-linecap="round"/>
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
        <circle cx="150" cy="150" r="2.5" fill="#facc15"/>
      </g>
    
    `;
  }
};
