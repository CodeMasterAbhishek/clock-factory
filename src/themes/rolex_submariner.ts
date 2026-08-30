import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const rolex_submarinerTheme: ClockThemeRenderer = {
  name: 'Rolex Submariner',
  description: 'Iconic dive watch with a black dial, mercedes hands, and a diver bezel',
  defaultColors: {
    face: '#121212',
    dialBorder: '#c0c0c0',
    hourTicks: '#ffffff',
    minuteTicks: '#888888',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#ffffff',
    accent: '#00ff00', // Lume color for night
    centerCap: '#c0c0c0'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    let bezelTicks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      if (i % 5 === 0) {
        if (i !== 0) { // Top is a pearl/triangle
          let num = i;
          if (i % 10 === 0) {
            const rad = (angle - 90) * (Math.PI / 180);
            const x = 150 + 133 * Math.cos(rad);
            const y = 150 + 133 * Math.sin(rad) + 4;
            bezelTicks += `<text x="${x}" y="${y}" text-anchor="middle" font-family="Arial, sans-serif" font-weight="bold" font-size="12" fill="#c0c0c0" transform="rotate(${angle} ${x} ${y - 4})">${num}</text>`;
          } else {
            bezelTicks += `<line x1="150" y1="12" x2="150" y2="24" stroke="#c0c0c0" stroke-width="2" transform="rotate(${angle} 150 150)"/>`;
          }
        }
      } else if (i < 15) {
        bezelTicks += `<line x1="150" y1="12" x2="150" y2="18" stroke="#c0c0c0" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let dialMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i === 0) {
        dialMarkers += `<polygon points="150,35 142,50 158,50" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1"/>`;
      } else if (i === 3 || i === 6 || i === 9) {
        dialMarkers += `<rect x="146" y="38" width="8" height="18" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else {
        dialMarkers += `<circle cx="150" cy="45" r="7" fill="${colors.hourTicks}" stroke="#c0c0c0" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    let minuteTicks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      minuteTicks += `<line x1="150" y1="28" x2="150" y2="33" stroke="${colors.minuteTicks}" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
    }

    return `
      <!-- Bezel -->
      <circle cx="150" cy="150" r="146" fill="#050505" stroke="${colors.dialBorder}" stroke-width="6"/>
      <circle cx="150" cy="150" r="146" fill="none" stroke="#222" stroke-width="1"/>
      <!-- Bezel zero marker (pearl) -->
      <polygon points="150,7 140,22 160,22" fill="#c0c0c0"/>
      <circle cx="150" cy="15" r="3" fill="#ffffff" stroke="#c0c0c0" stroke-width="1"/>
      
      ${bezelTicks}

      <!-- Dial -->
      <circle cx="150" cy="150" r="122" fill="${colors.face}"/>
      
      <!-- Minute Ticks -->
      <g class="minute-ticks">${minuteTicks}</g>
      
      <!-- Hour Markers -->
      <g class="hour-markers">${dialMarkers}</g>
      
      <!-- Logo and Text -->
      <text x="150" y="80" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#ffffff">ROLEX</text>
      <text x="150" y="92" text-anchor="middle" font-family="Arial, sans-serif" font-size="6" fill="#ffffff">OYSTER PERPETUAL DATE</text>
      <text x="150" y="195" text-anchor="middle" font-family="Arial, sans-serif" font-size="8" font-weight="bold" fill="#ffffff">SUBMARINER</text>
      <text x="150" y="207" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#ffffff">1000ft = 300m</text>
      <text x="150" y="217" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#ffffff">SUPERLATIVE CHRONOMETER</text>
      <text x="150" y="227" text-anchor="middle" font-family="Arial, sans-serif" font-size="7" fill="#ffffff">OFFICIALLY CERTIFIED</text>
      <text x="150" y="260" text-anchor="middle" font-family="Arial, sans-serif" font-size="5" fill="#888888">SWISS MADE</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Mercedes) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <line x1="150" y1="150" x2="150" y2="85" stroke="#c0c0c0" stroke-width="4"/>
        <circle cx="150" cy="95" r="9" fill="${colors.hourHand}" stroke="#c0c0c0" stroke-width="1.5"/>
        <line x1="150" y1="95" x2="150" y2="86" stroke="#c0c0c0" stroke-width="1.5"/>
        <line x1="150" y1="95" x2="142" y2="100" stroke="#c0c0c0" stroke-width="1.5"/>
        <line x1="150" y1="95" x2="158" y2="100" stroke="#c0c0c0" stroke-width="1.5"/>
        <polygon points="150,70 148,86 152,86" fill="${colors.hourHand}" stroke="#c0c0c0" stroke-width="1"/>
      </g>
      
      <!-- Minute Hand (Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <line x1="150" y1="150" x2="150" y2="35" stroke="#c0c0c0" stroke-width="3"/>
        <polygon points="150,30 147,45 150,150 153,45" fill="${colors.minuteHand}" stroke="#c0c0c0" stroke-width="1"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand (Lollipop) -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="170" x2="150" y2="30" stroke="#c0c0c0" stroke-width="1"/>
        <circle cx="150" cy="50" r="4" fill="${colors.secondHand}" stroke="#c0c0c0" stroke-width="1"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="4" fill="${colors.centerCap}" />
    `;
  }
};
