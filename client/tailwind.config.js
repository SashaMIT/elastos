/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    'min-h-[48px]',
    'min-h-[44px]',
    'min-w-[120px]',
    'touch-auto',
    'cursor-pointer',
    'justify-center'
  ],
  theme: {
    fontFamily: {
      sans: [
        'PP Telegraf Ultralight',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Helvetica Neue',
        'Arial',
        'sans-serif'
      ],
      regular: ['PP Telegraf Regular'],
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      maxWidth: {
        container: "1280px",
      },
      animation: {
        'star-movement-bottom': 'star-movement-bottom 3s linear infinite',
        'star-movement-top': 'star-movement-top 3s linear infinite',
        marquee: 'marquee var(--duration) linear infinite',
      },
      keyframes: {
        'star-movement-bottom': {
          '0%': { transform: 'translate(100%, 0%)', opacity: '0.8' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(-100%, 0%)', opacity: '0.8' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' }
        }
      },
    },
  },
  plugins: [],
}