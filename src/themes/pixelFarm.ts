import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const pixelFarmTheme: ClockThemeRenderer = {
  name: 'pixel-farm',
  description: 'Stardew Valley inspired cozy 8-bit pixel art farmhouse clock with wooden frame and golden farm star',
  defaultColors: {
    face: '#fef3c7',
    dialBorder: '#78350f',
    hourTicks: '#92400e',
    minuteTicks: '#d97706',
    numbers: '#78350f',
    hourHand: '#451a03',
    minuteHand: '#78350f',
    secondHand: '#dc2626',
    accent: '#f59e0b',
    centerCap: '#f59e0b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Pixel Block Ticks
    let pixelTicks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const isCard = i % 3 === 0;
      if (isCard) {
        pixelTicks += `<rect x="146" y="44" width="8" height="8" fill="${colors.hourTicks}" transform="rotate(${angle} 150 150)"/>`;
      } else {
        pixelTicks += `<rect x="148" y="46" width="4" height="4" fill="${colors.minuteTicks}" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    return `
      
      <!-- Pixel Outer Wood Frame (Chunky Stepped Octagon) -->
      <!-- Shadow Layer -->
      <polygon points="50,15 250,15 295,60 295,240 250,285 50,285 5,240 5,60" fill="#451a03"/>
      <!-- Mid Wood -->
      <polygon points="52,18 248,18 290,60 290,238 248,280 52,280 10,238 10,60" fill="#92400e"/>
      <!-- Light Wood Plank Highlights -->
      <polygon points="55,22 245,22 284,61 284,235 245,274 55,274 16,235 16,61" fill="#b45309"/>
      
      <!-- Inner Pixel Dial Face -->
      <polygon points="70,40 230,40 260,70 260,230 230,260 70,260 40,230 40,70" fill="${colors.face}" stroke="#78350f" stroke-width="4"/>

      <!-- Stardew Golden Stardrop Star at 12 O'Clock -->
      <g transform="translate(150, 28)">
        <polygon points="0,-8 3,-2 9,-2 4,2 6,8 0,4 -6,8 -4,2 -9,-2 -3,-2" fill="#fbbf24" stroke="#d97706" stroke-width="1.5"/>
        <rect x="-1" y="-1" width="2" height="2" fill="#ffffff"/>
      </g>

      <!-- Little Pixel Sprout at 6 O'Clock -->
      <g transform="translate(150, 246)">
        <path d="M 0,0 Q -6,-6 -3,-10 Q 0,-6 0,0 Q 0,-6 3,-10 Q 6,-6 0,0" fill="#22c55e" stroke="#15803d" stroke-width="1.5"/>
        <line x1="0" y1="0" x2="0" y2="4" stroke="#78350f" stroke-width="2"/>
      </g>

      <!-- Pixel Ticks -->
      <g class="pixel-ticks">${pixelTicks}</g>

      <!-- Pixel Brand Label -->
      <text x="150" y="105" text-anchor="middle" font-family="'Courier New', monospace" font-size="8.5" font-weight="900" fill="#92400e" letter-spacing="1.5">STARDEW</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Pixel Block Arrow) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146" y="85" width="8" height="70" fill="${colors.hourHand}" stroke="#1f2937" stroke-width="1"/>
        <polygon points="150,75 142,85 158,85" fill="${colors.hourHand}"/>
      </g>
      
      <!-- Minute Hand (Long Pixel Arrow) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="147" y="55" width="6" height="100" fill="${colors.minuteHand}" stroke="#1f2937" stroke-width="1"/>
        <polygon points="150,45 143,55 157,55" fill="${colors.minuteHand}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Pixel Second Hand with Block Tip -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="40" x2="150" y2="165" stroke="${colors.secondHand}" stroke-width="2"/>
        <rect x="147" y="40" width="6" height="6" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Pixel Hub Block -->
      <rect x="145" y="145" width="10" height="10" fill="${colors.centerCap}" stroke="#451a03" stroke-width="2"/>
    
    `;
  }
};
