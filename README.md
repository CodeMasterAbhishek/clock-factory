<div align="center">

# clock-factory

**A lightweight, zero-dependency Analog Clock Web Component (`<analog-clock>`) for modern web applications.**

Features 120+ handcrafted vector themes, full IANA timezone support, continuous 60 FPS smooth sweeping, custom theme rendering, and native compatibility across vanilla HTML/JS, React, Vue, Svelte, and modern frontend frameworks.

<p align="center">
  <a href="https://www.npmjs.com/package/clock-factory"><img src="https://img.shields.io/npm/v/clock-factory.svg?style=flat-square&color=3b82f6" alt="npm version"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-Proprietary-red.svg?style=flat-square" alt="License: Proprietary"></a>
  <img src="https://img.shields.io/badge/TypeScript-Ready-2563eb.svg?style=flat-square" alt="TypeScript Ready">
  <a href="https://codemasterabhishek.github.io/clock-factory/"><img src="https://img.shields.io/badge/Live-Showcase-10b981.svg?style=flat-square" alt="Live Demo"></a>
</p>

<p align="center">
  <a href="https://codemasterabhishek.github.io/clock-factory/"><strong>Explore Live Showcase</strong></a> &bull;
  <a href="#quick-start"><strong>Quick Start</strong></a> &bull;
  <a href="#api-reference"><strong>API Reference</strong></a> &bull;
  <a href="#available-themes"><strong>Theme Catalog</strong></a> &bull;
  <a href="#custom-theme-authoring"><strong>Custom Themes</strong></a>
</p>

</div>

---

## Live Showcase

An interactive showcase with real-time theme customization, timezone selection, and instant code export is available at:
**[codemasterabhishek.github.io/clock-factory](https://codemasterabhishek.github.io/clock-factory/)**

---

## Key Features

- **Framework Agnostic**: Standard `<analog-clock>` custom element with Shadow DOM encapsulation.
- **120+ Handcrafted Vector Themes**: Crisp, resolution-independent SVG designs across Sports, Nature, Places, Planets, Botanical, Sci-Fi, Cute, Horology, Countries, and Gaming.
- **Timezone Engine**: Native support for any IANA timezone string (e.g., `Asia/Kolkata`, `America/New_York`, `Europe/London`, `Asia/Tokyo`).
- **Smooth Animation**: Continuous 60 FPS mechanical sweep or standard 1-second quartz stepping.
- **Zero Dependencies**: Self-contained rendering engine with no external CSS or JavaScript dependencies.
- **Customizable**: Color overrides for dials and hands, configurable second hand, and custom theme registration API.

---

## Installation

### Package Manager

```bash
npm install clock-factory
```

### CDN / Direct Browser Import

Include the pre-bundled standalone script directly without any build configuration:

```html
<script type="module" src="https://cdn.jsdelivr.net/npm/clock-factory/dist/analog-clock.min.js"></script>
```

---

## Quick Start

Import the package once in your project entry point, then use `<analog-clock>` anywhere in your markup.

### Plain HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <script type="module" src="https://cdn.jsdelivr.net/npm/clock-factory/dist/analog-clock.min.js"></script>
</head>
<body>
  <!-- Standard Swiss Railway Clock -->
  <analog-clock theme="swiss" timezone="Europe/Zurich" size="240px" smooth></analog-clock>

  <!-- India Tricolor with Kolkata Time -->
  <analog-clock theme="india" timezone="Asia/Kolkata" size="280px" smooth></analog-clock>
</body>
</html>
```

### React / Next.js

```tsx
import React from 'react';
import 'clock-factory';

export default function WorldClock() {
  return (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <analog-clock theme="diver" timezone="America/New_York" size="220px" smooth />
      <analog-clock theme="india" timezone="Asia/Kolkata" size="220px" smooth />
      <analog-clock theme="cottagecore" timezone="Europe/London" size="220px" smooth />
    </div>
  );
}
```

### Vue 3

```vue
<template>
  <div class="clock-container">
    <analog-clock :theme="currentTheme" :timezone="selectedZone" size="240px" smooth />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import 'clock-factory';

const currentTheme = ref('cottagecore');
const selectedZone = ref('Asia/Kolkata');
</script>
```

### Svelte

```svelte
<script>
  import 'clock-factory';
</script>

<analog-clock theme="minimal" timezone="UTC" size="200px" smooth />
```

---

## API Reference

### Component Attributes

The `<analog-clock>` element accepts the following attributes:

| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `theme` | `string` | `"diver"` | Theme identifier from the built-in theme catalog. |
| `timezone` | `string` | Local | Valid IANA timezone string (e.g., `"Asia/Kolkata"`, `"UTC"`). |
| `smooth` | `boolean` | `true` | `true` for continuous 60 FPS sweep, `false` for 1-second quartz stepping. |
| `size` | `string` | `"100%"` | Clock dimensions in CSS units (e.g., `"240px"`, `"16rem"`, `"100%"`). |
| `accent-color` | `string` | *Theme* | Override color for second hand, accents, and center cap. |
| `face-color` | `string` | *Theme* | Override background color for the clock dial. |
| `hand-color` | `string` | *Theme* | Override color for hour and minute hands. |
| `show-seconds` | `boolean` | `true` | Show or hide the second hand. |
| `show-ticks` | `boolean` | `true` | Show or hide hour and minute tick marks. |
| `show-numbers` | `boolean` | `true` | Show or hide hour numerals / markers. |

### Element Methods

Instances of `AnalogClock` expose the following methods via JavaScript:

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `getTime()` | `TimeData` | Returns the current time calculation, angles, and formatted strings. |
| `getOptions()` | `ClockOptions` | Returns the current configuration options parsed from attributes. |
| `setTheme(name: string)` | `void` | Updates the active clock theme dynamically. |
| `setTimezone(tz: string)` | `void` | Updates the active clock timezone dynamically. |

---

## JavaScript Programmatic API

You can also instantiate and control clocks dynamically using the JavaScript API:

```javascript
import { createClock } from 'clock-factory';

const clock = createClock('#clock-container', {
  theme: 'india',
  timezone: 'Asia/Kolkata',
  size: '320px',
  smooth: true
});

// Dynamic updates
clock.setTheme('rainforest_canopy');
clock.setTimezone('America/Sao_Paulo');
```

---

## Available Themes

### Sports & Athletics
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `cricket_stadium` | Cricket Ground & Willow | Lush green oval cricket pitch crease with red leather cricket ball. |
| `american_football` | Gridiron Field | 100-yard striped football turf with white hash marks and laced pigskin ball. |
| `badminton_shuttle` | Badminton Court | Tournament court with net line and white goose feather shuttlecock. |
| `cycling_velodrome` | Velodrome Sprint | Banked timber indoor velodrome track with blue stayers line and aero wheel. |
| `archery_target` | Olympic Archery | Target bullseye concentric rings with arrow shaft styling. |
| `scuba_diving` | Scuba Depth Gauge | Precision brass underwater diver depth gauge with decompression zones. |
| `basketball` | Hoop & Hardwood | Gloss parquet hardwood basketball court with 3D leather ball. |
| `football_soccer` | Champions Pitch | Vibrant dual-tone striped stadium grass with hexagonal soccer ball. |
| `tennis_slam` | Grand Slam Tennis | Tournament clay court with net mesh and optic yellow felt tennis ball. |
| `formula1_racing` | Formula 1 Cockpit | F1 carbon-fiber steering wheel HUD with rev limiter LEDs. |
| `golf_links` | Pebble Beach Links | Manicured putting green turf with dimpled white golf ball. |
| `boxing_ring` | Championship Ring | High-contrast boxing canvas mat with 4-tier perimeter ropes. |
| `snowboarding_winter` | Alpine Powder Peak | Deep snowy mountain slope with carve tracks and directional board. |
| `skateboarding_street` | Street Skatepark | Concrete skatepark bowl with grip tape deck and polyurethane wheels. |
| `baseball_diamond` | Major League Diamond | Infield red dirt diamond with home plate and rawhide stitched baseball. |
| `surfing_pipeline` | Banzai Pipeline | Deep ocean wave curl tunnel with sea spray foam and surfboard stringer. |

### Nature & Atmospheric
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `cherry_blossom` | Sakura Grove | Serene Japanese cherry blossom grove with drifting pink petals. |
| `firefly_meadow` | Firefly Meadow | Twilight summer meadow with glowing bioluminescent firefly orbs. |
| `glacier_fjord` | Arctic Glacier Fjord | Crystalline blue iceberg cliffs reflected in mirror-still glacial waters. |
| `rainforest_canopy` | Rainforest Canopy | Lush multi-tiered tropical jungle foliage with toucan, sunbeams, and monstera fronds. |
| `desert_dunes` | Desert Oasis | Golden wind-swept Sahara sand dunes under a sun-drenched sky. |
| `crystal_cave` | Crystal Grotto | Prismatic amethyst and quartz stalactites glowing in cavernous darkness. |
| `monarch_migration` | Monarch Migration | Ethereal swarm of orange and black monarch butterflies in flight. |
| `ocean_bioluminescence` | Bioluminescent Tide | Midnight ocean shoreline sparkling with neon blue glowing dinoflagellates. |
| `autumn_forest` | Golden Aspen Forest | Radiant golden birch forest floor with falling amber leaves and sunbeams. |
| `thunderstorm_cloud` | Tropical Thunderstorm | Dark anvil storm clouds crackling with electric lightning bolts. |

### Places & Architecture
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `fuji` | Mount Fuji | Iconic snowy volcano peak rising above serene morning mist and sakura branches. |
| `santorini` | Santorini Island | Whitewashed cliffside villas and cobalt blue domes over the Aegean Sea. |
| `aurora_tromso` | Tromso Fjord | Arctic Aurora Borealis glowing across snowy Norwegian fjords with rorbu cabins. |
| `pyramids` | Giza Pyramids | Ancient desert limestone pyramids silhouetted against a golden sun. |
| `taj_mahal` | Taj Mahal | Symmetrical white marble Mughal monument reflected in tranquil garden pool. |
| `eiffel_tower` | Eiffel Tower | Parisian wrought-iron lattice tower silhouetted against twilight rose sky. |
| `machu_picchu` | Machu Picchu | Ancient Inca stone citadel perched among lush Andean cloud forests. |
| `grand_canyon` | Grand Canyon | Layered red rock canyon cliffs carving through southwestern desert. |
| `venice` | Venice Canal | Venetian waterway with historic baroque bridges and gondola silhouettes. |
| `maldives` | Maldives Overwater Villa | Crystal turquoise lagoon with wooden boardwalk over vibrant coral water. |

### Planets & Astronomy
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `earth_planet` | Planet Earth | Luminous blue marble showing continents, swirling clouds, and orbital terminator. |
| `mars_planet` | Red Planet Mars | Rust-orange Martian terrain featuring Olympus Mons and polar ice caps. |
| `jupiter_planet` | Great Spot Jupiter | Gas giant atmospheric cloud belts and Great Red Spot storm vortex. |
| `saturn_planet` | Ringed Saturn | Golden gas planet with illuminated ice and dust rings in orbital perspective. |
| `neptune_planet` | Azure Neptune | Deep blue icy atmosphere with supersonic high-altitude white methane clouds. |
| `moon_lunar` | Lunar Surface | Heavily cratered lunar maria and highlands bathed in stark earthshine. |
| `sun_fusion` | Solar Star | Roaring stellar corona with solar flares, coronal loops, and sunspots. |
| `venus_planet` | Veiled Venus | Dense golden-amber sulfuric acid cloud canopy over volcanic terrain. |
| `uranus_planet` | Aquamarine Uranus | Smooth cyan-aquamarine ice giant with tilted vertical ring system. |
| `mercury_planet` | Cratered Mercury | Sun-scorched rocky planet with Caloris Basin impacts and solar proximity glow. |

### Botanical & Natural Elements
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `terrarium` | Geometric Terrarium | Faceted glass polyhedron containing succulents, layered soils, moss, and river pebbles. |
| `coral_reef` | Living Coral Reef | Vibrant tropical reef with sea anemones, branching coral, and clownfish. |
| `dandelion` | Blowing Dandelion | Delicate white dandelion seed head dispersing soft pappus seeds in the wind. |
| `mountain_sunrise` | Alpine Sunrise | First morning light catching jagged snow-capped alpine mountain peaks. |
| `bamboo_zen` | Bamboo Zen Garden | Towering green bamboo stalks with raked gravel ripples and smooth river stones. |
| `aurora` | Aurora Borealis | Ethereal emerald and cyan northern lights dancing over snowy midnight pine trees. |
| `geode` | Amethyst Geode | Cracked agate geode revealing glittering purple amethyst crystalline cavity. |
| `waterfall` | Jungle Waterfall | Cascading mountain waterfall plunging into an emerald rainforest pool. |
| `bonsai` | Zen Bonsai Tree | Sculpted ancient juniper bonsai tree in glazed ceramic pot. |
| `volcano` | Molten Volcano | Glowing red magma fissure and volcanic caldera with ash clouds. |
| `tree_rings` | Woodland Rings | Cross-section of aged timber showcasing annual growth rings and natural bark. |
| `sunflower` | Golden Sunflower | Radiant blooming golden sunflower with layered sunlit petals and spiral seed disc. |
| `lotus` | Water Lily Lotus | Sacred pink lotus blossom floating upon tranquil water ripples and lily pad. |
| `forest` | Misty Pine Forest | Deep evergreen forest enveloped in morning woodland fog and towering pine trees. |
| `mushroom` | Forest Amanita | Red-capped Amanita muscaria toadstool with white speckles, gills, and damp moss. |
| `cactus` | Desert Saguaro | Majestic desert saguaro cactus with flowering crowns under desert sun. |
| `ocean` | Surging Ocean Wave | Dramatic cresting Pacific wave with sea foam and turquoise barrel. |
| `monstera` | Tropical Monstera | Large fenestrated monstera deliciosa leaf with tropical rainforest dew drops. |
| `hive` | Golden Honeycomb | Hexagonal beeswax comb structure filled with amber liquid honey. |
| `autumn` | Autumn Maple Leaf | Scarlet and gold autumn maple leaf with intricate organic leaf veins. |

### Sci-Fi
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `radar` | Sonar Radar | Military sonar sweep PPI scope with phosphor green persistence trail and blips. |
| `alien` | Alien Interface | Extraterrestrial glowing glyphs, bioluminescent nodes, and alien bio-tech dials. |
| `warp` | Warp Core | Relativistic space-time warp tunnel with hyperdrive velocity streak lines. |
| `holo` | Hologram Grid | 3D perspective holographic wireframe grid with scanner rings and HUD reticles. |
| `mecha` | Mecha Eye | Cybernetic targeting sensor optic with mechanical aperture blades and laser crosshairs. |
| `timemachine` | Flux Capacitor | Tri-directional pulsing temporal capacitor with high-voltage arc discharge. |
| `starship` | Starship Dashboard | Sleek spacecraft telemetry interface with orbital trajectories and thruster gauges. |
| `cyberdeck` | Cyber Deck | Neon yellow cybernetic circuit board traces and terminal hub. |
| `quantum` | Quantum Reactor | Orbiting electron probability clouds and glowing containment core. |

### Cute
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `owl` | Sleepy Owl | Midnight barn owl perched on moonlit branch with warm plumage and celestial sky. |
| `penguin` | Chilly Penguin | Antarctic emperor penguin on pack ice with snowy pastel blizzard. |
| `sun` | Happy Sun | Smiling golden sun dial with fluffy cloud cheeks and radiant rays. |
| `kawaii` | Kawaii Alarm Clock | Pastel twin-bell alarm clock dial with blushing facial accents. |
| `pixel-farm` | Stardew Pixel Farm | 8-bit retro pixel art farmhouse dial with golden star marker. |
| `cottagecore` | Cottagecore Forest | Cozy woodland embroidery garland with mushrooms, wild strawberries, and fairy lights. |
| `neko` | Neko Cat Clock | Whimsical cat dial with feline ears, whiskers, and paw-print markers. |

### Horology & Professional Watches
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `diver` | Ocean Diver | Marine dive watch aesthetic with ceramic bezel, LumiNova markers, and Mercedes hands. |
| `racing` | Motorsport Racing | Tachometer gauge styling with carbon texture, high-RPM redline arc, and racing needle. |
| `pilot` | Aviator Flieger | Cockpit flight instrument styling with high-visibility sword hands and aviator triangle. |
| `gshock` | Tactical Stealth | Armored octagonal bezel with corner hex bolts, dark military dial, and stencil numerals. |
| `chronograph` | Pro Chronograph | Bi-compax motorsport chronograph with dual sub-dials and stainless steel tachymeter. |
| `regatta` | Yacht Regatta | Yachting countdown timer watch with 10-minute sector arc and compass rose bezel. |
| `alpinist` | Alpinist Expedition | Mountaineering watch with forest green sunburst dial, gold cathedral hands, and azimuth ring. |
| `triathlon` | Triathlon Endurance | Fitness sports watch with pacing performance zone arcs and electric lime hands. |
| `rolex-submariner` | Rolex Submariner | Iconic dive watch with a black dial, mercedes hands, and a diver bezel. |
| `rolex-daytona` | Rolex Daytona | Legendary chronograph with a tachymetric scale bezel and three sub-dials. |
| `patek-philippe-nautilus` | Patek Philippe Nautilus | Luxury sports watch with an iconic porthole-inspired octagonal bezel. |
| `audemars-piguet-royal-oak` | Audemars Piguet Royal Oak | Iconic octagonal bezel with hexagonal screws and tapisserie dial. |
| `omega-speedmaster` | Omega Speedmaster | The Moonwatch, iconic chronograph with a black dial and tachymeter bezel. |
| `tag-heuer-monaco` | TAG Heuer Monaco | Iconic square-cased chronograph with a blue dial, made famous by Steve McQueen. |
| `breitling-navitimer` | Breitling Navitimer | Legendary aviation chronograph with a complex slide rule bezel and three sub-dials. |
| `cartier-santos` | Cartier Santos | Classic square watch with rounded corners, 8 screws, and roman numerals. |
| `iwc-portugieser` | IWC Portugieser | Elegant chronometer with a clean silver dial, applied Arabic numerals and feuille hands. |
| `titan-edge` | Titan Edge | Ultra-slim, minimalist quartz watch with a sleek black dial and two hands. |
| `swiss` | Swiss Railway | High-contrast railway station dial with signature red lollipop second hand. |
| `classic` | Classic Bauhaus | Modern minimalist typography with clean numeral markers and tapered hands. |
| `luxury` | Luxury Chronometer | Roman numeral dial with brushed gold bezel and textured guilloché dial. |
| `vintage` | Victorian Pocket Watch | Aged parchment dial, italic Roman serif markers, and Breguet hands. |
| `dark` | Dark Void | High-contrast dark dial with vivid blue second hand. |
| `glassmorphism` | Frosted Glass | Translucent glass dial with pastel gradients and glowing hands. |
| `hybrid` | Hybrid LCD HUD | Dual analog hands paired with integrated digital LCD time and date readouts. |
| `minimal` | Nordic Minimal | Clean minimalist dial with delicate dot markers and slender needle hands. |

### Countries
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `india` | India Tricolor | Saffron, white and green tricolor dial with Ashoka Chakra 24-spoke emblem in navy blue. |
| `japan` | Japan Hinomaru | Pure red Hinomaru central sun with sakura cherry blossom petal hour markers. |
| `usa` | USA Freedom | Star-Spangled banner ring with 12 star hour markers and eagle gold accents. |
| `uk` | United Kingdom | Union Jack geometric cross design with Big Ben style Roman numerals. |
| `brazil` | Brazil Tropical | Canary yellow rhombus diamond with blue celestial globe and star constellation. |
| `germany` | Germany Precision | Schwarz-Rot-Gold tricolor bezel with Bundesadler crest iconography. |
| `france` | France Haute Horlogerie | French Tricolore vertical stripes with Paris fashion typography. |
| `italy` | Italy Luxury | Italian tricolore rim with Milanese gold applied Roman numerals. |
| `australia` | Australia Southern Cross | Deep ocean blue dial featuring the Southern Cross constellation stars. |
| `canada` | Canada Great White North | Snow white dial with crimson side bars and iconic central 11-pointed Red Maple Leaf. |
| `spain` | Spain Royal | Viva España crimson and gold bezel with royal Spanish crown motif. |
| `south-korea` | South Korea Taegeuk | Red and blue Yin-Yang Taegeuk circle with black I Ching trigram hour markers. |
| `switzerland` | Switzerland Alpine | Swiss Made matte red dial with bold equilateral white Swiss Cross emblem. |
| `mexico` | Mexico Aztec | Mexican green outer bezel with Golden Eagle emblem and Aztec Sun Stone pattern. |
| `argentina` | Argentina Sol de Mayo | Celestial sky blue stripes with 32-ray golden Sol de Mayo human face emblem. |
| `egypt` | Egypt Pharaoh | Onyx black bezel with Golden Eagle of Saladin emblem and hieroglyphic styling. |
| `sweden` | Sweden Scandinavia | Swedish blue dial with Nordic yellow cross graphic and Scandinavian styling. |
| `south-africa` | South Africa Rainbow | Rainbow Nation green dial with iconic Y-shaped multi-color national flag ribbon. |
| `uae` | UAE Falcon | Pan-Arab quad-color accent ring with Golden Falcon emblem and luxury gold hour markers. |
| `russia` | Russia | White-blue-red tricolor face with Golden Double-Headed Eagle emblem. |
| `israel` | Israel | Pure white dial with dual royal blue horizontal stripes and Star of David emblem. |
| `singapore` | Singapore | Crimson red and white split dial with white crescent moon and 5 stars emblem. |
| `netherlands` | Netherlands | Oranje-Nassau royal orange face with Dutch Golden Crown emblem. |
| `greece` | Greece | Aegean sea blue and white 9-stripe flag with Greek cross and golden olive wreath. |
| `new-zealand` | New Zealand | Deep navy dial with Union Jack canton and 4 red-and-white Southern Cross stars. |
| `vietnam` | Vietnam | Vibrant crimson red dial with central golden 5-pointed star emblem. |
| `thailand` | Thailand | Trairanga 5-stripe flag with Royal Blue central band and Golden Royal Garuda. |
| `norway` | Norway | Crimson red dial with indigo blue and white Nordic cross ribbon. |
| `indonesia` | Indonesia | Sang Saka Merah-Putih red and white split dial with Golden Garuda Pancasila. |

### Video Games & Pop Culture
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `minecraft` | Minecraft 8-Bit | Grass and dirt block bezel with Creeper face subdial and Diamond tools. |
| `zelda` | Legend of Zelda | Royal Hylian Blue face with Triforce crest emblem and Master Sword hands. |
| `pokemon` | Pokémon Pokéball | Iconic Pokéball red and white split dial with center release button hub. |
| `gta` | GTA Vice City | Neon Vice pink and cyan sunset horizon dial with palm tree silhouettes. |
| `mario` | Super Mario | Mushroom Kingdom blue sky dial with golden Super Star emblem and Mario hands. |
| `cyberpunk2077` | Cyberpunk 2077 | Electric yellow Night City HUD dial with Samurai cyber-skull emblem. |
| `halo` | Halo Spartan-117 | Olive drab military green dial with Master Chief visor gold insignia. |
| `god-of-war` | God of War | Dark Nordic stone dial with Leviathan frost cyan runes and Greek Omega crest. |
| `valorant` | VALORANT Tactical | Radianite red and dark charcoal tactical HUD dial with V-emblem. |
| `elden-ring` | Elden Ring | Dark Erdtree bark dial with intersecting golden Elden runes. |
| `fortnite` | Fortnite | Royal purple storm face with Victory Royale gold crown emblem. |
| `pacman` | Pac-Man | Retro 8-bit arcade face with Pac-Man chasing ghosts around blue maze paths. |
| `sonic` | Sonic the Hedgehog | Green Hill Zone checkered grass pattern with 12 Golden Ring markers. |
| `tetris` | Tetris | Falling neon Tetrimino blocks forming the 12 hour positions on a matrix grid. |
| `assassins-creed` | Assassin's Creed | Dark slate Animus dial with bronze Assassin Crest emblem. |
| `pixel-farm` | Stardew Valley Farm | Cozy farming sim pixel watch with wheat field background and farm tractor hands. |
| `league-of-legends` | League of Legends | Deep navy dial with Hextech cyan magic crystal subdial and gold Summoner framing. |
| `overwatch` | Overwatch | Metallic slate and orange tactical dial featuring the Overwatch emblem. |
| `skyrim` | Skyrim | Dragonborn Akatosh Dragon Crest in iron/steel with icy tundra slate dial. |
| `roblox` | Roblox | White studio grid dial with tilted red square Roblox emblem. |
| `hollow-knight` | Hollow Knight | Void indigo dark dial with Hallownest Knight skull mask emblem. |
| `fallout` | Fallout Pip-Boy | Vault-Tec yellow and navy blue CRT screen dial with radiation hazard symbol. |
| `dark-souls` | Dark Souls | Ash slate dial with coiled sword and glowing Bonfire flame emblem. |
| `red-dead` | Red Dead Redemption | Outlaw crimson red face with revolver 6-shot cylinder subdial. |
| `counter-strike` | Counter-Strike 2 | CS2 hazard orange and tactical black dial with bomb defusal C4 timer. |
| `world-of-warcraft` | World of Warcraft | Alliance gold and Horde crimson split dial with Azerite glowing core. |

---

## Custom Theme Authoring

You can register custom SVG themes dynamically using `registerTheme`:

```javascript
import { registerTheme } from 'clock-factory';

registerTheme({
  name: 'custom-dial',
  defaultColors: {
    face: '#ffffff',
    dialBorder: '#e2e8f0',
    hourTicks: '#0f172a',
    minuteTicks: '#94a3b8',
    numbers: '#0f172a',
    hourHand: '#0f172a',
    minuteHand: '#334155',
    secondHand: '#ef4444',
    accent: '#ef4444',
    centerCap: '#0f172a'
  },
  renderDial(options, colors, time) {
    return `
      <circle cx="150" cy="150" r="145" fill="${colors.face}" stroke="${colors.dialBorder}" stroke-width="4"/>
    `;
  },
  renderHands(options, colors, time) {
    return `
      <!-- Hour Hand -->
      <g transform="rotate(${time.hourAngle} 150 150)">
        <rect x="146" y="70" width="8" height="85" fill="${colors.hourHand}" rx="4"/>
      </g>
      <!-- Minute Hand -->
      <g transform="rotate(${time.minuteAngle} 150 150)">
        <rect x="147" y="40" width="6" height="115" fill="${colors.minuteHand}" rx="3"/>
      </g>
      <!-- Second Hand -->
      <g transform="rotate(${time.secondAngle} 150 150)">
        <line x1="150" y1="170" x2="150" y2="30" stroke="${colors.secondHand}" stroke-width="2"/>
      </g>
      <!-- Center Cap -->
      <circle cx="150" cy="150" r="6" fill="${colors.centerCap}"/>
    `;
  }
});
```

Once registered, use it anywhere:

```html
<analog-clock theme="custom-dial"></analog-clock>
```

---

## License

Proprietary. All rights reserved. Copyright (c) 2026 CodeMasterAbhishek.
Unauthorized copying, distribution, or commercial use without permission is strictly prohibited.