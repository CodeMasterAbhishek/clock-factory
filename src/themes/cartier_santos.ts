import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cartier_santosTheme: ClockThemeRenderer = {
  name: 'Cartier Santos',
  description: 'Classic square watch with rounded corners, 8 screws, and roman numerals',
  defaultColors: {
    face: '#f8f8f8', // Silver/white dial
    dialBorder: '#c0c0c0',
    hourTicks: '#000000',
    minuteTicks: '#000000',
    numbers: '#000000',
    hourHand: '#2a52be', // Blued steel
    minuteHand: '#2a52be',
    secondHand: '#2a52be',
    accent: '#000000',
    centerCap: '#2a52be'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let numbers = '';
    const romans = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      
      // Push numbers slightly more to form a square layout
      let radius = 80;
      if (i % 3 === 0) radius = 85; // 12, 3, 6, 9
      
      const x = 150 + radius * Math.cos(rad);
      const y = 150 + radius * Math.sin(rad) + 6;
      
      // Cartier numerals are heavily slanted towards the center
      const rotAngle = angle;
      numbers += `<text x="${x}" y="${y}" text-anchor="middle" font-family="'Times New Roman', Times, serif" font-size="18" font-weight="bold" fill="${colors.numbers}" transform="rotate(${rotAngle} ${x} ${y - 6})">${romans[i]}</text>`;
    }

    // Inner railway minute track
    let railway = '';
    railway += `<rect x="95" y="95" width="110" height="110" fill="none" stroke="#000000" stroke-width="1.5" rx="5"/>`;
    railway += `<rect x="100" y="100" width="100" height="100" fill="none" stroke="#000000" stroke-width="1" rx="4"/>`;
    
    for (let i = 0; i < 60; i++) {
      // Approximate ticks on a rounded square
      if (i % 5 !== 0) {
        // Just simplifying to a circle for the inner railway ticks to look clean
      }
      const angle = i * 6;
      const rad = (angle - 90) * (Math.PI / 180);
      let cx = 150 + 52 * Math.cos(rad);
      let cy = 150 + 52 * Math.sin(rad);
      // Box deformation for ticks
      const r_square = 50 / Math.max(Math.abs(Math.cos(rad)), Math.abs(Math.sin(rad)));
      const r_blend = 50 * 0.4 + r_square * 0.6; // Rounded square approximation
      
      cx = 150 + r_blend * Math.cos(rad);
      cy = 150 + r_blend * Math.sin(rad);
      
      const cx2 = 150 + (r_blend + 5) * Math.cos(rad);
      const cy2 = 150 + (r_blend + 5) * Math.sin(rad);
      
      railway += `<line x1="${cx}" y1="${cy}" x2="${cx2}" y2="${cy2}" stroke="#000" stroke-width="${i % 5 === 0 ? 1.5 : 0.5}"/>`;
    }

    let screws = '';
    // 8 screws on the bezel
    const screwPos = [
      [75, 45], [150, 35], [225, 45],
      [45, 110],           [255, 110],
      [45, 190],           [255, 190],
      [75, 255], [150, 265], [225, 255]
    ];
    // Slightly adjust to 8
    const exactScrews = [
      [80, 45], [150, 40], [220, 45],
      [45, 150], [255, 150],
      [80, 255], [150, 260], [220, 255]
    ];
    
    for (let pos of exactScrews) {
      const sx = pos[0];
      const sy = pos[1];
      screws += `
        <circle cx="${sx}" cy="${sy}" r="3.5" fill="#e0e0e0" stroke="#888" stroke-width="0.5"/>
        <line x1="${sx-2.5}" y1="${sy-2.5}" x2="${sx+2.5}" y2="${sy+2.5}" stroke="#888" stroke-width="1.5"/>
      `;
    }

    return `
      <!-- Case (Square with rounded corners) -->
      <rect x="25" y="25" width="250" height="250" fill="#dcdcdc" stroke="#999999" stroke-width="3" rx="30"/>
      <!-- Bezel with screws -->
      <rect x="35" y="35" width="230" height="230" fill="#e8e8e8" stroke="#a0a0a0" stroke-width="1" rx="25"/>
      ${screws}
      
      <!-- Dial -->
      <rect x="45" y="45" width="210" height="210" fill="${colors.face}" rx="20"/>
      
      <!-- Railway Track -->
      <g class="railway">${railway}</g>
      
      <!-- Roman Numerals -->
      <g class="numbers">${numbers}</g>
      
      <!-- Logo and Text -->
      <text x="150" y="80" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#000000" letter-spacing="1">CARTIER</text>
      <text x="150" y="235" text-anchor="middle" font-family="'Times New Roman', serif" font-size="5" fill="#000000">SWISS MADE</text>
      
      <!-- Hidden "CARTIER" signature in the VII or X numeral -->
      <!-- Let's put a tiny "CARTIER" in the VII -->
      <text x="110" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="2" fill="#000000" transform="rotate(-30 110 215)">CARTIER</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Sword shaped, blued steel) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="150,85 146,140 150,150 154,140" fill="${colors.hourHand}"/>
        <!-- Spine highlight -->
        <line x1="150" y1="85" x2="150" y2="150" stroke="#5a82e6" stroke-width="0.5"/>
      </g>
      
      <!-- Minute Hand (Sword shaped, blued steel) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="150,45 146,140 150,150 154,140" fill="${colors.minuteHand}"/>
        <line x1="150" y1="45" x2="150" y2="150" stroke="#5a82e6" stroke-width="0.5"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="170" x2="150" y2="45" stroke="${colors.secondHand}" stroke-width="0.5"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="3" fill="${colors.centerCap}" />
    `;
  }
};
