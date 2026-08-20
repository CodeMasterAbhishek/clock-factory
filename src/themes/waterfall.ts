import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const waterfallTheme: ClockThemeRenderer = {
  name: 'waterfall',
  description: 'Lush tropical jungle canyon with cascading turquoise multi-tier waterfall and monstera leaves',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      ticks += `<circle cx="150" cy="16" r="3.5" fill="#67e8f9" stroke="#047857" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`;
    }
    return `
      <defs>
        <filter id="blur_filter" x="-20%" y="-20%" width="140%" height="140%"><feGaussianBlur stdDeviation="3"/></filter>
        <clipPath id="waterfall_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <linearGradient id="wf_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#022c22"/>
          <stop offset="60%" stop-color="#064e3b"/>
          <stop offset="100%" stop-color="#047857"/>
        </linearGradient>
        <linearGradient id="wf_water" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="50%" stop-color="#67e8f9"/>
          <stop offset="100%" stop-color="#cffafe"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <circle cx="150" cy="150" r="145" fill="url(#wf_sky)" stroke="#059669" stroke-width="2.5"/>

      <g clip-path="url(#waterfall_dial_clip)">
        <!-- Mossy Basalt Rock Gorge Walls (Left & Right) -->
        <path d="M 0 50 L 110 50 L 115 150 L 80 180 L 105 240 L 0 260 Z" fill="#1c1917"/>
        <path d="M 0 70 L 100 70 L 105 140 L 0 170 Z" fill="#15803d" opacity="0.6"/>

        <path d="M 300 50 L 190 50 L 185 150 L 220 180 L 195 240 L 300 260 Z" fill="#1c1917"/>
        <path d="M 300 70 L 200 70 L 195 140 L 300 170 Z" fill="#15803d" opacity="0.6"/>

        <!-- Cascading Multi-Tier Waterfall -->
        <!-- Upper Cascade -->
        <polygon points="120,40 180,40 175,130 125,130" fill="url(#wf_water)"/>
        <!-- Mid Cascade Pool -->
        <ellipse cx="150" cy="130" rx="35" ry="10" fill="#0891b2"/>
        <ellipse cx="150" cy="128" rx="25" ry="6" fill="#a5f3fc" opacity="0.8"/>
        <!-- Lower Main Plunge -->
        <polygon points="115,130 185,130 195,225 105,225" fill="url(#wf_water)"/>

        <!-- Water Stream White Highlight Streaks -->
        <g stroke="#ffffff" stroke-width="2" opacity="0.85">
          <line x1="130" y1="50" x2="120" y2="220"/>
          <line x1="145" y1="45" x2="142" y2="225" stroke-width="3"/>
          <line x1="155" y1="45" x2="158" y2="225" stroke-width="3"/>
          <line x1="170" y1="50" x2="180" y2="220"/>
        </g>

        <!-- Deep Plunge Pool Lagoon -->
        <path d="M 0 215 C 80 195 220 195 300 215 L 300 300 L 0 300 Z" fill="#0e7490"/>
        <ellipse cx="150" cy="225" rx="75" ry="24" fill="#0891b2"/>
        <!-- Misty Foam Spray -->
        <ellipse cx="150" cy="220" rx="55" ry="14" fill="#e0f2fe" opacity="0.85" filter="url(#blur_filter)"/>
        <path d="M 70 250 Q 150 238 230 250" stroke="#a5f3fc" stroke-width="2.5" fill="none" opacity="0.7"/>

        <!-- Foreground River Boulders -->
        <ellipse cx="75" cy="265" rx="35" ry="20" fill="#292524" stroke="#1c1917" stroke-width="2"/>
        <ellipse cx="235" cy="270" rx="40" ry="22" fill="#292524" stroke="#1c1917" stroke-width="2"/>
        <ellipse cx="160" cy="285" rx="28" ry="15" fill="#44403c"/>

        <!-- Giant Tropical Monstera Leaves in Corners -->
        <g fill="#15803d" stroke="#052e16" stroke-width="1.2">
          <!-- Left Monstera -->
          <path d="M 10 90 C 20 60 60 60 70 90 C 70 120 30 120 10 90 Z"/>
          <circle cx="50" cy="80" r="4" fill="#1c1917"/>
          <circle cx="38" cy="95" r="4" fill="#1c1917"/>
          <!-- Right Monstera -->
          <path d="M 290 85 C 280 55 240 55 230 85 C 230 115 270 115 290 85 Z"/>
          <circle cx="250" cy="75" r="4" fill="#1c1917"/>
          <circle cx="262" cy="90" r="4" fill="#1c1917"/>
        </g>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#34d399" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#ffffff" stroke="#064e3b" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#67e8f9" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#facc15" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#facc15" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#064e3b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#34d399"/>
      </g>
    `;
  }
};
