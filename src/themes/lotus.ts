import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const lotusTheme: ClockThemeRenderer = {
  name: 'lotus',
  description: 'Delicate pink lotus blossoms resting upon calm pond ripples',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
      for (let i = 0; i < 12; i++) {
        ticks += `<circle cx="150" cy="20" r="3.5" fill="#a5f3fc" transform="rotate(${i*30} 150 150)"/>`;
      }
    
    return `
      
      
      <defs>
        <clipPath id="lotus_dial_clip">
          <circle cx="150" cy="150" r="145"/>

      
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <radialGradient id="pond_grad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#0e7490"/>
          <stop offset="100%" stop-color="#083344"/>
        </radialGradient>
      </defs>
      <!-- Pond Water -->
      <circle cx="150" cy="150" r="145" fill="url(#pond_grad)" stroke="#06b6d4" stroke-width="2"/>

      <g clip-path="url(#lotus_dial_clip)">
      <!-- Water Ripples -->
      <circle cx="150" cy="150" r="120" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.3"/>
      <circle cx="150" cy="150" r="85" fill="none" stroke="#22d3ee" stroke-width="1" opacity="0.4"/>
      <!-- Lotus Flower Petals -->
      <g fill="#f472b6" opacity="0.85" stroke="#ec4899" stroke-width="1.5">
        ${Array.from({length: 8}).map((_, i) => `
          <path d="M 150 80 Q 130 120 150 150 Q 170 120 150 80 Z" transform="rotate(${i * 45} 150 150)"/>
        `).join('')}
      </g>
      <g fill="#fbcfe8" opacity="0.95">
        ${Array.from({length: 8}).map((_, i) => `
          <path d="M 150 100 Q 138 130 150 150 Q 162 130 150 100 Z" transform="rotate(${i * 45 + 22.5} 150 150)"/>
        `).join('')}
      </g>
    
      </g>

      </g>

      <g class="ticks">${ticks}
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <polygon points="146,150 154,150 150,75" fill="#f43f5e" transform="rotate(${time.hourAngle} 150 150)"/>
      <polygon points="147,150 153,150 150,40" fill="#fb7185" transform="rotate(${time.minuteAngle} 150 150)"/>
      ${options.showSeconds !== false ? `
      <line x1="150" y1="160" x2="150" y2="25" stroke="#ffffff" stroke-width="1.5" transform="rotate(${time.secondAngle} 150 150)"/>
      <circle cx="150" cy="25" r="3" fill="#ffffff" transform="rotate(${time.secondAngle} 150 150)"/>
      ` : ''}
      <circle cx="150" cy="150" r="6" fill="#facc15"/>
    
    
    `;
  }
};
