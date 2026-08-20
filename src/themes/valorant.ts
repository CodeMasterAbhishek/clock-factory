import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const valorantTheme: ClockThemeRenderer = {
  name: 'valorant',
  description: 'VALORANT tactical esports watch with Radianite red & dark charcoal dial, V-emblem, and target reticle crosshairs',
  defaultColors: {
    face: '#0f1923',
    dialBorder: '#ff4655',
    hourTicks: '#ff4655',
    minuteTicks: '#ece8e1',
    numbers: '#ff4655',
    hourHand: '#ff4655',
    minuteHand: '#ff4655',
    secondHand: '#ece8e1',
    accent: '#ff4655',
    centerCap: '#ff4655',
    subdialBg: '#1b2733'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // VALORANT V-Emblem & Crosshair Reticle
    const valorantV = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <polygon points="-22,-20 -8,-20 12,22 -2,22" fill="#ff4655"/>
        <polygon points="6,-20 22,-20 22,-4 6,-4" fill="#ece8e1"/>
        <!-- Crosshair Circle -->
        <circle cx="0" cy="0" r="42" fill="none" stroke="#ff4655" stroke-width="1.2" stroke-dasharray="8 6" opacity="0.6"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ff4655" stroke="#0f1923" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ece8e1" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'VALORANT · RIOT GAMES';

    return `
      
      <!-- Dark Charcoal Face & Radianite Red Rim -->
      <circle cx="150" cy="150" r="147" fill="#0f1923" stroke="#ff4655" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ece8e1" stroke-width="1.2"/>

      <!-- VALORANT V Emblem & Crosshairs -->
      ${valorantV}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ff4655" letter-spacing="3">VALORANT</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ece8e1" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Radianite Red Tapered Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ff4655" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#ece8e1" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Radianite Red Tapered Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ff4655" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ece8e1" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Crisp Off-White Tactical Second Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ece8e1" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#ff4655" stroke="#0f1923" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0f1923" stroke="#ff4655" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ff4655"/>
    
    `;
  }
};
