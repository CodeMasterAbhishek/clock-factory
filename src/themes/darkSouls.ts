import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const darkSoulsTheme: ClockThemeRenderer = {
  name: 'dark-souls',
  description: 'Dark Souls watch with ash slate dial, glowing Bonfire flame emblem, coiled sword, and Praise the Sun gold accents',
  defaultColors: {
    face: '#141210',
    dialBorder: '#ffbb00',
    hourTicks: '#ffbb00',
    minuteTicks: '#ff5500',
    numbers: '#ffbb00',
    hourHand: '#ffbb00',
    minuteHand: '#ffbb00',
    secondHand: '#ff5500',
    accent: '#ffbb00',
    centerCap: '#ffbb00',
    subdialBg: '#211d1a'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Bonfire Flame & Coiled Sword Emblem
    const bonfireEmblem = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <!-- Coiled Sword Blade -->
        <polygon points="-3,-30 3,-30 2,24 -2,24" fill="#ffbb00" stroke="#141210" stroke-width="0.8"/>
        <!-- Bonfire Flames -->
        <path d="M 0,10 Q -18,-10 -6,-28 Q 0,-15 8,-24 Q 18,-5 0,10 Z" fill="#ff5500" opacity="0.85"/>
        <path d="M 0,8 Q -10,-8 -3,-20 Q 0,-10 4,-16 Q 10,-3 0,8 Z" fill="#ffbb00"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ffbb00" stroke="#141210" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ff5500" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'DARK SOULS · PRAISE THE SUN!';

    return `
      
      <!-- Ash Slate Face & Sun Gold Rim -->
      <circle cx="150" cy="150" r="147" fill="#141210" stroke="#ffbb00" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ff5500" stroke-width="1.2"/>

      <!-- Bonfire Flame Emblem -->
      ${bonfireEmblem}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#ffbb00" letter-spacing="3">DARK SOULS</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ff5500" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Coiled Sword Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffbb00" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#141210" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Coiled Sword Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffbb00" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#141210" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Bonfire Ember Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ff5500" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffbb00" stroke="#141210" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#141210" stroke="#ffbb00" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffbb00"/>
    
    `;
  }
};
