import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const crystal_caveTheme: ClockThemeRenderer = {
  name: 'crystal_cave',
  description: 'Subterranean Crystal Grotto featuring faceted amethyst quartz stalactites, glowing bioluminescent fluorite crystals, and subterranean reflection pool',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<polygon points="150,12 153,19 147,19" fill="#c084fc" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="crystal_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Deep Amethyst & Obsidian Cavern Vault Gradient -->
        <radialGradient id="cavern_vault" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#3b0764"/>
          <stop offset="40%" stop-color="#1e1b4b"/>
          <stop offset="80%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#030712"/>
        </radialGradient>
        <!-- Amethyst Crystal Facet Gradient -->
        <linearGradient id="amethyst_facet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f3e8ff"/>
          <stop offset="25%" stop-color="#d8b4fe"/>
          <stop offset="65%" stop-color="#a855f7"/>
          <stop offset="100%" stop-color="#6b21a8"/>
        </linearGradient>
        <!-- Luminescent Cyan Fluorite Gradient -->
        <linearGradient id="fluorite_facet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#e0f2fe"/>
          <stop offset="30%" stop-color="#7dd3fc"/>
          <stop offset="70%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#0369a1"/>
        </linearGradient>
        <!-- Rose Quartz Shard Gradient -->
        <linearGradient id="rose_quartz_facet" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fdf2f8"/>
          <stop offset="35%" stop-color="#f472b6"/>
          <stop offset="85%" stop-color="#db2777"/>
          <stop offset="100%" stop-color="#9d174d"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Cavern Geode Rim -->
      <circle cx="150" cy="150" r="145" fill="url(#cavern_vault)" stroke="#a855f7" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="139" fill="none" stroke="#7e22ce" stroke-width="0.8" stroke-dasharray="2 3"/>

      <g clip-path="url(#crystal_dial_clip)">
        <!-- Ambient Bioluminescent Cavern Core Glow -->
        <circle cx="150" cy="150" r="85" fill="#7e22ce" opacity="0.25"/>
        <circle cx="110" cy="190" r="55" fill="#0284c7" opacity="0.2"/>

        <!-- 1. HANGING CEILING CRYSTAL STALACTITES (Upper Cavern Roof: y=0..75) -->
        <!-- Cavern Ceiling Rock Strata -->
        <path d="M 0 0 L 300 0 L 300 35 Q 220 50 150 32 Q 80 50 0 35 Z" fill="#1e1b4b"/>
        
        <!-- Ceiling Stalactites Group -->
        <g stroke="#3b0764" stroke-width="0.8">
          <!-- Stalactite 1 (Left Ceiling) -->
          <polygon points="45,25 55,75 65,25" fill="url(#amethyst_facet)"/>
          <polygon points="45,25 55,75 55,25" fill="#f3e8ff" opacity="0.6"/>
          <!-- Stalactite 2 (Mid-Left Cyan) -->
          <polygon points="90,20 98,62 108,20" fill="url(#fluorite_facet)"/>
          <polygon points="90,20 98,62 98,20" fill="#e0f2fe" opacity="0.65"/>
          <!-- Stalactite 3 (Center Amethyst) -->
          <polygon points="142,15 150,55 158,15" fill="url(#amethyst_facet)"/>
          <!-- Stalactite 4 (Mid-Right Rose) -->
          <polygon points="195,22 205,68 215,22" fill="url(#rose_quartz_facet)"/>
          <polygon points="195,22 205,68 205,22" fill="#fdf2f8" opacity="0.6"/>
          <!-- Stalactite 5 (Far Right Cyan) -->
          <polygon points="245,25 252,65 262,25" fill="url(#fluorite_facet)"/>
        </g>

        <!-- 2. SUBTERRANEAN CRYSTAL POOL (Floor: y=225..300) -->
        <path d="M 0 245 Q 150 230 300 245 L 300 300 L 0 300 Z" fill="#0369a1" opacity="0.75"/>
        <path d="M 0 260 Q 150 245 300 260 L 300 300 L 0 300 Z" fill="#082f49"/>
        <!-- Shimmering Crystal Pool Reflections -->
        <g stroke="#38bdf8" stroke-width="1.2" fill="none" opacity="0.6">
          <line x1="60" y1="265" x2="110" y2="265"/>
          <line x1="160" y1="270" x2="230" y2="270"/>
          <line x1="100" y1="282" x2="190" y2="282"/>
        </g>

        <!-- 3. MAJESTIC FLOOR CRYSTAL GEODE CLUSTERS (Rising from Base: y=160..295) -->
        
        <!-- Left Amethyst Cluster (x=50..120) -->
        <g transform="translate(75, 235)">
          <!-- Shard 1 (Tall Tilted Left) -->
          <g transform="rotate(-15)">
            <polygon points="-12,50 0,-65 12,50" fill="url(#amethyst_facet)" stroke="#581c87" stroke-width="1"/>
            <polygon points="-12,50 0,-65 0,50" fill="#f3e8ff" opacity="0.65"/>
          </g>
          <!-- Shard 2 (Main Center Pinnacle) -->
          <g transform="translate(18, 0)">
            <polygon points="-14,50 0,-85 14,50" fill="url(#amethyst_facet)" stroke="#581c87" stroke-width="1.2"/>
            <polygon points="-14,50 0,-85 0,50" fill="#ffffff" opacity="0.75"/>
            <!-- Faceted Cap Ridge -->
            <polygon points="0,-85 6,-45 0,-40 -6,-45" fill="#f3e8ff" opacity="0.9"/>
          </g>
          <!-- Shard 3 (Smaller Right Shard) -->
          <g transform="translate(32, 10) rotate(18)">
            <polygon points="-9,40 0,-45 9,40" fill="url(#amethyst_facet)" stroke="#581c87" stroke-width="1"/>
            <polygon points="-9,40 0,-45 0,40" fill="#e9d5ff" opacity="0.7"/>
          </g>
        </g>

        <!-- Right Cyan & Rose Crystal Cluster (x=175..265) -->
        <g transform="translate(215, 235)">
          <!-- Shard 1 (Tall Glowing Cyan Fluorite) -->
          <g transform="rotate(12)">
            <polygon points="-14,50 0,-80 14,50" fill="url(#fluorite_facet)" stroke="#0369a1" stroke-width="1.2"/>
            <polygon points="-14,50 0,-80 0,50" fill="#e0f2fe" opacity="0.75"/>
            <polygon points="0,-80 6,-42 0,-38 -6,-42" fill="#ffffff" opacity="0.9"/>
          </g>
          <!-- Shard 2 (Rose Quartz Pinnacle) -->
          <g transform="translate(-22, 5) rotate(-14)">
            <polygon points="-12,45 0,-65 12,45" fill="url(#rose_quartz_facet)" stroke="#831843" stroke-width="1"/>
            <polygon points="-12,45 0,-65 0,45" fill="#fdf2f8" opacity="0.7"/>
          </g>
          <!-- Shard 3 (Short Cyan Shard) -->
          <g transform="translate(18, 15) rotate(24)">
            <polygon points="-8,35 0,-40 8,35" fill="url(#fluorite_facet)" stroke="#0369a1" stroke-width="1"/>
            <polygon points="-8,35 0,-40 0,35" fill="#bae6fd" opacity="0.7"/>
          </g>
        </g>

        <!-- Floating Bioluminescent Crystal Spores & Dust Motes -->
        <g fill="#ffffff" opacity="0.9">
          <circle cx="85" cy="115" r="2"/><circle cx="115" cy="95" r="1.5"/><circle cx="185" cy="105" r="2.2"/><circle cx="215" cy="125" r="1.8"/>
          <circle cx="145" cy="165" r="1.5"/><circle cx="65" cy="175" r="2"/><circle cx="240" cy="165" r="1.5"/>
          <!-- Glowing Prism Diamond Stars -->
          <polygon points="120,130 122,135 120,140 118,135" fill="#e9d5ff"/>
          <polygon points="190,145 192,150 190,155 188,150" fill="#7dd3fc"/>
          <polygon points="150,85 152,90 150,95 148,90" fill="#fbcfe8"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Faceted Amethyst Obelisk Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#3b0764" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="148,140 152,140 150,82" fill="#c084fc"/>
          <circle cx="150" cy="75" r="3" fill="#38bdf8"/>
        </g>
        <!-- Faceted Fluorite Obelisk Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0369a1" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="148.5,140 151.5,140 150,42" fill="#7dd3fc"/>
          <circle cx="150" cy="35" r="2.5" fill="#f472b6"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Luminescent Rose Needle Second Hand -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f472b6" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f472b6" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f472b6"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#3b0764" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#7dd3fc"/>
      </g>
    `;
  }
};
