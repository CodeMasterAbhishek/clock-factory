import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const indiaTheme: ClockThemeRenderer = {
  name: 'india',
  description: 'Grand Bharat Luxury Commemorative Watch with guilloché sunray dial, 24-spoke Ashoka Chakra, faceted Dauphine hands, and Tricolor chapter ring',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#d97706',
    hourTicks: '#000080',
    minuteTicks: '#138808',
    numbers: '#000080',
    hourHand: '#000080',
    minuteHand: '#000080',
    secondHand: '#ff9933',
    accent: '#000080',
    centerCap: '#000080',
    subdialBg: '#f8fafc'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 24 Guilloché Spokes of the Ashoka Dharma Chakra
    let chakraSpokes = '';
    for (let i = 0; i < 24; i++) {
      const angle = i * 15;
      chakraSpokes += `
        <g transform="rotate(${angle} 150 150)">
          <!-- Tapered Chakra Spoke -->
          <polygon points="149.2,150 150.8,150 150,116" fill="#000080"/>
          <!-- Outer Spoke Beaded Tip -->
          <circle cx="150" cy="116" r="1.4" fill="#000080"/>
        </g>
      `;
    }

    // 60-Minute Precision Railway Track with Faceted Applied Indices
    let minuteRailway = '';
    for (let i = 0; i < 60; i++) {
      const angle = i * 6;
      if (i % 5 !== 0) {
        minuteRailway += `<line x1="150" y1="18" x2="150" y2="23" stroke="#64748b" stroke-width="0.9" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    // 12 Faceted Applied Royal Navy & Gold Hour Indices
    let hourMarkers = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      if (i === 0) {
        // 12 O'Clock Double Master Baton with Saffron Ruby Pip
        hourMarkers += `
          <g transform="rotate(0 150 150)">
            <rect x="144" y="16" width="4.5" height="16" rx="1" fill="#000080" stroke="#d97706" stroke-width="0.8"/>
            <rect x="151.5" y="16" width="4.5" height="16" rx="1" fill="#000080" stroke="#d97706" stroke-width="0.8"/>
            <circle cx="150" cy="38" r="2.5" fill="#ff9933" stroke="#000080" stroke-width="0.8"/>
          </g>
        `;
      } else if (i === 3 || i === 9) {
        hourMarkers += `
          <g transform="rotate(${angle} 150 150)">
            <rect x="147.5" y="16" width="5" height="15" rx="1" fill="#000080" stroke="#d97706" stroke-width="0.8"/>
            <polygon points="148,16 150,30 152,16" fill="#1e40af"/>
          </g>
        `;
      } else if (i === 6) {
        // 6 O'Clock Index with India Green Pip
        hourMarkers += `
          <g transform="rotate(180 150 150)">
            <rect x="147.5" y="16" width="5" height="15" rx="1" fill="#000080" stroke="#d97706" stroke-width="0.8"/>
            <circle cx="150" cy="38" r="2.5" fill="#138808" stroke="#000080" stroke-width="0.8"/>
          </g>
        `;
      } else {
        hourMarkers += `
          <g transform="rotate(${angle} 150 150)">
            <rect x="148" y="16" width="4" height="14" rx="1" fill="#000080" stroke="#cbd5e1" stroke-width="0.6"/>
            <polygon points="148.5,16 150,29 151.5,16" fill="#3b82f6"/>
          </g>
        `;
      }
    }

    // 48 Fine Sunburst Guilloché Radial Lines
    let guillocheRays = '';
    for (let i = 0; i < 48; i++) {
      const angle = (i * 360) / 48;
      guillocheRays += `<line x1="150" y1="150" x2="150" y2="24" stroke="#e2e8f0" stroke-width="0.5" transform="rotate(${angle} 150 150)"/>`;
    }

    return `
      <defs>
        <clipPath id="india_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Polished Surgical Steel Case Bezel -->
        <linearGradient id="steel_bezel" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="30%" stop-color="#cbd5e1"/>
          <stop offset="50%" stop-color="#94a3b8"/>
          <stop offset="70%" stop-color="#e2e8f0"/>
          <stop offset="100%" stop-color="#475569"/>
        </linearGradient>
        <!-- Royal Gold Ring -->
        <linearGradient id="gold_trim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fef08a"/>
          <stop offset="50%" stop-color="#d97706"/>
          <stop offset="100%" stop-color="#92400e"/>
        </linearGradient>
        <!-- Ivory Sunray Dial Base -->
        <radialGradient id="sunray_dial" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#ffffff"/>
          <stop offset="65%" stop-color="#fafafa"/>
          <stop offset="100%" stop-color="#f1f5f9"/>
        </radialGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.5"/>
        </filter>
      </defs>

      <!-- Luxury Stepped Bezel & Gold Accent Ring -->
      <circle cx="150" cy="150" r="148" fill="url(#steel_bezel)" stroke="#334155" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="143" fill="none" stroke="url(#gold_trim)" stroke-width="2"/>
      <circle cx="150" cy="150" r="140" fill="url(#sunray_dial)" stroke="#000080" stroke-width="1"/>

      <g clip-path="url(#india_dial_clip)">
        <!-- Elegant Tricolor Outer Chapter Ring Track -->
        <!-- Top Half: Saffron Arc (180° span from 9 to 3 o'clock) -->
        <path d="M 12 150 A 138 138 0 0 1 288 150" fill="none" stroke="#ff9933" stroke-width="4.5" stroke-linecap="round"/>
        <!-- Bottom Half: India Green Arc (180° span from 3 to 9 o'clock) -->
        <path d="M 288 150 A 138 138 0 0 1 12 150" fill="none" stroke="#138808" stroke-width="4.5" stroke-linecap="round"/>

        <!-- Concentric Engine-Turned Guilloché Rings -->
        <circle cx="150" cy="150" r="132" fill="none" stroke="#cbd5e1" stroke-width="0.8"/>
        <circle cx="150" cy="150" r="115" fill="none" stroke="#e2e8f0" stroke-width="0.8" stroke-dasharray="1 3"/>
        <circle cx="150" cy="150" r="60" fill="none" stroke="#e2e8f0" stroke-width="0.8"/>

        <!-- Sunburst Guilloché Texture Rays -->
        <g opacity="0.6">${guillocheRays}</g>

        <!-- Ashoka Dharma Chakra Medallion in Center (Fine 24-Spoke Masterpiece) -->
        <!-- Chakra Outer Gold & Navy Track -->
        <circle cx="150" cy="150" r="36" fill="#f8fafc" stroke="#000080" stroke-width="2" opacity="0.95"/>
        <circle cx="150" cy="150" r="33.5" fill="none" stroke="#d97706" stroke-width="0.8"/>
        <!-- 24 Spokes -->
        <g class="ashoka-spokes">${chakraSpokes}</g>
        <!-- Chakra Inner Hub Core -->
        <circle cx="150" cy="150" r="9" fill="#f8fafc" stroke="#000080" stroke-width="1.8"/>
        <circle cx="150" cy="150" r="4.5" fill="#000080"/>

        <!-- Luxury Dial Inscriptions -->
        <!-- Brand / Nation Tribute Header -->
        <text x="150" y="82" text-anchor="middle" font-family="'Georgia', serif" font-size="12" font-weight="900" fill="#000080" letter-spacing="3">BHARAT</text>
        <text x="150" y="96" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="7.5" font-weight="800" fill="#d97706" letter-spacing="2">सत्यमेव जयते</text>

        <!-- Lower Inscriptions -->
        <text x="150" y="208" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="7" font-weight="800" fill="#138808" letter-spacing="2">CHRONOMETER</text>
        <text x="150" y="220" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="6" font-weight="700" fill="#64748b" letter-spacing="1.5">INDIA • 1947</text>

        <!-- 60-Minute Railway Markers -->
        <g>${minuteRailway}</g>

        <!-- 12 Applied Royal Navy & Gold Indices -->
        <g class="indices">${hourMarkers}</g>
      </g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    const showSeconds = options.showSeconds !== false;
    return `
      <g filter="url(#hand_shadow)">
        <!-- Royal Navy Dauphine Hour Hand (Dual-Faceted Bevel) -->
        <g transform="rotate(${time.hourAngle} 150 150)">
          <!-- Left Facet (Reflective Navy) -->
          <polygon points="150,152 144,142 145.5,74 150,68" fill="#1e3a8a" stroke="#000080" stroke-width="0.8"/>
          <!-- Right Facet (Deep Navy Shadow) -->
          <polygon points="150,152 156,142 154.5,74 150,68" fill="#000080" stroke="#000080" stroke-width="0.8"/>
          <!-- Central Luminous Strip -->
          <line x1="150" y1="135" x2="150" y2="76" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
        </g>
        
        <!-- Royal Navy Dauphine Minute Hand (Dual-Faceted Bevel) -->
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <!-- Left Facet -->
          <polygon points="150,154 144.5,142 146.5,38 150,30" fill="#1e3a8a" stroke="#000080" stroke-width="0.8"/>
          <!-- Right Facet -->
          <polygon points="150,154 155.5,142 153.5,38 150,30" fill="#000080" stroke="#000080" stroke-width="0.8"/>
          <!-- Central Luminous Strip -->
          <line x1="150" y1="135" x2="150" y2="40" stroke="#ffffff" stroke-width="1.2" stroke-linecap="round"/>
        </g>
        
        ${showSeconds ? `
        <!-- High-Precision Saffron Second Hand with Open Chakra Counterweight -->
        <g transform="rotate(${time.secondAngle} 150 150)">
          <!-- Slender Saffron Needle -->
          <line x1="150" y1="182" x2="150" y2="16" stroke="#ff9933" stroke-width="1.8"/>
          <!-- Saffron Arrow Head -->
          <polygon points="148,22 152,22 150,14" fill="#ff9933"/>
          <!-- Open Ring Counterweight with Blue Center -->
          <circle cx="150" cy="165" r="4.5" fill="none" stroke="#ff9933" stroke-width="1.5"/>
          <circle cx="150" cy="165" r="2" fill="#000080"/>
        </g>
        ` : ''}
        
        <!-- Center Gold & Royal Navy Multi-Tier Cap -->
        <circle cx="150" cy="150" r="7" fill="#000080" stroke="#d97706" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="3.5" fill="#ff9933"/>
      </g>
    `;
  }
};
