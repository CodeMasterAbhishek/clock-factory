import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const spainTheme: ClockThemeRenderer = {
  name: 'spain',
  description: 'Spain Royal watch with crimson red and gold tricolor, royal crown crest, and applied gold hour markers',
  defaultColors: {
    face: '#f1bf00',
    dialBorder: '#aa1529',
    hourTicks: '#aa1529',
    minuteTicks: '#800f1d',
    numbers: '#aa1529',
    hourHand: '#aa1529',
    minuteHand: '#aa1529',
    secondHand: '#aa1529',
    accent: '#aa1529',
    centerCap: '#aa1529',
    subdialBg: '#ffffff'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Applied Crimson & Gold Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#aa1529" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#aa1529" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ESPAÑA · EUROPE/MADRID';

    return `
      
      <!-- Spanish Crimson Bezel & Royal Gold Dial Face -->
      <circle cx="150" cy="150" r="147" fill="#aa1529" stroke="#f1bf00" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Horizontal Crimson Red Bands (Top & Bottom Flag Stripes) -->
      <path d="M 12,150 A 138,138 0 0,1 60,40 L 240,40 A 138,138 0 0,1 288,150 Z" fill="#aa1529" opacity="0.18"/>
      <path d="M 288,150 A 138,138 0 0,1 240,260 L 60,260 A 138,138 0 0,1 12,150 Z" fill="#aa1529" opacity="0.18"/>

      <!-- Royal Spanish Crown Motif at 12 o'clock -->
      <g transform="translate(150, 52) scale(0.95)" filter="url(#drop-shadow)">
        <path d="M -14,10 L -18,-6 L -8,0 L 0,-12 L 8,0 L 18,-6 L 14,10 Z" fill="#aa1529" stroke="#ffffff" stroke-width="1.2"/>
        <circle cx="0" cy="-15" r="2.5" fill="#ffffff"/>
        <circle cx="-18" cy="-8" r="2" fill="#ffffff"/>
        <circle cx="18" cy="-8" r="2" fill="#ffffff"/>
        <rect x="-14" y="10" width="28" height="4" fill="#ffffff"/>
      </g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Motto & Label Inscriptions -->
      <text x="150" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#aa1529" stroke="#ffffff" stroke-width="0.5" letter-spacing="2.5">VIVA ESPAÑA</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#aa1529" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Crimson Sword with Gold Center) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145,72 155,72 152,154 148,154" fill="#aa1529" filter="url(#drop-shadow)"/>
        <line x1="150" y1="78" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Crimson Sword with Gold Center) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145.5,38 154.5,38 152,155 148,155" fill="#aa1529" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Gold Second Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#aa1529" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#aa1529" stroke="#ffffff" stroke-width="2"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
