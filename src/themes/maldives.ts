import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const maldivesTheme: ClockThemeRenderer = {
  name: 'maldives',
  description: 'Luxury tropical Maldives overwater thatch villa perched over crystalline turquoise coral lagoon with private sun deck, coconut palms, and marine rays',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#0284c7" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="maldives_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="maldives_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="45%" stop-color="#38bdf8"/>
          <stop offset="75%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#fef08a"/>
        </linearGradient>
        <linearGradient id="lagoon_water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#22d3ee"/>
          <stop offset="40%" stop-color="#06b6d4"/>
          <stop offset="75%" stop-color="#0891b2"/>
          <stop offset="100%" stop-color="#0e7490"/>
        </linearGradient>
        <linearGradient id="thatch_roof" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#d97706"/>
          <stop offset="85%" stop-color="#92400e"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#maldives_sky)" stroke="#06b6d4" stroke-width="2.5"/>

      <g clip-path="url(#maldives_dial_clip)">
        <!-- Crystalline Turquoise Coral Lagoon (Lower Half: y=165..300) -->
        <path d="M 0 165 Q 150 155 300 165 L 300 300 L 0 300 Z" fill="url(#lagoon_water)"/>

        <!-- Underwater Coral Atoll Shadows & Sand Caustics -->
        <g fill="#083344" opacity="0.25">
          <ellipse cx="60" cy="245" rx="35" ry="18"/>
          <ellipse cx="235" cy="255" rx="40" ry="20"/>
        </g>
        <g stroke="#ffffff" stroke-width="1.2" fill="none" opacity="0.45">
          <!-- Water Caustic Sunlight Refractions -->
          <ellipse cx="75" cy="235" rx="18" ry="8"/>
          <ellipse cx="225" cy="245" rx="22" ry="10"/>
        </g>

        <!-- Baby Manta Ray Gliding through the Translucent Lagoon (Lower Left) -->
        <g transform="translate(65, 235) scale(0.65)" fill="#0f172a" opacity="0.75">
          <!-- Diamond Wings -->
          <polygon points="0,-12 18,0 0,8 -18,0"/>
          <!-- Slender Tail -->
          <line x1="0" y1="8" x2="0" y2="24" stroke="#0f172a" stroke-width="1.2"/>
        </g>

        <!-- Swaying Coconut Palm Leaves Framing Top-Right Corner -->
        <g transform="translate(265, 20)">
          <!-- Palm Stems -->
          <path d="M 20 0 Q -30 25 -65 65" stroke="#14532d" stroke-width="2.5" fill="none"/>
          <path d="M 20 0 Q -10 45 -25 90" stroke="#14532d" stroke-width="2.5" fill="none"/>
          <!-- Palm Leaflets -->
          <g fill="#16a34a">
            <polygon points="-35,32 -55,42 -30,40"/>
            <polygon points="-48,45 -68,58 -42,55"/>
            <polygon points="-12,42 -22,65 -8,55"/>
            <polygon points="-18,65 -28,88 -14,78"/>
          </g>
        </g>

        <!-- Luxury Overwater Thatch Villa (Center-Lower: y=135..275) -->
        <g>
          <!-- Wooden Stilt Pillars in Water with Shadows -->
          <g stroke="#451a03" stroke-width="3.5" stroke-linecap="round">
            <!-- Left Stilts -->
            <line x1="112" y1="210" x2="112" y2="265"/>
            <line x1="128" y1="210" x2="128" y2="265"/>
            <!-- Right Stilts -->
            <line x1="172" y1="210" x2="172" y2="265"/>
            <line x1="188" y1="210" x2="188" y2="265"/>
          </g>
          <!-- Stilt Water Ripples -->
          <ellipse cx="112" cy="265" rx="6" ry="2" fill="#22d3ee" opacity="0.8"/>
          <ellipse cx="128" cy="265" rx="6" ry="2" fill="#22d3ee" opacity="0.8"/>
          <ellipse cx="172" cy="265" rx="6" ry="2" fill="#22d3ee" opacity="0.8"/>
          <ellipse cx="188" cy="265" rx="6" ry="2" fill="#22d3ee" opacity="0.8"/>

          <!-- Wooden Sun Deck & Boardwalk -->
          <rect x="95" y="202" width="110" height="10" rx="2" fill="#b45309" stroke="#78350f" stroke-width="1"/>
          <!-- Deck Planks -->
          <g stroke="#78350f" stroke-width="0.8">
            <line x1="115" y1="202" x2="115" y2="212"/>
            <line x1="135" y1="202" x2="135" y2="212"/>
            <line x1="150" y1="202" x2="150" y2="212"/>
            <line x1="165" y1="202" x2="165" y2="212"/>
            <line x1="185" y1="202" x2="185" y2="212"/>
          </g>
          <!-- Swimming Ladder into Ocean -->
          <g stroke="#e2e8f0" stroke-width="1.5">
            <line x1="102" y1="210" x2="102" y2="238"/>
            <line x1="108" y1="210" x2="108" y2="238"/>
            <line x1="102" y1="218" x2="108" y2="218"/>
            <line x1="102" y1="226" x2="108" y2="226"/>
            <line x1="102" y1="234" x2="108" y2="234"/>
          </g>

          <!-- Villa Teakwood Walls & Glass Sliding Doors -->
          <rect x="105" y="165" width="90" height="38" rx="2" fill="#fef3c7" stroke="#b45309" stroke-width="1"/>
          <!-- Panoramic Glass Doors with Ocean Reflections -->
          <rect x="122" y="172" width="24" height="30" rx="1" fill="#38bdf8" stroke="#0284c7" stroke-width="0.8" opacity="0.85"/>
          <rect x="154" y="172" width="24" height="30" rx="1" fill="#38bdf8" stroke="#0284c7" stroke-width="0.8" opacity="0.85"/>

          <!-- High-Pitched Traditional Thatched Palm Roof -->
          <polygon points="150,118 85,168 215,168" fill="url(#thatch_roof)" stroke="#78350f" stroke-width="1.5"/>
          <!-- Thatch Eaves Texture -->
          <path d="M 82 168 Q 150 162 218 168 L 215 172 Q 150 166 85 172 Z" fill="#78350f"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0e7490" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#22d3ee" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0284c7" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#bae6fd" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f59e0b" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f59e0b"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0e7490" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#22d3ee"/>
      </g>
    `;
  }
};
