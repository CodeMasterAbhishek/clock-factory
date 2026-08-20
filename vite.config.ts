import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig(({ mode }) => {
  if (mode === 'bundle') {
    // Standalone IIFE bundle for direct script tag & CDN usage
    return {
      build: {
        emptyOutDir: false,
        lib: {
          entry: resolve('./src/index.ts'),
          name: 'ClockFactory',
          formats: ['iife'],
          fileName: () => 'analog-clock.min.js'
        },
        rollupOptions: {
          output: {
            exports: 'named'
          }
        }
      }
    };
  }

  // Standard library build (ESM + CommonJS)
  return {
    build: {
      emptyOutDir: true,
      lib: {
        entry: resolve('./src/index.ts'),
        name: 'ClockFactory',
        formats: ['es', 'cjs'],
        fileName: (format) => (format === 'es' ? 'index.js' : 'index.cjs')
      },
      rollupOptions: {
        output: {
          exports: 'named'
        }
      }
    }
  };
});
