import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const baseball_diamondTheme: ClockThemeRenderer = {
  name: 'baseball_diamond',
  description: 'Red clay infield dirt and outfield lawn grass with double red-stitched baseball dial',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) { ticks += `<circle cx="150" cy="16" r="3.5" fill="#dc2626" stroke="#000000" stroke-width="0.8" transform="rotate(${i*30} 150 150)"/>`; }
    return `
      
      <defs>
        <clipPath id="baseball_diamond_dial_clip">
          <circle cx="150" cy="150" r="145"/>
        </clipPath>
        <clipPath id="baseball_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <radialGradient id="bb_leather" cx="40%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="70%" stop-color="#f1f5f9"/>
          <stop offset="100%" stop-color="#cbd5e1"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>
      <circle cx="150" cy="150" r="145" fill="url(#bb_leather)" stroke="#dc2626" stroke-width="3"/>
      <g clip-path="url(#baseball_dial_clip)">
        <!-- Red Baseball Stitch Seams -->
        <path d="M 60 30 C 100 80 100 220 60 270" stroke="#dc2626" stroke-width="3.5" fill="none"/>
        <path d="M 240 30 C 200 80 200 220 240 270" stroke="#dc2626" stroke-width="3.5" fill="none"/>
        <!-- Individual Red Thread Stitches -->
        <g stroke="#dc2626" stroke-width="2">
          <line x1="55" y1="70" x2="68" y2="78"/><line x1="55" y1="110" x2="68" y2="118"/>
          <line x1="55" y1="150" x2="68" y2="158"/><line x1="55" y1="190" x2="68" y2="198"/>
          <line x1="55" y1="230" x2="68" y2="238"/>
          <line x1="245" y1="70" x2="232" y2="78"/><line x1="245" y1="110" x2="232" y2="118"/>
          <line x1="245" y1="150" x2="232" y2="158"/><line x1="245" y1="190" x2="232" y2="198"/>
          <line x1="245" y1="230" x2="232" y2="238"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 145 150 L 150 68 L 155 150 Z" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="75" stroke="#dc2626" stroke-width="2.5" stroke-linecap="round"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 146.5 150 L 150 32 L 153.5 150 Z" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
          <line x1="150" y1="140" x2="150" y2="40" stroke="#1d4ed8" stroke-width="2" stroke-linecap="round"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#dc2626" stroke-width="2"/>
          <circle cx="150" cy="18" r="4" fill="#dc2626" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#dc2626"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="6" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2.5" fill="#dc2626"/>
      </g>
    
    `;
  }
};
