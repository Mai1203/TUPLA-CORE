declare module 'aos' {
  import { Options } from 'aos';

  const AOS: {
    init(options?: Options): void;
    refresh(): void;
    refreshHard(): void;
  };

  export default AOS;
}
