import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const titan_edgeTheme: ClockThemeRenderer = {
  name: 'Titan Edge',
  description: 'Ultra-slim, minimalist quartz watch with a sleek black dial and two hands',
  defaultColors: {
    face: '#1a1a1a', // Black dial
    dialBorder: '#c0c0c0', // Silver/steel case
    hourTicks: '#ffffff',
    minuteTicks: '#444444',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: 'none', // Often Titan Edge watches are 2-hand to remain ultra slim
    accent: '#ffffff',
    centerCap: '#c0c0c0'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let dialMarkers = '';
    // Very minimalist markers, just slim lines at 12, 3, 6, 9
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        dialMarkers += `<rect x="149" y="25" width="2" height="15" fill="${colors.hourTicks}" transform="rotate(${angle} 150 150)"/>`;
      } else {
        dialMarkers += `<rect x="149.5" y="30" width="1" height="10" fill="${colors.hourTicks}" opacity="0.7" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    return `
      <!-- Ultra-thin Bezel -->
      <circle cx="150" cy="150" r="148" fill="#e0e0e0" stroke="#a0a0a0" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="144" fill="${colors.face}"/>

      <!-- Geometric dial pattern (optional, Edge sometimes has subtle texture) -->
      <circle cx="150" cy="150" r="100" fill="none" stroke="#222222" stroke-width="1"/>
      
      <!-- Hour Markers -->
      <g class="hour-markers">${dialMarkers}</g>
      
      <!-- Logo and Text -->
      <text x="150" y="85" text-anchor="middle" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="10" font-weight="bold" fill="#ffffff" letter-spacing="3">TITAN</text>
      <text x="150" y="100" text-anchor="middle" font-family="'Helvetica Neue', Helvetica, Arial, sans-serif" font-size="8" fill="#ffffff" letter-spacing="4">EDGE</text>
      
      <text x="150" y="220" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#888888">SAPPHIRE CRYSTAL</text>
      <text x="150" y="240" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#555555">INDIA</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <!-- Hour Hand (Ultra slim baton) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="148.5" y="70" width="3" height="80" fill="${colors.hourHand}"/>
      </g>
      
      <!-- Minute Hand (Ultra slim baton) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="149" y="30" width="2" height="120" fill="${colors.minuteHand}"/>
      </g>
      
      <!-- No Second Hand for typical Titan Edge minimalist look -->
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="2.5" fill="${colors.centerCap}" />
      <circle cx="150" cy="150" r="1" fill="${colors.face}" />
    `;
  }
};
