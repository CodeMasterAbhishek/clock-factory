import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cyberdeckTheme: ClockThemeRenderer = {
  name: 'cyberdeck',
  description: 'Neon yellow circuit board traces and microchip hub',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        for (let i = 0; i < 12; i++) {
          ticks += `<rect x="147" y="10" width="6" height="10" fill="#eab308" transform="rotate(${i*30} 150 150)"/>`;
          ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ca8a04" stroke-width="2" transform="rotate(${i*30} 150 150)"/>`;
        }
    
    return `
      
      
      <circle cx="150" cy="150" r="145" fill="#09090b" stroke="#eab308" stroke-width="2"/>
      <!-- Circuit Traces -->
      <g fill="none" stroke="#a16207" stroke-width="2">
        <path d="M 150 150 L 100 100 L 40 100" />
        <circle cx="40" cy="100" r="3" fill="#eab308"/>
        <path d="M 150 150 L 200 100 L 200 40" />
        <circle cx="200" cy="40" r="3" fill="#eab308"/>
        <path d="M 150 150 L 100 200 L 100 260" />
        <circle cx="100" cy="260" r="3" fill="#eab308"/>
        <path d="M 150 150 L 200 200 L 260 200" />
        <circle cx="260" cy="200" r="3" fill="#eab308"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <!-- Traces as hands -->
      <path d="M 148 150 L 148 80 L 152 80 L 152 150 Z" fill="#facc15" transform="rotate(${time.hourAngle} 150 150)"/>
      <path d="M 149 150 L 149 40 L 151 40 L 151 150 Z" fill="#fde047" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="160" x2="150" y2="25" stroke="#ef4444" stroke-width="1.5"/>
          <rect x="148" y="25" width="4" height="4" fill="#ef4444"/>
        </g>
      ` : ''}
      <!-- Microchip Center -->
      <rect x="140" y="140" width="20" height="20" fill="#18181b" stroke="#eab308" stroke-width="2"/>
    
    
    `;
  }
};
