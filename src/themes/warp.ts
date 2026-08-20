import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const warpTheme: ClockThemeRenderer = {
  name: 'warp',
  description: 'Pulsing energy reactor with metallic struts',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        for (let i = 0; i < 12; i++) {
          ticks += `<rect x="146" y="10" width="8" height="15" fill="#94a3b8" transform="rotate(${i*30} 150 150)"/>`;
        }
    
    return `
      
      
      <defs>
        <clipPath id="warp_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <radialGradient id="warp_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="20%" stop-color="#3b82f6"/>
          <stop offset="60%" stop-color="#1e3a8a"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#warp_grad)" />
      <!-- Struts -->
      <path d="M 150 150 L 150 5 Z M 150 150 L 295 150 Z M 150 150 L 150 295 Z M 150 150 L 5 150 Z" stroke="#334155" stroke-width="8"/>
      <circle cx="150" cy="150" r="145" fill="none" stroke="#475569" stroke-width="10"/>
      <circle cx="150" cy="150" r="60" fill="none" stroke="#60a5fa" stroke-width="4" stroke-dasharray="10 15"/>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <line x1="150" y1="150" x2="150" y2="70" stroke="#ffffff" stroke-width="8" stroke-linecap="round" filter="drop-shadow(0 0 4px #3b82f6)" transform="rotate(${time.hourAngle} 150 150)"/>
      <line x1="150" y1="150" x2="150" y2="35" stroke="#bfdbfe" stroke-width="4" stroke-linecap="round" filter="drop-shadow(0 0 6px #60a5fa)" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `<line x1="150" y1="160" x2="150" y2="15" stroke="#93c5fd" stroke-width="2" transform="rotate(${time.secondAngle} 150 150)"/>` : ''}
      <circle cx="150" cy="150" r="15" fill="#1d4ed8" stroke="#60a5fa" stroke-width="2"/>
    
    
    `;
  }
};
