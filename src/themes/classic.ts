import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const classicTheme: ClockThemeRenderer = {
  name: 'classic',
  description: 'Clean Bauhaus minimalist design with modern typography, crisp numerals, and elegant hands',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#27272a',
    hourTicks: '#18181b',
    minuteTicks: '#a1a1aa',
    numbers: '#18181b',
    hourHand: '#18181b',
    minuteHand: '#18181b',
    secondHand: '#e11d48',
    accent: '#e11d48',
    centerCap: '#18181b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour) {
        ticks += `<line x1="150" y1="22" x2="150" y2="34" stroke="${colors.hourTicks}" stroke-width="3" stroke-linecap="round" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="22" x2="150" y2="28" stroke="${colors.minuteTicks}" stroke-width="1.2" stroke-linecap="round" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let numbers = '';
    if (options.showNumbers !== false) {
      // 12 numerals arranged at radius 108
      const radius = 104;
      const numerals = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
      for (let i = 0; i < 12; i++) {
        const rad = (i * 30 - 90) * (Math.PI / 180);
        const nx = 150 + radius * Math.cos(rad);
        const ny = 150 + radius * Math.sin(rad) + 6; // font vertical center adjustment
        numbers += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif" font-size="16" font-weight="600" fill="${colors.numbers}">${numerals[i]}</text>`;
      }
    }

    return `
      
      <!-- Dial Base -->
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="140" fill="none" stroke="#f4f4f5" stroke-width="1.5"/>

      <!-- Ticks & Numbers -->
      <g class="ticks">${ticks}</g>
      <g class="numbers">${numbers}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Tapered) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146.5,80 153.5,80 151.5,165 148.5,165" fill="${colors.hourHand}" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Tapered) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="147.5,42 152.5,42 151,165 149,165" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="28" x2="150" y2="175" stroke="${colors.secondHand}" stroke-width="1.6"/>
        <circle cx="150" cy="150" r="4.5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="3" fill="${colors.centerCap}"/>
    
    `;
  }
};
