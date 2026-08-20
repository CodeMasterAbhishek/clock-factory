import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const pacmanTheme: ClockThemeRenderer = {
  name: 'pacman',
  description: 'Pac-Man retro arcade watch with 8-bit Pac-Man chasing Blinky, Pinky, Inky, and Clyde ghosts around blue maze paths',
  defaultColors: {
    face: '#0b0b12',
    dialBorder: '#0022ff',
    hourTicks: '#ffff00',
    minuteTicks: '#ffffff',
    numbers: '#ffff00',
    hourHand: '#ffff00',
    minuteHand: '#ffff00',
    secondHand: '#ff0000',
    accent: '#ffff00',
    centerCap: '#ffff00',
    subdialBg: '#151522'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 8-bit Ghosts and Pac-Man around dial
    const pacmanArtwork = `
      <g filter="url(#drop-shadow)">
        <!-- Pac-Man at 9 o'clock -->
        <path d="M 50,150 L 68,136 A 18,18 0 1,1 68,164 Z" fill="#ffff00"/>
        
        <!-- Blinky (Red Ghost) at 12 o'clock -->
        <g transform="translate(150, 52) scale(0.95)">
          <path d="M -12,12 L -12,-4 Q -12,-14 0,-14 Q 12,-14 12,-4 L 12,12 L 6,6 L 0,12 L -6,6 Z" fill="#ff0000"/>
          <circle cx="-4" cy="-4" r="3" fill="#ffffff"/><circle cx="-4" cy="-4" r="1.5" fill="#0022ff"/>
          <circle cx="4" cy="-4" r="3" fill="#ffffff"/><circle cx="4" cy="-4" r="1.5" fill="#0022ff"/>
        </g>
        
        <!-- Pinky (Pink Ghost) at 3 o'clock -->
        <g transform="translate(248, 150) scale(0.95)">
          <path d="M -12,12 L -12,-4 Q -12,-14 0,-14 Q 12,-14 12,-4 L 12,12 L 6,6 L 0,12 L -6,6 Z" fill="#ffb8ff"/>
          <circle cx="-4" cy="-4" r="3" fill="#ffffff"/><circle cx="-4" cy="-4" r="1.5" fill="#0022ff"/>
          <circle cx="4" cy="-4" r="3" fill="#ffffff"/><circle cx="4" cy="-4" r="1.5" fill="#0022ff"/>
        </g>

        <!-- Inky (Cyan Ghost) at 6 o'clock -->
        <g transform="translate(150, 248) scale(0.95)">
          <path d="M -12,12 L -12,-4 Q -12,-14 0,-14 Q 12,-14 12,-4 L 12,12 L 6,6 L 0,12 L -6,6 Z" fill="#00ffff"/>
          <circle cx="-4" cy="-4" r="3" fill="#ffffff"/><circle cx="-4" cy="-4" r="1.5" fill="#0022ff"/>
          <circle cx="4" cy="-4" r="3" fill="#ffffff"/><circle cx="4" cy="-4" r="1.5" fill="#0022ff"/>
        </g>
      </g>
    `;

    // Yellow Pac-Dots for 60 Minute Ticks
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<circle cx="150" cy="20" r="3.5" fill="#ffff00" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<circle cx="150" cy="20" r="1.5" fill="#ffffff" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'PAC-MAN · 1980 NAMCO';

    return `
      
      <!-- Arcade Black Face & Blue Maze Rim -->
      <circle cx="150" cy="150" r="147" fill="#0b0b12" stroke="#0022ff" stroke-width="5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#0022ff" stroke-width="1.8" stroke-dasharray="8 6"/>

      <!-- Pac-Man & Ghosts Artwork -->
      ${pacmanArtwork}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="98" text-anchor="middle" font-family="'Courier New', monospace" font-size="13" font-weight="900" fill="#ffff00" letter-spacing="3">PAC-MAN</text>
      <text x="150" y="202" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#0022ff" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Pac Yellow Pointer) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#ffff00" stroke="#0b0b12" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      <!-- Minute Hand (Pac Yellow Pointer) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#ffff00" stroke="#0b0b12" stroke-width="1" filter="url(#drop-shadow)"/>
      </g>
      
      ${showSeconds ? `
      <!-- Red Blinky Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ff0000" stroke-width="2.5"/>
        <circle cx="150" cy="55" r="5" fill="#ffff00" stroke="#0b0b12" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#0b0b12" stroke="#0022ff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#ffff00"/>
    
    `;
  }
};
