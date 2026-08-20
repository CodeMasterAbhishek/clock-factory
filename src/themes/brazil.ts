import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const brazilTheme: ClockThemeRenderer = {
  name: 'brazil',
  description: 'Brazil Tropical watch with yellow rhombus, blue starry celestial globe, and canary yellow hands',
  defaultColors: {
    face: '#009739',
    dialBorder: '#fedd00',
    hourTicks: '#fedd00',
    minuteTicks: '#ffffff',
    numbers: '#ffffff',
    hourHand: '#fedd00',
    minuteHand: '#fedd00',
    secondHand: '#012169',
    accent: '#fedd00',
    centerCap: '#012169',
    subdialBg: '#012169'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Constellation Star Markers on Central Globe
    let stars = '';
    const starAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    starAngles.forEach(angle => {
      const rad = (angle - 90) * (Math.PI / 180);
      const sx = 150 + 44 * Math.cos(rad);
      const sy = 150 + 44 * Math.sin(rad);
      stars += `<circle cx="${sx.toFixed(1)}" cy="${sy.toFixed(1)}" r="2.2" fill="#ffffff"/>`;
    });

    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#fedd00" stroke="#009739" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#ffffff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'BRASIL · SAO_PAULO';

    return `
      
      <!-- Tropical Green Outer Ring & Bezel -->
      <circle cx="150" cy="150" r="147" fill="#007a2e" stroke="#fedd00" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      <!-- Canary Yellow Rhombus Diamond -->
      <polygon points="150,20 278,150 150,280 22,150" fill="#fedd00"/>

      <!-- Blue Celestial Globe in Center -->
      <circle cx="150" cy="150" r="58" fill="#012169" stroke="#ffffff" stroke-width="2.5"/>
      
      <!-- White Arch Banner ("ORDEM E PROGRESSO") -->
      <path d="M 98,140 A 54,54 0 0,1 202,140" fill="none" stroke="#ffffff" stroke-width="7"/>

      <!-- Celestial Stars on Globe -->
      <g class="globe-stars">${stars}</g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="82" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#012169" letter-spacing="2">ORDEM E PROGRESSO</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#012169" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Canary Yellow Sword with Blue Trim) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145,72 155,72 152,154 148,154" fill="#fedd00" stroke="#012169" stroke-width="1.5" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Canary Yellow Sword with Blue Trim) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145.5,38 154.5,38 152,155 148,155" fill="#fedd00" stroke="#012169" stroke-width="1.5" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Globe Blue Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#012169" stroke="#fedd00" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#012169" stroke="#fedd00" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#fedd00"/>
    
    `;
  }
};
