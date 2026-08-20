import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const regattaTheme: ClockThemeRenderer = {
  name: 'regatta',
  description: 'Yachting regatta timer watch with 10-minute countdown arc, compass rose bezel, and nautical navy styling',
  defaultColors: {
    face: '#0a192f',
    dialBorder: '#38bdf8',
    hourTicks: '#ffffff',
    minuteTicks: '#1e3a8a',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#e11d48',
    accent: '#f59e0b',
    centerCap: '#38bdf8',
    subdialBg: '#0f172a'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Compass cardinal directions on outer ring
    const compassPoints = [
      { text: 'N', angle: 0, color: '#e11d48' },
      { text: 'E', angle: 90, color: '#ffffff' },
      { text: 'S', angle: 180, color: '#ffffff' },
      { text: 'W', angle: 270, color: '#ffffff' }
    ];

    let compassText = '';
    compassPoints.forEach(p => {
      const rad = (p.angle - 90) * (Math.PI / 180);
      const cx = 150 + 138 * Math.cos(rad);
      const cy = 150 + 138 * Math.sin(rad) + 4;
      compassText += `<text x="${cx.toFixed(1)}" y="${cy.toFixed(1)}" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="10" font-weight="900" fill="${p.color}">${p.text}</text>`;
    });

    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<line x1="150" y1="26" x2="150" y2="38" stroke="#ffffff" stroke-width="2.5" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="26" x2="150" y2="32" stroke="#38bdf8" stroke-width="1.2" opacity="0.7" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'REGATTA TIMER 10 MIN';

    return `
      
      <!-- Nautical Bezel with Compass Ring -->
      <circle cx="150" cy="150" r="147" fill="#030712" stroke="#1e293b" stroke-width="3"/>
      <circle cx="150" cy="150" r="128" fill="${colors.face}" stroke="#38bdf8" stroke-width="2"/>

      <!-- Compass Cardinal Letters -->
      <g class="compass-points">${compassText}</g>

      <!-- 10-Minute Regatta Countdown Sector Arcs (10 to 12 o'clock) -->
      <!-- First 5 Mins (Yellow Arc from 300° to 330°) -->
      <path d="M 150,150 L 59.8,97.9 A 104,104 0 0,1 98,59.8 Z" fill="#f59e0b" opacity="0.4"/>
      <!-- Final 5 Mins (Red Arc from 330° to 360°) -->
      <path d="M 150,150 L 98,59.8 A 104,104 0 0,1 150,46 Z" fill="#e11d48" opacity="0.6"/>

      <circle cx="150" cy="150" r="104" fill="none" stroke="#f59e0b" stroke-width="2"/>

      <!-- Inner Compass Rose Graphic -->
      <polygon points="150,110 154,146 150,150 146,146" fill="#e11d48"/>
      <polygon points="150,110 146,146 150,150 154,146" fill="#ffffff" opacity="0.6"/>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- Label Inscription -->
      <text x="150" y="98" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8" font-weight="800" fill="#ffffff" letter-spacing="1.5">YACHT-MASTER</text>
      <text x="150" y="200" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="7" font-weight="700" fill="#f59e0b" letter-spacing="1">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Nautical Arrow) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145,75 155,75 153,154 147,154" fill="#ffffff" filter="url(#drop-shadow)"/>
        <polygon points="150,60 142,76 158,76" fill="#38bdf8"/>
      </g>
      
      <!-- Minute Hand (Nautical Arrow) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146,45 154,45 152.5,155 147.5,155" fill="#ffffff" filter="url(#drop-shadow)"/>
        <polygon points="150,30 143,47 157,47" fill="#38bdf8"/>
      </g>
      
      ${showSeconds ? `
      <!-- Red Regatta Countdown Needle with Luminous Disc -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="20" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="2"/>
        <circle cx="150" cy="55" r="5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
      </g>
      ` : ''}
      
      <!-- Center Brass Cap -->
      <circle cx="150" cy="150" r="7" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <circle cx="150" cy="150" r="3" fill="#ffffff"/>
    
    `;
  }
};
