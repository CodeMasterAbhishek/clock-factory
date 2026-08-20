import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const hiveTheme: ClockThemeRenderer = {
  name: 'hive',
  description: 'Luxury Golden Honeycomb Horology featuring engine-turned hexagonal honey cells, dripping translucent liquid amber honey, and hyper-detailed worker honeybee with gossamer wings',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<polygon points="150,11 154,16 154,23 150,28 146,23 146,16" fill="#ca8a04" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="18" r="2.5" fill="#f59e0b" stroke="#78350f" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="hive_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Warm Honeycomb Amber Radial Gradient -->
        <radialGradient id="honey_dial_bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#fffbeb"/>
          <stop offset="35%" stop-color="#fef3c7"/>
          <stop offset="70%" stop-color="#fde68a"/>
          <stop offset="90%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#b45309"/>
        </radialGradient>
        <!-- Liquid Amber Honey Gradient -->
        <linearGradient id="liquid_honey_glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#facc15"/>
          <stop offset="75%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <!-- Iridescent Bee Gossamer Wing -->
        <linearGradient id="bee_gossamer_wing" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.85"/>
          <stop offset="50%" stop-color="#e0f2fe" stop-opacity="0.75"/>
          <stop offset="100%" stop-color="#bae6fd" stop-opacity="0.6"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Outer Bezel in Polished Golden Honey Bronze -->
      <circle cx="150" cy="150" r="145" fill="url(#honey_dial_bg)" stroke="#b45309" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="139" fill="none" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="2 3"/>

      <g clip-path="url(#hive_dial_clip)">
        <!-- 1. INTRICATE ENGINE-TURNED HONEYCOMB LATTICE MESH (Center & Upper Dial) -->
        <g stroke="#d97706" stroke-width="1.4" fill="none" opacity="0.65">
          <!-- Central Hexagon Cluster -->
          <!-- Ring 0 (Center) -->
          <polygon points="150,132 165,141 165,159 150,168 135,159 135,141" fill="url(#liquid_honey_glow)" fill-opacity="0.4"/>
          <!-- Ring 1 (Surrounding 6 Hexagons) -->
          <polygon points="150,96 165,105 165,123 150,132 135,123 135,105" fill="url(#liquid_honey_glow)" fill-opacity="0.5"/>
          <polygon points="176,114 191,123 191,141 176,150 161,141 161,123"/>
          <polygon points="176,150 191,159 191,177 176,186 161,177 161,159" fill="url(#liquid_honey_glow)" fill-opacity="0.3"/>
          <polygon points="150,168 165,177 165,195 150,204 135,195 135,177"/>
          <polygon points="124,150 139,159 139,177 124,186 109,177 109,159" fill="url(#liquid_honey_glow)" fill-opacity="0.4"/>
          <polygon points="124,114 139,123 139,141 124,150 109,141 109,123"/>

          <!-- Ring 2 (Outer Hexagons) -->
          <polygon points="150,60 165,69 165,87 150,96 135,87 135,69" fill="url(#liquid_honey_glow)" fill-opacity="0.6"/>
          <polygon points="176,78 191,87 191,105 176,114 161,105 161,87"/>
          <polygon points="202,96 217,105 217,123 202,132 187,123 187,105" fill="url(#liquid_honey_glow)" fill-opacity="0.35"/>
          <polygon points="124,78 139,87 139,105 124,114 109,105 109,87"/>
          <polygon points="98,96 113,105 113,123 98,132 83,123 83,105" fill="url(#liquid_honey_glow)" fill-opacity="0.45"/>
        </g>

        <!-- 2. GLISTENING DRIPPING HONEY BEADS (Rich Translucent Honey Drops) -->
        <g fill="url(#liquid_honey_glow)">
          <!-- Center Top Drips -->
          <path d="M 148 96 Q 148 108 150 114 Q 152 108 152 96 Z"/>
          <circle cx="150" cy="116" r="3.5"/>
          <circle cx="149" cy="115" r="1" fill="#ffffff"/>
          <!-- Outer Drip -->
          <path d="M 122 150 Q 122 165 124 172 Q 126 165 126 150 Z"/>
          <circle cx="124" cy="174" r="3"/>
          <circle cx="123" cy="173" r="0.8" fill="#ffffff"/>
        </g>

        <!-- 3. HYPER-DETAILED WORKER HONEYBEE (Apis Mellifera at Lower Right: y=175..245) -->
        <g transform="translate(198, 205) rotate(-18) scale(0.95)">
          <!-- Gossamer Wings (Delicate Veins & Iridescent Sheen) -->
          <!-- Left Forewing -->
          <g transform="rotate(-38 -8 -10)">
            <path d="M 0 0 C -12 -28 -28 -32 -25 -10 C -22 6 -6 4 0 0 Z" fill="url(#bee_gossamer_wing)" stroke="#38bdf8" stroke-width="0.8"/>
            <path d="M 0 0 C -8 -15 -18 -18 -22 -10" stroke="#7dd3fc" stroke-width="0.6" fill="none"/>
            <line x1="-10" y1="-12" x2="-20" y2="-18" stroke="#7dd3fc" stroke-width="0.5"/>
          </g>
          <!-- Right Forewing -->
          <g transform="rotate(22 8 -10)">
            <path d="M 0 0 C 12 -34 32 -36 28 -12 C 24 8 8 6 0 0 Z" fill="url(#bee_gossamer_wing)" stroke="#38bdf8" stroke-width="0.8"/>
            <path d="M 0 0 C 8 -18 20 -20 25 -12" stroke="#7dd3fc" stroke-width="0.6" fill="none"/>
            <line x1="12" y1="-15" x2="22" y2="-22" stroke="#7dd3fc" stroke-width="0.5"/>
          </g>
          <!-- Hindwing -->
          <g transform="rotate(42 6 -4)">
            <path d="M 0 0 C 8 -20 22 -22 18 -6 C 14 6 4 4 0 0 Z" fill="url(#bee_gossamer_wing)" stroke="#38bdf8" stroke-width="0.6"/>
          </g>

          <!-- Bee Fuzzy Thorax & Abdomen -->
          <!-- Segmented Abdomen (Amber & Velvet Black Stripes) -->
          <g>
            <ellipse cx="0" cy="14" rx="11" ry="17" fill="#facc15" stroke="#18181b" stroke-width="1.2"/>
            <!-- Velvet Black Stripes -->
            <path d="M -10 2 Q 0 6 10 2 L 10.5 7 Q 0 11 -10.5 7 Z" fill="#18181b"/>
            <path d="M -10 11 Q 0 16 10 11 L 9.5 16 Q 0 21 -9.5 16 Z" fill="#18181b"/>
            <path d="M -8 20 Q 0 25 8 20 L 6 25 Q 0 29 -6 25 Z" fill="#18181b"/>
            <!-- Stinger -->
            <polygon points="-1.5,30 1.5,30 0,34" fill="#18181b"/>
          </g>

          <!-- Golden Fuzzy Thorax -->
          <ellipse cx="0" cy="-2" rx="9.5" ry="8" fill="#ca8a04" stroke="#78350f" stroke-width="1"/>
          <ellipse cx="0" cy="-2" rx="6" ry="5" fill="#facc15" opacity="0.6"/>

          <!-- Head & Compound Eyes -->
          <circle cx="0" cy="-12" r="7" fill="#18181b"/>
          <!-- Compound Eyes (Dark Amber Glint) -->
          <ellipse cx="-4.5" cy="-13" rx="2.5" ry="3.5" fill="#451a03" stroke="#18181b" stroke-width="0.5" transform="rotate(-15 -4.5 -13)"/>
          <ellipse cx="4.5" cy="-13" rx="2.5" ry="3.5" fill="#451a03" stroke="#18181b" stroke-width="0.5" transform="rotate(15 4.5 -13)"/>
          <circle cx="-4" cy="-14" r="0.8" fill="#ffffff"/>
          <circle cx="4" cy="-14" r="0.8" fill="#ffffff"/>

          <!-- Antennae with Clubbed Angles -->
          <path d="M -3 -18 Q -8 -26 -14 -24" stroke="#18181b" stroke-width="1.4" fill="none" stroke-linecap="round"/>
          <path d="M 3 -18 Q 8 -26 14 -24" stroke="#18181b" stroke-width="1.4" fill="none" stroke-linecap="round"/>

          <!-- Golden Pollen Baskets (Corbiculae on Rear Legs) -->
          <ellipse cx="-12" cy="16" rx="3.5" ry="5" fill="#facc15" stroke="#ca8a04" stroke-width="0.6"/>
          <ellipse cx="12" cy="16" rx="3.5" ry="5" fill="#facc15" stroke="#ca8a04" stroke-width="0.6"/>
        </g>

        <!-- 4. WILDFLOWER CLOVER BLOSSOMS (Botanical Accents: Left Flank) -->
        <g transform="translate(62, 238)">
          <g fill="#f472b6" stroke="#db2777" stroke-width="0.6">
            <circle cx="-8" cy="-4" r="3.5"/><circle cx="0" cy="-8" r="4"/><circle cx="8" cy="-4" r="3.5"/>
            <circle cx="-4" cy="4" r="3.5"/><circle cx="4" cy="4" r="3.5"/>
            <circle cx="0" cy="0" r="2.5" fill="#fef08a"/>
          </g>
        </g>

        <!-- Floating Golden Pollen Sparkles -->
        <g fill="#f59e0b" opacity="0.8">
          <circle cx="65" cy="85" r="1.8"/><circle cx="130" cy="45" r="2"/><circle cx="195" cy="55" r="1.5"/><circle cx="245" cy="135" r="1.8"/>
          <circle cx="95" cy="205" r="1.5"/><circle cx="150" cy="255" r="2"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Carved Oak & Honey Dipper Dauphine Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#78350f" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="147.5,140 152.5,140 150,82" fill="#f59e0b"/>
          <circle cx="150" cy="75" r="3" fill="#facc15"/>
        </g>
        <!-- Carved Oak & Honey Dipper Dauphine Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#78350f" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="148,140 152,140 150,42" fill="#facc15"/>
          <circle cx="150" cy="35" r="2.5" fill="#fef08a"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Honey Amber Needle Second Hand with Honeycomb Pip -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ea580c" stroke-width="1.8"/>
          <polygon points="150,14 153.5,18 153.5,23 150,27 146.5,23 146.5,18" fill="#ea580c" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="3" fill="#ea580c"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#facc15"/>
      </g>
    `;
  }
};
