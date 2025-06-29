---
title: How to Use Sample Design System
description: Learn how to install and use the Sample Design System in your projects
---

# How to Use Sample Design System

A modern web component library built with Lit Framework that works everywhere - from modern bundlers to simple script tags.

## 🎯 Two Ways to Use

Our Design System supports **dual usage patterns** to fit any project:

1. **📦 NPM Package** - For modern build tools (Vite, Webpack, Parcel, etc.)
2. **🎯 Script Tags** - For direct HTML usage without build processes

## 📦 NPM Package Installation

### Install the Package
```bash
npm install sample-design-system-educkf
```

### Usage Options

#### Option 1: Import Individual Components (Recommended)
```javascript
// Import and auto-register specific components
import 'sample-design-system-educkf/components/sample-button';

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
import { SampleButton } from 'sample-design-system-educkf';

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
import 'sample-design-system-educkf';

// All components are now available
// <sample-button>, <sample-card>, etc.
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
  <script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-button.js"></script>
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
  <script src="https://unpkg.com/sample-design-system-educkf/dist/standalone/index.js"></script>
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
import 'sample-design-system-educkf/components/sample-button';

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
import 'sample-design-system-educkf/components/sample-button';

const handleClick = (event) => {
  console.log('Button clicked:', event.detail);
};
</script>
```

### Angular
```typescript
// app.module.ts
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'sample-design-system-educkf/components/sample-button';

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
  import 'sample-design-system-educkf/components/sample-button';
  
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

## 🛠️ Development Setup

If you want to contribute to the Sample Design System or run it locally:

```bash
# Clone the repository
git clone https://github.com/your-org/sample-design-system
cd sample-design-system

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

## 🎯 Best Practices

### Performance
- Import only the components you need
- Use tree-shaking with modern bundlers
- Consider using CDN for script tag usage

### Accessibility
- Always provide proper ARIA labels
- Test with keyboard navigation
- Ensure sufficient color contrast

### Theming
- Use CSS custom properties for consistency
- Test your themes across all components
- Consider dark mode compatibility

## 🤝 Support

- 💬 [GitHub Discussions](https://github.com/educkf/sample-ds/discussions)
- 🐛 [Report Issues](https://github.com/educkf/sample-ds/issues)
- 📧 [Email Support](mailto:support@yourorg.com) 