import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  build: {
    // Bundle optimization settings
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate generated API files into their own chunks
          if (id.includes('/api/GreenOnion/')) {
            if (id.includes('/Schema/')) return 'api-schemas';
            if (id.includes('/Models/')) return 'api-models';
            if (id.includes('/Clients/')) return 'api-clients';
          }
          
          // Vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) return 'react-vendor';
            if (id.includes('primereact') || id.includes('primeicons')) return 'primereact-vendor';
            if (id.includes('@azure/msal')) return 'msal-vendor';
            if (id.includes('zod')) return 'zod-vendor';
            return 'vendor';
          }
        }
      },
      // Force single-threaded to prevent memory issues
      maxParallelFileOps: 1
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Use esbuild minifier (more memory efficient than terser)
    minify: 'esbuild',
    // Reduce memory usage during build
    sourcemap: false,
    // Optimize asset inlining threshold
    assetsInlineLimit: 4096,
  },
  // Performance optimizations
  optimizeDeps: {
    include: [
      'react',
      'react-dom',
      'react-router-dom',
      'primereact/api',
      'primereact/datatable',
      'primereact/button',
      'primereact/inputtext',
      'primereact/dropdown',
      'zod'
    ],
    exclude: [
      'primereact/chart' // Exclude chart from optimization to enable lazy loading
    ]
  },
});
