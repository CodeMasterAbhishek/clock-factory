import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const alienTheme: ClockThemeRenderer = {
  name: 'alien',
  description: 'Extraterrestrial glyphs with glowing cyan polygon dial',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        // Alien glyphs as ticks
        for (let i = 0; i < 12; i++) {
          const type = i % 3;
          let glyph = '';
          if (type === 0) glyph = `<circle cx="150" cy="40" r="4" fill="none" stroke="#22d3ee" stroke-width="2"/><line x1="150" y1="36" x2="150" y2="44" stroke="#22d3ee" stroke-width="2"/>`;
          else if (type === 1) glyph = `<polygon points="146,38 154,38 150,44" fill="#22d3ee"/>`;
          else glyph = `<path d="M 145 42 L 150 38 L 155 42 L 155 46 L 145 46 Z" fill="none" stroke="#22d3ee" stroke-width="2"/>`;
          ticks += `<g transform="rotate(${i*30} 150 150)">${glyph}</g>`;
        }
    
    return `
      
      
      <defs>
        <clipPath id="alien_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <filter id="glow_alien"><feGaussianBlur stdDeviation="3" result="coloredBlur"/><feMerge><feMergeNode in="coloredBlur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
      </defs>
      <!-- Octagon Dial -->
      <polygon points="90,10 210,10 290,90 290,210 210,290 90,290 10,210 10,90" fill="#0f172a" stroke="#06b6d4" stroke-width="3" filter="url(#glow_alien)"/>
      <polygon points="100,30 200,30 270,100 270,200 200,270 100,270 30,200 30,100" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.5"/>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <!-- Segmented Hands -->
      <path d="M 147 160 L 153 160 L 151 90 L 155 85 L 145 70 L 149 90 Z" fill="#3b82f6" filter="url(#glow_alien)" transform="rotate(${time.hourAngle} 150 150)"/>
      <path d="M 148 160 L 152 160 L 151 60 L 156 50 L 144 35 L 149 60 Z" fill="#22d3ee" filter="url(#glow_alien)" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `<circle cx="150" cy="25" r="5" fill="#a5f3fc" filter="url(#glow_alien)" transform="rotate(${time.secondAngle} 150 150)"/><line x1="150" y1="150" x2="150" y2="30" stroke="#a5f3fc" stroke-width="1" transform="rotate(${time.secondAngle} 150 150)"/>` : ''}
      <polygon points="140,150 150,140 160,150 150,160" fill="#a5f3fc" filter="url(#glow_alien)"/>
    
    
    `;
  }
};
