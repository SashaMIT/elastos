
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import themePlugin from "@replit/vite-plugin-shadcn-theme-json";
import path from "path";
import { fileURLToPath } from 'url';
import checker from "vite-plugin-checker";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true, overlay: false }),
    runtimeErrorOverlay(),
    themePlugin(),
  ],
  cacheDir: './.vite',
  server: {
    host: true,
    watch: {
      ignored: ['**/server/**', '**/timestamp-*.mjs']
    },
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    },
    hmr: {
      clientPort: 443
    },
    allowedHosts: ['c0b56459-2666-4001-a4bb-92502af66317-00-1dvqr9mkxq95y.sisko.replit.dev', '024bbc9c-b64f-4b5b-b383-44ef1ae09c01-00-ogqry17bf5w4.sisko.replit.dev', 'elastosv2.replit.app', 'all']
  },
  optimizeDeps: {
    include: ['react-router-dom', 'embla-carousel-react']
  },
  build: {
    commonjsOptions: {
      include: [/react-router-dom/, /embla-carousel-react/]
    }
  },
  preview: {
    allowedHosts: ['40ee1e9c-bb19-40b3-ba1b-7472385ea1a9-00-ikq7e4uo92qy.sisko.replit.dev', '97e468ba-db9b-46ab-ad49-a5e38432a13e-00-265z52dt16z5o.pike.replit.dev', 'f21bf8aa-8580-4ccd-8c96-43070707f451-00-1ztb8fgmq5gwv.sisko.replit.dev', '1f5552db-1a91-4905-9c39-c06e02446d98-00-2dptpxt44szef.pike.replit.dev', '024bbc9c-b64f-4b5b-b383-44ef1ae09c01-00-ogqry17bf5w4.sisko.replit.dev', 'teamela2.replit.app', 'elastosv2.replit.app']
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@db": path.resolve(__dirname, "db"),
    },
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
  },
});
