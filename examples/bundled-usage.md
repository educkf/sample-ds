# Using Sample Design System in Bundled Projects

This shows how to use the Design System components in projects with build tools (Vite, Webpack, Parcel, etc.).

## Installation

```bash
npm install sample-design-system-educkf
```

## Usage Patterns

### 1. Import Individual Components

```javascript
// Import and auto-register the component
import 'sample-design-system-educkf/components/sample-button';

// Now use in HTML
// <sample-button variant="primary">Click me!</sample-button>
```

### 2. Import from Main Library

```javascript
// Import the component class
import { SampleButton } from 'sample-design-system-educkf';

// Register manually if needed
customElements.define('my-button', SampleButton);
```

### 3. Import All Components

```javascript
// Import and register all components
import 'sample-design-system-educkf';

// All components are now available:
// <sample-button>, etc.
```

## Framework Examples

### React

```jsx
import React from 'react';
import 'sample-design-system-educkf/components/sample-button';

function App() {
  return (
    <div>
      <sample-button 
        variant="primary" 
        size="large"
        onClick={(e) => console.log('Clicked!', e.detail)}
      >
        React + Web Component
      </sample-button>
    </div>
  );
}
```

### Vue

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

<script>
import 'sample-design-system-educkf/components/sample-button';

export default {
  methods: {
    handleClick(event) {
      console.log('Clicked!', event.detail);
    }
  }
}
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
    console.log('Clicked!', event.detail);
  }
</script>

<sample-button 
  variant="primary" 
  on:sample-click={handleClick}
>
  Svelte + Web Component
</sample-button>
```

## TypeScript Support

The library includes full TypeScript definitions:

```typescript
import { SampleButton } from 'sample-design-system-educkf';

// Full type safety
const button: SampleButton = document.querySelector('sample-button')!;
button.variant = 'secondary'; // ✓ Type-safe
button.size = 'large';        // ✓ Type-safe
button.disabled = true;       // ✓ Type-safe
```

## Bundle Size Optimization

When using a bundler, Lit is treated as a peer dependency for optimal bundle size:

- **Your bundle**: Only includes your components (~15KB for complete library)
- **Lit dependency**: Shared across all web components in your app
- **Tree shaking**: Only imports components you actually use

## CSS Theming

Customize component appearance with CSS custom properties:

```css
/* Global theming */
:root {
  --sample-button-bg: #28a745;
  --sample-button-color: white;
  --sample-button-radius: 8px;
}

/* Component-specific theming */
.my-special-button {
  --sample-button-bg: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  --sample-button-padding: 12px 24px;
}
```

```html
<sample-button class="my-special-button">
  Themed Button
</sample-button>
``` 