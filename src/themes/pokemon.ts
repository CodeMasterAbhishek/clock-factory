import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const pokemonTheme: ClockThemeRenderer = {
  name: 'pokemon',
  description: 'Pokémon Pokéball watch with red & white split dial, central release button hub, and Pikachu lightning bolt second hand',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#222222',
    hourTicks: '#ffffff',
    minuteTicks: '#ffde00',
    numbers: '#ffffff',
    hourHand: '#222222',
    minuteHand: '#222222',
    secondHand: '#ffde00',
    accent: '#ffde00',
    centerCap: '#ffffff',
    subdialBg: '#222222'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Pokéball Top Red Half & Bottom White Half
    const pokeBallBackground = `
      <path d="M 10,150 A 140,140 0 0,1 290,150 Z" fill="#ee1515"/>
      <path d="M 290,150 A 140,140 0 0,1 10,150 Z" fill="#ffffff"/>
      <!-- Middle Horizontal Black Band -->
      <rect x="10" y="141" width="280" height="18" fill="#222222"/>
      <!-- Outer Pokéball Release Button Ring -->
      <circle cx="150" cy="150" r="32" fill="#222222"/>
      <circle cx="150" cy="150" r="22" fill="#ffffff" stroke="#222222" stroke-width="3"/>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      const tickColor = angle < 90 || angle > 270 ? '#ffffff' : '#222222';
      if (isFive) {
        ticks += `<circle cx="150" cy="24" r="3" fill="#ffde00" stroke="#222222" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="${tickColor}" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'POKÉMON · GOTTA CATCH \'EM ALL!';

    return `
      
      <!-- Pokéball Split Dial Face -->
      <circle cx="150" cy="150" r="147" fill="#222222" stroke="#ffde00" stroke-width="4.5"/>
      
      <!-- Pokéball Split graphics -->
      ${pokeBallBackground}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="900" fill="#ffffff" stroke="#222222" stroke-width="0.8" letter-spacing="3">POKÉMON</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#222222" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Charcoal Black Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#222222" stroke="#ffffff" stroke-width="1.2" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Charcoal Black Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#222222" stroke="#ffffff" stroke-width="1.2" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Pikachu Yellow Lightning Bolt Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <polygon points="150,18 154,50 148,50 152,80 147,80 153,180 147,180" fill="#ffde00" stroke="#222222" stroke-width="0.8"/>
      </g>
      ` : ''}
      
      <!-- Center Button Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#ffffff" stroke="#222222" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#222222"/>
    
    `;
  }
};
