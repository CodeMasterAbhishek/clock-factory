import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const gtaTheme: ClockThemeRenderer = {
  name: 'gta',
  description: 'Grand Theft Auto Vice City watch with neon pink & cyan sunset gradient, palm tree silhouettes, and 80s arcade styling',
  defaultColors: {
    face: '#16002c',
    dialBorder: '#ff007f',
    hourTicks: '#ff007f',
    minuteTicks: '#00f0ff',
    numbers: '#ff007f',
    hourHand: '#ff007f',
    minuteHand: '#00f0ff',
    secondHand: '#ff007f',
    accent: '#ff007f',
    centerCap: '#ff007f',
    subdialBg: '#2b0938'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Synthwave / Vice Sunset Horizon & Palm Trees
    const viceSunset = `
      <g opacity="0.85">
        <!-- Sun Gradient -->
        <circle cx="150" cy="160" r="45" fill="#ff007f" opacity="0.6"/>
        <!-- Sun Grid Lines -->
        <line x1="100" y1="150" x2="200" y2="150" stroke="#16002c" stroke-width="2"/>
        <line x1="100" y1="160" x2="200" y2="160" stroke="#16002c" stroke-width="3"/>
        <line x1="100" y1="172" x2="200" y2="172" stroke="#16002c" stroke-width="4"/>
        <!-- Palm Trees Silhouette -->
        <path d="M 80,180 Q 90,130 110,100 M 110,100 Q 80,90 60,110 M 110,100 Q 115,80 135,90 M 110,100 Q 130,110 140,130" stroke="#00f0ff" stroke-width="2.5" fill="none"/>
        <path d="M 220,180 Q 210,130 190,100 M 190,100 Q 220,90 240,110 M 190,100 Q 185,80 165,90 M 190,100 Q 170,110 160,130" stroke="#ff007f" stroke-width="2.5" fill="none"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ff007f" stroke="#00f0ff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#00f0ff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'VICE CITY · VI';

    return `
      
      <!-- Deep Purple Sunset Face & Vice Pink Bezel -->
      <circle cx="150" cy="150" r="147" fill="#16002c" stroke="#ff007f" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#00f0ff" stroke-width="1.2"/>

      <!-- Vice Sunset & Palm Trees Artwork -->
      ${viceSunset}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Brush Script MT', cursive, sans-serif" font-size="20" font-weight="bold" fill="#ff007f" stroke="#00f0ff" stroke-width="0.5">Vice City</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#00f0ff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Vice Pink Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ff007f" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#00f0ff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Cyan Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#00f0ff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ff007f" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Neon Pink Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ff007f" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#00f0ff" stroke="#ff007f" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#16002c" stroke="#ff007f" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#00f0ff"/>
    
    `;
  }
};
