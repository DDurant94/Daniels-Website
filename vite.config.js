import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: process.env.PORT || 10000,
    host: '0.0.0.0'
  },
  preview: {
    port: process.env.PORT || 10000,
    host: '0.0.0.0',
    allowedHosts: ['daniel-durant.onrender.com']
  },
  define: {
    'process.env.NODE_ENV': '"production"'
  }
});
