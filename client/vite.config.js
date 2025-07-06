// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // root is client/
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
