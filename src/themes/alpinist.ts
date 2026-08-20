import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const alpinistTheme: ClockThemeRenderer = {
  name: 'alpinist',
  description: 'Mountaineering expedition watch with forest green dial, gold cathedral hands, and rotating compass ring',
  defaultColors: {
    face: '#062c1b',
    dialBorder: '#d97706',
    hourTicks: '#fbbf24',
    minuteTicks: '#047857',
    numbers: '#fbbf24',
    hourHand: '#fbbf24',
    minuteHand: '#fbbf24',
    secondHand: '#ef4444',
    accent: '#d97706',
    centerCap: '#fbbf24',
    subdialBg: '#022013'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Azimuth degree markings on inner compass bezel
    let azimuthText = '';
    const azimuths = [
      { text: 'N', angle: 0 },
      { text: '30', angle: 30 },
      { text: '60', angle: 60 },
      { text: 'E', angle: 90 },
      { text: '120', angle: 120 },
      { text: '150', angle: 150 },
      { text: 'S', angle: 180 },
      { text: '210', angle: 210 },
      { text: '240', angle: 240 },
      { text: 'W', angle: 270 },
      { text: '300', angle: 300 },
      { text: '330', angle: 330 }
    ];

    azimuths.forEach(a => {
      const rad = (a.angle - 90) * (Math.PI / 180);
      const ax = 150 + 137 * Math.cos(rad);
      const ay = 150 + 137 * Math.sin(rad) + 3;
      const isRed = a.text === 'N';
      azimuthText += `<text x="${ax.toFixed(1)}" y="${ay.toFixed(1)}" text-anchor="middle" font-family="'Georgia', serif" font-size="6.5" font-weight="700" fill="${isRed ? '#ef4444' : '#d97706'}">${a.text}</text>`;
    });

    // Gold Applied Hour Markers (Triangles at 12, 2, 4, 6, 8, 10 and even numbers)
    let hourMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 2 === 0) {
        // Gold Arrowhead Wedge
        hourMarkers += `<polygon points="146,26 154,26 150,42" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        // Gold Baton
        hourMarkers += `<rect x="148" y="26" width="4" height="14" fill="#fbbf24" stroke="#78350f" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'ALPINIST 200M';

    return `
      
      <!-- Polished Gold / Bronze Bezel -->
      <circle cx="150" cy="150" r="147" fill="#1c1917" stroke="#d97706" stroke-width="3"/>
      <circle cx="150" cy="150" r="128" fill="${colors.face}" stroke="#fbbf24" stroke-width="1.5"/>

      <!-- Compass Ring Markings -->
      <g class="azimuth-ring">${azimuthText}</g>
      <circle cx="150" cy="150" r="126" fill="none" stroke="#047857" stroke-width="1"/>

      <!-- Inner Sunburst Forest Green Dial -->
      <circle cx="150" cy="150" r="114" fill="none" stroke="#065f46" stroke-width="0.8"/>

      <!-- Applied Gold Markers -->
      <g class="hour-markers">${hourMarkers}</g>

      <!-- Dial Inscriptions -->
      <text x="150" y="98" text-anchor="middle" font-family="'Georgia', serif" font-size="8" font-weight="700" fill="#fbbf24" letter-spacing="1.5">EXPEDITION</text>
      <text x="150" y="200" text-anchor="middle" font-family="'Georgia', serif" font-size="6.5" font-weight="600" fill="#fef3c7" letter-spacing="1">${labelText}</text>
      <text x="150" y="210" text-anchor="middle" font-family="sans-serif" font-size="5.5" fill="#d97706" letter-spacing="1">AUTOMATIC 23 JEWELS</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Classic Cathedral Snake-Head) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="146,80 154,80 152,154 148,154" fill="#fbbf24" stroke="#78350f" stroke-width="1" filter="url(#drop-shadow)"/>
        <circle cx="150" cy="95" r="7" fill="#fbbf24" stroke="#78350f" stroke-width="1"/>
        <circle cx="150" cy="95" r="4.5" fill="#fef3c7"/>
      </g>
      
      <!-- Minute Hand (Cathedral Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="146.5,45 153.5,45 152,155 148,155" fill="#fbbf24" stroke="#78350f" stroke-width="1" filter="url(#drop-shadow)"/>
        <polygon points="148,49 152,49 151,140 149,140" fill="#fef3c7"/>
      </g>
      
      ${showSeconds ? `
      <!-- Red Needle Second Hand with Gold Moon Counterweight -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="22" x2="150" y2="180" stroke="${colors.secondHand}" stroke-width="1.6"/>
        <circle cx="150" cy="168" r="4" fill="#fbbf24"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Hub -->
      <circle cx="150" cy="150" r="7" fill="#78350f" stroke="#fbbf24" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="3" fill="#fbbf24"/>
    
    `;
  }
};
