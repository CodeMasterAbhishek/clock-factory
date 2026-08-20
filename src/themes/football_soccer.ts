import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const football_soccerTheme: ClockThemeRenderer = {
  name: 'football_soccer',
  description: 'Lawn-striped emerald stadium turf with white penalty box markings and central 3D stitched soccer ball',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#ffffff" stroke="#14532d" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="football_soccer_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="soccer_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="soccer_ball_3d" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="#e2e8f0"/>
          <stop offset="100%" stop-color="#94a3b8"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="#15803d" stroke="#14532d" stroke-width="3"/>
      <g clip-path="url(#soccer_dial_clip)">
        <!-- Alternating Mown Grass Stripes -->
        <rect x="0" y="30" width="300" height="40" fill="#16a34a" opacity="0.45"/>
        <rect x="0" y="110" width="300" height="40" fill="#16a34a" opacity="0.45"/>
        <rect x="0" y="190" width="300" height="40" fill="#16a34a" opacity="0.45"/>
        <rect x="0" y="270" width="300" height="40" fill="#16a34a" opacity="0.45"/>
        <!-- Pitch Markings -->
        <g stroke="#ffffff" stroke-width="2.5" fill="none">
          <line x1="0" y1="150" x2="300" y2="150"/>
          <circle cx="150" cy="150" r="45"/>
          <rect x="80" y="0" width="140" height="55"/>
          <rect x="105" y="0" width="90" height="25"/>
          <rect x="80" y="245" width="140" height="55"/>
          <rect x="105" y="275" width="90" height="25"/>
        </g>
        <!-- 3D Stitched Soccer Ball (Center) -->
        <g transform="translate(150, 150)">
          <circle cx="0" cy="0" r="32" fill="url(#soccer_ball_3d)" stroke="#0f172a" stroke-width="1.5"/>
          <!-- Black Central Pentagon -->
          <polygon points="0,-12 11,-4 7,10 -7,10 -11,-4" fill="#0f172a"/>
          <!-- Stitched Lines Radiating to Hexagons -->
          <g stroke="#0f172a" stroke-width="1.5">
            <line x1="0" y1="-12" x2="0" y2="-28"/>
            <line x1="11" y1="-4" x2="26" y2="-10"/>
            <line x1="7" y1="10" x2="18" y2="24"/>
            <line x1="-7" y1="10" x2="-18" y2="24"/>
            <line x1="-11" y1="-4" x2="-26" y2="-10"/>
          </g>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#ffffff" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#facc15"/>
      </g>
    
    `;
  }
};
