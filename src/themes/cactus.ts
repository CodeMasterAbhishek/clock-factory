import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cactusTheme: ClockThemeRenderer = {
  name: 'cactus',
  description: 'Majestic Sonoran desert sunset with towering Saguaro cactus, blooming magenta flowers, and terracotta canyon dunes',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<polygon points="150,12 153,18 147,18" fill="#15803d" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="cactus_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="desert_sunset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ea580c"/>
          <stop offset="35%" stop-color="#f97316"/>
          <stop offset="65%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#fed7aa"/>
        </linearGradient>
        <linearGradient id="saguaro_skin" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#14532d"/>
          <stop offset="35%" stop-color="#16a34a"/>
          <stop offset="70%" stop-color="#22c55e"/>
          <stop offset="100%" stop-color="#15803d"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#desert_sunset)" stroke="#ea580c" stroke-width="2.5"/>

      <g clip-path="url(#cactus_dial_clip)">
        <!-- Radiant Desert Sun in Sky -->
        <circle cx="150" cy="80" r="42" fill="#ffffff" opacity="0.9"/>
        <circle cx="150" cy="80" r="54" fill="#fef08a" opacity="0.3"/>

        <!-- Distant Mesa & Sand Dunes -->
        <!-- Layer 1: Mesa Silhouette (Background) -->
        <polygon points="20,240 60,185 130,185 160,240" fill="#c2410c" opacity="0.5"/>
        <polygon points="170,240 205,195 260,195 285,240" fill="#c2410c" opacity="0.5"/>
        <!-- Layer 2: Rolling Terracotta Sand Dunes -->
        <path d="M 0 220 Q 80 205 160 225 T 300 215 L 300 300 L 0 300 Z" fill="#9a3412"/>
        <path d="M 0 240 Q 110 225 210 245 T 300 238 L 300 300 L 0 300 Z" fill="#7c2d12"/>

        <!-- Soaring Desert Hawk Silhouette -->
        <path d="M 215 55 Q 225 48 235 55 Q 245 48 255 55 Q 242 58 235 54 Q 228 58 215 55 Z" fill="#451a03"/>

        <!-- Towering Sonoran Saguaro Cactus (Organic Fluted Body & Arms) -->
        <g stroke="#14532d" stroke-width="1.2">
          <!-- Left Arm Branch -->
          <path d="M 135 155 Q 85 155 85 125 L 85 92 Q 85 82 98 82 Q 110 82 110 92 L 110 135 Q 110 142 135 142 Z" fill="url(#saguaro_skin)"/>
          <!-- Right Arm Branch -->
          <path d="M 165 175 Q 215 175 215 145 L 215 110 Q 215 100 202 100 Q 190 100 190 110 L 190 155 Q 190 162 165 162 Z" fill="url(#saguaro_skin)"/>
          <!-- Main Central Trunk -->
          <rect x="136" y="55" width="28" height="200" rx="14" fill="url(#saguaro_skin)"/>

          <!-- Vertical Rib Fluting Contours -->
          <g stroke="#14532d" stroke-width="1" opacity="0.6">
            <line x1="143" y1="58" x2="143" y2="255"/>
            <line x1="150" y1="55" x2="150" y2="255"/>
            <line x1="157" y1="58" x2="157" y2="255"/>
            <!-- Left Arm Ribs -->
            <line x1="92" y1="85" x2="92" y2="135"/>
            <line x1="102" y1="85" x2="102" y2="135"/>
            <!-- Right Arm Ribs -->
            <line x1="196" y1="102" x2="196" y2="155"/>
            <line x1="208" y1="102" x2="208" y2="155"/>
          </g>

          <!-- Blooming Magenta Cactus Flowers (Top Crowns) -->
          <!-- Top Main Flower -->
          <g transform="translate(150, 52) scale(0.8)">
            <circle cx="-6" cy="-4" r="5" fill="#f43f5e"/><circle cx="6" cy="-4" r="5" fill="#f43f5e"/><circle cx="0" cy="-8" r="5.5" fill="#fb7185"/><circle cx="0" cy="-2" r="3.5" fill="#fde047"/>
          </g>
          <!-- Left Arm Flower -->
          <g transform="translate(98, 80) scale(0.65)">
            <circle cx="-5" cy="-3" r="4.5" fill="#f43f5e"/><circle cx="5" cy="-3" r="4.5" fill="#f43f5e"/><circle cx="0" cy="-6" r="5" fill="#fb7185"/><circle cx="0" cy="-1" r="3" fill="#fde047"/>
          </g>
          <!-- Right Arm Flower -->
          <g transform="translate(202, 98) scale(0.65)">
            <circle cx="-5" cy="-3" r="4.5" fill="#f43f5e"/><circle cx="5" cy="-3" r="4.5" fill="#f43f5e"/><circle cx="0" cy="-6" r="5" fill="#fb7185"/><circle cx="0" cy="-1" r="3" fill="#fde047"/>
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
          <polygon points="146,150 154,150 150,75" fill="#7c2d12" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="75" r="3.5" fill="#f97316"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#15803d" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="35" r="3" fill="#86efac"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f43f5e" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f43f5e"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#7c2d12" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#f97316"/>
      </g>
    `;
  }
};
