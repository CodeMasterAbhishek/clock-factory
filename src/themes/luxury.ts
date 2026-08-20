import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const luxuryTheme: ClockThemeRenderer = {
  name: 'luxury',
  description: 'Prestige luxury chronograph with Roman numerals, brushed gold bezel, and refined sub-dial textures',
  defaultColors: {
    face: '#12161f',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#8a7322',
    numbers: '#e6c86e',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#e5c07b',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#19202c'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour) {
        ticks += `<line x1="150" y1="26" x2="150" y2="36" stroke="${colors.hourTicks}" stroke-width="2.5" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="26" x2="150" y2="30" stroke="${colors.minuteTicks}" stroke-width="1" opacity="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let numbers = '';
    if (options.showNumbers !== false) {
      const radius = 100;
      const romans = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
      for (let i = 0; i < 12; i++) {
        const rad = (i * 30 - 90) * (Math.PI / 180);
        const nx = 150 + radius * Math.cos(rad);
        const ny = 150 + radius * Math.sin(rad) + 5;
        numbers += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" font-family="'Times New Roman', Times, serif" font-size="14" font-weight="bold" fill="${colors.numbers}" letter-spacing="1">${romans[i]}</text>`;
      }
    }

    const labelText = options.label || 'CHRONOMETER';

    return `
      
      <!-- Bezel with Gold Gradient -->
      <circle cx="150" cy="150" r="146" fill="#0d0f14" stroke="url(#gold-gradient)" stroke-width="5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>
      <circle cx="150" cy="150" r="137" fill="none" stroke="${colors.dialBorder}" stroke-width="0.8" opacity="0.5"/>

      <!-- Guilloché Dial Pattern / Concentric Textures -->
      <circle cx="150" cy="150" r="75" fill="${colors.subdialBg || '#19202c'}" stroke="${colors.dialBorder}" stroke-width="0.75" opacity="0.3"/>
      <circle cx="150" cy="150" r="50" fill="none" stroke="${colors.dialBorder}" stroke-width="0.5" stroke-dasharray="2 4" opacity="0.4"/>

      <!-- Ticks & Roman Numerals -->
      <g class="ticks">${ticks}</g>
      <g class="numbers">${numbers}</g>
      
      <!-- Luxury Inscription -->
      <text x="150" y="85" text-anchor="middle" font-family="'Times New Roman', serif" font-size="8.5" font-weight="bold" fill="${colors.numbers}" letter-spacing="2.5">${labelText}</text>
      <text x="150" y="215" text-anchor="middle" font-family="'Times New Roman', serif" font-size="7" fill="${colors.minuteTicks}" letter-spacing="1.5">AUTOMATIC · 28800 VPH</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Alpha/Dauphine Hand with Center Ridge) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="150,75 145,115 147,165 153,165 155,115" fill="${colors.hourHand}" filter="url(#drop-shadow)"/>
        <line x1="150" y1="75" x2="150" y2="165" stroke="#fff4cc" stroke-width="0.8"/>
      </g>
      
      <!-- Minute Hand (Alpha/Dauphine Hand) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="150,38 146,95 148,165 152,165 154,95" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
        <line x1="150" y1="38" x2="150" y2="165" stroke="#fff4cc" stroke-width="0.8"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand with Counterweight -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="24" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.2"/>
        <circle cx="150" cy="175" r="3.5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="6" fill="url(#gold-gradient)" filter="url(#drop-shadow)"/>
      <circle cx="150" cy="150" r="2.5" fill="#12161f"/>
    
    `;
  }
};
