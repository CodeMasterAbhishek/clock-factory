import { ClockThemeRenderer } from '../types';

import { alienTheme } from './alien';
import { argentinaTheme } from './argentina';
import { audemars_piguet_royal_oakTheme } from './audemars_piguet_royal_oak';
import { auroraTheme } from './aurora';
import { aurora_tromsoTheme } from './aurora_tromso';
import { australiaTheme } from './australia';
import { autumnTheme } from './autumn';
import { autumn_forestTheme } from './autumn_forest';
import { bamboo_zenTheme } from './bamboo_zen';
import { baseball_diamondTheme } from './baseball_diamond';
import { basketballTheme } from './basketball';
import { bonsaiTheme } from './bonsai';
import { boxing_ringTheme } from './boxing_ring';
import { brazilTheme } from './brazil';
import { breitling_navitimerTheme } from './breitling_navitimer';
import { cactusTheme } from './cactus';
import { canadaTheme } from './canada';
import { cartier_santosTheme } from './cartier_santos';
import { cherry_blossomTheme } from './cherry_blossom';
import { chronographTheme } from './chronograph';
import { coral_reefTheme } from './coral_reef';
import { cottagecoreTheme } from './cottagecore';
import { cricket_stadiumTheme } from './cricket_stadium';
import { crystal_caveTheme } from './crystal_cave';
import { cyberdeckTheme } from './cyberdeck';
import { cyberpunkTheme } from './cyberpunk';
import { cyberpunk2077Theme } from './cyberpunk2077';
import { cycling_velodromeTheme } from './cycling_velodrome';
import { dandelionTheme } from './dandelion';
import { desert_dunesTheme } from './desert_dunes';
import { diverTheme } from './diver';
import { earth_planetTheme } from './earth_planet';
import { egyptTheme } from './egypt';
import { eiffel_towerTheme } from './eiffel_tower';
import { firefly_meadowTheme } from './firefly_meadow';
import { football_soccerTheme } from './football_soccer';
import { forestTheme } from './forest';
import { formula1_racingTheme } from './formula1_racing';
import { franceTheme } from './france';
import { fujiTheme } from './fuji';
import { galaxyTheme } from './galaxy';
import { geodeTheme } from './geode';
import { germanyTheme } from './germany';
import { glacier_fjordTheme } from './glacier_fjord';
import { golf_linksTheme } from './golf_links';
import { grand_canyonTheme } from './grand_canyon';
import { greeceTheme } from './greece';
import { gshockTheme } from './gshock';
import { hiveTheme } from './hive';
import { holoTheme } from './holo';
import { indiaTheme } from './india';
import { indonesiaTheme } from './indonesia';
import { israelTheme } from './israel';
import { italyTheme } from './italy';
import { iwc_portugieserTheme } from './iwc_portugieser';
import { japanTheme } from './japan';
import { jupiter_planetTheme } from './jupiter_planet';
import { kawaiiTheme } from './kawaii';
import { lotusTheme } from './lotus';
import { luxuryTheme } from './luxury';
import { machu_picchuTheme } from './machu_picchu';
import { maldivesTheme } from './maldives';
import { marioTheme } from './mario';
import { mars_planetTheme } from './mars_planet';
import { matrixTheme } from './matrix';
import { mechaTheme } from './mecha';
import { mercury_planetTheme } from './mercury_planet';
import { mexicoTheme } from './mexico';
import { monarch_migrationTheme } from './monarch_migration';
import { monsteraTheme } from './monstera';
import { moon_lunarTheme } from './moon_lunar';
import { mountain_sunriseTheme } from './mountain_sunrise';
import { mushroomTheme } from './mushroom';
import { neptune_planetTheme } from './neptune_planet';
import { netherlandsTheme } from './netherlands';
import { newZealandTheme } from './newZealand';
import { norwayTheme } from './norway';
import { oceanTheme } from './ocean';
import { ocean_bioluminescenceTheme } from './ocean_bioluminescence';
import { omega_speedmasterTheme } from './omega_speedmaster';
import { owlTheme } from './owl';
import { patek_philippe_nautilusTheme } from './patek_philippe_nautilus';
import { penguinTheme } from './penguin';
import { pilotTheme } from './pilot';
import { pokemonTheme } from './pokemon';
import { pyramidsTheme } from './pyramids';
import { quantumTheme } from './quantum';
import { racingTheme } from './racing';
import { radarTheme } from './radar';
import { rainforest_canopyTheme } from './rainforest_canopy';
import { rolex_daytonaTheme } from './rolex_daytona';
import { rolex_submarinerTheme } from './rolex_submariner';
import { russiaTheme } from './russia';
import { santoriniTheme } from './santorini';
import { saturn_planetTheme } from './saturn_planet';
import { scuba_divingTheme } from './scuba_diving';
import { singaporeTheme } from './singapore';
import { skateboarding_streetTheme } from './skateboarding_street';
import { snowboarding_winterTheme } from './snowboarding_winter';
import { southAfricaTheme } from './southAfrica';
import { southKoreaTheme } from './southKorea';
import { spainTheme } from './spain';
import { starshipTheme } from './starship';
import { sunTheme } from './sun';
import { sun_fusionTheme } from './sun_fusion';
import { sunflowerTheme } from './sunflower';
import { surfing_pipelineTheme } from './surfing_pipeline';
import { swedenTheme } from './sweden';
import { swissTheme } from './swiss';
import { switzerlandTheme } from './switzerland';
import { synthwaveTheme } from './synthwave';
import { tag_heuer_monacoTheme } from './tag_heuer_monaco';
import { taj_mahalTheme } from './taj_mahal';
import { tennis_slamTheme } from './tennis_slam';
import { terrariumTheme } from './terrarium';
import { thailandTheme } from './thailand';
import { thunderstorm_cloudTheme } from './thunderstorm_cloud';
import { timemachineTheme } from './timemachine';
import { titan_edgeTheme } from './titan_edge';
import { tree_ringsTheme } from './tree_rings';
import { triathlonTheme } from './triathlon';
import { uaeTheme } from './uae';
import { ukTheme } from './uk';
import { uranus_planetTheme } from './uranus_planet';
import { usaTheme } from './usa';
import { veniceTheme } from './venice';
import { venus_planetTheme } from './venus_planet';
import { vietnamTheme } from './vietnam';
import { vintageTheme } from './vintage';
import { volcanoTheme } from './volcano';
import { warpTheme } from './warp';
import { waterfallTheme } from './waterfall';

export const builtInThemes: Record<string, ClockThemeRenderer> = {
  'alien': alienTheme,
  'argentina': argentinaTheme,
  'audemars_piguet_royal_oak': audemars_piguet_royal_oakTheme,
  'audemars-piguet-royal-oak': audemars_piguet_royal_oakTheme,
  'audemars piguet royal oak': audemars_piguet_royal_oakTheme,
  'aurora': auroraTheme,
  'aurora_tromso': aurora_tromsoTheme,
  'aurora-tromso': aurora_tromsoTheme,
  'australia': australiaTheme,
  'autumn': autumnTheme,
  'autumn_forest': autumn_forestTheme,
  'autumn-forest': autumn_forestTheme,
  'bamboo_zen': bamboo_zenTheme,
  'bamboo-zen': bamboo_zenTheme,
  'baseball_diamond': baseball_diamondTheme,
  'baseball-diamond': baseball_diamondTheme,
  'basketball': basketballTheme,
  'bonsai': bonsaiTheme,
  'boxing_ring': boxing_ringTheme,
  'boxing-ring': boxing_ringTheme,
  'brazil': brazilTheme,
  'breitling_navitimer': breitling_navitimerTheme,
  'breitling-navitimer': breitling_navitimerTheme,
  'breitling navitimer': breitling_navitimerTheme,
  'cactus': cactusTheme,
  'canada': canadaTheme,
  'cartier_santos': cartier_santosTheme,
  'cartier-santos': cartier_santosTheme,
  'cartier santos': cartier_santosTheme,
  'cherry_blossom': cherry_blossomTheme,
  'cherry-blossom': cherry_blossomTheme,
  'chronograph': chronographTheme,
  'coral_reef': coral_reefTheme,
  'coral-reef': coral_reefTheme,
  'cottagecore': cottagecoreTheme,
  'cricket_stadium': cricket_stadiumTheme,
  'cricket-stadium': cricket_stadiumTheme,
  'crystal_cave': crystal_caveTheme,
  'crystal-cave': crystal_caveTheme,
  'cyberdeck': cyberdeckTheme,
  'cyberpunk': cyberpunkTheme,
  'cyberpunk2077': cyberpunk2077Theme,
  'cycling_velodrome': cycling_velodromeTheme,
  'cycling-velodrome': cycling_velodromeTheme,
  'dandelion': dandelionTheme,
  'desert_dunes': desert_dunesTheme,
  'desert-dunes': desert_dunesTheme,
  'diver': diverTheme,
  'earth_planet': earth_planetTheme,
  'earth-planet': earth_planetTheme,
  'egypt': egyptTheme,
  'eiffel_tower': eiffel_towerTheme,
  'eiffel-tower': eiffel_towerTheme,
  'firefly_meadow': firefly_meadowTheme,
  'firefly-meadow': firefly_meadowTheme,
  'football_soccer': football_soccerTheme,
  'football-soccer': football_soccerTheme,
  'forest': forestTheme,
  'formula1_racing': formula1_racingTheme,
  'formula1-racing': formula1_racingTheme,
  'france': franceTheme,
  'fuji': fujiTheme,
  'galaxy': galaxyTheme,
  'geode': geodeTheme,
  'germany': germanyTheme,
  'glacier_fjord': glacier_fjordTheme,
  'glacier-fjord': glacier_fjordTheme,
  'golf_links': golf_linksTheme,
  'golf-links': golf_linksTheme,
  'grand_canyon': grand_canyonTheme,
  'grand-canyon': grand_canyonTheme,
  'greece': greeceTheme,
  'gshock': gshockTheme,
  'hive': hiveTheme,
  'holo': holoTheme,
  'india': indiaTheme,
  'indonesia': indonesiaTheme,
  'israel': israelTheme,
  'italy': italyTheme,
  'iwc_portugieser': iwc_portugieserTheme,
  'iwc-portugieser': iwc_portugieserTheme,
  'iwc portugieser': iwc_portugieserTheme,
  'japan': japanTheme,
  'jupiter_planet': jupiter_planetTheme,
  'jupiter-planet': jupiter_planetTheme,
  'kawaii': kawaiiTheme,
  'lotus': lotusTheme,
  'luxury': luxuryTheme,
  'machu_picchu': machu_picchuTheme,
  'machu-picchu': machu_picchuTheme,
  'maldives': maldivesTheme,
  'mario': marioTheme,
  'mars_planet': mars_planetTheme,
  'mars-planet': mars_planetTheme,
  'matrix': matrixTheme,
  'mecha': mechaTheme,
  'mercury_planet': mercury_planetTheme,
  'mercury-planet': mercury_planetTheme,
  'mexico': mexicoTheme,
  'monarch_migration': monarch_migrationTheme,
  'monarch-migration': monarch_migrationTheme,
  'monstera': monsteraTheme,
  'moon_lunar': moon_lunarTheme,
  'moon-lunar': moon_lunarTheme,
  'mountain_sunrise': mountain_sunriseTheme,
  'mountain-sunrise': mountain_sunriseTheme,
  'mushroom': mushroomTheme,
  'neptune_planet': neptune_planetTheme,
  'neptune-planet': neptune_planetTheme,
  'netherlands': netherlandsTheme,
  'newZealand': newZealandTheme,
  'new-zealand': newZealandTheme,
  'norway': norwayTheme,
  'ocean': oceanTheme,
  'ocean_bioluminescence': ocean_bioluminescenceTheme,
  'ocean-bioluminescence': ocean_bioluminescenceTheme,
  'omega_speedmaster': omega_speedmasterTheme,
  'omega-speedmaster': omega_speedmasterTheme,
  'omega speedmaster': omega_speedmasterTheme,
  'owl': owlTheme,
  'patek_philippe_nautilus': patek_philippe_nautilusTheme,
  'patek-philippe-nautilus': patek_philippe_nautilusTheme,
  'patek philippe nautilus': patek_philippe_nautilusTheme,
  'penguin': penguinTheme,
  'pilot': pilotTheme,
  'pokemon': pokemonTheme,
  'pyramids': pyramidsTheme,
  'quantum': quantumTheme,
  'racing': racingTheme,
  'radar': radarTheme,
  'rainforest_canopy': rainforest_canopyTheme,
  'rainforest-canopy': rainforest_canopyTheme,
  'rolex_daytona': rolex_daytonaTheme,
  'rolex-daytona': rolex_daytonaTheme,
  'rolex daytona': rolex_daytonaTheme,
  'rolex_submariner': rolex_submarinerTheme,
  'rolex-submariner': rolex_submarinerTheme,
  'rolex submariner': rolex_submarinerTheme,
  'russia': russiaTheme,
  'santorini': santoriniTheme,
  'saturn_planet': saturn_planetTheme,
  'saturn-planet': saturn_planetTheme,
  'scuba_diving': scuba_divingTheme,
  'scuba-diving': scuba_divingTheme,
  'singapore': singaporeTheme,
  'skateboarding_street': skateboarding_streetTheme,
  'skateboarding-street': skateboarding_streetTheme,
  'snowboarding_winter': snowboarding_winterTheme,
  'snowboarding-winter': snowboarding_winterTheme,
  'southAfrica': southAfricaTheme,
  'south-africa': southAfricaTheme,
  'southKorea': southKoreaTheme,
  'south-korea': southKoreaTheme,
  'spain': spainTheme,
  'starship': starshipTheme,
  'sun': sunTheme,
  'sun_fusion': sun_fusionTheme,
  'sun-fusion': sun_fusionTheme,
  'sunflower': sunflowerTheme,
  'surfing_pipeline': surfing_pipelineTheme,
  'surfing-pipeline': surfing_pipelineTheme,
  'sweden': swedenTheme,
  'swiss': swissTheme,
  'switzerland': switzerlandTheme,
  'synthwave': synthwaveTheme,
  'tag_heuer_monaco': tag_heuer_monacoTheme,
  'tag-heuer-monaco': tag_heuer_monacoTheme,
  'tag heuer monaco': tag_heuer_monacoTheme,
  'taj_mahal': taj_mahalTheme,
  'taj-mahal': taj_mahalTheme,
  'tennis_slam': tennis_slamTheme,
  'tennis-slam': tennis_slamTheme,
  'terrarium': terrariumTheme,
  'thailand': thailandTheme,
  'thunderstorm_cloud': thunderstorm_cloudTheme,
  'thunderstorm-cloud': thunderstorm_cloudTheme,
  'timemachine': timemachineTheme,
  'titan_edge': titan_edgeTheme,
  'titan-edge': titan_edgeTheme,
  'titan edge': titan_edgeTheme,
  'tree_rings': tree_ringsTheme,
  'tree-rings': tree_ringsTheme,
  'triathlon': triathlonTheme,
  'uae': uaeTheme,
  'uk': ukTheme,
  'uranus_planet': uranus_planetTheme,
  'uranus-planet': uranus_planetTheme,
  'usa': usaTheme,
  'venice': veniceTheme,
  'venus_planet': venus_planetTheme,
  'venus-planet': venus_planetTheme,
  'vietnam': vietnamTheme,
  'vintage': vintageTheme,
  'volcano': volcanoTheme,
  'warp': warpTheme,
  'waterfall': waterfallTheme,
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
  // Try replacing hyphen/underscore
  const alt1 = name.replace(/-/g, '_');
  if (builtInThemes[alt1]) return builtInThemes[alt1];
  const alt2 = name.replace(/_/g, '-');
  if (builtInThemes[alt2]) return builtInThemes[alt2];

  return swissTheme;
}

export function registerTheme(theme: ClockThemeRenderer): void {
  customThemes[theme.name.toLowerCase().trim()] = theme;
}

export function getAvailableThemes(): string[] {
  return [...Object.keys(builtInThemes), ...Object.keys(customThemes)];
}

export {
  alienTheme,
  argentinaTheme,
  audemars_piguet_royal_oakTheme,
  auroraTheme,
  aurora_tromsoTheme,
  australiaTheme,
  autumnTheme,
  autumn_forestTheme,
  bamboo_zenTheme,
  baseball_diamondTheme,
  basketballTheme,
  bonsaiTheme,
  boxing_ringTheme,
  brazilTheme,
  breitling_navitimerTheme,
  cactusTheme,
  canadaTheme,
  cartier_santosTheme,
  cherry_blossomTheme,
  chronographTheme,
  coral_reefTheme,
  cottagecoreTheme,
  cricket_stadiumTheme,
  crystal_caveTheme,
  cyberdeckTheme,
  cyberpunkTheme,
  cyberpunk2077Theme,
  cycling_velodromeTheme,
  dandelionTheme,
  desert_dunesTheme,
  diverTheme,
  earth_planetTheme,
  egyptTheme,
  eiffel_towerTheme,
  firefly_meadowTheme,
  football_soccerTheme,
  forestTheme,
  formula1_racingTheme,
  franceTheme,
  fujiTheme,
  galaxyTheme,
  geodeTheme,
  germanyTheme,
  glacier_fjordTheme,
  golf_linksTheme,
  grand_canyonTheme,
  greeceTheme,
  gshockTheme,
  hiveTheme,
  holoTheme,
  indiaTheme,
  indonesiaTheme,
  israelTheme,
  italyTheme,
  iwc_portugieserTheme,
  japanTheme,
  jupiter_planetTheme,
  kawaiiTheme,
  lotusTheme,
  luxuryTheme,
  machu_picchuTheme,
  maldivesTheme,
  marioTheme,
  mars_planetTheme,
  matrixTheme,
  mechaTheme,
  mercury_planetTheme,
  mexicoTheme,
  monarch_migrationTheme,
  monsteraTheme,
  moon_lunarTheme,
  mountain_sunriseTheme,
  mushroomTheme,
  neptune_planetTheme,
  netherlandsTheme,
  newZealandTheme,
  norwayTheme,
  oceanTheme,
  ocean_bioluminescenceTheme,
  omega_speedmasterTheme,
  owlTheme,
  patek_philippe_nautilusTheme,
  penguinTheme,
  pilotTheme,
  pokemonTheme,
  pyramidsTheme,
  quantumTheme,
  racingTheme,
  radarTheme,
  rainforest_canopyTheme,
  rolex_daytonaTheme,
  rolex_submarinerTheme,
  russiaTheme,
  santoriniTheme,
  saturn_planetTheme,
  scuba_divingTheme,
  singaporeTheme,
  skateboarding_streetTheme,
  snowboarding_winterTheme,
  southAfricaTheme,
  southKoreaTheme,
  spainTheme,
  starshipTheme,
  sunTheme,
  sun_fusionTheme,
  sunflowerTheme,
  surfing_pipelineTheme,
  swedenTheme,
  swissTheme,
  switzerlandTheme,
  synthwaveTheme,
  tag_heuer_monacoTheme,
  taj_mahalTheme,
  tennis_slamTheme,
  terrariumTheme,
  thailandTheme,
  thunderstorm_cloudTheme,
  timemachineTheme,
  titan_edgeTheme,
  tree_ringsTheme,
  triathlonTheme,
  uaeTheme,
  ukTheme,
  uranus_planetTheme,
  usaTheme,
  veniceTheme,
  venus_planetTheme,
  vietnamTheme,
  vintageTheme,
  volcanoTheme,
  warpTheme,
  waterfallTheme,
};
