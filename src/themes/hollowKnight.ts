import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const hollowKnightTheme: ClockThemeRenderer = {
  name: 'hollow-knight',
  description: 'Hollow Knight watch with Void indigo dark face, Knight skull mask emblem, and glowing Soul Vessel cyan accents',
  defaultColors: {
    face: '#0a0b10',
    dialBorder: '#e2e8f0',
    hourTicks: '#e2e8f0',
    minuteTicks: '#38bdf8',
    numbers: '#e2e8f0',
    hourHand: '#e2e8f0',
    minuteHand: '#e2e8f0',
    secondHand: '#38bdf8',
    accent: '#38bdf8',
    centerCap: '#e2e8f0',
    subdialBg: '#141722'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Knight Skull Mask Emblem at Center
    const knightMask = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <!-- Horns -->
        <path d="M -16,-10 Q -24,-34 -10,-42 Q -6,-30 -8,-10 Z" fill="#e2e8f0"/>
        <path d="M 16,-10 Q 24,-34 10,-42 Q 6,-30 8,-10 Z" fill="#e2e8f0"/>
        <!-- Skull Face -->
        <path d="M -18,-10 Q 0,-18 18,-10 Q 22,14 0,26 Q -22,14 -18,-10 Z" fill="#e2e8f0" stroke="#0a0b10" stroke-width="1.5"/>
        <!-- Black Hollow Eyes -->
        <ellipse cx="-7" cy="0" rx="5" ry="9" fill="#0a0b10" transform="rotate(-10 -7 0)"/>
        <ellipse cx="7" cy="0" rx="5" ry="9" fill="#0a0b10" transform="rotate(10 7 0)"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<polygon points="150,18 153.5,28 146.5,28" fill="#e2e8f0" stroke="#0a0b10" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#38bdf8" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'HALLOWNEST · VOID & SOUL';

    return `
      
      <!-- Void Indigo Face & Silver Mask Rim -->
      <circle cx="150" cy="150" r="147" fill="#0a0b10" stroke="#e2e8f0" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#38bdf8" stroke-width="1.2"/>

      <!-- Knight Mask Emblem -->
      ${knightMask}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#e2e8f0" letter-spacing="3">HOLLOW KNIGHT</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#38bdf8" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Nail Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#e2e8f0" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#0a0b10" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Nail Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#e2e8f0" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#0a0b10" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Soul Vessel Blue Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#38bdf8" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#e2e8f0" stroke="#0a0b10" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Silver Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0a0b10" stroke="#e2e8f0" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#e2e8f0"/>
    
    `;
  }
};
