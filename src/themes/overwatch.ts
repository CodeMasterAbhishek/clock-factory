import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const overwatchTheme: ClockThemeRenderer = {
  name: 'overwatch',
  description: 'Overwatch futuristic esports watch with metallic orange & slate dial, and iconic Overwatch logo emblem',
  defaultColors: {
    face: '#1e293b',
    dialBorder: '#f99e1a',
    hourTicks: '#f99e1a',
    minuteTicks: '#ffffff',
    numbers: '#f99e1a',
    hourHand: '#f99e1a',
    minuteHand: '#f99e1a',
    secondHand: '#ffffff',
    accent: '#f99e1a',
    centerCap: '#f99e1a',
    subdialBg: '#0f172a'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Overwatch Logo Emblem at Center
    const overwatchLogo = `
      <g transform="translate(150, 150) scale(1.2)" filter="url(#drop-shadow)">
        <circle cx="0" cy="0" r="32" fill="none" stroke="#f99e1a" stroke-width="6"/>
        <circle cx="0" cy="0" r="22" fill="none" stroke="#ffffff" stroke-width="4"/>
        <!-- Top Split Arcs -->
        <polygon points="-8,-28 0,-10 8,-28" fill="#1e293b"/>
        <line x1="-12" y1="-8" x2="12" y2="-8" stroke="#1e293b" stroke-width="4"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#f99e1a" stroke="#1e293b" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ffffff" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'OVERWATCH · HEROES NEVER DIE';

    return `
      
      <!-- Metallic Slate Face & Orange Rim -->
      <circle cx="150" cy="150" r="147" fill="#1e293b" stroke="#f99e1a" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ffffff" stroke-width="1.2"/>

      <!-- Overwatch Logo Emblem -->
      ${overwatchLogo}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#f99e1a" letter-spacing="3">OVERWATCH</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Metallic Orange Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#f99e1a" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#1e293b" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Metallic Orange Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#f99e1a" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#1e293b" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Crisp White Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ffffff" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#f99e1a" stroke="#1e293b" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#1e293b" stroke="#f99e1a" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#f99e1a"/>
    
    `;
  }
};
