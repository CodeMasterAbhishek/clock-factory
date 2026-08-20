import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const holoTheme: ClockThemeRenderer = {
  name: 'holo',
  description: 'Futuristic 3D perspective holographic wireframe grid with neon cyan scanner rings, chromatic glitch accents, and laser HUD reticles',
  defaultColors: {
    face: '#03191e',
    dialBorder: '#06b6d4',
    hourTicks: '#22d3ee',
    minuteTicks: '#0d9488',
    numbers: '#67e8f9',
    hourHand: '#f0abfc',
    minuteHand: '#22d3ee',
    secondHand: '#38bdf8',
    accent: '#06b6d4',
    centerCap: '#22d3ee'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      if (i % 5 === 0) {
        ticks += `<line x1="150" y1="12" x2="150" y2="22" stroke="#22d3ee" stroke-width="2.5" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<line x1="150" y1="14" x2="150" y2="19" stroke="#0d9488" stroke-width="1.2" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    
    return `
      <defs>
        <clipPath id="holo_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="holo_abyss" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#042f2e"/>
          <stop offset="60%" stop-color="#021f24"/>
          <stop offset="100%" stop-color="#010e11"/>
        </radialGradient>
        <filter id="holo_glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="0" stdDeviation="4" flood-color="#06b6d4" flood-opacity="0.8"/>
        </filter>
      </defs>

      <!-- Outer Bezel -->
      <circle cx="150" cy="150" r="145" fill="url(#holo_abyss)" stroke="#06b6d4" stroke-width="2.5"/>

      <g clip-path="url(#holo_dial_clip)">
        <!-- 3D Perspective Hologram Grid Floor (Lower Half) -->
        <g stroke="#0d9488" stroke-width="0.9" opacity="0.45">
          <!-- Horizon Line -->
          <line x1="10" y1="150" x2="290" y2="150" stroke="#22d3ee" stroke-width="1.2" opacity="0.6"/>
          <!-- Perspective Transverse Lines -->
          <line x1="20" y1="170" x2="280" y2="170"/>
          <line x1="30" y1="195" x2="270" y2="195"/>
          <line x1="45" y1="225" x2="255" y2="225"/>
          <line x1="65" y1="260" x2="235" y2="260"/>
          <!-- Perspective Longitudinal Lines converging to (150, 150) -->
          <line x1="150" y1="150" x2="40" y2="290"/>
          <line x1="150" y1="150" x2="80" y2="290"/>
          <line x1="150" y1="150" x2="120" y2="290"/>
          <line x1="150" y1="150" x2="150" y2="290"/>
          <line x1="150" y1="150" x2="180" y2="290"/>
          <line x1="150" y1="150" x2="220" y2="290"/>
          <line x1="150" y1="150" x2="260" y2="290"/>
        </g>

        <!-- Upper Cylindrical Projection Grid -->
        <g stroke="#0d9488" stroke-width="0.8" opacity="0.35">
          <line x1="20" y1="130" x2="280" y2="130"/>
          <line x1="30" y1="105" x2="270" y2="105"/>
          <line x1="45" y1="75" x2="255" y2="75"/>
          <line x1="65" y1="40" x2="235" y2="40"/>
          <line x1="150" y1="150" x2="40" y2="10"/>
          <line x1="150" y1="150" x2="80" y2="10"/>
          <line x1="150" y1="150" x2="120" y2="10"/>
          <line x1="150" y1="150" x2="150" y2="10"/>
          <line x1="150" y1="150" x2="180" y2="10"/>
          <line x1="150" y1="150" x2="220" y2="10"/>
          <line x1="150" y1="150" x2="260" y2="10"/>
        </g>

        <!-- Concentric HUD Scanner Target Rings -->
        <circle cx="150" cy="150" r="120" fill="none" stroke="#22d3ee" stroke-width="1" stroke-dasharray="8 6" opacity="0.5"/>
        <circle cx="150" cy="150" r="85" fill="none" stroke="#06b6d4" stroke-width="1.2" opacity="0.6"/>
        <circle cx="150" cy="150" r="50" fill="none" stroke="#f0abfc" stroke-width="1" stroke-dasharray="4 4" opacity="0.6"/>

        <!-- Hologram Glitch Coordinate Badges -->
        <g font-family="monospace" font-size="9" fill="#22d3ee" opacity="0.75">
          <text x="35" y="145">SYS.01</text>
          <text x="228" y="145">3D.GRID</text>
          <text x="132" y="45">N:00°</text>
          <text x="132" y="268">S:180°</text>
        </g>

        <!-- Glitch Wave Overlay -->
        <path d="M 40 148 L 70 148 L 75 142 L 95 142 L 100 148 L 130 148" fill="none" stroke="#f0abfc" stroke-width="1.5" opacity="0.7"/>
        <path d="M 170 148 L 200 148 L 205 154 L 225 154 L 230 148 L 260 148" fill="none" stroke="#67e8f9" stroke-width="1.5" opacity="0.7"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Hour Hand: Neon Magenta Holo Needle -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,68" fill="#f0abfc" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="68" r="3.5" fill="#f472b6"/>
        </g>
        <!-- Minute Hand: Cyan Laser Spear -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,30" fill="#22d3ee" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="30" r="3" fill="#67e8f9"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Second Hand: High-Tech Dotted Pulse Beam -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5 3"/>
          <circle cx="150" cy="18" r="3.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="3" fill="#38bdf8"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#06b6d4" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#f0abfc"/>
      </g>
    `;
  }
};

