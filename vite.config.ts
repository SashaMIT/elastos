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
    port: 3000,
    strictPort: false,
    watch: {
      ignored: ['**/server/**', '**/timestamp-*.mjs', '**/node_modules/**', '**/.git/**', '**/client/public/**', '**/dist/**', '**/.vite/**'],
      usePolling: false
    },
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
        ws: true
      }
    },
    hmr: {
      port: 3001
    },
    allowedHosts: ['teamela2.replit.app', 'elastosv2.replit.app', 'elastosnettest.replit.app', 'elastosnet.replit.app', 'Elastos.net', 'www.elastos.net', 'elastos.net', 'a66d2cf2-889a-41aa-8bb1-ef462686fa46-00-24onv1up4iyt7.sisko.replit.dev', '4d4c1048-01fa-4d65-bf66-1a103b162732-00-2wyqqfgo642gj.pike.replit.dev', 'gitworking.replit.app', 'all', 'elastos.net']
  },
  optimizeDeps: {
    include: ['react-router-dom', 'embla-carousel-react']
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
    // Enable compression for build assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true,
    reportCompressedSize: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Bundle all Tabler icons into a single chunk. This is now redundant, but kept for completeness in case of future needs.
          if (id.includes('@tabler/icons-react')) {
            return 'tabler-icons';
          }
          // Bundle vendor libraries
          if (id.includes('react') || id.includes('react-dom') || id.includes('react-router-dom')) {
            return 'vendor';
          }
          // Bundle Radix UI components
          if (id.includes('@radix-ui/react-accordion') || id.includes('@radix-ui/react-dialog') || id.includes('@radix-ui/react-navigation-menu') || id.includes('@radix-ui/react-tabs') || id.includes('@radix-ui/react-tooltip')) {
            return 'ui';
          }
          // Bundle Lucide icons
          if (id.includes('lucide-react')) {
            return 'icons';
          }
        }
      }
    }
  }
});