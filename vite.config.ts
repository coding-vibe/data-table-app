import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import eslint from 'vite-plugin-eslint';

export default defineConfig({
  base: '/data-table-app/',
  plugins: [react(), eslint()],
  resolve: {
    alias: {
      assets: '/src/assets',
      components: '/src/components',
      constants: '/src/constants',
      fixtures: '/src/fixtures',
      types: '/src/types',
      utils: '/src/utils',
    },
  },
});
