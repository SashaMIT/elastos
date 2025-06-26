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
    fs: {
      allow: [
        // Allow serving files from the root directory where node_modules is located
        path.resolve(__dirname),
        // Explicitly allow access to node_modules where React is installed
        path.resolve(__dirname, 'node_modules'),
        // Allow client directory
        path.resolve(__dirname, 'client'),
      ]
    },
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
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    allowedHosts: ['teamela2.replit.app', 'elastosv2.replit.app', 'elastosnettest.replit.app', 'elastosnet.replit.app', 'Elastos.net', 'www.elastos.net', 'elastos.net', 'a66d2cf2-889a-41aa-8bb1-ef462686fa46-00-24onv1up4iyt7.sisko.replit.dev', '4d4c1048-01fa-4d65-bf66-1a103b162732-00-2wyqqfgo642gj.pike.replit.dev', 'gitworking.replit.app', 'all', 'elastos.net', 'elastos-network.onrender.com']
  },
  preview: {
    host: true,
    port: 4175,
    strictPort: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
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
      'framer-motion': 'framer-motion',
      'react': path.resolve(__dirname, 'client/node_modules/react'),
      'react-dom': path.resolve(__dirname, 'client/node_modules/react-dom')
    }
  },
  root: path.resolve(__dirname, "client"),
  publicDir: path.resolve(__dirname, "client/public"),
  build: {
    outDir: path.resolve(__dirname, "dist/public"),
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Disable manual chunks to prevent code splitting that could cause NewsSection issues
        // manualChunks: undefined,
        
        // Alternative approach: Explicitly include NewsSection in the main chunk
        manualChunks(id) {
          // Keep NewsSection and its dependencies in the main bundle
          if (id.includes('NewsSection') || id.includes('components/ui/spinner') ||
              id.includes('components/ui/optimized-image') || id.includes('components/ui/skeleton')) {
            return 'main';
          }
          
          // Continue with other chunking logic
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
        },
        // Add cache busting with a content hash for all files
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      },
      input: {
        main: path.resolve(__dirname, 'client/index.html')
      }
    },
    // Disable code splitting completely (alternative approach)
    // cssCodeSplit: false,
    // minify: true,
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    },
    assetsDir: 'assets',
    manifest: true,
    sourcemap: true,
    copyPublicDir: true,
    assetsInlineLimit: 4096, // 4kb - files smaller than this will be inlined as base64
  },
  base: '/',
});