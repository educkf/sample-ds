import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// Configuration for building standalone components
export default defineConfig({
  build: {
    lib: {
      entry: resolve(root, 'src/components/sample-button/index.ts'),
      name: 'SampleButton',
      fileName: (format) => `sample-button.${format}.js`,
      formats: ['umd']
    },
    rollupOptions: {
      external: [], // Bundle everything for standalone usage
      output: {
        globals: {}, // No globals needed since we're bundling everything
        entryFileNames: 'sample-button.js', // Force .js extension
        format: 'umd'
      }
    },
    outDir: 'dist/components',
    emptyOutDir: false, // Don't clear the whole dist folder
    target: 'es2015',
    cssCodeSplit: false,
    minify: 'esbuild',
    sourcemap: true
  }
}); 