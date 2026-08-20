import { ClockOptions, TimeData } from './types';
import { getTimeData } from './engine/time';
import { renderClockSVG } from './engine/renderer';

export class AnalogClock extends HTMLElement {
  private shadow: ShadowRoot;
  private container: HTMLDivElement;
  private animFrameId: number | null = null;
  private timerId: number | null = null;
  private lastRenderedMinute: number = -1;
  private observer: IntersectionObserver | null = null;
  private isVisible: boolean = true;

  static get observedAttributes(): string[] {
    return [
      'theme',
      'timezone',
      'smooth',
      'size',
      'accent-color',
      'face-color',
      'hand-color',
      'show-seconds',
      'show-ticks'
    ];
  }

  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    this.container = document.createElement('div');
    this.container.className = 'analog-clock-container';
    this.shadow.appendChild(this.container);
  }

  connectedCallback(): void {
    this.updateStyles();
    this.setupIntersectionObserver();
    this.startClock();
  }

  disconnectedCallback(): void {
    this.cleanupIntersectionObserver();
    this.stopClock();
  }

  private setupIntersectionObserver(): void {
    if (this.id === 'modalClock' || this.closest('#studio-modal')) {
      this.isVisible = true;
      return;
    }

    if (typeof IntersectionObserver !== 'undefined') {
      this.observer = new IntersectionObserver((entries) => {
        const entry = entries[0];
        const isIntersecting = entry ? entry.isIntersecting : true;
        if (isIntersecting !== this.isVisible) {
          this.isVisible = isIntersecting;
          if (this.isVisible) {
            this.startClock();
          } else {
            this.stopClock();
          }
        }
      }, { rootMargin: '100px' });
      this.observer.observe(this);
    }
  }

  private cleanupIntersectionObserver(): void {
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
  }

  attributeChangedCallback(_name: string, oldValue: string | null, newValue: string | null): void {
    if (oldValue !== newValue) {
      this.updateStyles();
      this.startClock();
      this.render();
    }
  }

  public getOptions(): ClockOptions {
    const isSmooth = this.hasAttribute('smooth') 
      ? this.getAttribute('smooth') !== 'false' 
      : true;

    const showSeconds = this.hasAttribute('show-seconds')
      ? this.getAttribute('show-seconds') !== 'false'
      : true;

    const showTicks = this.hasAttribute('show-ticks')
      ? this.getAttribute('show-ticks') !== 'false'
      : true;

    return {
      theme: this.getAttribute('theme') || 'diver',
      timezone: this.getAttribute('timezone') || undefined,
      smooth: isSmooth,
      size: this.getAttribute('size') || undefined,
      accentColor: this.getAttribute('accent-color') || undefined,
      faceColor: this.getAttribute('face-color') || undefined,
      handColor: this.getAttribute('hand-color') || undefined,
      showSeconds,
      showTicks
    };
  }

  private updateStyles(): void {
    const size = this.getAttribute('size') || '100%';
    let styleTag = this.shadow.querySelector('style');
    if (!styleTag) {
      styleTag = document.createElement('style');
      this.shadow.prepend(styleTag);
    }

    styleTag.textContent = `
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: ${size};
        height: ${size};
        max-width: 100%;
        max-height: 100%;
        box-sizing: border-box;
        aspect-ratio: 1 / 1;
        user-select: none;
        vertical-align: middle;
      }
      .analog-clock-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
      }
      .clock-svg {
        width: 100%;
        height: 100%;
        display: block;
        transform: translateZ(0);
        will-change: transform;
      }
    `;
  }

  public startClock(): void {
    this.stopClock();
    this.isVisible = true;
    
    const opts = this.getOptions();

    if (opts.smooth) {
      const loop = () => {
        this.render();
        this.animFrameId = requestAnimationFrame(loop);
      };
      this.animFrameId = requestAnimationFrame(loop);
    } else {
      this.render();
      this.timerId = window.setInterval(() => {
        this.render();
      }, 1000);
    }
  }

  public stopClock(): void {
    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
    if (this.timerId !== null) {
      clearInterval(this.timerId);
      this.timerId = null;
    }
  }

  public render(): void {
    const opts = this.getOptions();
    const time = getTimeData(opts.timezone, opts.smooth);

    // Update SVG in container
    this.container.innerHTML = renderClockSVG(opts, time);
    
    // Update accessible label on minute change
    if (this.lastRenderedMinute !== time.minutes) {
      this.lastRenderedMinute = time.minutes;
      this.setAttribute('aria-label', `Analog clock displaying ${time.timeString12} (${time.timezoneName})`);
    }
  }
}
