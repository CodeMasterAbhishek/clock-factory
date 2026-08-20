import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const surfing_pipelineTheme: ClockThemeRenderer = {
  name: 'surfing_pipeline',
  description: 'Giant ocean barrel wave with translucent turquoise curling lip, foamy white water spray, and surfer carving the pocket',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<circle cx="150" cy="16" r="3" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="surf_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="surf_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="40%" stop-color="#38bdf8"/>
          <stop offset="75%" stop-color="#bae6fd"/>
          <stop offset="100%" stop-color="#fef08a"/>
        </linearGradient>
        <linearGradient id="barrel_deep" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#0891b2"/>
          <stop offset="50%" stop-color="#0284c7"/>
          <stop offset="100%" stop-color="#0c4a6e"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#surf_sky)" stroke="#0284c7" stroke-width="2.5"/>

      <g clip-path="url(#surf_dial_clip)">
        <!-- Tropical Sun in Sky -->
        <circle cx="225" cy="75" r="28" fill="#fef08a" opacity="0.85"/>
        <circle cx="225" cy="75" r="36" fill="#fde047" opacity="0.2"/>

        <!-- Ocean Horizon & Distant Swell -->
        <path d="M 0 170 Q 150 160 300 170 L 300 300 L 0 300 Z" fill="#0369a1"/>

        <!-- Giant Banzai Pipeline Curling Barrel Wave (Curling from Left over Center) -->
        <!-- Wave Base & Deep Hollow Core -->
        <path d="M 0 300 C 60 300 110 240 140 180 C 170 120 185 70 140 50 C 95 35 60 80 40 140 C 20 200 0 240 0 300 Z" fill="url(#barrel_deep)"/>
        
        <!-- Translucent Turquoise Barrel Wall Lip -->
        <path d="M 30 150 C 60 80 110 35 160 52 C 205 68 220 125 185 185 C 150 240 70 280 0 290 L 0 300 L 300 300 L 300 220 C 250 170 230 110 160 52 C 100 30 40 90 20 160 Z" fill="#06b6d4" opacity="0.9"/>
        <path d="M 160 52 C 210 68 220 130 180 190 C 130 255 40 285 0 295 L 0 300 L 300 300 L 300 240 Z" fill="#0284c7"/>

        <!-- Inside Tube Wave Shading & Water Vortex Lines -->
        <path d="M 50 130 Q 110 70 155 75" stroke="#a5f3fc" stroke-width="2.5" fill="none" opacity="0.75" stroke-linecap="round"/>
        <path d="M 65 170 Q 130 115 170 120" stroke="#a5f3fc" stroke-width="2" fill="none" opacity="0.6" stroke-linecap="round"/>
        <path d="M 85 210 Q 150 160 185 165" stroke="#7dd3fc" stroke-width="1.8" fill="none" opacity="0.5" stroke-linecap="round"/>

        <!-- Foaming White Wave Lip & Explosive Spray -->
        <path d="M 120 52 Q 165 40 195 72 Q 215 105 190 140 Q 175 160 150 175" stroke="#ffffff" stroke-width="6" fill="none" opacity="0.95" stroke-linecap="round"/>
        <!-- Foamy Spray Beads & Droplets -->
        <g fill="#ffffff">
          <circle cx="130" cy="46" r="4.5"/><circle cx="155" cy="38" r="5"/><circle cx="178" cy="45" r="4"/><circle cx="196" cy="62" r="5.5"/>
          <circle cx="212" cy="85" r="4.5"/><circle cx="215" cy="105" r="4"/><circle cx="205" cy="125" r="3.5"/><circle cx="190" cy="148" r="4"/>
          <!-- Fine Airborne Spray Droplets -->
          <circle cx="140" cy="32" r="2"/><circle cx="168" cy="28" r="2.5"/><circle cx="190" cy="36" r="2"/><circle cx="225" cy="70" r="2"/><circle cx="228" cy="95" r="1.8"/>
        </g>

        <!-- Surfer Deep in the Barrel Pocket -->
        <g transform="translate(108, 175) rotate(-22)" fill="#0f172a">
          <!-- Surfboard with Neon Stringer -->
          <path d="M -24 0 Q 0 -5 24 0 Q 0 5 -24 0 Z" fill="#facc15" stroke="#ea580c" stroke-width="0.8"/>
          <!-- Surfer Figure in Low Tube Stance -->
          <ellipse cx="-2" cy="-8" rx="5" ry="8" transform="rotate(15 -2 -8)"/>
          <circle cx="2" cy="-18" r="4" fill="#0f172a"/>
          <!-- Trailing Hand Touching Wave Wall -->
          <line x1="-6" y1="-10" x2="-14" y2="-4" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
          <line x1="2" y1="-10" x2="10" y2="-6" stroke="#0f172a" stroke-width="2" stroke-linecap="round"/>
          <!-- Board Wake Water Spray -->
          <path d="M -24 0 Q -32 -6 -36 -12 Q -28 -4 -20 -2 Z" fill="#ffffff" opacity="0.9"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Marine Luminous Hour Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0c4a6e" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <!-- Marine Luminous Minute Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0284c7" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#facc15" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- High-Visibility Surfboard Red Second Hand -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ef4444" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ef4444" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ef4444"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0c4a6e" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
