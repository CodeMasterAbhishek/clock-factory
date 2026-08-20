import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const basketballTheme: ClockThemeRenderer = {
  name: 'basketball',
  description: 'Gloss parquet hardwood basketball court with realistic 3D textured leather ball and painted key arcs',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#fef08a" stroke="#000000" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="basketball_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="bball_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="bball_wood" cx="45%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#fdba74"/>
          <stop offset="60%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#9a3412"/>
        </radialGradient>
        <radialGradient id="bball_sphere" cx="35%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#fb923c"/>
          <stop offset="50%" stop-color="#ea580c"/>
          <stop offset="85%" stop-color="#c2410c"/>
          <stop offset="100%" stop-color="#7c2d12"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#bball_wood)" stroke="#7c2d12" stroke-width="3"/>
      <g clip-path="url(#bball_dial_clip)">
        <!-- Parquet Flooring Planks -->
        <g stroke="#9a3412" stroke-width="0.8" opacity="0.35">
          <line x1="0" y1="40" x2="300" y2="40"/><line x1="0" y1="80" x2="300" y2="80"/>
          <line x1="0" y1="120" x2="300" y2="120"/><line x1="0" y1="160" x2="300" y2="160"/>
          <line x1="0" y1="200" x2="300" y2="200"/><line x1="0" y1="240" x2="300" y2="240"/>
        </g>
        <!-- Painted Basketball Court Markings -->
        <g stroke="#ffffff" stroke-width="2.5" fill="none">
          <line x1="0" y1="150" x2="300" y2="150"/>
          <circle cx="150" cy="150" r="45"/>
          <path d="M 40 0 C 40 90 260 90 260 0"/>
          <rect x="105" y="0" width="90" height="70" fill="#c2410c" opacity="0.45"/>
          <path d="M 40 300 C 40 210 260 210 260 300"/>
          <rect x="105" y="230" width="90" height="70" fill="#c2410c" opacity="0.45"/>
        </g>
        <!-- 3D Basketball Center Sphere -->
        <g transform="translate(150, 150)">
          <circle cx="0" cy="0" r="40" fill="url(#bball_sphere)" stroke="#431407" stroke-width="1.5"/>
          <!-- Black Basketball Seams with Depth -->
          <circle cx="0" cy="0" r="40" fill="none" stroke="#292524" stroke-width="2.5"/>
          <path d="M -40 0 Q 0 -22 40 0" stroke="#292524" stroke-width="2.5" fill="none"/>
          <path d="M -40 0 Q 0 22 40 0" stroke="#292524" stroke-width="2.5" fill="none"/>
          <line x1="0" y1="-40" x2="0" y2="40" stroke="#292524" stroke-width="2.5"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#431407" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#431407" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ffffff" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/>
          <circle cx="150" cy="150" r="3" fill="#ffffff"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#431407" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#fef08a"/>
      </g>
    
    `;
  }
};
