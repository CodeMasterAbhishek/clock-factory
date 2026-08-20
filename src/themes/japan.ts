import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const japanTheme: ClockThemeRenderer = {
  name: 'japan',
  description: 'Japan Hinomaru Rising Sun watch with crimson red central sun, cherry blossom (Sakura) indices, and minimalist Japanese styling',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#bc002d',
    hourTicks: '#bc002d',
    minuteTicks: '#9ca3af',
    numbers: '#111827',
    hourHand: '#111827',
    minuteHand: '#111827',
    secondHand: '#bc002d',
    accent: '#bc002d',
    centerCap: '#bc002d',
    subdialBg: '#ffffff'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Sakura Cherry Blossom Petal hour markers
    let sakuraPetals = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      sakuraPetals += `
        <g transform="rotate(${angle} 150 150)">
          <path d="M 150,22 C 145,28 143,38 150,44 C 157,38 155,28 150,22 Z" fill="#ffb7c5" stroke="#bc002d" stroke-width="1"/>
          <circle cx="150" cy="44" r="1.8" fill="#bc002d"/>
        </g>
      `;
    }

    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      if (i % 5 !== 0 && options.showTicks !== false) {
        ticks += `<line x1="150" y1="22" x2="150" y2="27" stroke="#6b7280" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'JAPAN · ASIA/TOKYO';

    return `
      
      <!-- Pure Red Outer Ring & White Dial Face -->
      <circle cx="150" cy="150" r="147" fill="#ffffff" stroke="#bc002d" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Central Crimson Rising Sun (Hinomaru) -->
      <circle cx="150" cy="150" r="56" fill="#bc002d"/>

      <!-- Sakura Petals & Ticks -->
      <g class="sakura-markers">${sakuraPetals}</g>
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Minimalist Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#bc002d" letter-spacing="3">日本 · NIPPON</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#111827" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Sleek Matte Black Needle with White Lume Segment) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145.5,72 154.5,72 152,154 148,154" fill="#111827" filter="url(#drop-shadow)"/>
        <line x1="150" y1="78" x2="150" y2="120" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Sleek Matte Black Needle with White Lume Segment) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146,38 154,38 152,155 148,155" fill="#111827" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="120" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Crimson Red Second Needle with Sun Disc -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <circle cx="150" cy="55" r="5" fill="#bc002d" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Sun Cap -->
      <circle cx="150" cy="150" r="7" fill="#bc002d" stroke="#ffffff" stroke-width="1.8"/>
      <circle cx="150" cy="150" r="3" fill="#ffffff"/>
    
    `;
  }
};
