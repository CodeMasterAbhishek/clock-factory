import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const jupiter_planetTheme: ClockThemeRenderer = {
  name: 'jupiter_planet',
  description: 'Great Gas Giant Jupiter showing Juno-quality turbulent atmospheric cloud belts, cyclonic storms, and the iconic swirling Great Red Spot anticyclone',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#d97706" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="jupiter_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="jupiter_globe_clip"><circle cx="150" cy="150" r="118"/></clipPath>
        <radialGradient id="jupiter_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#090602"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="jupiter_base" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#fef3c7"/>
          <stop offset="35%" stop-color="#fde68a"/>
          <stop offset="70%" stop-color="#d97706"/>
          <stop offset="90%" stop-color="#92400e"/>
          <stop offset="100%" stop-color="#2a0d02"/>
        </radialGradient>
        <radialGradient id="grs_gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#dc2626"/>
          <stop offset="50%" stop-color="#b91c1c"/>
          <stop offset="85%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>
        <radialGradient id="jupiter_limb" cx="42%" cy="42%" r="58%">
          <stop offset="80%" stop-color="#f59e0b" stop-opacity="0"/>
          <stop offset="94%" stop-color="#fde68a" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#d97706" stop-opacity="0.8"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Deep Cosmos -->
      <circle cx="150" cy="150" r="145" fill="url(#jupiter_cosmos)" stroke="#d97706" stroke-width="2.5"/>

      <g clip-path="url(#jupiter_dial_clip)">
        <!-- Distant Stars & Galilean Moons (Io, Europa, Ganymede, Callisto) -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>
        <!-- Galilean Moons -->
        <circle cx="55" cy="85" r="4.5" fill="#facc15" stroke="#ca8a04" stroke-width="0.6"/> <!-- Volcanic Io -->
        <circle cx="75" cy="245" r="3.8" fill="#e0f2fe" stroke="#38bdf8" stroke-width="0.6"/> <!-- Icy Europa -->
        <circle cx="245" cy="78" r="5.5" fill="#94a3b8" stroke="#64748b" stroke-width="0.6"/> <!-- Ganymede -->
        <circle cx="252" cy="235" r="4.8" fill="#78716c" stroke="#57534e" stroke-width="0.6"/> <!-- Callisto -->

        <!-- Main Jupiter Globe Sphere (R = 118 at Center 150, 150) -->
        <circle cx="150" cy="150" r="118" fill="url(#jupiter_base)"/>

        <!-- Jovian Atmospheric Cloud Belts & Zones (Clipped inside Globe) -->
        <g clip-path="url(#jupiter_globe_clip)">
          <!-- 1. North Polar Hood & North Temperate Belt (NTB) -->
          <path d="M 65 65 Q 150 78 235 65 L 255 45 Q 150 55 45 45 Z" fill="#92400e" opacity="0.8"/>
          <path d="M 45 85 Q 150 98 255 85 L 260 72 Q 150 82 40 72 Z" fill="#78350f" opacity="0.85"/>

          <!-- 2. North Equatorial Belt (NEB - Rich Mahogany Red / Rust Swirls) -->
          <g fill="#b45309">
            <path d="M 34 112 Q 95 105 150 118 Q 205 110 266 112 L 268 128 Q 205 135 150 125 Q 95 138 32 128 Z"/>
          </g>
          <!-- Turbulent White Ammonia Plumes in NEB -->
          <path d="M 75 116 Q 105 108 135 120" stroke="#ffffff" stroke-width="2.2" fill="none" opacity="0.8"/>
          <path d="M 175 118 Q 215 112 245 124" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.75"/>

          <!-- 3. Equatorial Zone (EZ - Warm Cream & Butterscotch Plumes) -->
          <path d="M 32 135 Q 150 148 268 135 L 268 155 Q 150 165 32 155 Z" fill="#fef3c7" opacity="0.85"/>
          <!-- Equatorial Festoon Wave Loops (Blue-Grey Methane Swirls) -->
          <path d="M 65 136 Q 85 152 105 138 Q 125 155 145 140 Q 165 158 185 142 Q 205 158 225 140" stroke="#64748b" stroke-width="2.2" fill="none" opacity="0.7"/>

          <!-- 4. South Equatorial Belt (SEB - Host of Great Red Spot) -->
          <g fill="#92400e">
            <path d="M 32 165 Q 95 158 150 170 Q 205 162 268 165 L 265 195 Q 205 205 150 192 Q 95 205 35 195 Z"/>
          </g>

          <!-- 5. Iconic Great Red Spot (Anticyclonic Super-Storm Oval: Center-Right SEB) -->
          <g transform="translate(195, 185)">
            <!-- Outer Turbulent Wind Ring & Hollow Bay -->
            <ellipse cx="0" cy="0" rx="30" ry="18" fill="#fef3c7" opacity="0.85"/>
            <!-- Main Oval Storm Core -->
            <ellipse cx="0" cy="0" rx="24" ry="14" fill="url(#grs_gradient)" stroke="#7f1d1d" stroke-width="1.2"/>
            <!-- Internal Counter-Clockwise Spiral Vortex Lines -->
            <path d="M -16 0 Q -8 -8 4 -6 Q 16 -4 14 4 Q 10 10 -4 8 Q -12 6 -10 0" stroke="#fca5a5" stroke-width="1.8" fill="none" opacity="0.85"/>
            <circle cx="-1" cy="0" r="3.5" fill="#f87171"/>
            <!-- Surrounding Peripheral Turbulence Eddies -->
            <path d="M -28 4 Q -35 -4 -42 2" stroke="#ea580c" stroke-width="1.8" fill="none"/>
            <circle cx="28" cy="-4" r="3" fill="#ffffff" opacity="0.9"/>
          </g>

          <!-- White Oval Cyclones (String of Pearls in South Temperate Belt) -->
          <g fill="#ffffff" opacity="0.9">
            <ellipse cx="78" cy="215" rx="7" ry="4"/>
            <ellipse cx="112" cy="218" rx="6" ry="3.5"/>
            <ellipse cx="152" cy="216" rx="6.5" ry="4"/>
          </g>

          <!-- 6. South Polar Hood & Polar Cyclones -->
          <path d="M 45 228 Q 150 242 255 228 L 245 255 Q 150 265 55 255 Z" fill="#78350f" opacity="0.8"/>

          <!-- Night Terminator Shadow (Right Limb) -->
          <path d="M 180 32 C 225 75 225 225 180 268 L 268 268 L 268 32 Z" fill="#000000" opacity="0.55"/>
        </g>

        <!-- Jovian Atmospheric Edge Glow -->
        <circle cx="150" cy="150" r="118" fill="url(#jupiter_limb)" pointer-events="none"/>
        <circle cx="150" cy="150" r="118" fill="none" stroke="#f59e0b" stroke-width="1.8" opacity="0.75"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#92400e" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#d97706" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#f59e0b"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#92400e" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#fde68a" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#f59e0b"/>
      </g>
    `;
  }
};
