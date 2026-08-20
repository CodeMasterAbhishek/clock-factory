import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const boxing_ringTheme: ClockThemeRenderer = {
  name: 'boxing_ring',
  description: 'Dramatic 4-rope square boxing ring canvas under arena lights with leather boxing gloves',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#ef4444" stroke="#ffffff" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="boxing_ring_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="boxing_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="ring_canvas" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#334155"/>
          <stop offset="70%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#09090b"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#ring_canvas)" stroke="#ef4444" stroke-width="3"/>
      <g clip-path="url(#boxing_dial_clip)">
        <!-- Square Canvas Ropes (Red & Blue corners) -->
        <rect x="50" y="50" width="200" height="200" fill="none" stroke="#ef4444" stroke-width="3"/>
        <rect x="60" y="60" width="180" height="180" fill="none" stroke="#ffffff" stroke-width="2.5"/>
        <rect x="70" y="70" width="160" height="160" fill="none" stroke="#3b82f6" stroke-width="3"/>
        <!-- Corner Turnbuckle Pads -->
        <circle cx="50" cy="50" r="10" fill="#ef4444"/>
        <circle cx="250" cy="250" r="10" fill="#3b82f6"/>
        <circle cx="250" cy="50" r="8" fill="#ffffff"/>
        <circle cx="50" cy="250" r="8" fill="#ffffff"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#3b82f6" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#facc15" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#facc15" stroke="#000000" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#ef4444"/>
      </g>
    
    `;
  }
};
