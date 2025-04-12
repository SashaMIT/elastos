declare module '@/lib/media-kit-utils' {
  export interface Logo {
    id: string;
    name: string;
    description: string;
    preview: string;
    downloadLink?: string;
    variants: Record<string, Record<string, string>>;
  }

  export interface ColorPalette {
    id: string;
    name: string;
    description?: string;
    colors: {
      name: string;
      hex: string;
      rgb?: string;
      opacity?: string;
    }[];
  }

  export interface Font {
    id: string;
    name: string;
    description: string;
    files: {
      name: string;
      weight: string;
      path: string;
    }[];
  }

  export const logos: Logo[];
  export const colorPalettes: ColorPalette[];
  export const fonts: Font[];
  export const appPreviews: {
    id: string;
    name: string;
    description: string;
    image: string;
  }[];
} 