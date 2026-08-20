import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const canadaTheme: ClockThemeRenderer = {
  name: 'canada',
  description: 'Canada Maple Leaf watch with iconic 11-pointed red maple leaf emblem, crimson side bars, and snow white dial',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#ff0000',
    hourTicks: '#ff0000',
    minuteTicks: '#94a3b8',
    numbers: '#111827',
    hourHand: '#111827',
    minuteHand: '#111827',
    secondHand: '#ff0000',
    accent: '#ff0000',
    centerCap: '#ff0000',
    subdialBg: '#fef2f2'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Iconic 11-Pointed Maple Leaf SVG Polygon
    const mapleLeaf = `
      <g transform="translate(150, 150) scale(1.15)">
        <path d="M 0,-45 L 6,-25 L 14,-28 L 10,-18 L 22,-18 L 16,-10 L 26,-2 L 20,4 L 32,8 L 22,14 L 26,24 L 14,20 L 16,30 L 4,26 L 3,42 L -3,42 L -4,26 L -16,30 L -14,20 L -26,24 L -22,14 L -32,8 L -20,4 L -26,-2 L -16,-10 L -22,-18 L -10,-18 L -14,-28 L -6,-25 Z" fill="#ff0000" opacity="0.9"/>
      </g>
    `;

    // Red Side Stripes (Canadian Flag Layout: Red - White - Red)
    const sideStripes = `
      <path d="M 12,150 A 138,138 0 0,1 70,30 L 70,270 A 138,138 0 0,1 12,150 Z" fill="#ff0000" opacity="0.18"/>
      <path d="M 288,150 A 138,138 0 0,1 230,270 L 230,30 A 138,138 0 0,1 288,150 Z" fill="#ff0000" opacity="0.18"/>
    `;

    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ff0000" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#64748b" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'CANADA · AMERICA/TORONTO';

    return `
      
      <!-- Crimson Bezel & Snow White Dial -->
      <circle cx="150" cy="150" r="147" fill="#ffffff" stroke="#ff0000" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}"/>

      <!-- Side Red Bars -->
      <g class="side-stripes">${sideStripes}</g>

      <!-- Central Red Maple Leaf Emblem -->
      <g class="maple-leaf">${mapleLeaf}</g>

      <!-- Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#ff0000" stroke="#ffffff" stroke-width="0.5" letter-spacing="2.5">GREAT WHITE NORTH</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#111827" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Black Tapered Sword with White Center) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="145.5,72 154.5,72 151.5,155 148.5,155" fill="#111827" filter="url(#drop-shadow)"/>
        <line x1="150" y1="78" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Black Tapered Sword with White Center) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146,38 154,38 151.5,155 148.5,155" fill="#111827" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Maple Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#ff0000" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#ff0000" stroke="#ffffff" stroke-width="1.8"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
