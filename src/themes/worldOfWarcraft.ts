import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const worldOfWarcraftTheme: ClockThemeRenderer = {
  name: 'world-of-warcraft',
  description: 'World of Warcraft watch with Alliance gold & Horde crimson split dial, Azerite glowing core, and battle axe hands',
  defaultColors: {
    face: '#121622',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#c8102e',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#00f0ff',
    accent: '#00f0ff',
    centerCap: '#d4af37',
    subdialBg: '#1a2030'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Alliance Gold vs Horde Red Split Dial Graphic
    const factionSplit = `
      <g opacity="0.85">
        <path d="M 150,10 A 140,140 0 0,1 150,290 Z" fill="#0047a0" opacity="0.3"/>
        <path d="M 150,290 A 140,140 0 0,1 150,10 Z" fill="#c8102e" opacity="0.3"/>
        <!-- Azerite Glowing Core at Center -->
        <circle cx="150" cy="150" r="35" fill="#121622" stroke="#d4af37" stroke-width="2"/>
        <circle cx="150" cy="150" r="22" fill="#00f0ff" opacity="0.6" filter="url(#lume-glow)"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#d4af37" stroke="#121622" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#c8102e" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'WORLD OF WARCRAFT · FOR AZEROTH!';

    return `
      
      <!-- Dark Slate Face & Alliance Gold Bezel -->
      <circle cx="150" cy="150" r="147" fill="#121622" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#00f0ff" stroke-width="1.2"/>

      <!-- Faction Split & Azerite Core -->
      ${factionSplit}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#d4af37" letter-spacing="3">WORLD OF WARCRAFT</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#00f0ff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Alliance Gold Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#121622" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Alliance Gold Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#121622" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Azerite Blue Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#00f0ff" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#d4af37" stroke="#121622" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#121622" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
