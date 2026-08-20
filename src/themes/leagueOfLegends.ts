import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const leagueOfLegendsTheme: ClockThemeRenderer = {
  name: 'league-of-legends',
  description: 'League of Legends Hextech watch with magical cyan energy, gold summoner framing, and Nexus crystal subdial',
  defaultColors: {
    face: '#091428',
    dialBorder: '#c8aa6e',
    hourTicks: '#c8aa6e',
    minuteTicks: '#0bc6e3',
    numbers: '#c8aa6e',
    hourHand: '#c8aa6e',
    minuteHand: '#c8aa6e',
    secondHand: '#0bc6e3',
    accent: '#0bc6e3',
    centerCap: '#c8aa6e',
    subdialBg: '#0a192f'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Hextech Nexus Crystal Emblem at Center
    const nexusCrystal = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <polygon points="0,-28 16,-10 16,10 0,28 -16,10 -16,-10" fill="#0bc6e3" stroke="#c8aa6e" stroke-width="1.5"/>
        <polygon points="0,-16 8,-4 8,4 0,16 -8,4 -8,-4" fill="#f0e6d2"/>
        <!-- Outer Hextech Ring -->
        <circle cx="0" cy="0" r="42" fill="none" stroke="#c8aa6e" stroke-width="1.2" stroke-dasharray="6 6"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<polygon points="150,18 154,28 146,28" fill="#c8aa6e" stroke="#091428" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#0bc6e3" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'LEAGUE OF LEGENDS · HEXTECH';

    return `
      
      <!-- Deep Summoner Navy Face & Hextech Gold Rim -->
      <circle cx="150" cy="150" r="147" fill="#091428" stroke="#c8aa6e" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#0bc6e3" stroke-width="1.2"/>

      <!-- Nexus Crystal Emblem -->
      ${nexusCrystal}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#c8aa6e" letter-spacing="3">LEAGUE OF LEGENDS</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#0bc6e3" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Hextech Gold Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#c8aa6e" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#0bc6e3" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Hextech Gold Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#c8aa6e" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#0bc6e3" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Cyan Hextech Magic Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#0bc6e3" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#c8aa6e" stroke="#091428" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#091428" stroke="#c8aa6e" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#c8aa6e"/>
    
    `;
  }
};
