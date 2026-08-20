import { AnalogClock } from './AnalogClock';
import { ClockOptions } from './types';
import { 
  registerTheme, 
  getTheme, 
  getAvailableThemes, 
  builtInThemes,
  swissTheme,
  cyberpunkTheme,
  neumorphicTheme,
  classicTheme,
  luxuryTheme,
  hybridTheme,
  minimalTheme,
  diverTheme,
  synthwaveTheme,
  pilotTheme,
  matrixTheme,
  galaxyTheme,
  racingTheme,
  vintageTheme,
  glassmorphismTheme,
  kawaiiTheme,
  pixelFarmTheme,
  cottagecoreTheme,
  nekoTheme,
  gshockTheme,
  chronographTheme,
  regattaTheme,
  alpinistTheme,
  triathlonTheme,
  indiaTheme,
  japanTheme,
  usaTheme,
  ukTheme,
  brazilTheme,
  germanyTheme,
  franceTheme,
  italyTheme,
  australiaTheme,
  canadaTheme,
  spainTheme,
  southKoreaTheme,
  switzerlandTheme,
  mexicoTheme,
  argentinaTheme,
  egyptTheme,
  swedenTheme,
  southAfricaTheme,
  uaeTheme,
  russiaTheme,
  israelTheme,
  singaporeTheme,
  netherlandsTheme,
  greeceTheme,
  newZealandTheme,
  vietnamTheme,
  thailandTheme,
  norwayTheme,
  indonesiaTheme,
  minecraftTheme,
  zeldaTheme,
  pokemonTheme,
  gtaTheme,
  marioTheme,
  cyberpunk2077Theme,
  haloTheme,
  godOfWarTheme,
  valorantTheme,
  eldenRingTheme,
  fortniteTheme,
  pacmanTheme,
  sonicTheme,
  tetrisTheme,
  assassinsCreedTheme,
  leagueOfLegendsTheme,
  overwatchTheme,
  skyrimTheme,
  robloxTheme,
  hollowKnightTheme,
  falloutTheme,
  darkSoulsTheme,
  redDeadTheme,
  counterStrikeTheme,
  worldOfWarcraftTheme
} from './themes';
import { getTimeData } from './engine/time';
import { renderClockSVG } from './engine/renderer';

// Auto-register custom element if in a browser environment
if (typeof window !== 'undefined' && typeof customElements !== 'undefined') {
  if (!customElements.get('analog-clock')) {
    customElements.define('analog-clock', AnalogClock);
  }
}

/**
 * Programmatic helper to create and mount an analog clock to any DOM element.
 */
export function createClock(target: HTMLElement | string, options: ClockOptions = {}): AnalogClock {
  const container = typeof target === 'string' 
    ? document.querySelector<HTMLElement>(target) 
    : target;

  if (!container) {
    throw new Error(`[clock-factory] Target container "${target}" not found.`);
  }

  const clock = document.createElement('analog-clock') as AnalogClock;

  if (options.theme) clock.setAttribute('theme', options.theme);
  if (options.timezone) clock.setAttribute('timezone', options.timezone);
  if (options.smooth !== undefined) clock.setAttribute('smooth', String(options.smooth));
  if (options.size) clock.setAttribute('size', options.size);
  if (options.accentColor) clock.setAttribute('accent-color', options.accentColor);
  if (options.faceColor) clock.setAttribute('face-color', options.faceColor);
  if (options.handColor) clock.setAttribute('hand-color', options.handColor);
  if (options.showSeconds !== undefined) clock.setAttribute('show-seconds', String(options.showSeconds));
  if (options.showNumbers !== undefined) clock.setAttribute('show-numbers', String(options.showNumbers));
  if (options.showTicks !== undefined) clock.setAttribute('show-ticks', String(options.showTicks));
  if (options.label) clock.setAttribute('label', options.label);

  container.appendChild(clock);
  return clock;
}

// Named exports
export {
  AnalogClock,
  registerTheme,
  getTheme,
  getAvailableThemes,
  builtInThemes,
  swissTheme,
  cyberpunkTheme,
  neumorphicTheme,
  classicTheme,
  luxuryTheme,
  hybridTheme,
  minimalTheme,
  diverTheme,
  synthwaveTheme,
  pilotTheme,
  matrixTheme,
  galaxyTheme,
  racingTheme,
  vintageTheme,
  glassmorphismTheme,
  kawaiiTheme,
  pixelFarmTheme,
  cottagecoreTheme,
  nekoTheme,
  gshockTheme,
  chronographTheme,
  regattaTheme,
  alpinistTheme,
  triathlonTheme,
  indiaTheme,
  japanTheme,
  usaTheme,
  ukTheme,
  brazilTheme,
  germanyTheme,
  franceTheme,
  italyTheme,
  australiaTheme,
  canadaTheme,
  spainTheme,
  southKoreaTheme,
  switzerlandTheme,
  mexicoTheme,
  argentinaTheme,
  egyptTheme,
  swedenTheme,
  southAfricaTheme,
  uaeTheme,
  russiaTheme,
  israelTheme,
  singaporeTheme,
  netherlandsTheme,
  greeceTheme,
  newZealandTheme,
  vietnamTheme,
  thailandTheme,
  norwayTheme,
  indonesiaTheme,
  minecraftTheme,
  zeldaTheme,
  pokemonTheme,
  gtaTheme,
  marioTheme,
  cyberpunk2077Theme,
  haloTheme,
  godOfWarTheme,
  valorantTheme,
  eldenRingTheme,
  fortniteTheme,
  pacmanTheme,
  sonicTheme,
  tetrisTheme,
  assassinsCreedTheme,
  leagueOfLegendsTheme,
  overwatchTheme,
  skyrimTheme,
  robloxTheme,
  hollowKnightTheme,
  falloutTheme,
  darkSoulsTheme,
  redDeadTheme,
  counterStrikeTheme,
  worldOfWarcraftTheme,
  getTimeData,
  renderClockSVG
};

// Export all types
export * from './types';

// Default export
export default AnalogClock;
