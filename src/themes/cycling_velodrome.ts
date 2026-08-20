import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cycling_velodromeTheme: ClockThemeRenderer = {
  name: 'cycling_velodrome',
  description: 'Banked timber indoor velodrome sprint track with blue stayers line and aero tri-spoke wheel',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<rect x="148" y="10" width="4" height="12" fill="#0284c7" stroke="#ffffff" stroke-width="0.6" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="cycling_velodrome_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="velo_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="velo_wood" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fed7aa"/>
          <stop offset="60%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#7c2d12"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#velo_wood)" stroke="#0284c7" stroke-width="3"/>
      <g clip-path="url(#velo_dial_clip)">
        <!-- Concentric Velodrome Track Lines -->
        <circle cx="150" cy="150" r="125" fill="none" stroke="#ef4444" stroke-width="2"/>
        <circle cx="150" cy="150" r="105" fill="none" stroke="#0284c7" stroke-width="3.5"/>
        <circle cx="150" cy="150" r="85" fill="none" stroke="#ffffff" stroke-width="2"/>
        <!-- Carbon Tri-Spoke Aero Wheel Pattern -->
        <g stroke="#0f172a" stroke-width="12" stroke-linecap="round">
          <line x1="150" y1="150" x2="150" y2="45"/>
          <line x1="150" y1="150" x2="60" y2="200"/>
          <line x1="150" y1="150" x2="240" y2="200"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#ef4444" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#0284c7" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#facc15" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#facc15" stroke="#000000" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#ef4444"/>
      </g>
    
    `;
  }
};
