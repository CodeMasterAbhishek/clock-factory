import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const audemars_piguet_royal_oakTheme: ClockThemeRenderer = {
  name: 'Audemars Piguet Royal Oak',
  description: 'Iconic octagonal bezel with hexagonal screws and tapisserie dial',
  defaultColors: {
    face: '#1a1f24', // Dark blue/grey
    dialBorder: '#c0c0c0',
    hourTicks: '#ffffff',
    minuteTicks: '#888888',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ffffff',
    accent: '#ffffff',
    centerCap: '#c0c0c0'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let tapisserie = '';
    for (let y = 30; y < 270; y += 8) {
      for (let x = 30; x < 270; x += 8) {
        tapisserie += `<rect x="${x}" y="${y}" width="6" height="6" fill="#13171b" opacity="0.8"/>`;
      }
    }

    let dialMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i === 0) {
        dialMarkers += `<rect x="147" y="42" width="6" height="20" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="1"/>`;
        dialMarkers += `<rect x="140" y="42" width="5" height="20" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="1"/>`;
        dialMarkers += `<rect x="155" y="42" width="5" height="20" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="1"/>`;
      } else {
        dialMarkers += `<rect x="147" y="45" width="6" height="15" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" rx="1" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let minuteTicks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      minuteTicks += `<line x1="150" y1="38" x2="150" y2="42" stroke="${colors.minuteTicks}" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
    }

    let screws = '';
    for (let i = 0; i < 8; i++) {
      const angle = 22.5 + i * 45;
      const rad = (angle - 90) * (Math.PI / 180);
      const cx = 150 + 130 * Math.cos(rad);
      const cy = 150 + 130 * Math.sin(rad);
      screws += `
        <polygon points="${cx},${cy-4} ${cx+3.5},${cy-2} ${cx+3.5},${cy+2} ${cx},${cy+4} ${cx-3.5},${cy+2} ${cx-3.5},${cy-2}" fill="#e0e0e0" stroke="#888" stroke-width="1" transform="rotate(${angle} ${cx} ${cy})"/>
        <circle cx="${cx}" cy="${cy}" r="2" fill="#fff"/>
        <line x1="${cx-2}" y1="${cy}" x2="${cx+2}" y2="${cy}" stroke="#888" stroke-width="1" transform="rotate(${angle} ${cx} ${cy})"/>
      `;
    }

    return `
      <!-- Bezel (Octagon) -->
      <polygon points="90,10 210,10 290,90 290,210 210,290 90,290 10,210 10,90" fill="#d0d0d0" stroke="#909090" stroke-width="2"/>
      <polygon points="95,15 205,15 285,95 285,205 205,285 95,285 15,205 15,95" fill="#e8e8e8"/>
      
      <!-- Screws -->
      ${screws}
      
      <!-- Inner Bezel -->
      <circle cx="150" cy="150" r="115" fill="#999999"/>
      
      <!-- Dial -->
      <clipPath id="ro-dial">
        <circle cx="150" cy="150" r="113"/>
      </clipPath>
      <circle cx="150" cy="150" r="113" fill="${colors.face}"/>
      
      <!-- Tapisserie pattern -->
      <g clip-path="url(#ro-dial)">
        ${tapisserie}
      </g>
      
      <!-- Minute Ticks -->
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Hour Markers -->
      <g class="hour-markers">${dialMarkers}</g>
      
      <!-- Date Window at 3 o'clock -->
      <rect x="235" y="140" width="18" height="20" fill="${colors.face}" stroke="#c0c0c0" stroke-width="1"/>
      <text x="244" y="154" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="10" fill="#ffffff">8</text>
      
      <!-- Logo and Text -->
      <text x="150" y="85" text-anchor="middle" font-family="Arial, sans-serif" font-size="12" font-weight="bold" fill="#ffffff" letter-spacing="1">AP</text>
      <text x="150" y="98" text-anchor="middle" font-family="'Times New Roman', serif" font-size="7" fill="#ffffff" letter-spacing="0.5">AUDEMARS PIGUET</text>
      <text x="150" y="108" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#ffffff">AUTOMATIC</text>
      <text x="150" y="215" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#888888">SWISS MADE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Royal Oak Baton) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="147" y="85" width="6" height="65" fill="${colors.hourHand}" stroke="#c0c0c0" stroke-width="1" rx="3"/>
        <line x1="150" y1="85" x2="150" y2="150" stroke="#888" stroke-width="0.5"/>
      </g>
      
      <!-- Minute Hand (Royal Oak Baton) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="147" y="45" width="6" height="105" fill="${colors.minuteHand}" stroke="#c0c0c0" stroke-width="1" rx="3"/>
        <line x1="150" y1="45" x2="150" y2="150" stroke="#888" stroke-width="0.5"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="180" x2="150" y2="40" stroke="#c0c0c0" stroke-width="1"/>
        <circle cx="150" cy="120" r="3" fill="#c0c0c0"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="4" fill="#c0c0c0" />
    `;
  }
};
