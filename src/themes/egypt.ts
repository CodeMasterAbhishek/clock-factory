import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const egyptTheme: ClockThemeRenderer = {
  name: 'egypt',
  description: 'Egypt Pharaoh watch with Golden Eagle of Saladin emblem, hieroglyphic gold dial, and luxury onyx black bezel',
  defaultColors: {
    face: '#0f172a',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#c8102e',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#c8102e',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#1e293b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Golden Eagle of Saladin Emblem
    const eagleOfSaladin = `
      <g transform="translate(150, 150) scale(0.95)" filter="url(#drop-shadow)">
        <polygon points="0,-22 8,-12 18,-16 12,-2 22,4 10,8 14,24 0,16 -14,24 -10,8 -22,4 -12,-2 -18,-16 -8,-12" fill="#d4af37" stroke="#ffffff" stroke-width="0.8"/>
        <!-- Shield on Eagle Chest -->
        <rect x="-6" y="-6" width="12" height="14" fill="#c8102e" stroke="#d4af37" stroke-width="1"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#d4af37" stroke="#0f172a" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#c8102e" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'EGYPT · AFRICA/CAIRO';

    return `
      
      <!-- Onyx Black Bezel & Gold Rim -->
      <circle cx="150" cy="150" r="147" fill="#0f172a" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#c8102e" stroke-width="1.5"/>

      <!-- Inner Gold Subdial Ring -->
      <circle cx="150" cy="150" r="70" fill="#1e293b" stroke="#d4af37" stroke-width="1.8"/>

      <!-- Eagle of Saladin Emblem -->
      ${eagleOfSaladin}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Motto & Label Inscriptions -->
      <text x="150" y="106" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11.5" font-weight="bold" fill="#d4af37" letter-spacing="2.5">EGYPT · PHARAOH</text>
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
      <!-- Flag Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="4.5" fill="#c8102e" stroke="#d4af37" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0f172a" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
