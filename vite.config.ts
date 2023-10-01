import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import { fileURLToPath } from 'url'; // Use 'url' module from Node.js

const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      '@': `${__dirname}/src`, // Construct the alias using __dirname
    },
  },
  plugins: [vue(), svgLoader()],
});