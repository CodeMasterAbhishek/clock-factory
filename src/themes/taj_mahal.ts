import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const taj_mahalTheme: ClockThemeRenderer = {
  name: 'taj_mahal',
  description: 'Detailed white marble Mughal palace with bulbous dome, 4 minarets, and lotus reflecting pool',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      ticks += `<circle cx="150" cy="16" r="3.5" fill="#7e22ce" transform="rotate(${i*30} 150 150)"/>`;
    }
    
    return `
      
      <defs>
        <clipPath id="taj_mahal_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="taj_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <linearGradient id="taj_sky_wash" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3b0764"/>
          <stop offset="30%" stop-color="#701a75"/>
          <stop offset="60%" stop-color="#c026d3"/>
          <stop offset="85%" stop-color="#fb923c"/>
          <stop offset="100%" stop-color="#fed7aa"/>
        </linearGradient>
        <linearGradient id="marble_glow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="#f5f3ff"/>
          <stop offset="100%" stop-color="#ddd6fe"/>
        </linearGradient>
        <linearGradient id="water_reflect" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="60%" stop-color="#0369a1"/>
          <stop offset="100%" stop-color="#1e1b4b"/>
        </linearGradient>
      </defs>

      <!-- Background & Dial Rim -->
      <circle cx="150" cy="150" r="145" fill="url(#taj_sky_wash)" stroke="#a855f7" stroke-width="3"/>

      <!-- Group strictly clipped to the dial circle -->
      <g clip-path="url(#taj_dial_clip)">
        <!-- Morning Dawn Stars -->
        <g fill="#ffffff" opacity="0.85">
          <circle cx="50" cy="40" r="1.5"/>
          <circle cx="90" cy="30" r="1.2"/>
          <circle cx="210" cy="35" r="1.2"/>
          <circle cx="250" cy="45" r="1.5"/>
        </g>

        <!-- Red Sandstone Plinth Base -->
        <rect x="30" y="190" width="240" height="15" fill="#9a3412" stroke="#7c2d12" stroke-width="1"/>
        <rect x="40" y="185" width="220" height="5" fill="#c2410c"/>

        <!-- Main Marble Mausoleum Structure -->
        <rect x="75" y="125" width="150" height="60" rx="3" fill="url(#marble_glow)" stroke="#cbd5e1" stroke-width="1.2"/>

        <!-- Central High Pishtaq / Iwan Arch -->
        <path d="M 120 185 V 135 A 30 30 0 0 1 180 135 V 185 Z" fill="#4a044e" stroke="#cbd5e1" stroke-width="1"/>
        <!-- Inner Archway Door -->
        <path d="M 132 185 V 152 A 18 18 0 0 1 168 152 V 185 Z" fill="#2e1065"/>
        <!-- Intricate Inlay Arabesque Top Frame -->
        <path d="M 115 130 H 185 V 134 H 115 Z" fill="#9333ea" opacity="0.6"/>

        <!-- 2 Side Niches Left -->
        <path d="M 85 152 V 138 A 7 7 0 0 1 99 138 V 152 Z" fill="#581c87"/>
        <path d="M 85 180 V 162 A 7 7 0 0 1 99 162 V 180 Z" fill="#581c87"/>

        <!-- 2 Side Niches Right -->
        <path d="M 201 152 V 138 A 7 7 0 0 1 215 138 V 152 Z" fill="#581c87"/>
        <path d="M 201 180 V 162 A 7 7 0 0 1 215 162 V 180 Z" fill="#581c87"/>

        <!-- Magnificent Bulbous Marble Dome (Guwa) -->
        <path d="M 122 125 C 115 80 150 55 150 55 C 150 55 185 80 178 125 Z" fill="url(#marble_glow)" stroke="#cbd5e1" stroke-width="1.5"/>
        <!-- Lotus Petal Crown Inlay on Main Dome -->
        <path d="M 144 65 Q 150 58 156 65" stroke="#a855f7" stroke-width="1.5" fill="none"/>
        <!-- Gilded Kalash Brass Finial Spike -->
        <line x1="150" y1="42" x2="150" y2="56" stroke="#f59e0b" stroke-width="2"/>
        <circle cx="150" cy="42" r="2.5" fill="#fbbf24"/>
        <path d="M 148 48 A 2 2 0 0 0 152 48" stroke="#fbbf24" stroke-width="1.5" fill="none"/>

        <!-- 4 Flanking Chhatri Pavilions (Domes) -->
        <!-- Left Chhatri -->
        <path d="M 98 125 C 96 100 108 88 108 88 C 108 88 120 100 118 125 Z" fill="url(#marble_glow)" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="108" y1="80" x2="108" y2="89" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="108" cy="80" r="1.5" fill="#fbbf24"/>
        <!-- Right Chhatri -->
        <path d="M 182 125 C 180 100 192 88 192 88 C 192 88 204 100 202 125 Z" fill="url(#marble_glow)" stroke="#cbd5e1" stroke-width="1"/>
        <line x1="192" y1="80" x2="192" y2="89" stroke="#f59e0b" stroke-width="1.5"/>
        <circle cx="192" cy="80" r="1.5" fill="#fbbf24"/>

        <!-- 4 Four-Tiered Octagonal Minarets -->
        <!-- Far Left Minaret -->
        <g stroke="#cbd5e1" stroke-width="1">
          <polygon points="48,190 52,70 58,70 62,190" fill="url(#marble_glow)"/>
          <rect x="49" y="145" width="12" height="3" fill="#ffffff"/>
          <rect x="50" y="110" width="10" height="3" fill="#ffffff"/>
          <!-- Top Chhatri -->
          <rect x="49" y="70" width="12" height="6" fill="#ffffff"/>
          <path d="M 49 70 C 49 60 55 54 55 54 C 55 54 61 60 61 70 Z" fill="#ffffff"/>
          <line x1="55" y1="48" x2="55" y2="55" stroke="#f59e0b" stroke-width="1.5"/>
        </g>
        <!-- Far Right Minaret -->
        <g stroke="#cbd5e1" stroke-width="1">
          <polygon points="238,190 242,70 248,70 252,190" fill="url(#marble_glow)"/>
          <rect x="239" y="145" width="12" height="3" fill="#ffffff"/>
          <rect x="240" y="110" width="10" height="3" fill="#ffffff"/>
          <!-- Top Chhatri -->
          <rect x="239" y="70" width="12" height="6" fill="#ffffff"/>
          <path d="M 239 70 C 239 60 245 54 245 54 C 245 54 251 60 251 70 Z" fill="#ffffff"/>
          <line x1="245" y1="48" x2="245" y2="55" stroke="#f59e0b" stroke-width="1.5"/>
        </g>

        <!-- Classic Cypress Trees Framing Palace -->
        <g fill="#14532d" stroke="#052e16" stroke-width="1">
          <path d="M 38 190 C 35 160 42 130 42 130 C 42 130 49 160 46 190 Z"/>
          <path d="M 68 190 C 66 168 71 145 71 145 C 71 145 76 168 74 190 Z"/>
          <path d="M 226 190 C 224 168 229 145 229 145 C 229 145 234 168 232 190 Z"/>
          <path d="M 256 190 C 253 160 260 130 260 130 C 260 130 267 160 264 190 Z"/>
        </g>

        <!-- Charbagh Water Reflecting Pool Basin -->
        <polygon points="105,200 195,200 230,295 70,295" fill="url(#water_reflect)"/>
        <!-- Red Sandstone Walkway Borders -->
        <polygon points="70,295 105,200 95,200 50,295" fill="#9a3412"/>
        <polygon points="230,295 195,200 205,200 250,295" fill="#9a3412"/>

        <!-- Shimmering Water Ripples of Palace Reflection -->
        <path d="M 125 220 Q 150 212 175 220" stroke="#f5d0fe" stroke-width="2.5" fill="none" opacity="0.75"/>
        <path d="M 115 245 Q 150 238 185 245" stroke="#f5d0fe" stroke-width="2" fill="none" opacity="0.6"/>
        <path d="M 100 270 Q 150 262 200 270" stroke="#ffffff" stroke-width="2" fill="none" opacity="0.6"/>

        <!-- Floating Sacred Lotus Flowers in Channel -->
        <g fill="#f472b6">
          <circle cx="135" cy="235" r="4.5"/>
          <circle cx="165" cy="255" r="5"/>
          <circle cx="145" cy="280" r="5.5"/>
        </g>
        <g fill="#fdf4ff">
          <circle cx="135" cy="235" r="2"/>
          <circle cx="165" cy="255" r="2.5"/>
          <circle cx="145" cy="280" r="2.5"/>
        </g>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      <!-- Ornate Royal Hands -->
      <g transform="rotate(${time.hourAngle} 150 150)">
        <path d="M 146 150 L 150 72 L 154 150 Z" fill="#581c87"/>
        <circle cx="150" cy="72" r="4" fill="#a855f7"/>
      </g>
      <g transform="rotate(${time.minuteAngle} 150 150)">
        <path d="M 147.5 150 L 150 35 L 152.5 150 Z" fill="#9333ea"/>
        <circle cx="150" cy="35" r="3" fill="#fdf4ff"/>
      </g>
      ${options.showSeconds !== false ? `
      <line x1="150" y1="160" x2="150" y2="20" stroke="#f59e0b" stroke-width="1.5" transform="rotate(${time.secondAngle} 150 150)"/>
      <circle cx="150" cy="20" r="3.5" fill="#f59e0b" transform="rotate(${time.secondAngle} 150 150)"/>
      ` : ''}
      <circle cx="150" cy="150" r="6" fill="#581c87"/>
      <circle cx="150" cy="150" r="2.5" fill="#fef08a"/>
    
    `;
  }
};
