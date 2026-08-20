import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const gshockTheme: ClockThemeRenderer = {
  name: 'gshock',
  description: 'Tactical stealth field watch with armored octagonal bezel, corner hex bolts, and stencil typography',
  defaultColors: {
    face: '#0d1117',
    dialBorder: '#21262d',
    hourTicks: '#f0883e',
    minuteTicks: '#30363d',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#f0883e',
    accent: '#f0883e',
    centerCap: '#f0883e',
    subdialBg: '#161b22'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Armored bezel hex bolts at 8 cardinal positions
    let hexBolts = '';
    const boltAngles = [22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5];
    boltAngles.forEach(angle => {
      const rad = (angle - 90) * (Math.PI / 180);
      const bx = 150 + 138 * Math.cos(rad);
      const by = 150 + 138 * Math.sin(rad);
      hexBolts += `
        <circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="3" fill="#30363d" stroke="#8b949e" stroke-width="0.8"/>
        <line x1="${(bx - 1.8).toFixed(1)}" y1="${by.toFixed(1)}" x2="${(bx + 1.8).toFixed(1)}" y2="${by.toFixed(1)}" stroke="#161b22" stroke-width="0.8"/>
      `;
    });

    // Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<line x1="150" y1="26" x2="150" y2="38" stroke="${colors.hourTicks}" stroke-width="2.5" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="28" x2="150" y2="34" stroke="${colors.minuteTicks}" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    // Bold Stencil Numerals 12, 3, 6, 9
    let numerals = '';
    if (options.showNumbers !== false) {
      numerals = `
        <text x="150" y="62" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#ffffff" letter-spacing="1">12</text>
        <text x="242" y="157" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#ffffff">3</text>
        <text x="150" y="250" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#ffffff">6</text>
        <text x="58" y="157" text-anchor="middle" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#ffffff">9</text>
      `;
    }

    const labelText = options.label || 'WR 20BAR · SHOCK RESIST';

    return `
      
      <!-- Outer Tactical Octagonal Bezel -->
      <polygon points="100,6 200,6 294,100 294,200 200,294 100,294 6,200 6,100" fill="#161b22" stroke="#30363d" stroke-width="4"/>
      <polygon points="104,12 196,12 288,104 288,196 196,288 104,288 12,196 12,104" fill="#0d1117" stroke="#f0883e" stroke-width="1.5" opacity="0.8"/>

      <!-- Corner Hex Bolts -->
      <g class="hex-bolts">${hexBolts}</g>

      <!-- Dial Face Outer Ring -->
      <circle cx="150" cy="150" r="126" fill="#090d12" stroke="#30363d" stroke-width="2"/>

      <!-- Crosshairs -->
      <line x1="150" y1="40" x2="150" y2="260" stroke="#21262d" stroke-width="1" stroke-dasharray="4 4"/>
      <line x1="40" y1="150" x2="260" y2="150" stroke="#21262d" stroke-width="1" stroke-dasharray="4 4"/>

      <!-- Tactical Sub-Dial Ring -->
      <circle cx="150" cy="150" r="75" fill="none" stroke="#21262d" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="72" fill="none" stroke="#f0883e" stroke-width="0.8" stroke-dasharray="2 6"/>

      <!-- Ticks & Numerals -->
      <g class="ticks">${ticks}</g>
      <g class="numerals">${numerals}</g>

      <!-- Dial Inscriptions -->
      <text x="150" y="105" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="800" fill="#f0883e" letter-spacing="2">TACTICAL SPECS</text>
      <text x="150" y="195" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="6.5" font-weight="700" fill="#8b949e" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Tactical Skeleton Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,80 156,80 154,154 146,154" fill="#161b22" stroke="#ffffff" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <polygon points="146.5,84 153.5,84 152,120 148,120" fill="#f0883e" opacity="0.9"/>
      </g>
      
      <!-- Minute Hand (Tactical Long Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,42 155,42 153.5,155 146.5,155" fill="#161b22" stroke="#ffffff" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <polygon points="147,46 153,46 151.5,100 148.5,100" fill="#f0883e" opacity="0.9"/>
      </g>
      
      ${showSeconds ? `
      <!-- Tactical Orange Second Needle with Counter-Balance Arrow -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="24" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="1.8"/>
        <polygon points="150,20 146,30 154,30" fill="${colors.secondHand}"/>
        <rect x="147.5" y="165" width="5" height="12" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7" fill="#161b22" stroke="#f0883e" stroke-width="2"/>
      <circle cx="150" cy="150" r="3" fill="#ffffff"/>
    
    `;
  }
};
