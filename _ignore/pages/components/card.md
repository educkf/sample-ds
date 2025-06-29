---
title: 'Card'
description: 'Flexible card container for displaying content with multiple layout options'
---

# Card

Flexible container component for displaying content in a structured format. Supports headers, footers, and various content layouts with customizable styling options.

## 🎮 Interactive Playground

{% playground component="card" /%}

## 📋 Example

### Basic Card Usage
```html
<sample-card>
  <h3>Card Title</h3>
  <p>Card content goes here...</p>
</sample-card>

<sample-card>
  <div slot="header">
    <h3>Card with Header</h3>
  </div>
  <p>This card has a dedicated header section.</p>
  <div slot="footer">
    <button>Action</button>
  </div>
</sample-card>
```

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system-educkf
```

```javascript
// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-card';

// Or import from main library
import { SampleCard } from 'sample-design-system-educkf';
```

### Script Tag (Standalone)
```html
<!-- Individual component -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-card.js"></script>

<!-- Or complete library -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/standalone/index.js"></script>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'outlined' \| 'elevated' \| 'flat'` | `'default'` | Visual style variant |
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Internal padding size |
| `borderRadius` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Border radius size |
| `shadow` | `'none' \| 'small' \| 'medium' \| 'large'` | `'small'` | Shadow depth |
| `hoverable` | boolean | `false` | Whether card responds to hover |
| `clickable` | boolean | `false` | Whether card is clickable |

## 📚 Properties with Code Examples

### `variant` Property
```html
<!-- Different card variants -->
<sample-card variant="default">
  <h3>Default Card</h3>
  <p>Standard card appearance with subtle styling</p>
</sample-card>

<sample-card variant="outlined">
  <h3>Outlined Card</h3>
  <p>Card with visible border and no shadow</p>
</sample-card>

<sample-card variant="elevated">
  <h3>Elevated Card</h3>
  <p>Card with enhanced shadow for prominence</p>
</sample-card>

<sample-card variant="flat">
  <h3>Flat Card</h3>
  <p>Minimal card with no border or shadow</p>
</sample-card>
```

### `padding` Property
```html
<!-- Different padding sizes -->
<sample-card padding="none">
  <h3>No Padding</h3>
  <p>Content touches the edges</p>
</sample-card>

<sample-card padding="small">
  <h3>Small Padding</h3>
  <p>Compact spacing for dense layouts</p>
</sample-card>

<sample-card padding="large">
  <h3>Large Padding</h3>
  <p>Generous spacing for comfortable reading</p>
</sample-card>
```

### `borderRadius` Property
```html
<!-- Different border radius sizes -->
<sample-card borderRadius="none">
  <h3>Sharp Corners</h3>
  <p>No border radius for modern look</p>
</sample-card>

<sample-card borderRadius="large">
  <h3>Rounded Corners</h3>
  <p>Large border radius for soft appearance</p>
</sample-card>
```

### `shadow` Property
```html
<!-- Different shadow depths -->
<sample-card shadow="none">
  <h3>No Shadow</h3>
  <p>Flat appearance without depth</p>
</sample-card>

<sample-card shadow="large">
  <h3>Deep Shadow</h3>
  <p>Prominent shadow for emphasis</p>
</sample-card>
```

### `hoverable` and `clickable` Properties
```html
<!-- Interactive cards -->
<sample-card hoverable>
  <h3>Hoverable Card</h3>
  <p>Responds to mouse hover with visual feedback</p>
</sample-card>

<sample-card clickable onclick="alert('Card clicked!')">
  <h3>Clickable Card</h3>
  <p>Click me to trigger an action</p>
</sample-card>
```

### Card with Slots
```html
<!-- Using header, content, and footer slots -->
<sample-card>
  <div slot="header">
    <h2>Product Card</h2>
    <span class="badge">Featured</span>
  </div>
  
  <img src="product-image.jpg" alt="Product" style="width: 100%; height: auto;" />
  <p>Product description and details go in the main content area.</p>
  
  <div slot="footer">
    <button>Add to Cart</button>
    <button>Learn More</button>
  </div>
</sample-card>
```

## 🎨 Customization

### CSS Custom Properties
```css
sample-card {
  --sample-card-background: #ffffff;
  --sample-card-border-color: #e5e7eb;
  --sample-card-border-width: 1px;
  --sample-card-border-radius: 8px;
  --sample-card-padding: 16px;
  --sample-card-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
  --sample-card-transition: all 0.2s ease;
}

/* Variant-specific styling */
sample-card[variant="outlined"] {
  --sample-card-border-width: 2px;
  --sample-card-shadow: none;
}

sample-card[variant="elevated"] {
  --sample-card-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

sample-card[variant="flat"] {
  --sample-card-border-width: 0;
  --sample-card-shadow: none;
}

/* Hover effects */
sample-card[hoverable]:hover {
  --sample-card-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  transform: translateY(-2px);
}
```

### Custom Styling Example
```html
<style>
.premium-card {
  --sample-card-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --sample-card-border-radius: 16px;
  --sample-card-padding: 24px;
  --sample-card-shadow: 0 8px 32px rgba(102, 126, 234, 0.37);
  --sample-card-border-width: 0;
  color: white;
}

.glass-card {
  --sample-card-background: rgba(255, 255, 255, 0.1);
  --sample-card-border-color: rgba(255, 255, 255, 0.2);
  --sample-card-border-radius: 12px;
  backdrop-filter: blur(10px);
  --sample-card-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
}
</style>

<sample-card class="premium-card">
  <h3>Premium Card</h3>
  <p>Custom gradient background with enhanced styling</p>
</sample-card>

<sample-card class="glass-card">
  <h3>Glass Card</h3>
  <p>Modern glassmorphism effect</p>
</sample-card>
```

## ♿ Accessibility

The card component includes comprehensive accessibility features:

- **Semantic Structure**: Proper content organization and hierarchy
- **Keyboard Navigation**: 
  - `Tab` to focus clickable cards
  - `Enter` and `Space` to activate clickable cards
- **ARIA Support**: 
  - `role="article"` for content cards
  - `role="button"` for clickable cards
  - `aria-label` support for complex cards
- **Screen Reader Support**: 
  - Logical reading order
  - Clear content structure
- **Focus Management**: 
  - Visible focus indicators
  - Proper tab order
- **High Contrast**: Maintains visibility in high contrast modes

### ARIA Implementation
```html
<!-- Content card with proper structure -->
<sample-card role="article" aria-labelledby="card-title">
  <h3 id="card-title">Article Title</h3>
  <p>Article content...</p>
</sample-card>

<!-- Clickable card with proper attributes -->
<sample-card 
  clickable
  role="button"
  aria-label="View product details"
  tabindex="0"
>
  <h3>Product Name</h3>
  <p>Product description</p>
</sample-card>
```

### Accessibility Best Practices
- Use clear, descriptive headings within cards
- Ensure sufficient color contrast for text
- Provide meaningful `aria-label` for clickable cards
- Maintain logical tab order
- Use semantic HTML structure
- Avoid overly complex layouts that confuse screen readers

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system-educkf/components/sample-card';

function CardExample() {
  const [products, setProducts] = useState([]);

  const handleCardClick = (productId) => {
    console.log('Card clicked:', productId);
    // Navigate to product details
  };

  return (
    <div className="card-grid">
      {products.map(product => (
        <sample-card 
          key={product.id}
          variant="outlined"
          hoverable
          clickable
          onClick={() => handleCardClick(product.id)}
        >
          <div slot="header">
            <h3>{product.name}</h3>
            <span className="price">${product.price}</span>
          </div>
          
          <img src={product.image} alt={product.name} />
          <p>{product.description}</p>
          
          <div slot="footer">
            <button>Add to Cart</button>
            <button>Quick View</button>
          </div>
        </sample-card>
      ))}
    </div>
  );
}
```

### Vue.js
```vue
<template>
  <div>
    <sample-card 
      :variant="cardVariant"
      :padding="cardPadding"
      :hoverable="true"
      @sample-card-click="handleClick"
    >
      <div slot="header">
        <h3>{{ cardTitle }}</h3>
        <span class="status">{{ cardStatus }}</span>
      </div>
      
      <div class="content">
        {{ cardContent }}
      </div>
      
      <div slot="footer">
        <button @click="editCard">Edit</button>
        <button @click="deleteCard">Delete</button>
      </div>
    </sample-card>
  </div>
</template>

<script>
import 'sample-design-system-educkf/components/sample-card';

export default {
  data() {
    return {
      cardVariant: 'elevated',
      cardPadding: 'medium',
      cardTitle: 'Sample Card',
      cardStatus: 'Active',
      cardContent: 'This is the card content area.'
    };
  },
  methods: {
    handleClick(event) {
      console.log('Card clicked:', event.detail);
    },
    
    editCard() {
      this.$emit('edit-card', this.cardId);
    },
    
    deleteCard() {
      this.$emit('delete-card', this.cardId);
    }
  }
};
</script>
```

### Angular
```typescript
import { Component, Input, Output, EventEmitter } from '@angular/core';
import 'sample-design-system-educkf/components/sample-card';

@Component({
  selector: 'app-card',
  template: `
    <sample-card 
      [attr.variant]="variant"
      [attr.padding]="padding"
      [attr.hoverable]="hoverable"
      [attr.clickable]="clickable"
      (sample-card-click)="onCardClick($event)"
    >
      <div slot="header" *ngIf="title">
        <h3>{{ title }}</h3>
        <span class="subtitle" *ngIf="subtitle">{{ subtitle }}</span>
      </div>
      
      <ng-content></ng-content>
      
      <div slot="footer" *ngIf="showActions">
        <button 
          *ngFor="let action of actions"
          (click)="onActionClick(action)"
        >
          {{ action.label }}
        </button>
      </div>
    </sample-card>
  `
})
export class CardComponent {
  @Input() variant: 'default' | 'outlined' | 'elevated' | 'flat' = 'default';
  @Input() padding: 'none' | 'small' | 'medium' | 'large' = 'medium';
  @Input() hoverable = false;
  @Input() clickable = false;
  @Input() title?: string;
  @Input() subtitle?: string;
  @Input() actions: Array<{label: string, action: string}> = [];
  
  @Output() cardClick = new EventEmitter<CustomEvent>();
  @Output() actionClick = new EventEmitter<{action: string}>();

  get showActions(): boolean {
    return this.actions.length > 0;
  }

  onCardClick(event: CustomEvent) {
    this.cardClick.emit(event);
  }

  onActionClick(action: {label: string, action: string}) {
    this.actionClick.emit(action);
  }
}
```
