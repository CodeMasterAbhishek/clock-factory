import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const omega_speedmasterTheme: ClockThemeRenderer = {
  name: 'Omega Speedmaster',
  description: 'The Moonwatch, iconic chronograph with a black dial and tachymeter bezel',
  defaultColors: {
    face: '#111111', // Matte black
    dialBorder: '#c0c0c0',
    hourTicks: '#ffffff', // Lume
    minuteTicks: '#ffffff',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ffffff',
    accent: '#ffffff',
    centerCap: '#c0c0c0',
    subdialBg: '#181818' // Slightly different black
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let bezelTicks = '';
    const tachymeterScale = [
      { unit: 500, pos: 7.2 }, { unit: 400, pos: 9 }, { unit: 300, pos: 12 }, { unit: 250, pos: 14.4 },
      { unit: 200, pos: 18 }, { unit: 180, pos: 20 }, { unit: 160, pos: 22.5 }, { unit: 140, pos: 25.7 }, 
      { unit: 120, pos: 30 }, { unit: 110, pos: 32.7 }, { unit: 100, pos: 36 }, { unit: 90, pos: 40 }, 
      { unit: 80, pos: 45 }, { unit: 75, pos: 48 }, { unit: 70, pos: 51.4 }, { unit: 65, pos: 55.3 }, 
      { unit: 60, pos: 60 }
    ];

    for (let t of tachymeterScale) {
      const angle = t.pos * 6;
      const rad = (angle - 90) * (Math.PI / 180);
      const x = 150 + 138 * Math.cos(rad);
      const y = 150 + 138 * Math.sin(rad) + 3;
      bezelTicks += `<text x="${x}" y="${y}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="7" fill="#ffffff" transform="rotate(${angle} ${x} ${y - 3})">${t.unit}</text>`;
      const tickX = 150 + 130 * Math.cos(rad);
      const tickY = 150 + 130 * Math.sin(rad);
      const tickX2 = 150 + 146 * Math.cos(rad);
      const tickY2 = 150 + 146 * Math.sin(rad);
      bezelTicks += `<line x1="${tickX}" y1="${tickY}" x2="${tickX2}" y2="${tickY2}" stroke="#ffffff" stroke-width="1" />`;
    }

    let dialMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i === 0) {
        dialMarkers += `<circle cx="150" cy="38" r="2" fill="${colors.hourTicks}"/>`;
        dialMarkers += `<rect x="146" y="42" width="3" height="15" fill="${colors.hourTicks}"/>`;
        dialMarkers += `<rect x="151" y="42" width="3" height="15" fill="${colors.hourTicks}"/>`;
      } else {
        dialMarkers += `<rect x="148" y="40" width="4" height="15" fill="${colors.hourTicks}" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let minuteTicks = '';
    for (let i = 0; i < 300; i++) {
      const angle = i * (360/300);
      const isMinute = i % 5 === 0;
      const tickLength = isMinute ? 6 : 3;
      minuteTicks += `<line x1="150" y1="30" x2="150" y2="${30 + tickLength}" stroke="${colors.minuteTicks}" stroke-width="${isMinute ? 1.5 : 0.5}" transform="rotate(${angle} 150 150)"/>`;
    }

    // Subdials
    const subdial = (cx: number, cy: number, max: number, type: string) => {
      let sd = `<circle cx="${cx}" cy="${cy}" r="26" fill="${colors.subdialBg}" stroke="#333" stroke-width="1"/>`;
      // Concentric circles
      sd += `<circle cx="${cx}" cy="${cy}" r="22" fill="none" stroke="#222" stroke-width="0.5"/>`;
      sd += `<circle cx="${cx}" cy="${cy}" r="18" fill="none" stroke="#222" stroke-width="0.5"/>`;
      
      for(let i=0; i<12; i++) {
        const angle = i * 30;
        const tickLength = (i % 3 === 0) ? 6 : 3;
        sd += `<line x1="${cx}" y1="${cy - 24}" x2="${cx}" y2="${cy - 24 + tickLength}" stroke="#fff" stroke-width="1" transform="rotate(${angle} ${cx} ${cy})"/>`;
      }
      return sd;
    };

    return `
      <!-- Bezel -->
      <circle cx="150" cy="150" r="146" fill="#000000" stroke="${colors.dialBorder}" stroke-width="6"/>
      <text x="150" y="16" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="6" fill="#ffffff">TACHYMÈTRE</text>
      ${bezelTicks}

      <!-- Dial -->
      <circle cx="150" cy="150" r="126" fill="${colors.face}"/>
      
      <!-- Subdials (Recessed) -->
      ${subdial(95, 150, 60, 'sec')} <!-- Small seconds at 9 -->
      ${subdial(205, 150, 30, 'min')} <!-- 30 Min counter at 3 -->
      ${subdial(150, 205, 12, 'hour')} <!-- 12 Hour counter at 6 -->

      <!-- Minute Ticks -->
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Hour Markers -->
      <g class="hour-markers">${dialMarkers}</g>
      
      <!-- Logo and Text -->
      <!-- Omega symbol approximation -->
      <path d="M 144 80 A 6 6 0 1 1 156 80 L 158 80 L 158 82 L 156 82 A 4 4 0 0 0 144 82 L 142 82 L 142 80 Z" fill="#ffffff" />
      <text x="150" y="94" text-anchor="middle" font-family="Arial, sans-serif" font-size="9" font-weight="bold" fill="#ffffff" letter-spacing="1">OMEGA</text>
      <text x="150" y="103" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#ffffff">Speedmaster</text>
      <text x="150" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#ffffff">PROFESSIONAL</text>
      <text x="150" y="245" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#ffffff">SWISS MADE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    
    return `
      <!-- Subdial Hands -->
      <g transform="rotate(${time.secondAngle} 95 150)">
        <polygon points="95,153 93,130 97,130" fill="#ffffff"/>
      </g>
      <g transform="rotate(${time.minuteAngle} 205 150)">
        <polygon points="205,153 203,130 207,130" fill="#ffffff"/>
      </g>
      <g transform="rotate(${time.hourAngle * 2} 150 205)">
        <polygon points="150,208 148,185 152,185" fill="#ffffff"/>
      </g>

      <!-- Hour Hand (Baton with luminous insert) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="150,85 146,95 146,155 154,155 154,95" fill="#ffffff"/>
        <rect x="148" y="97" width="4" height="40" fill="#111111"/>
      </g>
      
      <!-- Minute Hand (Baton with luminous insert) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="150,45 146,55 146,155 154,155 154,55" fill="#ffffff"/>
        <rect x="148" y="57" width="4" height="80" fill="#111111"/>
      </g>
      
      ${showSeconds ? `
      <!-- Chronograph Second Hand (Spear with luminous dot) -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="180" x2="150" y2="35" stroke="#ffffff" stroke-width="1.5"/>
        <polygon points="150,30 148,45 152,45" fill="#ffffff"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="4" fill="#000000" />
      <circle cx="150" cy="150" r="2" fill="#c0c0c0" />
    `;
  }
};
