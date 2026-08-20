import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const godOfWarTheme: ClockThemeRenderer = {
  name: 'god-of-war',
  description: 'God of War Ragnarök watch with dark Nordic stone dial, glowing Leviathan cyan runes, and Greek Omega crest',
  defaultColors: {
    face: '#121820',
    dialBorder: '#00e5ff',
    hourTicks: '#00e5ff',
    minuteTicks: '#94a3b8',
    numbers: '#00e5ff',
    hourHand: '#00e5ff',
    minuteHand: '#00e5ff',
    secondHand: '#ef4444',
    accent: '#00e5ff',
    centerCap: '#00e5ff',
    subdialBg: '#1e293b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Omega & Leviathan Axe Emblem
    const omegaCrest = `
      <g transform="translate(150, 150) scale(1.15)" filter="url(#drop-shadow)">
        <!-- Greek Omega Logo -->
        <path d="M -25,20 L -12,20 C -12,20 -20,-15 0,-22 C 20,-15 12,20 12,20 L 25,20 L 25,26 L 10,26 C 2,26 2,12 0,12 C -2,12 -2,26 -10,26 L -25,26 Z" fill="#00e5ff" stroke="#121820" stroke-width="1"/>
      </g>
    `;

    // Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="147.5" y="20" width="5" height="14" rx="1.5" fill="#00e5ff" stroke="#121820" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<line x1="150" y1="20" x2="150" y2="25" stroke="#94a3b8" stroke-width="1.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'GOD OF WAR · RAGNARÖK';

    return `
      
      <!-- Dark Nordic Slate Face & Frost Cyan Rim -->
      <circle cx="150" cy="150" r="147" fill="#121820" stroke="#00e5ff" stroke-width="4.5"/>
      <circle cx="150" cy="150" r="140" fill="${colors.face}" stroke="#ef4444" stroke-width="1.2"/>

      <!-- Glowing Elder Futhark Rune Circle -->
      <circle cx="150" cy="150" r="130" fill="none" stroke="#00e5ff" stroke-width="1.2" stroke-dasharray="4 8" opacity="0.8"/>

      <!-- Omega Crest Emblem -->
      ${omegaCrest}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Inscriptions -->
      <text x="150" y="80" text-anchor="middle" font-family="'Times New Roman', serif" font-size="12" font-weight="bold" fill="#00e5ff" letter-spacing="3">GOD OF WAR</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ef4444" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Frost Cyan Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="144,70 156,70 152,154 148,154" fill="#00e5ff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="76" x2="150" y2="145" stroke="#121820" stroke-width="2"/>
      </g>
      
      <!-- Minute Hand (Frost Cyan Sword) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="145,38 155,38 152,155 148,155" fill="#00e5ff" filter="url(#drop-shadow)"/>
        <line x1="150" y1="44" x2="150" y2="145" stroke="#121820" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- Spartan Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ef4444" stroke-width="2.2"/>
        <circle cx="150" cy="55" r="5" fill="#00e5ff" stroke="#121820" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#121820" stroke="#00e5ff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#00e5ff"/>
    
    `;
  }
};
