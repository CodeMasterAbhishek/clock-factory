import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const glassmorphismTheme: ClockThemeRenderer = {
  name: 'glassmorphism',
  description: 'Modern frosted glass UI clock with semi-transparent backdrop, glowing pastel accents, and iridescent border',
  defaultColors: {
    face: 'rgba(255, 255, 255, 0.08)',
    dialBorder: 'rgba(255, 255, 255, 0.25)',
    hourTicks: '#ffffff',
    minuteTicks: 'rgba(255, 255, 255, 0.4)',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#38bdf8',
    secondHand: '#f43f5e',
    accent: '#38bdf8',
    centerCap: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.4)'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const isQuarter = i % 3 === 0;
      if (isQuarter) {
        ticks += `<rect x="148" y="24" width="4" height="14" rx="2" fill="#ffffff" filter="url(#drop-shadow)" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<circle cx="150" cy="30" r="2" fill="rgba(255, 255, 255, 0.6)" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'GLASS UI';

    return `
      
      <!-- Frosted Glass Layer & Iridescent Rim -->
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="url(#glass-border)" stroke-width="2.5" filter="url(#drop-shadow)"/>
      <circle cx="150" cy="150" r="139" fill="none" stroke="rgba(255, 255, 255, 0.15)" stroke-width="1"/>
      <circle cx="150" cy="150" r="95" fill="none" stroke="rgba(255, 255, 255, 0.08)" stroke-width="1"/>

      <!-- Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- Glass Inscription -->
      <text x="150" y="110" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" font-size="9" font-weight="600" fill="rgba(255, 255, 255, 0.85)" letter-spacing="3">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Soft White Pill) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146" y="70" width="8" height="95" rx="4" fill="#ffffff" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Cyan Pill) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="147" y="38" width="6" height="125" rx="3" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand (Coral Red) -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="26" x2="150" y2="175" stroke="${colors.secondHand}" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="150" cy="150" r="4.5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Glass Cap -->
      <circle cx="150" cy="150" r="7" fill="rgba(255, 255, 255, 0.9)" filter="url(#drop-shadow)"/>
      <circle cx="150" cy="150" r="3" fill="${colors.secondHand}"/>
    
    `;
  }
};
