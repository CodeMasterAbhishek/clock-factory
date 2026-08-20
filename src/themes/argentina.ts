import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const argentinaTheme: ClockThemeRenderer = {
  name: 'argentina',
  description: 'Argentina Sun of May watch with sky blue & white horizontal stripes, 32-ray golden Sol de Mayo, and gold accents',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#74acdf',
    hourTicks: '#74acdf',
    minuteTicks: '#f6b40e',
    numbers: '#74acdf',
    hourHand: '#74acdf',
    minuteHand: '#74acdf',
    secondHand: '#f6b40e',
    accent: '#f6b40e',
    centerCap: '#f6b40e',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Sol de Mayo (Sun of May) 16 Straight + 16 Wavy Rays Emblem
    let sunRays = '';
    for (let i = 0; i < 32; i++) {
      const angle = i * 11.25;
      const isLong = i % 2 === 0;
      const len = isLong ? 36 : 30;
      sunRays += `<line x1="150" y1="150" x2="${(150 + len * Math.cos((angle - 90) * Math.PI / 180)).toFixed(1)}" y2="${(150 + len * Math.sin((angle - 90) * Math.PI / 180)).toFixed(1)}" stroke="#f6b40e" stroke-width="1.8"/>`;
    }

    const solDeMayo = `
      <g class="sol-de-mayo" filter="url(#drop-shadow)">
        ${sunRays}
        <circle cx="150" cy="150" r="16" fill="#f6b40e" stroke="#ffffff" stroke-width="1.5"/>
        <!-- Human Face Details -->
        <circle cx="145" cy="147" r="1.5" fill="#74acdf"/>
        <circle cx="155" cy="147" r="1.5" fill="#74acdf"/>
        <path d="M 145,154 Q 150,158 155,154" fill="none" stroke="#74acdf" stroke-width="1.2"/>
      </g>
    `;

    // Sky Blue Top & Bottom Horizontal Flag Bands
    const flagBands = `
      <path d="M 12,150 A 138,138 0 0,1 288,150 L 288,100 A 138,138 0 0,0 12,100 Z" fill="#74acdf" opacity="0.25"/>
      <path d="M 12,150 A 138,138 0 0,0 288,150 L 288,200 A 138,138 0 0,1 12,200 Z" fill="#74acdf" opacity="0.25"/>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#74acdf" stroke="#f6b40e" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#f6b40e" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ARGENTINA · BUENOS_AIRES';

    return `
      
      <!-- Sky Blue Outer Bezel & Snow White Dial -->
      <circle cx="150" cy="150" r="147" fill="#74acdf" stroke="#f6b40e" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Horizontal Flag Bands -->
      <g class="flag-bands">${flagBands}</g>

      <!-- Sol de Mayo Emblem -->
      ${solDeMayo}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Motto & Label Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#74acdf" stroke="#ffffff" stroke-width="0.5" letter-spacing="2.5">SOL DE MAYO</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#74acdf" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Sky Blue Sword with Gold Center) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145,72 155,72 152,154 148,154" fill="#74acdf" stroke="#f6b40e" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Sky Blue Sword with Gold Center) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145.5,38 154.5,38 152,155 148,155" fill="#74acdf" stroke="#f6b40e" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Sun Gold Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#f6b40e" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#74acdf" stroke="#f6b40e" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#f6b40e"/>
    
    `;
  }
};
