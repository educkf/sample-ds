import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath, URL } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));

// Get component name from environment variable or default to button
const componentName = process.env.COMPONENT || 'sample-button';
const componentMap = {
  'sample-button': {
    entry: resolve(root, 'src/components/sample-button/index.ts'),
    name: 'SampleButton'
  },
  'sample-card': {
    entry: resolve(root, 'src/components/sample-card/index.ts'),
    name: 'SampleCard'
  },
  'sample-alert': {
    entry: resolve(root, 'src/components/sample-alert/index.ts'),
    name: 'SampleAlert'
  },
  'sample-accordion': {
    entry: resolve(root, 'src/components/sample-accordion/index.ts'),
    name: 'SampleAccordion'
  }
};

const component = componentMap[componentName];
if (!component) {
  throw new Error(`Component ${componentName} not found`);
}

// Configuration for building standalone components
export default defineConfig({
  build: {
    lib: {
      entry: component.entry,
      name: component.name,
      fileName: () => `${componentName}.js`,
      formats: ['umd']
    },
    rollupOptions: {
      external: [], // Bundle everything for standalone usage
      output: {
        globals: {}, // No globals needed since we're bundling everything
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