import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const grand_canyonTheme: ClockThemeRenderer = {
  name: 'grand_canyon',
  description: 'Grand Canyon majestic geological gorge at golden hour with multi-tiered red sandstone strata, carved canyon walls, and winding turquoise Colorado River',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#ea580c" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="canyon_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Golden Hour Sky Gradient -->
        <linearGradient id="canyon_golden_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ea580c"/>
          <stop offset="35%" stop-color="#f97316"/>
          <stop offset="65%" stop-color="#fde047"/>
          <stop offset="100%" stop-color="#fed7aa"/>
        </linearGradient>
        <!-- Left Sunlit Red Sandstone Strata -->
        <linearGradient id="strata_sunlit" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#9a3412"/>
          <stop offset="40%" stop-color="#c2410c"/>
          <stop offset="80%" stop-color="#ea580c"/>
          <stop offset="100%" stop-color="#f97316"/>
        </linearGradient>
        <!-- Right Shadowed Canyon Wall -->
        <linearGradient id="strata_shadow" x1="1" y1="0" x2="0" y2="0">
          <stop offset="0%" stop-color="#451a03"/>
          <stop offset="50%" stop-color="#78350f"/>
          <stop offset="100%" stop-color="#92400e"/>
        </linearGradient>
        <!-- Colorado River Gradient -->
        <linearGradient id="colorado_river_grad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#67e8f9"/>
          <stop offset="50%" stop-color="#06b6d4"/>
          <stop offset="100%" stop-color="#0891b2"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#canyon_golden_sky)" stroke="#c2410c" stroke-width="2.5"/>

      <g clip-path="url(#canyon_dial_clip)">
        <!-- Radiant Golden Sunset Sun High over Rim (Clean with soft halo) -->
        <circle cx="150" cy="62" r="28" fill="#ffffff" opacity="0.95"/>
        <circle cx="150" cy="62" r="42" fill="#fef08a" opacity="0.3"/>

        <!-- Tiny Soaring Desert Hawk in Upper-Left Sky (Far from sun) -->
        <path d="M 55 45 Q 62 40 68 45 Q 74 40 81 45 Q 72 47 68 44 Q 64 47 55 45 Z" fill="#451a03"/>

        <!-- Distant Desert Mesas & Plateaus in Atmospheric Purple/Orange Haze (Horizon: y=95..135) -->
        <polygon points="25,135 65,102 115,102 145,135" fill="#ea580c" opacity="0.5"/>
        <polygon points="155,135 185,95 245,95 275,135" fill="#c2410c" opacity="0.5"/>

        <!-- Natural Stepped Grand Canyon Gorge Walls with Layered Strata -->

        <!-- 1. Left Canyon Wall & Sandstone Terraces -->
        <g>
          <!-- Massive Natural Stepped Terraces -->
          <path d="M 0 115 L 75 125 L 68 155 L 105 168 L 92 205 L 128 225 L 118 300 L 0 300 Z" fill="url(#strata_sunlit)"/>
          
          <!-- Layered Geological Rock Strata Lines -->
          <g stroke="#7c2d12" stroke-width="1.2" opacity="0.65">
            <line x1="0" y1="135" x2="72" y2="135"/>
            <line x1="0" y1="168" x2="102" y2="175"/>
            <line x1="0" y1="205" x2="95" y2="215"/>
            <line x1="0" y1="248" x2="122" y2="255"/>
          </g>

          <!-- Golden Sandstone Rim Highlight -->
          <path d="M 0 115 L 75 125 L 68 155 L 105 168 L 92 205 L 128 225 L 118 300" stroke="#fde047" stroke-width="2" fill="none"/>
        </g>

        <!-- 2. Right Canyon Wall & Sandstone Terraces (Deep Atmospheric Shadow) -->
        <g>
          <path d="M 300 120 L 225 132 L 232 160 L 195 172 L 208 210 L 172 230 L 182 300 L 300 300 Z" fill="url(#strata_shadow)"/>
          
          <!-- Shadow Strata Lines -->
          <g stroke="#1c1917" stroke-width="1.2" opacity="0.65">
            <line x1="228" y1="140" x2="300" y2="138"/>
            <line x1="198" y1="180" x2="300" y2="172"/>
            <line x1="205" y1="222" x2="300" y2="215"/>
            <line x1="178" y1="258" x2="300" y2="252"/>
          </g>

          <!-- Shadow Rim Contour -->
          <path d="M 300 120 L 225 132 L 232 160 L 195 172 L 208 210 L 172 230 L 182 300" stroke="#78350f" stroke-width="1.8" fill="none"/>
        </g>

        <!-- 3. The Natural Winding Colorado River Carving through the Canyon Gorge (Smooth Organic Flow) -->
        <g>
          <!-- Deep Canyon Bed Chasm -->
          <path d="M 115 300 L 128 225 Q 150 175 148 145 Q 152 145 172 230 L 185 300 Z" fill="#1e1b4b"/>
          
          <!-- Flowing Turquoise Water River Ribbon -->
          <path d="M 149 145 C 144 175 158 205 144 235 C 136 255 154 280 150 300" stroke="url(#colorado_river_grad)" stroke-width="6" fill="none" stroke-linecap="round"/>
          <path d="M 149 145 C 144 175 158 205 144 235 C 136 255 154 280 150 300" stroke="#ffffff" stroke-width="1.8" fill="none" stroke-linecap="round" opacity="0.8"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#451a03" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#f59e0b"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#78350f" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#06b6d4" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#06b6d4" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#06b6d4" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#06b6d4"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#451a03" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#06b6d4"/>
      </g>
    `;
  }
};
