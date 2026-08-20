import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const swissTheme: ClockThemeRenderer = {
  name: 'swiss',
  description: 'Iconic Swiss Railway station clock with high-contrast dial and signature lollipop second hand',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#1a1a1a',
    hourTicks: '#111111',
    minuteTicks: '#555555',
    numbers: '#111111',
    hourHand: '#111111',
    minuteHand: '#111111',
    secondHand: '#dc2626',
    accent: '#dc2626',
    centerCap: '#dc2626',
    shadow: 'rgba(0, 0, 0, 0.15)'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    // Generate 60 tick marks around 300x300 dial (center: 150, 150, radius: 135)
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour) {
        ticks += `<line x1="150" y1="20" x2="150" y2="44" stroke="${colors.hourTicks}" stroke-width="7" stroke-linecap="square" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="28" stroke="${colors.minuteTicks}" stroke-width="2.5" stroke-linecap="square" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SWISS MADE';

    return `
      
      <!-- Bezel & Face -->
      <circle cx="150" cy="150" r="146" fill="#0d0d0d" stroke="#e5e5e5" stroke-width="2"/>
      <circle cx="150" cy="150" r="138" fill="${colors.face}"/>
      
      <!-- Ticks -->
      <g class="ticks">${ticks}</g>
      
      <!-- Subtle Brand Text -->
      <text x="150" y="210" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="8" font-weight="700" fill="#777777" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="144" y="65" width="12" height="100" rx="3" fill="${colors.hourHand}" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="145" y="32" width="10" height="135" rx="3" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Swiss Signature Second Hand with Lollipop Disk -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <!-- Main red shaft extending back for counter-balance -->
        <rect x="148.5" y="46" width="3" height="130" fill="${colors.secondHand}"/>
        <!-- Lollipop Red Circle -->
        <circle cx="150" cy="46" r="11" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Hub -->
      <circle cx="150" cy="150" r="7" fill="${colors.centerCap}" filter="url(#drop-shadow)"/>
      <circle cx="150" cy="150" r="2.5" fill="#111111"/>
    
    `;
  }
};
