import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const swedenTheme: ClockThemeRenderer = {
  name: 'sweden',
  description: 'Sweden Scandinavian watch with vibrant blue dial, Nordic yellow cross band, and clean Swedish minimalist styling',
  defaultColors: {
    face: '#006aa7',
    dialBorder: '#fecc00',
    hourTicks: '#fecc00',
    minuteTicks: '#ffffff',
    numbers: '#ffffff',
    hourHand: '#fecc00',
    minuteHand: '#fecc00',
    secondHand: '#ffffff',
    accent: '#fecc00',
    centerCap: '#fecc00',
    subdialBg: '#004f7c'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Nordic Cross Yellow Band
    const nordicCross = `
      <g opacity="0.3">
        <rect x="100" y="20" width="30" height="260" fill="#fecc00"/>
        <rect x="20" y="135" width="260" height="30" fill="#fecc00"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#fecc00" stroke="#006aa7" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#ffffff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SWEDEN · EUROPE/STOCKHOLM';

    return `
      
      <!-- Swedish Blue Bezel & Yellow Outer Rim -->
      <circle cx="150" cy="150" r="147" fill="#006aa7" stroke="#fecc00" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Nordic Cross Graphic -->
      <g class="nordic-cross">${nordicCross}</g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#fecc00" stroke="#006aa7" stroke-width="0.5" letter-spacing="2.5">SVERIGE · SCANDINAVIA</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Swedish Yellow Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145,72 155,72 152,154 148,154" fill="#fecc00" filter="url(#drop-shadow)"/>
        <line x1="150" y1="78" x2="150" y2="145" stroke="#006aa7" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Swedish Yellow Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145.5,38 154.5,38 152,155 148,155" fill="#fecc00" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#006aa7" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Pure White Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#fecc00" stroke="#006aa7" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#006aa7" stroke="#fecc00" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#fecc00"/>
    
    `;
  }
};
