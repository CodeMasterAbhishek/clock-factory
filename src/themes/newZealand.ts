import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const newZealandTheme: ClockThemeRenderer = {
  name: 'new-zealand',
  description: 'New Zealand watch with deep navy dial, Union Jack canton, 4 red & white Southern Cross stars, and Silver Fern accents',
  defaultColors: {
    face: '#00247d',
    dialBorder: '#cc142b',
    hourTicks: '#ffffff',
    minuteTicks: '#cc142b',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#cc142b',
    accent: '#ffffff',
    centerCap: '#ffffff',
    subdialBg: '#001a5c'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    const flagGraphic = `
      <g clip-path="url(#nz-clip)">
        <rect x="0" y="0" width="300" height="300" fill="#00247d"/>
        
        <!-- Union Jack Canton in Top Left -->
        <g transform="translate(0, 0)">
          <rect x="0" y="0" width="130" height="90" fill="#00247d"/>
          <!-- Diagonal White & Red Crosses -->
          <line x1="0" y1="0" x2="130" y2="90" stroke="#ffffff" stroke-width="14"/>
          <line x1="130" y1="0" x2="0" y2="90" stroke="#ffffff" stroke-width="14"/>
          <line x1="0" y1="0" x2="130" y2="90" stroke="#cc142b" stroke-width="6"/>
          <line x1="130" y1="0" x2="0" y2="90" stroke="#cc142b" stroke-width="6"/>
          <!-- St George White & Red Cross -->
          <rect x="52" y="0" width="26" height="90" fill="#ffffff"/>
          <rect x="0" y="32" width="130" height="26" fill="#ffffff"/>
          <rect x="57" y="0" width="16" height="90" fill="#cc142b"/>
          <rect x="0" y="37" width="130" height="16" fill="#cc142b"/>
        </g>

        <!-- 4 Southern Cross Stars on the Right -->
        <g filter="url(#drop-shadow)">
          <!-- Top Star -->
          <polygon points="210,50 212,56 218,56 213,60 215,66 210,62 205,66 207,60 202,56 208,56" fill="#cc142b" stroke="#ffffff" stroke-width="1.5"/>
          <!-- Bottom Star -->
          <polygon points="210,230 212,236 218,236 213,240 215,246 210,242 205,246 207,240 202,236 208,236" fill="#cc142b" stroke="#ffffff" stroke-width="1.5"/>
          <!-- Left Star -->
          <polygon points="175,140 177,146 183,146 178,150 180,156 175,152 170,156 172,150 167,146 173,146" fill="#cc142b" stroke="#ffffff" stroke-width="1.5"/>
          <!-- Right Star -->
          <polygon points="245,130 247,136 253,136 248,140 250,146 245,142 240,146 242,140 237,136 243,136" fill="#cc142b" stroke="#ffffff" stroke-width="1.5"/>
        </g>
      </g>
    `;

    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#ffffff" stroke="#00247d" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#cc142b" stroke-width="1.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'AOTEAROA · WELLINGTON';

    return `
      
      <defs>
        <clipPath id="newZealand_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="nz-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <circle cx="150" cy="150" r="147" fill="#00247d" stroke="#cc142b" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      ${flagGraphic}

      <g class="ticks">${ticks}</g>

      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="11.5" font-weight="900" fill="#ffffff" stroke="#00247d" stroke-width="0.5" letter-spacing="2.5">NEW ZEALAND</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" stroke="#00247d" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffffff" stroke="#00247d" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffffff" stroke="#00247d" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#cc142b" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffffff" stroke="#00247d" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <circle cx="150" cy="150" r="7.5" fill="#00247d" stroke="#ffffff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffffff"/>
    
    `;
  }
};
