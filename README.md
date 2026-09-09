<div align="center">

# clock-factory

<p align="center">
  <a href="https://codemasterabhishek.github.io/clock-factory/">
    <img src="https://raw.githubusercontent.com/CodeMasterAbhishek/clock-factory/main/assets/showcase.png" alt="Clock Factory Live Showcase" width="100%" />
  </a>
</p>

### Beautiful, buttery-smooth analog clocks for any web app.

Bring your dashboards, world clocks, landing pages, and apps to life with **132 handcrafted vector watch dials**. Just drop in a single `<analog-clock>` tag — no build tools required, no bulky dependencies, and it works seamlessly everywhere from plain HTML to React, Vue, and Svelte.

<p align="center">
  <a href="https://www.npmjs.com/package/clock-factory"><img src="https://img.shields.io/npm/v/clock-factory.svg?style=flat-square&color=3b82f6" alt="npm version"></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/License-Proprietary-red.svg?style=flat-square" alt="License: Proprietary"></a>
  <img src="https://img.shields.io/badge/TypeScript-Ready-2563eb.svg?style=flat-square" alt="TypeScript Ready">
  <a href="https://codemasterabhishek.github.io/clock-factory/"><img src="https://img.shields.io/badge/Live-Showcase-10b981.svg?style=flat-square" alt="Live Demo"></a>
</p>

<p align="center">
  <a href="https://codemasterabhishek.github.io/clock-factory/"><strong>Try the Interactive Demo</strong></a> &bull;
  <a href="#quick-start"><strong>Quick Start</strong></a> &bull;
  <a href="#available-themes"><strong>Browse 132 Themes</strong></a> &bull;
  <a href="#api-reference"><strong>API Reference</strong></a> &bull;
  <a href="#custom-theme-authoring"><strong>Build Custom Dials</strong></a>
</p>

</div>

---

## ⚡ See It in Action

Play with all 132 dials, test world timezones live, tweak hand colors, and copy ready-to-use code directly from the interactive showcase:

👉 **[codemasterabhishek.github.io/clock-factory](https://codemasterabhishek.github.io/clock-factory/)**

---

## ✨ Why Clock Factory?

- **Works Anywhere**: Native `<analog-clock>` web component. Drop it into plain HTML or your favorite framework (React, Next.js, Vue, Nuxt, Svelte, Astro) with zero wrappers or setup headaches.
- **132 Handcrafted Designs**: Crisp, pure SVG dials that scale razor-sharp from compact dashboard widgets to giant 4K displays — featuring luxury chronometers, national flags, celestial planets, natural landscapes, sci-fi HUDs, and real watch tributes.
- **Effortless World Timezones**: Pass any IANA timezone (like `timezone="Asia/Tokyo"` or `America/New_York`) and the clock handles the conversions natively.
- **Buttery 60 FPS Sweep**: Toggle between a continuous, luxury mechanical sweep or a satisfying 1-second quartz stepping tick.
- **Zero Dependencies**: Completely self-contained with built-in styles and SVGs. No external CSS files to import, no font downloads, and no framework dependencies.
- **Fully Customizable**: Tweak face colors, hand accents, dial markers, or register your own completely bespoke SVG themes using simple JavaScript.

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

<analog-clock theme="swiss" timezone="UTC" size="200px" smooth />
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

### Sport & Tool (19 Clocks)
*Performance chronographs, diving instruments, tactical field watches, and athletics*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `cricket_stadium` | **Cricket Ground & Willow** | Lush green oval cricket ground with central pitch crease, polished leather red cricket ball, and white seam |
| `cycling_velodrome` | **Velodrome Sprint** | Banked timber indoor velodrome sprint track with blue stayers line and aero tri-spoke wheel |
| `scuba_diving` | **Scuba Depth Gauge** | Precision marine brass underwater diver depth gauge with continuous decompression safety zones and luminous tritium needle |
| `basketball` | **Hoop & Hardwood** | Gloss parquet hardwood basketball court with realistic 3D textured leather ball and painted key arcs |
| `football_soccer` | **Champions Pitch** | Lawn-striped emerald stadium turf with white penalty box markings and central 3D stitched soccer ball |
| `tennis_slam` | **Grand Slam Tennis** | Tournament court green & blue with white baseline lines and optic-yellow tennis ball seams |
| `formula1_racing` | **Formula 1 Cockpit** | High-rev motorsport carbon fiber tachometer with redline RPM zone and checkered flag motif |
| `golf_links` | **Pebble Beach Links** | Lush green fairway with flagstick cup, sand bunker trap, and dimpled golf ball texture |
| `boxing_ring` | **Championship Ring** | Dramatic 4-rope square boxing ring canvas under arena lights with leather boxing gloves |
| `snowboarding_winter` | **Alpine Powder Peak** | Dramatic snow-covered Alpine peak with realistic glacial ridges, powder carving tracks, and evergreen pine forests |
| `skateboarding_street` | **Street Skatepark** | Concrete bowl skate park texture with skate deck silhouette and urethane wheels |
| `baseball_diamond` | **Major League Diamond** | Red clay infield dirt and outfield lawn grass with double red-stitched baseball dial |
| `surfing_pipeline` | **Banzai Pipeline** | Giant ocean barrel wave with translucent turquoise curling lip, foamy white water spray, and surfer carving the pocket |
| `diver` | **Ocean Diver Pro Submariner Ceramic Bezel Watch** | Pro Diver watch with notched ceramic bezel, luminous geometric indices, and Mercedes-style hands |
| `racing` | **Motorsport Racing Tachometer RPM Gauge** | Motorsport racing speedometer with carbon-fiber textured dial, high-RPM redline gauge zone, and racing needle |
| `pilot` | **Aviator Flieger Pilot Cockpit Instrument** | Aviation Flieger pilot watch with cockpit matte black dial, high-vis sword hands, and 12-hour triangle |
| `gshock` | **Tactical Stealth Armored Bezel Military Field Watch** | Tactical stealth field watch with armored octagonal bezel, corner hex bolts, and stencil typography |
| `chronograph` | **Pro Chronograph Bi-Compax Sub-Dials Stainless Steel Watch** | Bi-compax motorsport chronograph with dual sub-dials, stainless steel tachymeter bezel, and precision syringe hands |
| `triathlon` | **Triathlon Endurance Sports Pace Zone Electric Lime Watch** | Triathlon endurance sports watch with pacing zone arcs, OLED dark face, and electric lime hands |

### Nature & Botanical (30 Clocks)
*Organic landscapes, forest foliage, terrariums, flowers, and natural phenomena*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `cherry_blossom` | **Sakura Grove** | Lush Japanese cherry blossom canopy with drifting sakura petals and a peaceful koi pond |
| `firefly_meadow` | **Firefly Meadow** | Summer twilight grass meadow filled with glowing bioluminescent fireflies and wild reeds |
| `glacier_fjord` | **Arctic Glacier Fjord** | Majestic crystalline blue glacier ice walls calving into an icy turquoise fjord with floating icebergs |
| `rainforest_canopy` | **Rainforest Canopy** | Deep Amazon rainforest canopy with sunlit monstera fronds, bromeliad blossoms, and an exquisite keel-billed toucan |
| `desert_dunes` | **Desert Oasis** | Golden undulating sand dunes under a radiant desert sun leading to a palm oasis |
| `crystal_cave` | **Crystal Grotto** | Subterranean Crystal Grotto featuring faceted amethyst quartz stalactites, glowing bioluminescent fluorite crystals, and subterranean reflection pool |
| `monarch_migration` | **Monarch Migration** | Spectacular Monarch Butterfly Migration in the sunlit Oyamel fir forest with hyper-detailed stained-glass wings, milkweed blossoms, and golden sunbeams |
| `ocean_bioluminescence` | **Bioluminescent Tide** | Glowing neon-blue bioluminescent waves crashing on midnight ocean sands under a starry sky |
| `autumn_forest` | **Golden Aspen Forest** | Majestic Golden Aspen & Silver Birch Forest at golden hour with multi-depth textured bark, shimmering golden foliage, sunbeams, and drifting autumn leaves |
| `thunderstorm_cloud` | **Tropical Thunderstorm** | Epic Supercell Cumulonimbus Thunderstorm featuring dramatic illuminated thunderhead clouds, branching forked electric lightning bolts, torrential rain sheets, and ionized neon glow |
| `terrarium` | **Geometric Terrarium** | Faceted copper-framed glass geometric terrarium with multi-tiered Echeveria rosettes, Haworthia, trailing string-of-pearls, and geological soil strata |
| `coral_reef` | **Living Coral Reef** | Vibrant living marine coral reef with sunlit ocean caustics, sea turtle, and clownfish |
| `dandelion` | **Blowing Dandelion** | Ethereal glowing dandelion seedhead in a summer twilight breeze with floating airborne parachute seeds |
| `mountain_sunrise` | **Alpine Sunrise** | Breathtaking Alpine Alpenglow sunrise over multi-tier jagged mountain ranges, glowing sunbeams, and evergreen valley pines |
| `bamboo_zen` | **Bamboo Zen Garden** | Japanese Zen rock garden (Karesansui) with concentric raked gravel ripples, smooth river stones, and emerald bamboo stalks |
| `aurora` | **Aurora Borealis** | Emerald, cyan, and violet Aurora Borealis dancing across a starry midnight polar sky over snowy mountain pines |
| `geode` | **Amethyst Geode** | Raw stone geode rim with glittering purple crystalline quartz interior |
| `waterfall` | **Jungle Waterfall** | Lush tropical jungle canyon with cascading turquoise multi-tier waterfall and monstera leaves |
| `bonsai` | **Zen Bonsai Tree** | Exquisite Japanese ancient Juniper Bonsai with gnarled twisted trunk, tiered cloud-like foliage pads, and glazed ceramic tray |
| `volcano` | **Molten Volcano** | Dramatic Molten Volcano Eruption featuring basaltic caldera, glowing magma rivers cascading down rocky slopes, volcanic ash plumes, and fiery incandescent embers |
| `tree_rings` | **Woodland Rings** | Organic tree cross-section with annual growth rings and leaf hands |
| `sunflower` | **Golden Sunflower** | Radiant blooming golden sunflower with layered sunlit petals and organic spiral seed disc |
| `lotus` | **Water Lily Lotus** | Delicate pink lotus blossoms resting upon calm pond ripples |
| `forest` | **Misty Pine Forest** | Layered evergreen tree silhouettes beneath a soft mountain mist |
| `mushroom` | **Forest Amanita** | Enchanted woodland Amanita grove with dimensional scarlet mushroom caps, spore gills, lush forest moss, and fiddlehead ferns |
| `cactus` | **Desert Saguaro** | Majestic Sonoran desert sunset with towering Saguaro cactus, blooming magenta flowers, and terracotta canyon dunes |
| `ocean` | **Surging Ocean Wave** | Majestic cresting deep-blue tidal wave with seafoam spray droplets |
| `monstera` | **Tropical Monstera** | Lush tropical Monstera Deliciosa rainforest foliage with realistic split-leaf fenestrations, delicate veins, and morning dewdrops |
| `hive` | **Golden Honeycomb** | Luxury Golden Honeycomb Horology featuring engine-turned hexagonal honey cells, dripping translucent liquid amber honey, and hyper-detailed worker honeybee with gossamer wings |
| `autumn` | **Autumn Maple Leaf** | Rich amber maple leaf with delicate veins and sunset forest colors |

### Places & Architecture (10 Clocks)
*World wonders, iconic landmarks, and historic cultural destinations*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `fuji` | **Mount Fuji** | Sacred Mount Fuji snow-capped volcanic cone under the Crimson Rising Sun with Japanese Torii gate, Lake Kawaguchi reflections, and Sakura cherry blossoms |
| `santorini` | **Santorini Island** | Iconic whitewashed Cycladic cliffside village of Oia overlooking the cobalt Aegean Sea caldera with cobalt blue church domes, bell towers, and blooming bougainvillea |
| `aurora_tromso` | **Tromsø Fjord** | Majestic Arctic Aurora Borealis glowing across snowy Norwegian fjords in Tromsø with cozy illuminated rorbu cabin and starry polar night |
| `pyramids` | **Giza Pyramids** | Ancient Giza Necropolis pyramids under an Egyptian twilight starry sky with glowing crescent moon, desert sand dunes, and camel caravan |
| `taj_mahal` | **Taj Mahal** | Detailed white marble Mughal palace with bulbous dome, 4 minarets, and lotus reflecting pool |
| `eiffel_tower` | **Eiffel Tower** | Parisian twilight skyline featuring the glowing golden iron lattice Eiffel Tower, searchlight beacon, and starry Parisian night |
| `machu_picchu` | **Machu Picchu** | Ancient Incan citadel of Machu Picchu nestled high in the Andean Cloud Forest with Huayna Picchu granite peaks, curved stone agricultural terraces, and Andean llama |
| `grand_canyon` | **Grand Canyon** | Grand Canyon majestic geological gorge at golden hour with multi-tiered red sandstone strata, carved canyon walls, and winding turquoise Colorado River |
| `venice` | **Venice Canal** | Romantic Venetian Grand Canal at twilight with Renaissance palazzos, striped wooden mooring poles, sleek black gondola, and rippling turquoise waters |
| `maldives` | **Maldives Overwater Villa** | Luxury tropical Maldives overwater thatch villa perched over crystalline turquoise coral lagoon with private sun deck, coconut palms, and marine rays |

### Planets & Astronomy (10 Clocks)
*Cosmic celestial dials spanning our solar system, sun, and deep space*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `earth_planet` | **Planet Earth** | Authentic NASA Blue Marble Earth centered on India with official Survey of India national boundary (including complete Jammu & Kashmir, Ladakh, and Aksai Chin), natural biomes, Himalayan snow ridges, and realistic monsoon storm spirals |
| `mars_planet` | **Red Planet Mars** | Red Planet Mars showing rust-red iron oxide regolith, massive Olympus Mons volcano caldera, Valles Marineris canyon rift, and white polar ice cap |
| `jupiter_planet` | **Great Spot Jupiter** | Great Gas Giant Jupiter showing Juno-quality turbulent atmospheric cloud belts, cyclonic storms, and the iconic swirling Great Red Spot anticyclone |
| `saturn_planet` | **Ringed Saturn** | Majestic Ringed Saturn gas giant showing Cassini-quality ring divisions (A, B, C rings, Cassini Division), ring shadow on globe, and giant moon Titan |
| `neptune_planet` | **Azure Neptune** | Deep Cobalt Azure Neptune ice giant showing supersonic methane wind streaks, the Great Dark Spot vortex, bright white cirrus clouds, and icy moon Triton |
| `moon_lunar` | **Lunar Surface** | Detailed Lunar Surface showing ancient basaltic Maria seas (Tranquillitatis, Serenitatis), Tycho impact crater with luminous ray ejecta filaments, and central peaks |
| `sun_fusion` | **Solar Star** | Dynamic nuclear fusion Solar Star showing convection cell granulation, magnetic coronal mass ejections, looping plasma prominences, and sunspot active regions |
| `venus_planet` | **Veiled Venus** | Veiled Venus showing ultraviolet atmospheric spectroscopy cloud swirls, golden-sulfuric acid wind belts, planetary Y-wave patterns, and dual polar vortices |
| `uranus_planet` | **Aquamarine Uranus** | Tilted Ice Giant Uranus showing serene pastel cyan-aquamarine methane atmosphere, luminous polar hood, thin vertical glowing ring system, and icy moon Miranda |
| `mercury_planet` | **Cratered Mercury** | Cratered Mercury showing MESSENGER-quality heavily bombarded metallic silicate crust, Caloris Basin multiring impact structure, and lobate thrust fault scarps |

### Sci-Fi & Cyber (13 Clocks)
*Futuristic HUDs, neon laser grids, CRT terminals, and holographic interfaces*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `radar` | **Sonar Radar** | Sweeping green radar HUD with crosshairs |
| `alien` | **Alien Interface** | Extraterrestrial glyphs with glowing cyan polygon dial |
| `warp` | **Warp Core** | Pulsing energy reactor with metallic struts |
| `holo` | **Hologram Grid** | Futuristic 3D perspective holographic wireframe grid with neon cyan scanner rings, chromatic glitch accents, and laser HUD reticles |
| `mecha` | **Mecha Eye** | Robotic terminator aperture with glowing red optical sensor |
| `timemachine` | **Flux Capacitor** | Y-shaped energy tubes and exposed tech components |
| `starship` | **Starship Dashboard** | Sleek white and cyan curved progress bars |
| `cyberdeck` | **Cyber Deck** | Neon yellow circuit board traces and microchip hub |
| `quantum` | **Quantum Reactor** | Orbiting electron rings with a glowing atomic core |
| `cyberpunk` | **Cyberpunk Neon Sci-Fi HUD Radar Hologram** | Futuristic sci-fi cyberpunk HUD clock with glowing neon indices and tech dials |
| `synthwave` | **80s Retro Outrun Synthwave Horizon Sunset** | 80s Retro Outrun Synthwave clock with wireframe horizon grid, segmented sunset, and neon magenta glow |
| `galaxy` | **Cosmic Galaxy Orbit Nebula Planetary Clock** | Cosmic deep space nebula clock with celestial constellation stars, orbiting planetary second hand, and golden starlight |
| `matrix` | **Matrix CRT Terminal Phosphor Green Hacker** | Phosphor green CRT terminal hacker clock with digital rain glyphs and scanline matrix |

### Cute & Cozy (5 Clocks)
*Playful illustrated dials, pastels, animals, and charming cottagecore aesthetics*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `owl` | **Sleepy Owl** | Mystical barn owl perched on a mossy oak branch beneath a luminous golden full moon |
| `penguin` | **Chilly Penguin** | Adorable Arctic penguin standing on an icy glacier beneath starry polar skies |
| `sun` | **Happy Sun** | Radiant smiling golden sun in an azure sky with fluffy white cloud companions and golden sunbeam rays |
| `kawaii` | **Kawaii Pastel Blushing Alarm Clock with Bells and Smile** | Cozy pastel twin-bell alarm clock with cute blushing cheeks, smiling face, and sparkle accents |
| `cottagecore` | **Cottagecore Mushroom Forest Daisy Floral Clock** | Handcrafted cozy cottagecore embroidery hoop with 360-degree botanical wildflower wreath, Amanita mushrooms, wild strawberries, and fairy lights |

### Luxury & Iconic Horology (13 Clocks)
*Masterpiece luxury chronometers, iconic real watches, and prestigious timepieces*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `swiss` | **Swiss Railway Station Clock Mondaine Lollipop** | Iconic Swiss Railway station clock with high-contrast dial and signature lollipop second hand |
| `luxury` | **Luxury Chronometer Roman Numerals Gold Bezel** | Prestige luxury chronograph with Roman numerals, brushed gold bezel, and refined sub-dial textures |
| `rolex-submariner` | **Rolex Submariner Dive Watch** | Iconic dive watch with a black dial, mercedes hands, and a diver bezel |
| `rolex-daytona` | **Rolex Daytona Chronograph** | Legendary chronograph with a tachymetric scale bezel and three sub-dials |
| `patek-philippe-nautilus` | **Patek Philippe Nautilus** | Luxury sports watch with an iconic porthole-inspired octagonal bezel and horizontal embossed dial |
| `audemars-piguet-royal-oak` | **Audemars Piguet Royal Oak** | Iconic octagonal bezel with hexagonal screws and tapisserie dial |
| `omega-speedmaster` | **Omega Speedmaster Moonwatch** | The Moonwatch, iconic chronograph with a black dial and tachymeter bezel |
| `tag-heuer-monaco` | **TAG Heuer Monaco** | Iconic square-cased chronograph with a blue dial, made famous by Steve McQueen |
| `breitling-navitimer` | **Breitling Navitimer** | Legendary aviation chronograph with a complex slide rule bezel and three sub-dials |
| `cartier-santos` | **Cartier Santos** | Classic square watch with rounded corners, 8 screws, and roman numerals |
| `iwc-portugieser` | **IWC Portugieser** | Elegant chronometer with a clean silver dial, applied Arabic numerals and feuille (leaf) hands |
| `titan-edge` | **Titan Edge** | Ultra-slim, minimalist quartz watch with a sleek black dial and two hands |
| `vintage` | **Victorian Antique Pocket Watch Parchment Breguet** | Antique Victorian pocket watch with parchment dial, ornate serif numerals, and filigree Breguet hands |

### Countries & National Heritage (29 Clocks)
*National flag colorways, cultural emblems, and national crest insignias*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `india` | **India Tricolor Ashoka Chakra 24 Spoke Watch** | Grand Bharat Luxury Commemorative Watch with guilloché sunray dial, 24-spoke Ashoka Chakra, faceted Dauphine hands, and Tricolor chapter ring |
| `japan` | **Japan Hinomaru Rising Sun Sakura Watch** | Japan Hinomaru Rising Sun watch with crimson red central sun, cherry blossom (Sakura) indices, and minimalist Japanese styling |
| `usa` | **USA Freedom Star Spangled Banner Watch** | United States Freedom watch with Star-Spangled 12-star chapter ring, patriotic tricolor shield, and gold sword hands |
| `uk` | **United Kingdom Union Jack Big Ben Roman Watch** | United Kingdom Union Jack watch with royal blue dial, Big Ben Roman numerals, and Breguet moon hands |
| `brazil` | **Brazil Tropical Rhombus Ordem e Progresso Watch** | Brazil Tropical watch with yellow rhombus, blue starry celestial globe, and canary yellow hands |
| `germany` | **Germany Schwarz Rot Gold Precision Watch** | Germany Precision watch with Schwarz-Rot-Gold tricolor bezel, Bundesadler crest iconography, and Bauhaus typography |
| `france` | **France Haute Horlogerie Tricolore Paris Watch** | France Haute Horlogerie watch with French Tricolore ribbon, Eiffel Tower crest, and bold French motto typography |
| `italy` | **Italy Luxury Milano Gold Roman Watch** | Italy Luxury watch with Milanese gold Roman numerals, tricolore flag accents, and guilloché texture |
| `australia` | **Australia Southern Cross Golden Wattle Watch** | Australia Southern Cross watch with deep ocean blue dial, glowing Southern Cross constellation, and Golden Wattle accents |
| `canada` | **Canada Red Maple Leaf Great White North Watch** | Canada Maple Leaf watch with iconic 11-pointed red maple leaf emblem, crimson side bars, and snow white dial |
| `spain` | **Spain Royal Viva Espana Watch** | Spain Royal watch with crimson red and gold tricolor, royal crown crest, and applied gold hour markers |
| `south-korea` | **South Korea Taegeuk Yin Yang Trigram Watch** | South Korea Taegeuk Yin Yang Trigram Watch |
| `switzerland` | **Switzerland Swiss Cross Alpine Watch** | Switzerland Alpine watch with Swiss red dial, bold white Swiss Cross emblem, and precision Swiss markers |
| `mexico` | **Mexico Aztec Viva Mexico Golden Eagle Watch** | Mexico Aztec watch with green, white, and red tricolor clipped strictly inside dial bounds, and Golden Eagle emblem |
| `argentina` | **Argentina Sol de Mayo Sun of May Watch** | Argentina Sun of May watch with sky blue & white horizontal stripes, 32-ray golden Sol de Mayo, and gold accents |
| `egypt` | **Egypt Pharaoh Eagle of Saladin Onyx Gold Watch** | Egypt Pharaoh watch with Golden Eagle of Saladin emblem, hieroglyphic gold dial, and luxury onyx black bezel |
| `sweden` | **Sweden Sverige Nordic Cross Watch** | Sweden Scandinavian watch with vibrant blue dial, Nordic yellow cross band, and clean Swedish minimalist styling |
| `south-africa` | **South Africa Rainbow Nation Flag Watch** | South Africa Rainbow Nation Flag Watch |
| `uae` | **UAE Falcon United Arab Emirates Dubai Watch** | United Arab Emirates Falcon watch with pan-Arab quad-colors, Golden Falcon crest, and luxury gold hour markers |
| `russia` | **Russia Tricolor Double-Headed Eagle Watch** | Russia watch with white, blue, and red tricolor clipped strictly inside dial bounds, and Golden Double-Headed Eagle emblem |
| `israel` | **Israel Magen David Star of David Watch** | Israel watch with pure white dial, dual royal blue horizontal stripes, and central Star of David (Magen David) emblem |
| `singapore` | **Singapore Lion City Crescent Moon Watch** | Singapore watch with crimson red & white split dial, crescent moon & 5 five-pointed stars emblem |
| `netherlands` | **Netherlands Oranje-Nassau Dutch Crown Watch** | Netherlands watch with Oranje-Nassau royal orange face, Red-White-Blue tricolor rim, and Dutch Golden Crown emblem |
| `greece` | **Greece Ellada Aegean Cross Olive Wreath Watch** | Greece watch with Aegean sea blue & white 9-stripe pattern, white Greek cross canton, and golden olive branch wreath |
| `new-zealand` | **New Zealand Aotearoa Southern Cross Fern Watch** | New Zealand Aotearoa Southern Cross Fern Watch |
| `vietnam` | **Vietnam Crimson Red Golden Star Watch** | Vietnam watch with vibrant crimson red dial and central golden 5-pointed star emblem clipped strictly inside dial bounds |
| `thailand` | **Thailand Trairanga Royal Garuda Watch** | Thailand watch with Trairanga 5-stripe flag, Royal Blue central band, and Golden Garuda emblem |
| `norway` | **Norway Norge Nordic Cross Ribbon Watch** | Norway watch with crimson red dial, white and indigo blue Nordic cross ribbon, and Viking rune indices |
| `indonesia` | **Indonesia Sang Saka Merah Putih Garuda Watch** | Indonesia watch with Sang Saka Merah-Putih red and white split dial, clipped strictly inside dial bounds, and Golden Garuda Pancasila emblem |

### Gaming & Pop Culture (3 Clocks)
*Iconic gaming dials, retro pixel art, and digital game culture*

| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `pokemon` | **Pokemon Pokeball Pikachu Lightning Watch** | Pokémon Pokéball watch with red & white split dial, central release button hub, and Pikachu lightning bolt second hand |
| `mario` | **Super Mario Bros Mushroom Kingdom Super Star Watch** | Super Mario Bros watch with Mushroom Kingdom sky blue dial, Super Star motif, and pixel brick chapter ring |
| `cyberpunk2077` | **Cyberpunk 2077 Night City Yellow HUD Watch** | Cyberpunk 2077 Night City watch with electric yellow dial, HUD target reticle, and Samurai cyber-skull emblem |

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