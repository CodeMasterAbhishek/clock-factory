import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const neptune_planetTheme: ClockThemeRenderer = {
  name: 'neptune_planet',
  description: 'Deep Cobalt Azure Neptune ice giant showing supersonic methane wind streaks, the Great Dark Spot vortex, bright white cirrus clouds, and icy moon Triton',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#0284c7" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="neptune_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="neptune_globe_clip"><circle cx="150" cy="150" r="118"/></clipPath>
        <radialGradient id="neptune_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#03071e"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="neptune_body" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="35%" stop-color="#0284c7"/>
          <stop offset="75%" stop-color="#1d4ed8"/>
          <stop offset="95%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
        <radialGradient id="neptune_limb" cx="42%" cy="42%" r="58%">
          <stop offset="80%" stop-color="#38bdf8" stop-opacity="0"/>
          <stop offset="94%" stop-color="#7dd3fc" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.85"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#neptune_cosmos)" stroke="#0284c7" stroke-width="2.5"/>

      <g clip-path="url(#neptune_dial_clip)">
        <!-- Distant Stars & Retrograde Icy Moon Triton -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>
        <!-- Pink/Cyan Nitrogen Geyser Moon Triton (Top-Left) -->
        <g transform="translate(64, 62)">
          <circle cx="0" cy="0" r="7.5" fill="#bae6fd" stroke="#0284c7" stroke-width="0.8"/>
          <!-- Cantaloupe Terrain & Polar Cap -->
          <circle cx="0" cy="0" r="7.5" fill="#fbcfe8" opacity="0.45"/>
          <circle cx="0" cy="0" r="9" fill="#38bdf8" opacity="0.25"/>
        </g>

        <!-- Main Neptune Globe Sphere (R = 118 at Center 150, 150) -->
        <circle cx="150" cy="150" r="118" fill="url(#neptune_body)"/>

        <!-- Supersonic Methane Cloud Bands & Great Dark Spot (Clipped inside Globe) -->
        <g clip-path="url(#neptune_globe_clip)">
          <!-- Deep Cobalt & Royal Blue Atmospheric Latitudinal Bands -->
          <path d="M 45 75 Q 150 90 255 75 L 260 88 Q 150 102 40 88 Z" fill="#1e40af" opacity="0.7"/>
          <path d="M 34 115 Q 150 128 266 115 L 268 132 Q 150 145 32 132 Z" fill="#1d4ed8" opacity="0.8"/>
          <path d="M 32 165 Q 150 178 268 165 L 265 185 Q 150 198 35 185 Z" fill="#1e3a8a" opacity="0.75"/>
          <path d="M 45 220 Q 150 235 255 220 L 245 242 Q 150 255 55 242 Z" fill="#172554" opacity="0.85"/>

          <!-- Iconic Great Dark Spot (GDS Anticyclone Storm Vortex: Center-Left) -->
          <g transform="translate(108, 142)">
            <!-- Dark Storm Core Oval -->
            <ellipse cx="0" cy="0" rx="26" ry="15" fill="#0f172a" stroke="#020617" stroke-width="1.2"/>
            <ellipse cx="0" cy="0" rx="18" ry="9" fill="#020617"/>
            <!-- Surrounding Methane Cirrus Cloud Halo ("Scooter") -->
            <path d="M -24 -8 Q 0 -18 24 -8 Q 10 -4 -24 -8" stroke="#ffffff" stroke-width="2.5" fill="none" opacity="0.95"/>
            <path d="M -18 10 Q 4 18 22 8 Q 12 6 -18 10" stroke="#ffffff" stroke-width="2.2" fill="none" opacity="0.9"/>
          </g>

          <!-- Small Dark Spot (DS2 Storm: Lower Right) -->
          <g transform="translate(202, 195)">
            <ellipse cx="0" cy="0" rx="14" ry="8" fill="#020617"/>
            <circle cx="0" cy="-6" r="2.5" fill="#ffffff" opacity="0.95"/>
          </g>

          <!-- Supersonic 2,000 km/h High-Altitude Bright White Methane Ice Clouds -->
          <g stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.95">
            <!-- Upper Jet Stream Cirrus Filament -->
            <path d="M 68 95 Q 115 88 175 102 Q 225 95 252 105"/>
            <path d="M 125 102 Q 165 95 195 105" stroke-width="1.5"/>
            <!-- Equatorial Scooter Clouds -->
            <path d="M 135 152 Q 185 142 245 158"/>
            <path d="M 55 175 Q 95 168 145 180"/>
            <!-- South Polar Bright Cloud Ring -->
            <path d="M 95 235 Q 150 245 205 235" stroke-width="2"/>
          </g>

          <!-- Night Shadow Terminator (Right Limb) -->
          <path d="M 180 32 C 225 75 225 225 180 268 L 268 268 L 268 32 Z" fill="#000000" opacity="0.55"/>
        </g>

        <!-- Neptune Luminous Atmospheric Edge Glow -->
        <circle cx="150" cy="150" r="118" fill="url(#neptune_limb)" pointer-events="none"/>
        <circle cx="150" cy="150" r="118" fill="none" stroke="#38bdf8" stroke-width="1.8" opacity="0.75"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#0284c7" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#38bdf8"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#1d4ed8" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#bae6fd" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#38bdf8" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#38bdf8"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#1e1b4b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
