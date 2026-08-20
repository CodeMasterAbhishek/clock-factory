import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const sunTheme: ClockThemeRenderer = {
  name: 'sun',
  description: 'Radiant smiling golden sun in an azure sky with fluffy white cloud companions and golden sunbeam rays',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#ca8a04" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="sun_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="azure_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#7dd3fc"/>
          <stop offset="100%" stop-color="#bae6fd"/>
        </linearGradient>
        <linearGradient id="golden_sun_body" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="40%" stop-color="#fef08a"/>
          <stop offset="80%" stop-color="#facc15"/>
          <stop offset="100%" stop-color="#f59e0b"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#azure_sky)" stroke="#0284c7" stroke-width="2.5"/>

      <g clip-path="url(#sun_dial_clip)">
        <!-- 16 Alternating Curved Golden Sun Rays radiating around dial -->
        <g fill="#f59e0b" opacity="0.85">
          ${Array.from({length: 16}).map((_, i) => {
            const angle = (i * 360) / 16;
            return i % 2 === 0
              ? `<polygon points="150,30 158,80 142,80" transform="rotate(${angle} 150 150)"/>`
              : `<path d="M 150 35 Q 162 58 150 82 Q 138 58 150 35 Z" transform="rotate(${angle} 150 150)"/>`;
          }).join('')}
        </g>

        <!-- Radiant Halo Glow Ring -->
        <circle cx="150" cy="150" r="76" fill="none" stroke="#fef08a" stroke-width="3" opacity="0.6"/>

        <!-- Smiling Golden Sun Face (Center Medallion with clean canvas) -->
        <circle cx="150" cy="150" r="62" fill="url(#golden_sun_body)" stroke="#d97706" stroke-width="2"/>

        <!-- Cute Kawaii Happy Sun Face (Subtly Placed with High Clarity) -->
        <g>
          <!-- Happy Anime Eyes (Closed Joyful Arches) -->
          <path d="M 125 140 Q 132 130 139 140" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>
          <path d="M 161 140 Q 168 130 175 140" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>

          <!-- Warm Cheerful Smile -->
          <path d="M 140 162 Q 150 174 160 162" stroke="#78350f" stroke-width="3" fill="none" stroke-linecap="round"/>

          <!-- Rosy Sunshine Blushing Cheeks -->
          <circle cx="122" cy="155" r="7.5" fill="#f87171" opacity="0.65"/>
          <circle cx="178" cy="155" r="7.5" fill="#f87171" opacity="0.65"/>
        </g>

        <!-- Fluffy White Cloud Companions (Lower Left & Right Corners) -->
        <!-- Left Cloud -->
        <g fill="#ffffff" stroke="#bae6fd" stroke-width="1" opacity="0.95">
          <circle cx="45" cy="235" r="22"/>
          <circle cx="70" cy="225" r="28"/>
          <circle cx="95" cy="235" r="20"/>
          <circle cx="68" cy="245" r="16"/>
        </g>
        <!-- Right Cloud -->
        <g fill="#ffffff" stroke="#bae6fd" stroke-width="1" opacity="0.95">
          <circle cx="205" cy="235" r="20"/>
          <circle cx="230" cy="225" r="28"/>
          <circle cx="255" cy="235" r="22"/>
          <circle cx="232" cy="245" r="16"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#b45309" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="75" r="3.5" fill="#fef08a"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#d97706" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="35" r="3" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#b45309" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#fde047"/>
      </g>
    `;
  }
};
