import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const sun_fusionTheme: ClockThemeRenderer = {
  name: 'sun_fusion',
  description: 'Dynamic nuclear fusion Solar Star showing convection cell granulation, magnetic coronal mass ejections, looping plasma prominences, and sunspot active regions',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#ffffff" stroke="#ea580c" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#facc15" stroke="#ea580c" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="sun_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="sun_core_clip"><circle cx="150" cy="150" r="105"/></clipPath>
        <radialGradient id="solar_space" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#450a0a"/>
          <stop offset="60%" stop-color="#180202"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="solar_photosphere" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#fef08a"/>
          <stop offset="60%" stop-color="#f59e0b"/>
          <stop offset="85%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#b91c1c"/>
        </radialGradient>
        <radialGradient id="corona_halo" cx="50%" cy="50%" r="50%">
          <stop offset="65%" stop-color="#f59e0b" stop-opacity="0.8"/>
          <stop offset="85%" stop-color="#ea580c" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#b91c1c" stop-opacity="0"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Starry Deep Space -->
      <circle cx="150" cy="150" r="145" fill="url(#solar_space)" stroke="#ea580c" stroke-width="2.5"/>

      <g clip-path="url(#sun_dial_clip)">
        <!-- Radiant Solar Corona Glow Atmosphere (R = 140) -->
        <circle cx="150" cy="150" r="140" fill="url(#corona_halo)"/>

        <!-- Magnetic Coronal Loops & Erupting Plasma Prominences (Leaping beyond the solar limb) -->
        <g stroke="#f59e0b" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.85">
          <!-- Top Prominence Arch Loop -->
          <path d="M 125 48 C 120 18 165 18 160 48" stroke="#facc15" stroke-width="3.5"/>
          <path d="M 132 46 C 130 28 155 28 152 46" stroke="#ffffff" stroke-width="1.8"/>
          <!-- Top-Right Solar Flare Jet -->
          <path d="M 220 75 Q 262 48 275 32" stroke="#ea580c" stroke-width="3"/>
          <circle cx="275" cy="32" r="3.5" fill="#ffffff"/>
          <!-- Bottom-Left Magnetic Loop -->
          <path d="M 68 215 C 35 228 48 265 85 245" stroke="#f59e0b" stroke-width="3"/>
          <!-- Right Prominence Eruption -->
          <path d="M 252 140 C 278 135 282 175 252 165" stroke="#f59e0b" stroke-width="3.2"/>
        </g>

        <!-- Main Solar Star Photosphere Disk (R = 105 at Center 150, 150) -->
        <circle cx="150" cy="150" r="105" fill="url(#solar_photosphere)"/>

        <!-- Granulation Convection Cells & Sunspot Active Regions (Clipped inside Core) -->
        <g clip-path="url(#sun_core_clip)">
          <!-- Solar Granulation Convection Pattern Cells -->
          <g fill="#ea580c" opacity="0.35">
            <circle cx="85" cy="105" r="14"/><circle cx="115" cy="85" r="16"/><circle cx="185" cy="95" r="18"/>
            <circle cx="95" cy="155" r="16"/><circle cx="155" cy="135" r="22"/><circle cx="215" cy="145" r="15"/>
            <circle cx="125" cy="205" r="18"/><circle cx="175" cy="195" r="16"/>
          </g>

          <!-- Bright Magnetic Faculae & Heat Plumes -->
          <g fill="#ffffff" opacity="0.75">
            <ellipse cx="140" cy="115" rx="18" ry="8" transform="rotate(25 140 115)"/>
            <ellipse cx="185" cy="165" rx="15" ry="6" transform="rotate(-15 185 165)"/>
            <ellipse cx="95" cy="175" rx="12" ry="5" transform="rotate(35 95 175)"/>
          </g>

          <!-- Active Region 1: Complex Multi-Core Sunspot Group (Upper Center-Left) -->
          <g transform="translate(118, 115)">
            <!-- Filamentary Penumbra (Amber-Brown Ring) -->
            <ellipse cx="0" cy="0" rx="18" ry="12" fill="#92400e" stroke="#78350f" stroke-width="1.5" transform="rotate(-15 0 0)"/>
            <!-- Dark Umbra Cores (Cool Magnetic Pores) -->
            <ellipse cx="-4" cy="-1" rx="7" ry="5" fill="#1c1917"/>
            <ellipse cx="6" cy="1" rx="4.5" ry="3" fill="#1c1917"/>
            <!-- Magnetic Bridge Light Inlay -->
            <line x1="-1" y1="-5" x2="-1" y2="4" stroke="#f59e0b" stroke-width="1.2"/>
          </g>

          <!-- Active Region 2: Secondary Sunspot Complex (Lower Right) -->
          <g transform="translate(192, 175)">
            <ellipse cx="0" cy="0" rx="14" ry="9" fill="#92400e" stroke="#78350f" stroke-width="1.2" transform="rotate(20 0 0)"/>
            <circle cx="-2" cy="0" r="4.5" fill="#1c1917"/>
            <circle cx="5" cy="1" r="2.5" fill="#1c1917"/>
          </g>

          <!-- Active Region 3: Minor Sunspot Pore -->
          <g transform="translate(160, 82)">
            <ellipse cx="0" cy="0" rx="8" ry="5" fill="#92400e"/>
            <circle cx="0" cy="0" r="3" fill="#1c1917"/>
          </g>
        </g>

        <!-- Incandescent Solar Limb Edge Glow -->
        <circle cx="150" cy="150" r="105" fill="none" stroke="#fef08a" stroke-width="2.5" opacity="0.9"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#180202" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#facc15"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#180202" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ffffff" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ffffff" stroke="#ea580c" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ffffff"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#180202" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#facc15"/>
      </g>
    `;
  }
};
