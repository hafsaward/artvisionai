import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  define: {
    // This 'define' block replaces 'process.env.API_KEY' with the actual string 
    // throughout your code during the build process.
    'process.env.API_KEY': JSON.stringify("AIzaSyDaaBfwIXRf52d34hMNAdJPBRAfp7XIewE")
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true
  }
});