import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  preview: {
    port: 4200,
    strictPort: true,
  },
  server: {
    port: 4200,
    strictPort: true,
    host: true,
  },
  plugins: [react()],
});
