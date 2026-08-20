import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const machu_picchuTheme: ClockThemeRenderer = {
  name: 'machu_picchu',
  description: 'Ancient Incan citadel of Machu Picchu nestled high in the Andean Cloud Forest with Huayna Picchu granite peaks, curved stone agricultural terraces, and Andean llama',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#15803d" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#22c55e" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="machu_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="andean_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="40%" stop-color="#38bdf8"/>
          <stop offset="75%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#dcfce7"/>
        </linearGradient>
        <linearGradient id="huayna_peak" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#166534"/>
          <stop offset="35%" stop-color="#14532d"/>
          <stop offset="70%" stop-color="#064e3b"/>
          <stop offset="100%" stop-color="#1c1917"/>
        </linearGradient>
        <linearGradient id="terrace_stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#78716c"/>
          <stop offset="50%" stop-color="#57534e"/>
          <stop offset="100%" stop-color="#292524"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Incan Emerald -->
      <circle cx="150" cy="150" r="145" fill="url(#andean_sky)" stroke="#15803d" stroke-width="2.5"/>

      <g clip-path="url(#machu_dial_clip)">
        <!-- Distant Snow-Capped Andes Mountain Peaks in Background -->
        <polygon points="10,200 65,95 130,200" fill="#64748b" opacity="0.35"/>
        <polygon points="65,95 50,120 80,120" fill="#ffffff" opacity="0.6"/>
        <polygon points="170,200 235,105 290,200" fill="#64748b" opacity="0.35"/>
        <polygon points="235,105 220,130 250,130" fill="#ffffff" opacity="0.6"/>

        <!-- 1. ICONIC HUAYNA PICCHU GRANITE PEAKS (Towering Mountain Ridge) -->
        <!-- Main Peak Huayna Picchu (Center-Left) -->
        <path d="M 115 55 
                 C 120 95, 105 135, 45 195 
                 L 185 195 
                 C 160 135, 142 85, 115 55 Z" 
              fill="url(#huayna_peak)"/>
        <!-- Peak Rock Facet Ridge & Sunlit Slope -->
        <path d="M 115 55 C 120 95, 105 135, 45 195 L 115 195 Z" fill="#15803d" opacity="0.35"/>
        <path d="M 115 55 C 135 105, 150 145, 185 195 L 115 195 Z" fill="#052e16" opacity="0.45"/>

        <!-- Secondary Companion Mountain Peak (Right) -->
        <path d="M 215 95 
                 C 235 135, 255 168, 285 198 
                 L 155 198 
                 C 178 150, 198 120, 215 95 Z" 
              fill="#14532d"/>
        <path d="M 215 95 C 235 135, 255 168, 285 198 L 215 198 Z" fill="#064e3b" opacity="0.5"/>

        <!-- 2. ETHEREAL ANDEAN CLOUD FOREST MIST (Parting over Citadel) -->
        <path d="M 10 135 Q 85 125 160 135 T 300 128 L 300 152 Q 220 142 150 150 T 10 152 Z" fill="#ffffff" opacity="0.45"/>
        <path d="M 0 165 Q 110 155 210 165 T 300 160 L 300 178 Q 210 170 120 178 T 0 178 Z" fill="#ffffff" opacity="0.35"/>

        <!-- 3. ORGANIC CURVED INCAN AGRICULTURAL TERRACES (Natural Mountain Slopes) -->
        
        <!-- Upper Terraced Slope 1 (y=175..205) -->
        <path d="M 25 185 Q 150 172 275 185 L 275 198 Q 150 185 25 198 Z" fill="url(#terrace_stone)"/>
        <path d="M 25 185 Q 150 172 275 185 L 275 188 Q 150 175 25 188 Z" fill="#22c55e"/>
        <!-- Stone Mortar Joint Details -->
        <g stroke="#1c1917" stroke-width="0.8" opacity="0.6">
          <line x1="65" y1="187" x2="65" y2="197"/><line x1="115" y1="186" x2="115" y2="196"/>
          <line x1="175" y1="186" x2="175" y2="196"/><line x1="235" y1="187" x2="235" y2="197"/>
        </g>

        <!-- Mid Terraced Slope 2 (y=198..230) -->
        <path d="M 15 208 Q 150 192 285 208 L 285 224 Q 150 208 15 224 Z" fill="url(#terrace_stone)"/>
        <path d="M 15 208 Q 150 192 285 208 L 285 212 Q 150 196 15 212 Z" fill="#16a34a"/>
        <g stroke="#1c1917" stroke-width="0.8" opacity="0.6">
          <line x1="50" y1="210" x2="50" y2="223"/><line x1="98" y1="208" x2="98" y2="222"/>
          <line x1="152" y1="207" x2="152" y2="221"/><line x1="205" y1="208" x2="205" y2="222"/><line x1="255" y1="210" x2="255" y2="223"/>
        </g>

        <!-- Foreground Grand Terrace 3 (y=224..265) -->
        <path d="M 0 234 Q 150 218 300 234 L 300 255 Q 150 238 0 255 Z" fill="url(#terrace_stone)"/>
        <path d="M 0 234 Q 150 218 300 234 L 300 239 Q 150 223 0 239 Z" fill="#15803d"/>
        <g stroke="#1c1917" stroke-width="1" opacity="0.6">
          <line x1="40" y1="237" x2="40" y2="254"/><line x1="85" y1="235" x2="85" y2="252"/>
          <line x1="135" y1="233" x2="135" y2="250"/><line x1="185" y1="233" x2="185" y2="250"/>
          <line x1="235" y1="235" x2="235" y2="252"/><line x1="275" y1="237" x2="275" y2="254"/>
        </g>

        <!-- Base Valley Grass Floor -->
        <path d="M 0 255 Q 150 242 300 255 L 300 300 L 0 300 Z" fill="#0f391b"/>

        <!-- 4. INCAN STONE CITADEL WATCHTOWER (Left Terrace: Authentic Thatched Hut) -->
        <g transform="translate(68, 182)">
          <!-- Granite Stone Masonry Wall -->
          <polygon points="0,0 24,0 24,16 0,16" fill="#a8a29e" stroke="#44403c" stroke-width="0.8"/>
          <!-- Trapezoidal Incan Doorway -->
          <polygon points="8,16 9,6 15,6 16,16" fill="#1c1917"/>
          <!-- Thatched Straw Roof (Paja Brava Grass) -->
          <polygon points="-4,0 12,-12 28,0" fill="#ca8a04" stroke="#854d0e" stroke-width="0.8"/>
          <line x1="12" y1="-12" x2="2" y2="0" stroke="#a16207" stroke-width="0.8"/>
          <line x1="12" y1="-12" x2="12" y2="0" stroke="#a16207" stroke-width="0.8"/>
          <line x1="12" y1="-12" x2="22" y2="0" stroke="#a16207" stroke-width="0.8"/>
        </g>

        <!-- 5. ELEGANT ANDEAN LLAMA (Grazing peacefully on mid-terrace: Natural proportioned anatomy) -->
        <g transform="translate(180, 206) scale(0.9)">
          <!-- Fluffy Woolly Body -->
          <ellipse cx="0" cy="0" rx="15" ry="10" fill="#f8fafc" stroke="#e2e8f0" stroke-width="0.8"/>
          <!-- Fluffy Tail -->
          <circle cx="-13" cy="-2" r="3.5" fill="#f8fafc"/>

          <!-- Graceful Slender Neck & Head -->
          <path d="M 8 2 L 14 -16 L 19 -16 L 14 4 Z" fill="#f8fafc"/>
          <ellipse cx="17" cy="-16" rx="5" ry="3.5" fill="#f8fafc" stroke="#e2e8f0" stroke-width="0.6"/>
          
          <!-- Cute Tilted Ears -->
          <polygon points="15,-18 16,-24 18,-18" fill="#fed7aa"/>
          <polygon points="17,-18 19,-23 20,-18" fill="#f8fafc"/>

          <!-- Dark Eye & Snout -->
          <circle cx="19" cy="-17" r="1.2" fill="#0f172a"/>
          <circle cx="21" cy="-15" r="1" fill="#475569"/>

          <!-- Realistic Four Legs Standing Naturally in Grass -->
          <!-- Rear Legs -->
          <line x1="-8" y1="8" x2="-8" y2="18" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="-3" y1="8" x2="-3" y2="18" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
          <!-- Front Legs -->
          <line x1="6" y1="8" x2="6" y2="18" stroke="#e2e8f0" stroke-width="2.5" stroke-linecap="round"/>
          <line x1="11" y1="8" x2="11" y2="18" stroke="#cbd5e1" stroke-width="2.5" stroke-linecap="round"/>
          
          <!-- Dark Hooves -->
          <rect x="-9.5" y="16" width="3" height="3" rx="0.5" fill="#44403c"/>
          <rect x="-4.5" y="16" width="3" height="3" rx="0.5" fill="#44403c"/>
          <rect x="4.5" y="16" width="3" height="3" rx="0.5" fill="#44403c"/>
          <rect x="9.5" y="16" width="3" height="3" rx="0.5" fill="#44403c"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#14532d" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#22c55e" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#166534" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#4ade80" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#eab308" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#eab308" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#eab308"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#14532d" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#22c55e"/>
      </g>
    `;
  }
};
