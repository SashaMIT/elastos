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
    strictPort: true,
    watch: {
      ignored: ['**/server/**', '**/timestamp-*.mjs', '**/node_modules/**', '**/.git/**', '**/client/public/**', '**/dist/**', '**/.vite/**'],
      usePolling: false
    },
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5001',
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
    include: ['react', 'react-dom', 'framer-motion'],
    esbuildOptions: {
      target: 'es2020',
      define: {
        global: 'globalThis'
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@db": path.resolve(__dirname, "db"),
      'framer-motion': 'framer-motion'
    }
  },
  root: path.resolve(__dirname, "client"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react';
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'framer-motion';
          }
          if (id.includes('@tabler/icons-react')) {
            return 'tabler-icons';
          }
          if (id.includes('react-router-dom')) {
            return 'router';
          }
          if (id.includes('@radix-ui')) {
            return 'ui';
          }
          if (id.includes('lucide-react')) {
            return 'icons';
          }
        }
      }
    },
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  }
});