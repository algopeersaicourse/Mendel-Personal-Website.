import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig(() => {
  return {
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          projects: resolve(__dirname, 'projects.html'),
          skills: resolve(__dirname, 'skills.html'),
          funFacts: resolve(__dirname, 'fun-facts.html'),
          contact: resolve(__dirname, 'contact.html'),
        },
      },
    },
  };
});
