import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const terrariumTheme: ClockThemeRenderer = {
  name: 'terrarium',
  description: 'Faceted copper-framed glass geometric terrarium with multi-tiered Echeveria rosettes, Haworthia, trailing string-of-pearls, and geological soil strata',
  defaultColors: {
    face: '#f0fdf4',
    dialBorder: '#b45309',
    hourTicks: '#15803d',
    minuteTicks: '#4ade80',
    numbers: '#14532d',
    hourHand: '#064e3b',
    minuteHand: '#047857',
    secondHand: '#d97706',
    accent: '#10b981',
    centerCap: '#d97706'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Geometric Emerald & Copper Dial Hour Markers
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 18)">
            <polygon points="0,-4 3.5,0 0,4 -3.5,0" fill="#d97706" stroke="#064e3b" stroke-width="0.8"/>
            <circle cx="0" cy="0" r="1.2" fill="#fde047"/>
          </g>
        `;
      } else {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 18)">
            <circle cx="0" cy="0" r="2" fill="#15803d" stroke="#ffffff" stroke-width="0.6"/>
          </g>
        `;
      }
    }

    return `
      <defs>
        <clipPath id="terrarium_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        
        <!-- Clean Botanical Greenhouse Atmosphere -->
        <radialGradient id="greenhouse_ambient" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="45%" stop-color="#f0fdf4"/>
          <stop offset="80%" stop-color="#dcfce7"/>
          <stop offset="100%" stop-color="#bbf7d0"/>
        </radialGradient>

        <!-- Copper Terrarium Struts Gradient -->
        <linearGradient id="copper_strut" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f59e0b"/>
          <stop offset="30%" stop-color="#d97706"/>
          <stop offset="70%" stop-color="#b45309"/>
          <stop offset="100%" stop-color="#78350f"/>
        </linearGradient>

        <!-- Echeveria Outer Petal Shading -->
        <linearGradient id="echeveria_petal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f43f5e"/>
          <stop offset="30%" stop-color="#6ee7b7"/>
          <stop offset="70%" stop-color="#10b981"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>

        <!-- Echeveria Inner Mint Petal -->
        <linearGradient id="echeveria_core" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fda4af"/>
          <stop offset="40%" stop-color="#a7f3d0"/>
          <stop offset="100%" stop-color="#34d399"/>
        </linearGradient>

        <!-- Soil Gradient -->
        <linearGradient id="soil_strata" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#57534e"/>
          <stop offset="40%" stop-color="#292524"/>
          <stop offset="80%" stop-color="#1c1917"/>
          <stop offset="100%" stop-color="#0c0a09"/>
        </linearGradient>

        <filter id="terrarium_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#064e3b" flood-opacity="0.35"/>
        </filter>
      </defs>

      <!-- Outer Dial Bezel in Warm Polished Copper -->
      <circle cx="150" cy="150" r="147" fill="#b45309" stroke="#78350f" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="142" fill="url(#greenhouse_ambient)" stroke="#10b981" stroke-width="1"/>

      <g clip-path="url(#terrarium_dial_clip)">
        <!-- Subtle Geometric Glass Prism Backing (Faceted 3D Geometry) -->
        <g stroke="#d97706" stroke-width="1.8" stroke-linejoin="round">
          <!-- Glass Facet Planes -->
          <polygon points="150,30 238,76 260,205 150,268 40,205 62,76" fill="#ffffff" opacity="0.5"/>
          <polygon points="150,30 62,76 150,185" fill="#f0fdf4" opacity="0.35"/>
          <polygon points="150,30 238,76 150,185" fill="#ecfdf5" opacity="0.45"/>
          <polygon points="62,76 40,205 150,185" fill="#dcfce7" opacity="0.25"/>
          <polygon points="238,76 260,205 150,185" fill="#e0f2fe" opacity="0.3"/>
          <polygon points="40,205 150,268 150,185" fill="#d1fae5" opacity="0.4"/>
          <polygon points="260,205 150,268 150,185" fill="#ccfbf1" opacity="0.35"/>
        </g>

        <!-- GEOLOGICAL SOIL STRATA IN LOWER BASIN (y=190..268) -->
        <g>
          <!-- 1. Charcoal Base -->
          <polygon points="150,268 40,205 50,230 150,268 250,230 260,205" fill="#0c0a09"/>
          
          <!-- 2. Drainage Quartz Pebbles -->
          <g fill="#e7e5e4" stroke="#a8a29e" stroke-width="0.5">
            <ellipse cx="75" cy="220" rx="5" ry="3"/><ellipse cx="95" cy="228" rx="6" ry="3.5"/><ellipse cx="120" cy="235" rx="5.5" ry="3"/>
            <ellipse cx="150" cy="242" rx="6" ry="3.5"/><ellipse cx="180" cy="235" rx="5" ry="3"/><ellipse cx="205" cy="228" rx="6" ry="3.5"/>
            <ellipse cx="225" cy="220" rx="5.5" ry="3"/>
          </g>

          <!-- 3. Dark Organic Loam Planting Soil -->
          <path d="M 42 202 Q 150 192 258 202 L 260 205 L 150 268 L 40 205 Z" fill="url(#soil_strata)"/>
          <!-- Perlite White Soil Flecks -->
          <g fill="#ffffff" opacity="0.7">
            <circle cx="80" cy="208" r="1.2"/><circle cx="110" cy="214" r="1.5"/><circle cx="140" cy="218" r="1.3"/>
            <circle cx="170" cy="215" r="1.4"/><circle cx="200" cy="210" r="1.2"/><circle cx="220" cy="206" r="1.5"/>
          </g>

          <!-- 4. Living Emerald Cushion Moss Layer -->
          <path d="M 50 198 Q 100 186 150 192 T 250 198 L 255 208 Q 150 198 45 208 Z" fill="#15803d"/>
          <path d="M 60 194 Q 105 182 150 188 T 240 194 L 244 202 Q 150 192 56 202 Z" fill="#65a30d"/>
          <path d="M 75 190 Q 115 180 150 184 T 225 190 L 228 196 Q 150 188 72 196 Z" fill="#84cc16"/>
        </g>

        <!-- LUXURY SUCCULENT PLANTING -->
        <g filter="url(#terrarium_shadow)">
          <!-- 1. Left Plant: Zebra Haworthia (Variegated Spikes with White Ribs) -->
          <g transform="translate(82, 185)">
            <!-- Spiky Dark Green Leaves -->
            <polygon points="-12,12 -18,-24 -6,8" fill="#064e3b"/>
            <polygon points="-6,10 -10,-32 0,6" fill="#047857"/>
            <polygon points="0,8 0,-38 6,8" fill="#065f46"/>
            <polygon points="4,10 10,-30 8,10" fill="#047857"/>
            <polygon points="8,12 16,-22 12,12" fill="#064e3b"/>
            <!-- White Zebra Stripe Ribs -->
            <g stroke="#ffffff" stroke-width="1" stroke-linecap="round" opacity="0.9">
              <line x1="-12" y1="-8" x2="-8" y2="-8"/><line x1="-14" y1="-16" x2="-12" y2="-16"/>
              <line x1="-6" y1="-12" x2="-2" y2="-12"/><line x1="-7" y1="-22" x2="-4" y2="-22"/>
              <line x1="0" y1="-14" x2="4" y2="-14"/><line x1="0" y1="-26" x2="3" y2="-26"/>
              <line x1="6" y1="-12" x2="9" y2="-12"/><line x1="7" y1="-20" x2="10" y2="-20"/>
            </g>
          </g>

          <!-- 2. Right Plant: Trailing String-of-Pearls Vine -->
          <g transform="translate(210, 182)">
            <path d="M -5 10 Q 10 20 5 45 Q 0 65 8 80" stroke="#15803d" stroke-width="1.4" fill="none"/>
            <!-- Translucent Green Spherical Pearl Beads with Specular Highlights -->
            <g fill="#22c55e" stroke="#14532d" stroke-width="0.6">
              <circle cx="-2" cy="14" r="4.2"/><circle cx="5" cy="22" r="4.8"/><circle cx="8" cy="32" r="4.5"/>
              <circle cx="4" cy="44" r="5"/><circle cx="2" cy="56" r="4.5"/><circle cx="4" cy="68" r="4.2"/>
              <circle cx="8" cy="78" r="3.8"/>
            </g>
            <g fill="#ffffff" opacity="0.75">
              <circle cx="-3" cy="13" r="1.2"/><circle cx="4" cy="20" r="1.4"/><circle cx="7" cy="30" r="1.3"/>
              <circle cx="3" cy="42" r="1.5"/><circle cx="1" cy="54" r="1.3"/><circle cx="3" cy="66" r="1.2"/>
            </g>
          </g>

          <!-- 3. Centerpiece Giant Echeveria Rosette (Multi-Layered 3D Spiral Petals) -->
          <g transform="translate(150, 180)">
            <!-- Outer Petal Tier (Layer 1 - Deep Emerald & Ruby Tipped) -->
            <g fill="url(#echeveria_petal)" stroke="#047857" stroke-width="0.8">
              <path d="M 0 -8 C -14 -32 0 -36 0 -8 Z"/>
              <path d="M 0 -8 C 14 -32 0 -36 0 -8 Z"/>
              <path d="M -6 -8 C -28 -24 -24 -32 -6 -8 Z"/>
              <path d="M 6 -8 C 28 -24 24 -32 6 -8 Z"/>
              <path d="M -8 -4 C -36 -12 -34 -20 -8 -4 Z"/>
              <path d="M 8 -4 C 36 -12 34 -20 8 -4 Z"/>
              <path d="M -8 2 C -34 10 -30 20 -8 2 Z"/>
              <path d="M 8 2 C 34 10 30 20 8 2 Z"/>
              <path d="M -4 6 C -18 24 -10 28 -4 6 Z"/>
              <path d="M 4 6 C 18 24 10 28 4 6 Z"/>
              <path d="M 0 6 C -8 30 8 30 0 6 Z"/>
            </g>

            <!-- Middle Petal Tier (Layer 2 - Mint Green & Rose-Blush Tips) -->
            <g fill="url(#echeveria_core)" stroke="#059669" stroke-width="0.6">
              <path d="M 0 -6 C -10 -22 0 -26 0 -6 Z"/>
              <path d="M 0 -6 C 10 -22 0 -26 0 -6 Z"/>
              <path d="M -4 -6 C -20 -18 -16 -22 -4 -6 Z"/>
              <path d="M 4 -6 C 20 -18 16 -22 4 -6 Z"/>
              <path d="M -6 -2 C -24 -8 -22 -14 -6 -2 Z"/>
              <path d="M 6 -2 C 24 -8 22 -14 6 -2 Z"/>
              <path d="M -5 2 C -22 8 -18 14 -5 2 Z"/>
              <path d="M 5 2 C 22 8 18 14 5 2 Z"/>
            </g>

            <!-- Inner Heart Bud (Layer 3 - Tender Pink Rosette Center) -->
            <circle cx="0" cy="-2" r="7" fill="#f43f5e" opacity="0.75"/>
            <circle cx="0" cy="-2" r="4.5" fill="#a7f3d0" stroke="#f43f5e" stroke-width="0.8"/>
            <circle cx="0" cy="-2" r="2" fill="#ffffff"/>
          </g>
        </g>

        <!-- FOREGROUND FACETED COPPER FRAME & SPECULAR GLASS REFLECTIONS -->
        <g stroke="url(#copper_strut)" stroke-width="2.6" stroke-linejoin="round" fill="none">
          <polygon points="150,30 238,76 260,205 150,268 40,205 62,76"/>
          <line x1="150" y1="30" x2="150" y2="185"/>
          <line x1="62" y1="76" x2="150" y2="185"/>
          <line x1="238" y1="76" x2="150" y2="185"/>
          <line x1="40" y1="205" x2="150" y2="185"/>
          <line x1="260" y1="205" x2="150" y2="185"/>
          <line x1="150" y1="268" x2="150" y2="185"/>
        </g>

        <!-- Diagonal Specular Glass Light Reflections -->
        <polygon points="80,50 145,32 145,130 90,140" fill="#ffffff" opacity="0.22"/>
        <polygon points="190,65 235,76 195,150 170,140" fill="#ffffff" opacity="0.16"/>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <defs>
        <filter id="terra_hand_shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#064e3b" flood-opacity="0.55"/>
        </filter>
      </defs>

      <g filter="url(#terra_hand_shadow)">
        <!-- Hour Hand: Geometric Copper & Emerald Obelisk Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 146 150 L 148 76 L 150 64 L 152 76 L 154 150 Z" fill="#064e3b" stroke="#d97706" stroke-width="1.4"/>
          <line x1="150" y1="140" x2="150" y2="76" stroke="#34d399" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="162" r="4.2" fill="#064e3b" stroke="#d97706" stroke-width="1"/>
        </g>

        <!-- Minute Hand: Slender Copper & Jade Polygon Needle Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 147 150 L 148.5 38 L 150 26 L 151.5 38 L 153 150 Z" fill="#047857" stroke="#d97706" stroke-width="1.4"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#a7f3d0" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="150" cy="166" r="3.6" fill="#047857" stroke="#d97706" stroke-width="1"/>
        </g>

        <!-- Second Hand: Polished Amber / Copper Second Pointer with Rosette Bead -->
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="172" x2="150" y2="16" stroke="#d97706" stroke-width="1.6"/>
          <circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="4" fill="#d97706"/>
        </g>
        ` : ''}

        <!-- Center Cap: Copper Rosette Hub -->
        <circle cx="150" cy="150" r="7.5" fill="#d97706" stroke="#78350f" stroke-width="1.2"/>
        <circle cx="150" cy="150" r="4" fill="#10b981"/>
        <circle cx="150" cy="150" r="1.6" fill="#ffffff"/>
      </g>
    `;
  }
};
