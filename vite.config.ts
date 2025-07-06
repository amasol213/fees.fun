import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    nodePolyfills({
      include: ['buffer', 'process', 'util', 'stream', 'crypto'],
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  define: {
    global: 'globalThis',
    'process.env': {},
  },
  optimizeDeps: {
    include: ['buffer', 'process'],
    exclude: ['lucide-react', '@solana/web3.js'],
  },
  resolve: {
    alias: {
      buffer: 'buffer',
      process: 'process/browser',
      util: 'util',
    },
  },
});