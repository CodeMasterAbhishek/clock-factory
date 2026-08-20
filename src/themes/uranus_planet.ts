import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const uranus_planetTheme: ClockThemeRenderer = {
  name: 'uranus_planet',
  description: 'Tilted Ice Giant Uranus showing serene pastel cyan-aquamarine methane atmosphere, luminous polar hood, thin vertical glowing ring system, and icy moon Miranda',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#22d3ee" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#06b6d4" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="uranus_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <clipPath id="uranus_globe_clip"><circle cx="150" cy="150" r="82"/></clipPath>
        <radialGradient id="uranus_cosmos" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#020617"/>
          <stop offset="70%" stop-color="#021a24"/>
          <stop offset="100%" stop-color="#000000"/>
        </radialGradient>
        <radialGradient id="uranus_body" cx="38%" cy="38%" r="65%">
          <stop offset="0%" stop-color="#e0f2fe"/>
          <stop offset="35%" stop-color="#a5f3fc"/>
          <stop offset="70%" stop-color="#22d3ee"/>
          <stop offset="90%" stop-color="#0891b2"/>
          <stop offset="100%" stop-color="#083344"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border in Cosmic Deep Space -->
      <circle cx="150" cy="150" r="145" fill="url(#uranus_cosmos)" stroke="#06b6d4" stroke-width="2.5"/>

      <g clip-path="url(#uranus_dial_clip)">
        <!-- Distant Deep Space Stars & Icy Moons (Miranda & Titania) -->
        <g fill="#ffffff">
          <circle cx="45" cy="45" r="1.2"/><circle cx="95" cy="30" r="1.5"/><circle cx="215" cy="35" r="1"/><circle cx="255" cy="50" r="1.5"/>
          <circle cx="35" cy="245" r="1.5"/><circle cx="265" cy="240" r="1.2"/>
        </g>
        <!-- Icy Moon Miranda (Top-Left) -->
        <circle cx="58" cy="72" r="4.5" fill="#e0f2fe" stroke="#67e8f9" stroke-width="0.6"/>
        <!-- Moon Titania (Bottom-Right) -->
        <circle cx="242" cy="225" r="5.5" fill="#cbd5e1" stroke="#94a3b8" stroke-width="0.6"/>

        <!-- Back Half of Uranus's 98° Tilted Vertical Ring System (Behind the Globe) -->
        <g transform="translate(150, 150) rotate(82)">
          <!-- Outer Epsilon Ring (Back) -->
          <ellipse cx="0" cy="0" rx="135" ry="24" fill="none" stroke="#67e8f9" stroke-width="2.5" opacity="0.65"/>
          <ellipse cx="0" cy="0" rx="122" ry="21" fill="none" stroke="#22d3ee" stroke-width="1.5" opacity="0.5"/>
          <ellipse cx="0" cy="0" rx="108" ry="18" fill="none" stroke="#0891b2" stroke-width="1.2" opacity="0.4"/>
        </g>

        <!-- Main Uranus Globe Sphere (R = 82 at Center 150, 150) -->
        <circle cx="150" cy="150" r="82" fill="url(#uranus_body)"/>

        <!-- Uranus Atmospheric Features (Clipped inside Globe) -->
        <g clip-path="url(#uranus_globe_clip)">
          <!-- Luminous North Polar Hood & Methane Mist Layer -->
          <g transform="translate(150, 105)" fill="#ffffff" opacity="0.45">
            <ellipse cx="0" cy="0" rx="55" ry="26"/>
            <ellipse cx="0" cy="-10" rx="35" ry="15"/>
          </g>

          <!-- Subtle Latitudinal Methane Clouds across Equator -->
          <path d="M 72 142 Q 150 148 228 142 L 228 155 Q 150 162 72 155 Z" fill="#67e8f9" opacity="0.5"/>
          <path d="M 75 165 Q 150 172 225 165 L 222 178 Q 150 185 78 178 Z" fill="#0891b2" opacity="0.4"/>

          <!-- High-Altitude White Methane Cirrus Cloud Streak (James Webb Observed Feature) -->
          <path d="M 112 135 Q 145 130 185 138" stroke="#ffffff" stroke-width="2.5" fill="none" stroke-linecap="round" opacity="0.9"/>
          <circle cx="195" cy="140" r="2.2" fill="#ffffff" opacity="0.85"/>

          <!-- Night Shadow Terminator (Right Limb) -->
          <path d="M 165 72 C 195 95 195 205 165 228 L 228 228 L 228 72 Z" fill="#000000" opacity="0.5"/>
        </g>

        <!-- Front Half of Uranus's Vertical Rings (Passing in Front of Globe) -->
        <g transform="translate(150, 150) rotate(82)">
          <path d="M -135 0 A 135 24 0 0 0 135 0" fill="none" stroke="#a5f3fc" stroke-width="2.5" opacity="0.85"/>
          <path d="M -122 0 A 122 21 0 0 0 122 0" fill="none" stroke="#67e8f9" stroke-width="1.8" opacity="0.7"/>
          <path d="M -108 0 A 108 18 0 0 0 108 0" fill="none" stroke="#22d3ee" stroke-width="1.5" opacity="0.55"/>
        </g>

        <!-- Uranus Luminous Edge Glow -->
        <circle cx="150" cy="150" r="82" fill="none" stroke="#a5f3fc" stroke-width="1.8" opacity="0.75"/>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#0891b2" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#06b6d4" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#67e8f9"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#ffffff" stroke="#0891b2" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#a5f3fc" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#22d3ee" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#22d3ee" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#22d3ee"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#083344" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#22d3ee"/>
      </g>
    `;
  }
};
