# Button Component

The `sample-button` component provides a flexible, themeable button for user interactions.

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system
```

```javascript
// Import individual component (recommended)
import 'sample-design-system/components/sample-button';

// Or import from main library
import { SampleButton } from 'sample-design-system';
```

### Script Tag (Standalone)
```html
<!-- Individual component -->
<script src="https://unpkg.com/sample-design-system/dist/components/sample-button.js"></script>

<!-- Or complete library -->
<script src="https://unpkg.com/sample-design-system/dist/standalone/index.js"></script>
```

## 🎯 Basic Usage

```html
<sample-button>Click me!</sample-button>
<sample-button variant="secondary">Secondary</sample-button>
<sample-button size="large" disabled>Disabled</sample-button>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

## 🔥 Events

| Event | Detail | Description |
|-------|--------|-------------|
| `sample-click` | `{ variant, size }` | Fired when button is clicked (not when disabled) |

### Event Usage
```javascript
document.querySelector('sample-button').addEventListener('sample-click', (e) => {
  console.log('Button clicked:', e.detail);
  // { variant: 'primary', size: 'medium' }
});
```

## 🎨 CSS Custom Properties

### Primary Colors
```css
--sample-button-bg: #007bff                    /* Background color */
--sample-button-color: white                   /* Text color */
--sample-button-border: #007bff                /* Border color */
--sample-button-bg-hover: #0056b3              /* Hover background */
--sample-button-border-hover: #0056b3          /* Hover border */
```

### Secondary Colors
```css
--sample-button-secondary-bg: transparent      /* Secondary background */
--sample-button-secondary-color: #007bff       /* Secondary text */
--sample-button-secondary-border: #007bff      /* Secondary border */
--sample-button-secondary-bg-hover: #007bff    /* Secondary hover bg */
--sample-button-secondary-color-hover: white   /* Secondary hover text */
```

### Sizing & Layout
```css
--sample-button-padding: 8px 16px              /* Default padding */
--sample-button-font-size: 14px                /* Default font size */
--sample-button-font-family: inherit           /* Font family */
--sample-button-radius: 4px                    /* Border radius */

/* Size variants */
--sample-button-small-padding: 4px 8px
--sample-button-small-font-size: 12px
--sample-button-large-padding: 12px 24px
--sample-button-large-font-size: 16px
```

### Focus & States
```css
--sample-button-focus-ring: rgba(0, 123, 255, 0.25)  /* Focus ring color */
```

## 🎨 CSS Parts

| Part | Description |
|------|-------------|
| `button` | The internal `<button>` element |

```css
/* Style the internal button element */
sample-button::part(button) {
  box-shadow: 0 2px 4px rgba(0,0,0,0.2);
  text-transform: uppercase;
}
```

## 🖼️ Examples

### Variants
```html
<sample-button variant="primary">Primary Button</sample-button>
<sample-button variant="secondary">Secondary Button</sample-button>
```

### Sizes
```html
<sample-button size="small">Small</sample-button>
<sample-button size="medium">Medium</sample-button>
<sample-button size="large">Large</sample-button>
```

### States
```html
<sample-button>Normal</sample-button>
<sample-button disabled>Disabled</sample-button>
```

### Form Usage
```html
<form>
  <sample-button type="submit">Submit Form</sample-button>
  <sample-button type="reset" variant="secondary">Reset</sample-button>
</form>
```

## 🎨 Custom Theming

### Global Theme
```css
:root {
  /* Custom brand colors */
  --sample-button-bg: #28a745;
  --sample-button-bg-hover: #218838;
  --sample-button-border: #28a745;
  --sample-button-border-hover: #218838;
}
```

### Per-Instance Theming
```html
<style>
  .hero-button {
    --sample-button-bg: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    --sample-button-color: white;
    --sample-button-padding: 16px 32px;
    --sample-button-font-size: 18px;
    --sample-button-radius: 25px;
  }
</style>

<sample-button class="hero-button">Hero Button</sample-button>
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system/components/sample-button';

function App() {
  const handleClick = (e) => {
    console.log('Clicked:', e.detail);
  };

  return (
    <sample-button 
      variant="primary" 
      size="large"
      onClick={handleClick}
    >
      React Button
    </sample-button>
  );
}
```

### Vue
```vue
<template>
  <sample-button 
    variant="secondary" 
    @sample-click="handleClick"
  >
    Vue Button
  </sample-button>
</template>

<script>
import 'sample-design-system/components/sample-button';

export default {
  methods: {
    handleClick(event) {
      console.log('Clicked:', event.detail);
    }
  }
}
</script>
```

### Angular
```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import 'sample-design-system/components/sample-button';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

```html
<!-- app.component.html -->
<sample-button 
  variant="primary" 
  (sample-click)="onButtonClick($event)"
>
  Angular Button
</sample-button>
```

## ♿ Accessibility

The button component includes:

- ✅ **Keyboard navigation** - Focus and activation with keyboard
- ✅ **Focus indicators** - Visible focus ring
- ✅ **Screen reader support** - Proper button semantics
- ✅ **Disabled state** - Prevents interaction when disabled

### ARIA Support
```html
<!-- Add ARIA attributes as needed -->
<sample-button aria-label="Close dialog">×</sample-button>
<sample-button aria-expanded="false">Menu</sample-button>
```

## 🌐 Browser Support

- ✅ Chrome 61+
- ✅ Firefox 63+  
- ✅ Safari 13+
- ✅ Edge 79+

For older browsers, include the [web components polyfill](https://github.com/webcomponents/polyfills).

## 📝 TypeScript

Full TypeScript support included:

```typescript
import { SampleButton } from 'sample-design-system';

const button: SampleButton = document.querySelector('sample-button')!;
button.variant = 'secondary';  // ✓ Type-safe
button.size = 'large';         // ✓ Type-safe  
button.disabled = true;        // ✓ Type-safe
```

```html
<!-- app.component.html -->
<sample-button 
  variant="primary" 
  (sample-click)="onButtonClick($event)"
>
  Angular Button
</sample-button>
``` 