import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const quantumTheme: ClockThemeRenderer = {
  name: 'quantum',
  description: 'Orbiting electron rings with a glowing atomic core',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
        for (let i = 0; i < 12; i++) {
          ticks += `<circle cx="150" cy="20" r="3" fill="#a78bfa" transform="rotate(${i*30} 150 150)"/>`;
          if (i % 3 === 0) ticks += `<circle cx="150" cy="20" r="6" fill="none" stroke="#c4b5fd" stroke-width="1" transform="rotate(${i*30} 150 150)"/>`;
        }
    
    return `
      
      
      <circle cx="150" cy="150" r="145" fill="#020617" stroke="#1d4ed8" stroke-width="2"/>
      <!-- Electron Orbits -->
      <ellipse cx="150" cy="150" rx="40" ry="120" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.5" transform="rotate(0 150 150)"/>
      <ellipse cx="150" cy="150" rx="40" ry="120" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.5" transform="rotate(60 150 150)"/>
      <ellipse cx="150" cy="150" rx="40" ry="120" fill="none" stroke="#3b82f6" stroke-width="1" opacity="0.5" transform="rotate(120 150 150)"/>
      <!-- Glowing Core -->
      <defs>
        <clipPath id="quantum_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
        <radialGradient id="quantum_core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="30%" stop-color="#8b5cf6"/>
          <stop offset="100%" stop-color="transparent"/>
        </radialGradient>
      </defs>
      <circle cx="150" cy="150" r="30" fill="url(#quantum_core)"/>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <!-- Orbiting Particle Hands -->
      <g transform="rotate(${time.hourAngle} 150 150)">
        <line x1="150" y1="150" x2="150" y2="80" stroke="#8b5cf6" stroke-width="2" stroke-dasharray="2 4"/>
        <circle cx="150" cy="80" r="6" fill="#8b5cf6"/>
      </g>
      <g transform="rotate(${time.minuteAngle} 150 150)">
        <line x1="150" y1="150" x2="150" y2="40" stroke="#d8b4fe" stroke-width="2" stroke-dasharray="2 4"/>
        <circle cx="150" cy="40" r="5" fill="#d8b4fe"/>
      </g>
      ${options.showSeconds !== false ? `
      <g transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="150" x2="150" y2="25" stroke="#fbcfe8" stroke-width="1"/>
        <circle cx="150" cy="25" r="3" fill="#fbcfe8"/>
      </g>
      ` : ''}
      <circle cx="150" cy="150" r="3" fill="#ffffff"/>
    
    
    `;
  }
};
