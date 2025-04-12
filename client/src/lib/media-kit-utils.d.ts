export interface Logo {
  id: string;
  name: string;
  description: string;
  preview: string;
  downloadLink: string;
  variants: {
    light?: {
      png: string;
      svg: string;
    };
    dark?: {
      png: string;
      svg: string;
    };
    standard?: {
      png: string;
    };
  };
}

export interface Color {
  name: string;
  hex: string;
  rgb?: string;
  opacity?: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  description: string;
  colors: Color[];
}

export interface FontFile {
  name: string;
  weight: string;
  path: string;
}

export interface Font {
  id: string;
  name: string;
  description: string;
  files: FontFile[];
}

export interface AppPreview {
  id: string;
  name: string;
  description: string;
  image: string;
}

export declare function cn(...args: any[]): string;
export declare const logos: Logo[];
export declare const colorPalettes: ColorPalette[];
export declare const fonts: Font[];
export declare const appPreviews: AppPreview[]; 