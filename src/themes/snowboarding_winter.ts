import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const snowboarding_winterTheme: ClockThemeRenderer = {
  name: 'snowboarding_winter',
  description: 'Dramatic snow-covered Alpine peak with realistic glacial ridges, powder carving tracks, and evergreen pine forests',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<rect x="148" y="10" width="4" height="12" rx="2" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="3" fill="#ffffff" stroke="#0284c7" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="snow_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="alpine_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="45%" stop-color="#38bdf8"/>
          <stop offset="85%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#f0f9ff"/>
        </linearGradient>
        <linearGradient id="snow_sunlit" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="#f8fafc"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="snow_shadow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#94a3b8"/>
          <stop offset="50%" stop-color="#64748b"/>
          <stop offset="100%" stop-color="#334155"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Dial Outer Rim -->
      <circle cx="150" cy="150" r="145" fill="url(#alpine_sky)" stroke="#0284c7" stroke-width="2.5"/>

      <g clip-path="url(#snow_dial_clip)">
        <!-- Distant Alpine Mountain Peaks in Background -->
        <polygon points="30,220 85,110 145,220" fill="#60a5fa" opacity="0.35"/>
        <polygon points="175,220 225,125 285,220" fill="#60a5fa" opacity="0.35"/>

        <!-- Sun Glint on Summit -->
        <circle cx="148" cy="52" r="18" fill="#ffffff" opacity="0.4"/>

        <!-- Main Majestic Matterhorn Peak -->
        <!-- Light (Sunlit) Face -->
        <polygon points="148,50 35,235 152,235" fill="url(#snow_sunlit)"/>
        <!-- Shadow Ridge Face -->
        <polygon points="148,50 152,235 265,235" fill="url(#snow_shadow)"/>

        <!-- Craggy Rock Crevasse Shading & Couloirs -->
        <path d="M 148 50 L 152 110 L 145 155 L 154 195 L 152 235" stroke="#1e293b" stroke-width="2.5" fill="none" stroke-linejoin="round"/>
        <path d="M 148 50 L 138 95 L 120 160 L 95 235" stroke="#94a3b8" stroke-width="1.8" fill="none" opacity="0.6"/>
        <path d="M 152 110 L 175 145 L 205 210" stroke="#1e293b" stroke-width="2" fill="none" opacity="0.7"/>

        <!-- Graceful Powder Slope Carving Trails (Smooth Parallel Track Grooves) -->
        <path d="M 135 120 C 110 145 125 175 105 210" stroke="#bae6fd" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        <path d="M 138 122 C 113 147 128 177 108 212" stroke="#ffffff" stroke-width="1.5" fill="none" stroke-linecap="round"/>

        <!-- Dynamic Snowboarder Carving Silhouette (Descending the Powder Slope) -->
        <g transform="translate(108, 172) scale(0.65)" fill="#0f172a">
          <!-- Snowboard -->
          <path d="M -18 14 Q 0 16 18 12 Q 10 18 -16 18 Z" fill="#ef4444"/>
          <!-- Snow Spray -->
          <path d="M -18 14 Q -28 6 -32 -4 Q -22 8 -12 14 Z" fill="#ffffff" opacity="0.9"/>
          <!-- Rider Figure -->
          <ellipse cx="0" cy="2" rx="5" ry="8" transform="rotate(-25 0 2)"/>
          <circle cx="2" cy="-8" r="4.5" fill="#f59e0b"/>
          <!-- Arms for Balance -->
          <line x1="-8" y1="-2" x2="10" y2="4" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
        </g>

        <!-- Valley Evergreen Pine Forest at Base -->
        <!-- Back Pine Layer -->
        <g fill="#042f2e">
          <polygon points="40,265 25,225 55,225"/>
          <polygon points="75,265 60,230 90,230"/>
          <polygon points="120,265 108,235 132,235"/>
          <polygon points="180,265 168,235 192,235"/>
          <polygon points="225,265 210,225 240,225"/>
          <polygon points="260,265 245,230 275,230"/>
        </g>
        <!-- Valley Snow Floor -->
        <path d="M 0 245 Q 75 235 150 245 T 300 240 L 300 300 L 0 300 Z" fill="#e2e8f0"/>
        <path d="M 0 258 Q 75 248 150 258 T 300 252 L 300 300 L 0 300 Z" fill="#cbd5e1"/>

        <!-- Front Snow-Dusted Pine Trees -->
        <g fill="#065f46" stroke="#022c22" stroke-width="1">
          <!-- Left Pine -->
          <polygon points="50,235 30,270 70,270"/>
          <polygon points="50,220 36,250 64,250"/>
          <polygon points="50,208 42,232 58,232"/>
          <polygon points="50,208 45,220 55,220" fill="#ffffff"/>
          <!-- Right Pine -->
          <polygon points="245,235 225,270 265,270"/>
          <polygon points="245,220 231,250 259,250"/>
          <polygon points="245,208 237,232 253,232"/>
          <polygon points="245,208 240,220 250,220" fill="#ffffff"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Luminous Ice Axe Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <!-- Luminous Ice Axe Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#0284c7" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- High-Visibility Flare Red Second Hand -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
