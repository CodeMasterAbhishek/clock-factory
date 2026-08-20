import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cyberpunkTheme: ClockThemeRenderer = {
  name: 'cyberpunk',
  description: 'Futuristic sci-fi cyberpunk HUD clock with glowing neon indices and tech dials',
  defaultColors: {
    face: '#0a0d14',
    dialBorder: '#00f0ff',
    hourTicks: '#00f0ff',
    minuteTicks: '#ff0055',
    numbers: '#00f0ff',
    hourHand: '#00f0ff',
    minuteHand: '#ffffff',
    secondHand: '#ff0055',
    accent: '#ff0055',
    centerCap: '#00f0ff',
    glow: 'rgba(0, 240, 255, 0.45)',
    subdialBg: '#0f1422'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isHour = i % 5 === 0;
      if (isHour) {
        ticks += `<line x1="150" y1="20" x2="150" y2="34" stroke="${colors.hourTicks}" stroke-width="3" filter="url(#neon-glow)" transform="rotate(${angle} 150 150)"/>`;
        ticks += `<circle cx="150" cy="40" r="2" fill="${colors.hourTicks}" filter="url(#neon-glow)" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="22" x2="150" y2="28" stroke="${colors.minuteTicks}" stroke-width="1.2" opacity="0.75" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'CYBER//SYS.2088';

    return `
      
      <!-- Glowing Outer Hexagon / Tech Rings -->
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="2.5" filter="url(#neon-glow)"/>
      <circle cx="150" cy="150" r="141" fill="none" stroke="#1f293d" stroke-width="1" stroke-dasharray="4 8"/>
      <circle cx="150" cy="150" r="115" fill="none" stroke="#162035" stroke-width="1"/>
      <circle cx="150" cy="150" r="75" fill="${colors.subdialBg || '#0f1422'}" stroke="#00f0ff" stroke-width="1" opacity="0.4" stroke-dasharray="6 3"/>

      <!-- Tech Crosshairs & Concentric Grid -->
      <line x1="150" y1="30" x2="150" y2="70" stroke="#00f0ff" stroke-width="0.8" opacity="0.3"/>
      <line x1="150" y1="230" x2="150" y2="270" stroke="#00f0ff" stroke-width="0.8" opacity="0.3"/>
      <line x1="30" y1="150" x2="70" y2="150" stroke="#00f0ff" stroke-width="0.8" opacity="0.3"/>
      <line x1="230" y1="150" x2="270" y2="150" stroke="#00f0ff" stroke-width="0.8" opacity="0.3"/>

      <!-- Ticks -->
      <g class="ticks">${ticks}</g>
      
      <!-- HUD Telemetry Labels -->
      <text x="150" y="105" text-anchor="middle" font-family="'Courier New', monospace" font-size="7.5" font-weight="700" fill="${colors.hourTicks}" letter-spacing="2" filter="url(#neon-glow)">${labelText}</text>
      <text x="150" y="200" text-anchor="middle" font-family="'Courier New', monospace" font-size="9" font-weight="bold" fill="${colors.secondHand}" letter-spacing="1.5">[ ${time.timeString24} ]</text>
      <text x="150" y="215" text-anchor="middle" font-family="'Courier New', monospace" font-size="7" fill="#5eead4" opacity="0.8" letter-spacing="1">ZONE: ${time.timezoneName}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146,75 154,75 152,160 148,160" fill="${colors.hourHand}" filter="url(#neon-glow)"/>
        <line x1="150" y1="80" x2="150" y2="140" stroke="#ffffff" stroke-width="1.5"/>
      </g>
      
      <!-- Minute Hand -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="147,40 153,40 152,160 148,160" fill="${colors.minuteHand}" filter="url(#neon-glow)"/>
        <polygon points="149,42 151,42 150.5,145 149.5,145" fill="${colors.accent}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Cyber Laser Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="20" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.8" filter="url(#neon-glow-pink)"/>
        <polygon points="150,20 147,32 153,32" fill="${colors.secondHand}"/>
        <circle cx="150" cy="180" r="3" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Neon Core -->
      <circle cx="150" cy="150" r="9" fill="${colors.face}" stroke="${colors.hourHand}" stroke-width="2" filter="url(#neon-glow)"/>
      <circle cx="150" cy="150" r="4" fill="${colors.secondHand}" filter="url(#neon-glow-pink)"/>
    `;
  },
  getStyles(colors: ThemeColors): string {
    return `
      .clock-svg {
        filter: drop-shadow(0 0 20px ${colors.glow || 'rgba(0,240,255,0.3)'});
      }
    
    `;
  }
};
