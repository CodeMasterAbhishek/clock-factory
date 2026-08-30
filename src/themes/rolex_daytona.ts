import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const rolex_daytonaTheme: ClockThemeRenderer = {
  name: 'Rolex Daytona',
  description: 'Legendary chronograph with a tachymetric scale bezel and three sub-dials',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#c0c0c0',
    hourTicks: '#ffffff',
    minuteTicks: '#333333',
    numbers: '#000000',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#000000',
    accent: '#ff0000', // Daytona red text
    centerCap: '#c0c0c0',
    subdialBg: '#f0f0f0'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let bezelTicks = '';
    const tachymeterScale = [
      { unit: 400, pos: 9 }, { unit: 300, pos: 12 }, { unit: 240, pos: 15 }, { unit: 200, pos: 18 },
      { unit: 160, pos: 22.5 }, { unit: 140, pos: 25.7 }, { unit: 120, pos: 30 }, { unit: 110, pos: 32.7 },
      { unit: 100, pos: 36 }, { unit: 90, pos: 40 }, { unit: 80, pos: 45 }, { unit: 75, pos: 48 },
      { unit: 70, pos: 51.4 }, { unit: 65, pos: 55.3 }, { unit: 60, pos: 60 }
    ];

    for (let t of tachymeterScale) {
      const angle = t.pos * 6;
      const rad = (angle - 90) * (Math.PI / 180);
      const x = 150 + 138 * Math.cos(rad);
      const y = 150 + 138 * Math.sin(rad) + 3;
      bezelTicks += `<text x="${x}" y="${y}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="8" fill="#c0c0c0" transform="rotate(${angle} ${x} ${y - 3})">${t.unit}</text>`;
      const tickX = 150 + 130 * Math.cos(rad);
      const tickY = 150 + 130 * Math.sin(rad);
      const tickX2 = 150 + 146 * Math.cos(rad);
      const tickY2 = 150 + 146 * Math.sin(rad);
      bezelTicks += `<line x1="${tickX}" y1="${tickY}" x2="${tickX2}" y2="${tickY2}" stroke="#c0c0c0" stroke-width="1" />`;
    }

    let dialMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i === 0) {
        dialMarkers += `<polygon points="150,30 144,45 156,45" fill="#c0c0c0" stroke="#000" stroke-width="0.5"/>`; // Rolex Crown approximation placeholder, or just a marker
      } else {
        dialMarkers += `<rect x="146" y="32" width="8" height="15" fill="${colors.hourTicks}" stroke="#000000" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let minuteTicks = '';
    for (let i = 0; i < 300; i++) { // 1/5th second ticks
      const angle = i * (360/300);
      const isMinute = i % 5 === 0;
      const tickLength = isMinute ? 6 : 3;
      minuteTicks += `<line x1="150" y1="26" x2="150" y2="${26 + tickLength}" stroke="${colors.minuteTicks}" stroke-width="${isMinute ? 1.5 : 0.5}" transform="rotate(${angle} 150 150)"/>`;
    }

    // Subdials
    const subdial = (cx: number, cy: number, max: number) => {
      let sd = `<circle cx="${cx}" cy="${cy}" r="22" fill="${colors.subdialBg}" stroke="#000" stroke-width="1"/>`;
      sd += `<circle cx="${cx}" cy="${cy}" r="20" fill="none" stroke="#ccc" stroke-width="2"/>`;
      for(let i=0; i<12; i++) {
        const angle = i * 30;
        sd += `<line x1="${cx}" y1="${cy - 20}" x2="${cx}" y2="${cy - 16}" stroke="#000" stroke-width="1" transform="rotate(${angle} ${cx} ${cy})"/>`;
      }
      return sd;
    };

    return `
      <!-- Bezel -->
      <circle cx="150" cy="150" r="146" fill="#000000" stroke="${colors.dialBorder}" stroke-width="6"/>
      <text x="150" y="15" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="7" fill="#c0c0c0">UNITS PER HOUR</text>
      ${bezelTicks}

      <!-- Dial -->
      <circle cx="150" cy="150" r="126" fill="${colors.face}"/>
      
      <!-- Subdials -->
      ${subdial(100, 150, 12)} <!-- Hour counter -->
      ${subdial(200, 150, 30)} <!-- Minute counter -->
      ${subdial(150, 205, 60)} <!-- Small seconds -->

      <!-- Minute Ticks -->
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Hour Markers -->
      <g class="hour-markers">${dialMarkers}</g>
      
      <!-- Logo and Text -->
      <text x="150" y="70" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#000000">ROLEX</text>
      <text x="150" y="80" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#000000">OYSTER PERPETUAL</text>
      <text x="150" y="88" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#000000">SUPERLATIVE CHRONOMETER</text>
      <text x="150" y="96" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#000000">OFFICIALLY CERTIFIED</text>
      <text x="150" y="106" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="${colors.accent}">DAYTONA</text>
      <text x="150" y="245" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#000000">SWISS MADE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    // For a chronograph, the central second hand usually stays at 12 unless timing. We'll use the small subdial at 6 for running seconds, and let the main second hand act like a regular second hand for the sake of the clock widget.
    
    return `
      <!-- Subdial Hands -->
      <g transform="rotate(${time.hourAngle * 2} 100 150)"><line x1="100" y1="150" x2="100" y2="135" stroke="#000" stroke-width="1.5"/></g>
      <g transform="rotate(${time.minuteAngle} 200 150)"><line x1="200" y1="150" x2="200" y2="135" stroke="#000" stroke-width="1.5"/></g>
      <g transform="rotate(${time.secondAngle} 150 205)"><line x1="150" y1="205" x2="150" y2="190" stroke="#000" stroke-width="1.5"/></g>

      <!-- Hour Hand (Baton) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="147" y="80" width="6" height="70" fill="${colors.hourHand}" stroke="#000" stroke-width="1" rx="2" ry="2"/>
        <line x1="150" y1="85" x2="150" y2="145" stroke="#000" stroke-width="1"/>
      </g>
      
      <!-- Minute Hand (Baton) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="148" y="35" width="4" height="115" fill="${colors.minuteHand}" stroke="#000" stroke-width="1" rx="1" ry="1"/>
        <line x1="150" y1="40" x2="150" y2="145" stroke="#000" stroke-width="1"/>
      </g>
      
      ${showSeconds ? `
      <!-- Chronograph Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="170" x2="150" y2="30" stroke="${colors.secondHand}" stroke-width="1.5"/>
        <polygon points="150,25 147,35 153,35" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="4" fill="#000000" />
      <circle cx="150" cy="150" r="2" fill="#c0c0c0" />
    `;
  }
};
