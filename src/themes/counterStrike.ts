import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const counterStrikeTheme: ClockThemeRenderer = {
  name: 'counter-strike',
  description: 'Counter-Strike 2 tactical watch with hazard orange & dark slate dial, bomb defusal C4 timer subdial, and target reticle hands',
  defaultColors: {
    face: '#11161b',
    dialBorder: '#ff6600',
    hourTicks: '#ff6600',
    minuteTicks: '#e2e8f0',
    numbers: '#ff6600',
    hourHand: '#ff6600',
    minuteHand: '#ff6600',
    secondHand: '#e2e8f0',
    accent: '#ff6600',
    centerCap: '#ff6600',
    subdialBg: '#1b222a'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // CS2 Target Reticle / C4 Subdial
    const csReticle = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <circle cx="0" cy="0" r="32" fill="#1b222a" stroke="#ff6600" stroke-width="2"/>
        <!-- Target Crosshairs -->
        <line x1="-38" y1="0" x2="-18" y2="0" stroke="#ff6600" stroke-width="2"/>
        <line x1="18" y1="0" x2="38" y2="0" stroke="#ff6600" stroke-width="2"/>
        <line x1="0" y1="-38" x2="0" y2="-18" stroke="#ff6600" stroke-width="2"/>
        <line x1="0" y1="18" x2="0" y2="38" stroke="#ff6600" stroke-width="2"/>
        <text x="0" y="4" text-anchor="middle" font-family="'Courier New', monospace" font-size="10" font-weight="900" fill="#ff6600">CS2</text>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ff6600" stroke="#11161b" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#e2e8f0" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'COUNTER-STRIKE 2 · BOMB HAS BEEN PLANTED';

    return `
      
      <!-- Tactical Black Face & Hazard Orange Rim -->
      <circle cx="150" cy="150" r="147" fill="#11161b" stroke="#ff6600" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#e2e8f0" stroke-width="1.2"/>

      <!-- CS2 Reticle Emblem -->
      ${csReticle}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ff6600" letter-spacing="3">COUNTER-STRIKE 2</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#e2e8f0" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Hazard Orange Tapered Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ff6600" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#11161b" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Hazard Orange Tapered Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ff6600" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#11161b" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- White Second Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#e2e8f0" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#ff6600" stroke="#11161b" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Orange Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#11161b" stroke="#ff6600" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ff6600"/>
    
    `;
  }
};
