import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const coral_reefTheme: ClockThemeRenderer = {
  name: 'coral_reef',
  description: 'Vibrant living marine coral reef with sunlit ocean caustics, sea turtle, and clownfish',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      ticks += `<circle cx="150" cy="16" r="3.5" fill="#7dd3fc" stroke="#0369a1" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`;
    }
    
    return `
      <defs>
        <clipPath id="coral_reef_dial_clip">
          <circle cx="150" cy="150" r="145"/>

      
        </clipPath>
        <clipPath id="coral_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <radialGradient id="deep_sea_grad" cx="50%" cy="15%" r="85%">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="35%" stop-color="#0284c7"/>
          <stop offset="70%" stop-color="#0369a1"/>
          <stop offset="100%" stop-color="#082f49"/>
        </radialGradient>
        <linearGradient id="sun_caustics" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45"/>
          <stop offset="60%" stop-color="#7dd3fc" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Ocean Background Disc -->
      <circle cx="150" cy="150" r="145" fill="url(#deep_sea_grad)" stroke="#38bdf8" stroke-width="2.5"/>

      <g clip-path="url(#coral_reef_dial_clip)">

      <!-- Group Strictly Clipped to Dial Circle -->
      <g clip-path="url(#coral_dial_clip)">
        <!-- Sunlight Caustics Shafts Filtering from Surface -->
        <polygon points="60,0 95,0 150,220 90,220" fill="url(#sun_caustics)"/>
        <polygon points="130,0 170,0 230,240 170,240" fill="url(#sun_caustics)"/>
        <polygon points="210,0 250,0 280,200 240,200" fill="url(#sun_caustics)"/>

        <!-- Swimming Sea Turtle Silhouette (Top Right) -->
        <g transform="translate(205, 70) rotate(-25) scale(0.75)" fill="#0f766e" opacity="0.85">
          <!-- Shell -->
          <ellipse cx="0" cy="0" rx="14" ry="18" stroke="#14b8a6" stroke-width="1.2"/>
          <!-- Head -->
          <ellipse cx="0" cy="-22" rx="5" ry="6"/>
          <!-- Front Flippers -->
          <path d="M -10 -10 Q -30 -18 -32 0 Q -18 -2 -10 -2 Z"/>
          <path d="M 10 -10 Q 30 -18 32 0 Q 18 -2 10 -2 Z"/>
          <!-- Back Flippers -->
          <path d="M -8 14 Q -20 22 -16 26 Q -10 22 -6 16 Z"/>
          <path d="M 8 14 Q 20 22 16 26 Q 10 22 6 16 Z"/>
        </g>

        <!-- Seabed Sand & Coral Rock Base -->
        <path d="M 0 240 Q 80 220 160 235 T 300 225 L 300 300 L 0 300 Z" fill="#0f172a"/>
        <path d="M 0 260 Q 90 245 180 258 T 300 248 L 300 300 L 0 300 Z" fill="#042f2e"/>

        <!-- Branching Staghorn Coral (Magenta / Rose) Left -->
        <g stroke="#f43f5e" stroke-width="6" stroke-linecap="round" fill="none">
          <path d="M 50 260 Q 60 210 80 180 Q 95 160 85 130"/>
          <path d="M 72 195 Q 100 180 115 155"/>
          <path d="M 82 170 Q 65 150 55 135"/>
          <path d="M 98 172 Q 115 185 125 175"/>
        </g>
        <!-- Glowing Coral Tips -->
        <g fill="#fda4af">
          <circle cx="85" cy="130" r="4.5"/>
          <circle cx="115" cy="155" r="4"/>
          <circle cx="55" cy="135" r="4"/>
          <circle cx="125" cy="175" r="3.5"/>
        </g>

        <!-- Golden Table / Brain Coral Right -->
        <g stroke="#f59e0b" stroke-width="7" stroke-linecap="round" fill="none">
          <path d="M 250 260 Q 235 205 215 175 Q 195 155 210 125"/>
          <path d="M 225 190 Q 195 175 180 150"/>
          <path d="M 215 165 Q 235 145 245 130"/>
        </g>
        <g fill="#fde047">
          <circle cx="210" cy="125" r="4.5"/>
          <circle cx="180" cy="150" r="4"/>
          <circle cx="245" cy="130" r="4"/>
        </g>

        <!-- Sea Anemone Cluster & Waving Soft Tentacles Center -->
        <g fill="#a855f7" stroke="#7e22ce" stroke-width="1.5">
          <path d="M 125 240 Q 115 210 122 195 Q 128 215 132 240 Z"/>
          <path d="M 135 240 Q 132 205 140 190 Q 146 210 144 240 Z"/>
          <path d="M 148 240 Q 150 200 158 188 Q 162 210 156 240 Z"/>
          <path d="M 160 240 Q 168 205 175 195 Q 175 215 168 240 Z"/>
        </g>
        <g fill="#e9d5ff">
          <circle cx="122" cy="195" r="2.5"/>
          <circle cx="140" cy="190" r="2.5"/>
          <circle cx="158" cy="188" r="2.5"/>
          <circle cx="175" cy="195" r="2.5"/>
        </g>

        <!-- Cute Handcrafted Clownfish (Nemo) -->
        <g transform="translate(138, 175) scale(0.9)">
          <!-- Orange Body -->
          <ellipse cx="0" cy="0" rx="14" ry="9" fill="#ea580c"/>
          <!-- Tail Fin -->
          <polygon points="-12,0 -20,-8 -18,0 -20,8" fill="#ea580c" stroke="#c2410c" stroke-width="1"/>
          <!-- Pectoral / Dorsal Fins -->
          <path d="M -2 -8 Q 4 -14 10 -7 Z" fill="#ea580c"/>
          <path d="M 0 8 Q 4 13 8 7 Z" fill="#ea580c"/>
          <!-- White Stripes with Black Outline -->
          <path d="M -4 -8 Q 0 0 -4 8" stroke="#ffffff" stroke-width="3.5" fill="none"/>
          <path d="M 4 -7 Q 8 0 4 7" stroke="#ffffff" stroke-width="3" fill="none"/>
          <!-- Eye -->
          <circle cx="8" cy="-2" r="2.5" fill="#ffffff"/>
          <circle cx="9" cy="-2" r="1.2" fill="#000000"/>
        </g>

        <!-- Floating Sea Bubbles with Highlights -->
        <g fill="#ffffff" opacity="0.6">
          <circle cx="105" cy="115" r="3"/>
          <circle cx="104" cy="114" r="1" fill="#ffffff"/>
          <circle cx="165" cy="95" r="4"/>
          <circle cx="163" cy="93" r="1.5" fill="#ffffff"/>
          <circle cx="130" cy="65" r="2.5"/>
          <circle cx="190" cy="130" r="3"/>
        </g>
      </g>

      </g>

      </g>

      <g class="ticks">${ticks}
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <!-- High-Contrast Nautical Dive Hands -->
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#082f49" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#facc15" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#082f49" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#38bdf8" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f43f5e" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#f43f5e" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f43f5e"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#082f49" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#facc15"/>
      </g>
    `;
  }
};
