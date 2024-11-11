import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 10000
  },
  preview: {
    port: 10000
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});
