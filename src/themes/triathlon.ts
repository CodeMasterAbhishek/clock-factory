import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const triathlonTheme: ClockThemeRenderer = {
  name: 'triathlon',
  description: 'Triathlon endurance sports watch with pacing zone arcs, OLED dark face, and electric lime hands',
  defaultColors: {
    face: '#090a0f',
    dialBorder: '#84cc16',
    hourTicks: '#84cc16',
    minuteTicks: '#1e293b',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#84cc16',
    accent: '#84cc16',
    centerCap: '#84cc16',
    subdialBg: '#111827'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="148.5" y="24" width="3" height="12" rx="1" fill="#84cc16" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="24" x2="150" y2="30" stroke="#334155" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    // Bold Futuristic Numbers 12, 3, 6, 9
    let numerals = '';
    if (options.showNumbers !== false) {
      numerals = `
        <text x="150" y="60" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#ffffff">12</text>
        <text x="242" y="156" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#ffffff">3</text>
        <text x="150" y="250" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#ffffff">6</text>
        <text x="58" y="156" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="18" font-weight="900" fill="#ffffff">9</text>
      `;
    }

    const labelText = options.label || 'PACE 4:15/KM · HR 164';

    return `
      
      <!-- Bezel & Matte Dark Polymer Case -->
      <circle cx="150" cy="150" r="147" fill="#0f172a" stroke="#1e293b" stroke-width="3"/>
      <circle cx="150" cy="150" r="138" fill="${colors.face}" stroke="#84cc16" stroke-width="1.5"/>

      <!-- Heart Rate / Pace Performance Zone Arcs -->
      <!-- Zone 1 (Blue) -->
      <path d="M 150,16 A 134,134 0 0,1 245,55" fill="none" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/>
      <!-- Zone 2 (Green) -->
      <path d="M 245,55 A 134,134 0 0,1 284,150" fill="none" stroke="#84cc16" stroke-width="4" stroke-linecap="round"/>
      <!-- Zone 3 (Yellow) -->
      <path d="M 284,150 A 134,134 0 0,1 245,245" fill="none" stroke="#eab308" stroke-width="4" stroke-linecap="round"/>
      <!-- Zone 4 (Orange/Red) -->
      <path d="M 245,245 A 134,134 0 0,1 150,284" fill="none" stroke="#ef4444" stroke-width="4" stroke-linecap="round"/>

      <!-- Inner Segmented Track Ring -->
      <circle cx="150" cy="150" r="124" fill="none" stroke="#1e293b" stroke-width="1.5"/>

      <!-- Ticks & Numerals -->
      <g class="ticks">${ticks}</g>
      <g class="numerals">${numerals}</g>

      <!-- Center Performance Sub-Display Ring -->
      <circle cx="150" cy="150" r="70" fill="#0f172a" stroke="#1e293b" stroke-width="1"/>
      <circle cx="150" cy="150" r="68" fill="none" stroke="#84cc16" stroke-width="0.8" stroke-dasharray="3 3"/>

      <!-- Inscriptions -->
      <text x="150" y="105" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="7.5" font-weight="800" fill="#84cc16" letter-spacing="1.5">TRIATHLON PRO</text>
      <text x="150" y="195" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="6.5" font-weight="700" fill="#94a3b8" letter-spacing="1">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Neon Tapered Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146,75 154,75 152,154 148,154" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="80" x2="150" y2="150" stroke="#84cc16" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Neon Tapered Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146.5,42 153.5,42 152,155 148,155" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="48" x2="150" y2="150" stroke="#84cc16" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Electric Lime Seconds Sweep with Arrowhead -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="22" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <polygon points="150,18 146,28 154,28" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Neon Hub -->
      <circle cx="150" cy="150" r="7" fill="#0f172a" stroke="#84cc16" stroke-width="2"/>
      <circle cx="150" cy="150" r="3" fill="#84cc16"/>
    
    `;
  }
};
