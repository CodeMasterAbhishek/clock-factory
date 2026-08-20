import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const mercury_planetTheme: ClockThemeRenderer = {
  name: 'mercury_planet',
  description: 'Cratered Mercury showing MESSENGER-quality heavily bombarded metallic silicate crust, Caloris Basin multiring impact structure, and lobate thrust fault scarps',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#e2e8f0" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#94a3b8" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="mercury_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="mercury_globe_clip"><circle cx="150" cy="150" r="118"/></clipPath>
        <radialGradient id="mercury_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#0a0a0f"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="mercury_crust" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#e2e8f0"/>
          <stop offset="35%" stop-color="#cbd5e1"/>
          <stop offset="70%" stop-color="#94a3b8"/>
          <stop offset="90%" stop-color="#64748b"/>
          <stop offset="100%" stop-color="#1e293b"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Starry Deep Space -->
      <circle cx="150" cy="150" r="145" fill="url(#mercury_cosmos)" stroke="#64748b" stroke-width="2.5"/>

      <g clip-path="url(#mercury_dial_clip)">
        <!-- Distant Deep Space Stars -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>

        <!-- Main Mercury Globe (R = 118 at Center 150, 150) -->
        <circle cx="150" cy="150" r="118" fill="url(#mercury_crust)"/>

        <!-- Mercury Impact Craters, Caloris Basin & Scarps (Clipped inside Globe) -->
        <g clip-path="url(#mercury_globe_clip)">
          <!-- 1. Giant Caloris Basin (1,550 km Multi-Ring Impact Structure: Upper Left) -->
          <g transform="translate(105, 105)">
            <!-- Outer Mountain Ring -->
            <ellipse cx="0" cy="0" rx="36" ry="28" fill="#64748b" stroke="#475569" stroke-width="1.5"/>
            <!-- Inner Basin Floor -->
            <ellipse cx="0" cy="0" rx="26" ry="20" fill="#475569" stroke="#334155" stroke-width="1"/>
            <!-- Pantheon Fossae Radial Troughs (Spider Fracture Pattern) -->
            <g stroke="#94a3b8" stroke-width="1" fill="none" opacity="0.75">
              <line x1="0" y1="0" x2="-20" y2="-12"/>
              <line x1="0" y1="0" x2="20" y2="-12"/>
              <line x1="0" y1="0" x2="-22" y2="10"/>
              <line x1="0" y1="0" x2="22" y2="10"/>
              <line x1="0" y1="0" x2="0" y2="-18"/>
              <line x1="0" y1="0" x2="0" y2="18"/>
            </g>
            <!-- Central Impact Crater Apollodorus -->
            <circle cx="0" cy="0" r="4.5" fill="#1e293b" stroke="#ffffff" stroke-width="0.8"/>
            <circle cx="0" cy="0" r="1.5" fill="#ffffff"/>
          </g>

          <!-- 2. Lobate Thrust Fault Scarps (Discovery Rupes - Wrinkles from Cooling Core) -->
          <g stroke="#334155" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.8">
            <path d="M 125 155 Q 148 185 135 225 Q 120 245 138 265"/>
            <path d="M 68 145 Q 85 175 75 210"/>
          </g>
          <g stroke="#ffffff" stroke-width="1" fill="none" stroke-linecap="round" opacity="0.6">
            <path d="M 124 154 Q 147 184 134 224 Q 119 244 137 264"/>
          </g>

          <!-- 3. Prominent Named Craters with Ray Systems (MESSENGER Discovered) -->
          <!-- Crater Kuiper (Prominent Rayed Crater at Center Equator) -->
          <g transform="translate(155, 148)">
            <!-- Radiant Ray Streaks -->
            <g stroke="#ffffff" stroke-width="1.2" opacity="0.75">
              <line x1="0" y1="0" x2="-45" y2="-25"/>
              <line x1="0" y1="0" x2="45" y2="-30"/>
              <line x1="0" y1="0" x2="-35" y2="35"/>
              <line x1="0" y1="0" x2="40" y2="40"/>
            </g>
            <circle cx="0" cy="0" r="11" fill="#ffffff" opacity="0.85"/>
            <circle cx="0" cy="0" r="7" fill="#334155" stroke="#1e293b" stroke-width="0.8"/>
            <circle cx="0" cy="0" r="2" fill="#ffffff"/>
          </g>

          <!-- Crater Beethoven (Large South-Eastern Basin) -->
          <g transform="translate(188, 185)">
            <circle cx="0" cy="0" r="18" fill="#475569" stroke="#334155" stroke-width="1.2"/>
            <circle cx="0" cy="0" r="12" fill="#334155"/>
            <circle cx="0" cy="0" r="2.5" fill="#ffffff"/>
          </g>

          <!-- Clustered Heavy Bombardment Impact Craters -->
          <g fill="#334155" stroke="#cbd5e1" stroke-width="0.8">
            <circle cx="68" cy="85" r="7"/><circle cx="68" cy="85" r="1.8" fill="#ffffff"/>
            <circle cx="178" cy="75" r="8"/><circle cx="178" cy="75" r="2" fill="#ffffff"/>
            <circle cx="215" cy="115" r="9"/><circle cx="215" cy="115" r="2.5" fill="#ffffff"/>
            <circle cx="95" cy="225" r="7.5"/><circle cx="95" cy="225" r="1.8" fill="#ffffff"/>
            <circle cx="168" cy="245" r="6.5"/>
          </g>

          <!-- Night Shadow Terminator (Right Limb) -->
          <path d="M 180 32 C 225 75 225 225 180 268 L 268 268 L 268 32 Z" fill="#000000" opacity="0.55"/>
        </g>

        <!-- Mercury Edge Rim Glow -->
        <circle cx="150" cy="150" r="118" fill="none" stroke="#cbd5e1" stroke-width="1.5" opacity="0.8"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#64748b" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#f59e0b"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#334155" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#cbd5e1" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f59e0b" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f59e0b" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f59e0b"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#1e293b" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#f59e0b"/>
      </g>
    `;
  }
};
