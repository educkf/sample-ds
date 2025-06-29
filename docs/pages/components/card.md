---
title: "Card Component"
description: "Flexible content container with multiple variants, actions, and responsive design options"
---

# Card Component

The `sample-card` component provides a flexible content container with support for headers, footers, actions, and multiple visual variants.

## 📦 Installation

### NPM Package
```bash
npm install sample-design-system-educkf
```

```javascript
// Import the component
import 'sample-design-system-educkf/components/sample-card';

// Use in your templates
<sample-card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</sample-card>
```

### Script Tag
```html
<sample-card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</sample-card>

<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-card.js"></script>
```

## 🎯 Basic Usage

### Simple Card
```html
<sample-card>
  <h3>Welcome</h3>
  <p>This is a simple card with basic content.</p>
</sample-card>
```

### Card with Header and Footer
```html
<sample-card>
  <div slot="header">
    <h3>Card Title</h3>
    <p>Subtitle or description</p>
  </div>
  
  <p>Main content area with detailed information.</p>
  
  <div slot="footer">
    <sample-button variant="primary">Action</sample-button>
    <sample-button variant="secondary">Cancel</sample-button>
  </div>
</sample-card>
```

### Elevated Card
```html
<sample-card variant="elevated">
  <h3>Elevated Card</h3>
  <p>This card has a shadow elevation effect.</p>
</sample-card>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'elevated' \| 'outlined' \| 'filled'` | `'default'` | Visual variant of the card |
| `padding` | `'none' \| 'small' \| 'medium' \| 'large'` | `'medium'` | Internal padding size |
| `clickable` | `boolean` | `false` | Whether the card is interactive/clickable |
| `disabled` | `boolean` | `false` | Whether the card is disabled |
| `loading` | `boolean` | `false` | Show loading state |

## 🔥 Events

| Event | Detail | Description |
|-------|---------|-------------|
| `sample-card-click` | `{ variant: string }` | Fired when clickable card is clicked |
| `sample-card-action` | `{ action: string }` | Fired when action button is clicked |

```javascript
// Listen for card clicks
document.querySelector('sample-card').addEventListener('sample-card-click', (e) => {
  console.log('Card clicked:', e.detail);
});
```

## 🎨 CSS Custom Properties

```css
sample-card {
  /* Container styling */
  --sample-card-border-radius: 12px;
  --sample-card-background: #ffffff;
  --sample-card-border: 1px solid #e2e8f0;
  --sample-card-min-height: auto;
  --sample-card-width: 100%;
  --sample-card-max-width: none;
  
  /* Padding variants */
  --sample-card-padding-none: 0;
  --sample-card-padding-small: 12px;
  --sample-card-padding-medium: 16px;
  --sample-card-padding-large: 24px;
  
  /* Shadow variants */
  --sample-card-shadow-default: none;
  --sample-card-shadow-elevated: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --sample-card-shadow-hover: 0 8px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1);
  
  /* Interactive states */
  --sample-card-hover-transform: translateY(-2px);
  --sample-card-hover-transition: all 0.2s ease;
  --sample-card-active-transform: translateY(0);
  
  /* Header styling */
  --sample-card-header-padding: 16px 16px 0 16px;
  --sample-card-header-border: none;
  
  /* Footer styling */
  --sample-card-footer-padding: 0 16px 16px 16px;
  --sample-card-footer-border: none;
  --sample-card-footer-justify: flex-end;
  --sample-card-footer-gap: 8px;
  
  /* Loading state */
  --sample-card-loading-bg: #f8fafc;
  --sample-card-loading-shimmer: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
}
```

## 🎨 CSS Parts

```css
/* Style the card container */
sample-card::part(container) {
  overflow: hidden;
  transition: transform 0.2s ease;
}

/* Style the header section */
sample-card::part(header) {
  border-bottom: 1px solid #f1f5f9;
  font-weight: 600;
}

/* Style the content area */
sample-card::part(content) {
  line-height: 1.6;
}

/* Style the footer section */
sample-card::part(footer) {
  border-top: 1px solid #f1f5f9;
  display: flex;
  gap: 8px;
}

/* Style loading state */
sample-card::part(loading) {
  position: relative;
  overflow: hidden;
}

sample-card::part(loading)::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: var(--sample-card-loading-shimmer);
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% { left: -100%; }
  100% { left: 100%; }
}
```

## 🖼️ Examples

### Product Card
```html
<sample-card variant="elevated" clickable>
  <div slot="header">
    <img src="product.jpg" alt="Product" style="width: 100%; height: 200px; object-fit: cover;">
  </div>
  
  <h3>Premium Widget</h3>
  <p>High-quality widget with advanced features and premium materials.</p>
  <p><strong>$99.99</strong></p>
  
  <div slot="footer">
    <sample-button variant="primary">Add to Cart</sample-button>
    <sample-button variant="secondary">Learn More</sample-button>
  </div>
</sample-card>
```

### User Profile Card
```html
<sample-card variant="outlined" padding="large">
  <div slot="header" style="text-align: center;">
    <img src="avatar.jpg" alt="User" style="width: 80px; height: 80px; border-radius: 50%;">
    <h3>John Doe</h3>
    <p>Senior Developer</p>
  </div>
  
  <div style="text-align: center;">
    <p>Experienced developer with 10+ years in web technologies.</p>
    
    <div style="display: flex; justify-content: space-around; margin: 16px 0;">
      <div><strong>150</strong><br>Projects</div>
      <div><strong>50</strong><br>Reviews</div>
      <div><strong>4.9</strong><br>Rating</div>
    </div>
  </div>
  
  <div slot="footer">
    <sample-button variant="primary" style="width: 100%;">Contact</sample-button>
  </div>
</sample-card>
```

### Dashboard Stats Card
```html
<sample-card variant="filled" padding="medium">
  <div style="display: flex; align-items: center; justify-content: space-between;">
    <div>
      <h4 style="margin: 0; color: #64748b;">Total Sales</h4>
      <p style="margin: 8px 0 0 0; font-size: 24px; font-weight: bold;">$24,567</p>
    </div>
    <div style="color: #22c55e; font-size: 32px;">📈</div>
  </div>
  <p style="margin: 8px 0 0 0; color: #22c55e; font-size: 14px;">+12% from last month</p>
</sample-card>
```

## 🎨 Custom Theming

### Dark Theme Cards
```css
.dark-theme sample-card {
  --sample-card-background: #1e293b;
  --sample-card-border: 1px solid #374151;
  --sample-card-shadow-elevated: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.dark-theme sample-card::part(header) {
  border-bottom: 1px solid #374151;
  color: #f1f5f9;
}

.dark-theme sample-card::part(footer) {
  border-top: 1px solid #374151;
}
```

### Colorful Card Variants
```css
.success-card {
  --sample-card-background: #f0fdf4;
  --sample-card-border: 1px solid #22c55e;
}

.warning-card {
  --sample-card-background: #fffbeb;
  --sample-card-border: 1px solid #f59e0b;
}

.error-card {
  --sample-card-background: #fef2f2;
  --sample-card-border: 1px solid #ef4444;
}
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system-educkf/components/sample-card';

function CardExample() {
  const handleCardClick = (e) => {
    console.log('Card clicked:', e.detail);
  };

  return (
    <sample-card 
      variant="elevated" 
      clickable
      onSampleCardClick={handleCardClick}
    >
      <div slot="header">
        <h3>React Card</h3>
      </div>
      <p>Card content in React</p>
      <div slot="footer">
        <button>Action</button>
      </div>
    </sample-card>
  );
}
```

### Vue
```vue
<template>
  <sample-card 
    variant="elevated" 
    :clickable="true"
    @sample-card-click="handleCardClick"
  >
    <template #header>
      <h3>Vue Card</h3>
    </template>
    
    <p>Card content in Vue</p>
    
    <template #footer>
      <button>Action</button>
    </template>
  </sample-card>
</template>

<script>
import 'sample-design-system-educkf/components/sample-card';

export default {
  methods: {
    handleCardClick(event) {
      console.log('Card clicked:', event.detail);
    }
  }
}
</script>
```

## ♿ Accessibility

### WCAG 2.1 Compliance
- **Color Contrast**: All text meets WCAG AA standards
- **Keyboard Navigation**: Clickable cards are keyboard accessible
- **Screen Readers**: Proper semantic structure and labels
- **Focus Management**: Clear focus indicators

### Interactive Cards
```html
<sample-card 
  clickable
  role="button"
  tabindex="0"
  aria-label="Product card - Click to view details"
>
  Card content
</sample-card>
```

## 📝 TypeScript

```typescript
import { SampleCard } from 'sample-design-system-educkf';

// Type-safe property access
const card = document.querySelector('sample-card') as SampleCard;
card.variant = 'elevated';
card.clickable = true;

// Event typing
card.addEventListener('sample-card-click', (e: CustomEvent<{variant: string}>) => {
  console.log('Card clicked:', e.detail.variant);
});
```

## 🎯 Interactive Playground

{% playground %}
<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin: 24px 0;">
  <sample-card variant="default">
    <div slot="header">
      <h3>Default Card</h3>
    </div>
    <p>This is a default card with basic styling and no elevation.</p>
    <div slot="footer">
      <sample-button variant="primary">Action</sample-button>
    </div>
  </sample-card>

  <sample-card variant="elevated" clickable>
    <div slot="header">
      <h3>Elevated Card</h3>
    </div>
    <p>This card has shadow elevation and is clickable. Try clicking it!</p>
    <div slot="footer">
      <sample-button variant="secondary">Learn More</sample-button>
    </div>
  </sample-card>

  <sample-card variant="outlined" padding="large">
    <div slot="header">
      <h3>Outlined Card</h3>
    </div>
    <p>This card uses outline styling with large padding for a spacious feel.</p>
    <div slot="footer">
      <sample-button variant="primary">Get Started</sample-button>
    </div>
  </sample-card>
</div>

<script>
document.querySelectorAll('sample-card').forEach(card => {
  card.addEventListener('sample-card-click', (e) => {
    console.log(`${e.detail.variant} card clicked!`);
    alert(`You clicked the ${e.detail.variant} card!`);
  });
});
</script>
{% /playground %} 
