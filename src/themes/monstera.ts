import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const monsteraTheme: ClockThemeRenderer = {
  name: 'monstera',
  description: 'Lush tropical Monstera Deliciosa rainforest foliage with realistic split-leaf fenestrations, delicate veins, and morning dewdrops',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<rect x="148" y="10" width="4" height="12" rx="2" fill="#047857" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="3" fill="#10b981" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="monstera_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="monstera_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f0fdf4"/>
          <stop offset="60%" stop-color="#ecfdf5"/>
          <stop offset="100%" stop-color="#d1fae5"/>
        </linearGradient>
        <linearGradient id="leaf_main" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#10b981"/>
          <stop offset="40%" stop-color="#059669"/>
          <stop offset="85%" stop-color="#047857"/>
          <stop offset="100%" stop-color="#064e3b"/>
        </linearGradient>
        <linearGradient id="leaf_back" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#047857"/>
          <stop offset="100%" stop-color="#022c22"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#monstera_bg)" stroke="#059669" stroke-width="2.5"/>

      <g clip-path="url(#monstera_dial_clip)">
        <!-- Background Secondary Monstera Leaves -->
        <g opacity="0.35" fill="url(#leaf_back)">
          <!-- Left Background Leaf -->
          <path d="M 40 180 C 10 120 40 40 120 30 C 140 60 110 100 130 140 C 100 160 80 190 40 180 Z"/>
          <!-- Right Background Leaf -->
          <path d="M 260 180 C 290 120 260 40 180 30 C 160 60 190 100 170 140 C 200 160 220 190 260 180 Z"/>
        </g>

        <!-- Main Giant Monstera Leaf (Rich Organic Contours & Deep Split Lobes) -->
        <g>
          <!-- Left Half of Main Leaf with Deep Lobes -->
          <path d="M 150 35 C 100 38 65 75 52 110 C 65 115 85 110 75 125 C 50 130 45 155 48 180 C 65 182 85 170 78 190 C 58 200 68 230 95 245 C 110 235 120 225 125 240 C 135 255 145 265 150 270 Z" fill="url(#leaf_main)" stroke="#047857" stroke-width="1.2"/>
          
          <!-- Right Half of Main Leaf with Deep Lobes -->
          <path d="M 150 35 C 200 38 235 75 248 110 C 235 115 215 110 225 125 C 250 130 255 155 252 180 C 235 182 215 170 222 190 C 242 200 232 230 205 245 C 190 235 180 225 175 240 C 165 255 155 265 150 270 Z" fill="#047857" stroke="#064e3b" stroke-width="1.2"/>

          <!-- Organic Internal Fenestrations (Slits/Holes along leaf ribs) -->
          <g fill="#f0fdf4">
            <!-- Left Fenestrations -->
            <ellipse cx="118" cy="95" rx="5" ry="16" transform="rotate(-35 118 95)"/>
            <ellipse cx="98" cy="145" rx="5.5" ry="18" transform="rotate(-48 98 145)"/>
            <ellipse cx="108" cy="200" rx="5" ry="15" transform="rotate(-60 108 200)"/>
            <!-- Right Fenestrations -->
            <ellipse cx="182" cy="95" rx="5" ry="16" transform="rotate(35 182 95)"/>
            <ellipse cx="202" cy="145" rx="5.5" ry="18" transform="rotate(48 202 145)"/>
            <ellipse cx="192" cy="200" rx="5" ry="15" transform="rotate(60 192 200)"/>
          </g>

          <!-- Central Pale Green Midrib & Lateral Veins -->
          <path d="M 150 35 Q 148 150 150 275" stroke="#6ee7b7" stroke-width="3.5" fill="none" stroke-linecap="round"/>
          <g stroke="#34d399" stroke-width="1.8" fill="none" opacity="0.8">
            <!-- Left Lateral Veins -->
            <path d="M 149 70 Q 115 80 82 95"/>
            <path d="M 149 120 Q 105 132 68 150"/>
            <path d="M 149 170 Q 110 185 80 215"/>
            <path d="M 149 220 Q 125 235 105 250"/>
            <!-- Right Lateral Veins -->
            <path d="M 151 70 Q 185 80 218 95"/>
            <path d="M 151 120 Q 195 132 232 150"/>
            <path d="M 151 170 Q 190 185 220 215"/>
            <path d="M 151 220 Q 175 235 195 250"/>
          </g>

          <!-- Glistening Rainforest Dewdrops -->
          <g fill="#ffffff" opacity="0.85">
            <circle cx="132" cy="80" r="3"/><circle cx="131" cy="79" r="1" fill="#34d399"/>
            <circle cx="85" cy="165" r="3.5"/><circle cx="84" cy="164" r="1.2" fill="#34d399"/>
            <circle cx="215" cy="170" r="3"/><circle cx="214" cy="169" r="1" fill="#34d399"/>
          </g>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#064e3b" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#047857" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#6ee7b7" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f59e0b" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f59e0b"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#064e3b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#34d399"/>
      </g>
    `;
  }
};
