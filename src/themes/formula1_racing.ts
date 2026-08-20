import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const formula1_racingTheme: ClockThemeRenderer = {
  name: 'formula1_racing',
  description: 'High-rev motorsport carbon fiber tachometer with redline RPM zone and checkered flag motif',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<rect x="148" y="10" width="4" height="12" fill="${i>=8?'#ef4444':'#ffffff'}" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="formula1_racing_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="f1_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="carbon_bg" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#09090b"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.8"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#carbon_bg)" stroke="#ef4444" stroke-width="3"/>
      <g clip-path="url(#f1_dial_clip)">
        <!-- Outer Speed Scale Rings -->
        <circle cx="150" cy="150" r="122" stroke="#334155" stroke-width="6" fill="none"/>
        <path d="M 68 230 A 115 115 0 1 1 232 230" stroke="#3b82f6" stroke-width="8" fill="none"/>
        <!-- Redline Zone Arc -->
        <path d="M 150 35 A 115 115 0 0 1 232 230" stroke="#ef4444" stroke-width="8" fill="none"/>
        <!-- Checkered Finish Pattern at 12 o'clock -->
        <g transform="translate(135, 45)">
          <rect x="0" y="0" width="7" height="7" fill="#ffffff"/><rect x="7" y="0" width="7" height="7" fill="#000000"/>
          <rect x="14" y="0" width="7" height="7" fill="#ffffff"/><rect x="21" y="0" width="7" height="7" fill="#000000"/>
          <rect x="0" y="7" width="7" height="7" fill="#000000"/><rect x="7" y="7" width="7" height="7" fill="#ffffff"/>
          <rect x="14" y="7" width="7" height="7" fill="#000000"/><rect x="21" y="7" width="7" height="7" fill="#ffffff"/>
        </g>
        <!-- Center Gear HUD Indicator -->
        <rect x="135" y="175" width="30" height="24" rx="4" fill="#000000" stroke="#ef4444" stroke-width="1.5"/>
        <text x="150" y="192" fill="#ef4444" font-size="14" font-weight="900" font-family="monospace" text-anchor="middle">7</text>
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
          <line x1="150" y1="140" x2="150" y2="40" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#ef4444"/>
      </g>
    
    `;
  }
};
