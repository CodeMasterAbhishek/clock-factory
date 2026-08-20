import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const aurora_tromsoTheme: ClockThemeRenderer = {
  name: 'aurora_tromso',
  description: 'Majestic Arctic Aurora Borealis glowing across snowy Norwegian fjords in Tromsø with cozy illuminated rorbu cabin and starry polar night',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#34d399" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="aurora_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="arctic_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="40%" stop-color="#091428"/>
          <stop offset="75%" stop-color="#0c2340"/>
          <stop offset="100%" stop-color="#042f2e"/>
        </linearGradient>
        <linearGradient id="aurora_ribbon_1" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#34d399" stop-opacity="0.1"/>
          <stop offset="35%" stop-color="#10b981" stop-opacity="0.85"/>
          <stop offset="70%" stop-color="#38bdf8" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#818cf8" stop-opacity="0.1"/>
        </linearGradient>
        <linearGradient id="aurora_ribbon_2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#818cf8" stop-opacity="0.1"/>
          <stop offset="40%" stop-color="#a855f7" stop-opacity="0.7"/>
          <stop offset="75%" stop-color="#34d399" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0.1"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#arctic_sky)" stroke="#10b981" stroke-width="2.5"/>

      <g clip-path="url(#aurora_dial_clip)">
        <!-- Twinkling Arctic Stars in Midnight Polar Sky -->
        <g fill="#ffffff">
          <circle cx="45" cy="55" r="1.2"/><circle cx="85" cy="38" r="1.5"/><circle cx="120" cy="65" r="1"/><circle cx="180" cy="42" r="1.5"/>
          <circle cx="215" cy="68" r="1.2"/><circle cx="255" cy="48" r="1.5"/><circle cx="265" cy="85" r="1"/><circle cx="35" cy="95" r="1.5"/>
        </g>

        <!-- Ethereal Swirling Aurora Borealis Curtains (Curving across the sky) -->
        <!-- Curtain Ribbon 1 (Vibrant Emerald & Cyan) -->
        <path d="M 15 110 C 65 35 125 55 185 30 C 235 15 265 65 285 50 L 285 75 C 255 85 225 35 175 55 C 115 80 55 60 15 135 Z" fill="url(#aurora_ribbon_1)"/>
        
        <!-- Curtain Ribbon 2 (Ethereal Violet & Neon Green Veil) -->
        <path d="M 25 85 C 75 120 135 75 195 95 C 245 110 270 70 285 85 L 285 105 C 265 90 235 130 185 115 C 125 95 65 140 25 105 Z" fill="url(#aurora_ribbon_2)"/>

        <!-- Soft Auroral Vertical Ray Streaks -->
        <g stroke="#34d399" stroke-width="1.8" opacity="0.35">
          <line x1="85" y1="35" x2="85" y2="85"/>
          <line x1="110" y1="45" x2="110" y2="95"/>
          <line x1="150" y1="30" x2="150" y2="80"/>
          <line x1="195" y1="25" x2="195" y2="75"/>
          <line x1="230" y1="40" x2="230" y2="90"/>
        </g>

        <!-- Dramatic Snow-Capped Norwegian Fjord Mountains (Background & Mid-ground) -->
        <!-- Distant Peaks -->
        <polygon points="10,230 65,130 130,230" fill="#0f172a"/>
        <polygon points="65,130 50,155 80,155" fill="#f8fafc"/>
        <polygon points="170,230 235,125 290,230" fill="#0f172a"/>
        <polygon points="235,125 220,152 250,152" fill="#f8fafc"/>

        <!-- Foreground Fjord Crags -->
        <polygon points="0,255 105,145 200,255" fill="#1e293b"/>
        <polygon points="105,145 90,175 120,175" fill="#ffffff"/>
        <polygon points="135,255 210,160 290,255" fill="#1e293b"/>
        <polygon points="210,160 195,185 225,185" fill="#ffffff"/>

        <!-- Calm Reflective Fjord Waters (Lower Lagoon) -->
        <path d="M 0 235 Q 150 225 300 235 L 300 300 L 0 300 Z" fill="#042f2e"/>
        <path d="M 0 248 Q 150 238 300 248 L 300 300 L 0 300 Z" fill="#022c22"/>
        <!-- Green Aurora Reflection on Water -->
        <path d="M 60 240 Q 150 232 240 240 T 290 270 L 10 270 Z" fill="#10b981" opacity="0.25"/>

        <!-- Cozy Traditional Red Norwegian Rorbu Cabin (Tromsø Shoreline) -->
        <g transform="translate(150, 242)">
          <!-- Wooden Stilts over Water -->
          <line x1="-14" y1="12" x2="-14" y2="24" stroke="#451a03" stroke-width="2.5"/>
          <line x1="14" y1="12" x2="14" y2="24" stroke="#451a03" stroke-width="2.5"/>
          <!-- Red Cabin Body -->
          <rect x="-18" y="-2" width="36" height="16" fill="#dc2626" stroke="#991b1b" stroke-width="1"/>
          <!-- Snow-Covered Gable Roof -->
          <polygon points="0,-14 -22,-2 22,-2" fill="#ffffff" stroke="#e2e8f0" stroke-width="1"/>
          <!-- Cozy Glowing Warm Yellow Window -->
          <rect x="-10" y="2" width="7" height="7" rx="1" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8"/>
          <rect x="3" y="2" width="7" height="7" rx="1" fill="#fef08a" stroke="#ca8a04" stroke-width="0.8"/>
          <!-- Chimney & Warm Smoke -->
          <rect x="8" y="-12" width="4" height="6" fill="#78716c"/>
          <circle cx="10" cy="-16" r="2.5" fill="#ffffff" opacity="0.6"/>
          <circle cx="12" cy="-22" r="3.5" fill="#ffffff" opacity="0.4"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#042f2e" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f43f5e" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f43f5e"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#042f2e" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#34d399"/>
      </g>
    `;
  }
};
