import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const assassinsCreedTheme: ClockThemeRenderer = {
  name: 'assassins-creed',
  description: 'Assassin\'s Creed Animus watch with dark slate dial, bronze Assassin Crest emblem, Animus sync ring, and Hidden Blade hands',
  defaultColors: {
    face: '#181a1f',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#ef4444',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#ef4444',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#252830'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Assassin Crest Iconography
    const assassinCrest = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <path d="M 0,-32 L 20,10 L 12,12 L 0,-10 L -12,12 L -20,10 Z" fill="#d4af37" stroke="#181a1f" stroke-width="1"/>
        <path d="M -24,14 Q 0,36 24,14 Q 0,26 -24,14 Z" fill="#d4af37" stroke="#181a1f" stroke-width="1"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#d4af37" stroke="#181a1f" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ef4444" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ASSASSIN\'S CREED · ANIMUS';

    return `
      
      <!-- Dark Animus Face & Bronze Gold Rim -->
      <circle cx="150" cy="150" r="147" fill="#181a1f" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ef4444" stroke-width="1.2"/>

      <!-- Animus Memory Sync Ring -->
      <circle cx="150" cy="150" r="130" fill="none" stroke="#d4af37" stroke-width="1.2" stroke-dasharray="4 6" opacity="0.7"/>

      <!-- Assassin Crest Emblem -->
      ${assassinCrest}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#d4af37" letter-spacing="3">ASSASSIN'S CREED</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ef4444" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Hidden Blade Gold Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#181a1f" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Hidden Blade Gold Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#181a1f" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Crimson Animus Sync Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ef4444" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#181a1f" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#181a1f" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
