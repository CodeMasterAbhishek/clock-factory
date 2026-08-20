import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const scuba_divingTheme: ClockThemeRenderer = {
  name: 'scuba_diving',
  description: 'Precision marine brass underwater diver depth gauge with continuous decompression safety zones and luminous tritium needle',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let hourTicks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        hourTicks += `<rect x="147" y="16" width="6" height="14" rx="2" fill="#38bdf8" stroke="#0f172a" stroke-width="1" transform="rotate(${angle} 150 150)"/>`;
      } else {
        hourTicks += `<circle cx="150" cy="23" r="3" fill="#22c55e" stroke="#0f172a" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    // Hex Bezel Bolts
    let bezelBolts = '';
    for (let i = 0; i < 6; i++) {
      const angle = i * 60;
      bezelBolts += `<polygon points="150,7 153.5,9 153.5,13 150,15 146.5,13 146.5,9" fill="#d97706" stroke="#451a03" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
    }

    return `
      <defs>
        <clipPath id="scuba_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="scuba_dial_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0f172a"/>
          <stop offset="70%" stop-color="#090d16"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.8"/>
        </filter>
      </defs>

      <!-- Marine Brass Heavy Gauge Case -->
      <circle cx="150" cy="150" r="147" fill="#1e293b" stroke="#d97706" stroke-width="4"/>
      <circle cx="150" cy="150" r="142" fill="url(#scuba_dial_grad)" stroke="#0284c7" stroke-width="1.5"/>

      <!-- Bezel Screws -->
      <g>${bezelBolts}</g>

      <g clip-path="url(#scuba_dial_clip)">
        <!-- Inner Gauge Track Rings -->
        <circle cx="150" cy="150" r="115" fill="none" stroke="#1e293b" stroke-width="1" stroke-dasharray="2 4"/>
        <circle cx="150" cy="150" r="82" fill="none" stroke="#0f172a" stroke-width="1.5"/>

        <!-- Continuous Decompression Safety Arc (R = 100, span 270°) -->
        <!-- Background Track Bed -->
        <path d="M 79.29 220.71 A 100 100 0 1 1 220.71 220.71" fill="none" stroke="#1e293b" stroke-width="9" stroke-linecap="round"/>
        
        <!-- Zone 1: Safe Zone (0 - 20m, Green) -->
        <path d="M 79.29 220.71 A 100 100 0 0 1 150 50" fill="none" stroke="#22c55e" stroke-width="8" stroke-linecap="round"/>
        
        <!-- Zone 2: Caution Zone (20 - 40m, Amber Orange) -->
        <path d="M 150 50 A 100 100 0 0 1 243.97 115.80" fill="none" stroke="#f59e0b" stroke-width="8"/>
        
        <!-- Zone 3: Deco Stop Danger Zone (40 - 60m, Crimson Red) -->
        <path d="M 243.97 115.80 A 100 100 0 0 1 220.71 220.71" fill="none" stroke="#ef4444" stroke-width="8" stroke-linecap="round"/>

        <!-- Depth Gauge Calibrations -->
        <text x="70" y="215" fill="#22c55e" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">0m</text>
        <text x="100" y="115" fill="#22c55e" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">10</text>
        <text x="150" y="68" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">20</text>
        <text x="205" y="105" fill="#f59e0b" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">30</text>
        <text x="228" y="155" fill="#ef4444" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">40</text>
        <text x="210" y="215" fill="#ef4444" font-size="8.5" font-weight="bold" font-family="monospace" text-anchor="middle">50m</text>

        <!-- Professional Depth Legend -->
        <text x="150" y="185" fill="#38bdf8" font-size="9" font-weight="800" font-family="monospace" text-anchor="middle" letter-spacing="1.5">DEPTH GAUGE</text>
        <text x="150" y="198" fill="#64748b" font-size="7" font-weight="700" font-family="monospace" text-anchor="middle" letter-spacing="1">MAX 60 METERS</text>
      </g>
    
      <g class="ticks">${hourTicks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Hour Hand (High-Visibility Marine Pointer) -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#0f172a" stroke-width="1.2"/>
          <polygon points="147.5,140 152.5,140 150,82" fill="#f59e0b"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <!-- Minute Hand (Luminous Diver Needle) -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,34" fill="#ffffff" stroke="#0f172a" stroke-width="1.2"/>
          <polygon points="148,140 152,140 150,42" fill="#22c55e"/>
          <circle cx="150" cy="34" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Second Hand (Orange Tritium Pip) -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="170" x2="150" y2="18" stroke="#38bdf8" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="4" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#38bdf8"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#0f172a" stroke="#d97706" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
