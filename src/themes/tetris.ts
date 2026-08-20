import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const tetrisTheme: ClockThemeRenderer = {
  name: 'tetris',
  description: 'Tetris retro puzzle watch with neon Tetrimino blocks (I, J, L, O, S, T, Z) forming the 12 hour markers',
  defaultColors: {
    face: '#0d0e15',
    dialBorder: '#00f0ff',
    hourTicks: '#00f0ff',
    minuteTicks: '#a855f7',
    numbers: '#00f0ff',
    hourHand: '#00f0ff',
    minuteHand: '#a855f7',
    secondHand: '#e11d48',
    accent: '#00f0ff',
    centerCap: '#00f0ff',
    subdialBg: '#181926'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Colorful Falling Tetriminos Artwork
    const tetrisBlocks = `
      <g filter="url(#drop-shadow)" opacity="0.9">
        <!-- Center Subdial Matrix Frame -->
        <rect x="110" y="110" width="80" height="80" fill="#181926" stroke="#00f0ff" stroke-width="1.5" rx="4"/>
        <line x1="110" y1="130" x2="190" y2="130" stroke="#2a2c3f" stroke-width="1"/>
        <line x1="110" y1="150" x2="190" y2="150" stroke="#2a2c3f" stroke-width="1"/>
        <line x1="110" y1="170" x2="190" y2="170" stroke="#2a2c3f" stroke-width="1"/>
        <line x1="130" y1="110" x2="130" y2="190" stroke="#2a2c3f" stroke-width="1"/>
        <line x1="150" y1="110" x2="150" y2="190" stroke="#2a2c3f" stroke-width="1"/>
        <line x1="170" y1="110" x2="170" y2="190" stroke="#2a2c3f" stroke-width="1"/>
      </g>
    `;

    // 12 Neon Block Hour Markers
    const blockColors = ['#00f0ff', '#3b82f6', '#f97316', '#eab308', '#22c55e', '#a855f7', '#ef4444'];
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        const bColor = blockColors[(i / 5) % blockColors.length];
        ticks += `<rect x="145" y="20" width="10" height="10" rx="1" fill="${bColor}" stroke="#0d0e15" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<rect x="148.5" y="20" width="3" height="5" fill="#a855f7" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'TETRIS · 1984 ALEXEY PAJITNOV';

    return `
      
      <!-- Tetris Matrix Black Face & Cyan Border -->
      <circle cx="150" cy="150" r="147" fill="#0d0e15" stroke="#00f0ff" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#a855f7" stroke-width="1.2"/>

      <!-- Matrix Grid & Blocks Artwork -->
      ${tetrisBlocks}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="78" text-anchor="middle" font-family="'Courier New', monospace" font-size="13" font-weight="900" fill="#00f0ff" letter-spacing="3">TETRIS</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#a855f7" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Cyan I-Block Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#00f0ff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#0d0e15" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Purple T-Block Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#a855f7" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#0d0e15" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Red Z-Block Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ef4444" stroke-width="2.5"/>
        <rect x="146" y="50" width="8" height="8" fill="#00f0ff" stroke="#0d0e15" stroke-width="1"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0d0e15" stroke="#00f0ff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#00f0ff"/>
    
    `;
  }
};
