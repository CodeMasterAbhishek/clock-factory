import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const zeldaTheme: ClockThemeRenderer = {
  name: 'zelda',
  description: 'Zelda Tears of the Kingdom watch with Royal Triforce crest, Master Sword hands, and glowing Zonai cyan runes',
  defaultColors: {
    face: '#002b66',
    dialBorder: '#ffd700',
    hourTicks: '#ffd700',
    minuteTicks: '#00ffff',
    numbers: '#ffd700',
    hourHand: '#ffd700',
    minuteHand: '#ffd700',
    secondHand: '#00ffff',
    accent: '#ffd700',
    centerCap: '#ffd700',
    subdialBg: '#001a40'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Triforce Crest & Royal Hyrule Crest at 12 o'clock / center
    const triforceCrest = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <!-- 3 Golden Triangles -->
        <polygon points="0,-35 -14,-12 14,-12" fill="#ffd700" stroke="#002b66" stroke-width="1"/>
        <polygon points="-14,-12 -28,11 0,11" fill="#ffd700" stroke="#002b66" stroke-width="1"/>
        <polygon points="14,-12 0,11 28,11" fill="#ffd700" stroke="#002b66" stroke-width="1"/>
        <!-- Loftwing Wings Wingspan Arc -->
        <path d="M -45,15 Q 0,35 45,15 Q 0,55 -45,15 Z" fill="#ffd700" stroke="#001a40" stroke-width="1"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<polygon points="150,18 153.5,28 146.5,28" fill="#ffd700" stroke="#002b66" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#00ffff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'HYRULE · TEARS OF THE KINGDOM';

    return `
      
      <!-- Royal Hylian Blue Face & Gold Rim -->
      <circle cx="150" cy="150" r="147" fill="#002b66" stroke="#ffd700" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#00ffff" stroke-width="1.2"/>

      <!-- Glowing Zonai Outer Rune Ring -->
      <circle cx="150" cy="150" r="130" fill="none" stroke="#00ffff" stroke-width="1.2" stroke-dasharray="3 6" opacity="0.8"/>

      <!-- Triforce & Loftwing Emblem -->
      ${triforceCrest}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#ffd700" letter-spacing="3">THE LEGEND OF ZELDA</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#00ffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Master Sword Blade with Gold Hilt) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffd700" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#00ffff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Master Sword Blade with Gold Hilt) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffd700" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#00ffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Zonai Cyan Glowing Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#00ffff" stroke-width="2.2"/>
        <polygon points="150,48 154,56 150,64 146,56" fill="#ffd700" stroke="#00ffff" stroke-width="1"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#002b66" stroke="#ffd700" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffd700"/>
    
    `;
  }
};
