import { ClockThemeRenderer, ThemeColors, ClockOptions, TimeData } from '../types';

export const nekoTheme: ClockThemeRenderer = {
  name: 'neko',
  description: 'Kawaii cat clock with feline ears, whiskers, and paw print hour markers',
  defaultColors: {
    face: '#fff7ed',
    dialBorder: '#f97316',
    hourTicks: '#ea580c',
    minuteTicks: '#fdba74',
    numbers: '#9a3412',
    hourHand: '#7c2d12',
    minuteHand: '#9a3412',
    secondHand: '#f97316',
    accent: '#f97316',
    centerCap: '#f97316'
  },
  renderDial(options: ClockOptions, colors: ThemeColors, _time: TimeData): string {
    // 12 Paw Print Ticks
    let pawTicks = '';
    for (let i = 0; i < 12; i++) {
      const angle = i * 30;
      const isCard = i % 3 === 0;
      if (isCard) {
        // Little Cat Paw
        pawTicks += `
          <g transform="rotate(${angle} 150 150) translate(150, 48)">
            <ellipse cx="0" cy="2" rx="3.5" ry="2.8" fill="${colors.hourTicks}"/>
            <circle cx="-3" cy="-2.5" r="1.3" fill="${colors.hourTicks}"/>
            <circle cx="0" cy="-3.5" r="1.3" fill="${colors.hourTicks}"/>
            <circle cx="3" cy="-2.5" r="1.3" fill="${colors.hourTicks}"/>
          </g>
        `;
      } else {
        pawTicks += `<circle cx="150" cy="48" r="2" fill="${colors.minuteTicks}" transform="rotate(${angle} 150 150)"/>`;
      }
    }

    return `
      
      <!-- Cat Ears (Left & Right) -->
      <polygon points="50,110 85,25 115,80" fill="#f97316" stroke="#c2410c" stroke-width="3.5"/>
      <polygon points="62,95 85,42 105,75" fill="#fed7aa"/>
      <polygon points="250,110 215,25 185,80" fill="#f97316" stroke="#c2410c" stroke-width="3.5"/>
      <polygon points="238,95 215,42 195,75" fill="#fed7aa"/>

      <!-- Main Cat Head Outer Bezel -->
      <circle cx="150" cy="150" r="120" fill="#ffedd5" stroke="#ea580c" stroke-width="4"/>
      <circle cx="150" cy="150" r="108" fill="${colors.face}" stroke="#fed7aa" stroke-width="2"/>

      <!-- Cute Cat Nose & Whiskers -->
      <polygon points="146,155 154,155 150,160" fill="#f97316"/>
      <path d="M 146,160 Q 148,164 150,160 Q 152,164 154,160" fill="none" stroke="#7c2d12" stroke-width="1.5"/>
      <!-- Left Whiskers -->
      <line x1="85" y1="152" x2="120" y2="156" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="82" y1="162" x2="118" y2="162" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round"/>
      <!-- Right Whiskers -->
      <line x1="215" y1="152" x2="180" y2="156" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round"/>
      <line x1="218" y1="162" x2="182" y2="162" stroke="#ea580c" stroke-width="1.8" stroke-linecap="round"/>

      <!-- Paw Ticks -->
      <g class="paw-ticks">${pawTicks}</g>
    `;
  },
  renderHands(options: ClockOptions, colors: ThemeColors, time: TimeData): string {
    // High-contrast hand container with drop-shadow
    const showSeconds = options.showSeconds !== false;
    return `
      <!-- Hour Hand (Rounded Cat Paw Hand) -->
      <g class="hand hour-hand" transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146" y="85" width="8" height="70" rx="4" fill="${colors.hourHand}"/>
        <circle cx="150" cy="90" r="2" fill="#fed7aa"/>
      </g>
      
      <!-- Minute Hand (Rounded Cat Hand) -->
      <g class="hand minute-hand" transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="147" y="60" width="6" height="98" rx="3" fill="${colors.minuteHand}"/>
      </g>
      
      ${showSeconds ? `
      <!-- Second Hand with Fish / Cat Tail Tip -->
      <g class="hand second-hand" transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="48" x2="150" y2="170" stroke="${colors.secondHand}" stroke-width="1.8" stroke-linecap="round"/>
        <!-- Fish Cracker Icon on Tip -->
        <ellipse cx="150" cy="50" rx="5" ry="3" fill="${colors.secondHand}"/>
        <polygon points="155,50 159,47 159,53" fill="${colors.secondHand}"/>
      </g>
      ` : ''}
      
      <!-- Center Hub -->
      <circle cx="150" cy="150" r="5.5" fill="${colors.accent}"/>
      <circle cx="150" cy="150" r="2.5" fill="#ffffff"/>
    
    `;
  }
};
