import { ClockOptions } from './types';
export declare class AnalogClock extends HTMLElement {
    private shadow;
    private container;
    private animFrameId;
    private timerId;
    private lastRenderedMinute;
    private observer;
    private isVisible;
    static get observedAttributes(): string[];
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    private setupIntersectionObserver;
    private cleanupIntersectionObserver;
    attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void;
    getOptions(): ClockOptions;
    private updateStyles;
    startClock(): void;
    stopClock(): void;
    render(): void;
}
