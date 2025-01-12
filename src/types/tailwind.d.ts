import 'react';

declare module 'react' {
  interface CSSProperties {
    [key: `--${string}`]: string | number
  }
}

declare module '@tailwind' {
  export interface Config {
    theme?: {
      extend?: {
        fontFamily?: {
          sans?: string[]
          heading?: string[]
          logo?: string[]
        }
      }
    }
  }
} 