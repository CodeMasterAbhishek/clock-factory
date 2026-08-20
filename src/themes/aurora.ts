import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const auroraTheme: ClockThemeRenderer = {
  name: 'aurora',
  description: 'Emerald, cyan, and violet Aurora Borealis dancing across a starry midnight polar sky over snowy mountain pines',
  defaultColors: {
    face: '#020617',
    dialBorder: '#10b981',
    hourTicks: '#34d399',
    minuteTicks: '#06b6d4',
    numbers: '#a7f3d0',
    hourHand: '#34d399',
    minuteHand: '#22d3ee',
    secondHand: '#f43f5e',
    accent: '#10b981',
    centerCap: '#34d399'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="18" r="3.5" fill="#34d399" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="18" r="2.2" fill="#22d3ee" stroke="#ffffff" stroke-width="0.5" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <filter id="aurora_blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4"/>
        </filter>
        <clipPath id="aurora_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
        <linearGradient id="aurora_sky_bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="60%" stop-color="#091428"/>
          <stop offset="100%" stop-color="#042f2e"/>
        </linearGradient>
        <linearGradient id="aurora_curtain_1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#10b981" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="#06b6d4" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.75"/>
        </linearGradient>
        <linearGradient id="aurora_curtain_2" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a855f7" stop-opacity="0.8"/>
          <stop offset="55%" stop-color="#34d399" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#059669" stop-opacity="0.2"/>
        </linearGradient>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#aurora_sky_bg)" stroke="#10b981" stroke-width="2.5"/>

      <g clip-path="url(#aurora_dial_clip)">
        <!-- Twinkling Polar Stars -->
        <g fill="#ffffff">
          <circle cx="45" cy="50" r="1.2" opacity="0.9"/>
          <circle cx="85" cy="35" r="1.5" opacity="0.95"/>
          <circle cx="120" cy="60" r="1" opacity="0.7"/>
          <circle cx="185" cy="38" r="1.6" opacity="0.95"/>
          <circle cx="225" cy="65" r="1.2" opacity="0.85"/>
          <circle cx="260" cy="45" r="1.5" opacity="0.9"/>
          <circle cx="70" cy="85" r="0.9" opacity="0.6"/>
          <circle cx="240" cy="95" r="1.1" opacity="0.75"/>
        </g>

        <!-- Glowing Aurora Borealis Curtains -->
        <path d="M 15 110 Q 80 30 150 75 T 285 50 L 285 110 Q 215 90 150 130 T 15 150 Z" fill="url(#aurora_curtain_1)" filter="url(#aurora_blur)" opacity="0.85"/>
        <path d="M 25 80 Q 95 125 165 75 T 285 100 L 285 135 Q 215 110 150 155 T 25 120 Z" fill="url(#aurora_curtain_2)" filter="url(#aurora_blur)" opacity="0.75"/>

        <!-- Distant Snowy Mountain Silhouette -->
        <polygon points="10,290 85,205 160,290" fill="#0f172a" opacity="0.95"/>
        <polygon points="85,205 70,225 85,220 100,225" fill="#e2e8f0" opacity="0.7"/>
        <polygon points="120,290 195,190 270,290" fill="#0b1329" opacity="0.95"/>
        <polygon points="195,190 180,212 195,206 210,212" fill="#e2e8f0" opacity="0.7"/>

        <!-- Foreground Pine Tree Silhouettes -->
        <g fill="#020617">
          <polygon points="30,290 48,220 66,290"/>
          <polygon points="65,290 85,210 105,290"/>
          <polygon points="195,290 215,215 235,290"/>
          <polygon points="230,290 250,225 270,290"/>
        </g>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <!-- Hour Hand: Luminous Emerald Blade -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <line x1="150" y1="150" x2="150" y2="80" stroke="#34d399" stroke-width="4" stroke-linecap="round"/>
          <circle cx="150" cy="80" r="3" fill="#ffffff"/>
        </g>
        <!-- Minute Hand: Cyan Neon Spear -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <line x1="150" y1="150" x2="150" y2="40" stroke="#22d3ee" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="40" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <!-- Second Hand: Crimson Flare Needle -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="22" stroke="#f43f5e" stroke-width="1.6"/>
          <circle cx="150" cy="22" r="3" fill="#f43f5e" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="3" fill="#f43f5e"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#34d399" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#020617"/>
      </g>
    `;
  }
};

