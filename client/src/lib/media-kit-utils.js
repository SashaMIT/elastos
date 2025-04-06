
// Utility functions for the Media Kit

export const cn = (...args) => {
  return args.filter(Boolean).join(" ");
};

export const logos = [
  {
    id: "elastos-logo",
    name: "Elastos Logo",
    description: "Official Elastos brand logo in various formats",
    preview: "/images/Elastos Logo Dark - 1.png",
    downloadLink: "/logo-assets/Elastos-Logo-Icon-ALL-2025.zip",
    variants: {
      light: {
        png: "/images/Elastos Logo Light - 1.png",
        svg: "/logo-assets/elastos-logo-light.svg"
      },
      dark: {
        png: "/images/Elastos Logo Dark - 1.png",
        svg: "/logo-assets/elastos-logo-dark.svg"
      }
    }
  },
  {
    id: "elastos-icon",
    name: "Elastos Icon",
    description: "Elastos brand icon for app and social media usage",
    preview: "/images/ElastOS 1.png",
    downloadLink: "/logo-assets/Elastos-Logo-Icon-ALL-2025.zip",
    variants: {
      standard: {
        png: "/images/ElastOS 1.png"
      }
    }
  },
  {
    id: "elastos-essentials",
    name: "Elastos Essentials",
    description: "Elastos Essentials wallet application logo",
    preview: "/images/Essentials.png",
    downloadLink: "/logo-assets/Elastos-Essentials-Logo-Kit.zip",
    variants: {
      standard: {
        png: "/images/Essentials.png"
      }
    }
  }
];

export const colorPalettes = [
  {
    id: "primary-colors",
    name: "Primary Brand Colors",
    description: "Official Elastos brand color palette",
    colors: [
      { name: "Elastos Orange", hex: "#F6921A" },
      { name: "Elastos Blue", hex: "#5C8EFF" },
      { name: "Dark Background", hex: "#171717" },
      { name: "Light Background", hex: "#FFFFFF" }
    ]
  },
  {
    id: "secondary-colors",
    name: "Secondary UI Colors",
    description: "Supporting colors for UI elements",
    colors: [
      { name: "Success Green", hex: "#4CAF50" },
      { name: "Warning Yellow", hex: "#FFC107" },
      { name: "Error Red", hex: "#F44336" },
      { name: "Info Blue", hex: "#2196F3" },
      { name: "Neutral Gray", hex: "#9E9E9E" }
    ]
  }
];

export const fonts = [
  {
    id: "telegraf",
    name: "PP Telegraf",
    description: "Primary Elastos typography family",
    files: [
      {
        name: "PP Telegraf Regular",
        weight: "400",
        path: "/logo-assets/PPTelegraf-Regular.otf"
      },
      {
        name: "PP Telegraf UltraLight",
        weight: "200",
        path: "/logo-assets/PPTelegraf-UltraLight.otf"
      }
    ]
  }
];

export const appPreviews = [
  {
    id: "essentials-mobile",
    name: "Elastos Essentials Mobile",
    description: "Elastos Essentials mobile wallet application UI",
    image: "/logo-assets/ELASTOS ESSENTIALS #1.jpg"
  },
  {
    id: "essentials-tablet-7",
    name: "Elastos Essentials Tablet (7-inch)",
    description: "Elastos Essentials tablet application UI (7-inch)",
    image: "/logo-assets/ELASTOS ESSENTIALS 7 tablet #1.jpg"
  },
  {
    id: "essentials-tablet-10",
    name: "Elastos Essentials Tablet (10-inch)",
    description: "Elastos Essentials tablet application UI (10-inch)",
    image: "/logo-assets/ELASTOS ESSENTIALS 10 tablet #1.jpg"
  }
];
