import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const vintageTheme: ClockThemeRenderer = {
  name: 'vintage',
  description: 'Antique Victorian pocket watch with parchment dial, ornate serif numerals, and filigree Breguet hands',
  defaultColors: {
    face: '#f7f1e3',
    dialBorder: '#845422',
    hourTicks: '#3e2723',
    minuteTicks: '#8d6e63',
    numbers: '#3e2723',
    hourHand: '#2d1a12',
    minuteHand: '#2d1a12',
    secondHand: '#b71c1c',
    accent: '#b71c1c',
    centerCap: '#b8860b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour) {
        ticks += `<line x1="150" y1="24" x2="150" y2="34" stroke="${colors.hourTicks}" stroke-width="2.5" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<circle cx="150" cy="28" r="1" fill="${colors.minuteTicks}" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let numbers = '';
    if (options.showNumbers !== false) {
      const radius = 100;
      const numerals = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
      for (let i = 0; i < 12; i++) {
        const rad = (i * 30 - 90) * (Math.PI / 180);
        const nx = 150 + radius * Math.cos(rad);
        const ny = 150 + radius * Math.sin(rad) + 5;
        numbers += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" font-family="'Georgia', serif" font-size="14" font-style="italic" font-weight="bold" fill="${colors.numbers}">${numerals[i]}</text>`;
      }
    }

    const labelText = options.label || 'EST. 1892';

    return `
      
      <!-- Antique Brass Bezel -->
      <circle cx="150" cy="150" r="147" fill="#4a2e12" stroke="url(#gold-gradient)" stroke-width="4"/>
      <circle cx="150" cy="150" r="141" fill="${colors.face}"/>
      
      <!-- Vintage Parchment Inner Ring -->
      <circle cx="150" cy="150" r="137" fill="none" stroke="#d7ccc8" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="75" fill="none" stroke="#d7ccc8" stroke-width="0.8" stroke-dasharray="2 4"/>

      <!-- Ticks & Numerals -->
      <g class="ticks">${ticks}</g>
      <g class="numbers">${numbers}</g>

      <!-- Vintage Inscription -->
      <text x="150" y="90" text-anchor="middle" font-family="'Georgia', serif" font-size="8" font-style="italic" fill="#5d4037" letter-spacing="2">POCKET WATCH</text>
      <text x="150" y="215" text-anchor="middle" font-family="'Georgia', serif" font-size="7" font-weight="bold" fill="#8d6e63" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Breguet Moon Hand) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <line x1="150" y1="85" x2="150" y2="160" stroke="${colors.hourHand}" stroke-width="3"/>
        <circle cx="150" cy="90" r="7" fill="none" stroke="${colors.hourHand}" stroke-width="2.5"/>
        <polygon points="150,70 146,85 154,85" fill="${colors.hourHand}"/>
      </g>
      
      <!-- Minute Hand (Breguet Moon Hand) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <line x1="150" y1="50" x2="150" y2="160" stroke="${colors.minuteHand}" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="6" fill="none" stroke="${colors.minuteHand}" stroke-width="2.2"/>
        <polygon points="150,35 147,50 153,50" fill="${colors.minuteHand}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Antique Red Second Hand with Tear Drop Counterweight -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="26" x2="150" y2="175" stroke="${colors.secondHand}" stroke-width="1.2"/>
        <circle cx="150" cy="170" r="3.5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Antique Hub -->
      <circle cx="150" cy="150" r="5" fill="url(#gold-gradient)"/>
      <circle cx="150" cy="150" r="2" fill="#2d1a12"/>
    
    `;
  }
};
