import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const volcanoTheme: ClockThemeRenderer = {
  name: 'volcano',
  description: 'Dramatic Molten Volcano Eruption featuring basaltic caldera, glowing magma rivers cascading down rocky slopes, volcanic ash plumes, and fiery incandescent embers',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#facc15" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.2" fill="#ea580c" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="volcano_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Night Volcanic Ash Sky Gradient -->
        <linearGradient id="volcanic_night_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="35%" stop-color="#0f172a"/>
          <stop offset="70%" stop-color="#1c1917"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>
        <!-- Glowing Molten Magma Core Gradient -->
        <linearGradient id="molten_magma" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="25%" stop-color="#fef08a"/>
          <stop offset="55%" stop-color="#facc15"/>
          <stop offset="80%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#dc2626"/>
        </linearGradient>
        <!-- Basalt Rock Slope Gradient -->
        <linearGradient id="basalt_rock" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#27272a"/>
          <stop offset="40%" stop-color="#18181b"/>
          <stop offset="85%" stop-color="#09090b"/>
          <stop offset="100%" stop-color="#000000"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.7"/>
        </filter>
        <filter id="magma_glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Outer Bezel in Magma Flame -->
      <circle cx="150" cy="150" r="145" fill="url(#volcanic_night_sky)" stroke="#ea580c" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="139" fill="none" stroke="#facc15" stroke-width="0.8" stroke-dasharray="2 3"/>

      <g clip-path="url(#volcano_dial_clip)">
        <!-- 1. VOLCANIC ASH & SMOKE PLUME (Rising into Night Sky: y=20..115) -->
        <g fill="#18181b" opacity="0.85">
          <circle cx="120" cy="65" r="42"/><circle cx="175" cy="55" r="46"/><circle cx="145" cy="40" r="50"/>
        </g>
        <g fill="#27272a" opacity="0.6">
          <circle cx="105" cy="80" r="32"/><circle cx="190" cy="72" r="36"/><circle cx="150" cy="60" r="40"/>
        </g>

        <!-- Incandescent Eruption Glow behind Summit -->
        <circle cx="150" cy="115" r="50" fill="#ea580c" opacity="0.45"/>
        <circle cx="150" cy="115" r="28" fill="#facc15" opacity="0.35"/>

        <!-- 2. BASALT VOLCANO MOUNTAIN CONE (Grand Stratovolcano: y=105..295) -->
        <path d="M 125 110 
                 C 110 160, 60 210, 0 280 
                 L 300 280 
                 C 240 210, 190 160, 175 110 Z" 
              fill="url(#basalt_rock)"/>

        <!-- Basalt Rock Ribs & Crevasses -->
        <g stroke="#09090b" stroke-width="2" fill="none" opacity="0.7">
          <path d="M 130 115 Q 100 180 35 280"/>
          <path d="M 142 118 Q 120 190 85 280"/>
          <path d="M 158 118 Q 180 190 215 280"/>
          <path d="M 170 115 Q 200 180 265 280"/>
        </g>

        <!-- Summit Caldera Rim (Glowing boiling lava lake at the crater: y=102..118) -->
        <ellipse cx="150" cy="110" rx="26" ry="10" fill="url(#molten_magma)" stroke="#7c2d12" stroke-width="1.5"/>
        <ellipse cx="150" cy="110" rx="18" ry="6" fill="#ffffff" opacity="0.85"/>

        <!-- 3. ORGANIC BRANCHING GLOWING LAVA RIVERS (Flowing down mountain slopes) -->
        
        <!-- Main Central/Left Lava Flow River (Organic braided channels) -->
        <g filter="url(#magma_glow)">
          <!-- Fiery Outer Magma Stream -->
          <path d="M 142 115 
                   C 132 145, 140 170, 126 200 
                   C 115 225, 95 245, 82 280" 
                stroke="#ea580c" stroke-width="6" fill="none" stroke-linecap="round"/>
          <!-- Branch Left -->
          <path d="M 132 155 C 115 185, 85 215, 60 280" stroke="#ea580c" stroke-width="4.5" fill="none" stroke-linecap="round"/>
          <!-- Branch Right -->
          <path d="M 126 200 C 135 230, 145 255, 142 280" stroke="#ea580c" stroke-width="4.5" fill="none" stroke-linecap="round"/>

          <!-- Bright Yellow/White Molten Core -->
          <path d="M 142 115 C 132 145, 140 170, 126 200 C 115 225, 95 245, 82 280" stroke="#fef08a" stroke-width="2.5" fill="none" stroke-linecap="round"/>
          <path d="M 132 155 C 115 185, 85 215, 60 280" stroke="#fef08a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <path d="M 126 200 C 135 230, 145 255, 142 280" stroke="#fef08a" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        </g>

        <!-- Right Flank Lava Stream -->
        <g filter="url(#magma_glow)">
          <path d="M 158 115 
                   C 168 145, 162 175, 178 210 
                   C 192 235, 215 255, 228 280" 
                stroke="#ea580c" stroke-width="5" fill="none" stroke-linecap="round"/>
          <!-- Right Side Branch -->
          <path d="M 178 210 C 172 235, 175 258, 185 280" stroke="#ea580c" stroke-width="3.5" fill="none" stroke-linecap="round"/>

          <!-- Yellow Core -->
          <path d="M 158 115 C 168 145, 162 175, 178 210 C 192 235, 215 255, 228 280" stroke="#fef08a" stroke-width="2" fill="none" stroke-linecap="round"/>
          <path d="M 178 210 C 172 235, 175 258, 185 280" stroke="#fef08a" stroke-width="1.4" fill="none" stroke-linecap="round"/>
        </g>

        <!-- 4. INCANDESCENT ERUPTING MAGMA SPARKS & EMBERS (Bursting from Caldera) -->
        <g fill="#fef08a">
          <circle cx="140" cy="85" r="2"/><circle cx="158" cy="78" r="2.2"/><circle cx="132" cy="68" r="1.5"/><circle cx="168" cy="65" r="1.8"/>
          <circle cx="150" cy="55" r="2.5"/><circle cx="125" cy="50" r="1.5"/><circle cx="180" cy="48" r="1.8"/>
        </g>
        <g fill="#ea580c">
          <circle cx="115" cy="72" r="2"/><circle cx="188" cy="68" r="2"/><circle cx="145" cy="35" r="2.2"/><circle cx="162" cy="38" r="1.8"/>
        </g>

        <!-- Volcanic Ash Plateau Floor at Base (y=270..300) -->
        <path d="M 0 275 Q 150 265 300 275 L 300 300 L 0 300 Z" fill="#09090b"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Obsidian & Fire Grand Dauphine Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#18181b" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="147.5,140 152.5,140 150,82" fill="#ea580c"/>
          <circle cx="150" cy="75" r="3" fill="#facc15"/>
        </g>
        <!-- Obsidian & Fire Dauphine Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#18181b" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="148,140 152,140 150,42" fill="#f97316"/>
          <circle cx="150" cy="35" r="2.5" fill="#fef08a"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Blazing Magma Needle Second Hand with Flame Pip -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#facc15" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ea580c" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#18181b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#facc15"/>
      </g>
    `;
  }
};
