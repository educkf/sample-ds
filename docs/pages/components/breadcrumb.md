---
title: "Breadcrumb Component"
description: "Hierarchical navigation with customizable separators and accessibility features"
---

# Breadcrumb Component

The `sample-breadcrumb` component provides hierarchical navigation breadcrumbs with customizable separators, icons, and accessibility features.

## 📦 Installation

### NPM Package
```bash
npm install sample-design-system
```

```javascript
// Import the component
import 'sample-design-system/components/sample-breadcrumb';

// Use in your templates
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Script Tag
```html
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>

<script src="https://unpkg.com/sample-design-system/dist/components/sample-breadcrumb.js"></script>
```

## 🎯 Basic Usage

### Simple Breadcrumb
```html
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/category">Category</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Breadcrumb with Icons
```html
<sample-breadcrumb>
  <sample-breadcrumb-item href="/" icon="home">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products" icon="package">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item icon="tag">Electronics</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Custom Separator
```html
<sample-breadcrumb separator="→">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/docs">Documentation</sample-breadcrumb-item>
  <sample-breadcrumb-item>Components</sample-breadcrumb-item>
</sample-breadcrumb>
```

## 🎨 Properties

### Breadcrumb Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `separator` | `string` | `"/"` | Separator between breadcrumb items |
| `max-items` | `number` | `0` | Maximum items to show (0 = no limit) |
| `collapse-on-mobile` | `boolean` | `true` | Whether to collapse on mobile devices |

### Breadcrumb Item Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | `""` | URL for the breadcrumb link |
| `icon` | `string` | `""` | Icon name to display |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `current` | `boolean` | `false` | Whether this is the current page |

## 🔥 Events

| Event | Detail | Description |
|-------|---------|-------------|
| `sample-breadcrumb-click` | `{ href: string, text: string }` | Fired when breadcrumb item is clicked |

```javascript
// Listen for breadcrumb navigation
document.querySelector('sample-breadcrumb').addEventListener('sample-breadcrumb-click', (e) => {
  console.log('Breadcrumb clicked:', e.detail);
});
```

## 🎨 CSS Custom Properties

```css
sample-breadcrumb {
  /* Container styling */
  --sample-breadcrumb-padding: 12px 0;
  --sample-breadcrumb-font-size: 14px;
  --sample-breadcrumb-line-height: 1.5;
  --sample-breadcrumb-gap: 8px;
  
  /* Separator styling */
  --sample-breadcrumb-separator-color: #64748b;
  --sample-breadcrumb-separator-margin: 0 8px;
  --sample-breadcrumb-separator-font-size: 14px;
}

sample-breadcrumb-item {
  /* Link styling */
  --sample-breadcrumb-item-color: #3b82f6;
  --sample-breadcrumb-item-color-hover: #1d4ed8;
  --sample-breadcrumb-item-color-current: #1e293b;
  --sample-breadcrumb-item-color-disabled: #9ca3af;
  
  /* Text decoration */
  --sample-breadcrumb-item-text-decoration: none;
  --sample-breadcrumb-item-text-decoration-hover: underline;
  
  /* Icon styling */
  --sample-breadcrumb-item-icon-size: 16px;
  --sample-breadcrumb-item-icon-margin: 0 4px 0 0;
  --sample-breadcrumb-item-icon-color: currentColor;
  
  /* Current page styling */
  --sample-breadcrumb-item-current-font-weight: 600;
  --sample-breadcrumb-item-current-cursor: default;
  
  /* Mobile responsiveness */
  --sample-breadcrumb-item-mobile-max-width: 120px;
  --sample-breadcrumb-item-mobile-overflow: hidden;
  --sample-breadcrumb-item-mobile-text-overflow: ellipsis;
}
```

## 🎨 CSS Parts

```css
/* Style the breadcrumb container */
sample-breadcrumb::part(container) {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

/* Style individual breadcrumb items */
sample-breadcrumb-item::part(item) {
  display: inline-flex;
  align-items: center;
  transition: color 0.2s ease;
}

/* Style breadcrumb links */
sample-breadcrumb-item::part(link) {
  color: var(--sample-breadcrumb-item-color);
  text-decoration: none;
  border-radius: 4px;
  padding: 4px 8px;
  transition: all 0.2s ease;
}

sample-breadcrumb-item::part(link):hover {
  background-color: rgba(59, 130, 246, 0.1);
}

/* Style breadcrumb icons */
sample-breadcrumb-item::part(icon) {
  margin-right: 4px;
  flex-shrink: 0;
}

/* Style separators */
sample-breadcrumb::part(separator) {
  color: var(--sample-breadcrumb-separator-color);
  margin: var(--sample-breadcrumb-separator-margin);
  user-select: none;
}
```

## 🖼️ Examples

### E-commerce Navigation
```html
<sample-breadcrumb>
  <sample-breadcrumb-item href="/" icon="home">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/electronics" icon="cpu">Electronics</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/electronics/laptops" icon="laptop">Laptops</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/electronics/laptops/gaming" icon="gamepad">Gaming</sample-breadcrumb-item>
  <sample-breadcrumb-item current>MacBook Pro</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Documentation Navigation
```html
<sample-breadcrumb separator="›">
  <sample-breadcrumb-item href="/docs" icon="book">Documentation</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/docs/components" icon="components">Components</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/docs/components/navigation" icon="navigation">Navigation</sample-breadcrumb-item>
  <sample-breadcrumb-item current>Breadcrumb</sample-breadcrumb-item>
</sample-breadcrumb>
```

### File System Navigation
```html
<sample-breadcrumb separator="\" max-items="4">
  <sample-breadcrumb-item href="/c:" icon="hard-drive">C:</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/c:/users" icon="users">Users</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/c:/users/john" icon="user">John</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/c:/users/john/documents" icon="folder">Documents</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/c:/users/john/documents/projects" icon="folder">Projects</sample-breadcrumb-item>
  <sample-breadcrumb-item current icon="folder">Current Folder</sample-breadcrumb-item>
</sample-breadcrumb>
```

## 🎨 Custom Theming

### Dark Theme
```css
.dark-theme sample-breadcrumb {
  --sample-breadcrumb-separator-color: #94a3b8;
}

.dark-theme sample-breadcrumb-item {
  --sample-breadcrumb-item-color: #60a5fa;
  --sample-breadcrumb-item-color-hover: #93c5fd;
  --sample-breadcrumb-item-color-current: #f1f5f9;
  --sample-breadcrumb-item-color-disabled: #64748b;
}
```

### Colorful Breadcrumbs
```css
.colorful-breadcrumb sample-breadcrumb-item:nth-child(1) {
  --sample-breadcrumb-item-color: #ef4444;
}

.colorful-breadcrumb sample-breadcrumb-item:nth-child(2) {
  --sample-breadcrumb-item-color: #f59e0b;
}

.colorful-breadcrumb sample-breadcrumb-item:nth-child(3) {
  --sample-breadcrumb-item-color: #10b981;
}

.colorful-breadcrumb sample-breadcrumb-item:nth-child(4) {
  --sample-breadcrumb-item-color: #3b82f6;
}
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system/components/sample-breadcrumb';

function BreadcrumbExample() {
  const handleBreadcrumbClick = (e) => {
    console.log('Breadcrumb clicked:', e.detail);
  };

  return (
    <sample-breadcrumb onSampleBreadcrumbClick={handleBreadcrumbClick}>
      <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
      <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
      <sample-breadcrumb-item current>Current Page</sample-breadcrumb-item>
    </sample-breadcrumb>
  );
}
```

### Vue
```vue
<template>
  <sample-breadcrumb @sample-breadcrumb-click="handleBreadcrumbClick">
    <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
    <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
    <sample-breadcrumb-item :current="true">Current Page</sample-breadcrumb-item>
  </sample-breadcrumb>
</template>

<script>
import 'sample-design-system/components/sample-breadcrumb';

export default {
  methods: {
    handleBreadcrumbClick(event) {
      console.log('Breadcrumb clicked:', event.detail);
    }
  }
}
</script>
```

## ♿ Accessibility

### WCAG 2.1 Compliance
- **Semantic HTML**: Uses proper `nav`, `ol`, and `li` elements
- **ARIA Support**: Includes `aria-label` and `aria-current` attributes
- **Keyboard Navigation**: Full keyboard support with Tab navigation
- **Screen Readers**: Proper semantic structure and labels

### Semantic Structure
```html
<sample-breadcrumb aria-label="Breadcrumb navigation">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item aria-current="page">Current Page</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Keyboard Navigation
| Key | Action |
|-----|--------|
| `Tab` | Move to next breadcrumb item |
| `Shift + Tab` | Move to previous breadcrumb item |
| `Enter` | Activate breadcrumb link |
| `Space` | Activate breadcrumb link |

## 📝 TypeScript

```typescript
import { SampleBreadcrumb, SampleBreadcrumbItem } from 'sample-design-system';

// Type-safe property access
const breadcrumb = document.querySelector('sample-breadcrumb') as SampleBreadcrumb;
breadcrumb.separator = '→';
breadcrumb.maxItems = 4;

// Breadcrumb item typing
const item = document.querySelector('sample-breadcrumb-item') as SampleBreadcrumbItem;
item.href = '/new-page';
item.current = true;

// Event typing
breadcrumb.addEventListener('sample-breadcrumb-click', (e: CustomEvent<{href: string, text: string}>) => {
  console.log('Breadcrumb clicked:', e.detail);
});
```

## 🎯 Interactive Playground

{% playground %}
<div style="space-y: 24px;">
  <div>
    <h4>Basic Breadcrumb</h4>
    <sample-breadcrumb>
      <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
      <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
      <sample-breadcrumb-item href="/products/electronics">Electronics</sample-breadcrumb-item>
      <sample-breadcrumb-item current>Smartphones</sample-breadcrumb-item>
    </sample-breadcrumb>
  </div>

  <div>
    <h4>Breadcrumb with Icons</h4>
    <sample-breadcrumb separator="›">
      <sample-breadcrumb-item href="/" icon="🏠">Home</sample-breadcrumb-item>
      <sample-breadcrumb-item href="/docs" icon="📚">Documentation</sample-breadcrumb-item>
      <sample-breadcrumb-item href="/docs/components" icon="🧩">Components</sample-breadcrumb-item>
      <sample-breadcrumb-item current icon="🍞">Breadcrumb</sample-breadcrumb-item>
    </sample-breadcrumb>
  </div>

  <div>
    <h4>Custom Separator</h4>
    <sample-breadcrumb separator="→">
      <sample-breadcrumb-item href="/">Dashboard</sample-breadcrumb-item>
      <sample-breadcrumb-item href="/analytics">Analytics</sample-breadcrumb-item>
      <sample-breadcrumb-item href="/analytics/reports">Reports</sample-breadcrumb-item>
      <sample-breadcrumb-item current>Monthly Report</sample-breadcrumb-item>
    </sample-breadcrumb>
  </div>
</div>

<script>
document.querySelectorAll('sample-breadcrumb').forEach(breadcrumb => {
  breadcrumb.addEventListener('sample-breadcrumb-click', (e) => {
    console.log('Breadcrumb navigation:', e.detail);
    // Prevent actual navigation in demo
    e.preventDefault();
    alert(`Would navigate to: ${e.detail.href}`);
  });
});
</script>
{% /playground %} 