import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const starshipTheme: ClockThemeRenderer = {
  name: 'starship',
  description: 'Sleek white and cyan curved progress bars',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        const nums = ['00','01','02','03','04','05','06','07','08','09','10','11'];
        for (let i = 0; i < 12; i++) {
          const rad = (i * 30 - 90) * (Math.PI / 180);
          const r = 130;
          const nx = 150 + r * Math.cos(rad);
          const ny = 150 + r * Math.sin(rad) + 4;
          ticks += `<text x="${nx}" y="${ny}" text-anchor="middle" font-family="monospace" font-size="12" font-weight="bold" fill="#64748b">${nums[i]}</text>`;
        }
    
    return `
      
      
      <circle cx="150" cy="150" r="145" fill="#ffffff" stroke="#e2e8f0" stroke-width="2"/>
      <!-- Circular Progress Bars (HUD) -->
      <circle cx="150" cy="150" r="110" fill="none" stroke="#f1f5f9" stroke-width="12"/>
      <circle cx="150" cy="150" r="110" fill="none" stroke="#0ea5e9" stroke-width="12" stroke-dasharray="400 200" transform="rotate(120 150 150)"/>
      <circle cx="150" cy="150" r="85" fill="none" stroke="#f1f5f9" stroke-width="8"/>
      <circle cx="150" cy="150" r="85" fill="none" stroke="#0284c7" stroke-width="8" stroke-dasharray="150 400" transform="rotate(-45 150 150)"/>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <!-- Sleek Needles -->
      <path d="M 148 150 L 148 70 L 150 60 L 152 70 L 152 150 Z" fill="#0f172a" transform="rotate(${time.hourAngle} 150 150)"/>
      <path d="M 149 150 L 149 40 L 150 30 L 151 40 L 151 150 Z" fill="#0ea5e9" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `<line x1="150" y1="160" x2="150" y2="25" stroke="#f43f5e" stroke-width="1" transform="rotate(${time.secondAngle} 150 150)"/>` : ''}
      <circle cx="150" cy="150" r="4" fill="#f43f5e"/>
    
    
    `;
  }
};
