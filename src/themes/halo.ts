import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const haloTheme: ClockThemeRenderer = {
  name: 'halo',
  description: 'Halo Spartan-117 watch with olive drab military green dial, Master Chief visor gold accents, and UNSC insignia',
  defaultColors: {
    face: '#3a482b',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#84cc16',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#84cc16',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#27321c'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // UNSC Eagle Insignia & Spartan HUD Reticle
    const unscInsignia = `
      <g transform="translate(150, 150) scale(1.1)" filter="url(#drop-shadow)">
        <circle cx="0" cy="0" r="45" fill="#27321c" stroke="#d4af37" stroke-width="1.8"/>
        <!-- Tactical Target HUD -->
        <circle cx="0" cy="0" r="30" fill="none" stroke="#84cc16" stroke-width="1" stroke-dasharray="8 4" opacity="0.8"/>
        <!-- Master Chief 117 Badge -->
        <text x="0" y="-12" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="900" fill="#d4af37" letter-spacing="2">UNSC</text>
        <text x="0" y="16" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="14" font-weight="900" fill="#84cc16" letter-spacing="3">117</text>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#d4af37" stroke="#3a482b" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#84cc16" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'HALO · SPARTAN-117';

    return `
      
      <!-- Military Olive Drab Face & Gold Visor Rim -->
      <circle cx="150" cy="150" r="147" fill="#3a482b" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#84cc16" stroke-width="1.2"/>

      <!-- UNSC 117 Central Emblem -->
      ${unscInsignia}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#d4af37" letter-spacing="3">HALO</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#84cc16" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Visor Gold Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#3a482b" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Visor Gold Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#3a482b" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- HUD Green Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#84cc16" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#3a482b" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#3a482b" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
