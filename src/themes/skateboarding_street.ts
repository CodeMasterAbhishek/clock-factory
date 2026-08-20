import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const skateboarding_streetTheme: ClockThemeRenderer = {
  name: 'skateboarding_street',
  description: 'Concrete bowl skate park texture with skate deck silhouette and urethane wheels',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#000000" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="skateboarding_street_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="skate_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="skate_concrete" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#64748b"/>
          <stop offset="70%" stop-color="#334155"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#skate_concrete)" stroke="#f59e0b" stroke-width="3"/>
      <g clip-path="url(#skate_dial_clip)">
        <!-- Skateboard Deck Silhouette (Center) -->
        <g transform="translate(150, 150) rotate(-35)">
          <rect x="-18" y="-75" width="36" height="150" rx="18" fill="#f59e0b" stroke="#000000" stroke-width="2"/>
          <!-- Griptape Stripe -->
          <line x1="-18" y1="0" x2="18" y2="0" stroke="#000000" stroke-width="4"/>
          <!-- Trucks & Wheels -->
          <rect x="-24" y="-50" width="48" height="6" fill="#94a3b8"/>
          <circle cx="-24" cy="-47" r="5" fill="#ef4444"/>
          <circle cx="24" cy="-47" r="5" fill="#ef4444"/>
          <rect x="-24" y="44" width="48" height="6" fill="#94a3b8"/>
          <circle cx="-24" cy="47" r="5" fill="#ef4444"/>
          <circle cx="24" cy="47" r="5" fill="#ef4444"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#000000" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fde047" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#000000" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#f59e0b"/>
      </g>
    
    `;
  }
};
