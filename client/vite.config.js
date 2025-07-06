// client/vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // ensures Vite reads from the client/ directory
  plugins: [react()],
  build: {
    outDir: 'dist', // output folder
    emptyOutDir: true,
  }
});
