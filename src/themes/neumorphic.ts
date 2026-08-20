import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const neumorphicTheme: ClockThemeRenderer = {
  name: 'neumorphic',
  description: 'Soft 3D neumorphic clock with embossed dial, organic shadows, and tactile aesthetics',
  defaultColors: {
    face: '#e0e5ec',
    dialBorder: '#d1d9e6',
    hourTicks: '#9baacf',
    minuteTicks: '#bcc5d6',
    numbers: '#7685a8',
    hourHand: '#4d5b7c',
    minuteHand: '#6c7a9c',
    secondHand: '#4361ee',
    accent: '#4361ee',
    centerCap: '#4361ee',
    shadow: '#ffffff'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour) {
        ticks += `<circle cx="150" cy="30" r="3.5" fill="${colors.hourTicks}" filter="url(#inset-shadow)" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<circle cx="150" cy="30" r="1.5" fill="${colors.minuteTicks}" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'CHRONO';

    return `
      
      <!-- Neumorphic Convex Face with Inner & Outer Shadows -->
      <circle cx="150" cy="150" r="142" fill="${colors.face}" filter="url(#neumorphic-shadow)"/>
      <circle cx="150" cy="150" r="128" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="95" fill="none" stroke="${colors.dialBorder}" stroke-width="1" opacity="0.6"/>

      <!-- Ticks -->
      <g class="ticks">${ticks}</g>
      
      <!-- Embossed Brand Text -->
      <text x="150" y="115" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="9" font-weight="600" fill="${colors.numbers}" letter-spacing="3">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146.5" y="70" width="7" height="95" rx="3.5" fill="${colors.hourHand}" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="147.5" y="38" width="5" height="125" rx="2.5" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <rect x="149" y="26" width="2" height="150" rx="1" fill="${colors.secondHand}"/>
        <circle cx="150" cy="170" r="4.5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Embossed Center Hub -->
      <circle cx="150" cy="150" r="9" fill="${colors.face}" filter="url(#drop-shadow)"/>
      <circle cx="150" cy="150" r="4.5" fill="${colors.centerCap}"/>
    
    `;
  }
};
