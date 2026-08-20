import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const venus_planetTheme: ClockThemeRenderer = {
  name: 'venus_planet',
  description: 'Veiled Venus showing ultraviolet atmospheric spectroscopy cloud swirls, golden-sulfuric acid wind belts, planetary Y-wave patterns, and dual polar vortices',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#facc15" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#d97706" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="venus_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="venus_globe_clip"><circle cx="150" cy="150" r="118"/></clipPath>
        <radialGradient id="venus_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#0a0802"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="venus_body" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#fef9c3"/>
          <stop offset="35%" stop-color="#fef08a"/>
          <stop offset="70%" stop-color="#facc15"/>
          <stop offset="90%" stop-color="#ca8a04"/>
          <stop offset="100%" stop-color="#713f12"/>
        </radialGradient>
        <radialGradient id="venus_limb" cx="42%" cy="42%" r="58%">
          <stop offset="80%" stop-color="#facc15" stop-opacity="0"/>
          <stop offset="94%" stop-color="#fef08a" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#ca8a04" stop-opacity="0.85"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Cosmic Deep Space -->
      <circle cx="150" cy="150" r="145" fill="url(#venus_cosmos)" stroke="#d97706" stroke-width="2.5"/>

      <g clip-path="url(#venus_dial_clip)">
        <!-- Distant Deep Space Stars -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>

        <!-- Main Venus Globe Sphere (R = 118 at Center 150, 150) -->
        <circle cx="150" cy="150" r="118" fill="url(#venus_body)"/>

        <!-- Sulfuric Acid Cloud Spectroscopy & Y-Wave Cloud Features (Clipped inside Globe) -->
        <g clip-path="url(#venus_globe_clip)">
          <!-- Planetary-Scale Equatorial Y-Wave Cloud Feature (Iconic Ultraviolet Venus Marking) -->
          <g stroke="#a16207" stroke-width="4.5" fill="none" opacity="0.65" stroke-linecap="round">
            <!-- Central Equatorial Stem -->
            <path d="M 68 150 Q 125 145 155 150"/>
            <!-- Upper Diagonal Arm spreading to North Pole -->
            <path d="M 155 150 Q 195 120 235 75"/>
            <!-- Lower Diagonal Arm spreading to South Pole -->
            <path d="M 155 150 Q 195 180 235 225"/>
          </g>

          <!-- Swirling Golden & Amber Sulfuric Acid Wind Bands -->
          <path d="M 45 78 Q 150 95 255 78 L 260 92 Q 150 110 40 92 Z" fill="#ca8a04" opacity="0.6"/>
          <path d="M 34 118 Q 150 135 266 118 L 268 132 Q 150 150 32 132 Z" fill="#eab308" opacity="0.7"/>
          <path d="M 32 168 Q 150 182 268 168 L 265 186 Q 150 200 35 186 Z" fill="#ca8a04" opacity="0.65"/>
          <path d="M 45 220 Q 150 235 255 220 L 245 238 Q 150 252 55 238 Z" fill="#a16207" opacity="0.75"/>

          <!-- High-Altitude White Ammonia / Haze Bright Features -->
          <g fill="#ffffff" opacity="0.7">
            <ellipse cx="115" cy="98" rx="28" ry="8" transform="rotate(-15 115 98)"/>
            <ellipse cx="185" cy="138" rx="34" ry="10" transform="rotate(10 185 138)"/>
            <ellipse cx="105" cy="188" rx="25" ry="7" transform="rotate(20 105 188)"/>
          </g>

          <!-- Dual Polar Atmospheric Vortices -->
          <!-- North Polar Vortex -->
          <g transform="translate(150, 46)">
            <ellipse cx="0" cy="0" rx="18" ry="8" fill="none" stroke="#a16207" stroke-width="2"/>
            <circle cx="0" cy="0" r="3.5" fill="#713f12"/>
          </g>
          <!-- South Polar Vortex -->
          <g transform="translate(150, 254)">
            <ellipse cx="0" cy="0" rx="18" ry="8" fill="none" stroke="#a16207" stroke-width="2"/>
            <circle cx="0" cy="0" r="3.5" fill="#713f12"/>
          </g>

          <!-- Night Shadow Terminator (Right Limb) -->
          <path d="M 180 32 C 225 75 225 225 180 268 L 268 268 L 268 32 Z" fill="#000000" opacity="0.55"/>
        </g>

        <!-- Venus Atmospheric Limb Glow -->
        <circle cx="150" cy="150" r="118" fill="url(#venus_limb)" pointer-events="none"/>
        <circle cx="150" cy="150" r="118" fill="none" stroke="#fde047" stroke-width="1.8" opacity="0.8"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#a16207" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#ca8a04" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#fde047"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#a16207" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f59e0b" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f59e0b"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#713f12" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#facc15"/>
      </g>
    `;
  }
};
