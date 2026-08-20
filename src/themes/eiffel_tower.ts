import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const eiffel_towerTheme: ClockThemeRenderer = {
  name: 'eiffel_tower',
  description: 'Parisian twilight skyline featuring the glowing golden iron lattice Eiffel Tower, searchlight beacon, and starry Parisian night',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#fbbf24" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="eiffel_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="paris_twilight" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="35%" stop-color="#312e81"/>
          <stop offset="70%" stop-color="#4c1d95"/>
          <stop offset="100%" stop-color="#831843"/>
        </linearGradient>
        <linearGradient id="eiffel_gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#fef08a"/>
          <stop offset="70%" stop-color="#facc15"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#paris_twilight)" stroke="#f59e0b" stroke-width="2.5"/>

      <g clip-path="url(#eiffel_dial_clip)">
        <!-- Luminous Moon in Twilight Paris Sky -->
        <circle cx="218" cy="72" r="18" fill="#fef08a" opacity="0.9"/>
        <circle cx="218" cy="72" r="28" fill="#fde047" opacity="0.2"/>

        <!-- Paris Stars & Sparkling Lights -->
        <g fill="#ffffff">
          <circle cx="45" cy="55" r="1.2"/><circle cx="80" cy="40" r="1.5"/><circle cx="115" cy="65" r="1"/><circle cx="180" cy="45" r="1.5"/>
          <circle cx="255" cy="50" r="1.2"/><circle cx="265" cy="95" r="1.5"/><circle cx="35" cy="95" r="1.2"/>
        </g>

        <!-- Eiffel Tower Luminous Searchlight Beam (Sweeping across sky) -->
        <polygon points="150,42 275,0 230,0" fill="#fef08a" opacity="0.25"/>

        <!-- Glowing Iron Lattice Eiffel Tower (Grand Silhouette: y=42..260) -->
        <g>
          <!-- Base Ground Light Halo -->
          <ellipse cx="150" cy="255" rx="75" ry="18" fill="#fef08a" opacity="0.35"/>

          <!-- 1. Bottom Arch & Pillars (Base Tier) -->
          <!-- Left Leg & Right Leg -->
          <polygon points="112,255 128,195 138,195 125,255" fill="url(#eiffel_gold)"/>
          <polygon points="188,255 172,195 162,195 175,255" fill="url(#eiffel_gold)"/>
          <!-- Great Semicircular Arch -->
          <path d="M 125 255 Q 150 190 175 255 L 168 255 Q 150 205 132 255 Z" fill="url(#eiffel_gold)"/>
          <!-- Base Platform 1 -->
          <rect x="122" y="192" width="56" height="5" rx="1" fill="#ca8a04" stroke="#fef08a" stroke-width="0.8"/>

          <!-- 2. Middle Tier Body -->
          <polygon points="130,192 138,125 162,125 170,192" fill="url(#eiffel_gold)"/>
          <!-- Internal Lattice X-Braces -->
          <g stroke="#854d0e" stroke-width="1.2" opacity="0.75">
            <line x1="133" y1="190" x2="167" y2="130"/>
            <line x1="167" y1="190" x2="133" y2="130"/>
            <line x1="135" y1="160" x2="165" y2="160"/>
          </g>
          <!-- Middle Platform 2 -->
          <rect x="136" y="122" width="28" height="4" rx="1" fill="#ca8a04" stroke="#fef08a" stroke-width="0.8"/>

          <!-- 3. Upper Spire & Lantern Dome (Top Tier) -->
          <polygon points="144,122 148,46 152,46 156,122" fill="url(#eiffel_gold)"/>
          <!-- Lantern Top & Beacon Spire -->
          <circle cx="150" cy="45" r="4.5" fill="#ffffff"/>
          <line x1="150" y1="42" x2="150" y2="28" stroke="#fef08a" stroke-width="2"/>
          <circle cx="150" cy="28" r="1.5" fill="#ffffff"/>
        </g>

        <!-- Parisian Boulevard Trees & Glowing Streetlights along Champ de Mars -->
        <g fill="#0f172a">
          <circle cx="45" cy="258" r="16"/><circle cx="70" cy="254" r="18"/><circle cx="95" cy="258" r="15"/>
          <circle cx="205" cy="258" r="15"/><circle cx="230" cy="254" r="18"/><circle cx="255" cy="258" r="16"/>
        </g>
        <path d="M 0 255 Q 150 248 300 255 L 300 300 L 0 300 Z" fill="#020617"/>

        <!-- Glowing Parisian Streetlamp Orbs -->
        <g fill="#fef08a">
          <circle cx="60" cy="248" r="3"/><circle cx="60" cy="248" r="6" opacity="0.4"/>
          <circle cx="85" cy="246" r="3"/><circle cx="85" cy="246" r="6" opacity="0.4"/>
          <circle cx="215" cy="246" r="3"/><circle cx="215" cy="246" r="6" opacity="0.4"/>
          <circle cx="240" cy="248" r="3"/><circle cx="240" cy="248" r="6" opacity="0.4"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#fef08a" stroke="#78350f" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#f59e0b" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#78350f" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#fbbf24" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f43f5e" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f43f5e"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#fef08a"/>
      </g>
    `;
  }
};
