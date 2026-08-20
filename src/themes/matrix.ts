import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const matrixTheme: ClockThemeRenderer = {
  name: 'matrix',
  description: 'Phosphor green CRT terminal hacker clock with digital rain glyphs and scanline matrix',
  defaultColors: {
    face: '#030a04',
    dialBorder: '#00ff66',
    hourTicks: '#00ff66',
    minuteTicks: '#008f39',
    numbers: '#00ff66',
    hourHand: '#00ff66',
    minuteHand: '#a3e635',
    secondHand: '#22c55e',
    accent: '#00ff66',
    centerCap: '#00ff66',
    glow: 'rgba(0, 255, 102, 0.6)'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let ticks = '';
    const hexGlyphs = ['0xC', '0x1', '0x2', '0x3', '0x4', '0x5', '0x6', '0x7', '0x8', '0x9', '0xA', '0xB'];
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      const nx = 150 + 104 * Math.cos(rad);
      const ny = 150 + 104 * Math.sin(rad) + 4;
      ticks += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="bold" fill="${colors.hourTicks}" filter="url(#matrix-glow)">${hexGlyphs[i]}</text>`;
    }

    const labelText = options.label || 'ROOT@SYSTEM:~$';

    return `
      <!-- Terminal Frame -->
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="2.5" filter="url(#matrix-glow)"/>
      <circle cx="150" cy="150" r="140" fill="none" stroke="#003b14" stroke-width="1.5"/>

      <!-- Matrix Scanline Rings -->
      <circle cx="150" cy="150" r="120" fill="none" stroke="#00551e" stroke-width="0.8" stroke-dasharray="2 4"/>
      <circle cx="150" cy="150" r="75" fill="#021406" stroke="#00ff66" stroke-width="1" opacity="0.4" stroke-dasharray="4 8"/>

      <!-- Hex Numerals -->
      <g class="ticks">${ticks}</g>

      <!-- Terminal Text Readout -->
      <text x="150" y="95" text-anchor="middle" font-family="'Courier New', monospace" font-size="7.5" font-weight="bold" fill="#00ff66" filter="url(#matrix-glow)">${labelText}</text>
      <text x="150" y="205" text-anchor="middle" font-family="'Courier New', monospace" font-size="9.5" font-weight="bold" fill="#a3e635" filter="url(#matrix-glow)">[ TIME: ${time.timeString24} ]</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Pixelated Green Bar) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="147" y="75" width="6" height="85" fill="${colors.hourHand}" filter="url(#matrix-glow)"/>
        <circle cx="150" cy="80" r="2" fill="#ffffff"/>
      </g>
      
      <!-- Minute Hand -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="148" y="38" width="4" height="125" fill="${colors.minuteHand}" filter="url(#matrix-glow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Phosphor Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="24" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.4" filter="url(#matrix-glow)"/>
        <rect x="148" y="30" width="4" height="4" fill="#ffffff"/>
      </g>
      ` : ''}
      
      <!-- Center Terminal Hub -->
      <circle cx="150" cy="150" r="6" fill="${colors.face}" stroke="${colors.accent}" stroke-width="2" filter="url(#matrix-glow)"/>
      <circle cx="150" cy="150" r="2.5" fill="#ffffff"/>
    `;
  }
};
