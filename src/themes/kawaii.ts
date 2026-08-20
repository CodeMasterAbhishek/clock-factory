import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const kawaiiTheme: ClockThemeRenderer = {
  name: 'kawaii',
  description: 'Cozy pastel twin-bell alarm clock with cute blushing cheeks, smiling face, and sparkle accents',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#ff9ebb',
    hourTicks: '#ff7096',
    minuteTicks: '#ffb3c6',
    numbers: '#ff7096',
    hourHand: '#ff6b8b',
    minuteHand: '#ff85a1',
    secondHand: '#ff4d6d',
    accent: '#ff4d6d',
    centerCap: '#ff4d6d'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const isCard = i % 3 === 0;
      if (isCard) {
        ticks += `<circle cx="150" cy="52" r="3.5" fill="${colors.hourTicks}" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="52" r="2" fill="${colors.minuteTicks}" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    return `
      
      <!-- Top Ring Loop & Hammer -->
      <circle cx="150" cy="32" r="14" fill="#ffb3c6" stroke="#e05780" stroke-width="3"/>
      <circle cx="150" cy="32" r="7" fill="#ffffff" stroke="#e05780" stroke-width="2"/>
      <rect x="147" y="44" width="6" height="10" fill="#ffb3c6" stroke="#e05780" stroke-width="2"/>

      <!-- Twin Alarm Bells (Left & Right) -->
      <g class="bells">
        <!-- Left Bell -->
        <path d="M 80,42 C 60,30 45,55 60,78 Z" fill="#ff8da9" stroke="#e05780" stroke-width="3.5"/>
        <ellipse cx="68" cy="58" rx="8" ry="4" fill="#ffb3c6" opacity="0.6" transform="rotate(-30 68 58)"/>
        <!-- Right Bell -->
        <path d="M 220,42 C 240,30 255,55 240,78 Z" fill="#ff8da9" stroke="#e05780" stroke-width="3.5"/>
        <ellipse cx="232" cy="58" rx="8" ry="4" fill="#ffb3c6" opacity="0.6" transform="rotate(30 232 58)"/>
      </g>

      <!-- Bottom Cute Legs / Feet -->
      <g class="feet">
        <rect x="75" y="240" width="18" height="24" rx="8" fill="#ff8da9" stroke="#e05780" stroke-width="3" transform="rotate(25 84 252)"/>
        <rect x="207" y="240" width="18" height="24" rx="8" fill="#ff8da9" stroke="#e05780" stroke-width="3" transform="rotate(-25 216 252)"/>
      </g>

      <!-- Main Outer Pink Body Shell -->
      <circle cx="150" cy="150" r="118" fill="#ff9ebb" stroke="#e05780" stroke-width="4"/>
      <!-- Soft Highlight on Shell -->
      <path d="M 60,110 A 108,108 0 0,1 150,42" fill="none" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.6"/>

      <!-- Pastel Blue Dial Bezel -->
      <circle cx="150" cy="150" r="102" fill="#cbebf7" stroke="#7ec8e3" stroke-width="3.5"/>

      <!-- White Inner Dial Face -->
      <circle cx="150" cy="150" r="92" fill="${colors.face}"/>

      <!-- Cute Blushing Cheeks -->
      <ellipse cx="98" cy="165" rx="14" ry="10" fill="#ffccd5" opacity="0.85"/>
      <ellipse cx="202" cy="165" rx="14" ry="10" fill="#ffccd5" opacity="0.85"/>
      <!-- Blush Lines -->
      <line x1="93" y1="162" x2="91" y2="168" stroke="#ff8da9" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="98" y1="162" x2="96" y2="168" stroke="#ff8da9" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="103" y1="162" x2="101" y2="168" stroke="#ff8da9" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="197" y1="162" x2="195" y2="168" stroke="#ff8da9" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="202" y1="162" x2="200" y2="168" stroke="#ff8da9" stroke-width="1.5" stroke-linecap="round"/>
      <line x1="207" y1="162" x2="205" y2="168" stroke="#ff8da9" stroke-width="1.5" stroke-linecap="round"/>

      <!-- Cute Kawaii Eyes & Smile -->
      <ellipse cx="118" cy="150" rx="5" ry="6.5" fill="#3d1e28"/>
      <circle cx="116" cy="148" r="2" fill="#ffffff"/>
      <ellipse cx="182" cy="150" rx="5" ry="6.5" fill="#3d1e28"/>
      <circle cx="180" cy="148" r="2" fill="#ffffff"/>
      <!-- Cute 'w' Smile -->
      <path d="M 143,153 Q 146.5,157 150,153 Q 153.5,157 157,153" fill="none" stroke="#3d1e28" stroke-width="2" stroke-linecap="round"/>

      <!-- Ticks -->
      <g class="ticks">${ticks}</g>

      <!-- Sparkles around Clock -->
      <path d="M 38,70 Q 42,70 42,66 Q 42,70 46,70 Q 42,70 42,74 Q 42,70 38,70" fill="#fbd38d"/>
      <path d="M 252,70 Q 256,70 256,66 Q 256,70 260,70 Q 256,70 256,74 Q 256,70 252,70" fill="#fbd38d"/>
      <path d="M 30,190 Q 35,190 35,185 Q 35,190 40,190 Q 35,190 35,195 Q 35,190 30,190" fill="#fbd38d"/>
      <path d="M 258,195 Q 263,195 263,190 Q 263,195 268,195 Q 263,195 263,200 Q 263,195 258,195" fill="#fbd38d"/>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Rounded Coral Pastel) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="147" y="90" width="6" height="68" rx="3" fill="${colors.hourHand}"/>
        <circle cx="150" cy="94" r="2" fill="#ffffff"/>
      </g>
      
      <!-- Minute Hand (Longer Coral Pastel) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="147.5" y="65" width="5" height="95" rx="2.5" fill="${colors.minuteHand}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand with Heart Accent -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="58" x2="150" y2="165" stroke="${colors.secondHand}" stroke-width="1.8" stroke-linecap="round"/>
        <circle cx="150" cy="58" r="3.5" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Button Hub -->
      <circle cx="150" cy="150" r="5" fill="#e05780"/>
      <circle cx="150" cy="150" r="2.5" fill="#ffffff"/>
    
    `;
  }
};
