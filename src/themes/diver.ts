import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const diverTheme: ClockThemeRenderer = {
  name: 'diver',
  description: 'Pro Diver watch with notched ceramic bezel, luminous geometric indices, and Mercedes-style hands',
  defaultColors: {
    face: '#08121e',
    dialBorder: '#0ea5e9',
    hourTicks: '#38bdf8',
    minuteTicks: '#1e3a5f',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#f97316',
    accent: '#38bdf8',
    centerCap: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.6)',
    subdialBg: '#050b14'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let bezelNotches = '';
    // Bezel notches around outer perimeter
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isQuarter = i % 15 === 0;
      const isFive = i % 5 === 0;
      if (isFive) {
        bezelNotches += `<line x1="150" y1="12" x2="150" y2="20" stroke="#cbd5e1" stroke-width="2.5" transform="rotate(${angle} 150 150)"/>`;
      } else {
        bezelNotches += `<line x1="150" y1="14" x2="150" y2="18" stroke="#64748b" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    // Luminous hour markers: Inverted triangle at 12, rectangles at 3,6,9, circles for others
    let hourMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i === 0) {
        // 12 o'clock inverted triangle
        hourMarkers += `<polygon points="143,40 157,40 150,56" fill="${colors.hourTicks}" stroke="#ffffff" stroke-width="1.5" filter="url(#lume-glow)"/>`;
      } else if (i === 3 || i === 6 || i === 9) {
        // Baton at 3, 6, 9
        hourMarkers += `<rect x="146.5" y="40" width="7" height="15" rx="1.5" fill="${colors.hourTicks}" stroke="#ffffff" stroke-width="1.2" filter="url(#lume-glow)" transform="rotate(${angle} 150 150)"/>`;
      } else {
        // Luminous circles
        hourMarkers += `<circle cx="150" cy="46" r="5" fill="${colors.hourTicks}" stroke="#ffffff" stroke-width="1.2" filter="url(#lume-glow)" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || '300m / 1000ft';

    return `
      
      <!-- Deep Sea Ceramic Bezel -->
      <circle cx="150" cy="150" r="147" fill="#0b1320" stroke="#334155" stroke-width="3"/>
      <circle cx="150" cy="150" r="141" fill="#040810" stroke="#0ea5e9" stroke-width="1.5"/>
      <g class="bezel-notches">${bezelNotches}</g>
      <!-- Bezel 12 O'Clock Pearl -->
      <circle cx="150" cy="20" r="4" fill="#38bdf8" stroke="#ffffff" stroke-width="1.5" filter="url(#lume-glow)"/>

      <!-- Inner Deep Blue Sunburst Dial -->
      <circle cx="150" cy="150" r="126" fill="url(#ocean-gradient)"/>
      <circle cx="150" cy="150" r="124" fill="none" stroke="#1e293b" stroke-width="1"/>

      <!-- Lume Markers -->
      <g class="hour-markers">${hourMarkers}</g>

      <!-- Depth Inscription -->
      <text x="150" y="105" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="8.5" font-weight="700" fill="#ffffff" letter-spacing="2">OCEAN DIVER</text>
      <text x="150" y="200" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="7.5" font-weight="600" fill="${colors.secondHand}" letter-spacing="1.5">${labelText}</text>
      <text x="150" y="212" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="6" fill="#94a3b8" letter-spacing="1">AUTOMATIC SUPERLATIVE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Mercedes / Broad Arrow) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146.5" y="80" width="7" height="75" rx="1.5" fill="#ffffff" filter="url(#drop-shadow)"/>
        <circle cx="150" cy="90" r="8" fill="#ffffff" filter="url(#drop-shadow)"/>
        <circle cx="150" cy="90" r="6" fill="${colors.hourTicks}" filter="url(#lume-glow)"/>
        <line x1="150" y1="84" x2="150" y2="96" stroke="#ffffff" stroke-width="1"/>
        <line x1="144" y1="90" x2="156" y2="90" stroke="#ffffff" stroke-width="1"/>
      </g>
      
      <!-- Minute Hand (Sword Hand) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146,45 154,45 153,155 147,155" fill="#ffffff" filter="url(#drop-shadow)"/>
        <polygon points="147.5,49 152.5,49 151.5,140 148.5,140" fill="${colors.hourTicks}" filter="url(#lume-glow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Orange Diver Second Hand with Lume Dot -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="28" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.8"/>
        <circle cx="150" cy="65" r="5" fill="#ffffff"/>
        <circle cx="150" cy="65" r="3.5" fill="${colors.hourTicks}" filter="url(#lume-glow)"/>
        <circle cx="150" cy="175" r="3.5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Hub -->
      <circle cx="150" cy="150" r="6" fill="#ffffff" filter="url(#drop-shadow)"/>
      <circle cx="150" cy="150" r="2.5" fill="#08121e"/>
    
    `;
  }
};
