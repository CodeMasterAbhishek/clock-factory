# Clock Factory Documentation

This document provides detailed technical information on the API, available themes, and advanced customization for the `<analog-clock>` web component.

---

## API Reference

### Component Attributes

The `<analog-clock>` element accepts the following attributes:

| Attribute | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `theme` | `string` | `"swiss"` | Dial theme identifier (see [Available Themes](#available-themes)). |
| `timezone` | `string` | Local | Valid IANA timezone string (e.g., `"UTC"`, `"Asia/Tokyo"`). |
| `smooth` | `boolean` | `true` | `true` for 60 FPS continuous sweep, `false` for 1-second ticks. |
| `size` | `string` | `"100%"` | Clock dimensions (e.g., `"250px"`, `"16rem"`, `"100%"`). |
| `accent-color` | `string` | *Theme default* | Override color for second hand, accents, and center hub. |
| `face-color` | `string` | *Theme default* | Override background color for the clock dial. |
| `hand-color` | `string` | *Theme default* | Override color for hour and minute hands. |
| `show-seconds` | `boolean` | `true` | Show or hide the second hand. |
| `show-numbers` | `boolean` | `true` | Show or hide hour numerals / markers. |
| `show-ticks` | `boolean` | `true` | Show or hide minute and hour tick marks. |
| `label` | `string` | *Theme default* | Custom dial inscription text. |

### Element Methods

Instances of `AnalogClock` expose the following methods when accessed via JavaScript:

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `getTime()` | `TimeData` | Returns the current time calculation, angles, and formatted strings. |
| `getOptions()` | `ClockOptions` | Returns the current configuration options parsed from attributes. |
| `setTheme(name: string)` | `void` | Updates the active clock theme. |
| `setTimezone(tz: string)` | `void` | Updates the active clock timezone. |

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
| `rainforest_canopy` | Rainforest Canopy | Lush multi-tiered tropical jungle foliage with sunbeams and monstera fronds. |
| `desert_dunes` | Desert Oasis | Golden wind-swept Sahara sand dunes under a sun-drenched sky. |
| `crystal_cave` | Crystal Grotto | Prismatic amethyst and quartz stalactites glowing in cavernous darkness. |
| `monarch_migration` | Monarch Migration | Ethereal swarm of orange and black monarch butterflies in flight. |
| `ocean_bioluminescence` | Bioluminescent Tide | Midnight ocean shoreline sparkling with neon blue glowing dinoflagellates. |
| `autumn_forest` | Golden Aspen Forest | Radiant golden birch forest floor with falling amber leaves. |
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
| `terrarium` | Geometric Terrarium | Faceted glass polyhedron containing succulents, moss, and river pebbles. |
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
| `mushroom` | Forest Amanita | Red-capped Amanita muscaria toadstool with white speckles in damp moss. |
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
| `cottagecore` | Cottagecore Forest | Cozy woodland embroidery hoop with mushrooms, wild strawberries, and fairy lights. |
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
| `india` | India Tricolor | Saffron/green tricolor dial with Ashoka Chakra 24-spoke emblem in deep navy blue. |
| `japan` | Japan Hinomaru | Pure red Hinomaru central sun, sakura cherry blossom petal hour markers, and minimalist design. |
| `usa` | USA Freedom | Star-Spangled banner ring with 12 star hour markers, patriotic tricolor, and eagle gold accents. |
| `uk` | United Kingdom | Union Jack geometric cross design with Big Ben style Roman numerals and Breguet hands. |
| `brazil` | Brazil Tropical | Canary yellow rhombus diamond with blue celestial globe, star constellation, and canary hands. |
| `germany` | Germany Precision | Schwarz-Rot-Gold tricolor bezel with Bundesadler crest iconography and Bauhaus typography. |
| `france` | France Haute Horlogerie | French Tricolore vertical stripes, Paris fashion typography, and Eiffel Tower 12 o'clock accent. |
| `italy` | Italy Luxury | Italian tricolore rim with Milanese gold applied Roman numerals and guilloché texture. |
| `australia` | Australia Southern Cross | Deep ocean blue dial featuring the Southern Cross constellation stars and 7-pointed Commonwealth star. |
| `canada` | Canada Great White North | Snow white dial with crimson side bars and iconic central 11-pointed Red Maple Leaf emblem. |
| `spain` | Spain Royal | Viva España crimson & gold bezel with royal Spanish crown motif at 12 o'clock. |
| `south-korea` | South Korea Taegeuk | Red & blue Yin-Yang Taegeuk central circle with black I Ching trigram hour markers. |
| `switzerland` | Switzerland Alpine | Swiss Made matte red dial with bold equilateral white Swiss Cross central emblem. |
| `mexico` | Mexico Aztec | Mexican green outer bezel with Viva México Golden Eagle emblem and Aztec Sun Stone pattern. |
| `argentina` | Argentina Sol de Mayo | Celestial sky blue stripes with 32-ray golden Sol de Mayo (Sun of May) human face emblem. |
| `egypt` | Egypt Pharaoh | Onyx black bezel with Golden Eagle of Saladin emblem and hieroglyphic styling. |
| `sweden` | Sweden Scandinavia | Vibrant Swedish blue dial with Nordic yellow cross graphic and Scandinavian styling. |
| `south-africa` | South Africa Rainbow | Rainbow Nation green dial with iconic Y-shaped multi-color national flag ribbon. |
| `uae` | UAE Falcon | Pan-Arab quad-color accent ring with Golden Falcon emblem and luxury gold hour markers. |
| `russia` | Russia | White-blue-red tricolor face with Golden Double-Headed Eagle emblem and gold framing. |
| `israel` | Israel | Pure white dial with dual royal blue horizontal stripes and central Star of David (Magen David) emblem. |
| `singapore` | Singapore | Crimson red & white split dial with white crescent moon & 5 five-pointed stars emblem. |
| `netherlands` | Netherlands | Oranje-Nassau royal orange face with Dutch Golden Crown emblem and tricolor ring. |
| `greece` | Greece | Aegean sea blue & white 9-stripe flag with white Greek cross canton and golden olive branch wreath. |
| `new-zealand` | New Zealand | Deep navy dial with Union Jack canton and 4 red-and-white Southern Cross stars. |
| `vietnam` | Vietnam | Vibrant crimson red dial with central golden 5-pointed star emblem. |
| `thailand` | Thailand | Trairanga 5-stripe flag with Royal Blue central band and Golden Royal Garuda emblem. |
| `norway` | Norway | Crimson red dial with indigo blue & white Nordic cross ribbon. |
| `indonesia` | Indonesia | Sang Saka Merah-Putih red & white split dial with Golden Garuda Pancasila emblem. |

### Video Games
| Theme ID | Name | Description |
| :--- | :--- | :--- |
| `minecraft` | Minecraft 8-Bit | Grass & dirt block bezel with Creeper face subdial, Redstone dust trace, and Diamond Sword/Pickaxe hands. |
| `zelda` | Legend of Zelda | Royal Hylian Blue face with Triforce crest emblem, Master Sword hands, and glowing Zonai cyan runes. |
| `pokemon` | Pokémon Pokéball | Iconic Pokéball red & white split dial with center release button hub and Pikachu lightning hand. |
| `gta` | GTA Vice City | Neon Vice pink & cyan sunset horizon dial with palm tree silhouettes and 80s arcade styling. |
| `mario` | Super Mario | Mushroom Kingdom blue sky dial with golden Super Star emblem and Mario red hands. |
| `cyberpunk2077` | Cyberpunk 2077 | Electric yellow Night City HUD dial with Samurai cyber-skull emblem and glitch reticle. |
| `halo` | Halo Spartan-117 | Olive drab military green dial with Master Chief visor gold insignia and UNSC reticle. |
| `god-of-war` | God of War | Dark Nordic stone dial with glowing Leviathan frost cyan runes and Greek Omega crest. |
| `valorant` | VALORANT Tactical | Radianite red & dark charcoal tactical HUD dial with V-emblem and crosshair target reticle. |
| `elden-ring` | Elden Ring | Dark Erdtree bark dial with intersecting golden Elden runes and Site of Grace ray hands. |
| `fortnite` | Fortnite | Royal purple storm face with Victory Royale gold crown emblem and V-Bucks cyan ring. |
| `pacman` | Pac-Man | Retro 8-bit arcade face with Pac-Man chasing Blinky, Pinky, Inky, and Clyde ghosts around blue maze paths. |
| `sonic` | Sonic the Hedgehog | Green Hill Zone checkered grass pattern with 12 Golden Ring markers and Red Power Sneaker hands. |
| `tetris` | Tetris | Falling neon Tetrimino blocks (I, J, L, O, S, T, Z) forming the 12 hour positions on a matrix grid. |
| `assassins-creed` | Assassin's Creed | Dark slate Animus dial with bronze Assassin Crest emblem, Animus sync ring, and Hidden Blade hands. |
| `pixel-farm` | Stardew Valley Pixel Farm | Cozy farming sim pixel watch with wheat field background and farm tractor hands. |
| `league-of-legends` | League of Legends | Deep navy dial with Hextech cyan magic crystal subdial and gold Summoner framing. |
| `overwatch` | Overwatch | Metallic slate & orange tactical dial featuring the iconic Overwatch emblem. |
| `skyrim` | Skyrim | Dragonborn Akatosh Dragon Crest in iron/steel with icy tundra slate dial. |
| `roblox` | Roblox | White studio grid dial with tilted red square Roblox emblem. |
| `hollow-knight` | Hollow Knight | Void indigo dark dial with Hallownest Knight skull mask emblem and glowing Soul Vessel accents. |
| `fallout` | Fallout Pip-Boy | Vault-Tec yellow & navy blue CRT screen dial with radiation hazard symbol. |
| `dark-souls` | Dark Souls | Ash slate dial with coiled sword and glowing Bonfire flame emblem. |
| `red-dead` | Red Dead Redemption | Outlaw crimson red face with revolver 6-shot cylinder subdial and sunset gold accents. |
| `counter-strike` | Counter-Strike 2 | CS2 hazard orange & tactical black dial with bomb defusal C4 timer and reticle. |
| `world-of-warcraft` | World of Warcraft | Alliance gold & Horde crimson split dial with Azerite glowing core. |

---

## Custom Themes

Custom SVG themes can be registered programmatically using the `registerTheme` function:

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

Once registered, the theme can be used just like the built-in themes:
```html
<analog-clock theme="custom-dial"></analog-clock>
```
