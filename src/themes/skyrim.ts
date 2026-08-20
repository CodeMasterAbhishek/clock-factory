import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const skyrimTheme: ClockThemeRenderer = {
  name: 'skyrim',
  description: 'Skyrim Dragonborn watch with Akatosh Dragon Crest, icy tundra slate face, and glowing Nordic steel hands',
  defaultColors: {
    face: '#0f172a',
    dialBorder: '#d1d5db',
    hourTicks: '#d1d5db',
    minuteTicks: '#38bdf8',
    numbers: '#d1d5db',
    hourHand: '#d1d5db',
    minuteHand: '#d1d5db',
    secondHand: '#38bdf8',
    accent: '#38bdf8',
    centerCap: '#d1d5db',
    subdialBg: '#1e293b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Akatosh Dragon Emblem
    const dragonInsignia = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <path d="M 0,-34 L 14,-10 L 22,12 L 8,24 L 0,34 L -8,24 L -22,12 L -14,-10 Z" fill="#d1d5db" stroke="#0f172a" stroke-width="1.2"/>
        <polygon points="0,-24 8,-4 0,16 -8,-4" fill="#0f172a"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#d1d5db" stroke="#0f172a" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#38bdf8" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SKYRIM · DRAGONBORN FUS RO DAH';

    return `
      
      <!-- Icy Slate Face & Steel Bezel -->
      <circle cx="150" cy="150" r="147" fill="#0f172a" stroke="#d1d5db" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#38bdf8" stroke-width="1.2"/>

      <!-- Dragonborn Akatosh Emblem -->
      ${dragonInsignia}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#d1d5db" letter-spacing="3">SKYRIM</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#38bdf8" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Nord Steel Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#d1d5db" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#0f172a" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Nord Steel Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#d1d5db" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#0f172a" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Frost Blue Second Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#38bdf8" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#d1d5db" stroke="#0f172a" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Steel Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0f172a" stroke="#d1d5db" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d1d5db"/>
    
    `;
  }
};
