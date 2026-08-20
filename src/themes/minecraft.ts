import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const minecraftTheme: ClockThemeRenderer = {
  name: 'minecraft',
  description: 'Minecraft authentic 8-bit block watch with Grass & Dirt block bezel, Diamond Ore specks, Creeper face hub, and pixelated Diamond Sword & Pickaxe hands',
  defaultColors: {
    face: '#372418',
    dialBorder: '#5b8731',
    hourTicks: '#55ffff',
    minuteTicks: '#84cc16',
    numbers: '#55ffff',
    hourHand: '#55ffff',
    minuteHand: '#55ffff',
    secondHand: '#ef4444',
    accent: '#55ffff',
    centerCap: '#55ffff',
    subdialBg: '#21150e'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 8-bit Pixel Grass Fringe around outer ring (24 pixel blocks)
    let grassFringe = '';
    for (let i = 0; i < 24; i++) {
      const angle = i * 15;
      grassFringe += `<rect x="146" y="10" width="8" height="12" fill="#5b8731" stroke="#3b581f" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
    }

    // Diamond Ore Pixel Specks scattered across the dial face
    const diamondOres = `
      <g opacity="0.95">
        <rect x="90" y="70" width="6" height="6" fill="#55ffff" filter="url(#drop-shadow)"/>
        <rect x="96" y="76" width="6" height="6" fill="#55ffff"/>
        <rect x="200" y="80" width="6" height="6" fill="#55ffff"/>
        <rect x="206" y="86" width="6" height="6" fill="#55ffff"/>
        <rect x="80" y="200" width="6" height="6" fill="#55ffff"/>
        <rect x="210" y="210" width="6" height="6" fill="#55ffff"/>
        <rect x="216" y="216" width="6" height="6" fill="#55ffff"/>
      </g>
    `;

    // Redstone Dust Circuit Track Around Inner Ring
    let redstoneDust = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30 + 15;
      redstoneDust += `<circle cx="150" cy="45" r="2.5" fill="#ef4444" filter="url(#lume-glow)" transform="rotate(${angle} 150 150)"/>`;
    }

    // Creeper Face Center Hub Subdial (3D Pixelated Box)
    const creeperHub = `
      <g transform="translate(150, 150)" filter="url(#drop-shadow)">
        <!-- Green Subdial Base -->
        <rect x="-32" y="-32" width="64" height="64" fill="#5b8731" stroke="#2c4217" stroke-width="3" rx="4"/>
        <rect x="-28" y="-28" width="56" height="56" fill="#4d7328"/>
        
        <!-- Pixel Creeper Eyes -->
        <rect x="-20" y="-20" width="14" height="14" fill="#121820"/>
        <rect x="6" y="-20" width="14" height="14" fill="#121820"/>
        
        <!-- Nose & Mouth -->
        <rect x="-7" y="-6" width="14" height="22" fill="#121820"/>
        <rect x="-14" y="4" width="7" height="16" fill="#121820"/>
        <rect x="7" y="4" width="7" height="16" fill="#121820"/>
      </g>
    `;

    // 12 Pixel Block Hour Markers
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      const isFive = i % 5 === 0;
      if (isFive) {
        ticks += `<rect x="145" y="20" width="10" height="14" fill="#55ffff" stroke="#121820" stroke-width="1.5" rx="1" transform="rotate(${angle} 150 150)"/>`;
      } else if (options.showTicks !== false) {
        ticks += `<rect x="148" y="20" width="4" height="8" fill="#84cc16" stroke="#121820" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    const labelText = options.label || 'MINECRAFT · 8-BIT WORLD';

    return `
      
      <!-- Grass Block Bezel (Green Top + Dark Brown Dirt Body) -->
      <circle cx="150" cy="150" r="147" fill="#5b8731" stroke="#2c4217" stroke-width="5"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}" stroke="#5b8731" stroke-width="3"/>

      <!-- Grass Fringe Pixel Layer -->
      <g class="grass-fringe">${grassFringe}</g>

      <!-- Diamond Ore Specks -->
      ${diamondOres}

      <!-- Redstone Circuit Trace -->
      <g class="redstone-trace">${redstoneDust}</g>

      <!-- Creeper Face Center -->
      ${creeperHub}

      <!-- Main Dial Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- High-Visibility Minecraft Logo & Subtext -->
      <text x="150" y="78" text-anchor="middle" font-family="'Courier New', monospace" font-size="13" font-weight="900" fill="#55ffff" stroke="#121820" stroke-width="1" letter-spacing="3">MINECRAFT</text>
      <text x="150" y="226" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#84cc16" stroke="#121820" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Pixelated Diamond Sword) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <polygon points="143,68 157,68 153,154 147,154" fill="#55ffff" stroke="#121820" stroke-width="2" filter="url(#drop-shadow)"/>
        <line x1="150" y1="74" x2="150" y2="145" stroke="#0284c7" stroke-width="2.5"/>
        <!-- Sword Guard pixels -->
        <rect x="140" y="132" width="20" height="5" fill="#55ffff" stroke="#121820" stroke-width="1"/>
      </g>
      
      <!-- Minute Hand (Pixelated Diamond Pickaxe) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <polygon points="144,36 156,36 153,155 147,155" fill="#55ffff" stroke="#121820" stroke-width="2" filter="url(#drop-shadow)"/>
        <line x1="150" y1="42" x2="150" y2="145" stroke="#0284c7" stroke-width="2.5"/>
        <!-- Pickaxe Head pixels at top -->
        <polygon points="134,42 166,42 160,48 140,48" fill="#55ffff" stroke="#121820" stroke-width="1"/>
      </g>
      
      ${showSeconds ? `
      <!-- Redstone Torch Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="#ef4444" stroke-width="2.8" filter="url(#lume-glow)"/>
        <rect x="145" y="46" width="10" height="10" fill="#ef4444" stroke="#ffffff" stroke-width="1.2"/>
      </g>
      ` : ''}
      
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="7.5" fill="#5b8731" stroke="#55ffff" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="3.5" fill="#55ffff"/>
    
    `;
  }
};
