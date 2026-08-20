import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const mexicoTheme: ClockThemeRenderer = {
  name: 'mexico',
  description: 'Mexico Aztec watch with green, white, and red tricolor clipped strictly inside dial bounds, and Golden Eagle emblem',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#006847',
    hourTicks: '#006847',
    minuteTicks: '#ce1126',
    numbers: '#006847',
    hourHand: '#006847',
    minuteHand: '#006847',
    secondHand: '#ce1126',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Crisp Mexican Tricolor Flag Graphic (Green left, White center, Red right, clipped inside dial)
    const mexicanFlagGraphic = `
      <g clip-path="url(#mexico-clip)">
        <!-- Green Left Strip -->
        <rect x="0" y="0" width="100" height="300" fill="#006847"/>
        <!-- White Center Strip -->
        <rect x="100" y="0" width="100" height="300" fill="#ffffff"/>
        <!-- Red Right Strip -->
        <rect x="200" y="0" width="100" height="300" fill="#ce1126"/>
        <!-- Golden Aztec Sun Ring in Center -->
        <circle cx="150" cy="150" r="55" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="4 6"/>
        <!-- Golden Eagle Coat of Arms Emblem at Center -->
        <g transform="translate(150, 150) scale(1.1)" filter="url(#drop-shadow)">
          <polygon points="0,-18 6,-8 16,-12 10,0 20,6 8,10 12,22 0,14 -12,22 -8,10 -20,6 -10,0 -16,-12 -6,-8" fill="#d4af37" stroke="#006847" stroke-width="1"/>
          <circle cx="0" cy="0" r="3.5" fill="#006847"/>
        </g>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#006847" stroke="#d4af37" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#d4af37" stroke-width="2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'MÉXICO · MEXICO CITY';

    return `
      
      <defs>
        <clipPath id="mexico_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="mexico-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <!-- Green Outer Bezel & Snow White Dial -->
      <circle cx="150" cy="150" r="147" fill="#006847" stroke="#ce1126" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      <!-- Clipped Mexican Tricolor Flag Graphic -->
      ${mexicanFlagGraphic}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#006847" stroke="#ffffff" stroke-width="0.8" letter-spacing="2.5">VIVA MÉXICO</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ce1126" stroke="#ffffff" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Mexican Green Sword with Gold Edge) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#006847" stroke="#d4af37" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Mexican Green Sword with Gold Edge) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#006847" stroke="#d4af37" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Mexican Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ce1126" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#006847" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#006847" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
