import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const mars_planetTheme: ClockThemeRenderer = {
  name: 'mars_planet',
  description: 'Red Planet Mars showing rust-red iron oxide regolith, massive Olympus Mons volcano caldera, Valles Marineris canyon rift, and white polar ice cap',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#ea580c" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#c2410c" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="mars_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="mars_globe_clip"><circle cx="150" cy="150" r="118"/></clipPath>
        <radialGradient id="mars_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#090503"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="mars_surface" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#fb923c"/>
          <stop offset="35%" stop-color="#ea580c"/>
          <stop offset="70%" stop-color="#c2410c"/>
          <stop offset="90%" stop-color="#7c2d12"/>
          <stop offset="100%" stop-color="#2a0800"/>
        </radialGradient>
        <radialGradient id="mars_haze" cx="42%" cy="42%" r="58%">
          <stop offset="78%" stop-color="#f97316" stop-opacity="0"/>
          <stop offset="94%" stop-color="#fdba74" stop-opacity="0.45"/>
          <stop offset="100%" stop-color="#ea580c" stop-opacity="0.8"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#mars_cosmos)" stroke="#ea580c" stroke-width="2.5"/>

      <g clip-path="url(#mars_dial_clip)">
        <!-- Distant Stars & Martian Moons Phobos & Deimos in Space -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>
        <!-- Phobos (Irregular Potato Moon Top-Left) -->
        <g transform="translate(62, 58)">
          <ellipse cx="0" cy="0" rx="5.5" ry="4" fill="#a8a29e" stroke="#78716c" stroke-width="0.6" transform="rotate(25 0 0)"/>
          <circle cx="-1.5" cy="-1" r="1.2" fill="#57534e"/>
        </g>
        <!-- Deimos (Small Distant Moon Top-Right) -->
        <circle cx="240" cy="72" r="3" fill="#cbd5e1"/>

        <!-- Main Mars Globe Sphere (R = 118 at Center 150, 150) -->
        <circle cx="150" cy="150" r="118" fill="url(#mars_surface)"/>

        <!-- Martian Geological Features (Clipped inside Globe) -->
        <g clip-path="url(#mars_globe_clip)">
          <!-- Dark Basaltic Albedo Markings (Syrtis Major & Acidalia Planitia) -->
          <g fill="#451a03" opacity="0.65">
            <!-- Syrtis Major Planum Shield Markings -->
            <path d="M 140 110 C 175 95 195 125 185 165 C 165 195 140 185 135 155 Z"/>
            <!-- Southern Highlands Dark Terrain -->
            <path d="M 68 185 Q 125 165 180 180 Q 220 220 185 250 Q 115 255 68 185 Z"/>
            <!-- Northern Lowlands Albedo Patches -->
            <path d="M 75 75 Q 115 65 130 95 Q 105 115 75 75 Z"/>
          </g>

          <!-- Grand Rift Canyon: Valles Marineris (4,000 km grand chasm system across equator) -->
          <g>
            <path d="M 75 145 C 95 152 125 148 145 158 C 165 168 190 162 210 170" stroke="#1c1917" stroke-width="4.5" fill="none" stroke-linecap="round"/>
            <!-- Canyon Branch Chasmata & Tributaries -->
            <path d="M 105 148 L 115 138" stroke="#1c1917" stroke-width="2" fill="none"/>
            <path d="M 140 155 L 148 168" stroke="#1c1917" stroke-width="2.5" fill="none"/>
            <path d="M 168 162 L 180 152" stroke="#1c1917" stroke-width="2" fill="none"/>
            <!-- Canyon Wall Sunlit Rim Highlight -->
            <path d="M 75 143 C 95 150 125 146 145 156 C 165 166 190 160 210 168" stroke="#fdba74" stroke-width="1.2" fill="none" opacity="0.75"/>
          </g>

          <!-- Giant Olympus Mons Shield Volcano (Largest in the Solar System, Upper-Left) -->
          <g transform="translate(98, 108)">
            <!-- Outer Volcano Shield Base Contours & Basal Scarp -->
            <ellipse cx="0" cy="0" rx="24" ry="18" fill="#c2410c" stroke="#7c2d12" stroke-width="1.2"/>
            <ellipse cx="0" cy="0" rx="16" ry="12" fill="#ea580c"/>
            <!-- Multi-Ringed Caldera Complex -->
            <ellipse cx="0" cy="-1" rx="7" ry="5" fill="#451a03" stroke="#292524" stroke-width="0.8"/>
            <circle cx="2" cy="0" r="2.5" fill="#1c1917"/>
            <!-- Sunlit Flank Glow -->
            <path d="M -18 0 Q -10 -12 0 -12" stroke="#fed7aa" stroke-width="1.5" fill="none" opacity="0.8"/>
          </g>

          <!-- Tharsis Montes Volcano Trio (Ascraeus, Pavonis, Arsia Mons) -->
          <g fill="#7c2d12" stroke="#451a03" stroke-width="0.8">
            <circle cx="82" cy="155" r="7"/><circle cx="82" cy="155" r="2" fill="#1c1917"/>
            <circle cx="95" cy="180" r="8"/><circle cx="95" cy="180" r="2.5" fill="#1c1917"/>
            <circle cx="112" cy="208" r="8.5"/><circle cx="112" cy="208" r="2.8" fill="#1c1917"/>
          </g>

          <!-- Northern Polar Ice Cap (Planum Boreum with Spiral Ice Chasm Troughs) -->
          <g transform="translate(150, 36)">
            <!-- Brilliant White Ice & Frozen Carbon Dioxide Cap -->
            <ellipse cx="0" cy="0" rx="36" ry="12" fill="#ffffff"/>
            <!-- Spiral Chasmata Swirls in Ice -->
            <path d="M -22 2 Q -8 -4 0 2 Q 12 6 24 0" stroke="#94a3b8" stroke-width="1.2" fill="none"/>
            <path d="M -14 6 Q 0 0 12 8" stroke="#94a3b8" stroke-width="1" fill="none"/>
          </g>

          <!-- Night Shadow Terminator (Right Limb) -->
          <path d="M 180 32 C 225 75 225 225 180 268 L 268 268 L 268 32 Z" fill="#000000" opacity="0.55"/>
        </g>

        <!-- Martian Atmospheric Dust Haze Limb Glow -->
        <circle cx="150" cy="150" r="118" fill="url(#mars_haze)" pointer-events="none"/>
        <circle cx="150" cy="150" r="118" fill="none" stroke="#f97316" stroke-width="1.8" opacity="0.75"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#c2410c" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#f97316"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#c2410c" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#fdba74" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#fbbf24" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#fbbf24" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#fbbf24"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#451a03" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#ea580c"/>
      </g>
    `;
  }
};
