import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const tree_ringsTheme: ClockThemeRenderer = {
  name: 'tree_rings',
  description: 'Organic tree cross-section with annual growth rings and leaf hands',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    
      for (let i = 0; i < 12; i++) {
        ticks += `<rect x="148" y="14" width="4" height="12" rx="2" fill="#4e342e" transform="rotate(${i*30} 150 150)"/>`;
      }
    
    return `
      
      <defs>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
        <clipPath id="tree_rings_dial_clip">
          <circle cx="150" cy="150" r="145"/>

      
        </clipPath>
      </defs>
      
      <!-- Bark Outer Rim -->
      <circle cx="150" cy="150" r="145" fill="#5c4033" stroke="#3e2723" stroke-width="8"/>

      <g clip-path="url(#tree_rings_dial_clip)">
      <circle cx="150" cy="150" r="138" fill="#d7ccc8"/>
      <!-- Growth Rings -->
      <circle cx="150" cy="150" r="120" fill="none" stroke="#a1887f" stroke-width="1.5" opacity="0.6"/>
      <circle cx="152" cy="148" r="102" fill="none" stroke="#8d6e63" stroke-width="2" opacity="0.5"/>
      <circle cx="149" cy="151" r="82" fill="none" stroke="#a1887f" stroke-width="1.8" opacity="0.6"/>
      <circle cx="150" cy="150" r="62" fill="none" stroke="#8d6e63" stroke-width="2" opacity="0.7"/>
      <circle cx="151" cy="149" r="42" fill="none" stroke="#6d4c41" stroke-width="2.5" opacity="0.8"/>
      <circle cx="150" cy="150" r="22" fill="#8d6e63" opacity="0.3"/>
    
      </g>

      </g>

      <g class="ticks">${ticks}
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    return `
      
      <!-- Leaf Shaped Hands -->
      <g transform="rotate(${time.hourAngle} 150 150)">
        <path d="M 150 150 Q 142 110 150 75 Q 158 110 150 150 Z" fill="#2e7d32"/>
        <line x1="150" y1="145" x2="150" y2="80" stroke="#a5d6a7" stroke-width="1"/>
      </g>
      <g transform="rotate(${time.minuteAngle} 150 150)">
        <path d="M 150 150 Q 144 95 150 40 Q 156 95 150 150 Z" fill="#43a047"/>
        <line x1="150" y1="145" x2="150" y2="45" stroke="#c8e6c9" stroke-width="1"/>
      </g>
      ${options.showSeconds !== false ? `
      <g transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="160" x2="150" y2="30" stroke="#e65100" stroke-width="1.5"/>
        <circle cx="150" cy="30" r="3" fill="#e65100"/>
      </g>
      ` : ''}
      <circle cx="150" cy="150" r="6" fill="#3e2723"/>
    
    
    `;
  }
};
