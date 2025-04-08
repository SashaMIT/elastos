
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import checker from 'vite-plugin-checker';
import { setupVite, serveStatic } from './server/vite';

export default defineConfig({
  plugins: [
    react(),
    checker({ typescript: true, overlay: false }),
  ],
  cacheDir: './.vite',
  server: {
    host: true,
    watch: {
      ignored: ['**/server/**', '**/timestamp-*.mjs', '**/node_modules/**', '**/.git/**', '**/client/public/**', '**/dist/**', '**/.vite/**'],
      usePolling: true,
      interval: 1000,
      binaryInterval: 3000
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
    allowedHosts: ['teamela2.replit.app', 'elastosv2.replit.app', 'elastosnettest.replit.app', 'all']
  },
  optimizeDeps: {
    include: ['react-router-dom', 'embla-carousel-react', '@tabler/icons-react']
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
    commonjsOptions: {
      include: [/react-router-dom/, /embla-carousel-react/]
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Bundle all Tabler icons into a single chunk
          if (id.includes('@tabler/icons-react')) {
            return 'tabler-icons';
          }
        }
      }
    }
  }
});
