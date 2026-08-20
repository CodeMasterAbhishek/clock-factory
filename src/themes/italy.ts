import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const italyTheme: ClockThemeRenderer = {
  name: 'italy',
  description: 'Italy Luxury watch with Milanese gold Roman numerals, tricolore flag accents, and guilloché texture',
  defaultColors: {
    face: '#0a120d',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#009246',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#ce2b37',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#112217'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Applied Gold Roman Numerals
    let romanNumerals = '';
    if (options.showNumbers !== false) {
      const romans = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
      for (let i = 0; i < 12; i++) {
        const rad = (i * 30 - 90) * (Math.PI / 180);
        const rx = 150 + 98 * Math.cos(rad);
        const ry = 150 + 98 * Math.sin(rad) + 5;
        romanNumerals += `<text x="${rx.toFixed(1)}" y="${ry.toFixed(1)}" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#d4af37" stroke="#0a120d" stroke-width="0.6">${romans[i]}</text>`;
      }
    }

    const labelText = options.label || 'ITALIA · EUROPE/ROME';

    return `
      
      <!-- Tricolore Bezel: Green, White, Red Outer Rim -->
      <circle cx="150" cy="150" r="147" fill="#009246"/>
      <path d="M 150,3 A 147,147 0 0,1 277,224 L 150,150 Z" fill="#ffffff"/>
      <path d="M 277,224 A 147,147 0 0,1 23,224 L 150,150 Z" fill="#ce2b37"/>

      <circle cx="150" cy="150" r="136" fill="${colors.face}" stroke="#d4af37" stroke-width="2.5"/>

      <!-- Inner Sunburst / Guilloché Subdial Ring -->
      <circle cx="150" cy="150" r="122" fill="none" stroke="#009246" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="75" fill="#112217" stroke="#d4af37" stroke-width="1.5"/>

      <!-- Roman Numerals -->
      <g class="romans">${romanNumerals}</g>

      <!-- High-Visibility Label Inscription -->
      <text x="150" y="106" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="#d4af37" letter-spacing="2.5">DESIGN MILANO</text>
      <text x="150" y="198" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Brushed Gold Syringe) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145,72 155,72 152,154 148,154" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="58" x2="150" y2="72" stroke="#d4af37" stroke-width="2.2"/>
      </g>
      
      <!-- Minute Hand (Brushed Gold Syringe) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145.5,38 154.5,38 152,155 148,155" fill="#d4af37" filter="url(#drop-shadow)"/>
        <line x1="150" y1="28" x2="150" y2="38" stroke="#d4af37" stroke-width="2.2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Rosso Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <circle cx="150" cy="55" r="4.5" fill="#ce2b37" stroke="#d4af37" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0a120d" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
