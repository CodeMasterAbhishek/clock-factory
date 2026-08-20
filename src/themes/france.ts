import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const franceTheme: ClockThemeRenderer = {
  name: 'france',
  description: 'France Haute Horlogerie watch with French Tricolore ribbon, Eiffel Tower crest, and bold French motto typography',
  defaultColors: {
    face: '#001a3d',
    dialBorder: '#ed2939',
    hourTicks: '#ffffff',
    minuteTicks: '#ed2939',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ed2939',
    accent: '#ffffff',
    centerCap: '#ed2939',
    subdialBg: '#002654'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Vibrant Tricolore Center Ribbon
    const tricoloreRibbon = `
      <g opacity="0.9">
        <rect x="110" y="30" width="26" height="240" fill="#002654" rx="2"/>
        <rect x="137" y="30" width="26" height="240" fill="#ffffff" rx="2"/>
        <rect x="164" y="30" width="26" height="240" fill="#ed2939" rx="2"/>
      </g>
    `;

    // Hour Markers (Bright Crisp White Rectangles)
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ffffff" stroke="#001a3d" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#ed2939" stroke-width="1.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'FRANCE · EUROPE/PARIS';

    return `
      
      <!-- Bleu de France Outer Bezel & Silver Ring -->
      <circle cx="150" cy="150" r="147" fill="#002654" stroke="#ed2939" stroke-width="3.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ffffff" stroke-width="2"/>

      <!-- Tricolore Center Ribbon -->
      <g class="tricolore-ribbon">${tricoloreRibbon}</g>
      <circle cx="150" cy="150" r="138" fill="none" stroke="#ffffff" stroke-width="1.5"/>

      <!-- Center Inner Subdial Cutout -->
      <circle cx="150" cy="150" r="66" fill="#001a3d" stroke="#ffffff" stroke-width="2" opacity="0.95"/>

      <!-- Detailed Gold & White Eiffel Tower Emblem at 12 o'clock -->
      <g transform="translate(150, 52) scale(0.85)" filter="url(#drop-shadow)">
        <polygon points="0,-18 -10,16 10,16" fill="none" stroke="#ffffff" stroke-width="2.5"/>
        <polygon points="0,-12 -6,10 6,10" fill="#ed2939" opacity="0.8"/>
        <line x1="-7" y1="2" x2="7" y2="2" stroke="#ffffff" stroke-width="2"/>
        <circle cx="0" cy="-18" r="2.5" fill="#ffffff"/>
      </g>

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Motto & Label Inscriptions -->
      <text x="150" y="108" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="900" fill="#ffffff" stroke="#001a3d" stroke-width="0.8" letter-spacing="2">LIBERTÉ · ÉGALITÉ · FRATERNITÉ</text>
      <text x="150" y="196" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ed2939" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Crisp White Breguet Moon Hand) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <line x1="150" y1="75" x2="150" y2="150" stroke="#ffffff" stroke-width="3.5" filter="url(#drop-shadow)"/>
        <circle cx="150" cy="92" r="7.5" fill="#001a3d" stroke="#ffffff" stroke-width="2.5"/>
      </g>
      
      <!-- Minute Hand (Crisp White Breguet Moon Hand) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <line x1="150" y1="42" x2="150" y2="150" stroke="#ffffff" stroke-width="2.8" filter="url(#drop-shadow)"/>
        <circle cx="150" cy="60" r="6.5" fill="#001a3d" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- French Red Second Needle with White Lume Ring -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <circle cx="150" cy="55" r="4.5" fill="#ed2939" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#002654" stroke="#ffffff" stroke-width="2"/>
      <circle cx="150" cy="150" r="3.5" fill="#ed2939"/>
    
    `;
  }
};
