import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const usaTheme: ClockThemeRenderer = {
  name: 'usa',
  description: 'United States Freedom watch with Star-Spangled 12-star chapter ring, patriotic tricolor shield, and gold sword hands',
  defaultColors: {
    face: '#0a1931',
    dialBorder: '#b22234',
    hourTicks: '#ffffff',
    minuteTicks: '#f59e0b',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#b22234',
    accent: '#f59e0b',
    centerCap: '#f59e0b',
    subdialBg: '#1e293b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Glowing Gold & White Stars for Hour Markers
    let starMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      const sx = 150 + 106 * Math.cos(rad);
      const sy = 150 + 106 * Math.sin(rad);
      
      starMarkers += `
        <g transform="translate(${sx.toFixed(1)}, ${sy.toFixed(1)}) scale(0.85)">
          <polygon points="0,-10 3,-3 10,-3 4,1 7,8 0,4 -7,8 -4,1 -10,-3 -3,-3" fill="#ffffff" stroke="#f59e0b" stroke-width="1.2" filter="url(#drop-shadow)"/>
        </g>
      `;
    }

    // Minute Ticks around outer ring
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      if (i % 5 !== 0 && options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#f59e0b" stroke-width="1.4" opacity="0.9" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'USA · AMERICA/NEW_YORK';

    return `
      
      <!-- Old Glory Red Bezel & White Ring -->
      <circle cx="150" cy="150" r="147" fill="#b22234" stroke="#ffffff" stroke-width="2"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#f59e0b" stroke-width="2"/>

      <!-- Outer Star-Spangled White Ring -->
      <circle cx="150" cy="150" r="124" fill="none" stroke="#ffffff" stroke-width="1.5" stroke-dasharray="2 6"/>

      <!-- Center Patriotic Shield / Subdial -->
      <circle cx="150" cy="150" r="68" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
      
      <!-- Red and White Vertical Shield Stripes in Subdial -->
      <g stroke="#b22234" stroke-width="4">
        <line x1="110" y1="130" x2="110" y2="175"/>
        <line x1="120" y1="125" x2="120" y2="178"/>
        <line x1="130" y1="122" x2="130" y2="180"/>
        <line x1="140" y1="120" x2="140" y2="180"/>
        <line x1="150" y1="120" x2="150" y2="180"/>
        <line x1="160" y1="120" x2="160" y2="180"/>
        <line x1="170" y1="122" x2="170" y2="180"/>
        <line x1="180" y1="125" x2="180" y2="178"/>
        <line x1="190" y1="130" x2="190" y2="175"/>
      </g>
      <circle cx="150" cy="150" r="68" fill="none" stroke="#ffffff" stroke-width="1.5"/>

      <!-- Star Markers & Ticks -->
      <g class="star-markers">${starMarkers}</g>
      <g class="ticks">${ticks}</g>

      <!-- High-Legibility Slogan & Label Inscriptions -->
      <text x="150" y="74" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="900" fill="#ffffff" stroke="#0a1931" stroke-width="0.5" letter-spacing="2.5">IN GOD WE TRUST</text>
      <text x="150" y="90" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="800" fill="#f59e0b" letter-spacing="2">EST. 1776 · FREEDOM</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Polished White Sword with Gold Border) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 153,154 147,154" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#b22234" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Polished White Sword with Gold Border) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152.5,155 147.5,155" fill="#ffffff" stroke="#f59e0b" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#b22234" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Old Glory Red Second Hand with Gold Star Counterweight -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <g transform="translate(150, 168) scale(0.6)">
          <polygon points="0,-10 3,-3 10,-3 4,1 7,8 0,4 -7,8 -4,1 -10,-3 -3,-3" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
        </g>
      </g>
      ` : ''}
      
      <!-- Center Gold Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#0a1931" stroke="#f59e0b" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#f59e0b"/>
    
    `;
  }
};
