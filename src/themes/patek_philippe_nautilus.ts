import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const patek_philippe_nautilusTheme: ClockThemeRenderer = {
  name: 'Patek Philippe Nautilus',
  description: 'Luxury sports watch with an iconic porthole-inspired octagonal bezel and horizontal embossed dial',
  defaultColors: {
    face: '#1d2a3a', // Navy blue
    dialBorder: '#c0c0c0',
    hourTicks: '#ffffff',
    minuteTicks: '#888888',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#e0e0e0',
    accent: '#ffffff',
    centerCap: '#c0c0c0'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let horizontalLines = '';
    for (let y = 30; y < 270; y += 12) {
      horizontalLines += `<line x1="20" y1="${y}" x2="280" y2="${y}" stroke="#131e2b" stroke-width="6" opacity="0.8"/>`;
    }

    let dialMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i === 0) {
        dialMarkers += `<rect x="146" y="32" width="8" height="24" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="2"/>`;
        dialMarkers += `<rect x="140" y="32" width="4" height="24" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="1"/>`;
        dialMarkers += `<rect x="156" y="32" width="4" height="24" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="1"/>`;
      } else {
        dialMarkers += `<rect x="146" y="36" width="8" height="18" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="2" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let minuteTicks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      minuteTicks += `<circle cx="150" cy="28" r="1.5" fill="${colors.minuteTicks}" transform="rotate(${angle} 150 150)"/>`;
    }

    return `
      <!-- Bezel (Porthole shape) -->
      <path d="M70,30 L230,30 C270,30 280,70 280,150 C280,230 270,270 230,270 L70,270 C30,270 20,230 20,150 C20,70 30,30 70,30 Z" fill="#e0e0e0" stroke="#a0a0a0" stroke-width="2"/>
      <path d="M75,38 L225,38 C255,38 262,70 262,150 C262,230 255,262 225,262 L75,262 C45,262 38,230 38,150 C38,70 45,38 75,38 Z" fill="#b0b0b0"/>
      
      <!-- Dial -->
      <clipPath id="nautilus-dial">
        <circle cx="150" cy="150" r="115"/>
      </clipPath>
      <circle cx="150" cy="150" r="115" fill="${colors.face}"/>
      
      <!-- Embossed pattern -->
      <g clip-path="url(#nautilus-dial)">
        ${horizontalLines}
      </g>
      
      <!-- Minute Ticks -->
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Hour Markers -->
      <g class="hour-markers">${dialMarkers}</g>
      
      <!-- Date Window at 3 o'clock -->
      <rect x="230" y="140" width="22" height="20" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
      <text x="241" y="154" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#000000">18</text>
      
      <!-- Logo and Text -->
      <text x="150" y="90" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="#ffffff">PATEK PHILIPPE</text>
      <text x="150" y="105" text-anchor="middle" font-family="'Times New Roman', serif" font-size="8" fill="#ffffff">GENEVE</text>
      <text x="150" y="225" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#888888">SWISS</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Baton with rounded tip) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146" y="85" width="8" height="65" fill="${colors.hourHand}" stroke="#c0c0c0" stroke-width="1" rx="4"/>
      </g>
      
      <!-- Minute Hand (Baton with rounded tip) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="146" y="40" width="8" height="110" fill="${colors.minuteHand}" stroke="#c0c0c0" stroke-width="1" rx="4"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="180" x2="150" y2="35" stroke="${colors.secondHand}" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="3" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
    `;
  }
};
