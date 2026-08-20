import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const israelTheme: ClockThemeRenderer = {
  name: 'israel',
  description: 'Israel watch with pure white dial, dual royal blue horizontal stripes, and central Star of David (Magen David) emblem',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#0038b8',
    hourTicks: '#0038b8',
    minuteTicks: '#0038b8',
    numbers: '#0038b8',
    hourHand: '#0038b8',
    minuteHand: '#0038b8',
    secondHand: '#0038b8',
    accent: '#0038b8',
    centerCap: '#0038b8',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#israel-clip)">
        <rect x="0" y="0" width="300" height="300" fill="#ffffff"/>
        <!-- Dual Blue Stripes -->
        <rect x="0" y="45" width="300" height="30" fill="#0038b8"/>
        <rect x="0" y="225" width="300" height="30" fill="#0038b8"/>
        <!-- Magen David Star of David Emblem at Center -->
        <g transform="translate(150, 150) scale(1.2)" filter="url(#drop-shadow)">
          <polygon points="0,-24 21,12 -21,12" fill="none" stroke="#0038b8" stroke-width="4.5"/>
          <polygon points="0,24 21,-12 -21,-12" fill="none" stroke="#0038b8" stroke-width="4.5"/>
        </g>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#0038b8" stroke="#ffffff" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#0038b8" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ISRAEL · JERUSALEM';

    return `
      
      <defs>
        <clipPath id="israel_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="israel-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#0038b8" stroke="#ffffff" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#0038b8" letter-spacing="2.5">ISRAEL</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#0038b8" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#0038b8" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#0038b8" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#0038b8" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffffff" stroke="#0038b8" stroke-width="1.5"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#ffffff" stroke="#0038b8" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#0038b8"/>
    
    `;
  }
};
