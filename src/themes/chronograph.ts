import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const chronographTheme: ClockThemeRenderer = {
  name: 'chronograph',
  description: 'Bi-compax motorsport chronograph with dual sub-dials, stainless steel tachymeter bezel, and precision syringe hands',
  defaultColors: {
    face: '#12161f',
    dialBorder: '#3b82f6',
    hourTicks: '#ffffff',
    minuteTicks: '#475569',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ef4444',
    accent: '#3b82f6',
    centerCap: '#ffffff',
    subdialBg: '#0b0e14'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // Tachymeter markings on outer bezel
    let tachymeter = '';
    const tachyValues = [
      { text: '60', angle: 0 },
      { text: '70', angle: 35 },
      { text: '80', angle: 65 },
      { text: '90', angle: 90 },
      { text: '100', angle: 115 },
      { text: '120', angle: 145 },
      { text: '150', angle: 180 },
      { text: '200', angle: 220 },
      { text: '300', angle: 270 },
      { text: '400', angle: 315 }
    ];

    tachyValues.forEach(t => {
      const rad = (t.angle - 90) * (Math.PI / 180);
      const tx = 150 + 138 * Math.cos(rad);
      const ty = 150 + 138 * Math.sin(rad) + 3;
      tachymeter += `<text x="${tx.toFixed(1)}" y="${ty.toFixed(1)}" text-anchor="middle" font-family="-apple-system, sans-serif" font-size="6" font-weight="700" fill="#94a3b8">${t.text}</text>`;
    });

    // Main dial hour ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="148" y="24" width="4" height="12" rx="1" fill="#ffffff" stroke="#1e293b" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="24" x2="150" y2="30" stroke="${colors.minuteTicks}" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    // Sub-dial hands calculation (seconds sub-dial on left, minutes counter on right)
    const secSubAngle = (time.seconds / 60) * 360;
    const minSubAngle = (time.minutes / 60) * 360;

    const labelText = options.label || 'CHRONOGRAPH 100M';

    return `
      
      <!-- Stainless Steel Tachymeter Outer Bezel -->
      <circle cx="150" cy="150" r="147" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <circle cx="150" cy="150" r="131" fill="${colors.face}" stroke="#3b82f6" stroke-width="1.5"/>

      <!-- Tachymeter Scale Text -->
      <g class="tachymeter-labels">${tachymeter}</g>
      <text x="150" y="24" text-anchor="middle" font-family="sans-serif" font-size="5.5" font-weight="800" fill="#ef4444" letter-spacing="1">TACHYMETER</text>

      <!-- Inner Sunburst Dial -->
      <circle cx="150" cy="150" r="124" fill="none" stroke="#334155" stroke-width="1"/>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- Left Sub-Dial (Running Seconds at 9 o'clock) -->
      <g class="subdial-left">
        <circle cx="95" cy="150" r="28" fill="${colors.subdialBg}" stroke="#3b82f6" stroke-width="1"/>
        <circle cx="95" cy="150" r="27" fill="none" stroke="#334155" stroke-width="0.5" stroke-dasharray="2 2"/>
        <text x="95" y="132" text-anchor="middle" font-family="sans-serif" font-size="5" font-weight="700" fill="#94a3b8">60</text>
        <text x="95" y="173" text-anchor="middle" font-family="sans-serif" font-size="5" font-weight="700" fill="#94a3b8">30</text>
        <!-- Sub-dial hand -->
        <g transform="rotate(${secSubAngle} 95 150)">
          <line x1="95" y1="150" x2="95" y2="126" stroke="#ef4444" stroke-width="1.5"/>
          <circle cx="95" cy="150" r="2" fill="#ffffff"/>
        </g>
      </g>

      <!-- Right Sub-Dial (30-Min Counter at 3 o'clock) -->
      <g class="subdial-right">
        <circle cx="205" cy="150" r="28" fill="${colors.subdialBg}" stroke="#3b82f6" stroke-width="1"/>
        <circle cx="205" cy="150" r="27" fill="none" stroke="#334155" stroke-width="0.5" stroke-dasharray="2 2"/>
        <text x="205" y="132" text-anchor="middle" font-family="sans-serif" font-size="5" font-weight="700" fill="#94a3b8">30</text>
        <text x="205" y="173" text-anchor="middle" font-family="sans-serif" font-size="5" font-weight="700" fill="#94a3b8">15</text>
        <!-- Sub-dial hand -->
        <g transform="rotate(${minSubAngle} 205 150)">
          <line x1="205" y1="150" x2="205" y2="126" stroke="#3b82f6" stroke-width="1.5"/>
          <circle cx="205" cy="150" r="2" fill="#ffffff"/>
        </g>
      </g>

      <!-- Date Box at 6 o'clock -->
      <rect x="137" y="196" width="26" height="15" rx="2" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>
      <text x="150" y="207" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff">${time.dateString}</text>

      <!-- Brand Inscription -->
      <text x="150" y="90" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="800" fill="#ffffff" letter-spacing="1.5">CHRONOGRAPH</text>
      <text x="150" y="101" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="6" font-weight="700" fill="#3b82f6" letter-spacing="1">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Syringe Style) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146,75 154,75 152,152 148,152" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="60" x2="150" y2="75" stroke="#ffffff" stroke-width="2"/>
        <polygon points="147.5,79 152.5,79 151,140 149,140" fill="#3b82f6"/>
      </g>
      
      <!-- Minute Hand (Syringe Style) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146.5,45 153.5,45 152,153 148,153" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="32" x2="150" y2="45" stroke="#ffffff" stroke-width="2"/>
        <polygon points="147.5,49 152.5,49 151,140 149,140" fill="#3b82f6"/>
      </g>
      
      ${showSeconds ? `
      <!-- Red Chronograph Sweep Second Hand with Oval Counterweight -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="20" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.8"/>
        <circle cx="150" cy="170" r="4.5" fill="none" stroke="${colors.secondHand}" stroke-width="1.5"/>
      </g>
      ` : ''}
      
      <!-- Center Steel Cap -->
      <circle cx="150" cy="150" r="7" fill="#1e293b" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="3" fill="#ef4444"/>
    
    `;
  }
};
