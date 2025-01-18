import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/FSN5-GRUPO02-AUTOPECAS/',
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/ui/components', 
      '@pages': '/src/ui/pages',
      '@styles': '/src/styles',
      '@assets': '/src/assets',
    },
  },
  css: {
    postcss: {},
  },
  build: {
    outDir: 'docs',
  },
});
