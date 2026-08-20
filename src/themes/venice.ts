import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const veniceTheme: ClockThemeRenderer = {
  name: 'venice',
  description: 'Romantic Venetian Grand Canal at twilight with Renaissance palazzos, striped wooden mooring poles, sleek black gondola, and rippling turquoise waters',
  defaultColors: {},
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `<circle cx="150" cy="16" r="3.5" fill="#0284c7" stroke="#ffffff" stroke-width="0.8" transform="rotate(${angle} 150 150)"/>`;
      } else {
        ticks += `<circle cx="150" cy="16" r="2.5" fill="#38bdf8" stroke="#ffffff" stroke-width="0.6" transform="rotate(${angle} 150 150)"/>`;
      }
    }
    return `
      <defs>
        <clipPath id="venice_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <linearGradient id="venice_sunset" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="35%" stop-color="#fed7aa"/>
          <stop offset="70%" stop-color="#f472b6"/>
          <stop offset="100%" stop-color="#818cf8"/>
        </linearGradient>
        <linearGradient id="palazzo_ochre" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#ea580c"/>
          <stop offset="50%" stop-color="#f97316"/>
          <stop offset="100%" stop-color="#c2410c"/>
        </linearGradient>
        <linearGradient id="palazzo_rose" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#e11d48"/>
          <stop offset="50%" stop-color="#f43f5e"/>
          <stop offset="100%" stop-color="#be123c"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#venice_sunset)" stroke="#0284c7" stroke-width="2.5"/>

      <g clip-path="url(#venice_dial_clip)">
        <!-- Distant Rialto Bridge Silhouette on Canal (Center Horizon: y=165) -->
        <path d="M 105 175 Q 150 155 195 175 L 195 180 Q 150 162 105 180 Z" fill="#64748b" opacity="0.6"/>
        <path d="M 125 176 Q 150 160 175 176 Z" fill="#bae6fd" opacity="0.6"/>

        <!-- Grand Canal Emerald Waters (Lower Half: y=175..300) -->
        <path d="M 0 175 Q 150 168 300 175 L 300 300 L 0 300 Z" fill="#0284c7"/>
        <path d="M 0 190 Q 150 180 300 190 L 300 300 L 0 300 Z" fill="#0369a1"/>
        <path d="M 0 215 Q 150 205 300 215 L 300 300 L 0 300 Z" fill="#075985"/>

        <!-- Palace Reflections on Water -->
        <g opacity="0.35">
          <rect x="25" y="175" width="65" height="40" fill="#f97316"/>
          <rect x="210" y="175" width="70" height="40" fill="#f43f5e"/>
        </g>
        <!-- Shimmering Canal Ripples -->
        <g stroke="#7dd3fc" stroke-width="1.2" fill="none" opacity="0.75">
          <line x1="40" y1="205" x2="90" y2="205"/>
          <line x1="160" y1="210" x2="230" y2="210"/>
          <line x1="90" y1="225" x2="190" y2="225"/>
          <line x1="130" y1="245" x2="240" y2="245"/>
        </g>

        <!-- Venetian Renaissance Palazzos (Left & Right Flanks) -->
        <!-- 1. Left Ochre Palazzo -->
        <g>
          <rect x="25" y="95" width="70" height="85" fill="url(#palazzo_ochre)" stroke="#7c2d12" stroke-width="1"/>
          <!-- Gothic Trifora Arched Windows -->
          <g fill="#1e293b">
            <path d="M 38 120 L 38 108 A 4 4 0 0 1 46 108 L 46 120 Z"/>
            <path d="M 50 120 L 50 108 A 4 4 0 0 1 58 108 L 58 120 Z"/>
            <path d="M 62 120 L 62 108 A 4 4 0 0 1 70 108 L 70 120 Z"/>
            <!-- Lower Floor Portego Arches -->
            <path d="M 42 165 L 42 145 A 6 6 0 0 1 54 145 L 54 165 Z"/>
            <path d="M 60 165 L 60 145 A 6 6 0 0 1 72 145 L 72 165 Z"/>
          </g>
          <!-- Balcony Railing -->
          <rect x="36" y="120" width="36" height="3" fill="#ffffff"/>
        </g>

        <!-- 2. Right Rose Palazzo -->
        <g>
          <rect x="210" y="105" width="75" height="75" fill="url(#palazzo_rose)" stroke="#881337" stroke-width="1"/>
          <g fill="#1e293b">
            <path d="M 224 130 L 224 118 A 4 4 0 0 1 232 118 L 232 130 Z"/>
            <path d="M 238 130 L 238 118 A 4 4 0 0 1 246 118 L 246 130 Z"/>
            <path d="M 252 130 L 252 118 A 4 4 0 0 1 260 118 L 260 130 Z"/>
            <path d="M 230 170 L 230 150 A 6 6 0 0 1 242 150 L 242 170 Z"/>
            <path d="M 248 170 L 248 150 A 6 6 0 0 1 260 150 L 260 170 Z"/>
          </g>
          <rect x="222" y="130" width="40" height="3" fill="#ffffff"/>
        </g>

        <!-- Traditional Blue & White Striped Wooden Mooring Poles (Paline da Casada) -->
        <!-- Left Pole -->
        <g transform="translate(85, 145)">
          <rect x="0" y="0" width="6" height="105" rx="2" fill="#ffffff" stroke="#0f172a" stroke-width="0.8"/>
          <!-- Blue Spiral Stripes -->
          <polygon points="0,15 6,22 6,32 0,25" fill="#0284c7"/>
          <polygon points="0,45 6,52 6,62 0,55" fill="#0284c7"/>
          <polygon points="0,75 6,82 6,92 0,85" fill="#0284c7"/>
          <!-- Golden Finial Cap -->
          <circle cx="3" cy="0" r="3.5" fill="#f59e0b"/>
        </g>
        <!-- Right Pole -->
        <g transform="translate(205, 155)">
          <rect x="0" y="0" width="6" height="95" rx="2" fill="#ffffff" stroke="#0f172a" stroke-width="0.8"/>
          <polygon points="0,15 6,22 6,32 0,25" fill="#0284c7"/>
          <polygon points="0,45 6,52 6,62 0,55" fill="#0284c7"/>
          <polygon points="0,75 6,82 6,92 0,85" fill="#0284c7"/>
          <circle cx="3" cy="0" r="3.5" fill="#f59e0b"/>
        </g>

        <!-- Sleek Traditional Venetian Gondola with Metal Prow (Ferro) in Foreground -->
        <g transform="translate(150, 240)">
          <!-- Gondola Hull -->
          <path d="M -85 -4 C -35 18 35 18 85 -4 C 55 12 -55 12 -85 -4 Z" fill="#0f172a" stroke="#020617" stroke-width="1.2"/>
          <!-- Velvet Cabin Seat (Poltroncina) -->
          <rect x="-18" y="2" width="36" height="6" rx="2" fill="#dc2626"/>
          <!-- Steel Metal Prow Comb (Ferro da Prua at Front Tip) -->
          <g transform="translate(-85, -4)">
            <path d="M 0 0 Q -8 -15 -4 -25 Q 2 -18 2 -5 Z" fill="#e2e8f0" stroke="#94a3b8" stroke-width="0.6"/>
            <!-- 6 Teeth of the Ferro (Representing Venice Sestieri) -->
            <line x1="-3" y1="-20" x2="-8" y2="-20" stroke="#e2e8f0" stroke-width="1"/>
            <line x1="-3" y1="-17" x2="-7" y2="-17" stroke="#e2e8f0" stroke-width="1"/>
            <line x1="-3" y1="-14" x2="-7" y2="-14" stroke="#e2e8f0" stroke-width="1"/>
          </g>
          <!-- Gondolier Oar (Forcola) -->
          <line x1="45" y1="-10" x2="80" y2="15" stroke="#78350f" stroke-width="2" stroke-linecap="round"/>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0f172a" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#ea580c" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0284c7" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#7dd3fc" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#f43f5e" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#f43f5e" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#f43f5e"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0f172a" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#0284c7"/>
      </g>
    `;
  }
};
