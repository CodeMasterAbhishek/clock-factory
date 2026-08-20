import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const moon_lunarTheme: ClockThemeRenderer = {
  name: 'moon_lunar',
  description: 'Detailed Lunar Surface showing ancient basaltic Maria seas (Tranquillitatis, Serenitatis), Tycho impact crater with luminous ray ejecta filaments, and central peaks',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#e2e8f0" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#94a3b8" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="moon_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="moon_globe_clip"><circle cx="150" cy="150" r="118"/></clipPath>
        <radialGradient id="lunar_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#090a0f"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="moon_highlands" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="35%" stop-color="#e2e8f0"/>
          <stop offset="70%" stop-color="#cbd5e1"/>
          <stop offset="90%" stop-color="#94a3b8"/>
          <stop offset="100%" stop-color="#334155"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Cosmic Deep Space -->
      <circle cx="150" cy="150" r="145" fill="url(#lunar_cosmos)" stroke="#94a3b8" stroke-width="2.5"/>

      <g clip-path="url(#moon_dial_clip)">
        <!-- Distant Stars in Black Sky -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>

        <!-- Main Moon Globe (R = 118 at Center 150, 150) -->
        <circle cx="150" cy="150" r="118" fill="url(#moon_highlands)"/>

        <!-- Lunar Topography, Basaltic Maria & Impact Craters (Clipped inside Globe) -->
        <g clip-path="url(#moon_globe_clip)">
          <!-- 1. Ancient Dark Basaltic Lunar Maria (Lava Seas) -->
          <g fill="#64748b" opacity="0.85">
            <!-- Oceanus Procellarum (Ocean of Storms - Large Western Sea) -->
            <path d="M 68 85 C 95 65 115 80 110 135 C 105 185 85 210 65 175 C 50 140 50 110 68 85 Z"/>
            <!-- Mare Imbrium (Sea of Rains - Upper Circular Basin) -->
            <ellipse cx="108" cy="98" rx="28" ry="24"/>
            <!-- Mare Serenitatis (Sea of Serenity) -->
            <ellipse cx="158" cy="105" rx="20" ry="18"/>
            <!-- Mare Tranquillitatis (Sea of Tranquility - Apollo 11 Landing Site) -->
            <path d="M 148 122 C 175 115 195 130 185 155 C 172 175 145 168 148 122 Z"/>
            <!-- Mare Crisium (Sea of Crises - Distinct Eastern Oval) -->
            <ellipse cx="205" cy="115" rx="14" ry="16"/>
            <!-- Mare Fecunditatis & Nectaris (South-Eastern Seas) -->
            <ellipse cx="188" cy="172" rx="18" ry="15"/>
            <ellipse cx="162" cy="175" rx="12" ry="10"/>
            <!-- Mare Nubium (Sea of Clouds) -->
            <ellipse cx="112" cy="178" rx="18" ry="16"/>
          </g>

          <!-- Inner Basalt Bed Shading -->
          <g fill="#475569" opacity="0.65">
            <circle cx="108" cy="98" r="18"/>
            <circle cx="158" cy="105" r="12"/>
            <circle cx="165" cy="142" r="14"/>
            <circle cx="205" cy="115" r="9"/>
          </g>

          <!-- 2. Brilliant Radiant Ray Ejecta Filament Networks (From Tycho Crater in South) -->
          <g stroke="#ffffff" stroke-width="1.2" opacity="0.8">
            <!-- Ray Lines Streaking across thousands of km -->
            <line x1="145" y1="218" x2="65" y2="120"/>
            <line x1="145" y1="218" x2="105" y2="80"/>
            <line x1="145" y1="218" x2="160" y2="40"/>
            <line x1="145" y1="218" x2="215" y2="100"/>
            <line x1="145" y1="218" x2="225" y2="180"/>
            <line x1="145" y1="218" x2="85" y2="235"/>
          </g>

          <!-- 3. Prominent Impact Craters with Terraced Walls & Central Uplift Peaks -->
          <!-- Crater Tycho (Southern Prominent Rayed Crater) -->
          <g transform="translate(145, 218)">
            <!-- Outer Rim Halo -->
            <circle cx="0" cy="0" r="14" fill="#ffffff" opacity="0.9"/>
            <!-- Shadowed Floor -->
            <circle cx="0" cy="0" r="10" fill="#334155" stroke="#1e293b" stroke-width="1"/>
            <!-- Central Mountain Peak -->
            <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
          </g>

          <!-- Crater Copernicus (Center-Left in Oceanus Procellarum) -->
          <g transform="translate(112, 138)">
            <circle cx="0" cy="0" r="12" fill="#ffffff" opacity="0.85"/>
            <circle cx="0" cy="0" r="8" fill="#334155" stroke="#1e293b" stroke-width="1"/>
            <circle cx="0" cy="0" r="2" fill="#ffffff"/>
            <!-- Mini Rays -->
            <line x1="0" y1="0" x2="-18" y2="-12" stroke="#ffffff" stroke-width="0.8" opacity="0.6"/>
            <line x1="0" y1="0" x2="18" y2="12" stroke="#ffffff" stroke-width="0.8" opacity="0.6"/>
          </g>

          <!-- Crater Kepler (Left of Copernicus) -->
          <g transform="translate(82, 132)">
            <circle cx="0" cy="0" r="8" fill="#ffffff" opacity="0.8"/>
            <circle cx="0" cy="0" r="5" fill="#334155"/>
            <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
          </g>

          <!-- Crater Aristarchus (Brightest Feature on Moon - Upper Left) -->
          <g transform="translate(78, 102)">
            <circle cx="0" cy="0" r="7" fill="#ffffff"/>
            <circle cx="0" cy="0" r="4" fill="#475569"/>
            <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
          </g>

          <!-- Crater Plato (Dark-Floored Crater North of Mare Imbrium) -->
          <g transform="translate(112, 66)">
            <ellipse cx="0" cy="0" rx="9" ry="6" fill="#1e293b" stroke="#ffffff" stroke-width="1.2"/>
          </g>

          <!-- Southern Heavily Cratered Highlands (Clustered Impact Pits) -->
          <g fill="#475569" stroke="#cbd5e1" stroke-width="0.8">
            <circle cx="120" cy="242" r="6"/><circle cx="120" cy="242" r="1.5" fill="#ffffff"/>
            <circle cx="168" cy="235" r="7"/><circle cx="168" cy="235" r="1.8" fill="#ffffff"/>
            <circle cx="185" cy="215" r="6.5"/>
            <circle cx="132" cy="195" r="5.5"/>
          </g>

          <!-- Terminator Shadow along East Lunar Limb -->
          <path d="M 180 32 C 225 75 225 225 180 268 L 268 268 L 268 32 Z" fill="#000000" opacity="0.55"/>
        </g>

        <!-- Crisp Lunar Limb Border Glow -->
        <circle cx="150" cy="150" r="118" fill="none" stroke="#e2e8f0" stroke-width="1.5" opacity="0.8"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Apollo Mission Chronometer Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#0f172a" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#38bdf8"/>
        </g>
        <!-- Lunar Mission Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Apollo Saffron / Gold Second Hand -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#38bdf8" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#38bdf8"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
