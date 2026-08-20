import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const bamboo_zenTheme: ClockThemeRenderer = {
  name: 'bamboo_zen',
  description: 'Japanese Zen rock garden (Karesansui) with concentric raked gravel ripples, smooth river stones, and emerald bamboo stalks',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<circle cx="150" cy="16" r="3" fill="#047857" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="bamboo_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="zen_sand" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fdfbf7"/>
          <stop offset="60%" stop-color="#f5f0e8"/>
          <stop offset="100%" stop-color="#e7dfd5"/>
        </linearGradient>
        <linearGradient id="bamboo_grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#047857"/>
          <stop offset="40%" stop-color="#10b981"/>
          <stop offset="80%" stop-color="#34d399"/>
          <stop offset="100%" stop-color="#059669"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#zen_sand)" stroke="#059669" stroke-width="2.5"/>

      <g clip-path="url(#bamboo_dial_clip)">
        <!-- Raked Zen Sand Ripples (Karesansui Concentric Sand Rings) -->
        <g stroke="#d6ccc2" stroke-width="1.8" fill="none" opacity="0.85">
          <!-- Concentric Ripple Rings radiating around Zen Stones -->
          <ellipse cx="140" cy="225" rx="85" ry="38"/>
          <ellipse cx="140" cy="225" rx="70" ry="30"/>
          <ellipse cx="140" cy="225" rx="55" ry="22"/>
          <ellipse cx="140" cy="225" rx="40" ry="15"/>
          <!-- Linear Raked Waves in Upper Garden -->
          <path d="M 30 75 Q 150 65 270 75"/>
          <path d="M 30 100 Q 150 90 270 100"/>
          <path d="M 30 125 Q 150 115 270 125"/>
        </g>

        <!-- Natural Weathered Zen River Stones with Moss Highlights -->
        <g transform="translate(0, 0)">
          <!-- Main Center Stone -->
          <ellipse cx="135" cy="228" rx="26" ry="16" fill="#475569" stroke="#334155" stroke-width="1.5"/>
          <ellipse cx="132" cy="225" rx="20" ry="11" fill="#64748b"/>
          <ellipse cx="128" cy="222" rx="10" ry="5" fill="#94a3b8" opacity="0.6"/>
          <!-- Moss on Stone -->
          <ellipse cx="122" cy="232" rx="8" ry="4" fill="#65a30d"/>
          
          <!-- Secondary Companion Stone (Right) -->
          <ellipse cx="168" cy="235" rx="18" ry="12" fill="#334155" stroke="#1e293b" stroke-width="1.2"/>
          <ellipse cx="166" cy="233" rx="13" ry="8" fill="#475569"/>
          <ellipse cx="162" cy="231" rx="6" ry="3" fill="#64748b" opacity="0.6"/>
          <!-- Moss on Companion Stone -->
          <ellipse cx="174" cy="238" rx="6" ry="3" fill="#65a30d"/>

          <!-- Small Accent Pebble (Front) -->
          <ellipse cx="148" cy="245" rx="10" ry="6" fill="#64748b" stroke="#475569" stroke-width="1"/>
          <ellipse cx="146" cy="243" rx="6" ry="3.5" fill="#94a3b8"/>
        </g>

        <!-- Emerald Bamboo Stalks (Left Flank) -->
        <g>
          <rect x="42" y="20" width="16" height="260" rx="3" fill="url(#bamboo_grad)" stroke="#047857" stroke-width="1"/>
          <!-- Node Rings -->
          <line x1="40" y1="85" x2="60" y2="85" stroke="#047857" stroke-width="3" stroke-linecap="round"/>
          <line x1="40" y1="165" x2="60" y2="165" stroke="#047857" stroke-width="3" stroke-linecap="round"/>
          <!-- Bamboo Leaves Fronds -->
          <path d="M 58 85 Q 90 75 105 92 Q 85 98 58 85 Z" fill="#10b981"/>
          <path d="M 58 88 Q 85 98 96 118 Q 78 112 58 88 Z" fill="#059669"/>
          <path d="M 58 165 Q 92 155 110 172 Q 88 178 58 165 Z" fill="#10b981"/>
        </g>

        <!-- Emerald Bamboo Stalks (Right Flank) -->
        <g>
          <rect x="238" y="20" width="18" height="260" rx="3" fill="url(#bamboo_grad)" stroke="#047857" stroke-width="1"/>
          <line x1="236" y1="105" x2="258" y2="105" stroke="#047857" stroke-width="3" stroke-linecap="round"/>
          <line x1="236" y1="190" x2="258" y2="190" stroke="#047857" stroke-width="3" stroke-linecap="round"/>
          <!-- Leaves -->
          <path d="M 238 105 Q 205 95 190 112 Q 212 118 238 105 Z" fill="#10b981"/>
          <path d="M 238 108 Q 210 118 198 138 Q 218 132 238 108 Z" fill="#059669"/>
          <path d="M 238 190 Q 202 180 185 198 Q 208 204 238 190 Z" fill="#10b981"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#047857" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="75" r="3.5" fill="#34d399"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#10b981" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="35" r="3" fill="#a7f3d0"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f59e0b" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f59e0b"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#047857" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#34d399"/>
      </g>
    `;
  }
};
