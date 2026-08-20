import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const netherlandsTheme: ClockThemeRenderer = {
  name: 'netherlands',
  description: 'Netherlands watch with Oranje-Nassau royal orange face, Red-White-Blue tricolor rim, and Dutch Golden Crown emblem',
  defaultColors: {
    face: '#ff4f00',
    dialBorder: '#21468b',
    hourTicks: '#ffffff',
    minuteTicks: '#ae1c28',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ae1c28',
    accent: '#d4af37',
    centerCap: '#ffffff',
    subdialBg: '#e64600'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#netherlands-clip)">
        <rect x="0" y="0" width="300" height="300" fill="#ff4f00"/>
        <!-- Red-White-Blue Tricolor Ring Overlay -->
        <circle cx="150" cy="150" r="130" fill="none" stroke="#ae1c28" stroke-width="4"/>
        <circle cx="150" cy="150" r="126" fill="none" stroke="#ffffff" stroke-width="4"/>
        <circle cx="150" cy="150" r="122" fill="none" stroke="#21468b" stroke-width="4"/>
        <!-- Dutch Royal Crown at Center -->
        <g transform="translate(150, 150) scale(1.1)" filter="url(#drop-shadow)">
          <polygon points="-20,10 -25,-12 -10,-2 0,-18 10,-2 25,-12 20,10" fill="#d4af37" stroke="#21468b" stroke-width="1.2"/>
          <circle cx="0" cy="-20" r="3" fill="#ffffff"/>
          <circle cx="-25" cy="-14" r="2" fill="#ae1c28"/>
          <circle cx="25" cy="-14" r="2" fill="#21468b"/>
        </g>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#ffffff" stroke="#21468b" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#21468b" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'NEDERLAND · AMSTERDAM';

    return `
      
      <defs>
        <clipPath id="netherlands_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="netherlands-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#ff4f00" stroke="#21468b" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" stroke="#21468b" stroke-width="0.5" letter-spacing="2.5">KONINKRIJK</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" stroke="#21468b" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffffff" stroke="#21468b" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffffff" stroke="#21468b" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ae1c28" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#21468b" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#ff4f00" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
