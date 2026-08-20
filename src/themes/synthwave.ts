import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const synthwaveTheme: ClockThemeRenderer = {
  name: 'synthwave',
  description: '80s Retro Outrun Synthwave clock with wireframe horizon grid, segmented sunset, and neon magenta glow',
  defaultColors: {
    face: '#130924',
    dialBorder: '#ec4899',
    hourTicks: '#ec4899',
    minuteTicks: '#8b5cf6',
    numbers: '#38bdf8',
    hourHand: '#ec4899',
    minuteHand: '#38bdf8',
    secondHand: '#facc15',
    accent: '#facc15',
    centerCap: '#ec4899',
    glow: 'rgba(236, 72, 153, 0.5)'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<polygon points="148,22 152,22 150,34" fill="${colors.hourTicks}" filter="url(#pink-glow)" transform="rotate(${angle} 150 150)"/>`;
    }

    const labelText = options.label || 'OUTRUN // 1984';

    return `
      
      <!-- Deep Purple Outer Ring -->
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="3" filter="url(#pink-glow)"/>
      <circle cx="150" cy="150" r="139" fill="url(#synth-bg)"/>

      <!-- Segmented Retrowave Sunset (Top Half) -->
      <g class="retrowave-sun">
        <circle cx="150" cy="140" r="45" fill="url(#sun-gradient)" filter="url(#pink-glow)"/>
        <!-- Horizontal Sunset Blind Bars -->
        <rect x="100" y="125" width="100" height="2.5" fill="#130924"/>
        <rect x="100" y="132" width="100" height="3.5" fill="#130924"/>
        <rect x="100" y="140" width="100" height="4.5" fill="#130924"/>
      </g>

      <!-- Perspective Horizon Grid (Bottom Half) -->
      <line x1="30" y1="150" x2="270" y2="150" stroke="#38bdf8" stroke-width="1.8" filter="url(#neon-glow)"/>
      <line x1="150" y1="150" x2="60" y2="280" stroke="#8b5cf6" stroke-width="1" opacity="0.7"/>
      <line x1="150" y1="150" x2="105" y2="285" stroke="#8b5cf6" stroke-width="1" opacity="0.7"/>
      <line x1="150" y1="150" x2="150" y2="288" stroke="#8b5cf6" stroke-width="1" opacity="0.7"/>
      <line x1="150" y1="150" x2="195" y2="285" stroke="#8b5cf6" stroke-width="1" opacity="0.7"/>
      <line x1="150" y1="150" x2="240" y2="280" stroke="#8b5cf6" stroke-width="1" opacity="0.7"/>
      <!-- Grid Horizontal Lines -->
      <line x1="60" y1="170" x2="240" y2="170" stroke="#38bdf8" stroke-width="0.8" opacity="0.5"/>
      <line x1="45" y1="195" x2="255" y2="195" stroke="#38bdf8" stroke-width="0.8" opacity="0.5"/>
      <line x1="35" y1="225" x2="265" y2="225" stroke="#38bdf8" stroke-width="0.8" opacity="0.5"/>

      <!-- Ticks -->
      <g class="ticks">${ticks}</g>
      
      <!-- Outrun Text -->
      <text x="150" y="80" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-size="10" font-weight="bold" fill="#facc15" letter-spacing="2" filter="url(#pink-glow)">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Neon Pink) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146,75 154,75 152,160 148,160" fill="${colors.hourHand}" filter="url(#pink-glow)"/>
        <line x1="150" y1="80" x2="150" y2="150" stroke="#ffffff" stroke-width="1.5"/>
      </g>
      
      <!-- Minute Hand (Neon Cyan) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="147,42 153,42 152,160 148,160" fill="${colors.minuteHand}" filter="url(#neon-glow)"/>
        <line x1="150" y1="48" x2="150" y2="150" stroke="#ffffff" stroke-width="1.5"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand (Laser Yellow) -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="25" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.8"/>
        <polygon points="150,22 146,34 154,34" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Hub -->
      <circle cx="150" cy="150" r="7" fill="#ffffff" filter="url(#pink-glow)"/>
      <circle cx="150" cy="150" r="3.5" fill="${colors.face}"/>
    
    `;
  }
};
