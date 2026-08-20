import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const saturn_planetTheme: ClockThemeRenderer = {
  name: 'saturn_planet',
  description: 'Majestic Ringed Saturn gas giant showing Cassini-quality ring divisions (A, B, C rings, Cassini Division), ring shadow on globe, and giant moon Titan',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#facc15" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#eab308" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="saturn_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="saturn_globe_clip"><circle cx="150" cy="150" r="68"/></clipPath>
        <radialGradient id="saturn_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#090802"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="saturn_body" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#fde047"/>
          <stop offset="75%" stop-color="#ca8a04"/>
          <stop offset="95%" stop-color="#854d0e"/>
          <stop offset="100%" stop-color="#291800"/>
        </radialGradient>
        <!-- Tilted Ring Gradients (Concentric Density Variations) -->
        <linearGradient id="ring_a_b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#eab308"/>
          <stop offset="75%" stop-color="#ca8a04"/>
          <stop offset="100%" stop-color="#a16207"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Deep Cosmic Space -->
      <circle cx="150" cy="150" r="145" fill="url(#saturn_cosmos)" stroke="#eab308" stroke-width="2.5"/>

      <g clip-path="url(#saturn_dial_clip)">
        <!-- Distant Stars & Giant Moon Titan -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>
        <!-- Golden-Orange Atmosphere Moon Titan (Top-Left) -->
        <g transform="translate(58, 65)">
          <circle cx="0" cy="0" r="6" fill="#f97316" stroke="#ea580c" stroke-width="0.8"/>
          <circle cx="0" cy="0" r="7.5" fill="#fdba74" opacity="0.3"/>
        </g>
        <!-- Moon Enceladus (Bottom-Right Icy Moon) -->
        <circle cx="245" cy="235" r="3.2" fill="#e0f2fe"/>

        <!-- Back Half of Saturn's Tilted Ring System (Behind the Globe) -->
        <g transform="translate(150, 150) rotate(-26)">
          <!-- Outer A Ring (Back) -->
          <ellipse cx="0" cy="0" rx="136" ry="34" fill="none" stroke="#ca8a04" stroke-width="12" opacity="0.85"/>
          <!-- Encke Gap Line -->
          <ellipse cx="0" cy="0" rx="132" ry="33" fill="none" stroke="#000000" stroke-width="1"/>
          <!-- Cassini Division (Dark Gap between A and B rings) -->
          <ellipse cx="0" cy="0" rx="124" ry="31" fill="none" stroke="#000000" stroke-width="3"/>
          <!-- Bright B Ring (Dense & Radiant Back) -->
          <ellipse cx="0" cy="0" rx="110" ry="27.5" fill="none" stroke="url(#ring_a_b)" stroke-width="22" opacity="0.95"/>
          <!-- Translucent Inner C Ring (Crepe Ring Back) -->
          <ellipse cx="0" cy="0" rx="86" ry="21.5" fill="none" stroke="#78350f" stroke-width="10" opacity="0.45"/>
        </g>

        <!-- Main Saturn Globe Sphere (R = 68 at Center 150, 150) -->
        <circle cx="150" cy="150" r="68" fill="url(#saturn_body)"/>

        <!-- Saturn Atmospheric Belts & Polar Hexagon (Clipped inside Globe) -->
        <g clip-path="url(#saturn_globe_clip)">
          <!-- North Polar Hexagon (Geometrical Jet Stream at Top) -->
          <g transform="translate(150, 92)" fill="#854d0e" stroke="#ca8a04" stroke-width="0.8">
            <polygon points="0,-8 7,-4 7,4 0,8 -7,4 -7,-4"/>
            <circle cx="0" cy="0" r="3" fill="#a16207"/>
          </g>

          <!-- Subtle Jovian/Saturnian Pastel Cloud Belts across Globe -->
          <path d="M 85 118 Q 150 126 215 118 L 218 128 Q 150 136 82 128 Z" fill="#ca8a04" opacity="0.75"/>
          <path d="M 82 135 Q 150 142 218 135 L 218 145 Q 150 152 82 145 Z" fill="#fef08a" opacity="0.6"/>
          <path d="M 82 152 Q 150 158 218 152 L 215 165 Q 150 172 85 165 Z" fill="#a16207" opacity="0.8"/>
          <path d="M 88 172 Q 150 178 212 172 L 208 185 Q 150 190 92 185 Z" fill="#854d0e" opacity="0.75"/>

          <!-- Dark Sharp Shadow of Saturn's Rings Cast onto Northern Globe -->
          <path d="M 84 105 Q 150 120 216 105 L 218 116 Q 150 132 82 116 Z" fill="#000000" opacity="0.75"/>

          <!-- Night Shadow Terminator (Right Limb) -->
          <path d="M 165 82 C 195 105 195 195 165 218 L 218 218 L 218 82 Z" fill="#000000" opacity="0.5"/>
        </g>

        <!-- Front Half of Saturn's Tilted Ring System (Crossing in Front of Globe) -->
        <!-- Group clipped so only the front bottom arc renders -->
        <g transform="translate(150, 150) rotate(-26)">
          <!-- Translucent Inner C Ring (Front) -->
          <path d="M -90 0 A 86 21.5 0 0 0 90 0" fill="none" stroke="#78350f" stroke-width="10" opacity="0.55"/>
          <!-- Bright Dense B Ring (Front) -->
          <path d="M -120 0 A 110 27.5 0 0 0 120 0" fill="none" stroke="url(#ring_a_b)" stroke-width="22" opacity="0.95"/>
          <!-- Cassini Division Gap (Front) -->
          <path d="M -126 0 A 124 31 0 0 0 126 0" fill="none" stroke="#000000" stroke-width="3"/>
          <!-- Outer A Ring (Front) -->
          <path d="M -140 0 A 136 34 0 0 0 140 0" fill="none" stroke="#ca8a04" stroke-width="12" opacity="0.85"/>
          <!-- Encke Gap (Front) -->
          <path d="M -136 0 A 132 33 0 0 0 136 0" fill="none" stroke="#000000" stroke-width="1"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#854d0e" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#eab308" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#fde047"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#854d0e" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f97316" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f97316" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f97316"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#facc15"/>
      </g>
    `;
  }
};
