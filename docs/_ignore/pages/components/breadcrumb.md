---
title: 'Breadcrumb'
description: 'Hierarchical navigation with customizable separators and accessibility features'
---

# Breadcrumb

Hierarchical navigation component that shows users their location within a website or application. Provides clear navigation paths with customizable separators, icons, and accessibility features.

## 🎮 Interactive Playground

{% playground component="breadcrumb" /%}

## 📋 Example

### Basic Breadcrumb Usage
```html
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>

<!-- With icons -->
<sample-breadcrumb>
  <sample-breadcrumb-item href="/" icon="home">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/category" icon="package">Category</sample-breadcrumb-item>
  <sample-breadcrumb-item icon="tag">Current Item</sample-breadcrumb-item>
</sample-breadcrumb>
```

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system-educkf
```

```javascript
// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-breadcrumb';

// Or import from main library
import { SampleBreadcrumb } from 'sample-design-system-educkf';
```

### Script Tag (Standalone)
```html
<!-- Individual component -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-breadcrumb.js"></script>

<!-- Or complete library -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/standalone/index.js"></script>
```

## 🎨 Properties

### Breadcrumb Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `separator` | string | `"/"` | Separator between breadcrumb items |
| `maxItems` | number | `0` | Maximum items to show (0 = no limit) |
| `collapseOnMobile` | boolean | `true` | Whether to collapse on mobile devices |
| `showRoot` | boolean | `true` | Whether to always show the root item |

### Breadcrumb Item Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | string | `""` | URL for the breadcrumb link |
| `icon` | string | `""` | Icon name to display |
| `disabled` | boolean | `false` | Whether the item is disabled |
| `current` | boolean | `false` | Whether this is the current page |
| `target` | string | `""` | Link target attribute |

## 📚 Properties with Code Examples

### `separator` Property
```html
<!-- Different separators -->
<sample-breadcrumb separator="/">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/docs">Docs</sample-breadcrumb-item>
  <sample-breadcrumb-item>Components</sample-breadcrumb-item>
</sample-breadcrumb>

<sample-breadcrumb separator="→">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/docs">Documentation</sample-breadcrumb-item>
  <sample-breadcrumb-item>Components</sample-breadcrumb-item>
</sample-breadcrumb>

<sample-breadcrumb separator="•">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/blog">Blog</sample-breadcrumb-item>
  <sample-breadcrumb-item>Article Title</sample-breadcrumb-item>
</sample-breadcrumb>
```

### `maxItems` Property
```html
<!-- Limit displayed items -->
<sample-breadcrumb maxItems="3">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/level1">Level 1</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/level2">Level 2</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/level3">Level 3</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/level4">Level 4</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>
```

### `icon` Property
```html
<!-- Breadcrumb items with icons -->
<sample-breadcrumb>
  <sample-breadcrumb-item href="/" icon="home">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/electronics" icon="cpu">Electronics</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/laptops" icon="laptop">Laptops</sample-breadcrumb-item>
  <sample-breadcrumb-item icon="tag">Gaming Laptops</sample-breadcrumb-item>
</sample-breadcrumb>
```

### `current` Property
```html
<!-- Mark current page -->
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item current>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>
```

### `disabled` Property
```html
<!-- Disabled breadcrumb items -->
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item disabled>Restricted Area</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>
```

### `target` Property
```html
<!-- External links -->
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="https://external-site.com" target="_blank">External Site</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>
```

## 🎨 Customization

### CSS Custom Properties
```css
sample-breadcrumb {
  /* Container styling */
  --sample-breadcrumb-padding: 12px 0;
  --sample-breadcrumb-font-size: 14px;
  --sample-breadcrumb-line-height: 1.5;
  --sample-breadcrumb-gap: 8px;
  --sample-breadcrumb-background: transparent;
  --sample-breadcrumb-border-radius: 0;
  
  /* Separator styling */
  --sample-breadcrumb-separator-color: #64748b;
  --sample-breadcrumb-separator-margin: 0 8px;
  --sample-breadcrumb-separator-font-size: 14px;
  --sample-breadcrumb-separator-opacity: 0.7;
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
  --sample-breadcrumb-item-font-weight: 400;
  --sample-breadcrumb-item-font-weight-current: 600;
  
  /* Icon styling */
  --sample-breadcrumb-item-icon-size: 16px;
  --sample-breadcrumb-item-icon-margin: 0 4px 0 0;
  --sample-breadcrumb-item-icon-color: currentColor;
  
  /* Interactive states */
  --sample-breadcrumb-item-padding: 4px 8px;
  --sample-breadcrumb-item-border-radius: 4px;
  --sample-breadcrumb-item-background-hover: rgba(59, 130, 246, 0.1);
}
```

### Custom Styling Example
```html
<style>
.modern-breadcrumb {
  --sample-breadcrumb-background: #f8fafc;
  --sample-breadcrumb-padding: 16px;
  --sample-breadcrumb-border-radius: 8px;
  --sample-breadcrumb-separator-color: #e5e7eb;
  --sample-breadcrumb-separator-margin: 0 12px;
  border: 1px solid #e5e7eb;
}

.modern-breadcrumb sample-breadcrumb-item {
  --sample-breadcrumb-item-padding: 8px 12px;
  --sample-breadcrumb-item-border-radius: 6px;
  --sample-breadcrumb-item-background-hover: white;
  --sample-breadcrumb-item-color: #374151;
  --sample-breadcrumb-item-color-hover: #1f2937;
}

.colorful-breadcrumb {
  --sample-breadcrumb-separator-color: #f59e0b;
}

.colorful-breadcrumb sample-breadcrumb-item {
  --sample-breadcrumb-item-color: #7c3aed;
  --sample-breadcrumb-item-color-hover: #5b21b6;
  --sample-breadcrumb-item-background-hover: rgba(124, 58, 237, 0.1);
}
</style>

<sample-breadcrumb class="modern-breadcrumb">
  <sample-breadcrumb-item href="/" icon="home">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/docs">Documentation</sample-breadcrumb-item>
  <sample-breadcrumb-item>Components</sample-breadcrumb-item>
</sample-breadcrumb>
```

## ♿ Accessibility

The breadcrumb component includes comprehensive accessibility features:

- **ARIA Navigation**: Uses `role="navigation"` and `aria-label="breadcrumb"`
- **Structured List**: Implements proper `<ol>` list structure
- **Current Page**: Uses `aria-current="page"` for the current item
- **Keyboard Navigation**: 
  - `Tab` to navigate between links
  - `Enter` and `Space` to activate links
- **Screen Reader Support**: 
  - Clear navigation landmark
  - Descriptive link text
  - Current page announcement
- **Focus Management**: Visible focus indicators and logical tab order

### ARIA Implementation
```html
<!-- The component automatically generates proper ARIA structure -->
<nav aria-label="breadcrumb" role="navigation">
  <ol>
    <li>
      <a href="/" aria-label="Home page">Home</a>
    </li>
    <li>
      <a href="/products">Products</a>
    </li>
    <li aria-current="page">
      Current Page
    </li>
  </ol>
</nav>
```

### Accessibility Best Practices
- Use descriptive link text that makes sense out of context
- Mark the current page with `aria-current="page"`
- Provide meaningful navigation labels
- Ensure sufficient color contrast for links
- Don't rely solely on color to indicate current page
- Keep breadcrumb paths concise but descriptive
- Use consistent navigation patterns across your site

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system-educkf/components/sample-breadcrumb';

function BreadcrumbExample() {
  const [breadcrumbPath, setBreadcrumbPath] = useState([
    { href: '/', label: 'Home', icon: 'home' },
    { href: '/products', label: 'Products', icon: 'package' },
    { href: '/electronics', label: 'Electronics', icon: 'cpu' },
    { label: 'Current Product', icon: 'tag', current: true }
  ]);

  const handleBreadcrumbClick = (e) => {
    console.log('Breadcrumb clicked:', e.detail);
    // Handle navigation
  };

  return (
    <sample-breadcrumb 
      separator="→"
      maxItems={4}
      onSampleBreadcrumbClick={handleBreadcrumbClick}
    >
      {breadcrumbPath.map((item, index) => (
        <sample-breadcrumb-item
          key={index}
          href={item.href}
          icon={item.icon}
          current={item.current}
        >
          {item.label}
        </sample-breadcrumb-item>
      ))}
    </sample-breadcrumb>
  );
}
```

### Vue.js
```vue
<template>
  <sample-breadcrumb 
    :separator="separator"
    :max-items="maxItems"
    @sample-breadcrumb-click="handleClick"
  >
    <sample-breadcrumb-item
      v-for="(item, index) in breadcrumbItems"
      :key="index"
      :href="item.href"
      :icon="item.icon"
      :current="item.current"
      :disabled="item.disabled"
    >
      {{ item.label }}
    </sample-breadcrumb-item>
  </sample-breadcrumb>
</template>

<script>
import 'sample-design-system-educkf/components/sample-breadcrumb';

export default {
  data() {
    return {
      separator: '/',
      maxItems: 5,
      breadcrumbItems: [
        { href: '/', label: 'Home', icon: 'home' },
        { href: '/catalog', label: 'Catalog', icon: 'grid' },
        { href: '/category/electronics', label: 'Electronics', icon: 'cpu' },
        { label: 'Current Product', icon: 'tag', current: true }
      ]
    };
  },
  methods: {
    handleClick(event) {
      console.log('Breadcrumb navigation:', event.detail);
      // Handle navigation logic
      this.$router.push(event.detail.href);
    },
    
    updateBreadcrumb(newPath) {
      this.breadcrumbItems = newPath;
    }
  },
  watch: {
    $route(to) {
      // Update breadcrumb based on route
      this.generateBreadcrumbFromRoute(to);
    }
  }
};
</script>
```

### Angular
```typescript
import { Component, Input } from '@angular/core';
import 'sample-design-system-educkf/components/sample-breadcrumb';

interface BreadcrumbItem {
  href?: string;
  label: string;
  icon?: string;
  current?: boolean;
  disabled?: boolean;
}

@Component({
  selector: 'app-breadcrumb',
  template: `
    <sample-breadcrumb 
      [attr.separator]="separator"
      [attr.max-items]="maxItems"
      (sample-breadcrumb-click)="onBreadcrumbClick($event)"
    >
      <sample-breadcrumb-item
        *ngFor="let item of breadcrumbItems; trackBy: trackByFn"
        [attr.href]="item.href"
        [attr.icon]="item.icon"
        [attr.current]="item.current"
        [attr.disabled]="item.disabled"
      >
        {{ item.label }}
      </sample-breadcrumb-item>
    </sample-breadcrumb>
  `
})
export class BreadcrumbComponent {
  @Input() separator = '/';
  @Input() maxItems = 0;
  @Input() breadcrumbItems: BreadcrumbItem[] = [];

  constructor(private router: Router, private route: ActivatedRoute) {}

  onBreadcrumbClick(event: CustomEvent) {
    console.log('Breadcrumb clicked:', event.detail);
    
    if (event.detail.href) {
      this.router.navigate([event.detail.href]);
    }
  }

  trackByFn(index: number, item: BreadcrumbItem): any {
    return item.href || index;
  }

  generateBreadcrumbFromRoute(): BreadcrumbItem[] {
    // Generate breadcrumb items from current route
    const breadcrumbs: BreadcrumbItem[] = [];
    let route = this.route.root;
    
    while (route) {
      if (route.snapshot.data['breadcrumb']) {
        breadcrumbs.push({
          href: route.snapshot.url.join('/'),
          label: route.snapshot.data['breadcrumb'],
          icon: route.snapshot.data['icon']
        });
      }
      route = route.firstChild;
    }
    
    // Mark last item as current
    if (breadcrumbs.length > 0) {
      breadcrumbs[breadcrumbs.length - 1].current = true;
      delete breadcrumbs[breadcrumbs.length - 1].href;
    }
    
    return breadcrumbs;
  }
}
```
