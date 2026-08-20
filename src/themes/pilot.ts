import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const pilotTheme: ClockThemeRenderer = {
  name: 'pilot',
  description: 'Aviation Flieger pilot watch with cockpit matte black dial, high-vis sword hands, and 12-hour triangle',
  defaultColors: {
    face: '#121316',
    dialBorder: '#23262d',
    hourTicks: '#ffffff',
    minuteTicks: '#94a3b8',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#fbbf24',
    accent: '#fbbf24',
    centerCap: '#121316'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour && i !== 0) {
        ticks += `<line x1="150" y1="24" x2="150" y2="40" stroke="${colors.hourTicks}" stroke-width="3" stroke-linecap="round" transform="rotate(${angle} 150 150)"/>`;
      } else if (!isHour && options.showTicks !== false) {
        ticks += `<line x1="150" y1="24" x2="150" y2="32" stroke="${colors.minuteTicks}" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let numbers = '';
    if (options.showNumbers !== false) {
      const radius = 98;
      const hours = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
      for (let i = 1; i < 12; i++) {
        const rad = (i * 30 - 90) * (Math.PI / 180);
        const nx = 150 + radius * Math.cos(rad);
        const ny = 150 + radius * Math.sin(rad) + 6;
        numbers += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" font-family="'Arial', sans-serif" font-size="16" font-weight="bold" fill="${colors.numbers}">${hours[i]}</text>`;
      }
    }

    const labelText = options.label || 'FLIEGER TYPE A';

    return `
      
      <!-- Cockpit Instrument Outer Bezel with Rivets -->
      <circle cx="150" cy="150" r="146" fill="#1b1e24" stroke="#2d323b" stroke-width="3"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      <!-- 12 O'Clock Aviator Triangle & Two Dots -->
      <polygon points="142,42 158,42 150,26" fill="#ffffff"/>
      <circle cx="137" cy="34" r="2.5" fill="#ffffff"/>
      <circle cx="163" cy="34" r="2.5" fill="#ffffff"/>

      <!-- Ticks & Numerals -->
      <g class="ticks">${ticks}</g>
      <g class="numbers">${numbers}</g>

      <!-- Aviator Inscription -->
      <text x="150" y="195" text-anchor="middle" font-family="'Arial', sans-serif" font-size="8" font-weight="bold" fill="#64748b" letter-spacing="2">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Aviation Sword Hand) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,160 148,160" fill="${colors.hourHand}" filter="url(#drop-shadow)"/>
        <line x1="150" y1="75" x2="150" y2="150" stroke="#121316" stroke-width="1.8"/>
      </g>
      
      <!-- Minute Hand (Aviation Sword Hand) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,35 155,35 152,160 148,160" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
        <line x1="150" y1="40" x2="150" y2="150" stroke="#121316" stroke-width="1.8"/>
      </g>
      
      ${showSeconds ? `
      <!-- Cockpit Yellow Needle Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="24" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.6"/>
        <circle cx="150" cy="175" r="4" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Matte Cap -->
      <circle cx="150" cy="150" r="5.5" fill="#2d323b"/>
      <circle cx="150" cy="150" r="2.5" fill="#ffffff"/>
    
    `;
  }
};
