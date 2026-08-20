import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const redDeadTheme: ClockThemeRenderer = {
  name: 'red-dead',
  description: 'Red Dead Redemption watch with outlaw crimson red face, revolver cylinder subdial, and sunset gold accents',
  defaultColors: {
    face: '#8b0000',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#ffffff',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#ffffff',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#5c0000'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Revolver 6-Chamber Cylinder Subdial at Center
    const revolverCylinder = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <circle cx="0" cy="0" r="32" fill="#5c0000" stroke="#d4af37" stroke-width="2"/>
        <!-- 6 Chamber Holes -->
        <circle cx="0" cy="-18" r="6" fill="#141210" stroke="#d4af37" stroke-width="1"/>
        <circle cx="16" cy="-9" r="6" fill="#141210" stroke="#d4af37" stroke-width="1"/>
        <circle cx="16" cy="9" r="6" fill="#141210" stroke="#d4af37" stroke-width="1"/>
        <circle cx="0" cy="18" r="6" fill="#141210" stroke="#d4af37" stroke-width="1"/>
        <circle cx="-16" cy="9" r="6" fill="#141210" stroke="#d4af37" stroke-width="1"/>
        <circle cx="-16" cy="-9" r="6" fill="#141210" stroke="#d4af37" stroke-width="1"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#d4af37" stroke="#8b0000" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ffffff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'RED DEAD REDEMPTION · OUTLAWS';

    return `
      
      <!-- Outlaw Crimson Face & Sunset Gold Rim -->
      <circle cx="150" cy="150" r="147" fill="#8b0000" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ffffff" stroke-width="1.2"/>

      <!-- Revolver Cylinder Emblem -->
      ${revolverCylinder}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#d4af37" letter-spacing="3">RED DEAD REDEMPTION</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Brass Bullet Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#8b0000" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Brass Bullet Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#8b0000" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Pure White Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#8b0000" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#8b0000" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
