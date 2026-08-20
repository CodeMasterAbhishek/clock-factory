import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const autumn_forestTheme: ClockThemeRenderer = {
  name: 'autumn_forest',
  description: 'Majestic Golden Aspen & Silver Birch Forest at golden hour with multi-depth textured bark, shimmering golden foliage, sunbeams, and drifting autumn leaves',
  defaultColors: {
    face: '#fef3c7',
    dialBorder: '#c2410c',
    hourTicks: '#f59e0b',
    minuteTicks: '#fbbf24',
    numbers: '#7c2d12',
    hourHand: '#7c2d12',
    minuteHand: '#9a3412',
    secondHand: '#ea580c',
    accent: '#f59e0b',
    centerCap: '#f59e0b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Golden Leaf Dial Hour Markers
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 18)">
            <circle cx="0" cy="0" r="3.6" fill="#f59e0b" stroke="#7c2d12" stroke-width="0.8"/>
            <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
          </g>
        `;
      } else {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 18)">
            <circle cx="0" cy="0" r="2.2" fill="#ea580c" stroke="#fefce8" stroke-width="0.6"/>
          </g>
        `;
      }
    }

    return `
      <defs>
        <clipPath id="aspen_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        
        <!-- Golden Hour Sunset Sky Gradient -->
        <linearGradient id="aspen_sunset_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0369a1"/>
          <stop offset="25%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#fef08a"/>
          <stop offset="75%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#9a3412"/>
        </linearGradient>

        <!-- 3D Silver Birch / White Aspen Trunk Gradient -->
        <linearGradient id="birch_bark_grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d6d3d1"/>
          <stop offset="25%" stop-color="#f5f5f4"/>
          <stop offset="50%" stop-color="#ffffff"/>
          <stop offset="80%" stop-color="#e7e5e4"/>
          <stop offset="100%" stop-color="#a8a29e"/>
        </linearGradient>

        <!-- Golden Aspen Foliage Cluster Gradient -->
        <radialGradient id="foliage_gold" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#facc15"/>
          <stop offset="75%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </radialGradient>

        <!-- Amber / Crimson Leaf Cluster Gradient -->
        <radialGradient id="foliage_amber" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fdba74"/>
          <stop offset="45%" stop-color="#f97316"/>
          <stop offset="80%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#9a3412"/>
        </radialGradient>

        <!-- Deep Russet / Ruby Leaf Cluster -->
        <radialGradient id="foliage_ruby" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#f87171"/>
          <stop offset="45%" stop-color="#dc2626"/>
          <stop offset="85%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#450a0a"/>
        </radialGradient>

        <filter id="aspen_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#451a03" flood-opacity="0.45"/>
        </filter>
      </defs>

      <!-- Outer Bezel in Warm Autumn Copper/Terracotta -->
      <circle cx="150" cy="150" r="147" fill="#c2410c" stroke="#7c2d12" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="142" fill="url(#aspen_sunset_sky)" stroke="#f59e0b" stroke-width="1"/>

      <g clip-path="url(#aspen_dial_clip)">
        <!-- Distant Mountain Ranges in Evening Haze (Horizon y=110..155) -->
        <polygon points="10,165 75,120 145,165" fill="#c2410c" opacity="0.35"/>
        <polygon points="105,165 170,110 235,165" fill="#9a3412" opacity="0.4"/>
        <polygon points="185,165 245,125 305,165" fill="#7c2d12" opacity="0.35"/>

        <!-- Radiant Golden Sun Disc & Volumetric Sunbeams -->
        <circle cx="150" cy="92" r="38" fill="#fef08a" opacity="0.45"/>
        <polygon points="150,0 70,300 120,300" fill="#ffffff" opacity="0.16"/>
        <polygon points="150,0 180,300 230,300" fill="#ffffff" opacity="0.16"/>
        <polygon points="150,0 130,300 170,300" fill="#ffffff" opacity="0.12"/>

        <!-- LAYER 1: DISTANT BACKGROUND BIRCH TRUNKS (Slender Depth Layer) -->
        <g opacity="0.65">
          <!-- Distant Trunk Left -->
          <path d="M 108 30 L 105 245 L 114 245 L 117 30 Z" fill="url(#birch_bark_grad)"/>
          <line x1="106" y1="85" x2="115" y2="85" stroke="#292524" stroke-width="1.6"/>
          <line x1="105" y1="150" x2="114" y2="150" stroke="#292524" stroke-width="1.6"/>
          <!-- Distant Trunk Right -->
          <path d="M 228 35 L 225 245 L 234 245 L 237 35 Z" fill="url(#birch_bark_grad)"/>
          <line x1="226" y1="95" x2="235" y2="95" stroke="#292524" stroke-width="1.6"/>
          <line x1="225" y1="160" x2="234" y2="160" stroke="#292524" stroke-width="1.6"/>
        </g>

        <!-- LAYER 2: FOREGROUND HIGH-DETAIL BIRCH & ASPEN TRUNKS -->
        <!-- Trunk 1 (Left Flank) -->
        <g filter="url(#aspen_shadow)">
          <path d="M 52 10 Q 48 135 45 270 L 64 270 Q 66 135 68 10 Z" fill="url(#birch_bark_grad)" stroke="#78716c" stroke-width="0.8"/>
          <!-- Authentic Bark Lenticels & Peeling Bark Strips -->
          <line x1="49" y1="65" x2="65" y2="65" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="48" y1="110" x2="62" y2="110" stroke="#1c1917" stroke-width="2" stroke-linecap="round"/>
          <ellipse cx="54" cy="155" rx="3.5" ry="5.5" fill="#1c1917"/>
          <ellipse cx="54" cy="155" rx="2" ry="3.5" fill="#44403c"/>
          <line x1="47" y1="205" x2="61" y2="205" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Natural Upward Branching -->
          <path d="M 66 85 Q 88 75 102 80" stroke="#44403c" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M 50 135 Q 35 125 22 130" stroke="#44403c" stroke-width="2" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Trunk 2 (Center-Right Main Tree) -->
        <g filter="url(#aspen_shadow)">
          <path d="M 182 8 Q 186 135 188 270 L 208 270 Q 206 135 202 8 Z" fill="url(#birch_bark_grad)" stroke="#78716c" stroke-width="0.8"/>
          <line x1="184" y1="52" x2="200" y2="52" stroke="#1c1917" stroke-width="2.8" stroke-linecap="round"/>
          <ellipse cx="196" cy="105" rx="4" ry="6.5" fill="#1c1917"/>
          <ellipse cx="196" cy="105" rx="2" ry="4" fill="#44403c"/>
          <line x1="186" y1="150" x2="204" y2="150" stroke="#1c1917" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="187" y1="200" x2="205" y2="200" stroke="#1c1917" stroke-width="2.8" stroke-linecap="round"/>
          <!-- Branches -->
          <path d="M 184 75 Q 155 62 138 68" stroke="#44403c" stroke-width="2.8" fill="none" stroke-linecap="round"/>
          <path d="M 204 120 Q 225 110 240 115" stroke="#44403c" stroke-width="2.2" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Trunk 3 (Far Right Border) -->
        <g filter="url(#aspen_shadow)">
          <path d="M 256 15 Q 258 140 260 270 L 275 270 Q 273 140 270 15 Z" fill="url(#birch_bark_grad)" stroke="#78716c" stroke-width="0.8"/>
          <line x1="257" y1="78" x2="271" y2="78" stroke="#1c1917" stroke-width="2.2" stroke-linecap="round"/>
          <line x1="258" y1="140" x2="272" y2="140" stroke="#1c1917" stroke-width="2.2" stroke-linecap="round"/>
        </g>

        <!-- LAYER 3: SHIMMERING GOLDEN ASPEN CANOPY (Multi-Tiered Organic Foliage Clusters) -->
        <g filter="url(#aspen_shadow)">
          <!-- Top Left Canopy Clusters -->
          <ellipse cx="60" cy="35" rx="35" ry="24" fill="url(#foliage_gold)"/>
          <ellipse cx="95" cy="48" rx="28" ry="20" fill="url(#foliage_amber)"/>
          <ellipse cx="40" cy="60" rx="30" ry="22" fill="url(#foliage_ruby)"/>
          <ellipse cx="80" cy="72" rx="24" ry="16" fill="url(#foliage_gold)"/>

          <!-- Top Center Canopy Clusters -->
          <ellipse cx="150" cy="30" rx="42" ry="26" fill="url(#foliage_gold)"/>
          <ellipse cx="125" cy="52" rx="28" ry="18" fill="url(#foliage_amber)"/>
          <ellipse cx="175" cy="50" rx="32" ry="20" fill="url(#foliage_gold)"/>

          <!-- Top Right Canopy Clusters -->
          <ellipse cx="235" cy="35" rx="38" ry="25" fill="url(#foliage_amber)"/>
          <ellipse cx="270" cy="55" rx="30" ry="22" fill="url(#foliage_ruby)"/>
          <ellipse cx="215" cy="62" rx="26" ry="18" fill="url(#foliage_gold)"/>
          <ellipse cx="250" cy="78" rx="24" ry="16" fill="url(#foliage_amber)"/>

          <!-- Individual Sparkle Leaf Details on Canopy Edges -->
          <circle cx="85" cy="85" r="3" fill="#fef08a"/><circle cx="115" cy="72" r="3.5" fill="#facc15"/>
          <circle cx="160" cy="68" r="3.2" fill="#fef08a"/><circle cx="205" cy="76" r="3" fill="#f97316"/>
          <circle cx="230" cy="90" r="3.5" fill="#fef08a"/>
        </g>

        <!-- LAYER 4: FALLEN LEAF MEADOW FLOOR (y=230..300) -->
        <path d="M 0 235 Q 75 224 150 234 T 300 228 L 300 300 L 0 300 Z" fill="#9a3412"/>
        <path d="M 0 248 Q 75 238 150 246 T 300 242 L 300 300 L 0 300 Z" fill="#7c2d12"/>
        <path d="M 0 262 Q 75 252 150 260 T 300 255 L 300 300 L 0 300 Z" fill="#451a03"/>

        <!-- Golden Grass Tufts & Forest Mushrooms on Ground -->
        <g stroke="#f59e0b" stroke-width="1.2" fill="none">
          <path d="M 75 245 L 72 232 M 75 245 L 78 230 M 75 245 L 82 234"/>
          <path d="M 140 248 L 138 236 M 140 248 L 143 234 M 140 248 L 146 238"/>
          <path d="M 220 246 L 217 234 M 220 246 L 222 232 M 220 246 L 226 236"/>
        </g>

        <!-- LAYER 5: SWIRLING AUTUMN LEAVES DRIFTING ON THE WIND (Fluttering across dial) -->
        <!-- Leaf 1 (Center-Left) -->
        <g transform="translate(115, 125) rotate(35) scale(0.9)">
          <path d="M 0 -8 C 6 -6 8 2 0 10 C -8 2 -6 -6 0 -8 Z" fill="#facc15" stroke="#ca8a04" stroke-width="0.6"/>
          <line x1="0" y1="-6" x2="0" y2="8" stroke="#ca8a04" stroke-width="0.5"/>
        </g>
        <!-- Leaf 2 (Center-Right) -->
        <g transform="translate(170, 160) rotate(-45) scale(1)">
          <path d="M 0 -9 C 7 -7 9 2 0 11 C -9 2 -7 -7 0 -9 Z" fill="#ea580c" stroke="#9a3412" stroke-width="0.6"/>
          <line x1="0" y1="-7" x2="0" y2="9" stroke="#9a3412" stroke-width="0.5"/>
        </g>
        <!-- Leaf 3 (Lower Left) -->
        <g transform="translate(90, 185) rotate(70) scale(0.85)">
          <path d="M 0 -8 C 6 -6 8 2 0 10 C -8 2 -6 -6 0 -8 Z" fill="#dc2626" stroke="#991b1b" stroke-width="0.6"/>
        </g>
        <!-- Leaf 4 (Mid Right) -->
        <g transform="translate(235, 135) rotate(-20) scale(0.95)">
          <path d="M 0 -8 C 6 -6 8 2 0 10 C -8 2 -6 -6 0 -8 Z" fill="#f59e0b" stroke="#b45309" stroke-width="0.6"/>
        </g>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <defs>
        <filter id="aspen_hand_shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#451a03" flood-opacity="0.6"/>
        </filter>
      </defs>

      <g filter="url(#aspen_hand_shadow)">
        <!-- Hour Hand: Carved Autumn Bronze Leaf Spear -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 146 150 L 148 76 L 150 64 L 152 76 L 154 150 Z" fill="#7c2d12" stroke="#f59e0b" stroke-width="1.4"/>
          <line x1="150" y1="140" x2="150" y2="76" stroke="#fef08a" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="162" r="4.2" fill="#7c2d12" stroke="#f59e0b" stroke-width="1"/>
        </g>

        <!-- Minute Hand: Slender Terracotta & Gold Flèche Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 147 150 L 148.5 38 L 150 26 L 151.5 38 L 153 150 Z" fill="#9a3412" stroke="#f59e0b" stroke-width="1.4"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#fef08a" stroke-width="1.8" stroke-linecap="round"/>
          <circle cx="150" cy="166" r="3.6" fill="#9a3412" stroke="#f59e0b" stroke-width="1"/>
        </g>

        <!-- Second Hand: Fiery Amber / Crimson Needle with Leaf Counterweight -->
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="172" x2="150" y2="16" stroke="#ea580c" stroke-width="1.6"/>
          <circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="4" fill="#ea580c"/>
        </g>
        ` : ''}

        <!-- Center Cap: Polished Bronze & Amber Rosette -->
        <circle cx="150" cy="150" r="7.5" fill="#f59e0b" stroke="#7c2d12" stroke-width="1.2"/>
        <circle cx="150" cy="150" r="4" fill="#9a3412"/>
        <circle cx="150" cy="150" r="1.6" fill="#ffffff"/>
      </g>
    `;
  }
};
