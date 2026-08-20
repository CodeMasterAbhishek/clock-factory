import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const mechaTheme: ClockThemeRenderer = {
  name: 'mecha',
  description: 'Robotic terminator aperture with glowing red optical sensor',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        for (let i = 0; i < 12; i++) {
          ticks += `<polygon points="146,15 154,15 150,25" fill="#ef4444" transform="rotate(${i*30} 150 150)"/>`;
        }
    
    return `
      
      
      <circle cx="150" cy="150" r="145" fill="#171717" stroke="#3f3f46" stroke-width="8"/>
      <!-- Aperture Blades -->
      <g stroke="#52525b" stroke-width="2" fill="#27272a">
        <polygon points="150,5 230,100 150,110 90,60"/>
        <polygon points="295,150 200,230 190,150 240,90"/>
        <polygon points="150,295 70,200 150,190 210,240"/>
        <polygon points="5,150 100,70 110,150 60,210"/>
      </g>
      <!-- Red Optic Core -->
      <circle cx="150" cy="150" r="45" fill="#000000" stroke="#7f1d1d" stroke-width="4"/>
      <circle cx="150" cy="150" r="25" fill="#dc2626" filter="drop-shadow(0 0 10px #ef4444)"/>
      <circle cx="155" cy="145" r="5" fill="#fca5a5"/>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <!-- Laser Beams -->
      <line x1="150" y1="105" x2="150" y2="40" stroke="#ef4444" stroke-width="6" stroke-linecap="square" filter="drop-shadow(0 0 5px #ef4444)" transform="rotate(${time.hourAngle} 150 150)"/>
      <line x1="150" y1="105" x2="150" y2="20" stroke="#fca5a5" stroke-width="3" stroke-linecap="square" filter="drop-shadow(0 0 5px #fca5a5)" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `<line x1="150" y1="150" x2="150" y2="10" stroke="#ffffff" stroke-width="1" filter="drop-shadow(0 0 3px #ffffff)" transform="rotate(${time.secondAngle} 150 150)"/>` : ''}
    
    
    `;
  }
};
