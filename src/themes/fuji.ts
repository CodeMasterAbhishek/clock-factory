import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const fujiTheme: ClockThemeRenderer = {
  name: 'fuji',
  description: 'Sacred Mount Fuji snow-capped volcanic cone under the Crimson Rising Sun with Japanese Torii gate, Lake Kawaguchi reflections, and Sakura cherry blossoms',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#e11d48" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#f43f5e" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="fuji_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="fuji_dawn_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff1f2"/>
          <stop offset="35%" stop-color="#ffe4e6"/>
          <stop offset="70%" stop-color="#fecdd3"/>
          <stop offset="100%" stop-color="#fda4af"/>
        </linearGradient>
        <linearGradient id="fuji_cone" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#334155"/>
          <stop offset="50%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#fuji_dawn_sky)" stroke="#e11d48" stroke-width="2.5"/>

      <g clip-path="url(#fuji_dial_clip)">
        <!-- Crimson Rising Sun (Nihon-hi) behind Fuji Summit -->
        <circle cx="150" cy="98" r="46" fill="#e11d48" opacity="0.9"/>
        <circle cx="150" cy="98" r="56" fill="#f43f5e" opacity="0.25"/>

        <!-- Sacred Mount Fuji Volcanic Cone (Majestic Symmetrical Slopes) -->
        <path d="M 134 82 C 115 125 70 195 20 250 L 280 250 C 230 195 185 125 166 82 Z" fill="url(#fuji_cone)"/>

        <!-- Glacial Snow Cap & Cascading Snow Ravines (Gullies) -->
        <path d="M 134 82 C 142 84 158 84 166 82 C 162 108 178 128 174 145 C 168 132 158 140 150 152 C 142 140 132 132 126 145 C 122 128 138 108 134 82 Z" fill="#ffffff"/>
        <!-- Fine Snow Flutes & Crevasse Shading -->
        <path d="M 150 83 L 148 138 L 150 152" stroke="#e2e8f0" stroke-width="1.8" fill="none"/>
        <path d="M 138 90 L 132 125 L 126 145" stroke="#cbd5e1" stroke-width="1.5" fill="none"/>
        <path d="M 162 90 L 168 125 L 174 145" stroke="#cbd5e1" stroke-width="1.5" fill="none"/>

        <!-- Pine Forest Silhouettes at Foothills -->
        <g fill="#064e3b" opacity="0.85">
          <polygon points="30,250 18,225 42,225"/>
          <polygon points="55,250 45,220 65,220"/>
          <polygon points="80,250 70,225 90,225"/>
          <polygon points="220,250 210,225 230,225"/>
          <polygon points="245,250 235,220 255,220"/>
          <polygon points="270,250 258,225 282,225"/>
        </g>

        <!-- Lake Kawaguchi Reflective Water (Lower Base) -->
        <path d="M 0 242 Q 150 232 300 242 L 300 300 L 0 300 Z" fill="#1e3a8a"/>
        <path d="M 0 255 Q 150 245 300 255 L 300 300 L 0 300 Z" fill="#172554"/>
        <!-- Soft Fuji Reflection in Lake -->
        <polygon points="135,250 165,250 150,285" fill="#93c5fd" opacity="0.35"/>
        <!-- Water Ripples -->
        <g stroke="#60a5fa" stroke-width="1" fill="none" opacity="0.6">
          <line x1="80" y1="260" x2="130" y2="260"/>
          <line x1="170" y1="260" x2="220" y2="260"/>
          <line x1="110" y1="272" x2="190" y2="272"/>
        </g>

        <!-- Traditional Vermilion Japanese Torii Gate on Lake Shore (Lower Left) -->
        <g transform="translate(68, 240)">
          <!-- Curved Top Kasagi Beam -->
          <path d="M -24 -24 Q 0 -28 24 -24 L 22 -20 Q 0 -24 -22 -20 Z" fill="#dc2626"/>
          <!-- Secondary Nuki Beam -->
          <rect x="-18" y="-17" width="36" height="3" fill="#dc2626"/>
          <!-- Central Gakuzuka Plaque -->
          <rect x="-2.5" y="-23" width="5" height="7" fill="#18181b"/>
          <!-- Two Main Pillars (Hashira) with Black Bases -->
          <rect x="-14" y="-17" width="4.5" height="24" fill="#dc2626"/>
          <rect x="-15" y="4" width="6.5" height="4" fill="#18181b"/>
          <rect x="9.5" y="-17" width="4.5" height="24" fill="#dc2626"/>
          <rect x="8.5" y="4" width="6.5" height="4" fill="#18181b"/>
        </g>

        <!-- Blooming Sakura Cherry Blossom Branches Framing the Upper Dial -->
        <!-- Top-Left Sakura Branch -->
        <g>
          <path d="M 15 35 Q 55 42 85 28 Q 115 15 135 25" stroke="#451a03" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M 65 38 Q 80 55 95 62" stroke="#451a03" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <!-- Pink Blossoms -->
          <g fill="#f472b6" stroke="#db2777" stroke-width="0.6">
            <circle cx="45" cy="38" r="4.5"/><circle cx="75" cy="32" r="5"/><circle cx="95" cy="24" r="4.5"/><circle cx="120" cy="22" r="4"/><circle cx="85" cy="58" r="4.5"/>
            <circle cx="45" cy="38" r="1.5" fill="#fef08a"/>
            <circle cx="75" cy="32" r="1.5" fill="#fef08a"/>
            <circle cx="85" cy="58" r="1.5" fill="#fef08a"/>
          </g>
        </g>
        <!-- Top-Right Sakura Branch -->
        <g>
          <path d="M 285 35 Q 245 42 215 28 Q 185 15 165 25" stroke="#451a03" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <g fill="#f472b6" stroke="#db2777" stroke-width="0.6">
            <circle cx="255" cy="38" r="4.5"/><circle cx="225" cy="32" r="5"/><circle cx="205" cy="24" r="4.5"/><circle cx="180" cy="22" r="4"/>
            <circle cx="225" cy="32" r="1.5" fill="#fef08a"/>
          </g>
        </g>

        <!-- Falling Sakura Petals Drifting in the Wind -->
        <g fill="#f472b6" opacity="0.85">
          <ellipse cx="108" cy="95" rx="3" ry="1.8" transform="rotate(35 108 95)"/>
          <ellipse cx="195" cy="85" rx="2.8" ry="1.6" transform="rotate(-25 195 85)"/>
          <ellipse cx="80" cy="165" rx="3.2" ry="1.8" transform="rotate(45 80 165)"/>
          <ellipse cx="225" cy="175" rx="3" ry="1.8" transform="rotate(-40 225 175)"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#e11d48" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#1e293b" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#f472b6" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#e11d48" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#e11d48" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#e11d48"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#e11d48"/>
      </g>
    `;
  }
};
