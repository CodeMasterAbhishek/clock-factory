import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const mountain_sunriseTheme: ClockThemeRenderer = {
  name: 'mountain_sunrise',
  description: 'Breathtaking Alpine Alpenglow sunrise over multi-tier jagged mountain ranges, glowing sunbeams, and evergreen valley pines',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<circle cx="150" cy="16" r="3" fill="#e11d48" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="mountain_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="alpenglow_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="35%" stop-color="#fb7185"/>
          <stop offset="70%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#fed7aa"/>
        </linearGradient>
        <linearGradient id="sun_glow_rad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#fef08a"/>
          <stop offset="75%" stop-color="#fde047" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#fb923c" stop-opacity="0"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#alpenglow_sky)" stroke="#e11d48" stroke-width="2.5"/>

      <g clip-path="url(#mountain_dial_clip)">
        <!-- Radiant Sunrise Sun behind peaks -->
        <circle cx="150" cy="115" r="48" fill="url(#sun_glow_rad)"/>
        <circle cx="150" cy="115" r="24" fill="#ffffff" opacity="0.95"/>

        <!-- Tier 1: Distant Purple-Haze High Peaks (Background) -->
        <polygon points="10,240 65,115 130,240" fill="#8b5cf6" opacity="0.45"/>
        <polygon points="170,240 235,120 290,240" fill="#8b5cf6" opacity="0.45"/>
        <polygon points="105,240 150,135 195,240" fill="#a855f7" opacity="0.4"/>

        <!-- Tier 2: Mid-Ground Craggy Violet-Indigo Ridge -->
        <polygon points="0,260 85,135 180,260" fill="#475569"/>
        <polygon points="85,135 180,260 85,260" fill="#334155"/>
        <!-- Snow Cap 1 -->
        <path d="M 85 135 L 68 165 Q 85 158 100 168 Z" fill="#ffffff"/>
        <polygon points="120,260 215,145 300,260" fill="#475569"/>
        <polygon points="215,145 300,260 215,260" fill="#1e293b"/>
        <!-- Snow Cap 2 -->
        <path d="M 215 145 L 198 175 Q 215 168 230 178 Z" fill="#ffffff"/>

        <!-- Tier 3: Dominant Foreground Rocky Peak (Sharp Dramatic Alpenglow Face) -->
        <!-- Sunlit Face (Warm Rose Tint) -->
        <polygon points="150,150 20,290 150,290" fill="#1e293b"/>
        <!-- Shadow Crevasse Face -->
        <polygon points="150,150 150,290 280,290" fill="#0f172a"/>
        <!-- Snow Couloir on Foreground Peak -->
        <path d="M 150 150 L 138 185 Q 150 178 162 188 Z" fill="#ffffff"/>
        <path d="M 150 150 L 148 240 L 152 240 Z" fill="#cbd5e1" opacity="0.8"/>

        <!-- Layered Evergreen Forest Silhouettes along Valley Floor -->
        <g fill="#042f2e">
          <polygon points="30,295 15,255 45,255"/>
          <polygon points="65,295 50,250 80,250"/>
          <polygon points="105,295 92,260 118,260"/>
          <polygon points="195,295 182,260 208,260"/>
          <polygon points="235,295 220,250 250,250"/>
          <polygon points="270,295 255,255 285,255"/>
        </g>
        <path d="M 0 275 Q 75 265 150 275 T 300 270 L 300 300 L 0 300 Z" fill="#022c22"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#0f172a" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#f43f5e" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#fde047" stroke="#0f172a" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#ea580c" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#e11d48" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#e11d48" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#e11d48"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#fde047"/>
      </g>
    `;
  }
};
