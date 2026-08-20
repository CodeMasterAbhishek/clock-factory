import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const norwayTheme: ClockThemeRenderer = {
  name: 'norway',
  description: 'Norway watch with crimson red dial, white and indigo blue Nordic cross ribbon, and Viking rune indices',
  defaultColors: {
    face: '#ba0c2f',
    dialBorder: '#ffffff',
    hourTicks: '#ffffff',
    minuteTicks: '#00205b',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#00205b',
    accent: '#ffffff',
    centerCap: '#ffffff',
    subdialBg: '#960925'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#norway-clip)">
        <rect x="0" y="0" width="300" height="300" fill="#ba0c2f"/>
        <!-- White Outer Cross -->
        <rect x="90" y="0" width="40" height="300" fill="#ffffff"/>
        <rect x="0" y="130" width="300" height="40" fill="#ffffff"/>
        <!-- Indigo Blue Inner Cross -->
        <rect x="100" y="0" width="20" height="300" fill="#00205b"/>
        <rect x="0" y="140" width="300" height="20" fill="#00205b"/>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#ffffff" stroke="#00205b" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#00205b" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'NORGE · OSLO';

    return `
      
      <defs>
        <clipPath id="norway_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="norway-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#ba0c2f" stroke="#ffffff" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" stroke="#ba0c2f" stroke-width="0.5" letter-spacing="2.5">NORGE</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" stroke="#00205b" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffffff" stroke="#00205b" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffffff" stroke="#00205b" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#00205b" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffffff" stroke="#ba0c2f" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#ba0c2f" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
