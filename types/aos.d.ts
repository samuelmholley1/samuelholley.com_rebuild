// types/aos.d.ts
declare module 'aos' {
  interface InitOptions {
    offset?: number;
    delay?: number;
    duration?: number;
    easing?: string;
    once?: boolean;
    mirror?: boolean;
    anchorPlacement?: string;
    // add any other options you need
  }
  export function init(options?: InitOptions): void;
  const AOS: { init: typeof init };
  export default AOS;
}
