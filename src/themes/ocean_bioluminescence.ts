import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const ocean_bioluminescenceTheme: ClockThemeRenderer = {
  name: 'ocean_bioluminescence',
  description: 'Glowing neon-blue bioluminescent waves crashing on midnight ocean sands under a starry sky',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#22d3ee" stroke="#ffffff" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <filter id="blur_filter" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter>
        <clipPath id="ocean_bioluminescence_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="bio_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="bio_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="50%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#042f2e"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#bio_sky)" stroke="#06b6d4" stroke-width="2.5"/>
      <g clip-path="url(#bio_dial_clip)">
        <!-- Distant Stars -->
        <g fill="#ffffff" opacity="0.8">
          <circle cx="50" cy="40" r="1"/><circle cx="120" cy="30" r="1.2"/><circle cx="220" cy="45" r="1"/>
        </g>
        <!-- Ocean Water Base -->
        <path d="M 0 140 C 90 120 180 150 300 135 L 300 300 L 0 300 Z" fill="#0f172a"/>
        <!-- Glowing Electric Cyan Wave Crests -->
        <path d="M 10 170 Q 80 150 150 170 T 290 165" stroke="#06b6d4" stroke-width="6" fill="none" opacity="0.9" filter="url(#blur_filter)"/>
        <path d="M 10 170 Q 80 150 150 170 T 290 165" stroke="#a5f3fc" stroke-width="2" fill="none"/>
        <path d="M 20 215 Q 110 190 190 215 T 290 205" stroke="#22d3ee" stroke-width="8" fill="none" opacity="0.85" filter="url(#blur_filter)"/>
        <path d="M 20 215 Q 110 190 190 215 T 290 205" stroke="#ffffff" stroke-width="2.5" fill="none"/>
        <!-- Shoreline Foam Glow -->
        <path d="M 0 260 Q 120 240 240 260 T 300 250" stroke="#06b6d4" stroke-width="5" fill="none" opacity="0.8"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#020617" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#020617" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#a5f3fc" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#22d3ee" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#22d3ee" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#22d3ee"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#020617" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#22d3ee"/>
      </g>
    
    `;
  }
};
