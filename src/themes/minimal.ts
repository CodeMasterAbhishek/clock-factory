import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const minimalTheme: ClockThemeRenderer = {
  name: 'minimal',
  description: 'Ultra-minimal Nordic aesthetic with subtle circular indices and slender needle hands',
  defaultColors: {
    face: '#18181b',
    dialBorder: '#27272a',
    hourTicks: '#71717a',
    minuteTicks: '#3f3f46',
    numbers: '#71717a',
    hourHand: '#fafafa',
    minuteHand: '#a1a1aa',
    secondHand: '#10b981',
    accent: '#10b981',
    centerCap: '#10b981'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const isQuarter = i % 3 === 0;
      const r = isQuarter ? 3.5 : 2;
      const fill = isQuarter ? colors.accent : colors.hourTicks;
      ticks += `<circle cx="150" cy="30" r="${r}" fill="${fill}" transform="rotate(${angle} 150 150)"/>`;
    }

    return `
      
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="1.5"/>
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Needle) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <line x1="150" y1="75" x2="150" y2="155" stroke="${colors.hourHand}" stroke-width="4.5" stroke-linecap="round" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Needle) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <line x1="150" y1="40" x2="150" y2="155" stroke="${colors.minuteHand}" stroke-width="2.8" stroke-linecap="round" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand (Slender Needle) -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="30" x2="150" y2="175" stroke="${colors.secondHand}" stroke-width="1.4" stroke-linecap="round"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="4" fill="${colors.centerCap}"/>
    
    `;
  }
};
