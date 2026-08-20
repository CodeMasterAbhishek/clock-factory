import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const monarch_migrationTheme: ClockThemeRenderer = {
  name: 'monarch_migration',
  description: 'Spectacular Monarch Butterfly Migration in the sunlit Oyamel fir forest with hyper-detailed stained-glass wings, milkweed blossoms, and golden sunbeams',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.2" fill="#fbbf24" stroke="#78350f" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="monarch_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Golden Forest Sunbeam Twilight Gradient -->
        <radialGradient id="monarch_forest_bg" cx="50%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#fffbeb"/>
          <stop offset="30%" stop-color="#fef3c7"/>
          <stop offset="60%" stop-color="#f59e0b"/>
          <stop offset="85%" stop-color="#b45309"/>
          <stop offset="100%" stop-color="#451a03"/>
        </radialGradient>
        <!-- Monarch Wing Fiery Orange Gradient -->
        <linearGradient id="monarch_wing_fire" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="35%" stop-color="#f97316"/>
          <stop offset="75%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#c2410c"/>
        </linearGradient>
        <linearGradient id="monarch_velvet_black" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#27272a"/>
          <stop offset="60%" stop-color="#18181b"/>
          <stop offset="100%" stop-color="#09090b"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Bezel in Warm Amber Bronze -->
      <circle cx="150" cy="150" r="145" fill="url(#monarch_forest_bg)" stroke="#b45309" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="139" fill="none" stroke="#f59e0b" stroke-width="0.8" stroke-dasharray="2 3"/>

      <g clip-path="url(#monarch_dial_clip)">
        <!-- Dappled Forest Sunbeams Streaming Down -->
        <polygon points="150,0 60,300 110,300" fill="#ffffff" opacity="0.18"/>
        <polygon points="150,0 135,300 185,300" fill="#ffffff" opacity="0.22"/>
        <polygon points="150,0 210,300 255,300" fill="#ffffff" opacity="0.15"/>

        <!-- Oyamel Fir Pine Needles & Branches Framing the Perimeters -->
        <!-- Top-Left Fir Bough -->
        <g stroke="#14532d" stroke-width="1.8" fill="none">
          <path d="M 0 35 Q 45 42 75 25"/>
          <g stroke="#16a34a" stroke-width="1.2">
            <line x1="20" y1="36" x2="15" y2="24"/><line x1="32" y1="38" x2="28" y2="22"/><line x1="45" y1="36" x2="44" y2="20"/><line x1="58" y1="30" x2="60" y2="15"/>
            <line x1="20" y1="36" x2="22" y2="48"/><line x1="32" y1="38" x2="36" y2="52"/><line x1="45" y1="36" x2="50" y2="50"/>
          </g>
        </g>
        <!-- Bottom-Right Fir Bough -->
        <g stroke="#14532d" stroke-width="1.8" fill="none">
          <path d="M 300 255 Q 255 248 225 268"/>
          <g stroke="#16a34a" stroke-width="1.2">
            <line x1="280" y1="254" x2="285" y2="242"/><line x1="268" y1="252" x2="272" y2="238"/><line x1="255" y1="254" x2="256" y2="240"/><line x1="242" y1="260" x2="240" y2="245"/>
          </g>
        </g>

        <!-- Wild Pink Milkweed Flower Clusters (Asclepias nectar source, Lower-Left: y=235) -->
        <g transform="translate(58, 245)">
          <g fill="#ec4899" stroke="#be123c" stroke-width="0.6">
            <circle cx="-10" cy="-6" r="4"/><circle cx="0" cy="-10" r="4.5"/><circle cx="10" cy="-6" r="4"/>
            <circle cx="-5" cy="4" r="4"/><circle cx="5" cy="4" r="4"/>
            <circle cx="0" cy="-2" r="3" fill="#fef08a"/>
          </g>
        </g>

        <!-- 1. SWIRLING FLIGHT MIGRATION: Smaller Monarchs in Dynamic Flight -->
        <!-- Monarch in Flight 1 (Top-Right: Wing-Flap Angle) -->
        <g transform="translate(225, 78) rotate(32) scale(0.65)">
          <!-- Forewings -->
          <path d="M 0 0 C 12 -38 42 -32 40 -8 C 36 8 10 10 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="2"/>
          <path d="M 0 0 C -12 -38 -42 -32 -40 -8 C -36 8 -10 10 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="2"/>
          <!-- Hindwings -->
          <path d="M 0 0 C 14 6 32 20 20 32 C 10 38 0 18 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="1.8"/>
          <path d="M 0 0 C -14 6 -32 20 -20 32 C -10 38 0 18 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="1.8"/>
          <!-- Body & Antennae -->
          <ellipse cx="0" cy="5" rx="3" ry="14" fill="#09090b"/>
          <path d="M -1 -7 Q -6 -18 -12 -20" stroke="#09090b" stroke-width="1" fill="none"/>
          <path d="M 1 -7 Q 6 -18 12 -20" stroke="#09090b" stroke-width="1" fill="none"/>
          <!-- White Wing Spots -->
          <g fill="#ffffff">
            <circle cx="34" cy="-24" r="1.2"/><circle cx="36" cy="-15" r="1.2"/><circle cx="32" cy="-4" r="1.2"/>
            <circle cx="-34" cy="-24" r="1.2"/><circle cx="-36" cy="-15" r="1.2"/><circle cx="-32" cy="-4" r="1.2"/>
          </g>
        </g>

        <!-- Monarch in Flight 2 (Lower-Right: Banking Turn) -->
        <g transform="translate(210, 215) rotate(-28) scale(0.55)">
          <path d="M 0 0 C 12 -38 42 -32 40 -8 C 36 8 10 10 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="2"/>
          <path d="M 0 0 C -12 -38 -42 -32 -40 -8 C -36 8 -10 10 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="2"/>
          <path d="M 0 0 C 14 6 32 20 20 32 C 10 38 0 18 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="1.8"/>
          <path d="M 0 0 C -14 6 -32 20 -20 32 C -10 38 0 18 0 0 Z" fill="url(#monarch_wing_fire)" stroke="#09090b" stroke-width="1.8"/>
          <ellipse cx="0" cy="5" rx="3" ry="14" fill="#09090b"/>
          <g fill="#ffffff">
            <circle cx="34" cy="-20" r="1.2"/><circle cx="34" cy="-10" r="1.2"/>
            <circle cx="-34" cy="-20" r="1.2"/><circle cx="-34" cy="-10" r="1.2"/>
          </g>
        </g>

        <!-- 2. HERO MONARCH BUTTERFLY (Majestic, Intricate Stained-Glass Wings, Center-Left: y=105) -->
        <g transform="translate(105, 115) rotate(-14) scale(1.05)">
          <!-- LEFT FOREWING -->
          <g>
            <!-- Wing Base Solid Outer Shape -->
            <path d="M 0 0 C -22 -48 -68 -42 -62 -12 C -58 12 -22 18 0 0 Z" fill="url(#monarch_wing_fire)" stroke="url(#monarch_velvet_black)" stroke-width="4"/>
            <!-- Intricate Black Vein Webbing (Stained-glass cells) -->
            <g stroke="#09090b" stroke-width="1.6" fill="none">
              <path d="M 0 0 C -25 -25 -45 -22 -55 -15"/>
              <path d="M -22 -20 C -35 -35 -52 -32 -58 -22"/>
              <path d="M -28 -14 C -38 -6 -50 0 -54 8"/>
              <path d="M -15 -6 C -25 4 -38 10 -45 14"/>
            </g>
            <!-- White Marginal Boundary Spots (Crisp Double Row) -->
            <g fill="#ffffff">
              <circle cx="-60" cy="-28" r="1.5"/><circle cx="-62" cy="-18" r="1.5"/><circle cx="-59" cy="-8" r="1.5"/><circle cx="-54" cy="2" r="1.5"/><circle cx="-46" cy="11" r="1.5"/>
              <circle cx="-54" cy="-26" r="1"/><circle cx="-56" cy="-16" r="1"/><circle cx="-52" cy="-6" r="1"/><circle cx="-47" cy="4" r="1"/>
            </g>
          </g>

          <!-- RIGHT FOREWING -->
          <g>
            <path d="M 0 0 C 22 -48 68 -42 62 -12 C 58 12 22 18 0 0 Z" fill="url(#monarch_wing_fire)" stroke="url(#monarch_velvet_black)" stroke-width="4"/>
            <!-- Veins -->
            <g stroke="#09090b" stroke-width="1.6" fill="none">
              <path d="M 0 0 C 25 -25 45 -22 55 -15"/>
              <path d="M 22 -20 C 35 -35 52 -32 58 -22"/>
              <path d="M 28 -14 C 38 -6 50 0 54 8"/>
              <path d="M 15 -6 C 25 4 38 10 45 14"/>
            </g>
            <!-- White Spots -->
            <g fill="#ffffff">
              <circle cx="60" cy="-28" r="1.5"/><circle cx="62" cy="-18" r="1.5"/><circle cx="59" cy="-8" r="1.5"/><circle cx="54" cy="2" r="1.5"/><circle cx="46" cy="11" r="1.5"/>
              <circle cx="54" cy="-26" r="1"/><circle cx="56" cy="-16" r="1"/><circle cx="52" cy="-6" r="1"/><circle cx="47" cy="4" r="1"/>
            </g>
          </g>

          <!-- LEFT HINDWING -->
          <g>
            <path d="M 0 0 C -18 8 -44 26 -28 44 C -12 52 0 25 0 0 Z" fill="url(#monarch_wing_fire)" stroke="url(#monarch_velvet_black)" stroke-width="3.5"/>
            <!-- Hindwing Veins -->
            <g stroke="#09090b" stroke-width="1.4" fill="none">
              <path d="M 0 0 C -12 18 -26 30 -22 40"/>
              <path d="M -8 12 C -18 24 -32 32 -25 42"/>
              <path d="M -5 6 C -18 12 -35 22 -28 32"/>
            </g>
            <!-- White Spots -->
            <g fill="#ffffff">
              <circle cx="-32" cy="30" r="1.2"/><circle cx="-25" cy="38" r="1.2"/><circle cx="-16" cy="45" r="1.2"/>
              <circle cx="-28" cy="28" r="0.8"/><circle cx="-20" cy="36" r="0.8"/>
            </g>
          </g>

          <!-- RIGHT HINDWING -->
          <g>
            <path d="M 0 0 C 18 8 44 26 28 44 C 12 52 0 25 0 0 Z" fill="url(#monarch_wing_fire)" stroke="url(#monarch_velvet_black)" stroke-width="3.5"/>
            <!-- Hindwing Veins -->
            <g stroke="#09090b" stroke-width="1.4" fill="none">
              <path d="M 0 0 C 12 18 26 30 22 40"/>
              <path d="M 8 12 C 18 24 32 32 25 42"/>
              <path d="M 5 6 C 18 12 35 22 28 32"/>
            </g>
            <!-- White Spots -->
            <g fill="#ffffff">
              <circle cx="32" cy="30" r="1.2"/><circle cx="25" cy="38" r="1.2"/><circle cx="16" cy="45" r="1.2"/>
              <circle cx="28" cy="28" r="0.8"/><circle cx="20" cy="36" r="0.8"/>
            </g>
          </g>

          <!-- BUTTERFLY VELVET BODY & ANTENNAE -->
          <g>
            <!-- Slender Segmented Abdomen -->
            <ellipse cx="0" cy="12" rx="3.8" ry="18" fill="url(#monarch_velvet_black)"/>
            <!-- White Thorax Pips -->
            <g fill="#ffffff">
              <circle cx="-1.5" cy="2" r="0.8"/><circle cx="1.5" cy="2" r="0.8"/>
              <circle cx="-1.5" cy="8" r="0.8"/><circle cx="1.5" cy="8" r="0.8"/>
              <circle cx="-1.2" cy="14" r="0.8"/><circle cx="1.2" cy="14" r="0.8"/>
            </g>
            <!-- Head & Feathered Antennae -->
            <circle cx="0" cy="-6" r="4.5" fill="#09090b"/>
            <!-- Antennae with Clubbed Tips -->
            <path d="M -2 -8 Q -10 -22 -18 -25" stroke="#09090b" stroke-width="1.4" fill="none"/>
            <circle cx="-18" cy="-25" r="1.5" fill="#09090b"/>
            <path d="M 2 -8 Q 10 -22 18 -25" stroke="#09090b" stroke-width="1.4" fill="none"/>
            <circle cx="18" cy="-25" r="1.5" fill="#09090b"/>
          </g>
        </g>

        <!-- Floating Golden Sun Dust & Spore Sparkles -->
        <g fill="#fef08a" opacity="0.85">
          <circle cx="68" cy="80" r="1.8"/><circle cx="130" cy="48" r="2.2"/><circle cx="185" cy="65" r="1.5"/><circle cx="245" cy="140" r="2"/>
          <circle cx="160" cy="245" r="1.8"/><circle cx="95" cy="215" r="1.5"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Obsidian & Amber Grand Dauphine Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#18181b" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="147.5,140 152.5,140 150,82" fill="#ea580c"/>
          <circle cx="150" cy="75" r="3" fill="#facc15"/>
        </g>
        <!-- Obsidian & Amber Dauphine Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#18181b" stroke="#ffffff" stroke-width="1.2"/>
          <polygon points="148,140 152,140 150,42" fill="#f59e0b"/>
          <circle cx="150" cy="35" r="2.5" fill="#fef08a"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Slender Golden Needle Second Hand with Butterfly Wing Pip -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ffffff" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ea580c" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ffffff"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#18181b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#f59e0b"/>
      </g>
    `;
  }
};
