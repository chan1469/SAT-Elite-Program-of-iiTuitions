import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// Define a fallback for __dirname in ESM
const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      external: ['/src/main.tsx'],
    },
  },
  server: {
    middlewareMode: true, // Replace 'historyApiFallback' with 'middlewareMode'
  },
});
