import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cyberpunk2077Theme: ClockThemeRenderer = {
  name: 'cyberpunk2077',
  description: 'Cyberpunk 2077 Night City watch with electric yellow dial, HUD target reticle, and Samurai cyber-skull emblem',
  defaultColors: {
    face: '#fcee09',
    dialBorder: '#0d0e12',
    hourTicks: '#0d0e12',
    minuteTicks: '#00f0ff',
    numbers: '#0d0e12',
    hourHand: '#0d0e12',
    minuteHand: '#0d0e12',
    secondHand: '#ff0055',
    accent: '#00f0ff',
    centerCap: '#0d0e12',
    subdialBg: '#181a20'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Cyberpunk 2077 Night City Glitch HUD
    const cyberHud = `
      <g filter="url(#drop-shadow)">
        <circle cx="150" cy="150" r="65" fill="#0d0e12" stroke="#00f0ff" stroke-width="1.8"/>
        <!-- Cyber Skull Emblem -->
        <g transform="translate(150, 150) scale(0.9)">
          <path d="M -15,-18 L 15,-18 L 22,-4 L 14,16 L -14,16 L -22,-4 Z" fill="#fcee09"/>
          <circle cx="-7" cy="-4" r="4" fill="#0d0e12"/>
          <circle cx="7" cy="-4" r="4" fill="#0d0e12"/>
          <rect x="-8" y="6" width="16" height="4" fill="#0d0e12"/>
        </g>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="20" width="7" height="14" rx="1" fill="#0d0e12" stroke="#00f0ff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#ff0055" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'CYBERPUNK · NIGHT CITY 2077';

    return `
      
      <!-- Electric Yellow Face & Charcoal Bezel -->
      <circle cx="150" cy="150" r="147" fill="#fcee09" stroke="#0d0e12" stroke-width="5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#00f0ff" stroke-width="1.2"/>

      <!-- Inner Cyber HUD & Samurai Skull -->
      ${cyberHud}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Courier New', monospace" font-size="12" font-weight="900" fill="#0d0e12" stroke="#fcee09" stroke-width="0.5" letter-spacing="2.5">CYBERPUNK 2077</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#0d0e12" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Angular Charcoal Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#0d0e12" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#00f0ff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Angular Charcoal Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#0d0e12" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#00f0ff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Neon Pink Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ff0055" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#00f0ff" stroke="#0d0e12" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0d0e12" stroke="#00f0ff" stroke-width="2"/>
      <circle cx="150" cy="150" r="3.5" fill="#fcee09"/>
    
    `;
  }
};
