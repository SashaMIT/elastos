declare module '@/lib/media-kit-utils' {
  export interface Logo {
    src: string;
    alt: string;
  }

  export interface ColorPalette {
    name: string;
    colors: string[];
  }

  export interface Font {
    name: string;
    family: string;
  }

  export const logos: Logo[];
  export const colorPalettes: ColorPalette[];
  export const fonts: Font[];
} 