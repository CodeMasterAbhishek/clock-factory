import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const dandelionTheme: ClockThemeRenderer = {
  name: 'dandelion',
  description: 'Ethereal glowing dandelion seedhead in a summer twilight breeze with floating airborne parachute seeds',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      ticks += `<circle cx="150" cy="16" r="3" fill="#38bdf8" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
    }
    return `
      <defs>
        <clipPath id="dandelion_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="dandelion_twilight" cx="45%" cy="45%" r="65%">
          <stop offset="0%" stop-color="#1e1b4b"/>
          <stop offset="50%" stop-color="#0f172a"/>
          <stop offset="100%" stop-color="#020617"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#dandelion_twilight)" stroke="#38bdf8" stroke-width="2.5"/>

      <g clip-path="url(#dandelion_dial_clip)">
        <!-- Soft Twilight Bokeh Glow Circles -->
        <g fill="#38bdf8" opacity="0.15">
          <circle cx="70" cy="80" r="35"/><circle cx="230" cy="65" r="45"/><circle cx="210" cy="220" r="40"/><circle cx="60" cy="210" r="30"/>
        </g>
        <g fill="#fef08a" opacity="0.12">
          <circle cx="150" cy="150" r="65"/><circle cx="240" cy="140" r="28"/>
        </g>

        <!-- Curved Dandelion Stem from Bottom -->
        <path d="M 120 280 Q 135 210 148 155" stroke="#10b981" stroke-width="4" fill="none" stroke-linecap="round"/>
        <path d="M 122 280 Q 137 210 150 155" stroke="#34d399" stroke-width="1.8" fill="none" stroke-linecap="round"/>

        <!-- Dandelion Seedhead Receptacle Core -->
        <circle cx="150" cy="150" r="11" fill="#ca8a04" stroke="#78350f" stroke-width="1.2"/>
        <circle cx="150" cy="150" r="6" fill="#fde047"/>

        <!-- Intricate Radiating Seed Parachute Filaments (Clockwise Rays) -->
        <g stroke="#e0f2fe" stroke-width="0.9" opacity="0.85">
          ${Array.from({length: 28}).map((_, i) => {
            const angle = (i * 360) / 28;
            const r1 = 12;
            const r2 = 68;
            return `
              <g transform="rotate(${angle} 150 150)">
                <line x1="150" y1="${150 - r1}" x2="150" y2="${150 - r2}"/>
                <!-- Parachute Tuft (Feathery White Filaments) -->
                <circle cx="150" cy="${150 - r2}" r="3" fill="#ffffff"/>
                <line x1="145" y1="${150 - r2 - 3}" x2="155" y2="${150 - r2 - 3}" stroke="#ffffff" stroke-width="0.8"/>
                <line x1="147" y1="${150 - r2 - 5}" x2="153" y2="${150 - r2 - 5}" stroke="#ffffff" stroke-width="0.8"/>
              </g>
            `;
          }).join('')}
        </g>

        <!-- Floating Airborne Seeds Caught in the Breeze (Drifting to Top-Right) -->
        <!-- Seed 1 -->
        <g transform="translate(205, 80) rotate(35)">
          <line x1="0" y1="0" x2="0" y2="-22" stroke="#ffffff" stroke-width="1"/>
          <ellipse cx="0" cy="0" rx="1.8" ry="3.5" fill="#ca8a04"/>
          <!-- Fluffy Parachute -->
          <circle cx="0" cy="-22" r="3.5" fill="#ffffff"/>
          <line x1="-5" y1="-25" x2="5" y2="-25" stroke="#ffffff" stroke-width="0.8"/>
        </g>
        <!-- Seed 2 -->
        <g transform="translate(245, 115) rotate(50)">
          <line x1="0" y1="0" x2="0" y2="-18" stroke="#ffffff" stroke-width="0.9"/>
          <ellipse cx="0" cy="0" rx="1.5" ry="3" fill="#ca8a04"/>
          <circle cx="0" cy="-18" r="3" fill="#ffffff"/>
        </g>
        <!-- Seed 3 -->
        <g transform="translate(185, 45) rotate(20)">
          <line x1="0" y1="0" x2="0" y2="-16" stroke="#ffffff" stroke-width="0.9"/>
          <ellipse cx="0" cy="0" rx="1.5" ry="3" fill="#ca8a04"/>
          <circle cx="0" cy="-16" r="2.8" fill="#ffffff"/>
        </g>

        <!-- Glimmering Starlight Sparkles in Twilight -->
        <g fill="#ffffff" opacity="0.9">
          <circle cx="65" cy="65" r="1.5"/><circle cx="110" cy="40" r="1.2"/><circle cx="265" cy="55" r="1.5"/><circle cx="270" cy="180" r="1.2"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#ffffff" stroke="#0f172a" stroke-width="1.2"/>
          <circle cx="150" cy="75" r="3.5" fill="#38bdf8"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#38bdf8" stroke="#ffffff" stroke-width="1.2"/>
          <circle cx="150" cy="35" r="3" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#facc15" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#facc15" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#facc15"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#ffffff" stroke="#0f172a" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
