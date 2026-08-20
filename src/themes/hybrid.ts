import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const hybridTheme: ClockThemeRenderer = {
  name: 'hybrid',
  description: 'Analog-Digital Hybrid featuring analog hands with a built-in LCD date & digital readout display',
  defaultColors: {
    face: '#181e29',
    dialBorder: '#334155',
    hourTicks: '#94a3b8',
    minuteTicks: '#475569',
    numbers: '#f8fafc',
    hourHand: '#38bdf8',
    minuteHand: '#f8fafc',
    secondHand: '#f97316',
    accent: '#38bdf8',
    centerCap: '#38bdf8',
    subdialBg: '#0f172a'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour) {
        ticks += `<line x1="150" y1="20" x2="150" y2="32" stroke="${colors.hourTicks}" stroke-width="3" stroke-linecap="round" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="${colors.minuteTicks}" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let numbers = '';
    if (options.showNumbers !== false) {
      // Cardinal numbers 12, 3, 6, 9
      const cardinals = [
        { label: '12', x: 150, y: 52 },
        { label: '3', x: 250, y: 156 },
        { label: '6', x: 150, y: 260 },
        { label: '9', x: 50, y: 156 }
      ];
      for (const card of cardinals) {
        numbers += `<text x="${card.x}" y="${card.y}" text-anchor="middle" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="16" font-weight="700" fill="${colors.numbers}">${card.label}</text>`;
      }
    }

    return `
      
      <!-- Outer Case & Dial -->
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="3"/>
      <circle cx="150" cy="150" r="139" fill="none" stroke="#1e293b" stroke-width="1.5"/>

      <!-- Digital LCD Sub-Display Window (Top) -->
      <rect x="105" y="70" width="90" height="24" rx="4" fill="${colors.subdialBg || '#0f172a'}" stroke="#334155" stroke-width="1"/>
      <text x="150" y="86" text-anchor="middle" font-family="'Courier New', monospace" font-size="11" font-weight="bold" fill="${colors.accent}" letter-spacing="1">${time.dateString}</text>

      <!-- Digital LCD Time Display Window (Bottom) -->
      <rect x="100" y="195" width="100" height="26" rx="4" fill="${colors.subdialBg || '#0f172a'}" stroke="#334155" stroke-width="1"/>
      <text x="150" y="213" text-anchor="middle" font-family="'Courier New', monospace" font-size="13" font-weight="bold" fill="#f8fafc" letter-spacing="1.5">${time.timeString24}</text>

      <!-- Ticks & Cardinal Numbers -->
      <g class="ticks">${ticks}</g>
      <g class="numbers">${numbers}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="145.5" y="75" width="9" height="85" rx="3" fill="${colors.hourHand}" filter="url(#drop-shadow)"/>
        <rect x="147.5" y="85" width="5" height="40" rx="2" fill="#ffffff"/>
      </g>
      
      <!-- Minute Hand -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="146.5" y="42" width="7" height="120" rx="3" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
        <rect x="148" y="55" width="4" height="60" rx="1.5" fill="${colors.accent}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="26" x2="150" y2="175" stroke="${colors.secondHand}" stroke-width="1.8"/>
        <circle cx="150" cy="150" r="5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="4" fill="#0f172a"/>
    
    `;
  }
};
