import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const germanyTheme: ClockThemeRenderer = {
  name: 'germany',
  description: 'Germany Precision watch with Schwarz-Rot-Gold tricolor bezel, Bundesadler crest iconography, and Bauhaus typography',
  defaultColors: {
    face: '#0f1115',
    dialBorder: '#ffce00',
    hourTicks: '#ffce00',
    minuteTicks: '#64748b',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#dd0000',
    accent: '#ffce00',
    centerCap: '#ffce00',
    subdialBg: '#181b20'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ffce00" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#94a3b8" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'GERMANY · EUROPE/BERLIN';

    return `
      
      <!-- Tricolor Outer Ring: Schwarz (Black), Rot (Red), Gold -->
      <circle cx="150" cy="150" r="147" fill="#ffce00"/>
      <path d="M 3,150 A 147,147 0 0,1 150,3 L 150,150 Z" fill="#000000"/>
      <path d="M 150,3 A 147,147 0 0,1 297,150 L 150,150 Z" fill="#dd0000"/>
      
      <circle cx="150" cy="150" r="136" fill="${colors.face}" stroke="#ffce00" stroke-width="2.5"/>

      <!-- Inner Subdial Ring -->
      <circle cx="150" cy="150" r="75" fill="#181b20" stroke="#475569" stroke-width="1.5"/>

      <!-- German Eagle Stylized Crest at 12 o'clock -->
      <g transform="translate(150, 96) scale(0.9)">
        <polygon points="0,-12 -8,-4 -4,8 0,4 4,8 8,-4" fill="#ffce00" stroke="#dd0000" stroke-width="1"/>
      </g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Precision Inscriptions -->
      <text x="150" y="118" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="900" fill="#ffce00" stroke="#000000" stroke-width="0.5" letter-spacing="2.5">DEUTSCHLAND</text>
      <text x="150" y="198" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Precision White Tapered Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145.5,72 154.5,72 151.5,155 148.5,155" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="78" x2="150" y2="145" stroke="#ffce00" stroke-width="1.8"/>
      </g>
      
      <!-- Minute Hand (Precision White Tapered Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146,38 154,38 151.5,155 148.5,155" fill="#ffffff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffce00" stroke-width="1.8"/>
      </g>
      
      ${showSeconds ? `
      <!-- Flag Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <circle cx="150" cy="55" r="5" fill="#dd0000" stroke="#ffce00" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#000000" stroke="#ffce00" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffce00"/>
    
    `;
  }
};
