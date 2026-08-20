import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const singaporeTheme: ClockThemeRenderer = {
  name: 'singapore',
  description: 'Singapore watch with crimson red & white split dial, crescent moon & 5 five-pointed stars emblem',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#ed2939',
    hourTicks: '#ed2939',
    minuteTicks: '#d4af37',
    numbers: '#ed2939',
    hourHand: '#ed2939',
    minuteHand: '#ed2939',
    secondHand: '#d4af37',
    accent: '#d4af37',
    centerCap: '#ed2939',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#singapore-clip)">
        <rect x="0" y="0" width="300" height="150" fill="#ed2939"/>
        <rect x="0" y="150" width="300" height="150" fill="#ffffff"/>
        <!-- Crescent Moon & 5 Stars in Top Left Canton -->
        <g transform="translate(90, 85) scale(0.95)" filter="url(#drop-shadow)">
          <path d="M -12,-24 A 24,24 0 1,0 -12,24 A 20,20 0 1,1 -12,-24 Z" fill="#ffffff"/>
          <!-- 5 Stars Circle -->
          <polygon points="10,-12 12,-6 18,-6 13,-2 15,4 10,0 5,4 7,-2 2,-6 8,-6" fill="#ffffff"/>
          <polygon points="22,-2 24,4 30,4 25,8 27,14 22,10 17,14 19,8 14,4 20,4" fill="#ffffff"/>
          <polygon points="18,12 20,18 26,18 21,22 23,28 18,24 13,28 15,22 10,18 16,18" fill="#ffffff"/>
          <polygon points="2,12 4,18 10,18 5,22 7,28 2,24 -3,28 -1,22 -6,18 0,18" fill="#ffffff"/>
          <polygon points="-2,-2 0,4 6,4 1,8 3,14 -2,10 -7,14 -5,8 -10,4 -4,4" fill="#ffffff"/>
        </g>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#ed2939" stroke="#ffffff" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#d4af37" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SINGAPORE · LION CITY';

    return `
      
      <defs>
        <clipPath id="singapore_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="singapore-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#ed2939" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="2.5">SINGAPORE</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ed2939" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ed2939" stroke="#d4af37" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ed2939" stroke="#d4af37" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#d4af37" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ed2939" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#ed2939" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
