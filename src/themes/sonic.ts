import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const sonicTheme: ClockThemeRenderer = {
  name: 'sonic',
  description: 'Sonic the Hedgehog watch with Green Hill Zone checkered grass pattern, 12 Golden Ring markers, and Red Power Sneaker hands',
  defaultColors: {
    face: '#0044ff',
    dialBorder: '#ffd700',
    hourTicks: '#ffd700',
    minuteTicks: '#ffffff',
    numbers: '#ffd700',
    hourHand: '#ff0000',
    minuteHand: '#ff0000',
    secondHand: '#ffffff',
    accent: '#ffd700',
    centerCap: '#ffd700',
    subdialBg: '#002bb8'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Green Hill Zone Checkered Grass Arc
    const greenHillPattern = `
      <g opacity="0.85">
        <path d="M 12,150 A 138,138 0 0,0 288,150 Z" fill="#00b000"/>
        <path d="M 30,150 A 120,120 0 0,0 270,150 Z" fill="#784018" stroke="#ffd700" stroke-width="2"/>
        <circle cx="150" cy="150" r="55" fill="#0044ff" stroke="#ffd700" stroke-width="2"/>
      </g>
    `;

    // 12 Golden Rings
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<circle cx="150" cy="22" r="4.5" fill="none" stroke="#ffd700" stroke-width="2" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ffffff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SONIC · GREEN HILL ZONE';

    return `
      
      <!-- Sonic Cobalt Blue Face & Gold Ring Bezel -->
      <circle cx="150" cy="150" r="147" fill="#0044ff" stroke="#ffd700" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Green Hill Zone Artwork -->
      ${greenHillPattern}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#ffd700" stroke="#0044ff" stroke-width="0.5" letter-spacing="3">SONIC THE HEDGEHOG</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Red Sneaker Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ff0000" stroke="#ffffff" stroke-width="1.2" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#ffd700" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Red Sneaker Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ff0000" stroke="#ffffff" stroke-width="1.2" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffd700" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Pure White Super Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffd700" stroke="#0044ff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#0044ff" stroke="#ffd700" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffd700"/>
    
    `;
  }
};
