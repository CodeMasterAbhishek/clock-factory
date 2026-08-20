import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const switzerlandTheme: ClockThemeRenderer = {
  name: 'switzerland',
  description: 'Switzerland Alpine watch with Swiss red dial, bold white Swiss Cross emblem, and precision Swiss markers',
  defaultColors: {
    face: '#da291c',
    dialBorder: '#ffffff',
    hourTicks: '#ffffff',
    minuteTicks: '#fca5a5',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ffffff',
    accent: '#ffffff',
    centerCap: '#ffffff',
    subdialBg: '#b91c1c'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Equilateral Swiss Cross Emblem
    const swissCross = `
      <g transform="translate(150, 150) scale(1.4)" filter="url(#drop-shadow)">
        <rect x="-10" y="-30" width="20" height="60" fill="#ffffff" rx="3"/>
        <rect x="-30" y="-10" width="60" height="20" fill="#ffffff" rx="3"/>
      </g>
    `;

    // Hour Markers (Bright White Rectangles)
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ffffff" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#ffffff" stroke-width="1.5" opacity="0.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SWITZERLAND · EUROPE/ZURICH';

    return `
      
      <!-- Swiss Red Bezel & White Ring -->
      <circle cx="150" cy="150" r="147" fill="#da291c" stroke="#ffffff" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Swiss Cross Central Emblem -->
      <g class="swiss-cross">${swissCross}</g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Motto & Label Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#ffffff" stroke="#da291c" stroke-width="0.5" letter-spacing="2.5">SWISS MADE</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Crisp White Pointer with Red Center) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#da291c" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Crisp White Pointer with Red Center) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#da291c" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- White Lollipop Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5.5" fill="#ffffff" stroke="#da291c" stroke-width="1.5"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#da291c" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
