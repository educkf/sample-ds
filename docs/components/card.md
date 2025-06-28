# Card Component

The `sample-card` component provides a flexible container for organizing and displaying content in a structured format. It supports multiple variants, sizes, and interactive behaviors while maintaining consistent theming across the Design System.

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system
```

```javascript
// Import the component
import 'sample-design-system/components/sample-card';
// Or import the class for programmatic usage
import { SampleCard } from 'sample-design-system';
```

### Script Tag (Standalone)
```html
<script src="https://unpkg.com/sample-design-system/dist/components/sample-card.js"></script>
```

## 🎯 Basic Usage

### Simple Card
```html
<sample-card>
  <p>This is a basic card with some content.</p>
</sample-card>
```

### Card with Header and Footer
```html
<sample-card>
  <div slot="header">Card Title</div>
  <p>Main content goes here.</p>
  <div slot="footer">
    <button>Action</button>
  </div>
</sample-card>
```

### Clickable Card
```html
<sample-card clickable>
  <div slot="header">Interactive Card</div>
  <p>Click anywhere on this card to trigger an event.</p>
</sample-card>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | `'default'` | Visual style variant of the card |
| `size` | `'compact' \| 'default' \| 'spacious'` | `'default'` | Size variation affecting padding and spacing |
| `clickable` | `boolean` | `false` | Whether the card responds to click events |
| `disabled` | `boolean` | `false` | Whether the card is disabled (only applies if clickable) |

## 🔥 Events

| Event | Type | Description |
|-------|------|-------------|
| `sample-card-click` | `CustomEvent<{ variant: string, size: string, timestamp: number }>` | Fired when clickable card is clicked or activated with keyboard |

### Event Usage Example
```javascript
document.querySelector('sample-card').addEventListener('sample-card-click', (event) => {
  console.log('Card clicked:', event.detail);
  // { variant: 'default', size: 'default', timestamp: 1234567890 }
});
```

## 🎨 CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--sample-card-bg` | `white` | Background color of the card |
| `--sample-card-color` | `#212529` | Text color |
| `--sample-card-border` | `#dee2e6` | Border color |
| `--sample-card-border-width` | `1px` | Border width |
| `--sample-card-border-radius` | `8px` | Border radius |
| `--sample-card-shadow` | `0 2px 4px rgba(0,0,0,0.1)` | Box shadow |
| `--sample-card-shadow-hover` | `0 4px 12px rgba(0,0,0,0.15)` | Box shadow on hover (clickable) |
| `--sample-card-shadow-elevated` | `0 4px 12px rgba(0,0,0,0.15)` | Box shadow for elevated variant |
| `--sample-card-padding` | `16px` | Internal padding |
| `--sample-card-gap` | `12px` | Gap between elements in card body |
| `--sample-card-header-bg` | `transparent` | Header background color |
| `--sample-card-header-font-weight` | `600` | Header font weight |
| `--sample-card-footer-bg` | `transparent` | Footer background color |
| `--sample-card-filled-bg` | `#f8f9fa` | Background for filled variant |
| `--sample-card-focus-ring` | `#007bff` | Focus ring color for accessibility |

## 🎨 CSS Parts

| Part | Description |
|------|-------------|
| `card` | The main card container |
| `header` | The header section |
| `body` | The main content area |
| `footer` | The footer section |

### External Styling Example
```css
sample-card::part(card) {
  box-shadow: 0 8px 32px rgba(0,0,0,0.2);
}

sample-card::part(header) {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}
```

## 🖼️ Examples

### Variants
```html
<!-- Default card -->
<sample-card>
  <div slot="header">Default Card</div>
  <p>Standard card with subtle border and shadow.</p>
</sample-card>

<!-- Elevated card -->
<sample-card variant="elevated">
  <div slot="header">Elevated Card</div>
  <p>Card with prominent shadow and no border.</p>
</sample-card>

<!-- Outlined card -->
<sample-card variant="outlined">
  <div slot="header">Outlined Card</div>
  <p>Card with emphasized border and no shadow.</p>
</sample-card>

<!-- Filled card -->
<sample-card variant="filled">
  <div slot="header">Filled Card</div>
  <p>Card with background fill and no border or shadow.</p>
</sample-card>
```

### Sizes
```html
<!-- Compact card -->
<sample-card size="compact">
  <div slot="header">Compact</div>
  <p>Reduced padding for dense layouts.</p>
</sample-card>

<!-- Default size -->
<sample-card>
  <div slot="header">Default</div>
  <p>Standard padding for balanced appearance.</p>
</sample-card>

<!-- Spacious card -->
<sample-card size="spacious">
  <div slot="header">Spacious</div>
  <p>Increased padding for comfortable reading.</p>
</sample-card>
```

### Interactive States
```html
<!-- Clickable card -->
<sample-card clickable>
  <div slot="header">Clickable Card</div>
  <p>Hover and click to see interactive effects.</p>
  <div slot="footer">Click me!</div>
</sample-card>

<!-- Disabled clickable card -->
<sample-card clickable disabled>
  <div slot="header">Disabled Card</div>
  <p>This card is disabled and won't respond to clicks.</p>
</sample-card>
```

### Complex Layout
```html
<sample-card variant="elevated" size="spacious">
  <div slot="header">
    <h3 style="margin: 0;">Product Card</h3>
    <small style="color: #6c757d;">Premium Item</small>
  </div>
  
  <div style="display: flex; gap: 16px; align-items: center;">
    <img src="product.jpg" alt="Product" style="width: 80px; height: 80px; border-radius: 8px;">
    <div>
      <h4 style="margin: 0 0 8px 0;">Amazing Product</h4>
      <p style="margin: 0; color: #6c757d;">High-quality item with excellent features.</p>
      <strong style="color: #007bff; font-size: 18px;">$99.99</strong>
    </div>
  </div>
  
  <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
    <button>Add to Cart</button>
    <button>Learn More</button>
  </div>
</sample-card>
```

## 🎨 Custom Theming

### Global Theming
```css
:root {
  --sample-card-bg: #1a1a1a;
  --sample-card-color: #ffffff;
  --sample-card-border: #333333;
  --sample-card-shadow: 0 4px 20px rgba(0,0,0,0.3);
}
```

### Per-Instance Theming
```html
<sample-card style="
  --sample-card-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --sample-card-color: white;
  --sample-card-border: transparent;
">
  <div slot="header">Gradient Card</div>
  <p>Custom gradient background with white text.</p>
</sample-card>
```

### Brand Colors
```css
.brand-card {
  --sample-card-bg: var(--brand-primary);
  --sample-card-color: var(--brand-on-primary);
  --sample-card-border: var(--brand-primary-variant);
}
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system/components/sample-card';

function ProductCard({ product }) {
  const handleCardClick = (event) => {
    console.log('Card clicked:', event.detail);
  };

  return (
    <sample-card 
      clickable 
      variant="elevated"
      onSampleCardClick={handleCardClick}
    >
      <div slot="header">{product.name}</div>
      <p>{product.description}</p>
      <div slot="footer">
        <button>Buy Now</button>
      </div>
    </sample-card>
  );
}
```

### Vue
```vue
<template>
  <sample-card 
    :clickable="true" 
    variant="elevated"
    @sample-card-click="handleCardClick"
  >
    <div slot="header">{{ product.name }}</div>
    <p>{{ product.description }}</p>
    <div slot="footer">
      <button>Buy Now</button>
    </div>
  </sample-card>
</template>

<script>
import 'sample-design-system/components/sample-card';

export default {
  methods: {
    handleCardClick(event) {
      console.log('Card clicked:', event.detail);
    }
  }
}
</script>
```

### Angular
```typescript
// app.component.ts
import 'sample-design-system/components/sample-card';

@Component({
  selector: 'app-root',
  template: `
    <sample-card 
      [clickable]="true" 
      variant="elevated"
      (sample-card-click)="handleCardClick($event)"
    >
      <div slot="header">{{ product.name }}</div>
      <p>{{ product.description }}</p>
      <div slot="footer">
        <button>Buy Now</button>
      </div>
    </sample-card>
  `
})
export class AppComponent {
  handleCardClick(event: CustomEvent) {
    console.log('Card clicked:', event.detail);
  }
}
```

### Svelte
```svelte
<script>
  import 'sample-design-system/components/sample-card';
  
  function handleCardClick(event) {
    console.log('Card clicked:', event.detail);
  }
</script>

<sample-card 
  clickable 
  variant="elevated"
  on:sample-card-click={handleCardClick}
>
  <div slot="header">{product.name}</div>
  <p>{product.description}</p>
  <div slot="footer">
    <button>Buy Now</button>
  </div>
</sample-card>
```

## ♿ Accessibility

### WCAG Compliance Features

- **Keyboard Navigation**: Clickable cards support Enter and Space key activation
- **Focus Management**: Clear focus indicators with customizable focus ring
- **ARIA Support**: Proper `role` and `aria-disabled` attributes
- **Screen Reader Support**: Semantic HTML structure with proper heading hierarchy
- **Color Contrast**: Default colors meet WCAG AA standards

### Best Practices

```html
<!-- Use proper heading hierarchy -->
<sample-card>
  <div slot="header">
    <h2>Card Title</h2>
  </div>
  <p>Descriptive content that provides context.</p>
</sample-card>

<!-- Provide meaningful content for screen readers -->
<sample-card clickable aria-label="View product details">
  <div slot="header">Product Name</div>
  <p>Product description and key features.</p>
</sample-card>

<!-- Use sufficient color contrast -->
<sample-card style="
  --sample-card-bg: #003366;
  --sample-card-color: #ffffff;
">
  <p>High contrast text for better readability.</p>
</sample-card>
```

## 🌐 Browser Support

- **Modern Browsers**: Chrome 63+, Firefox 63+, Safari 12+, Edge 79+
- **Web Components**: Requires modern browser with Custom Elements support
- **Polyfills**: Use `@webcomponents/webcomponentsjs` for older browsers

### Legacy Support
```html
<!-- For older browsers -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-bundle.js"></script>
<script src="https://unpkg.com/sample-design-system/dist/components/sample-card.js"></script>
```

## 📝 TypeScript

### Type Safety
```typescript
import { SampleCard } from 'sample-design-system';

// Type-safe property access
const card = document.querySelector('sample-card') as SampleCard;
card.variant = 'elevated'; // TypeScript knows this is valid
card.clickable = true;

// Type-safe event handling
card.addEventListener('sample-card-click', (event: CustomEvent<{
  variant: string;
  size: string;
  timestamp: number;
}>) => {
  console.log('Card data:', event.detail.variant);
});
```

### Custom Type Extensions
```typescript
declare global {
  interface HTMLElementTagNameMap {
    'sample-card': SampleCard;
  }
}

// Now TypeScript knows about the element
const card = document.createElement('sample-card'); // Returns SampleCard
```

## 🔧 Advanced Usage

### Dynamic Content
```javascript
// Programmatically update card content
const card = document.querySelector('sample-card');
const header = document.createElement('div');
header.slot = 'header';
header.textContent = 'Dynamic Header';
card.appendChild(header);
```

### Performance Optimization
```html
<!-- Use CSS containment for large lists -->
<style>
sample-card {
  contain: layout style paint;
}
</style>
```

### Integration with Other Components
```html
<sample-card variant="outlined" size="spacious">
  <div slot="header">Interactive Card</div>
  <sample-button variant="primary">Primary Action</sample-button>
  <sample-button variant="secondary">Secondary Action</sample-button>
</sample-card>
``` 