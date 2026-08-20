import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const southAfricaTheme: ClockThemeRenderer = {
  name: 'south-africa',
  description: 'South Africa Rainbow Nation watch with crisp Y-shaped national flag ribbon clipped strictly inside dial bounds',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#007749',
    hourTicks: '#007749',
    minuteTicks: '#ffb81c',
    numbers: '#007749',
    hourHand: '#007749',
    minuteHand: '#007749',
    secondHand: '#e03c31',
    accent: '#ffb81c',
    centerCap: '#007749',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Crisp Y-shaped South African National Flag Graphic (Clipped strictly inside dial circle)
    const flagYGraphic = `
      <g clip-path="url(#sa-clip)">
        <!-- Top Chili Red Half -->
        <rect x="0" y="0" width="300" height="150" fill="#e03c31"/>
        <!-- Bottom Ocean Blue Half -->
        <rect x="0" y="150" width="300" height="150" fill="#001489"/>
        <!-- Outer White Y-Shape border -->
        <polygon points="0,30 180,150 0,270 0,225 112,150 0,75" fill="#ffffff"/>
        <rect x="0" y="127.5" width="300" height="45" fill="#ffffff"/>
        <!-- Green Y-Shape center -->
        <polygon points="0,45 157,150 0,255 0,210 90,150 0,90" fill="#007749"/>
        <rect x="0" y="135" width="300" height="30" fill="#007749"/>
        <!-- Yellow Triangle V-Border -->
        <polygon points="0,60 135,150 0,240" fill="#ffb81c"/>
        <!-- Black Triangle Triangle at Hoist -->
        <polygon points="0,75 112,150 0,225" fill="#000000"/>
        <!-- Subtle Dial Overlay to keep watch legibility -->
        <circle cx="150" cy="150" r="139" fill="#ffffff" opacity="0.25"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="146.5" y="18" width="7" height="16" rx="2" fill="#007749" stroke="#ffffff" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="26" stroke="#ffffff" stroke-width="2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'SOUTH AFRICA · JOHANNESBURG';

    return `
      
      <defs>
        <clipPath id="southAfrica_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <clipPath id="sa-clip">
          <circle cx="150" cy="150" r="139"/>
        </clipPath>
      </defs>

      <!-- Green Outer Bezel & Snow White Dial -->
      <circle cx="150" cy="150" r="147" fill="#007749" stroke="#ffb81c" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}"/>

      <!-- Clipped Y-Ribbon Flag Graphic -->
      ${flagYGraphic}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" stroke="#007749" stroke-width="0.8" letter-spacing="2.5">RAINBOW NATION</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" stroke="#001489" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Green Sword with Gold Outline) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#007749" stroke="#ffb81c" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Green Sword with Gold Outline) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#007749" stroke="#ffb81c" stroke-width="1.5" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Flag Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#e03c31" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffb81c" stroke="#007749" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#007749" stroke="#ffb81c" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffb81c"/>
    
    `;
  }
};
