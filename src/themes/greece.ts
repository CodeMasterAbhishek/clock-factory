import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const greeceTheme: ClockThemeRenderer = {
  name: 'greece',
  description: 'Greece watch with Aegean sea blue & white 9-stripe pattern, white Greek cross canton, and golden olive branch wreath',
  defaultColors: {
    face: '#0d5eaf',
    dialBorder: '#ffffff',
    hourTicks: '#ffffff',
    minuteTicks: '#d4af37',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#d4af37',
    accent: '#d4af37',
    centerCap: '#ffffff',
    subdialBg: '#0a4b8c'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#greece-clip)">
        <!-- 9 Horizontal Blue and White Stripes -->
        <rect x="0" y="0" width="300" height="33.3" fill="#0d5eaf"/>
        <rect x="0" y="33.3" width="300" height="33.3" fill="#ffffff"/>
        <rect x="0" y="66.6" width="300" height="33.3" fill="#0d5eaf"/>
        <rect x="0" y="99.9" width="300" height="33.3" fill="#ffffff"/>
        <rect x="0" y="133.2" width="300" height="33.3" fill="#0d5eaf"/>
        <rect x="0" y="166.5" width="300" height="33.3" fill="#ffffff"/>
        <rect x="0" y="199.8" width="300" height="33.3" fill="#0d5eaf"/>
        <rect x="0" y="233.1" width="300" height="33.3" fill="#ffffff"/>
        <rect x="0" y="266.4" width="300" height="33.6" fill="#0d5eaf"/>

        <!-- Top Left Blue Canton with White Cross -->
        <rect x="0" y="0" width="130" height="130" fill="#0d5eaf"/>
        <rect x="52" y="0" width="26" height="130" fill="#ffffff"/>
        <rect x="0" y="52" width="130" height="26" fill="#ffffff"/>

        <!-- Golden Olive Wreath Ring at Center -->
        <circle cx="150" cy="150" r="48" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="6 4"/>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#ffffff" stroke="#0d5eaf" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#d4af37" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ELLADA · ATHENS';

    return `
      
      <defs>
        <clipPath id="greece_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="greece-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#0d5eaf" stroke="#ffffff" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="80" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#ffffff" stroke="#0d5eaf" stroke-width="0.5" letter-spacing="2.5">ΕΛΛΑΔΑ</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" stroke="#0d5eaf" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffffff" stroke="#0d5eaf" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffffff" stroke="#0d5eaf" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#d4af37" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffffff" stroke="#0d5eaf" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#0d5eaf" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
