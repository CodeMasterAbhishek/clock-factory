import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const thailandTheme: ClockThemeRenderer = {
  name: 'thailand',
  description: 'Thailand watch with Trairanga 5-stripe flag, Royal Blue central band, and Golden Garuda emblem',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#a51931',
    hourTicks: '#d4af37',
    minuteTicks: '#2d2a4a',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#a51931',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#thailand-clip)">
        <!-- 5 Trairanga Stripes -->
        <rect x="0" y="0" width="300" height="50" fill="#a51931"/>
        <rect x="0" y="50" width="300" height="50" fill="#f4f5f8"/>
        <rect x="0" y="100" width="300" height="100" fill="#2d2a4a"/>
        <rect x="0" y="200" width="300" height="50" fill="#f4f5f8"/>
        <rect x="0" y="250" width="300" height="50" fill="#a51931"/>
        
        <!-- Golden Royal Garuda Emblem at Center -->
        <g transform="translate(150, 150) scale(1.1)" filter="url(#drop-shadow)">
          <polygon points="0,-20 6,-8 18,-12 10,0 20,8 6,10 8,22 0,14 -8,22 -6,10 -20,8 -10,0 -18,-12 -6,-8" fill="#d4af37" stroke="#2d2a4a" stroke-width="1"/>
          <circle cx="0" cy="0" r="3.5" fill="#a51931"/>
        </g>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#d4af37" stroke="#2d2a4a" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#2d2a4a" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'THAILAND · BANGKOK';

    return `
      
      <defs>
        <clipPath id="thailand_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="thailand-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#a51931" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" stroke="#a51931" stroke-width="0.5" letter-spacing="2.5">대한민국 / SIAM</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" stroke="#2d2a4a" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#d4af37" stroke="#2d2a4a" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#d4af37" stroke="#2d2a4a" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#a51931" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#2d2a4a" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#2d2a4a" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
