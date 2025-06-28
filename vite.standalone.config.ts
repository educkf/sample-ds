import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// Configuration for building standalone UMD version (script tag usage)
export default defineConfig({
  build: {
    lib: {
      entry: resolve(root, 'src/index.ts'),
      name: 'SampleDesignSystem',
      fileName: 'index',
      formats: ['umd']
    },
    rollupOptions: {
      external: [], // Bundle everything including Lit for standalone usage
      output: {
        entryFileNames: 'index.js', // Force .js extension
        globals: {}
      }
    },
    outDir: 'dist/standalone',
    emptyOutDir: false,
    target: 'es2015',
    cssCodeSplit: false,
    minify: 'esbuild',
    sourcemap: true
  }
}); 