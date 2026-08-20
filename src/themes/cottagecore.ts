import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const cottagecoreTheme: ClockThemeRenderer = {
  name: 'cottagecore',
  description: 'Handcrafted cozy cottagecore embroidery hoop with 360-degree botanical wildflower wreath, Amanita mushrooms, wild strawberries, and fairy lights',
  defaultColors: {
    face: '#fbf7ee',
    dialBorder: '#845422',
    hourTicks: '#5c3a21',
    minuteTicks: '#a88358',
    numbers: '#5c3a21',
    hourHand: '#6b4423',
    minuteHand: '#845422',
    secondHand: '#dc2626',
    accent: '#f59e0b',
    centerCap: '#f59e0b'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Delicate Wild Daisy & French-Knot Stitch Markers
    let ticks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i % 3 === 0) {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 24)">
            <circle cx="-3" cy="0" r="2.6" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
            <circle cx="3" cy="0" r="2.6" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
            <circle cx="0" cy="-3" r="2.6" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
            <circle cx="0" cy="3" r="2.6" fill="#ffffff" stroke="#e2e8f0" stroke-width="0.5"/>
            <circle cx="0" cy="0" r="2.2" fill="#f59e0b"/>
          </g>
        `;
      } else {
        ticks += `
          <g transform="rotate(${angle} 150 150) translate(150, 24)">
            <circle cx="0" cy="0" r="2.2" fill="#b45309" stroke="#fef08a" stroke-width="0.6"/>
          </g>
        `;
      }
    }

    return `
      <defs>
        <clipPath id="cottage_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        
        <radialGradient id="linen_canvas" cx="50%" cy="45%" r="60%">
          <stop offset="0%" stop-color="#fffdf7"/>
          <stop offset="65%" stop-color="#fdf6e7"/>
          <stop offset="100%" stop-color="#f5e6cc"/>
        </radialGradient>
        
        <linearGradient id="hoop_wood" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#92400e"/>
          <stop offset="25%" stop-color="#b45309"/>
          <stop offset="50%" stop-color="#78350f"/>
          <stop offset="75%" stop-color="#9a3412"/>
          <stop offset="100%" stop-color="#451a03"/>
        </linearGradient>

        <radialGradient id="amanita_shading" cx="40%" cy="30%" r="70%">
          <stop offset="0%" stop-color="#f87171"/>
          <stop offset="45%" stop-color="#dc2626"/>
          <stop offset="90%" stop-color="#991b1b"/>
          <stop offset="100%" stop-color="#450a0a"/>
        </radialGradient>

        <radialGradient id="fairy_orb" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fef08a" stop-opacity="1"/>
          <stop offset="50%" stop-color="#facc15" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#eab308" stop-opacity="0"/>
        </radialGradient>

        <filter id="cottage_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#451a03" flood-opacity="0.35"/>
        </filter>
      </defs>

      <!-- Wooden Embroidery Hoop Frame -->
      <circle cx="150" cy="150" r="147" fill="url(#hoop_wood)" stroke="#451a03" stroke-width="2.5"/>
      <circle cx="150" cy="150" r="142" fill="url(#linen_canvas)" stroke="#ca8a04" stroke-width="1"/>

      <!-- Brass Hoop Clasp Screw at Top (12 o'clock) -->
      <g transform="translate(150, 5)">
        <rect x="-9" y="0" width="18" height="5" rx="1.5" fill="#d97706" stroke="#78350f" stroke-width="0.8"/>
        <line x1="0" y1="0" x2="0" y2="5" stroke="#78350f" stroke-width="1"/>
      </g>

      <g clip-path="url(#cottage_dial_clip)">
        <!-- Inner Embroidered Running-Stitch Circles -->
        <circle cx="150" cy="150" r="128" fill="none" stroke="#65a30d" stroke-width="1.2" stroke-dasharray="3 5" opacity="0.8"/>
        <circle cx="150" cy="150" r="118" fill="none" stroke="#ca8a04" stroke-width="0.8" stroke-dasharray="2 4" opacity="0.6"/>
        <circle cx="150" cy="150" r="75" fill="none" stroke="#d97706" stroke-width="0.6" stroke-dasharray="1.5 3.5" opacity="0.4"/>

        <!-- 360-DEGREE BOTANICAL GARLAND -->
        <!-- Upper Vines & Wild Flowers -->
        <g stroke="#3f6212" stroke-width="1.2" fill="none">
          <path d="M 90 45 Q 60 70 50 110"/>
          <path d="M 68 62 Q 54 58 52 68" fill="#4d7c0f"/>
          <path d="M 58 85 Q 42 82 44 94" fill="#65a30d"/>
          <path d="M 210 45 Q 240 70 250 110"/>
          <path d="M 232 62 Q 246 58 248 68" fill="#4d7c0f"/>
          <path d="M 242 85 Q 258 82 256 94" fill="#65a30d"/>
        </g>
        <!-- Blueberries & Little Daisies -->
        <circle cx="58" cy="74" r="3.2" fill="#1e3a8a" stroke="#172554" stroke-width="0.6"/>
        <circle cx="63" cy="78" r="2.8" fill="#2563eb" stroke="#172554" stroke-width="0.5"/>
        <g transform="translate(236, 75) scale(0.9)">
          <circle cx="-3" cy="0" r="2.5" fill="#ffffff"/><circle cx="3" cy="0" r="2.5" fill="#ffffff"/>
          <circle cx="0" cy="-3" r="2.5" fill="#ffffff"/><circle cx="0" cy="3" r="2.5" fill="#ffffff"/>
          <circle cx="0" cy="0" r="2.2" fill="#eab308"/>
        </g>

        <!-- Mid Flank Ivy Sprigs -->
        <g transform="translate(42, 150)">
          <path d="M 0 -15 Q -10 0 0 15" stroke="#365314" stroke-width="1.2" fill="none"/>
          <path d="M -4 -8 C -12 -12 -14 -4 -6 -2 Z" fill="#65a30d"/>
          <path d="M -5 6 C -14 4 -12 12 -4 10 Z" fill="#4d7c0f"/>
        </g>
        <g transform="translate(258, 150)">
          <path d="M 0 -15 Q 10 0 0 15" stroke="#365314" stroke-width="1.2" fill="none"/>
          <path d="M 4 -8 C 12 -12 14 -4 6 -2 Z" fill="#65a30d"/>
          <path d="M 5 6 C 14 4 12 12 4 10 Z" fill="#4d7c0f"/>
        </g>

        <!-- LOWER BOTANICAL MOSS BED & TOADSTOOL SANCTUARY -->
        <path d="M 30 260 Q 90 220 150 228 T 270 260 L 275 295 Q 150 270 25 295 Z" fill="#1e3a1a" opacity="0.6"/>
        <path d="M 40 252 Q 100 222 150 230 T 260 252 L 265 285 Q 150 265 35 285 Z" fill="#365314"/>
        <path d="M 55 245 Q 110 226 150 233 T 245 245 L 250 275 Q 150 258 50 275 Z" fill="#4d7c0f"/>
        <path d="M 70 240 Q 120 230 150 235 T 230 240 L 235 268 Q 150 252 65 268 Z" fill="#65a30d"/>

        <!-- Little Fern Fronds -->
        <g stroke="#365314" stroke-width="1" fill="#84cc16" opacity="0.9">
          <path d="M 75 245 Q 65 225 55 218"/>
          <path d="M 70 236 Q 62 232 60 236 Z"/>
          <path d="M 225 245 Q 235 225 245 218"/>
          <path d="M 230 236 Q 238 232 240 236 Z"/>
        </g>

        <!-- Amanita Mushroom Family (Left) -->
        <g transform="translate(108, 222)" filter="url(#cottage_shadow)">
          <path d="M -5 20 C -4 8 -2 -2 0 -10 L 7 -10 C 9 -2 10 8 11 20 Z" fill="#fefce8" stroke="#ca8a04" stroke-width="0.8"/>
          <path d="M -4 4 Q 3 8 10 4" stroke="#ca8a04" stroke-width="1.2" fill="none"/>
          <ellipse cx="3.5" cy="-8" rx="20" ry="4.5" fill="#fef08a" stroke="#ca8a04" stroke-width="0.6"/>
          <path d="M -18 -8 C -18 -32 25 -32 25 -8 Z" fill="url(#amanita_shading)" stroke="#7f1d1d" stroke-width="1"/>
          <circle cx="4" cy="-22" r="3.2" fill="#ffffff"/>
          <circle cx="-7" cy="-17" r="2.6" fill="#ffffff"/>
          <circle cx="15" cy="-17" r="2.5" fill="#ffffff"/>
          <circle cx="5" cy="-13" r="1.8" fill="#ffffff"/>
          <circle cx="-13" cy="-10" r="1.6" fill="#ffffff"/>
          <circle cx="20" cy="-10" r="1.6" fill="#ffffff"/>
        </g>

        <!-- Golden Chanterelle Mushroom (Right) -->
        <g transform="translate(182, 228)" filter="url(#cottage_shadow)">
          <path d="M -3 15 C -2 6 0 0 2 -6 L 8 -6 C 9 0 10 6 11 15 Z" fill="#fef3c7" stroke="#b45309" stroke-width="0.7"/>
          <ellipse cx="5" cy="-5" rx="14" ry="3.5" fill="#fde047" stroke="#b45309" stroke-width="0.6"/>
          <path d="M -9 -5 C -9 -22 19 -22 19 -5 Z" fill="#f59e0b" stroke="#92400e" stroke-width="0.8"/>
          <circle cx="5" cy="-14" r="1.8" fill="#fef08a"/>
          <circle cx="-2" cy="-10" r="1.5" fill="#fef08a"/>
          <circle cx="12" cy="-10" r="1.5" fill="#fef08a"/>
        </g>

        <!-- Wild Red Strawberry (Center) -->
        <g transform="translate(146, 238)">
          <path d="M -6 0 C -8 -6 8 -6 6 0 C 4 7 0 11 0 11 C 0 11 -4 7 -6 0 Z" fill="#e11d48" stroke="#9f1239" stroke-width="0.6"/>
          <path d="M -5 -4 L 0 -1 L 5 -4 L 3 -7 L 0 -5 L -3 -7 Z" fill="#65a30d"/>
          <circle cx="-2" cy="0" r="0.6" fill="#fef08a"/><circle cx="2" cy="0" r="0.6" fill="#fef08a"/>
          <circle cx="0" cy="4" r="0.6" fill="#fef08a"/><circle cx="-2" cy="6" r="0.5" fill="#fef08a"/>
        </g>

        <!-- Magical Floating Fairy Fireflies -->
        <circle cx="95" cy="115" r="9" fill="url(#fairy_orb)"/>
        <circle cx="95" cy="115" r="1.8" fill="#ffffff"/>
        <circle cx="205" cy="110" r="10" fill="url(#fairy_orb)"/>
        <circle cx="205" cy="110" r="2" fill="#ffffff"/>
        <circle cx="135" cy="85" r="8" fill="url(#fairy_orb)"/>
        <circle cx="135" cy="85" r="1.5" fill="#ffffff"/>
        <circle cx="170" cy="155" r="8.5" fill="url(#fairy_orb)"/>
        <circle cx="170" cy="155" r="1.6" fill="#ffffff"/>
      </g>

      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <defs>
        <filter id="cottage_hand_shadow" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="2.5" stdDeviation="3" flood-color="#451a03" flood-opacity="0.5"/>
        </filter>
      </defs>

      <g filter="url(#cottage_hand_shadow)">
        <!-- Hour Hand: Carved Oak Timber Poire Leaf Hand -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <path d="M 147 150 L 148 92 C 144 88 143 76 150 68 C 157 76 156 88 152 92 L 153 150 Z" fill="#58310c" stroke="#ca8a04" stroke-width="1"/>
          <circle cx="150" cy="80" r="3.2" fill="#fefce8" stroke="#ca8a04" stroke-width="0.8"/>
          <circle cx="150" cy="162" r="4.5" fill="#58310c" stroke="#ca8a04" stroke-width="0.8"/>
        </g>

        <!-- Minute Hand: Elegant Extended Leaf Spear Hand -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <path d="M 148 150 L 148.5 54 C 145 48 145 36 150 28 C 155 36 155 48 151.5 54 L 152 150 Z" fill="#78350f" stroke="#ca8a04" stroke-width="1"/>
          <circle cx="150" cy="42" r="2.8" fill="#fefce8" stroke="#ca8a04" stroke-width="0.8"/>
          <circle cx="150" cy="166" r="4" fill="#78350f" stroke="#ca8a04" stroke-width="0.8"/>
        </g>

        <!-- Second Hand: Slender Rose Thorn Second Needle with Daisy Hub -->
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="172" x2="150" y2="20" stroke="#dc2626" stroke-width="1.6"/>
          <circle cx="150" cy="20" r="3.5" fill="#dc2626" stroke="#ffffff" stroke-width="0.8"/>
          <circle cx="150" cy="150" r="4" fill="#dc2626"/>
        </g>
        ` : ''}

        <!-- Center Cap: Brass Floral Rosette Hub -->
        <circle cx="150" cy="150" r="7.5" fill="#ca8a04" stroke="#451a03" stroke-width="1.2"/>
        <circle cx="150" cy="150" r="4.5" fill="#f59e0b"/>
        <circle cx="150" cy="150" r="1.8" fill="#ffffff"/>
      </g>
    `;
  }
};

