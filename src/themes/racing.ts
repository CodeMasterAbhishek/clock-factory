import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const racingTheme: ClockThemeRenderer = {
  name: 'racing',
  description: 'Motorsport racing speedometer with carbon-fiber textured dial, high-RPM redline gauge zone, and racing needle',
  defaultColors: {
    face: '#111317',
    dialBorder: '#ef4444',
    hourTicks: '#ffffff',
    minuteTicks: '#64748b',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ef4444',
    accent: '#ef4444',
    centerCap: '#ef4444',
    subdialBg: '#181b22'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isRedline = angle >= 240 && angle <= 360; // 8 to 12 o'clock redline zone
      const tickColor = isRedline ? '#ef4444' : colors.hourTicks;
      const isFive = i % 5 === 0;

      if (isFive) {
        ticks += `<line x1="150" y1="22" x2="150" y2="36" stroke="${tickColor}" stroke-width="${isRedline ? '3.5' : '3'}" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="24" x2="150" y2="30" stroke="${isRedline ? '#ef4444' : colors.minuteTicks}" stroke-width="1.2" opacity="${isRedline ? '0.9' : '0.6'}" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let speedNumbers = '';
    if (options.showNumbers !== false) {
      const rpmNumbers = ['12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];
      for (let i = 0; i < 12; i++) {
        const rad = (i * 30 - 90) * (Math.PI / 180);
        const nx = 150 + 98 * Math.cos(rad);
        const ny = 150 + 98 * Math.sin(rad) + 5;
        const isRedline = i >= 8;
        const color = isRedline ? '#ef4444' : '#ffffff';
        speedNumbers += `<text x="${nx.toFixed(1)}" y="${ny.toFixed(1)}" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="13" font-weight="bold" fill="${color}">${rpmNumbers[i]}</text>`;
      }
    }

    const labelText = options.label || 'RPM x 1000';

    return `
      
      <!-- Bezel & Carbon Dial Base -->
      <circle cx="150" cy="150" r="146" fill="#0b0d10" stroke="#334155" stroke-width="3"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>
      
      <!-- Redline Warning Arc (8 to 12 o'clock) -->
      <path d="M 46,150 A 104,104 0 0,1 150,46" fill="none" stroke="#ef4444" stroke-width="5" stroke-linecap="round" transform="rotate(-60 150 150)" opacity="0.85"/>

      <!-- Racing Sub-Dials / Chequered Pattern Ring -->
      <circle cx="150" cy="150" r="70" fill="${colors.subdialBg || '#181b22'}" stroke="#334155" stroke-width="1"/>
      <circle cx="150" cy="150" r="50" fill="none" stroke="#ef4444" stroke-width="0.8" opacity="0.4" stroke-dasharray="4 4"/>

      <!-- Ticks & RPM Numbers -->
      <g class="ticks">${ticks}</g>
      <g class="rpm-numbers">${speedNumbers}</g>

      <!-- Gauge Label -->
      <text x="150" y="110" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="7.5" font-weight="bold" fill="#ef4444" letter-spacing="1.5">TURBO · GT</text>
      <text x="150" y="195" text-anchor="middle" font-family="'Arial', sans-serif" font-size="7" font-weight="bold" fill="#94a3b8" letter-spacing="1">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Speedometer Needle) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146.5,75 153.5,75 151.5,160 148.5,160" fill="${colors.hourHand}" filter="url(#drop-shadow)"/>
        <line x1="150" y1="80" x2="150" y2="150" stroke="#ef4444" stroke-width="1.2"/>
      </g>
      
      <!-- Minute Hand (Speedometer Needle) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="147,40 153,40 151.5,160 148.5,160" fill="${colors.minuteHand}" filter="url(#drop-shadow)"/>
        <line x1="150" y1="45" x2="150" y2="150" stroke="#ef4444" stroke-width="1.2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Racing Red Needle with Center Disc -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="20" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="2"/>
        <polygon points="150,18 147,30 153,30" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Alloy Cap -->
      <circle cx="150" cy="150" r="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" filter="url(#drop-shadow)"/>
      <circle cx="150" cy="150" r="3.5" fill="#ef4444"/>
    
    `;
  }
};
