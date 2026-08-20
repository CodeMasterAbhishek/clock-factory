import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const timemachineTheme: ClockThemeRenderer = {
  name: 'timemachine',
  description: 'Y-shaped energy tubes and exposed tech components',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        for (let i = 0; i < 12; i++) {
          ticks += `<circle cx="150" cy="15" r="4" fill="#cbd5e1" transform="rotate(${i*30} 150 150)"/>`;
        }
    
    return `
      
      
      <circle cx="150" cy="150" r="145" fill="#1e293b" stroke="#94a3b8" stroke-width="6"/>
      <!-- Flux Y Shape -->
      <g stroke="#38bdf8" stroke-width="12" stroke-linecap="round" filter="drop-shadow(0 0 8px #7dd3fc)">
        <line x1="150" y1="150" x2="150" y2="60"/>
        <line x1="150" y1="150" x2="70" y2="210"/>
        <line x1="150" y1="150" x2="230" y2="210"/>
      </g>
      <!-- Connectors -->
      <circle cx="150" cy="60" r="8" fill="#e2e8f0"/>
      <circle cx="70" cy="210" r="8" fill="#e2e8f0"/>
      <circle cx="230" cy="210" r="8" fill="#e2e8f0"/>
      <!-- Background details -->
      <rect x="120" y="20" width="60" height="20" fill="#334155" rx="4"/>
      <rect x="30" y="150" width="20" height="50" fill="#334155" rx="4" transform="rotate(-30 40 175)"/>
      <rect x="250" y="150" width="20" height="50" fill="#334155" rx="4" transform="rotate(30 260 175)"/>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <rect x="145" y="80" width="10" height="70" fill="#e2e8f0" stroke="#0f172a" stroke-width="2" transform="rotate(${time.hourAngle} 150 150)"/>
      <rect x="147" y="30" width="6" height="120" fill="#94a3b8" stroke="#0f172a" stroke-width="1" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `<line x1="150" y1="160" x2="150" y2="20" stroke="#fcd34d" stroke-width="2" transform="rotate(${time.secondAngle} 150 150)"/>` : ''}
      <circle cx="150" cy="150" r="12" fill="#0f172a" stroke="#e2e8f0" stroke-width="3"/>
    
    
    `;
  }
};
