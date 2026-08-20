import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const owlTheme: ClockThemeRenderer = {
  name: 'owl',
  description: 'Mystical barn owl perched on a mossy oak branch beneath a luminous golden full moon',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      ticks += `<circle cx="150" cy="18" r="3.5" fill="#fde047" stroke="#000000" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="owl_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="night_forest" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="50%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#1e1b4b"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <circle cx="150" cy="150" r="145" fill="url(#night_forest)" stroke="#eab308" stroke-width="2.5"/>

      <g clip-path="url(#owl_dial_clip)">
        <!-- Luminous Golden Full Moon (Top Right) -->
        <circle cx="215" cy="80" r="35" fill="#fef08a" opacity="0.85"/>
        <circle cx="215" cy="80" r="42" fill="#fef9c3" opacity="0.15"/>

        <!-- Night Sky Stars -->
        <g fill="#ffffff" opacity="0.8">
          <circle cx="45" cy="45" r="1.2"/>
          <circle cx="85" cy="35" r="1.5"/>
          <circle cx="130" cy="50" r="1"/>
          <circle cx="60" cy="90" r="1"/>
          <circle cx="100" cy="115" r="1.2"/>
        </g>

        <!-- Twisted Oak Branch (Bottom Crossbar) -->
        <path d="M 20 235 Q 150 215 280 230" stroke="#78350f" stroke-width="8" fill="none" stroke-linecap="round"/>
        <path d="M 60 230 Q 90 220 110 232" stroke="#92400e" stroke-width="4" fill="none" stroke-linecap="round"/>
        <!-- Oak Leaves & Acorns on Branch -->
        <circle cx="65" cy="225" r="5" fill="#15803d"/>
        <circle cx="75" cy="228" r="4.5" fill="#16a34a"/>
        <circle cx="235" cy="222" r="5" fill="#15803d"/>

        <!-- Wise Barn Owl Character (Perched on Branch) -->
        <g transform="translate(150, 185)">
          <!-- Ear Tufts / Feathers -->
          <polygon points="-24,-52 -12,-38 -32,-35" fill="#78350f"/>
          <polygon points="24,-52 12,-38 32,-35" fill="#78350f"/>
          <!-- Owl Body -->
          <ellipse cx="0" cy="5" rx="34" ry="40" fill="#92400e"/>
          <!-- Feathered Speckled Belly -->
          <ellipse cx="0" cy="10" rx="22" ry="28" fill="#fef3c7"/>
          <path d="M -10 0 Q 0 4 10 0 M -8 10 Q 0 14 8 10 M -6 20 Q 0 24 6 20" stroke="#b45309" stroke-width="1.5" fill="none"/>
          <!-- Owl Head -->
          <circle cx="0" cy="-25" r="28" fill="#a16207"/>
          <!-- Heart-shaped Facial Disc -->
          <path d="M 0 -12 C -18 -12 -22 -38 0 -38 C 22 -38 18 -12 0 -12 Z" fill="#fffbeb"/>
          <!-- Big Glowing Owl Eyes -->
          <circle cx="-10" cy="-26" r="8.5" fill="#fde047" stroke="#78350f" stroke-width="1.5"/>
          <circle cx="-10" cy="-26" r="4.5" fill="#18181b"/>
          <circle cx="-12" cy="-28" r="1.5" fill="#ffffff"/>
          <circle cx="10" cy="-26" r="8.5" fill="#fde047" stroke="#78350f" stroke-width="1.5"/>
          <circle cx="10" cy="-26" r="4.5" fill="#18181b"/>
          <circle cx="8" cy="-28" r="1.5" fill="#ffffff"/>
          <!-- Amber Beak -->
          <polygon points="-3,-18 3,-18 0,-10" fill="#f59e0b"/>
          <!-- Talons gripping branch -->
          <circle cx="-12" cy="42" r="3.5" fill="#f59e0b"/>
          <circle cx="-6" cy="42" r="3.5" fill="#f59e0b"/>
          <circle cx="6" cy="42" r="3.5" fill="#f59e0b"/>
          <circle cx="12" cy="42" r="3.5" fill="#f59e0b"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Golden Amber Feather Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#78350f"/>
          <circle cx="150" cy="75" r="3.5" fill="#fde047"/>
        </g>
        <!-- Golden Amber Feather Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,38" fill="#a16207"/>
          <circle cx="150" cy="38" r="3" fill="#fef08a"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="20" stroke="#facc15" stroke-width="1.8"/>
          <circle cx="150" cy="20" r="3.5" fill="#facc15" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#78350f" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#fde047"/>
      </g>
    `;
  }
};
