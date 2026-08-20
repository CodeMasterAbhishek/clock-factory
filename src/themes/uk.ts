import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const ukTheme: ClockThemeRenderer = {
  name: 'uk',
  description: 'United Kingdom Union Jack watch with royal blue dial, Big Ben Roman numerals, and Breguet moon hands',
  defaultColors: {
    face: '#012169',
    dialBorder: '#c8102e',
    hourTicks: '#ffffff',
    minuteTicks: '#94a3b8',
    numbers: '#ffffff',
    hourHand: '#ffffff',
    minuteHand: '#ffffff',
    secondHand: '#c8102e',
    accent: '#c8102e',
    centerCap: '#ffffff',
    subdialBg: '#001440'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // Union Jack geometric cross background pattern
    const unionJack = `
      <g stroke="#ffffff" stroke-width="12" opacity="0.85">
        <line x1="30" y1="30" x2="270" y2="270"/>
        <line x1="270" y1="30" x2="30" y2="270"/>
      </g>
      <g stroke="#c8102e" stroke-width="6" opacity="0.9">
        <line x1="30" y1="30" x2="270" y2="270"/>
        <line x1="270" y1="30" x2="30" y2="270"/>
      </g>
      <g stroke="#ffffff" stroke-width="20" opacity="0.9">
        <line x1="150" y1="10" x2="150" y2="290"/>
        <line x1="10" y1="150" x2="290" y2="150"/>
      </g>
      <g stroke="#c8102e" stroke-width="12" opacity="0.95">
        <line x1="150" y1="10" x2="150" y2="290"/>
        <line x1="10" y1="150" x2="290" y2="150"/>
      </g>
    `;

    // Big Ben Style Roman Numerals around dial
    let romanNumerals = '';
    if (options.showNumbers !== false) {
      const romans = ['XII', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X', 'XI'];
      for (let i = 0; i < 12; i++) {
        const rad = (i * 30 - 90) * (Math.PI / 180);
        const rx = 150 + 98 * Math.cos(rad);
        const ry = 150 + 98 * Math.sin(rad) + 5;
        romanNumerals += `<text x="${rx.toFixed(1)}" y="${ry.toFixed(1)}" text-anchor="middle" font-family="'Times New Roman', serif" font-size="14" font-weight="bold" fill="#ffffff" stroke="#001440" stroke-width="1">${romans[i]}</text>`;
      }
    }

    const labelText = options.label || 'UK · EUROPE/LONDON';

    return `
      
      <!-- Royal Bezel & Union Jack Dial -->
      <circle cx="150" cy="150" r="147" fill="#001440" stroke="#c8102e" stroke-width="4"/>
      <circle cx="150" cy="150" r="139" fill="${colors.face}" stroke="#ffffff" stroke-width="1.5"/>

      <!-- Union Jack Graphic Base -->
      <g class="union-jack-bg">${unionJack}</g>
      <circle cx="150" cy="150" r="139" fill="none" stroke="#001440" stroke-width="3"/>

      <!-- Chapter Ring for Numerals -->
      <circle cx="150" cy="150" r="114" fill="none" stroke="#ffffff" stroke-width="1.5"/>
      <circle cx="150" cy="150" r="82" fill="#001440" stroke="#ffffff" stroke-width="2" opacity="0.95"/>

      <!-- Roman Numerals -->
      <g class="romans">${romanNumerals}</g>

      <!-- High-Visibility Label Inscriptions -->
      <text x="150" y="106" text-anchor="middle" font-family="'Times New Roman', serif" font-size="11" font-weight="bold" fill="#ffffff" stroke="#001440" stroke-width="0.8" letter-spacing="2">ROYAL OBSERVATORY</text>
      <text x="150" y="200" text-anchor="middle" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="800" fill="#ffffff" stroke="#001440" stroke-width="0.5" letter-spacing="1.5">${labelText}</text>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Breguet Moon Hand) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <line x1="150" y1="78" x2="150" y2="150" stroke="#ffffff" stroke-width="3" filter="url(#drop-shadow)"/>
        <circle cx="150" cy="95" r="7.5" fill="none" stroke="#ffffff" stroke-width="2.2"/>
      </g>
      
      <!-- Minute Hand (Breguet Moon Hand) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <line x1="150" y1="42" x2="150" y2="150" stroke="#ffffff" stroke-width="2.5" filter="url(#drop-shadow)"/>
        <circle cx="150" cy="62" r="6.5" fill="none" stroke="#ffffff" stroke-width="2"/>
      </g>
      
      ${showSeconds ? `
      <!-- St George Red Second Hand -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="18" x2="150" y2="182" stroke="${colors.secondHand}" stroke-width="2"/>
        <circle cx="150" cy="168" r="4.5" fill="#c8102e" stroke="#ffffff" stroke-width="1"/>
      </g>
      ` : ''}
      
      <!-- Center Royal Hub -->
      <circle cx="150" cy="150" r="7.5" fill="#001440" stroke="#c8102e" stroke-width="2"/>
      <circle cx="150" cy="150" r="3" fill="#ffffff"/>
    
    `;
  }
};
