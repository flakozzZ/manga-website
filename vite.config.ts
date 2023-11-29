import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath } from 'url'; // Use 'url' module from Node.js

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
    ]
  }
  plugins: [vue(), svgLoader()],
});