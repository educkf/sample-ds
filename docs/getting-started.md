# Getting Started with Sample Design System

A modern web component library built with Lit Framework that works everywhere - from modern bundlers to simple script tags.

## 🎯 Two Ways to Use

Our Design System supports **dual usage patterns** to fit any project:

1. **📦 NPM Package** - For modern build tools (Vite, Webpack, Parcel, etc.)
2. **🎯 Script Tags** - For direct HTML usage without build processes

## 📦 NPM Package Installation

### Install the Package
```bash
npm install sample-design-system
```

### Usage Options

#### Option 1: Import Individual Components (Recommended)
```javascript
// Import and auto-register specific components
import 'sample-design-system/components/sample-button';

// Now use in your HTML/templates
// <sample-button variant="primary">Click me!</sample-button>
```

**Benefits:**
- ✅ Optimal bundle size (only what you use)
- ✅ Tree-shaking friendly
- ✅ Automatic component registration

#### Option 2: Import Component Classes
```javascript
// Import component classes for manual control
import { SampleButton } from 'sample-design-system';

// Register with custom tag name
customElements.define('my-button', SampleButton);

// Or use the class directly
const button = new SampleButton();
document.body.appendChild(button);
```

**Benefits:**
- ✅ Custom element names
- ✅ Programmatic usage
- ✅ Full control over registration

#### Option 3: Import Everything
```javascript
// Import and register all components
import 'sample-design-system';

// All components are now available
// <sample-button>, <sample-input>, etc.
```

**Benefits:**
- ✅ Simple single import
- ✅ All components available immediately

### Bundle Information
- **Library size**: ~15KB (Lit externalized for optimal bundling)
- **Dependencies**: `lit` (peer dependency)
- **Format**: ES modules with tree-shaking support

## 🎯 Script Tag Installation

### CDN Usage

#### Individual Components
```html
<!DOCTYPE html>
<html>
<body>
  <sample-button variant="primary">Click me!</sample-button>
  
  <!-- Load only the component you need (~21KB) -->
  <script src="https://unpkg.com/sample-design-system/dist/components/sample-button.js"></script>
</body>
</html>
```

#### Complete Library
```html
<!DOCTYPE html>
<html>
<body>
  <sample-button variant="primary">Primary</sample-button>
  <sample-button variant="secondary">Secondary</sample-button>
  
  <!-- Load complete library (~21KB) -->
  <script src="https://unpkg.com/sample-design-system/dist/standalone/index.js"></script>
</body>
</html>
```

### Local Files
```html
<!-- Download and host locally -->
<script src="./js/sample-button.js"></script>
```

### Bundle Information  
- **Individual components**: ~21KB each (self-contained with Lit)
- **Complete library**: ~21KB (all components + Lit bundled)
- **Format**: UMD (works everywhere)

## 🚀 Framework Integration

### React
```jsx
import React from 'react';
import 'sample-design-system/components/sample-button';

function App() {
  const handleClick = (e) => {
    console.log('Button clicked:', e.detail);
  };

  return (
    <div>
      <sample-button 
        variant="primary" 
        size="large"
        onClick={handleClick}
      >
        React + Web Component
      </sample-button>
    </div>
  );
}

export default App;
```

### Vue 3
```vue
<template>
  <div>
    <sample-button 
      variant="secondary" 
      size="small"
      @sample-click="handleClick"
    >
      Vue + Web Component
    </sample-button>
  </div>
</template>

<script setup>
import 'sample-design-system/components/sample-button';

const handleClick = (event) => {
  console.log('Button clicked:', event.detail);
};
</script>
```

### Angular
```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'sample-design-system/components/sample-button';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
```

```html
<!-- app.component.html -->
<sample-button 
  variant="primary" 
  (sample-click)="onButtonClick($event)"
>
  Angular + Web Component
</sample-button>
```

### Svelte
```svelte
<script>
  import 'sample-design-system/components/sample-button';
  
  function handleClick(event) {
    console.log('Button clicked:', event.detail);
  }
</script>

<sample-button 
  variant="primary" 
  on:sample-click={handleClick}
>
  Svelte + Web Component
</sample-button>
```

## 🎨 Global Theming

### CSS Custom Properties
All components use CSS custom properties for theming:

```css
:root {
  /* Global color palette */
  --sample-primary-color: #007bff;
  --sample-secondary-color: #6c757d;
  --sample-success-color: #28a745;
  --sample-danger-color: #dc3545;
  --sample-warning-color: #ffc107;
  
  /* Typography */
  --sample-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --sample-font-size: 14px;
  --sample-line-height: 1.5;
  
  /* Spacing */
  --sample-spacing-xs: 2px;
  --sample-spacing-sm: 4px;
  --sample-spacing-md: 8px;
  --sample-spacing-lg: 16px;
  --sample-spacing-xl: 24px;
  
  /* Border radius */
  --sample-border-radius: 4px;
  --sample-border-radius-lg: 8px;
  
  /* Shadows */
  --sample-shadow-sm: 0 1px 2px rgba(0,0,0,0.1);
  --sample-shadow-md: 0 2px 4px rgba(0,0,0,0.1);
  --sample-shadow-lg: 0 4px 8px rgba(0,0,0,0.1);
}
```

### Dark Theme Example
```css
@media (prefers-color-scheme: dark) {
  :root {
    --sample-primary-color: #0d6efd;
    --sample-secondary-color: #6c757d;
    --sample-text-color: #ffffff;
    --sample-bg-color: #212529;
  }
}
```

## 🔧 Development Setup

### Prerequisites
- Node.js 16+
- NPM or Yarn

### Local Development
```bash
# Clone the repository
git clone https://github.com/your-org/sample-design-system
cd sample-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Start demo server (for standalone testing)
npm run demo

# Build for production
npm run build
```

### Development URLs
- **Bundled mode**: `http://localhost:5173/dev/`
- **Standalone mode**: `http://localhost:5173/demo/`

## 📚 Available Components

| Component | Status | Description |
|-----------|--------|-------------|
| `sample-button` | ✅ Available | Interactive button with variants and sizes |
| `sample-input` | 🚧 Coming Soon | Text input with validation |
| `sample-card` | 🚧 Coming Soon | Content container with header/footer |
| `sample-modal` | 🚧 Coming Soon | Overlay dialog component |

## 📖 Component Documentation

- [Button Component](./components/button.md)
- [Input Component](./components/input.md) *(Coming Soon)*
- [Card Component](./components/card.md) *(Coming Soon)*

## 🔍 TypeScript Support

Full TypeScript support with intelligent autocompletion:

```typescript
import { SampleButton } from 'sample-design-system';

// Type-safe property access
const button: SampleButton = document.querySelector('sample-button')!;
button.variant = 'secondary';  // ✓ Autocomplete: 'primary' | 'secondary'
button.size = 'large';         // ✓ Autocomplete: 'small' | 'medium' | 'large'
button.disabled = true;        // ✓ Type: boolean

// Type-safe event handling
button.addEventListener('sample-click', (e: CustomEvent) => {
  console.log(e.detail); // ✓ Type: { variant: string, size: string }
});
```

## 🌐 Browser Support

### Modern Browsers (Native Web Components)
- ✅ Chrome 61+
- ✅ Firefox 63+
- ✅ Safari 13+  
- ✅ Edge 79+

### Legacy Browser Support
For older browsers, include the web components polyfill:

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-bundle.js"></script>
<script src="https://unpkg.com/sample-design-system/dist/standalone/index.js"></script>
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](../CONTRIBUTING.md) for details.

### Component Development
1. Follow the [component development guidelines](.cursor/rules/component-development.mdc)
2. Test in both bundled and standalone modes
3. Include comprehensive documentation
4. Ensure accessibility compliance

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.

## 🆘 Support

- 📖 [Documentation](./getting-started.md)
- 🐛 [Issue Tracker](https://github.com/your-org/sample-design-system/issues)
- 💬 [Discussions](https://github.com/your-org/sample-design-system/discussions)
- 📧 [Email Support](mailto:support@yourorg.com) 