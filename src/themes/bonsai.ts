import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const bonsaiTheme: ClockThemeRenderer = {
  name: 'bonsai',
  description: 'Exquisite Japanese ancient Juniper Bonsai with gnarled twisted trunk, tiered cloud-like foliage pads, and glazed ceramic tray',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<rect x="148.5" y="12" width="3" height="10" rx="1.5" fill="#78716c" stroke="#ffffff" stroke-width="0.5" transform="rotate(${angle} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="bonsai_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="bonsai_washi" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="60%" stop-color="#fafaf9"/>
          <stop offset="100%" stop-color="#f5f5f4"/>
        </linearGradient>
        <linearGradient id="trunk_wood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#92400e"/>
          <stop offset="40%" stop-color="#78350f"/>
          <stop offset="85%" stop-color="#451a03"/>
          <stop offset="100%" stop-color="#292524"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#bonsai_washi)" stroke="#78716c" stroke-width="2.5"/>

      <g clip-path="url(#bonsai_dial_clip)">
        <!-- Zen Enso Brush Circle Watermark (Subtle Background) -->
        <circle cx="150" cy="140" r="78" fill="none" stroke="#e7e5e4" stroke-width="8" opacity="0.6" stroke-dasharray="320 60"/>

        <!-- Glazed Ceramic Bonsai Planter Pot -->
        <g stroke="#292524" stroke-width="1.5">
          <!-- Pot Lip -->
          <rect x="75" y="232" width="150" height="8" rx="2" fill="#1e293b"/>
          <!-- Pot Body -->
          <polygon points="80,240 220,240 208,265 92,265" fill="#0f172a"/>
          <!-- Pot Feet -->
          <rect x="100" y="265" width="14" height="5" rx="1" fill="#1e293b"/>
          <rect x="186" y="265" width="14" height="5" rx="1" fill="#1e293b"/>
        </g>
        <!-- Moss Soil Mound & Exposed Surface Roots (Nebari) -->
        <ellipse cx="150" cy="233" rx="65" ry="8" fill="#65a30d"/>
        <path d="M 125 234 Q 138 230 148 226 Q 160 230 175 234" stroke="#451a03" stroke-width="2.5" fill="none"/>

        <!-- Gnarled Ancient Twisting Bonsai Trunk (Moyogi S-Curve Form) -->
        <!-- Main Trunk -->
        <path d="M 148 230 C 145 195 132 170 140 145 C 150 120 175 105 152 72 L 142 74 C 160 102 135 118 128 145 C 120 172 135 195 138 230 Z" fill="url(#trunk_wood)" stroke="#292524" stroke-width="1"/>
        
        <!-- Woodgrain Contours & Jin Deadwood Highlight -->
        <path d="M 144 228 C 140 195 128 172 136 146 C 144 122 165 110 148 76" stroke="#b45309" stroke-width="1.5" fill="none" opacity="0.7"/>
        <path d="M 142 74 L 140 60 L 144 65 Z" fill="#f5f5f4" stroke="#78716c" stroke-width="0.8"/>

        <!-- Primary Branches Extending to Foliage Pads -->
        <!-- Left Low Branch -->
        <path d="M 132 160 Q 105 162 90 155" stroke="#451a03" stroke-width="4.5" fill="none" stroke-linecap="round"/>
        <!-- Right Middle Branch -->
        <path d="M 140 135 Q 175 130 198 122" stroke="#451a03" stroke-width="4" fill="none" stroke-linecap="round"/>
        <!-- Left Upper Branch -->
        <path d="M 140 105 Q 115 100 105 92" stroke="#451a03" stroke-width="3.5" fill="none" stroke-linecap="round"/>
        <!-- Crown Apex Branch -->
        <path d="M 148 85 Q 152 75 145 68" stroke="#451a03" stroke-width="3" fill="none" stroke-linecap="round"/>

        <!-- Tiered Cloud-Like Pine Needle Foliage Pads (Layered Volumetric Depth) -->
        <!-- 1. Left Lower Cloud Pad -->
        <g transform="translate(85, 152)">
          <ellipse cx="0" cy="0" rx="28" ry="12" fill="#042f2e"/>
          <ellipse cx="-2" cy="-2" rx="26" ry="10" fill="#14532d"/>
          <ellipse cx="-4" cy="-4" rx="22" ry="8" fill="#16a34a"/>
          <ellipse cx="-6" cy="-6" rx="15" ry="5" fill="#22c55e" opacity="0.6"/>
        </g>

        <!-- 2. Right Middle Cloud Pad -->
        <g transform="translate(202, 118)">
          <ellipse cx="0" cy="0" rx="30" ry="13" fill="#042f2e"/>
          <ellipse cx="-2" cy="-2" rx="28" ry="11" fill="#14532d"/>
          <ellipse cx="-4" cy="-4" rx="24" ry="9" fill="#16a34a"/>
          <ellipse cx="-6" cy="-6" rx="16" ry="6" fill="#22c55e" opacity="0.6"/>
        </g>

        <!-- 3. Left Upper Cloud Pad -->
        <g transform="translate(100, 88)">
          <ellipse cx="0" cy="0" rx="24" ry="11" fill="#042f2e"/>
          <ellipse cx="-2" cy="-2" rx="22" ry="9" fill="#14532d"/>
          <ellipse cx="-4" cy="-4" rx="18" ry="7" fill="#16a34a"/>
          <ellipse cx="-6" cy="-6" rx="12" ry="4" fill="#22c55e" opacity="0.6"/>
        </g>

        <!-- 4. Crown Apex Apex Cloud Pad -->
        <g transform="translate(145, 62)">
          <ellipse cx="0" cy="0" rx="26" ry="12" fill="#042f2e"/>
          <ellipse cx="-2" cy="-2" rx="24" ry="10" fill="#14532d"/>
          <ellipse cx="-4" cy="-4" rx="20" ry="8" fill="#16a34a"/>
          <ellipse cx="-6" cy="-6" rx="14" ry="5" fill="#22c55e" opacity="0.7"/>
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
          <circle cx="150" cy="75" r="3.5" fill="#ca8a04"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#14532d" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="35" r="3" fill="#86efac"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#dc2626" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#dc2626" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#dc2626"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#292524" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#ca8a04"/>
      </g>
    `;
  }
};
