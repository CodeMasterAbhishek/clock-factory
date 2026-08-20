import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const santoriniTheme: ClockThemeRenderer = {
  name: 'santorini',
  description: 'Iconic whitewashed Cycladic cliffside village of Oia overlooking the cobalt Aegean Sea caldera with cobalt blue church domes, bell towers, and blooming bougainvillea',
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
        <clipPath id="santorini_dial_clip"><circle cx="150" cy="150" r="145"/></clipPath>
        <!-- Aegean Sea & Sky Gradients -->
        <linearGradient id="aegean_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#0284c7"/>
          <stop offset="40%" stop-color="#38bdf8"/>
          <stop offset="75%" stop-color="#7dd3fc"/>
          <stop offset="100%" stop-color="#bae6fd"/>
        </linearGradient>
        <linearGradient id="dome_blue" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#38bdf8"/>
          <stop offset="35%" stop-color="#0284c7"/>
          <stop offset="85%" stop-color="#0369a1"/>
          <stop offset="100%" stop-color="#075985"/>
        </linearGradient>
        <linearGradient id="whitewash" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#f8fafc"/>
          <stop offset="50%" stop-color="#ffffff"/>
          <stop offset="100%" stop-color="#e2e8f0"/>
        </linearGradient>
        <linearGradient id="caldera_cliff" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#9a3412"/>
          <stop offset="40%" stop-color="#78350f"/>
          <stop offset="80%" stop-color="#451a03"/>
          <stop offset="100%" stop-color="#291002"/>
        </linearGradient>
        <filter id="hand_shadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.6"/>
        </filter>
      </defs>

      <!-- Outer Dial Border -->
      <circle cx="150" cy="150" r="145" fill="url(#aegean_sky)" stroke="#0284c7" stroke-width="2.5"/>

      <g clip-path="url(#santorini_dial_clip)">
        <!-- Deep Cobalt Aegean Sea Caldera (Base: y=210..300) -->
        <path d="M 0 210 Q 150 200 300 210 L 300 300 L 0 300 Z" fill="#0369a1"/>
        <path d="M 0 235 Q 150 225 300 235 L 300 300 L 0 300 Z" fill="#082f49"/>
        <!-- Shimmering Sunlight Ripples on Sea -->
        <g stroke="#38bdf8" stroke-width="1.2" fill="none" opacity="0.6">
          <line x1="35" y1="245" x2="85" y2="245"/>
          <line x1="160" y1="248" x2="225" y2="248"/>
          <line x1="95" y1="265" x2="185" y2="265"/>
        </g>

        <!-- Volcanic Caldera Cliff Base (Solid Grounded Terraces: y=165..280) -->
        <path d="M 0 170 Q 150 155 300 170 L 300 270 L 0 270 Z" fill="url(#caldera_cliff)"/>
        <path d="M 0 205 Q 150 195 300 205 L 300 270 L 0 270 Z" fill="#451a03"/>
        <line x1="0" y1="180" x2="300" y2="180" stroke="#9a3412" stroke-width="1.2" opacity="0.6"/>
        <line x1="0" y1="215" x2="300" y2="215" stroke="#78350f" stroke-width="1.5" opacity="0.6"/>

        <!-- Stepped Whitewashed Cycladic Village Architecture (Oia, Santorini) -->

        <!-- 1. Left Church Complex with Cobalt Blue Dome -->
        <g>
          <!-- Main White Church Wall (Extending into Cliff Base at y=235) -->
          <path d="M 28 140 L 95 140 L 95 235 L 28 235 Z" fill="url(#whitewash)" stroke="#cbd5e1" stroke-width="0.8"/>
          <!-- Arched Blue Entrance Door -->
          <path d="M 52 235 L 52 205 A 10 10 0 0 1 72 205 L 72 235 Z" fill="#0284c7"/>
          <!-- Arched Windows -->
          <rect x="36" y="165" width="8" height="14" rx="2" fill="#0284c7"/>
          <rect x="78" y="165" width="8" height="14" rx="2" fill="#0284c7"/>
          
          <!-- Left Cobalt Blue Church Dome -->
          <path d="M 28 140 A 33.5 33.5 0 0 1 95 140 Z" fill="url(#dome_blue)" stroke="#0369a1" stroke-width="1.2"/>
          <!-- Golden Cross Finial -->
          <line x1="61.5" y1="100" x2="61.5" y2="112" stroke="#f59e0b" stroke-width="2"/>
          <line x1="56" y1="105" x2="67" y2="105" stroke="#f59e0b" stroke-width="2"/>
        </g>

        <!-- 2. Center Grand Cathedral Dome & Villa Terraces -->
        <g>
          <!-- Central Villa Building Block -->
          <path d="M 90 148 L 210 148 L 210 235 L 90 235 Z" fill="url(#whitewash)" stroke="#cbd5e1" stroke-width="0.8"/>
          <!-- Stepped Terraces & Stairs -->
          <polygon points="90,235 120,195 120,235" fill="#e2e8f0"/>
          
          <!-- Grand Cathedral Blue Dome -->
          <path d="M 125 138 A 42 42 0 0 1 209 138 Z" fill="url(#dome_blue)" stroke="#0369a1" stroke-width="1.5"/>
          <line x1="167" y1="90" x2="167" y2="102" stroke="#f59e0b" stroke-width="2"/>
          <line x1="161" y1="94" x2="173" y2="94" stroke="#f59e0b" stroke-width="2"/>

          <!-- Cathedral Arched Windows -->
          <path d="M 142 185 L 142 165 A 6 6 0 0 1 154 165 L 154 185 Z" fill="#0284c7"/>
          <path d="M 180 185 L 180 165 A 6 6 0 0 1 192 165 L 192 185 Z" fill="#0284c7"/>
        </g>

        <!-- 3. Right Flank: Authentic Cycladic Blue-Domed Chapel & 3-Tier Bell Tower -->
        <g>
          <!-- Right Chapel Villa Wall -->
          <path d="M 205 145 L 275 145 L 275 245 L 205 245 Z" fill="url(#whitewash)" stroke="#cbd5e1" stroke-width="0.8"/>
          <!-- Terracotta Balcony Ledge -->
          <rect x="200" y="195" width="78" height="6" fill="#c2410c"/>
          
          <!-- RIGHT COBALT BLUE DOME (Crowns the right chapel) -->
          <path d="M 215 145 A 25 25 0 0 1 265 145 Z" fill="url(#dome_blue)" stroke="#0369a1" stroke-width="1.2"/>
          <line x1="240" y1="114" x2="240" y2="124" stroke="#f59e0b" stroke-width="1.8"/>
          <line x1="235" y1="118" x2="245" y2="118" stroke="#f59e0b" stroke-width="1.8"/>

          <!-- Iconic 3-Arch Bell Tower Gables on Terrace -->
          <path d="M 214 175 L 214 160 A 5 5 0 0 1 224 160 L 224 175 Z" fill="#075985"/>
          <circle cx="219" cy="168" r="2.5" fill="#d97706"/>
          <path d="M 232 175 L 232 160 A 5 5 0 0 1 242 160 L 242 175 Z" fill="#075985"/>
          <circle cx="237" cy="168" r="2.5" fill="#d97706"/>
          <path d="M 250 175 L 250 160 A 5 5 0 0 1 260 160 L 260 175 Z" fill="#075985"/>
          <circle cx="255" cy="168" r="2.5" fill="#d97706"/>
        </g>

        <!-- Cascading Hot Pink Bougainvillea Climbing up Villa Walls -->
        <g>
          <!-- Left Villa Bougainvillea Vine -->
          <path d="M 24 150 Q 20 185 26 215 Q 32 230 26 245" stroke="#15803d" stroke-width="2.5" fill="none"/>
          <g fill="#ec4899">
            <circle cx="22" cy="155" r="4"/><circle cx="28" cy="162" r="4.5"/><circle cx="20" cy="172" r="4"/><circle cx="26" cy="182" r="4.5"/>
            <circle cx="30" cy="195" r="4"/><circle cx="24" cy="208" r="4.5"/><circle cx="28" cy="220" r="4"/><circle cx="24" cy="235" r="4.5"/>
          </g>
          <g fill="#f43f5e">
            <circle cx="24" cy="158" r="2.5"/><circle cx="22" cy="175" r="2.5"/><circle cx="26" cy="200" r="2.5"/><circle cx="26" cy="225" r="2.5"/>
          </g>

          <!-- Right Villa Bougainvillea Vine -->
          <path d="M 276 160 Q 282 185 275 215 Q 270 230 276 245" stroke="#15803d" stroke-width="2.5" fill="none"/>
          <g fill="#ec4899">
            <circle cx="278" cy="165" r="4.5"/><circle cx="272" cy="175" r="4"/><circle cx="280" cy="188" r="4.5"/><circle cx="272" cy="200" r="4"/>
            <circle cx="278" cy="215" r="4.5"/><circle cx="272" cy="228" r="4"/><circle cx="278" cy="240" r="4.5"/>
          </g>
          <g fill="#f43f5e">
            <circle cx="276" cy="170" r="2.5"/><circle cx="276" cy="192" r="2.5"/><circle cx="274" cy="220" r="2.5"/>
          </g>
        </g>
      </g>
    
      <g class="ticks">${ticks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    return `
      <g filter="url(#hand_shadow)">
        <g transform="rotate(${time.hourAngle} 150 150)">
          <polygon points="146,150 154,150 150,75" fill="#0369a1" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="80" stroke="#38bdf8" stroke-width="2.5" stroke-linecap="round"/>
          <circle cx="150" cy="75" r="3.5" fill="#ffffff"/>
        </g>
        <g transform="rotate(${time.minuteAngle} 150 150)">
          <polygon points="147,150 153,150 150,35" fill="#0284c7" stroke="#ffffff" stroke-width="1.2"/>
          <line x1="150" y1="140" x2="150" y2="42" stroke="#7dd3fc" stroke-width="2" stroke-linecap="round"/>
          <circle cx="150" cy="35" r="2.5" fill="#ffffff"/>
        </g>
        ${options.showSeconds !== false ? `
        <g transform="rotate(${time.secondAngle} 150 150)">
          <line x1="150" y1="165" x2="150" y2="18" stroke="#ec4899" stroke-width="1.8"/>
          <circle cx="150" cy="18" r="3.5" fill="#ec4899" stroke="#ffffff" stroke-width="1"/>
          <circle cx="150" cy="150" r="3" fill="#ec4899"/>
        </g>
        ` : ''}
        <circle cx="150" cy="150" r="5.5" fill="#0369a1" stroke="#ffffff" stroke-width="1.5"/>
        <circle cx="150" cy="150" r="2" fill="#38bdf8"/>
      </g>
    `;
  }
};
