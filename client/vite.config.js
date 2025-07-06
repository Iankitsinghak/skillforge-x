// /client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.',     // start build from /client
  base: './',    // ensures relative paths for Vercel
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
