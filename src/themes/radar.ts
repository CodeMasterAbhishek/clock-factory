import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const radarTheme: ClockThemeRenderer = {
  name: 'radar',
  description: 'Sweeping green radar HUD with crosshairs',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        for (let i = 0; i < 360; i+=15) {
          const l = i % 90 === 0 ? 15 : 8;
          ticks += `<line x1="150" y1="5" x2="150" y2="${5+l}" stroke="#10b981" stroke-width="2" transform="rotate(${i} 150 150)"/>`;
        }
    
    return `
      
      
      <!-- Radar Background -->
      <circle cx="150" cy="150" r="145" fill="#064e3b" stroke="#10b981" stroke-width="2"/>
      <!-- Concentric Rings -->
      <circle cx="150" cy="150" r="110" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <circle cx="150" cy="150" r="75" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <circle cx="150" cy="150" r="40" fill="none" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <!-- Crosshairs -->
      <line x1="150" y1="5" x2="150" y2="295" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <line x1="5" y1="150" x2="295" y2="150" stroke="#10b981" stroke-width="1" opacity="0.5"/>
      <!-- Blips -->
      <circle cx="100" cy="80" r="4" fill="#34d399" filter="url(#blur_filter)"/>
      <circle cx="210" cy="200" r="3" fill="#34d399" filter="url(#blur_filter)"/>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <!-- Sweeping Wedge (Second Hand) -->
      ${options.showSeconds !== false ? `
      <g transform="rotate(${time.secondAngle} 150 150)">
        <path d="M 150 150 L 150 5 A 145 145 0 0 1 250 45 Z" fill="#10b981" opacity="0.3"/>
        <line x1="150" y1="150" x2="150" y2="5" stroke="#34d399" stroke-width="2"/>
      </g>` : ''}
      <!-- Hour/Minute -->
      <line x1="150" y1="150" x2="150" y2="80" stroke="#a7f3d0" stroke-width="4" stroke-linecap="round" transform="rotate(${time.hourAngle} 150 150)"/>
      <line x1="150" y1="150" x2="150" y2="40" stroke="#a7f3d0" stroke-width="2" stroke-linecap="round" transform="rotate(${time.minuteAngle} 150 150)"/>
      <circle cx="150" cy="150" r="4" fill="#34d399"/>
    
    
    `;
  }
};
