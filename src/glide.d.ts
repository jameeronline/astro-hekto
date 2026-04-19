declare module '@glidejs/glide' {
  export default class Glide {
    constructor(element: string | Element, options?: Glide.Options);
    mount(extensions?: Glide.Extensions): this;
    destroy(): this;
    update(options?: Partial<Glide.Options>): this;
  }

  namespace Glide {
    interface Options {
      type?: string;
      startAt?: number;
      perView?: number;
      focusAt?: number | string;
      autoplay?: number | boolean;
      hoverpause?: boolean;
      keyboard?: boolean;
      bound?: boolean;
      swipeThreshold?: number;
      dragThreshold?: number;
      perTouch?: number;
      touchRatio?: number;
      minDragDistance?: number;
      gap?: number;
      animationDuration?: number;
      animationTimingFunc?: string;
      rebuildInterval?: number;
      rewindInterval?: number;
      autoplayInterval?: number;
      throttle?: number;
      media?: string;
      hoverClass?: string;
      runClass?: string;
      rtlClass?: string;
      ltrClass?: string;
      activeClass?: string;
      inactiveClass?: string;
      hoveringClass?: string;
      draggingClass?: string;
      nav?: string | false;
      navClass?: string;
      navClassCurrent?: string;
      navClassPrev?: string;
      navClassNext?: string;
      selector?: {
        nav?: string;
        previous?: string;
        next?: string;
        Autoplay?: string;
      };
      classes?: {
        nav?: {
          active?: string;
        };
        direction?: {
          ltr?: string;
          rtl?: string;
        };
      };
      breakpoints?: {
        [key: number]: Partial<Options>;
      };
    }

    interface Extensions {
      [key: string]: unknown;
    }
  }
}
