import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const eldenRingTheme: ClockThemeRenderer = {
  name: 'elden-ring',
  description: 'Elden Ring watch with dark Erdtree bark dial, intersecting golden Elden runes, and Site of Grace golden hands',
  defaultColors: {
    face: '#1a1410',
    dialBorder: '#f5d061',
    hourTicks: '#f5d061',
    minuteTicks: '#d4af37',
    numbers: '#f5d061',
    hourHand: '#f5d061',
    minuteHand: '#f5d061',
    secondHand: '#ffffff',
    accent: '#f5d061',
    centerCap: '#f5d061',
    subdialBg: '#2a2018'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Intersecting Elden Ring Runes (4 Overlapping Golden Circles & Arc)
    const eldenRingRunes = `
      <g transform="translate(150, 150) scale(1.1)" filter="url(#drop-shadow)">
        <!-- Overlapping Rings -->
        <circle cx="0" cy="-18" r="28" fill="none" stroke="#f5d061" stroke-width="1.8"/>
        <circle cx="-15" cy="10" r="28" fill="none" stroke="#f5d061" stroke-width="1.8"/>
        <circle cx="15" cy="10" r="28" fill="none" stroke="#f5d061" stroke-width="1.8"/>
        <circle cx="0" cy="22" r="28" fill="none" stroke="#f5d061" stroke-width="1.8"/>
        <!-- Central Line -->
        <line x1="0" y1="-50" x2="0" y2="50" stroke="#f5d061" stroke-width="2"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#f5d061" stroke="#1a1410" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#d4af37" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ELDEN RING · TARNISHED';

    return `
      
      <!-- Dark Erdtree Bark Face & Elden Gold Rim -->
      <circle cx="150" cy="150" r="147" fill="#1a1410" stroke="#f5d061" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#d4af37" stroke-width="1.2"/>

      <!-- Intersecting Elden Runes Emblem -->
      ${eldenRingRunes}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#f5d061" letter-spacing="3">ELDEN RING</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Elden Gold Greatsword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#f5d061" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#1a1410" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Elden Gold Greatsword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#f5d061" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#1a1410" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Site of Grace Golden Ray Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#f5d061" stroke="#1a1410" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#1a1410" stroke="#f5d061" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#f5d061"/>
    
    `;
  }
};
