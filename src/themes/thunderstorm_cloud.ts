import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const thunderstorm_cloudTheme: ClockThemeRenderer = {
  name: 'thunderstorm_cloud',
  description: 'Epic Supercell Cumulonimbus Thunderstorm featuring dramatic illuminated thunderhead clouds, branching forked electric lightning bolts, torrential rain sheets, and ionized neon glow',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.2" fill="#a855f7" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="storm_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Night Supercell Sky Gradient -->
        <linearGradient id="supercell_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="35%" stop-color="#0f172a"/>
          <stop offset="70%" stop-color="#1e1b4b"/>
          <stop offset="100%" stop-color="#312e81"/>
        </linearGradient>
        <!-- Volumetric Cloud Gradient (Soft illuminated top to deep turbulent base) -->
        <linearGradient id="cloud_volume_grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#475569"/>
          <stop offset="30%" stop-color="#334155"/>
          <stop offset="70%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.7"/>
        </filter>
        <filter id="lightning_glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      <!-- Outer Bezel in Ionized Indigo -->
      <circle cx="150" cy="150" r="145" fill="url(#supercell_sky)" stroke="#6366f1" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="139" fill="none" stroke="#38bdf8" stroke-width="0.8" stroke-dasharray="2 3"/>

      <g clip-path="url(#storm_dial_clip)">
        <!-- Internal Lightning Illumination Flash in Cloud Core -->
        <circle cx="150" cy="95" r="75" fill="#a855f7" opacity="0.3"/>
        <circle cx="150" cy="95" r="45" fill="#38bdf8" opacity="0.25"/>

        <!-- 1. VOLUMETRIC CUMULONIMBUS STORM CLOUDS (Continuous, organic bezier masses) -->
        <!-- Upper Anvil Shelf Backing -->
        <path d="M 0 50 Q 75 25 150 20 Q 225 25 300 50 L 300 120 Q 225 90 150 95 Q 75 90 0 120 Z" fill="#0f172a" opacity="0.9"/>
        
        <!-- Main Billowing Cumulonimbus Cloud Mass (Continuous smooth organic contours) -->
        <path d="M -20 125 
                 C 15 85, 45 60, 85 68 
                 C 105 45, 140 40, 165 52 
                 C 195 42, 235 50, 255 75 
                 C 285 85, 310 105, 320 135 
                 C 290 145, 250 135, 215 140 
                 C 175 145, 125 140, 85 145 
                 C 45 150, 10 140, -20 125 Z" 
              fill="url(#cloud_volume_grad)"/>

        <!-- Soft Cloud Underbelly Shading (Seamless transition into rain) -->
        <path d="M 0 115 
                 Q 50 100, 100 110 
                 Q 150 98, 200 108 
                 Q 250 102, 300 118 
                 L 300 138 
                 Q 250 125, 200 132 
                 Q 150 122, 100 130 
                 Q 50 124, 0 138 Z" 
              fill="#0f172a" opacity="0.6"/>

        <!-- 2. TORRENTIAL RAIN SHEETS (Wind-Sheared Diagonal Downpour) -->
        <g stroke="#38bdf8" stroke-width="1.2" opacity="0.45">
          <line x1="45" y1="140" x2="30" y2="280"/><line x1="68" y1="150" x2="52" y2="285"/><line x1="92" y1="135" x2="78" y2="275"/>
          <line x1="118" y1="145" x2="102" y2="290"/><line x1="142" y1="150" x2="126" y2="285"/><line x1="165" y1="138" x2="150" y2="278"/>
          <line x1="190" y1="145" x2="174" y2="290"/><line x1="215" y1="140" x2="200" y2="280"/><line x1="238" y1="155" x2="222" y2="285"/>
          <line x1="262" y1="145" x2="248" y2="280"/><line x1="280" y1="160" x2="266" y2="288"/>
        </g>
        <g stroke="#ffffff" stroke-width="0.8" opacity="0.6">
          <line x1="58" y1="165" x2="48" y2="245"/><line x1="108" y1="160" x2="98" y2="250"/><line x1="178" y1="165" x2="168" y2="255"/>
          <line x1="228" y1="160" x2="218" y2="248"/>
        </g>

        <!-- 3. DRAMATIC FORKED ELECTRIC LIGHTNING BOLTS (Branching Plasma Discharge) -->
        
        <!-- Main Hero Lightning Bolt (Center-Left to Bottom: Striking down with blazing glow) -->
        <g filter="url(#lightning_glow)">
          <!-- Cyan / Purple Ionized Plasma Corona -->
          <path d="M 148 95 L 140 135 L 158 145 L 132 195 L 145 205 L 118 275" stroke="#38bdf8" stroke-width="4.5" fill="none" stroke-linejoin="bevel"/>
          <path d="M 140 135 L 122 165 L 128 178 L 105 218" stroke="#c084fc" stroke-width="2.5" fill="none" stroke-linejoin="bevel"/>
          <path d="M 132 195 L 152 225 L 148 238 L 165 268" stroke="#c084fc" stroke-width="2.2" fill="none" stroke-linejoin="bevel"/>
          
          <!-- Blinding Pure White Plasma Core -->
          <path d="M 148 95 L 140 135 L 158 145 L 132 195 L 145 205 L 118 275" stroke="#ffffff" stroke-width="2" fill="none" stroke-linejoin="bevel"/>
          <path d="M 140 135 L 122 165 L 128 178 L 105 218" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linejoin="bevel"/>
          <path d="M 132 195 L 152 225 L 148 238 L 165 268" stroke="#ffffff" stroke-width="1" fill="none" stroke-linejoin="bevel"/>
        </g>

        <!-- Secondary Forked Bolt 2 (Right Storm Cell) -->
        <g opacity="0.85">
          <path d="M 215 105 L 228 142 L 220 152 L 238 190 L 230 200 L 245 240" stroke="#a855f7" stroke-width="2.5" fill="none" stroke-linejoin="bevel"/>
          <path d="M 228 142 L 245 168 L 240 178 L 255 205" stroke="#38bdf8" stroke-width="1.5" fill="none" stroke-linejoin="bevel"/>
          <path d="M 215 105 L 228 142 L 220 152 L 238 190 L 230 200 L 245 240" stroke="#ffffff" stroke-width="1.2" fill="none" stroke-linejoin="bevel"/>
        </g>

        <!-- Dark Storm Landscape Silhouette at Base -->
        <path d="M 0 275 Q 75 265 150 275 T 300 270 L 300 300 L 0 300 Z" fill="#020617"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Electric Plasma Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#a855f7" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#38bdf8"/>
        </g>
        <!-- Electric Plasma Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#facc15"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Blazing Lightning Yellow Second Hand -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#facc15" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#facc15" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
