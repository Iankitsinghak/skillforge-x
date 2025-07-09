import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',      
    emptyOutDir: true,    
    sourcemap: true,      
    chunkSizeWarningLimit: 1600, 
  },
  server: {
    port: 3000,          
    open: true,          
  },
  preview: {
    port: 3000,          
  },
  base: '/',            
});
