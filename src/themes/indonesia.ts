import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const indonesiaTheme: ClockThemeRenderer = {
  name: 'indonesia',
  description: 'Indonesia watch with Sang Saka Merah-Putih red and white split dial, clipped strictly inside dial bounds, and Golden Garuda Pancasila emblem',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#ff0000',
    hourTicks: '#d4af37',
    minuteTicks: '#ff0000',
    numbers: '#ff0000',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#ff0000',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#indonesia-clip)">
        <rect x="0" y="0" width="300" height="150" fill="#ff0000"/>
        <rect x="0" y="150" width="300" height="150" fill="#ffffff"/>
        <!-- Golden Garuda Pancasila Emblem at Center -->
        <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
          <polygon points="0,-22 8,-10 18,-14 12,0 22,8 8,12 12,24 0,16 -12,24 -8,12 -22,8 -12,0 -18,-14 -8,-10" fill="#d4af37" stroke="#ff0000" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="4" fill="#ffffff" stroke="#ff0000" stroke-width="1"/>
        </g>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#d4af37" stroke="#ff0000" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#ff0000" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'INDONESIA · JAKARTA';

    return `
      
      <defs>
        <clipPath id="indonesia_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="indonesia-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#ff0000" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="2.5">INDONESIA</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ff0000" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#d4af37" stroke="#ff0000" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#d4af37" stroke="#ff0000" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ff0000" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#ff0000" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
