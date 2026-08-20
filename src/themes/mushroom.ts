import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const mushroomTheme: ClockThemeRenderer = {
  name: 'mushroom',
  description: 'Enchanted woodland Amanita grove with dimensional scarlet mushroom caps, spore gills, lush forest moss, and fiddlehead ferns',
  defaultColors: {
    face: '#fef3c7',
    dialBorder: '#78350f',
    hourTicks: '#b45309',
    minuteTicks: '#d97706',
    numbers: '#78350f',
    hourHand: '#78350f',
    minuteHand: '#92400e',
    secondHand: '#dc2626',
    accent: '#f59e0b',
    centerCap: '#f59e0b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Botanical Golden Seed Hour Markers
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 20)">
            <circle cx="0" cy="0" r="3.6" fill="#b45309" stroke="#fef08a" stroke-width="0.8"/>
            <circle cx="0" cy="0" r="1.5" fill="#fde047"/>
          </g>
        `;
      } else {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 20)">
            <circle cx="0" cy="0" r="2.2" fill="#d97706" stroke="#fefce8" stroke-width="0.6"/>
          </g>
        `;
      }
    }
    
    return `
      <defs>
        <clipPath id="mushroom_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        
        <!-- Mystical Forest Background Gradient -->
        <radialGradient id="forest_glade" cx="50%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#fef9c3"/>
          <stop offset="45%" stop-color="#fef08a"/>
          <stop offset="75%" stop-color="#d9f99d"/>
          <stop offset="100%" stop-color="#84cc16"/>
        </radialGradient>

        <!-- Shaded Amanita Cap Gradient -->
        <radialGradient id="amanita_cap_3d" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stop-color="#f87171"/>
          <stop offset="30%" stop-color="#ef4444"/>
          <stop offset="65%" stop-color="#dc2626"/>
          <stop offset="90%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#450a0a"/>
        </radialGradient>

        <!-- Baby Amanita Shading -->
        <radialGradient id="baby_amanita_3d" cx="35%" cy="25%" r="75%">
          <stop offset="0%" stop-color="#fca5a5"/>
          <stop offset="45%" stop-color="#ef4444"/>
          <stop offset="100%" stop-color="#7f1d1d"/>
        </radialGradient>

        <!-- Golden Spore Glow -->
        <radialGradient id="spore_glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="1"/>
          <stop offset="60%" stop-color="#facc15" stop-opacity="0.5"/>
          <stop offset="100%" stop-color="#ca8a04" stop-opacity="0"/>
        </radialGradient>

        <filter id="mush_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="#451a03" flood-opacity="0.4"/>
        </filter>
      </defs>
      
      <!-- Outer Dial Bezel in Carved Woodland Walnut -->
      <circle cx="150" cy="150" r="147" fill="#78350f" stroke="#451a03" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="142" fill="url(#forest_glade)" stroke="#ca8a04" stroke-width="1"/>

      <g clip-path="url(#mushroom_dial_clip)">
        <!-- Sunbeams Streaming into Woodland Glade -->
        <polygon points="150,0 70,300 120,300" fill="#ffffff" opacity="0.18"/>
        <polygon points="150,0 170,300 220,300" fill="#ffffff" opacity="0.15"/>

        <!-- Distant Pine Tree Silhouettes in Mist (y=90..180) -->
        <g fill="#4d7c0f" opacity="0.25">
          <polygon points="40,190 55,120 70,190"/>
          <polygon points="65,195 80,130 95,195"/>
          <polygon points="205,195 220,125 235,195"/>
          <polygon points="230,190 245,135 260,190"/>
        </g>

        <!-- Deep Moss Ground Bed with Multi-Layered Cushion Ridges -->
        <path d="M 0 225 Q 75 210 150 220 T 300 215 L 300 300 L 0 300 Z" fill="#14532d" opacity="0.6"/>
        <path d="M 0 238 Q 75 222 150 232 T 300 228 L 300 300 L 0 300 Z" fill="#166534"/>
        <path d="M 0 250 Q 80 235 150 244 T 300 240 L 300 300 L 0 300 Z" fill="#15803d"/>
        <path d="M 0 262 Q 75 248 150 256 T 300 252 L 300 300 L 0 300 Z" fill="#4d7c0f"/>

        <!-- Fiddlehead Ferns & Forest Herbs (Left & Right Flanks) -->
        <g stroke="#166534" stroke-width="1.4" fill="none">
          <!-- Left Fiddlehead Coil -->
          <path d="M 45 250 Q 55 200 65 180 Q 75 165 70 155 Q 62 152 62 160 Q 64 165 70 165"/>
          <path d="M 52 220 Q 42 210 40 215" fill="#4d7c0f"/>
          <path d="M 58 200 Q 48 190 46 195" fill="#65a30d"/>
          <!-- Right Fern Frond -->
          <path d="M 255 250 Q 245 195 235 175 Q 225 160 230 152 Q 238 150 238 158"/>
          <path d="M 248 220 Q 258 210 260 215" fill="#4d7c0f"/>
          <path d="M 242 200 Q 252 190 254 195" fill="#65a30d"/>
        </g>

        <!-- ENCHANTED AMANITA MUSHROOM CLUSTER (Centerpiece) -->
        <!-- 1. Little Baby Amanita (Right Side) -->
        <g transform="translate(205, 215) rotate(12)" filter="url(#mush_shadow)">
          <!-- Stem -->
          <path d="M -4 20 C -3 8 -1 0 1 -6 L 7 -6 C 8 0 9 8 10 20 Z" fill="#fefce8" stroke="#ca8a04" stroke-width="0.8"/>
          <ellipse cx="3.5" cy="-5" rx="14" ry="3.5" fill="#fef08a" stroke="#ca8a04" stroke-width="0.6"/>
          <!-- Dome Cap -->
          <path d="M -12 -5 C -12 -25 19 -25 19 -5 Z" fill="url(#baby_amanita_3d)" stroke="#7f1d1d" stroke-width="0.8"/>
          <circle cx="3" cy="-15" r="2.4" fill="#ffffff"/>
          <circle cx="-5" cy="-10" r="1.8" fill="#ffffff"/>
          <circle cx="11" cy="-10" r="1.8" fill="#ffffff"/>
        </g>

        <!-- 2. Medium Amanita (Left Side) -->
        <g transform="translate(92, 208) rotate(-10)" filter="url(#mush_shadow)">
          <!-- Stem with Annulus Skirt Ring -->
          <path d="M -5 30 C -4 12 -2 0 0 -8 L 8 -8 C 10 0 11 12 12 30 Z" fill="#fefce8" stroke="#ca8a04" stroke-width="0.8"/>
          <path d="M -4 10 Q 4 15 11 10" stroke="#ca8a04" stroke-width="1.2" fill="none"/>
          <ellipse cx="4" cy="-6" rx="22" ry="5" fill="#fef08a" stroke="#ca8a04" stroke-width="0.6"/>
          <!-- Cap -->
          <path d="M -18 -6 C -18 -32 26 -32 26 -6 Z" fill="url(#amanita_cap_3d)" stroke="#7f1d1d" stroke-width="1"/>
          <circle cx="4" cy="-20" r="3" fill="#ffffff"/>
          <circle cx="-8" cy="-14" r="2.2" fill="#ffffff"/>
          <circle cx="16" cy="-14" r="2.2" fill="#ffffff"/>
          <circle cx="5" cy="-10" r="1.6" fill="#ffffff"/>
        </g>

        <!-- 3. Grand Centerpiece Amanita Muscaria (Center) -->
        <g transform="translate(150, 192)" filter="url(#mush_shadow)">
          <!-- Stem with textured bark & draped veil ring -->
          <path d="M -9 48 C -7 20 -4 0 0 -12 L 12 -12 C 16 0 19 20 21 48 Z" fill="#fefce8" stroke="#b45309" stroke-width="1"/>
          <!-- Fluffy Veil / Annulus -->
          <path d="M -8 16 C -4 24 16 24 20 16 L 22 22 C 16 30 -4 30 -10 22 Z" fill="#fef08a" stroke="#ca8a04" stroke-width="0.7"/>
          
          <!-- Radiating Underside Gills -->
          <ellipse cx="6" cy="-10" rx="42" ry="9" fill="#fef9c3" stroke="#ca8a04" stroke-width="0.8"/>
          <g stroke="#d97706" stroke-width="0.6" opacity="0.6">
            <line x1="6" y1="-10" x2="-26" y2="-10"/>
            <line x1="6" y1="-10" x2="-18" y2="-14"/>
            <line x1="6" y1="-10" x2="-6" y2="-16"/>
            <line x1="6" y1="-10" x2="6" y2="-17"/>
            <line x1="6" y1="-10" x2="18" y2="-16"/>
            <line x1="6" y1="-10" x2="30" y2="-14"/>
            <line x1="6" y1="-10" x2="38" y2="-10"/>
          </g>

          <!-- Rich Scarlet Domed Cap with Natural Curvature -->
          <path d="M -36 -10 C -36 -52 48 -52 48 -10 C 48 0 -36 0 -36 -10 Z" fill="url(#amanita_cap_3d)" stroke="#7f1d1d" stroke-width="1.4"/>

          <!-- 3D Layered White Spore Warts -->
          <circle cx="6" cy="-36" r="4.8" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
          <circle cx="-14" cy="-28" r="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
          <circle cx="26" cy="-28" r="4" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
          <circle cx="-26" cy="-18" r="3.2" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
          <circle cx="38" cy="-18" r="3.2" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
          <circle cx="8" cy="-22" r="2.8" fill="#ffffff"/>
          <circle cx="-4" cy="-16" r="2.4" fill="#ffffff"/>
          <circle cx="18" cy="-16" r="2.4" fill="#ffffff"/>
        </g>

        <!-- Golden Fairy Spores Drifting in the Air -->
        <circle cx="110" cy="110" r="7" fill="url(#spore_glow)"/>
        <circle cx="110" cy="110" r="1.5" fill="#ffffff"/>
        
        <circle cx="190" cy="100" r="8" fill="url(#spore_glow)"/>
        <circle cx="190" cy="100" r="1.8" fill="#ffffff"/>

        <circle cx="150" cy="65" r="6" fill="url(#spore_glow)"/>
        <circle cx="150" cy="65" r="1.3" fill="#ffffff"/>

        <circle cx="70" cy="150" r="6.5" fill="url(#spore_glow)"/>
        <circle cx="70" cy="150" r="1.4" fill="#ffffff"/>

        <circle cx="230" cy="140" r="7" fill="url(#spore_glow)"/>
        <circle cx="230" cy="140" r="1.5" fill="#ffffff"/>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <defs>
        <filter id="mush_hand_shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="3" stdDeviation="3.5" flood-color="#451a03" flood-opacity="0.55"/>
        </filter>
      </defs>

      <g filter="url(#mush_hand_shadow)">
        <!-- Hour Hand: Antique Oak Leaf Spear -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 146.5 150 L 148 84 C 143 80 143 68 150 60 C 157 68 157 80 152 84 L 153.5 150 Z" fill="#78350f" stroke="#fef3c7" stroke-width="1.2"/>
          <circle cx="150" cy="72" r="3" fill="#f59e0b"/>
          <circle cx="150" cy="162" r="4" fill="#78350f" stroke="#fef3c7" stroke-width="1"/>
        </g>

        <!-- Minute Hand: Slender Woodland Beech Spear -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 147.5 150 L 148.5 48 C 145 42 145 30 150 22 C 155 30 155 42 151.5 48 L 152.5 150 Z" fill="#92400e" stroke="#fef3c7" stroke-width="1.2"/>
          <circle cx="150" cy="34" r="2.6" fill="#fef08a"/>
          <circle cx="150" cy="166" r="3.5" fill="#92400e" stroke="#fef3c7" stroke-width="1"/>
        </g>

        <!-- Second Hand: Scarlet Amanita Needle with Mushroom Hub -->
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="172" x2="150" y2="16" stroke="#dc2626" stroke-width="1.6"/>
          <circle cx="150" cy="16" r="3.5" fill="#dc2626" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="4" fill="#dc2626"/>
        </g>
        ` : ''}

        <!-- Center Cap: Polished Amber & Gold Stud -->
        <circle cx="150" cy="150" r="7.5" fill="#ca8a04" stroke="#451a03" stroke-width="1.2"/>
        <circle cx="150" cy="150" r="4" fill="#f59e0b"/>
        <circle cx="150" cy="150" r="1.6" fill="#ffffff"/>
      </g>
    `;
  }
};

