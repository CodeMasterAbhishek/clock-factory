import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const tennis_slamTheme: ClockThemeRenderer = {
  name: 'tennis_slam',
  description: 'Tournament court green & blue with white baseline lines and optic-yellow tennis ball seams',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#ffffff" stroke="#4d7c0f" stroke-width="1" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="tennis_slam_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="tennis_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="tennis_ball" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="60%" stop-color="#a3e635"/>
          <stop offset="100%" stop-color="#65a30d"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#tennis_ball)" stroke="#4d7c0f" stroke-width="3"/>
      <g clip-path="url(#tennis_dial_clip)">
        <!-- Tennis Ball Curved Seams -->
        <path d="M 40 40 Q 150 100 260 40" stroke="#ffffff" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <path d="M 40 260 Q 150 200 260 260" stroke="#ffffff" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <!-- Tennis Court Grid Lines -->
        <g stroke="#ffffff" stroke-width="1.5" opacity="0.4" fill="none">
          <rect x="50" y="50" width="200" height="200"/>
          <line x1="50" y1="150" x2="250" y2="150"/>
          <line x1="150" y1="50" x2="150" y2="250"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#14532d" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#14532d" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ea580c" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ea580c" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ea580c"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#14532d" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#fef08a"/>
      </g>
    
    `;
  }
};
