import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const southKoreaTheme: ClockThemeRenderer = {
  name: 'south-korea',
  description: 'South Korea Taegeuk watch with Yin-Yang red & blue central circle, I Ching trigrams, and crisp hangul aesthetic',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#0047a0',
    hourTicks: '#111827',
    minuteTicks: '#9ca3af',
    numbers: '#111827',
    hourHand: '#111827',
    minuteHand: '#111827',
    secondHand: '#cd2e3a',
    accent: '#cd2e3a',
    centerCap: '#0047a0',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Taegeuk Red & Blue S-Curve Circle
    const taegeuk = `
      <g transform="translate(150, 150) rotate(-35) scale(1.15)" filter="url(#drop-shadow)">
        <circle cx="0" cy="0" r="42" fill="#0047a0"/>
        <path d="M 0,-42 A 42,42 0 0,1 0,42 A 21,21 0 0,1 0,0 A 21,21 0 0,0 0,-42 Z" fill="#cd2e3a"/>
      </g>
    `;

    // 4 I Ching Trigrams (Geon at 10:30, Ri at 1:30, Gam at 7:30, Gon at 4:30)
    const trigrams = `
      <!-- Geon (Heaven) at 12 / Top Left -->
      <g transform="translate(100, 70) rotate(-45)">
        <rect x="-12" y="-6" width="24" height="3" fill="#111827"/>
        <rect x="-12" y="-1" width="24" height="3" fill="#111827"/>
        <rect x="-12" y="4" width="24" height="3" fill="#111827"/>
      </g>
      <!-- Ri (Fire) at Top Right -->
      <g transform="translate(200, 70) rotate(45)">
        <rect x="-12" y="-6" width="24" height="3" fill="#111827"/>
        <rect x="-12" y="-1" width="10" height="3" fill="#111827"/>
        <rect x="2" y="-1" width="10" height="3" fill="#111827"/>
        <rect x="-12" y="4" width="24" height="3" fill="#111827"/>
      </g>
      <!-- Gam (Water) at Bottom Left -->
      <g transform="translate(100, 230) rotate(-135)">
        <rect x="-12" y="-6" width="10" height="3" fill="#111827"/>
        <rect x="2" y="-6" width="10" height="3" fill="#111827"/>
        <rect x="-12" y="-1" width="24" height="3" fill="#111827"/>
        <rect x="-12" y="4" width="10" height="3" fill="#111827"/>
        <rect x="2" y="4" width="10" height="3" fill="#111827"/>
      </g>
      <!-- Gon (Earth) at Bottom Right -->
      <g transform="translate(200, 230) rotate(135)">
        <rect x="-12" y="-6" width="10" height="3" fill="#111827"/>
        <rect x="2" y="-6" width="10" height="3" fill="#111827"/>
        <rect x="-12" y="-1" width="10" height="3" fill="#111827"/>
        <rect x="2" y="-1" width="10" height="3" fill="#111827"/>
        <rect x="-12" y="4" width="10" height="3" fill="#111827"/>
        <rect x="2" y="4" width="10" height="3" fill="#111827"/>
      </g>
    `;

    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#111827" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#9ca3af" stroke-width="1.4" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'KOREA · ASIA/SEOUL';

    return `
      
      <!-- Pure White Dial & Blue/Red Rim -->
      <circle cx="150" cy="150" r="147" fill="#ffffff" stroke="#0047a0" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#cd2e3a" stroke-width="1.5"/>

      <!-- Taegeuk Center Emblem -->
      <g class="taegeuk">${taegeuk}</g>

      <!-- I Ching Trigrams -->
      <g class="trigrams">${trigrams}</g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Hangul & Label Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#cd2e3a" stroke="#ffffff" stroke-width="0.5" letter-spacing="3">대한민국 · KOREA</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#0047a0" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Matte Black Tapered Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145.5,72 154.5,72 152,154 148,154" fill="#111827" filter="url(#drop-shadow)"/>
        <line x1="150" y1="78" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Matte Black Tapered Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146,38 154,38 152,155 148,155" fill="#111827" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Taegeuk Red Second Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#cd2e3a" stroke="#0047a0" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0047a0" stroke="#ffffff" stroke-width="2"/>
      <circle cx="150" cy="150" r="3.5" fill="#cd2e3a"/>
    
    `;
  }
};
