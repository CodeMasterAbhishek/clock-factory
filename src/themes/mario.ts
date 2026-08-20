import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const marioTheme: ClockThemeRenderer = {
  name: 'mario',
  description: 'Super Mario Bros watch with Mushroom Kingdom sky blue dial, Super Star motif, and pixel brick chapter ring',
  defaultColors: {
    face: '#5c94fc',
    dialBorder: '#e60012',
    hourTicks: '#f8d800',
    minuteTicks: '#ffffff',
    numbers: '#f8d800',
    hourHand: '#e60012',
    minuteHand: '#e60012',
    secondHand: '#f8d800',
    accent: '#f8d800',
    centerCap: '#e60012',
    subdialBg: '#00a2e8'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Super Star Emblem at 12 o'clock / Center
    const superStar = `
      <g transform="translate(150, 150) scale(1.1)" filter="url(#drop-shadow)">
        <polygon points="0,-32 9,-9 32,-9 14,5 21,28 0,14 -21,28 -14,5 -32,-9 -9,-9" fill="#f8d800" stroke="#000000" stroke-width="1.8"/>
        <!-- Star Eyes -->
        <ellipse cx="-5" cy="-2" rx="2" ry="5" fill="#000000"/>
        <ellipse cx="5" cy="-2" rx="2" ry="5" fill="#000000"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146" y="20" width="8" height="14" rx="2" fill="#f8d800" stroke="#000000" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<circle cx="150" cy="24" r="2" fill="#ffffff" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SUPER MARIO · MUSHROOM KINGDOM';

    return `
      
      <!-- Mushroom Kingdom Blue Face & Mario Red Bezel -->
      <circle cx="150" cy="150" r="147" fill="#5c94fc" stroke="#e60012" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#000000" stroke-width="1.5"/>

      <!-- Super Star Emblem -->
      ${superStar}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#f8d800" stroke="#000000" stroke-width="0.8" letter-spacing="2.5">SUPER MARIO</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Mario Red Pointer with Yellow Accent) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#e60012" stroke="#000000" stroke-width="1" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#f8d800" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Mario Red Pointer with Yellow Accent) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#e60012" stroke="#000000" stroke-width="1" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#f8d800" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Star Gold Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#f8d800" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#f8d800" stroke="#000000" stroke-width="1"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#e60012" stroke="#000000" stroke-width="2"/>
      <circle cx="150" cy="150" r="3.5" fill="#f8d800"/>
    
    `;
  }
};
