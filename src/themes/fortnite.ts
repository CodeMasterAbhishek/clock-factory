import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const fortniteTheme: ClockThemeRenderer = {
  name: 'fortnite',
  description: 'Fortnite Victory Royale watch with royal purple & cyan storm dial, Victory Crown at 12 o\'clock, and V-Bucks diamond hub',
  defaultColors: {
    face: '#2b1055',
    dialBorder: '#00f0ff',
    hourTicks: '#ffd700',
    minuteTicks: '#00f0ff',
    numbers: '#ffd700',
    hourHand: '#00f0ff',
    minuteHand: '#00f0ff',
    secondHand: '#ff007f',
    accent: '#ffd700',
    centerCap: '#00f0ff',
    subdialBg: '#1a0933'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Victory Royale Crown at 12 o'clock / Subdial
    const victoryCrown = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <polygon points="-20,10 -25,-12 -10,-2 0,-18 10,-2 25,-12 20,10" fill="#ffd700" stroke="#2b1055" stroke-width="1.2"/>
        <circle cx="0" cy="-20" r="3" fill="#00f0ff"/>
        <circle cx="-25" cy="-14" r="2" fill="#ff007f"/>
        <circle cx="25" cy="-14" r="2" fill="#ff007f"/>
        <!-- V-Bucks Diamond Ring -->
        <circle cx="0" cy="0" r="42" fill="none" stroke="#00f0ff" stroke-width="1.2" stroke-dasharray="6 4"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<polygon points="150,18 154,28 146,28" fill="#ffd700" stroke="#2b1055" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#00f0ff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'FORTNITE · VICTORY ROYALE';

    return `
      
      <!-- Royal Purple Face & Cyan Storm Bezel -->
      <circle cx="150" cy="150" r="147" fill="#2b1055" stroke="#00f0ff" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ffd700" stroke-width="1.2"/>

      <!-- Victory Crown Emblem -->
      ${victoryCrown}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffd700" stroke="#2b1055" stroke-width="0.5" letter-spacing="3">FORTNITE</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#00f0ff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Cyan Tapered Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#00f0ff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#2b1055" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Cyan Tapered Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#00f0ff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#2b1055" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Neon Pink Second Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ff007f" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#ffd700" stroke="#2b1055" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#2b1055" stroke="#00f0ff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffd700"/>
    
    `;
  }
};
