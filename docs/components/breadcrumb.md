# Breadcrumb Component

The `sample-breadcrumb` component provides hierarchical navigation for applications. It displays the current page's location within a navigational hierarchy and allows users to navigate back to parent pages with comprehensive accessibility features and theming support.

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system
```

```javascript
// Import the component
import 'sample-design-system/components/sample-breadcrumb';
// Or import the classes for programmatic usage
import { SampleBreadcrumb, SampleBreadcrumbItem } from 'sample-design-system';
```

### Script Tag (Standalone)
```html
<script src="https://unpkg.com/sample-design-system/dist/components/sample-breadcrumb.js"></script>
```

## 🎯 Basic Usage

### Simple Breadcrumb
```html
<sample-breadcrumb>
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products/laptops">Laptops</sample-breadcrumb-item>
  <sample-breadcrumb-item current>MacBook Pro</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Breadcrumb with Icons
```html
<sample-breadcrumb>
  <sample-breadcrumb-item href="/" icon="🏠">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/dashboard" icon="📊">Dashboard</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/settings" icon="⚙️">Settings</sample-breadcrumb-item>
  <sample-breadcrumb-item current icon="👤">Profile</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Custom Separator
```html
<sample-breadcrumb separator=">">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/docs">Documentation</sample-breadcrumb-item>
  <sample-breadcrumb-item current>Components</sample-breadcrumb-item>
</sample-breadcrumb>
```

## 🎨 Properties

### Breadcrumb Container Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'default' \| 'minimal' \| 'filled' \| 'outlined'` | `'default'` | Visual style variant |
| `size` | `'compact' \| 'default' \| 'spacious'` | `'default'` | Size variation |
| `separator` | `string` | `'/'` | Custom separator character |

### Breadcrumb Item Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `href` | `string` | `''` | URL for the breadcrumb item link |
| `disabled` | `boolean` | `false` | Whether the item is disabled |
| `current` | `boolean` | `false` | Whether this is the current page |
| `icon` | `string` | `''` | Custom icon to display |

## 🔥 Events

| Event | Type | Description |
|-------|------|-------------|
| `sample-breadcrumb-navigate` | `CustomEvent` | Fired when a breadcrumb item is clicked |

## 🎨 CSS Custom Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--sample-breadcrumb-bg` | `transparent` | Background color |
| `--sample-breadcrumb-color` | `#495057` | Text color |
| `--sample-breadcrumb-link-color` | `#007bff` | Link color |
| `--sample-breadcrumb-separator` | `'/'` | Separator character |

## 🖼️ Examples

### Variants
```html
<!-- Default Variant -->
<sample-breadcrumb variant="default">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item current>Current</sample-breadcrumb-item>
</sample-breadcrumb>

<!-- Filled Variant -->
<sample-breadcrumb variant="filled">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item current>Current</sample-breadcrumb-item>
</sample-breadcrumb>
```

### Custom Separators
```html
<sample-breadcrumb separator="→">
  <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item current>Current</sample-breadcrumb-item>
</sample-breadcrumb>
```

## 🎨 Custom Theming

### Global Theming
```css
:root {
  --sample-breadcrumb-link-color: #6366f1;
  --sample-breadcrumb-separator: '→';
}
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system/components/sample-breadcrumb';

function BreadcrumbExample() {
  const handleNavigation = (event) => {
    console.log('Navigation:', event.detail);
  };

  return (
    <sample-breadcrumb onSampleBreadcrumbNavigate={handleNavigation}>
      <sample-breadcrumb-item href="/">Home</sample-breadcrumb-item>
      <sample-breadcrumb-item current>Current</sample-breadcrumb-item>
    </sample-breadcrumb>
  );
}
```

## ♿ Accessibility

- **Semantic HTML**: Uses proper navigation elements
- **ARIA Attributes**: Includes proper ARIA labeling
- **Keyboard Navigation**: Full keyboard accessibility
- **Screen Reader Support**: Announces navigation context

## 🌐 Browser Support

- **Modern Browsers**: Chrome 63+, Firefox 63+, Safari 12+, Edge 79+
- **Web Components**: Requires Custom Elements support

## 📝 TypeScript

```typescript
import { SampleBreadcrumb, SampleBreadcrumbItem } from 'sample-design-system';

const breadcrumb = document.querySelector('sample-breadcrumb') as SampleBreadcrumb;
breadcrumb.variant = 'filled';
breadcrumb.separator = '→';
``` 