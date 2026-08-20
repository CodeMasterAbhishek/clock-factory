import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const falloutTheme: ClockThemeRenderer = {
  name: 'fallout',
  description: 'Fallout Pip-Boy 3000 watch with Vault-Tec yellow & navy blue CRT screen, radiation hazard symbol, and Vault Boy silhouette',
  defaultColors: {
    face: '#004b87',
    dialBorder: '#ffc700',
    hourTicks: '#ffc700',
    minuteTicks: '#a3e635',
    numbers: '#ffc700',
    hourHand: '#ffc700',
    minuteHand: '#ffc700',
    secondHand: '#a3e635',
    accent: '#ffc700',
    centerCap: '#ffc700',
    subdialBg: '#003366'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Radiation Hazard Symbol at Center / 12 o'clock
    const radSymbol = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <circle cx="0" cy="0" r="30" fill="#003366" stroke="#ffc700" stroke-width="2"/>
        <!-- 3 Hazard Blades -->
        <path d="M 0,0 L -12,-20 A 24,24 0 0,1 12,-20 Z" fill="#ffc700"/>
        <path d="M 0,0 L 23,4 A 24,24 0 0,1 11,21 Z" fill="#ffc700"/>
        <path d="M 0,0 L -11,21 A 24,24 0 0,1 -23,4 Z" fill="#ffc700"/>
        <circle cx="0" cy="0" r="8" fill="#003366" stroke="#ffc700" stroke-width="2"/>
        <circle cx="0" cy="0" r="3" fill="#ffc700"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#ffc700" stroke="#004b87" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#a3e635" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'FALLOUT · VAULT-TEC PIP-BOY';

    return `
      
      <!-- Vault Blue Face & Vault Yellow Rim -->
      <circle cx="150" cy="150" r="147" fill="#004b87" stroke="#ffc700" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#a3e635" stroke-width="1.2"/>

      <!-- Radiation Symbol -->
      ${radSymbol}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Courier New', monospace" font-size="13" font-weight="900" fill="#ffc700" letter-spacing="3">VAULT-TEC</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#a3e635" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Vault Yellow Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffc700" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#004b87" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Vault Yellow Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffc700" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#004b87" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Pip-Boy Green Second Needle -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#a3e635" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffc700" stroke="#004b87" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Gold Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#004b87" stroke="#ffc700" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffc700"/>
    
    `;
  }
};
