import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const galaxyTheme: ClockThemeRenderer = {
  name: 'galaxy',
  description: 'Cosmic deep space nebula clock with celestial constellation stars, orbiting planetary second hand, and golden starlight',
  defaultColors: {
    face: '#08051a',
    dialBorder: '#a855f7',
    hourTicks: '#c084fc',
    minuteTicks: '#6b21a8',
    numbers: '#e9d5ff',
    hourHand: '#c084fc',
    minuteHand: '#f472b6',
    secondHand: '#fbbf24',
    accent: '#fbbf24',
    centerCap: '#fbbf24',
    glow: 'rgba(192, 132, 252, 0.5)'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Constellation stars
    let stars = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const rad = (angle - 90) * (Math.PI / 180);
      const sx = 150 + 110 * Math.cos(rad);
      const sy = 150 + 110 * Math.sin(rad);
      const isQuarter = i % 3 === 0;
      if (isQuarter) {
        // 4-point golden star
        stars += `
          <g transform="translate(${sx}, ${sy})" filter="url(#gold-glow)">
            <polygon points="0,-6 2,-2 6,0 2,2 0,6 -2,2 -6,0 -2,-2" fill="${colors.accent}"/>
            <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
          </g>
        `;
      } else {
        stars += `<circle cx="${sx}" cy="${sy}" r="2" fill="${colors.hourTicks}" filter="url(#neon-glow)"/>`;
      }
    }

    const labelText = options.label || 'COSMOS // ORBIT';

    return `
      
      <!-- Deep Cosmic Nebula Outer Dial -->
      <circle cx="150" cy="150" r="145" fill="url(#galaxy-nebula)" stroke="${colors.dialBorder}" stroke-width="2.5" filter="url(#neon-glow)"/>
      
      <!-- Celestial Orbital Rings -->
      <ellipse cx="150" cy="150" rx="125" ry="60" fill="none" stroke="#7e22ce" stroke-width="0.8" opacity="0.6" transform="rotate(-25 150 150)"/>
      <ellipse cx="150" cy="150" rx="90" ry="40" fill="none" stroke="#db2777" stroke-width="0.8" opacity="0.4" transform="rotate(35 150 150)"/>
      <circle cx="150" cy="150" r="70" fill="none" stroke="#a855f7" stroke-width="0.8" stroke-dasharray="3 6" opacity="0.5"/>

      <!-- Star Constellations -->
      <g class="constellations">${stars}</g>

      <!-- Central Sun/Moon Inscription -->
      <text x="150" y="105" text-anchor="middle" font-family="'Courier New', monospace" font-size="8" font-weight="bold" fill="#e9d5ff" letter-spacing="2" filter="url(#neon-glow)">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Nebula Purple Ray) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146,75 154,75 152,160 148,160" fill="${colors.hourHand}" filter="url(#neon-glow)"/>
        <line x1="150" y1="80" x2="150" y2="150" stroke="#ffffff" stroke-width="1"/>
      </g>
      
      <!-- Minute Hand (Starlight Pink Ray) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="147,40 153,40 152,160 148,160" fill="${colors.minuteHand}" filter="url(#pink-glow)"/>
        <line x1="150" y1="46" x2="150" y2="150" stroke="#ffffff" stroke-width="1"/>
      </g>
      
      ${showSeconds ? `
      <!-- Orbiting Planetary Moon Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="28" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.4"/>
        <!-- Orbiting Planet/Moon with Ring -->
        <circle cx="150" cy="50" r="5.5" fill="#facc15" filter="url(#gold-glow)"/>
        <ellipse cx="150" cy="50" rx="9" ry="2.5" fill="none" stroke="#fef08a" stroke-width="1" transform="rotate(20 150 50)"/>
        <circle cx="150" cy="175" r="3" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Solar Star Core -->
      <circle cx="150" cy="150" r="7" fill="#fbbf24" filter="url(#gold-glow)"/>
      <circle cx="150" cy="150" r="3" fill="#ffffff"/>
    
    `;
  }
};
