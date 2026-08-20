import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const uaeTheme: ClockThemeRenderer = {
  name: 'uae',
  description: 'United Arab Emirates Falcon watch with pan-Arab quad-colors, Golden Falcon crest, and luxury gold hour markers',
  defaultColors: {
    face: '#0f172a',
    dialBorder: '#d4af37',
    hourTicks: '#d4af37',
    minuteTicks: '#00732f',
    numbers: '#d4af37',
    hourHand: '#d4af37',
    minuteHand: '#d4af37',
    secondHand: '#ff0000',
    accent: '#d4af37',
    centerCap: '#d4af37',
    subdialBg: '#1e293b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Quad-color pan-Arab flag outer accent ring
    const quadColorRing = `
      <circle cx="150" cy="150" r="139" fill="none" stroke="#00732f" stroke-width="4"/>
      <path d="M 150,11 A 139,139 0 0,1 289,150 L 150,150 Z" fill="none" stroke="#ffffff" stroke-width="4"/>
      <path d="M 289,150 A 139,139 0 0,1 150,289 L 150,150 Z" fill="none" stroke="#000000" stroke-width="4"/>
      <path d="M 11,150 A 139,139 0 0,1 150,11 L 150,150 Z" fill="none" stroke="#ff0000" stroke-width="4"/>
    `;

    // Golden Falcon Crest Motif in Subdial
    const falconEmblem = `
      <g transform="translate(150, 150) scale(0.95)" filter="url(#drop-shadow)">
        <polygon points="0,-20 6,-8 16,-12 10,2 18,8 6,12 8,22 0,14 -8,22 -6,12 -18,8 -10,2 -16,-12 -6,-8" fill="#d4af37" stroke="#ffffff" stroke-width="0.8"/>
        <circle cx="0" cy="0" r="8" fill="#00732f"/>
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
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#00732f" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'UAE · ASIA/DUBAI';

    return `
      
      <!-- Deep Slate Face & Luxury Gold Bezel -->
      <circle cx="150" cy="150" r="147" fill="#0f172a" stroke="#d4af37" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Pan-Arab Quad Color Ring -->
      <g class="quad-ring">${quadColorRing}</g>

      <!-- Inner Subdial Frame -->
      <circle cx="150" cy="150" r="68" fill="#1e293b" stroke="#d4af37" stroke-width="1.8"/>

      <!-- Golden Falcon Emblem -->
      ${falconEmblem}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Motto & Label Inscriptions -->
      <text x="150" y="106" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#d4af37" stroke="#0f172a" stroke-width="0.5" letter-spacing="2.5">UNITED ARAB EMIRATES</text>
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
      <!-- Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ff0000" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="4.5" fill="#ff0000" stroke="#d4af37" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0f172a" stroke="#d4af37" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#d4af37"/>
    
    `;
  }
};
