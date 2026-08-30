import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const iwc_portugieserTheme: ClockThemeRenderer = {
  name: 'IWC Portugieser',
  description: 'Elegant chronometer with a clean silver dial, applied Arabic numerals and feuille (leaf) hands',
  defaultColors: {
    face: '#fcfcfc', // Silver-plated dial
    dialBorder: '#d0d0d0', // Very thin polished bezel
    hourTicks: '#2a52be', // Blue applied numerals
    minuteTicks: '#888888',
    numbers: '#2a52be',
    hourHand: '#2a52be', // Blued steel leaf hands
    minuteHand: '#2a52be',
    secondHand: '#2a52be',
    accent: '#2a52be',
    centerCap: '#2a52be',
    subdialBg: '#f8f8f8'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let numbers = '';
    // Custom beautiful Arabic numerals
    for (let i = 1; i <= 12; i++) {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      
      // Skip 6 and 12 if we have subdials there, let's keep them and make them small or omit
      // Portugieser Chronograph has subdials at 12 and 6. Let's omit 12 and 6.
      if (i !== 12 && i !== 6) {
        const x = 150 + 112 * Math.cos(rad);
        const y = 150 + 112 * Math.sin(rad) + 7;
        numbers += `<text x="${x}" y="${y}" text-anchor="middle" font-family="'Times New Roman', serif" font-size="20" font-weight="bold" fill="${colors.numbers}">${i}</text>`;
      }
    }

    let minuteTicks = '';
    // Simple dot minute track with 1/4 second marks for chrono
    for (let i = 0; i < 300; i++) {
      const angle = i * (360/300);
      const isMinute = i % 5 === 0;
      if (isMinute) {
        // Small dot for minutes
        const rad = (angle - 90) * (Math.PI / 180);
        const cx = 150 + 132 * Math.cos(rad);
        const cy = 150 + 132 * Math.sin(rad);
        minuteTicks += `<circle cx="${cx}" cy="${cy}" r="1.5" fill="${colors.numbers}"/>`;
      } else {
        minuteTicks += `<line x1="150" y1="18" x2="150" y2="20" stroke="${colors.minuteTicks}" stroke-width="0.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const subdial = (cx: number, cy: number, max: number, label: string) => {
      let sd = `<circle cx="${cx}" cy="${cy}" r="28" fill="${colors.subdialBg}" stroke="#e0e0e0" stroke-width="0.5"/>`;
      // Concentric circles (azurage)
      sd += `<circle cx="${cx}" cy="${cy}" r="24" fill="none" stroke="#f0f0f0" stroke-width="0.5"/>`;
      sd += `<circle cx="${cx}" cy="${cy}" r="20" fill="none" stroke="#f0f0f0" stroke-width="0.5"/>`;
      sd += `<circle cx="${cx}" cy="${cy}" r="16" fill="none" stroke="#f0f0f0" stroke-width="0.5"/>`;
      
      for(let i=0; i<max; i++) {
        const angle = i * (360/max);
        const isMajor = i % (max/4) === 0;
        const tickLength = isMajor ? 5 : 2;
        sd += `<line x1="${cx}" y1="${cy - 28}" x2="${cx}" y2="${cy - 28 + tickLength}" stroke="#000" stroke-width="${isMajor ? 1 : 0.5}" transform="rotate(${angle} ${cx} ${cy})"/>`;
      }
      return sd;
    };

    return `
      <!-- Bezel (Very thin) -->
      <circle cx="150" cy="150" r="148" fill="#e0e0e0" stroke="#b0b0b0" stroke-width="2"/>
      
      <!-- Dial -->
      <circle cx="150" cy="150" r="146" fill="${colors.face}"/>
      
      <!-- Subdials (12 and 6 o'clock layout) -->
      ${subdial(150, 95, 30, '30')} <!-- Chrono minutes at 12 -->
      ${subdial(150, 205, 60, '60')} <!-- Small seconds at 6 -->

      <!-- Minute Ticks & Dots -->
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Arabic Numerals -->
      <g class="hour-markers">${numbers}</g>
      
      <!-- Logo and Text (Placed at 3 o'clock in chrono) -->
      <text x="210" y="145" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#000000" letter-spacing="1">IWC</text>
      <text x="210" y="153" text-anchor="middle" font-family="'Times New Roman', serif" font-size="6" fill="#000000">SCHAFFHAUSEN</text>
      
      <text x="90" y="148" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#000000">CHRONOGRAPH</text>
      <text x="90" y="156" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#000000">AUTOMATIC</text>
      
      <text x="150" y="242" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#888888">SWISS MADE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    
    return `
      <!-- Subdial Hands -->
      <g transform="rotate(${time.minuteAngle} 150 95)"><line x1="150" y1="95" x2="150" y2="70" stroke="${colors.hourHand}" stroke-width="1"/></g>
      <g transform="rotate(${time.secondAngle} 150 205)"><line x1="150" y1="205" x2="150" y2="180" stroke="${colors.hourHand}" stroke-width="1"/></g>

      <!-- Hour Hand (Feuille / Leaf shape) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <path d="M 150 155 Q 146 140 148 100 Q 150 75 150 70 Q 150 75 152 100 Q 154 140 150 155 Z" fill="${colors.hourHand}"/>
      </g>
      
      <!-- Minute Hand (Feuille / Leaf shape) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <path d="M 150 155 Q 146 120 148 60 Q 150 25 150 20 Q 150 25 152 60 Q 154 120 150 155 Z" fill="${colors.minuteHand}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Central Chrono Second Hand (Very thin) -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="170" x2="150" y2="20" stroke="${colors.secondHand}" stroke-width="0.75"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="3" fill="${colors.centerCap}" />
    `;
  }
};
