import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const australiaTheme: ClockThemeRenderer = {
  name: 'australia',
  description: 'Australia Southern Cross watch with deep ocean blue dial, glowing Southern Cross constellation, and Golden Wattle accents',
  defaultColors: {
    face: '#000055',
    dialBorder: '#ffd700',
    hourTicks: '#ffd700',
    minuteTicks: '#38bdf8',
    numbers: '#ffffff',
    hourHand: '#ffd700',
    minuteHand: '#ffd700',
    secondHand: '#e11d48',
    accent: '#ffd700',
    centerCap: '#ffd700',
    subdialBg: '#000033'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Southern Cross Constellation Stars
    const southernCross = `
      <polygon points="150,180 152,185 158,185 153,189 155,195 150,191 145,195 147,189 142,185 148,185" fill="#ffffff" filter="url(#lume-glow)"/>
      <polygon points="150,105 152,110 158,110 153,114 155,120 150,116 145,120 147,114 142,110 148,110" fill="#ffffff" filter="url(#lume-glow)"/>
      <polygon points="190,140 192,145 198,145 193,149 195,155 190,151 185,155 187,149 182,145 188,145" fill="#ffffff" filter="url(#lume-glow)"/>
      <polygon points="110,135 112,140 118,140 113,144 115,150 110,146 105,150 107,144 102,140 108,140" fill="#ffffff" filter="url(#lume-glow)"/>
      <polygon points="168,160 169.5,163.5 174,163.5 170.5,166.5 172,171 168,168 164,171 165.5,166.5 162,163.5 166.5,163.5" fill="#ffffff" filter="url(#lume-glow)"/>
    `;

    // 7-Pointed Commonwealth Star at 12 o'clock
    const commonwealthStar = `
      <g transform="translate(150, 48) scale(0.95)">
        <polygon points="0,-14 3,-5 11,-9 6,-1 13,4 4,5 6,14 0,8 -6,14 -4,5 -13,4 -6,-1 -11,-9 -3,-5" fill="#ffd700" stroke="#ffffff" stroke-width="1"/>
      </g>
    `;

    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ffd700" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#38bdf8" stroke-width="1.5" opacity="0.9" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'AUSTRALIA · SYDNEY';

    return `
      
      <!-- Deep Southern Ocean Blue Dial & Gold Bezel -->
      <circle cx="150" cy="150" r="147" fill="#000033" stroke="#ffd700" stroke-width="4"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}" stroke="#00843d" stroke-width="1.8"/>

      <!-- Commonwealth Star at 12 o'clock -->
      ${commonwealthStar}

      <!-- Southern Cross Constellation -->
      <g class="southern-cross">${southernCross}</g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="900" fill="#ffd700" stroke="#000033" stroke-width="0.5" letter-spacing="2.5">SOUTHERN CROSS</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Golden Wattle Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145.5,72 154.5,72 151.5,155 148.5,155" fill="#ffd700" filter="url(#drop-shadow)"/>
        <line x1="150" y1="78" x2="150" y2="145" stroke="#000055" stroke-width="1.8"/>
      </g>
      
      <!-- Minute Hand (Golden Wattle Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146,38 154,38 151.5,155 148.5,155" fill="#ffd700" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#000055" stroke-width="1.8"/>
      </g>
      
      ${showSeconds ? `
      <!-- Crimson Red Second Hand with Star Counterweight -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <circle cx="150" cy="55" r="4.5" fill="#ffd700"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#000055" stroke="#ffd700" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffd700"/>
    
    `;
  }
};
