import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const robloxTheme: ClockThemeRenderer = {
  name: 'roblox',
  description: 'Roblox studio watch with iconic tilted red square emblem, silver block framing, and studio grid texture',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#e2231a',
    hourTicks: '#e2231a',
    minuteTicks: '#64748b',
    numbers: '#e2231a',
    hourHand: '#e2231a',
    minuteHand: '#e2231a',
    secondHand: '#64748b',
    accent: '#e2231a',
    centerCap: '#e2231a',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Tilted Red Roblox Square Emblem at Center
    const robloxSquare = `
      <g transform="translate(150, 150) rotate(-15) scale(1.15)" filter="url(#drop-shadow)">
        <rect x="-26" y="-26" width="52" height="52" fill="#e2231a" rx="4"/>
        <rect x="-10" y="-10" width="20" height="20" fill="#ffffff" rx="2"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146" y="20" width="8" height="14" rx="2" fill="#e2231a" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#64748b" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ROBLOX · POWERING IMAGINATION';

    return `
      
      <!-- Pure White Face & Roblox Red Bezel -->
      <circle cx="150" cy="150" r="147" fill="#ffffff" stroke="#e2231a" stroke-width="5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#64748b" stroke-width="1.2"/>

      <!-- Roblox Emblem -->
      ${robloxSquare}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="900" fill="#e2231a" letter-spacing="3">ROBLOX</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#64748b" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Roblox Red Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#e2231a" stroke="#ffffff" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Roblox Red Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#e2231a" stroke="#ffffff" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Slate Gray Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#64748b" stroke-width="2.2"/>
        <rect x="146" y="50" width="8" height="8" fill="#e2231a"/>
      </g>
      ` : ''}
      
      <!-- Center Red Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#e2231a" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
