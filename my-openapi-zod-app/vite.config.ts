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
        manualChunks: {
          // Vendor chunk for large libraries
          vendor: ['react', 'react-dom'],
          // PrimeReact components in separate chunk
          primereact: ['primereact/api', 'primereact/datatable', 'primereact/dialog'],
          // Chart library in separate chunk (lazy loaded)
          charts: ['primereact/chart'],
          // API clients in separate chunk
          api: ['@azure/msal-react', '@azure/msal-browser'],
          // Utility libraries
          utils: ['zod', 'react-router-dom']
        }
      }
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable minification
    minify: 'terser',
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
