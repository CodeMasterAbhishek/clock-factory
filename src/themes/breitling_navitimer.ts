import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const breitling_navitimerTheme: ClockThemeRenderer = {
  name: 'Breitling Navitimer',
  description: 'Legendary aviation chronograph with a complex slide rule bezel and three sub-dials',
  defaultColors: {
    face: '#1a1a1a', // Black dial
    dialBorder: '#c0c0c0',
    hourTicks: '#ffffff',
    minuteTicks: '#ffffff',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ff0000', // Red chrono seconds
    accent: '#ff0000',
    centerCap: '#ffffff',
    subdialBg: '#ffffff' // White subdials (reverse panda)
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let slideRule = '';
    // Very complex slide rule approximation
    for (let i = 0; i < 180; i++) {
      const angle = i * 2;
      const isMajor = i % 5 === 0;
      const tickLength = isMajor ? 5 : 3;
      const strokeW = isMajor ? 1 : 0.5;
      
      // Outer ring (white on black)
      slideRule += `<line x1="150" y1="12" x2="150" y2="${12 + tickLength}" stroke="#ffffff" stroke-width="${strokeW}" transform="rotate(${angle} 150 150)"/>`;
      // Inner ring (black on white flange)
      slideRule += `<line x1="150" y1="24" x2="150" y2="${24 - tickLength}" stroke="#000000" stroke-width="${strokeW}" transform="rotate(${angle} 150 150)"/>`;
    }

    let numbers = '';
    for (let i = 1; i <= 12; i++) {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      // Skip numbers where subdials are (3, 6, 9)
      if (i !== 3 && i !== 6 && i !== 9) {
        const x = 150 + 90 * Math.cos(rad);
        const y = 150 + 90 * Math.sin(rad) + 4;
        numbers += `<text x="${x}" y="${y}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="${colors.numbers}">${i}</text>`;
      }
      const markerX1 = 150 + 105 * Math.cos(rad);
      const markerY1 = 150 + 105 * Math.sin(rad);
      const markerX2 = 150 + 115 * Math.cos(rad);
      const markerY2 = 150 + 115 * Math.sin(rad);
      numbers += `<line x1="${markerX1}" y1="${markerY1}" x2="${markerX2}" y2="${markerY2}" stroke="${colors.hourTicks}" stroke-width="2"/>`;
    }

    let minuteTicks = '';
    for (let i = 0; i < 300; i++) {
      const angle = i * (360/300);
      minuteTicks += `<line x1="150" y1="28" x2="150" y2="${i % 5 === 0 ? 32 : 30}" stroke="${colors.minuteTicks}" stroke-width="${i % 5 === 0 ? 1 : 0.5}" transform="rotate(${angle} 150 150)"/>`;
    }

    const subdial = (cx: number, cy: number) => {
      let sd = `<circle cx="${cx}" cy="${cy}" r="22" fill="${colors.subdialBg}" stroke="#c0c0c0" stroke-width="0.5"/>`;
      for(let i=0; i<12; i++) {
        const angle = i * 30;
        sd += `<line x1="${cx}" y1="${cy - 20}" x2="${cx}" y2="${cy - 16}" stroke="#000" stroke-width="1" transform="rotate(${angle} ${cx} ${cy})"/>`;
      }
      return sd;
    };

    return `
      <!-- Bezel with fluted edge -->
      <circle cx="150" cy="150" r="148" fill="#d0d0d0" stroke="#a0a0a0" stroke-width="2"/>
      <circle cx="150" cy="150" r="146" fill="#1a1a1a"/>
      
      <!-- Inner slide rule background (white) -->
      <circle cx="150" cy="150" r="132" fill="#ffffff"/>
      <circle cx="150" cy="150" r="120" fill="${colors.face}"/>

      <!-- Slide Rule & Ticks -->
      <g class="slide-rule">${slideRule}</g>
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Subdials -->
      ${subdial(95, 150)} <!-- 9 o'clock -->
      ${subdial(205, 150)} <!-- 3 o'clock -->
      ${subdial(150, 205)} <!-- 6 o'clock -->
      
      <!-- Hour Markers & Numbers -->
      <g class="hour-markers">${numbers}</g>
      
      <!-- Logo and Text -->
      <!-- Breitling Wings -->
      <path d="M 140 75 Q 145 65 150 70 Q 155 65 160 75 Q 155 80 150 85 Q 145 80 140 75 Z" fill="#d4af37"/>
      <text x="150" y="98" text-anchor="middle" font-family="'Times New Roman', serif" font-size="10" font-weight="bold" fill="#ffffff" letter-spacing="1">BREITLING</text>
      <text x="150" y="108" text-anchor="middle" font-family="'Times New Roman', serif" font-size="6" fill="#ffffff">1884</text>
      <text x="150" y="118" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" font-style="italic" fill="#ffffff">NAVITIMER</text>
      
      <text x="150" y="245" text-anchor="middle" font-family="Arial, sans-serif" font-size="4" fill="#ffffff">SWISS MADE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    
    return `
      <!-- Subdial Hands -->
      <g transform="rotate(${time.secondAngle} 95 150)"><line x1="95" y1="150" x2="95" y2="135" stroke="#000" stroke-width="1.5"/></g>
      <g transform="rotate(${time.minuteAngle} 205 150)"><line x1="205" y1="150" x2="205" y2="135" stroke="#000" stroke-width="1.5"/></g>
      <g transform="rotate(${time.hourAngle * 2} 150 205)"><line x1="150" y1="205" x2="150" y2="190" stroke="#000" stroke-width="1.5"/></g>

      <!-- Hour Hand (Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="150,75 146,85 146,155 154,155 154,85" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
      </g>
      
      <!-- Minute Hand (Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="150,35 146,45 146,155 154,155 154,45" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
      </g>
      
      ${showSeconds ? `
      <!-- Chrono Second Hand with B Logo Counterweight -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="185" x2="150" y2="35" stroke="${colors.secondHand}" stroke-width="1.5"/>
        <polygon points="150,30 148,40 152,40" fill="${colors.secondHand}"/>
        <!-- B anchor counterweight -->
        <text x="150" y="178" text-anchor="middle" font-family="'Times New Roman', serif" font-weight="bold" font-size="10" fill="${colors.secondHand}" transform="rotate(180 150 175)">B</text>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="3" fill="#000000" />
    `;
  }
};
