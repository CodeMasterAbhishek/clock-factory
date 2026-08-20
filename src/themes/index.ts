import { ClockThemeRenderer } from '../types';

// Sports
import { cricket_stadiumTheme } from './cricket_stadium';
import { american_footballTheme } from './american_football';
import { badminton_shuttleTheme } from './badminton_shuttle';
import { cycling_velodromeTheme } from './cycling_velodrome';
import { archery_targetTheme } from './archery_target';
import { scuba_divingTheme } from './scuba_diving';
import { basketballTheme } from './basketball';
import { football_soccerTheme } from './football_soccer';
import { tennis_slamTheme } from './tennis_slam';
import { formula1_racingTheme } from './formula1_racing';
import { golf_linksTheme } from './golf_links';
import { boxing_ringTheme } from './boxing_ring';
import { snowboarding_winterTheme } from './snowboarding_winter';
import { skateboarding_streetTheme } from './skateboarding_street';
import { baseball_diamondTheme } from './baseball_diamond';
import { surfing_pipelineTheme } from './surfing_pipeline';

// Nature & Atmospheric
import { cherry_blossomTheme } from './cherry_blossom';
import { firefly_meadowTheme } from './firefly_meadow';
import { glacier_fjordTheme } from './glacier_fjord';
import { rainforest_canopyTheme } from './rainforest_canopy';
import { desert_dunesTheme } from './desert_dunes';
import { crystal_caveTheme } from './crystal_cave';
import { monarch_migrationTheme } from './monarch_migration';
import { ocean_bioluminescenceTheme } from './ocean_bioluminescence';
import { autumn_forestTheme } from './autumn_forest';
import { thunderstorm_cloudTheme } from './thunderstorm_cloud';

// Places & Architecture
import { fujiTheme } from './fuji';
import { santoriniTheme } from './santorini';
import { aurora_tromsoTheme } from './aurora_tromso';
import { pyramidsTheme } from './pyramids';
import { taj_mahalTheme } from './taj_mahal';
import { eiffel_towerTheme } from './eiffel_tower';
import { machu_picchuTheme } from './machu_picchu';
import { grand_canyonTheme } from './grand_canyon';
import { veniceTheme } from './venice';
import { maldivesTheme } from './maldives';

// Planets & Astronomy
import { earth_planetTheme } from './earth_planet';
import { mars_planetTheme } from './mars_planet';
import { jupiter_planetTheme } from './jupiter_planet';
import { saturn_planetTheme } from './saturn_planet';
import { neptune_planetTheme } from './neptune_planet';
import { moon_lunarTheme } from './moon_lunar';
import { sun_fusionTheme } from './sun_fusion';
import { venus_planetTheme } from './venus_planet';
import { uranus_planetTheme } from './uranus_planet';
import { mercury_planetTheme } from './mercury_planet';

// Botanical & Natural Elements
import { terrariumTheme } from './terrarium';
import { coral_reefTheme } from './coral_reef';
import { dandelionTheme } from './dandelion';
import { mountain_sunriseTheme } from './mountain_sunrise';
import { bamboo_zenTheme } from './bamboo_zen';
import { auroraTheme } from './aurora';
import { geodeTheme } from './geode';
import { waterfallTheme } from './waterfall';
import { bonsaiTheme } from './bonsai';
import { volcanoTheme } from './volcano';
import { tree_ringsTheme } from './tree_rings';
import { sunflowerTheme } from './sunflower';
import { lotusTheme } from './lotus';
import { forestTheme } from './forest';
import { mushroomTheme } from './mushroom';
import { cactusTheme } from './cactus';
import { oceanTheme } from './ocean';
import { monsteraTheme } from './monstera';
import { hiveTheme } from './hive';
import { autumnTheme } from './autumn';

// Sci-Fi & Cyber
import { radarTheme } from './radar';
import { alienTheme } from './alien';
import { warpTheme } from './warp';
import { holoTheme } from './holo';
import { mechaTheme } from './mecha';
import { timemachineTheme } from './timemachine';
import { starshipTheme } from './starship';
import { cyberdeckTheme } from './cyberdeck';
import { quantumTheme } from './quantum';

// Kawaii & Character Clocks
import { owlTheme } from './owl';
import { penguinTheme } from './penguin';
import { sunTheme } from './sun';

// Horology & Professional Watches
import { gshockTheme } from './gshock';
import { chronographTheme } from './chronograph';
import { regattaTheme } from './regatta';
import { alpinistTheme } from './alpinist';
import { triathlonTheme } from './triathlon';

// World / National Themes
import { indiaTheme } from './india';
import { japanTheme } from './japan';
import { usaTheme } from './usa';
import { ukTheme } from './uk';
import { brazilTheme } from './brazil';
import { germanyTheme } from './germany';
import { franceTheme } from './france';
import { italyTheme } from './italy';
import { australiaTheme } from './australia';
import { canadaTheme } from './canada';
import { spainTheme } from './spain';
import { southKoreaTheme } from './southKorea';
import { switzerlandTheme } from './switzerland';
import { mexicoTheme } from './mexico';
import { argentinaTheme } from './argentina';
import { egyptTheme } from './egypt';
import { swedenTheme } from './sweden';
import { southAfricaTheme } from './southAfrica';
import { uaeTheme } from './uae';
import { russiaTheme } from './russia';
import { israelTheme } from './israel';
import { singaporeTheme } from './singapore';
import { netherlandsTheme } from './netherlands';
import { greeceTheme } from './greece';
import { newZealandTheme } from './newZealand';
import { vietnamTheme } from './vietnam';
import { thailandTheme } from './thailand';
import { norwayTheme } from './norway';
import { indonesiaTheme } from './indonesia';

// Video Games
import { minecraftTheme } from './minecraft';
import { zeldaTheme } from './zelda';
import { pokemonTheme } from './pokemon';
import { gtaTheme } from './gta';
import { marioTheme } from './mario';
import { cyberpunk2077Theme } from './cyberpunk2077';
import { haloTheme } from './halo';
import { godOfWarTheme } from './godOfWar';
import { valorantTheme } from './valorant';
import { eldenRingTheme } from './eldenRing';
import { fortniteTheme } from './fortnite';
import { pacmanTheme } from './pacman';
import { sonicTheme } from './sonic';
import { tetrisTheme } from './tetris';
import { assassinsCreedTheme } from './assassinsCreed';
import { leagueOfLegendsTheme } from './leagueOfLegends';
import { overwatchTheme } from './overwatch';
import { skyrimTheme } from './skyrim';
import { robloxTheme } from './roblox';
import { hollowKnightTheme } from './hollowKnight';
import { falloutTheme } from './fallout';
import { darkSoulsTheme } from './darkSouls';
import { redDeadTheme } from './redDead';
import { counterStrikeTheme } from './counterStrike';
import { worldOfWarcraftTheme } from './worldOfWarcraft';

// Core & Iconic Styles
import { swissTheme } from './swiss';
import { cyberpunkTheme } from './cyberpunk';
import { neumorphicTheme } from './neumorphic';
import { classicTheme } from './classic';
import { luxuryTheme } from './luxury';
import { hybridTheme } from './hybrid';
import { minimalTheme } from './minimal';
import { diverTheme } from './diver';
import { synthwaveTheme } from './synthwave';
import { pilotTheme } from './pilot';
import { matrixTheme } from './matrix';
import { galaxyTheme } from './galaxy';
import { racingTheme } from './racing';
import { vintageTheme } from './vintage';
import { glassmorphismTheme } from './glassmorphism';
import { kawaiiTheme } from './kawaii';
import { pixelFarmTheme } from './pixelFarm';
import { cottagecoreTheme } from './cottagecore';
import { nekoTheme } from './neko';

export const builtInThemes: Record<string, ClockThemeRenderer> = {
  // Sports
  'cricket_stadium': cricket_stadiumTheme,
  'american_football': american_footballTheme,
  'badminton_shuttle': badminton_shuttleTheme,
  'cycling_velodrome': cycling_velodromeTheme,
  'archery_target': archery_targetTheme,
  'scuba_diving': scuba_divingTheme,
  'basketball': basketballTheme,
  'football_soccer': football_soccerTheme,
  'tennis_slam': tennis_slamTheme,
  'formula1_racing': formula1_racingTheme,
  'golf_links': golf_linksTheme,
  'boxing_ring': boxing_ringTheme,
  'snowboarding_winter': snowboarding_winterTheme,
  'skateboarding_street': skateboarding_streetTheme,
  'baseball_diamond': baseball_diamondTheme,
  'surfing_pipeline': surfing_pipelineTheme,

  // Nature & Atmospheric
  'cherry_blossom': cherry_blossomTheme,
  'firefly_meadow': firefly_meadowTheme,
  'glacier_fjord': glacier_fjordTheme,
  'rainforest_canopy': rainforest_canopyTheme,
  'desert_dunes': desert_dunesTheme,
  'crystal_cave': crystal_caveTheme,
  'monarch_migration': monarch_migrationTheme,
  'ocean_bioluminescence': ocean_bioluminescenceTheme,
  'autumn_forest': autumn_forestTheme,
  'thunderstorm_cloud': thunderstorm_cloudTheme,

  // Places & Architecture
  'fuji': fujiTheme,
  'santorini': santoriniTheme,
  'aurora_tromso': aurora_tromsoTheme,
  'pyramids': pyramidsTheme,
  'taj_mahal': taj_mahalTheme,
  'eiffel_tower': eiffel_towerTheme,
  'machu_picchu': machu_picchuTheme,
  'grand_canyon': grand_canyonTheme,
  'venice': veniceTheme,
  'maldives': maldivesTheme,

  // Planets & Astronomy
  'earth_planet': earth_planetTheme,
  'mars_planet': mars_planetTheme,
  'jupiter_planet': jupiter_planetTheme,
  'saturn_planet': saturn_planetTheme,
  'neptune_planet': neptune_planetTheme,
  'moon_lunar': moon_lunarTheme,
  'sun_fusion': sun_fusionTheme,
  'venus_planet': venus_planetTheme,
  'uranus_planet': uranus_planetTheme,
  'mercury_planet': mercury_planetTheme,

  // Botanical & Natural Elements
  'terrarium': terrariumTheme,
  'coral_reef': coral_reefTheme,
  'dandelion': dandelionTheme,
  'mountain_sunrise': mountain_sunriseTheme,
  'bamboo_zen': bamboo_zenTheme,
  'aurora': auroraTheme,
  'geode': geodeTheme,
  'waterfall': waterfallTheme,
  'bonsai': bonsaiTheme,
  'volcano': volcanoTheme,
  'tree_rings': tree_ringsTheme,
  'sunflower': sunflowerTheme,
  'lotus': lotusTheme,
  'forest': forestTheme,
  'mushroom': mushroomTheme,
  'cactus': cactusTheme,
  'ocean': oceanTheme,
  'monstera': monsteraTheme,
  'hive': hiveTheme,
  'autumn': autumnTheme,

  // Sci-Fi & Cyber
  'radar': radarTheme,
  'alien': alienTheme,
  'warp': warpTheme,
  'holo': holoTheme,
  'mecha': mechaTheme,
  'timemachine': timemachineTheme,
  'starship': starshipTheme,
  'cyberdeck': cyberdeckTheme,
  'quantum': quantumTheme,

  // Kawaii & Character Clocks
  'owl': owlTheme,
  'penguin': penguinTheme,
  'sun': sunTheme,

  // Horology & Professional Watches
  'gshock': gshockTheme,
  'chronograph': chronographTheme,
  'regatta': regattaTheme,
  'alpinist': alpinistTheme,
  'triathlon': triathlonTheme,

  // World / National Themes
  'india': indiaTheme,
  'japan': japanTheme,
  'usa': usaTheme,
  'uk': ukTheme,
  'brazil': brazilTheme,
  'germany': germanyTheme,
  'france': franceTheme,
  'italy': italyTheme,
  'australia': australiaTheme,
  'canada': canadaTheme,
  'spain': spainTheme,
  'south-korea': southKoreaTheme,
  'switzerland': switzerlandTheme,
  'mexico': mexicoTheme,
  'argentina': argentinaTheme,
  'egypt': egyptTheme,
  'sweden': swedenTheme,
  'south-africa': southAfricaTheme,
  'uae': uaeTheme,
  'russia': russiaTheme,
  'israel': israelTheme,
  'singapore': singaporeTheme,
  'netherlands': netherlandsTheme,
  'greece': greeceTheme,
  'new-zealand': newZealandTheme,
  'vietnam': vietnamTheme,
  'thailand': thailandTheme,
  'norway': norwayTheme,
  'indonesia': indonesiaTheme,

  // Video Games
  'minecraft': minecraftTheme,
  'zelda': zeldaTheme,
  'pokemon': pokemonTheme,
  'gta': gtaTheme,
  'mario': marioTheme,
  'cyberpunk2077': cyberpunk2077Theme,
  'halo': haloTheme,
  'god-of-war': godOfWarTheme,
  'valorant': valorantTheme,
  'elden-ring': eldenRingTheme,
  'fortnite': fortniteTheme,
  'pacman': pacmanTheme,
  'sonic': sonicTheme,
  'tetris': tetrisTheme,
  'assassins-creed': assassinsCreedTheme,
  'league-of-legends': leagueOfLegendsTheme,
  'overwatch': overwatchTheme,
  'skyrim': skyrimTheme,
  'roblox': robloxTheme,
  'hollow-knight': hollowKnightTheme,
  'fallout': falloutTheme,
  'dark-souls': darkSoulsTheme,
  'red-dead': redDeadTheme,
  'counter-strike': counterStrikeTheme,
  'world-of-warcraft': worldOfWarcraftTheme,

  // Core & Iconic Styles
  'swiss': swissTheme,
  'cyberpunk': cyberpunkTheme,
  'neumorphic': neumorphicTheme,
  'classic': classicTheme,
  'luxury': luxuryTheme,
  'hybrid': hybridTheme,
  'minimal': minimalTheme,
  'diver': diverTheme,
  'synthwave': synthwaveTheme,
  'pilot': pilotTheme,
  'matrix': matrixTheme,
  'galaxy': galaxyTheme,
  'racing': racingTheme,
  'vintage': vintageTheme,
  'glassmorphism': glassmorphismTheme,
  'kawaii': kawaiiTheme,
  'pixel-farm': pixelFarmTheme,
  'cottagecore': cottagecoreTheme,
  'neko': nekoTheme,
  'dark': {
    ...classicTheme,
    name: 'dark',
    description: 'High-contrast pure OLED black dark mode classic clock',
    defaultColors: {
      face: '#000000',
      dialBorder: '#18181b',
      hourTicks: '#ffffff',
      minuteTicks: '#71717a',
      numbers: '#ffffff',
      hourHand: '#ffffff',
      minuteHand: '#e4e4e7',
      secondHand: '#38bdf8',
      accent: '#38bdf8',
      centerCap: '#38bdf8'
    }
  }
};

const customThemes: Record<string, ClockThemeRenderer> = {};

export function getTheme(themeName?: string): ClockThemeRenderer {
  const name = (themeName || 'swiss').toLowerCase().trim();
  if (customThemes[name]) {
    return customThemes[name];
  }
  if (builtInThemes[name]) {
    return builtInThemes[name];
  }
  return swissTheme;
}

export function registerTheme(theme: ClockThemeRenderer): void {
  customThemes[theme.name.toLowerCase().trim()] = theme;
}

export function getAvailableThemes(): string[] {
  return [...Object.keys(builtInThemes), ...Object.keys(customThemes)];
}

export {
  cricket_stadiumTheme,
  american_footballTheme,
  badminton_shuttleTheme,
  cycling_velodromeTheme,
  archery_targetTheme,
  scuba_divingTheme,
  basketballTheme,
  football_soccerTheme,
  tennis_slamTheme,
  formula1_racingTheme,
  golf_linksTheme,
  boxing_ringTheme,
  snowboarding_winterTheme,
  skateboarding_streetTheme,
  baseball_diamondTheme,
  surfing_pipelineTheme,

  cherry_blossomTheme,
  firefly_meadowTheme,
  glacier_fjordTheme,
  rainforest_canopyTheme,
  desert_dunesTheme,
  crystal_caveTheme,
  monarch_migrationTheme,
  ocean_bioluminescenceTheme,
  autumn_forestTheme,
  thunderstorm_cloudTheme,

  fujiTheme,
  santoriniTheme,
  aurora_tromsoTheme,
  pyramidsTheme,
  taj_mahalTheme,
  eiffel_towerTheme,
  machu_picchuTheme,
  grand_canyonTheme,
  veniceTheme,
  maldivesTheme,

  earth_planetTheme,
  mars_planetTheme,
  jupiter_planetTheme,
  saturn_planetTheme,
  neptune_planetTheme,
  moon_lunarTheme,
  sun_fusionTheme,
  venus_planetTheme,
  uranus_planetTheme,
  mercury_planetTheme,

  terrariumTheme,
  coral_reefTheme,
  dandelionTheme,
  mountain_sunriseTheme,
  bamboo_zenTheme,
  auroraTheme,
  geodeTheme,
  waterfallTheme,
  bonsaiTheme,
  volcanoTheme,
  tree_ringsTheme,
  sunflowerTheme,
  lotusTheme,
  forestTheme,
  mushroomTheme,
  cactusTheme,
  oceanTheme,
  monsteraTheme,
  hiveTheme,
  autumnTheme,

  radarTheme,
  alienTheme,
  warpTheme,
  holoTheme,
  mechaTheme,
  timemachineTheme,
  starshipTheme,
  cyberdeckTheme,
  quantumTheme,

  owlTheme,
  penguinTheme,
  sunTheme,

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
  nekoTheme
};

