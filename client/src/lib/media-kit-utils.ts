import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

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

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const logos: Logo[] = [];
export const colorPalettes: ColorPalette[] = [];
export const fonts: Font[] = [];
export const appPreviews: AppPreview[] = []; 