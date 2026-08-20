import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const vietnamTheme: ClockThemeRenderer = {
  name: 'vietnam',
  description: 'Vietnam watch with vibrant crimson red dial and central golden 5-pointed star emblem clipped strictly inside dial bounds',
  defaultColors: {
    face: '#da251d',
    dialBorder: '#ffde00',
    hourTicks: '#ffde00',
    minuteTicks: '#ffffff',
    numbers: '#ffde00',
    hourHand: '#ffde00',
    minuteHand: '#ffde00',
    secondHand: '#ffffff',
    accent: '#ffde00',
    centerCap: '#ffde00',
    subdialBg: '#b81d16'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#vietnam-clip)">
        <rect x="0" y="0" width="300" height="300" fill="#da251d"/>
        <!-- Central Golden 5-Pointed Star -->
        <g transform="translate(150, 150) scale(1.6)" filter="url(#drop-shadow)">
          <polygon points="0,-30 8.8,-9.2 31.5,-9.2 13.1,4.2 20.1,25 0,11.5 -20.1,25 -13.1,4.2 -31.5,-9.2 -8.8,-9.2" fill="#ffde00" stroke="#da251d" stroke-width="1"/>
        </g>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#ffde00" stroke="#da251d" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#ffffff" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'VIỆT NAM · HANOI';

    return `
      
      <defs>
        <clipPath id="vietnam_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="vietnam-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#da251d" stroke="#ffde00" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffde00" letter-spacing="2.5">VIỆT NAM</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffde00" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#da251d" stroke-width="2"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffde00" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#da251d" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffde00" stroke="#da251d" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#da251d" stroke="#ffde00" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffde00"/>
    
    `;
  }
};
