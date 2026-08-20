export type BuiltInTheme = 'swiss' | 'cyberpunk' | 'neumorphic' | 'classic' | 'luxury' | 'hybrid' | 'minimal' | 'dark' | 'diver' | 'synthwave' | 'pilot' | 'matrix' | 'galaxy' | 'racing' | 'vintage' | 'glassmorphism' | 'kawaii' | 'pixel-farm' | 'cottagecore' | 'neko' | 'gshock' | 'chronograph' | 'regatta' | 'alpinist' | 'triathlon' | 'india' | 'japan' | 'usa' | 'uk' | 'brazil' | 'germany' | 'france' | 'italy' | 'australia' | 'canada' | 'spain' | 'south-korea' | 'switzerland' | 'mexico' | 'argentina' | 'egypt' | 'sweden' | 'uae' | 'russia' | 'israel' | 'singapore' | 'netherlands' | 'greece' | 'new-zealand' | 'vietnam' | 'thailand' | 'norway' | 'indonesia' | 'minecraft' | 'zelda' | 'pokemon' | 'gta' | 'mario' | 'cyberpunk2077' | 'halo' | 'god-of-war' | 'valorant' | 'elden-ring' | 'fortnite' | 'pacman' | 'sonic' | 'assassins-creed' | 'league-of-legends' | 'overwatch' | 'skyrim' | 'roblox' | 'hollow-knight' | 'fallout' | 'dark-souls' | 'red-dead' | 'counter-strike' | 'world-of-warcraft';
export interface ClockOptions {
    theme?: BuiltInTheme | string;
    timezone?: string;
    smooth?: boolean;
    size?: string;
    accentColor?: string;
    faceColor?: string;
    handColor?: string;
    showSeconds?: boolean;
    showNumbers?: boolean | "arabic" | "roman";
    showDate?: boolean;
    showTicks?: boolean;
    label?: string;
    blink?: boolean;
}
export interface TimeData {
    hour?: number;
    minute?: number;
    second?: number;
    date?: number;
    day?: number;
    hours: number;
    minutes: number;
    seconds: number;
    milliseconds: number;
    hourAngle: number;
    minuteAngle: number;
    secondAngle: number;
    dateString: string;
    dayString: string;
    monthString: string;
    timeString12: string;
    timeString24: string;
    timezoneName: string;
    isPm: boolean;
}
export interface ThemeColors {
    face: string;
    dialBorder: string;
    hourTicks: string;
    minuteTicks: string;
    numbers: string;
    hourHand: string;
    minuteHand: string;
    secondHand: string;
    accent: string;
    centerCap: string;
    subdialBg?: string;
    glow?: string;
    shadow?: string;
}
export interface ClockThemeRenderer {
    name: string;
    description?: string;
    defaultColors: Partial<ThemeColors>;
    renderDial: (options: ClockOptions, colors: ThemeColors, time: TimeData) => string;
    renderHands: (options: ClockOptions, colors: ThemeColors, time: TimeData) => string;
    renderOverlay?: (options: ClockOptions, colors: ThemeColors, time: TimeData) => string;
    getStyles?: (colors: ThemeColors) => string;
}
