// Utility functions for the Media Kit

export const cn = (...args) => {
  return args.filter(Boolean).join(" ");
};

export const logos = [
  {
    id: "elastos-logo",
    name: "Elastos Logo",
    description: "Elastos brand logo and icons in various formats",
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
    id: "elastos-essentials",
    name: "Elastos Essentials",
    description: "Elastos Essentials wallet application logo",
    preview: "/images/Website Graphics/Elastos Essentials.png",
    downloadLink: "/logo-assets/Elastos-Essentials-Logo-Kit.zip",
    variants: {
      standard: {
        png: "/images/Website Graphics/Elastos Essentials.png"
      }
    }
  }
];

export const colorPalettes = [
  {
    id: "brand",
    name: "Brand Colors",
    description: "Primary brand colors for Elastos",
    colors: [
      { name: "Orange", hex: "#F6921A" },
      { name: "Blue", hex: "#5C8EFF" },
      { name: "Black", hex: "#171717" },
      { name: "White", hex: "#FFFFFF" }
    ]
  },
  {
    id: "black-white-variations",
    name: "Black & White Variations",
    description: "Black and white color variations with different opacity levels",
    colors: [
      { name: "Code: Black #1", hex: "#141414", rgb: "RGB 20 20 20" },
      { name: "Code: White #1", hex: "#FFFFFF", rgb: "RGB 255 255 255" },
      { name: "Code: White #2 (50%)", hex: "#FFFFFF", rgb: "RGB 255 255 255", opacity: "50%" },
      { name: "Code: White #3 (20%)", hex: "#FFFFFF", rgb: "RGB 255 255 255", opacity: "20%" },
      { name: "Code: White #4 (10%)", hex: "#FFFFFF", rgb: "RGB 255 255 255", opacity: "10%" },
      { name: "Code: White #5 (5%)", hex: "#FFFFFF", rgb: "RGB 255 255 255", opacity: "5%" }
    ]
  },
  {
    id: "orange-variations",
    name: "Orange Variations",
    description: "Orange color variations with different opacity levels",
    colors: [
      { name: "Code: Orange #1", hex: "#F6921A", rgb: "RGB 246 146 26" },
      { name: "Code: Orange #2 (50%)", hex: "#F6921A", rgb: "RGB 246 146 26", opacity: "50%" },
      { name: "Code: Orange #3 (20%)", hex: "#F6921A", rgb: "RGB 246 146 26", opacity: "20%" },
      { name: "Code: Orange #4 (10%)", hex: "#F6921A", rgb: "RGB 246 146 26", opacity: "10%" },
      { name: "Code: Orange #5 (5%)", hex: "#F6921A", rgb: "RGB 246 146 26", opacity: "5%" }
    ]
  },
  {
    id: "blue-variations",
    name: "Blue Variations",
    description: "Blue color variations with different opacity levels",
    colors: [
      { name: "Code: Blue #1", hex: "#95B5FF", rgb: "RGB 149 181 255" },
      { name: "Code: Blue #2 (50%)", hex: "#95B5FF", rgb: "RGB 149 181 255", opacity: "50%" },
      { name: "Code: Blue #3 (20%)", hex: "#95B5FF", rgb: "RGB 149 181 255", opacity: "20%" },
      { name: "Code: Blue #4 (10%)", hex: "#95B5FF", rgb: "RGB 149 181 255", opacity: "10%" },
      { name: "Code: Blue #5 (5%)", hex: "#95B5FF", rgb: "RGB 149 181 255", opacity: "5%" }
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