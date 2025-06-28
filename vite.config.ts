import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(root, 'src/index.ts'),
      name: 'SampleDesignSystem',
      fileName: (format) => `index.${format}.js`,
      formats: ['es']
    },
    rollupOptions: {
      // For ES modules, externalize lit for better tree-shaking in bundlers
      external: ['lit'],
      output: {
        format: 'es',
        entryFileNames: 'index.es.js',
        globals: {
          'lit': 'Lit'
        }
      }
    },
    target: 'es2015',
    cssCodeSplit: false,
    minify: 'esbuild',
    sourcemap: true
  },
  server: {
    open: '/dev/'
  }
}); 