import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const tag_heuer_monacoTheme: ClockThemeRenderer = {
  name: 'TAG Heuer Monaco',
  description: 'Iconic square-cased chronograph with a blue dial, made famous by Steve McQueen',
  defaultColors: {
    face: '#1d3557', // Matte blue
    dialBorder: '#e0e0e0',
    hourTicks: '#ffffff',
    minuteTicks: '#ffffff',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#e63946', // Red
    accent: '#e63946',
    centerCap: '#c0c0c0',
    subdialBg: '#f1faee' // Silver/white
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let dialMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i !== 0 && i !== 3 && i !== 6 && i !== 9) { // Markers are mainly horizontal
        // Placing markers in a circle inside the square
        dialMarkers += `<rect x="148" y="45" width="4" height="15" fill="${colors.hourTicks}" stroke="#a0a0a0" stroke-width="0.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let minuteTicks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      minuteTicks += `<line x1="150" y1="35" x2="150" y2="38" stroke="${colors.minuteTicks}" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
    }

    const subdial = (cx: number, cy: number) => {
      let sd = `<rect x="${cx - 26}" y="${cy - 26}" width="52" height="52" fill="${colors.subdialBg}" rx="4"/>`;
      for(let i=0; i<12; i++) {
        const angle = i * 30;
        const tickLength = (i % 3 === 0) ? 6 : 3;
        sd += `<line x1="${cx}" y1="${cy - 22}" x2="${cx}" y2="${cy - 22 + tickLength}" stroke="#000" stroke-width="1.5" transform="rotate(${angle} ${cx} ${cy})"/>`;
      }
      return sd;
    };

    return `
      <!-- Bezel (Square case with rounded corners) -->
      <rect x="25" y="25" width="250" height="250" fill="#d0d0d0" stroke="#909090" stroke-width="3" rx="10"/>
      <rect x="35" y="35" width="230" height="230" fill="${colors.face}" rx="8"/>
      
      <!-- Inner circular dial outline (stylized) -->
      <circle cx="150" cy="150" r="115" fill="none" stroke="#4a6991" stroke-width="1"/>
      
      <!-- Subdials (Square) -->
      ${subdial(90, 150)} <!-- Running seconds at 9 -->
      ${subdial(210, 150)} <!-- Chrono minutes at 3 -->

      <!-- Minute Ticks -->
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Hour Markers -->
      <g class="hour-markers">${dialMarkers}</g>
      
      <!-- Date Window at 6 o'clock -->
      <rect x="140" y="240" width="20" height="15" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
      <text x="150" y="252" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="#000000">11</text>
      
      <!-- Logo and Text -->
      <!-- TAG Heuer Shield -->
      <path d="M 140 70 L 160 70 L 158 90 C 158 95 150 100 150 100 C 150 100 142 95 142 90 Z" fill="#ffffff" stroke="#4a6991" stroke-width="0.5"/>
      <text x="150" y="78" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" font-weight="bold" fill="#000000">TAG</text>
      <text x="150" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" font-weight="bold" fill="#000000">HEUER</text>
      
      <text x="150" y="110" text-anchor="middle" font-family="Arial, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" letter-spacing="1">MONACO</text>
      <text x="150" y="120" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#ffffff">AUTOMATIC</text>
      <text x="150" y="128" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#ffffff">CHRONOGRAPH</text>
      
      <text x="150" y="270" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#ffffff">SWISS MADE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    
    return `
      <!-- Subdial Hands -->
      <g transform="rotate(${time.secondAngle} 90 150)">
        <polygon points="90,152 88,135 92,135" fill="#000000"/>
      </g>
      <g transform="rotate(${time.minuteAngle} 210 150)">
        <polygon points="210,152 208,135 212,135" fill="#000000"/>
      </g>

      <!-- Hour Hand (Baton) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146" y="80" width="8" height="75" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
        <!-- Red stripe -->
        <rect x="149" y="85" width="2" height="40" fill="${colors.accent}"/>
      </g>
      
      <!-- Minute Hand (Baton) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="146" y="45" width="8" height="110" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
        <!-- Red stripe -->
        <rect x="149" y="50" width="2" height="70" fill="${colors.accent}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Chronograph Second Hand (Red) -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="180" x2="150" y2="40" stroke="${colors.secondHand}" stroke-width="2"/>
        <rect x="149" y="40" width="2" height="15" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="5" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
    `;
  }
};
