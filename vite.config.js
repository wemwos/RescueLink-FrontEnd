import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.js'],
  },
  css: {
    modules: true, // Enable CSS modules
  },
  build: {
    cssCodeSplit: true, // Ensure CSS is extracted into separate files
    outDir: 'dist', // Specify the output directory
    assetsDir: 'assets', // Specify the assets directory
    assetsInlineLimit: 4096, // Adjust as needed
    rollupOptions: {
      // Output CSS to the 'css' subdirectory of the assets directory
      output: {
        assetFileNames: 'css/[name].[hash].[ext]',
      },
    },
  },
});
