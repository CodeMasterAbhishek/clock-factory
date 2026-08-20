import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const pyramidsTheme: ClockThemeRenderer = {
  name: 'pyramids',
  description: 'Ancient Giza Necropolis pyramids under an Egyptian twilight starry sky with glowing crescent moon, desert sand dunes, and camel caravan',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#d97706" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="pyramid_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="giza_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="40%" stop-color="#312e81"/>
          <stop offset="70%" stop-color="#7c2d12"/>
          <stop offset="100%" stop-color="#c2410c"/>
        </linearGradient>
        <linearGradient id="pyr_light" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#f59e0b"/>
          <stop offset="100%" stop-color="#d97706"/>
        </linearGradient>
        <linearGradient id="pyr_shadow" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#92400e"/>
          <stop offset="50%" stop-color="#78350f"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#giza_sky)" stroke="#d97706" stroke-width="2.5"/>

      <g clip-path="url(#pyramid_dial_clip)">
        <!-- Ancient Egyptian Constellation Stars in Indigo Sky -->
        <g fill="#ffffff">
          <circle cx="50" cy="60" r="1.2"/><circle cx="95" cy="45" r="1.5"/><circle cx="130" cy="70" r="1"/><circle cx="170" cy="35" r="1.2"/>
          <circle cx="255" cy="55" r="1.5"/><circle cx="270" cy="90" r="1.2"/><circle cx="40" cy="100" r="1.5"/>
        </g>

        <!-- Luminous Golden Egyptian Crescent Moon -->
        <g transform="translate(225, 68)">
          <path d="M 0 -18 A 18 18 0 0 0 16 8 A 14 14 0 1 1 -2 -18 Z" fill="#fef08a"/>
          <circle cx="0" cy="0" r="22" fill="#fef08a" opacity="0.15"/>
        </g>

        <!-- The Great Pyramids of Giza (Khufu & Khafre) with Dramatic Sunlit / Shadow Facets -->
        <!-- 1. The Great Pyramid of Khufu (Left & Dominant) -->
        <g>
          <!-- Sunlit Golden Facet -->
          <polygon points="110,85 20,230 110,230" fill="url(#pyr_light)"/>
          <!-- Shadow Facet -->
          <polygon points="110,85 110,230 195,230" fill="url(#pyr_shadow)"/>
          <!-- Central Ridgeline & Limestone Courses -->
          <line x1="110" y1="85" x2="110" y2="230" stroke="#451a03" stroke-width="1.8"/>
          <!-- Fine Masonry Horizontal Tier Lines -->
          <g stroke="#78350f" stroke-width="0.8" opacity="0.4">
            <line x1="95" y1="120" x2="125" y2="120"/>
            <line x1="80" y1="150" x2="145" y2="150"/>
            <line x1="60" y1="180" x2="165" y2="180"/>
            <line x1="40" y1="210" x2="182" y2="210"/>
          </g>
        </g>

        <!-- 2. Pyramid of Khafre (Right Flank with Preserved Limestone Casing Cap) -->
        <g>
          <!-- Sunlit Facet -->
          <polygon points="205,115 145,230 205,230" fill="url(#pyr_light)"/>
          <!-- Shadow Facet -->
          <polygon points="205,115 205,230 268,230" fill="url(#pyr_shadow)"/>
          <!-- Limestone Casing Capstone at Apex -->
          <polygon points="205,115 195,138 215,138" fill="#fef08a" opacity="0.85"/>
          <line x1="205" y1="115" x2="205" y2="230" stroke="#451a03" stroke-width="1.5"/>
        </g>

        <!-- Rolling Desert Sand Dunes in Foreground -->
        <path d="M 0 220 Q 80 205 160 225 T 300 215 L 300 300 L 0 300 Z" fill="#b45309"/>
        <path d="M 0 238 Q 110 220 220 242 T 300 232 L 300 300 L 0 300 Z" fill="#92400e"/>
        <path d="M 0 255 Q 90 240 180 260 T 300 250 L 300 300 L 0 300 Z" fill="#78350f"/>

        <!-- Bedouin Camel Caravan Traversing the Desert Dune Ridge (Lower Right) -->
        <g transform="translate(198, 238) scale(0.65)" fill="#451a03">
          <!-- Camel 1 (Lead) -->
          <g>
            <!-- Body & Hump -->
            <ellipse cx="0" cy="0" rx="10" ry="7"/>
            <circle cx="0" cy="-7" r="5"/>
            <!-- Neck & Head -->
            <path d="M 8 -2 Q 15 -10 16 -16 Q 20 -15 18 -12 L 14 2 Z"/>
            <circle cx="17" cy="-15" r="2.5"/>
            <!-- Legs -->
            <line x1="-6" y1="5" x2="-8" y2="18" stroke="#451a03" stroke-width="1.8"/>
            <line x1="-3" y1="5" x2="-2" y2="18" stroke="#451a03" stroke-width="1.8"/>
            <line x1="5" y1="5" x2="4" y2="18" stroke="#451a03" stroke-width="1.8"/>
            <line x1="8" y1="5" x2="10" y2="18" stroke="#451a03" stroke-width="1.8"/>
          </g>
          <!-- Camel 2 (Following) -->
          <g transform="translate(-25, 2) scale(0.85)">
            <ellipse cx="0" cy="0" rx="10" ry="7"/>
            <circle cx="0" cy="-7" r="5"/>
            <path d="M 8 -2 Q 15 -10 16 -16 Q 20 -15 18 -12 L 14 2 Z"/>
            <circle cx="17" cy="-15" r="2.5"/>
            <line x1="-6" y1="5" x2="-8" y2="18" stroke="#451a03" stroke-width="1.8"/>
            <line x1="8" y1="5" x2="10" y2="18" stroke="#451a03" stroke-width="1.8"/>
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
          <polygon points="146,150 154,150 150,75" fill="#451a03" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="75" r="3.5" fill="#f59e0b"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#78350f" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="35" r="3" fill="#fef08a"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f59e0b" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f59e0b"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#451a03" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#fef08a"/>
      </g>
    `;
  }
};
