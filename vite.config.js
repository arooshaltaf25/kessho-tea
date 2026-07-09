import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // esbuild minification is Vite's default and is faster than terser
    minify: 'esbuild',
    cssMinify: true,
    // Split vendor code from app code so browsers can cache React/Router
    // separately from code that changes on every deploy
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
    // Warn if any chunk creeps past a reasonable size budget
    chunkSizeWarningLimit: 300,
  },
});
