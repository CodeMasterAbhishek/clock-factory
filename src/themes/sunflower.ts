import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const sunflowerTheme: ClockThemeRenderer = {
  name: 'sunflower',
  description: 'Radiant blooming golden sunflower with layered sunlit petals and organic spiral seed disc',
  defaultColors: {
    face: '#fffbeb',
    dialBorder: '#ca8a04',
    hourTicks: '#ca8a04',
    minuteTicks: '#f59e0b',
    numbers: '#78350f',
    hourHand: '#78350f',
    minuteHand: '#b45309',
    secondHand: '#eab308',
    accent: '#f59e0b',
    centerCap: '#78350f'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<circle cx="150" cy="16" r="3" fill="#ca8a04" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="sunflower_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="sunflower_sky" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fffbeb"/>
          <stop offset="70%" stop-color="#fef3c7"/>
          <stop offset="100%" stop-color="#fde68a"/>
        </radialGradient>
        <radialGradient id="seed_core_grad" cx="45%" cy="45%" r="55%">
          <stop offset="0%" stop-color="#78350f"/>
          <stop offset="35%" stop-color="#451a03"/>
          <stop offset="80%" stop-color="#292524"/>
          <stop offset="100%" stop-color="#1c1917"/>
        </radialGradient>
        <linearGradient id="petal_gold" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="40%" stop-color="#facc15"/>
          <stop offset="85%" stop-color="#eab308"/>
          <stop offset="100%" stop-color="#ca8a04"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#sunflower_sky)" stroke="#ca8a04" stroke-width="2.5"/>

      <g clip-path="url(#sunflower_dial_clip)">
        <!-- Blooming Radiant Golden Sunflower (Full Center Burst - No Leaves) -->
        <!-- Layer 1: Backing Petal Ring (Darker Amber, 24 Petals) -->
        <g fill="#d97706" stroke="#b45309" stroke-width="0.8">
          ${Array.from({length: 24}).map((_, i) => {
            const angle = (i * 360) / 24 + 7.5;
            return `<path d="M 150 24 C 141 60 143 95 150 115 C 157 95 159 60 150 24 Z" transform="rotate(${angle} 150 150)"/>`;
          }).join('')}
        </g>

        <!-- Layer 2: Middle Golden Amber Petal Ring (24 Petals) -->
        <g fill="#f59e0b" stroke="#ca8a04" stroke-width="0.8">
          ${Array.from({length: 24}).map((_, i) => {
            const angle = (i * 360) / 24 + 3.75;
            return `<path d="M 150 28 C 141 64 143 95 150 115 C 157 95 159 64 150 28 Z" transform="rotate(${angle} 150 150)"/>`;
          }).join('')}
        </g>

        <!-- Layer 3: Foreground Radiant Golden Petal Ring (24 Petals) -->
        <g fill="url(#petal_gold)" stroke="#ca8a04" stroke-width="0.8">
          ${Array.from({length: 24}).map((_, i) => {
            const angle = (i * 360) / 24;
            return `<path d="M 150 32 C 142 66 144 95 150 115 C 156 95 158 66 150 32 Z" transform="rotate(${angle} 150 150)"/>`;
          }).join('')}
        </g>

        <!-- Central Seed Disc (Fibonacci Texture Core) -->
        <circle cx="150" cy="150" r="50" fill="url(#seed_core_grad)" stroke="#ca8a04" stroke-width="1.5"/>
        
        <!-- Spiral Floret Seed Pattern Texture -->
        <g fill="#f59e0b" opacity="0.65">
          ${Array.from({length: 42}).map((_, i) => {
            const angle = (i * 137.5) * (Math.PI / 180);
            const r = 5 + Math.sqrt(i) * 6.5;
            const x = 150 + r * Math.cos(angle);
            const y = 150 + r * Math.sin(angle);
            return `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="1.6"/>`;
          }).join('')}
        </g>
        <!-- Golden Outer Floret Ring -->
        <circle cx="150" cy="150" r="48" fill="none" stroke="#f59e0b" stroke-width="1.5" stroke-dasharray="2 3" opacity="0.8"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Hour Hand: Dark Amber Timber Blade -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#78350f" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="75" r="3.5" fill="#facc15"/>
        </g>
        <!-- Minute Hand: Golden Honey Blade -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#b45309" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="35" r="3" fill="#fef08a"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Second Hand: Radiant Gold Seed Needle -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#eab308" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3" fill="#fef08a" stroke="#78350f" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="3" fill="#eab308"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#facc15"/>
      </g>
    `;
  }
};

