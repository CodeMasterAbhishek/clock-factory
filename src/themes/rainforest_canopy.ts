import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const rainforest_canopyTheme: ClockThemeRenderer = {
  name: 'rainforest_canopy',
  description: 'Deep Amazon rainforest canopy with sunlit monstera fronds, bromeliad blossoms, and an exquisite keel-billed toucan',
  defaultColors: {
    face: '#064e3b',
    dialBorder: '#047857',
    hourTicks: '#34d399',
    minuteTicks: '#a7f3d0',
    numbers: '#ecfdf5',
    hourHand: '#022c22',
    minuteHand: '#064e3b',
    secondHand: '#f97316',
    accent: '#facc15',
    centerCap: '#facc15'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Golden Luminous Jungle Seed Markers
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 20)">
            <circle cx="0" cy="0" r="3.5" fill="#facc15" stroke="#064e3b" stroke-width="0.8"/>
            <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
          </g>
        `;
      } else {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 20)">
            <circle cx="0" cy="0" r="2.2" fill="#34d399" stroke="#064e3b" stroke-width="0.6"/>
          </g>
        `;
      }
    }

    return `
      <defs>
        <clipPath id="rainforest_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        
        <!-- Rainforest Canopy Atmosphere Gradient -->
        <linearGradient id="rf_sky_ambient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="25%" stop-color="#a7f3d0"/>
          <stop offset="55%" stop-color="#059669"/>
          <stop offset="85%" stop-color="#064e3b"/>
          <stop offset="100%" stop-color="#022c22"/>
        </linearGradient>

        <!-- Monstera Leaf Texture Gradient -->
        <linearGradient id="monstera_grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#15803d"/>
          <stop offset="50%" stop-color="#166534"/>
          <stop offset="100%" stop-color="#052e16"/>
        </linearGradient>

        <!-- Toucan Beak Rainbow Gradient -->
        <linearGradient id="toucan_beak_grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#facc15"/>
          <stop offset="40%" stop-color="#f97316"/>
          <stop offset="70%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#38bdf8"/>
        </linearGradient>

        <!-- Exotic Orchid Pink Gradient -->
        <radialGradient id="orchid_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f472b6"/>
          <stop offset="60%" stop-color="#db2777"/>
          <stop offset="100%" stop-color="#831843"/>
        </radialGradient>

        <filter id="rf_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="3" flood-color="#022c22" flood-opacity="0.45"/>
        </filter>
      </defs>

      <!-- Outer Rainforest Bezel -->
      <circle cx="150" cy="150" r="147" fill="#064e3b" stroke="#047857" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="142" fill="url(#rf_sky_ambient)" stroke="#10b981" stroke-width="0.8"/>

      <g clip-path="url(#rainforest_dial_clip)">
        <!-- Misty Sunbeams / Volumetric Light Filtering Through Top Canopy -->
        <polygon points="150,0 60,300 110,300" fill="#fef08a" opacity="0.18"/>
        <polygon points="150,0 180,300 230,300" fill="#fef08a" opacity="0.15"/>
        <polygon points="150,0 120,300 160,300" fill="#ffffff" opacity="0.12"/>

        <!-- BACKGROUND CANOPY (Distant Deep Jungle Foliage) -->
        <!-- Layer 1: Distant Canopy Palms -->
        <path d="M -10 120 Q 80 80 130 150 Q 60 140 -10 150 Z" fill="#065f46" opacity="0.7"/>
        <path d="M 310 110 Q 220 70 170 140 Q 240 130 310 140 Z" fill="#065f46" opacity="0.7"/>

        <!-- Layer 2: Lush Banana Palm Fronds (Mid Depth) -->
        <g fill="#047857" stroke="#064e3b" stroke-width="0.8">
          <!-- Left Palm Frond -->
          <path d="M 0 160 C 60 130 110 170 120 220 C 70 200 20 210 0 230 Z"/>
          <path d="M 10 180 Q 70 165 110 200" stroke="#a7f3d0" stroke-width="0.8" fill="none" opacity="0.6"/>
          <!-- Right Palm Frond -->
          <path d="M 300 160 C 240 130 190 170 180 220 C 230 200 280 210 300 230 Z"/>
          <path d="M 290 180 Q 230 165 190 200" stroke="#a7f3d0" stroke-width="0.8" fill="none" opacity="0.6"/>
        </g>

        <!-- Layer 3: Hanging Jungle Liana Vines -->
        <path d="M 35 0 Q 60 80 40 160 T 65 260" stroke="#78350f" stroke-width="2.2" fill="none"/>
        <path d="M 265 0 Q 240 90 260 170 T 235 270" stroke="#78350f" stroke-width="2.2" fill="none"/>

        <!-- LAYER 4: DETAILED EXOTIC TOUCAN ON MOSSY JUNGLE BRANCH (Center-Right) -->
        <g filter="url(#rf_shadow)">
          <!-- Mossy Jungle Branch -->
          <path d="M 140 125 C 180 115 230 122 280 138 L 285 148 C 230 132 180 125 138 135 Z" fill="#58310c"/>
          <!-- Moss Patches on Branch -->
          <ellipse cx="185" cy="122" rx="14" ry="3" fill="#65a30d"/>
          <ellipse cx="235" cy="130" rx="18" ry="3.5" fill="#84cc16"/>

          <!-- Toucan Body Group -->
          <g transform="translate(198, 70)">
            <!-- Claws on Branch -->
            <path d="M -4 54 L -2 58 M 2 54 L 4 58" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>
            <path d="M 12 56 L 14 60 M 18 56 L 20 60" stroke="#64748b" stroke-width="2" stroke-linecap="round"/>

            <!-- Tail Feathers -->
            <path d="M -12 42 L -24 75 L -14 78 L -4 48 Z" fill="#0f172a"/>
            <path d="M -8 44 L -16 80 L -8 82 L 0 50 Z" fill="#1e293b"/>
            <!-- Scarlet Undertail Coverts -->
            <path d="M -10 42 C -14 48 -4 54 0 46 Z" fill="#dc2626"/>

            <!-- Main Black Feathered Body -->
            <path d="M -10 20 C -15 35 -6 50 10 52 C 26 50 30 35 24 15 C 20 -2 2 -8 -6 5 Z" fill="#090d16"/>
            <!-- Navy Wing Sheen -->
            <path d="M -4 22 C -10 32 -6 44 4 48 C 6 36 2 26 -4 22 Z" fill="#1e3a8a" opacity="0.6"/>

            <!-- Brilliant Golden Yellow Throat Bib with White Collar -->
            <path d="M 2 8 C 8 -2 24 0 28 16 C 26 28 14 36 2 34 C 8 24 8 16 2 8 Z" fill="#facc15" stroke="#ffffff" stroke-width="1.2"/>
            <!-- Crimson Bib Border -->
            <path d="M 2 34 C 8 36 18 34 26 28" stroke="#dc2626" stroke-width="2" fill="none"/>

            <!-- Toucan Head Eye Ring & Eye -->
            <circle cx="16" cy="10" r="5.5" fill="#38bdf8"/>
            <circle cx="17" cy="10" r="3.2" fill="#0284c7"/>
            <circle cx="17.5" cy="9.5" r="1.8" fill="#0f172a"/>
            <circle cx="18" cy="9" r="0.7" fill="#ffffff"/>

            <!-- Magnificent Keel-Billed Toucan Rainbow Beak -->
            <path d="M 24 4 C 42 -12 68 -6 74 8 C 60 16 38 16 26 18 Z" fill="url(#toucan_beak_grad)" stroke="#1e293b" stroke-width="0.8"/>
            <!-- Emerald Beak Tip & Black Serration Edge -->
            <path d="M 64 2 C 72 4 75 8 74 10 C 68 14 62 13 60 10 Z" fill="#10b981"/>
            <path d="M 68 6 L 74 8 L 68 10 Z" fill="#38bdf8"/>
            <line x1="28" y1="16" x2="70" y2="9" stroke="#0f172a" stroke-width="1"/>
          </g>
        </g>

        <!-- LAYER 5: FOREGROUND GIANT MONSTERA DELICIOSA LEAVES (Lower Left & Bottom) -->
        <g filter="url(#rf_shadow)">
          <!-- Giant Left Monstera Leaf -->
          <g transform="translate(60, 240) rotate(-20) scale(1.15)">
            <path d="M 0 -70 C 45 -60 65 -20 50 30 C 35 65 -20 70 -45 35 C -60 -10 -40 -60 0 -70 Z" fill="url(#monstera_grad)" stroke="#052e16" stroke-width="1.2"/>
            <!-- Main Central Leaf Vein -->
            <path d="M 0 -65 Q 0 0 5 60" stroke="#86efac" stroke-width="1.8" fill="none" opacity="0.7"/>
            <!-- Fenestration Holes / Slits (Iconic Monstera cuts) -->
            <ellipse cx="22" cy="-25" rx="10" ry="2.5" transform="rotate(25 22 -25)" fill="#064e3b"/>
            <ellipse cx="28" cy="5" rx="12" ry="3" transform="rotate(15 28 5)" fill="#064e3b"/>
            <ellipse cx="18" cy="32" rx="9" ry="2.5" transform="rotate(5 18 32)" fill="#064e3b"/>
            <ellipse cx="-22" cy="-25" rx="10" ry="2.5" transform="rotate(-25 -22 -25)" fill="#064e3b"/>
            <ellipse cx="-26" cy="5" rx="11" ry="3" transform="rotate(-15 -26 5)" fill="#064e3b"/>
            <ellipse cx="-18" cy="30" rx="8" ry="2.5" transform="rotate(-5 -18 30)" fill="#064e3b"/>
            <!-- Dew Drop on Leaf -->
            <ellipse cx="8" cy="-10" rx="3" ry="2" fill="#ffffff" opacity="0.8"/>
          </g>

          <!-- Right Foreground Tropical Fern -->
          <g transform="translate(235, 255) rotate(15)">
            <path d="M 0 -50 Q 25 -25 35 25 Q 5 20 -25 15 Q -15 -25 0 -50 Z" fill="#15803d" stroke="#052e16" stroke-width="1"/>
            <path d="M 0 -45 Q 10 0 5 22" stroke="#a7f3d0" stroke-width="1.5" fill="none" opacity="0.6"/>
          </g>

          <!-- Tropical Magenta Orchid / Bromeliad Blossom (Bottom Center) -->
          <g transform="translate(150, 260) scale(0.95)">
            <path d="M -14 -8 C -22 -24 -6 -28 0 -12 C 6 -28 22 -24 14 -8 Z" fill="url(#orchid_grad)"/>
            <path d="M -18 4 C -30 0 -24 18 -10 12 C -2 18 2 18 10 12 C 24 18 30 0 18 4 Z" fill="url(#orchid_grad)"/>
            <circle cx="0" cy="0" r="4.5" fill="#facc15"/>
            <circle cx="0" cy="0" r="2" fill="#ffffff"/>
          </g>
        </g>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <defs>
        <filter id="rf_hand_shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#022c22" flood-opacity="0.6"/>
        </filter>
      </defs>

      <g filter="url(#rf_hand_shadow)">
        <!-- Hour Hand: Gold & Deep Emerald Sword Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 148 74 L 150 64 L 152 74 L 155 150 Z" fill="#064e3b" stroke="#facc15" stroke-width="1.4"/>
          <line x1="150" y1="140" x2="150" y2="76" stroke="#34d399" stroke-width="2.4" stroke-linecap="round"/>
          <circle cx="150" cy="162" r="4.5" fill="#064e3b" stroke="#facc15" stroke-width="1"/>
        </g>

        <!-- Minute Hand: Extended Gold & Emerald Flèche Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 148.5 38 L 150 28 L 151.5 38 L 153.5 150 Z" fill="#047857" stroke="#facc15" stroke-width="1.4"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="166" r="3.8" fill="#047857" stroke="#facc15" stroke-width="1"/>
        </g>

        <!-- Second Hand: Tropical Toucan-Orange Needle -->
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="172" x2="150" y2="16" stroke="#f97316" stroke-width="1.6"/>
          <circle cx="150" cy="16" r="3.5" fill="#f97316" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="4" fill="#f97316"/>
        </g>
        ` : ''}

        <!-- Center Cap: Polished Gold & Emerald Stud -->
        <circle cx="150" cy="150" r="7.5" fill="#facc15" stroke="#064e3b" stroke-width="1.2"/>
        <circle cx="150" cy="150" r="4" fill="#047857"/>
        <circle cx="150" cy="150" r="1.5" fill="#ffffff"/>
      </g>
    `;
  }
};

