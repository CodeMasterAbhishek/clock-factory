import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const badminton_shuttleTheme: ClockThemeRenderer = {
  name: 'badminton_shuttle',
  description: 'Emerald green tournament badminton court with net and white feathered goose shuttlecock',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#ffffff" stroke="#047857" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="badminton_shuttle_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="bad_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="bad_court" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#059669"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#bad_court)" stroke="#10b981" stroke-width="3"/>
      <g clip-path="url(#bad_dial_clip)">
        <!-- Court White Boundary Lines -->
        <rect x="40" y="40" width="220" height="220" fill="none" stroke="#ffffff" stroke-width="2"/>
        <line x1="40" y1="150" x2="260" y2="150" stroke="#ffffff" stroke-width="3"/>
        <line x1="150" y1="40" x2="150" y2="260" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Shuttlecock (Top Center) -->
        <g transform="translate(150, 110) rotate(-45)">
          <!-- Cork Tip -->
          <circle cx="0" cy="18" r="8" fill="#ffffff" stroke="#78350f" stroke-width="1.5"/>
          <rect x="-8" y="10" width="16" height="4" fill="#dc2626"/>
          <!-- Feather Skirt -->
          <polygon points="0,10 -18,-18 18,-18" fill="#ffffff" stroke="#94a3b8" stroke-width="1"/>
          <line x1="-12" y1="-6" x2="12" y2="-6" stroke="#94a3b8" stroke-width="1"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#064e3b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#34d399"/>
      </g>
    
    `;
  }
};
