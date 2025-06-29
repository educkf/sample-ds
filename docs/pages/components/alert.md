---
title: "Alert Component"
description: "Contextual feedback messages with dismissible functionality and multiple severity levels"
---

# Alert Component

The `sample-alert` component provides contextual feedback messages with support for different severity levels, icons, and dismissible functionality.

## 📦 Installation

### NPM Package
```bash
npm install sample-design-system-educkf
```

```javascript
// Import the component
import 'sample-design-system-educkf/components/sample-alert';

// Use in your templates
<sample-alert variant="success">
  Operation completed successfully!
</sample-alert>
```

### Script Tag
```html
<sample-alert variant="success">
  Operation completed successfully!
</sample-alert>

<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-alert.js"></script>
```

## 🎯 Basic Usage

### Success Alert
```html
<sample-alert variant="success">
  <strong>Success!</strong> Your changes have been saved.
</sample-alert>
```

### Error Alert
```html
<sample-alert variant="error">
  <strong>Error!</strong> Please fix the following issues before continuing.
</sample-alert>
```

### Dismissible Alert
```html
<sample-alert variant="info" dismissible>
  <strong>Info:</strong> This is a dismissible information alert.
</sample-alert>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Alert severity level |
| `dismissible` | `boolean` | `false` | Whether the alert can be dismissed |
| `show-icon` | `boolean` | `true` | Whether to show the variant icon |
| `title` | `string` | `""` | Optional alert title |
| `auto-dismiss` | `number` | `0` | Auto-dismiss after milliseconds (0 = never) |

## 🔥 Events

| Event | Detail | Description |
|-------|---------|-------------|
| `sample-alert-dismiss` | `{ variant: string }` | Fired when alert is dismissed |
| `sample-alert-action` | `{ action: string }` | Fired when action button is clicked |

```javascript
// Listen for alert dismissal
document.querySelector('sample-alert').addEventListener('sample-alert-dismiss', (e) => {
  console.log('Alert dismissed:', e.detail.variant);
});
```

## 🎨 CSS Custom Properties

```css
sample-alert {
  /* Container styling */
  --sample-alert-border-radius: 8px;
  --sample-alert-padding: 16px;
  --sample-alert-margin: 16px 0;
  --sample-alert-border-width: 1px;
  --sample-alert-font-size: 14px;
  --sample-alert-line-height: 1.5;
  
  /* Success variant */
  --sample-alert-success-bg: #f0f9f0;
  --sample-alert-success-color: #2d5a2d;
  --sample-alert-success-border: #4ade80;
  --sample-alert-success-icon: #22c55e;
  
  /* Error variant */
  --sample-alert-error-bg: #fef2f2;
  --sample-alert-error-color: #7f1d1d;
  --sample-alert-error-border: #f87171;
  --sample-alert-error-icon: #ef4444;
  
  /* Warning variant */
  --sample-alert-warning-bg: #fffbeb;
  --sample-alert-warning-color: #92400e;
  --sample-alert-warning-border: #fbbf24;
  --sample-alert-warning-icon: #f59e0b;
  
  /* Info variant */
  --sample-alert-info-bg: #eff6ff;
  --sample-alert-info-color: #1e3a8a;
  --sample-alert-info-border: #60a5fa;
  --sample-alert-info-icon: #3b82f6;
  
  /* Dismiss button */
  --sample-alert-dismiss-size: 20px;
  --sample-alert-dismiss-color: currentColor;
  --sample-alert-dismiss-hover: rgba(0,0,0,0.1);
}
```

## 🎨 CSS Parts

```css
/* Style the alert container */
sample-alert::part(container) {
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
}

/* Style the icon */
sample-alert::part(icon) {
  margin-right: 12px;
}

/* Style the content area */
sample-alert::part(content) {
  flex: 1;
}

/* Style the dismiss button */
sample-alert::part(dismiss) {
  opacity: 0.7;
  transition: opacity 0.2s;
}

sample-alert::part(dismiss):hover {
  opacity: 1;
}
```

## 🖼️ Examples

### Alert Variants
```html
<sample-alert variant="success">
  <strong>Success!</strong> Operation completed successfully.
</sample-alert>

<sample-alert variant="error">
  <strong>Error!</strong> Something went wrong.
</sample-alert>

<sample-alert variant="warning">
  <strong>Warning!</strong> Please review your input.
</sample-alert>

<sample-alert variant="info">
  <strong>Info:</strong> This is useful information.
</sample-alert>
```

### Auto-Dismiss Alert
```html
<sample-alert variant="success" auto-dismiss="3000">
  This alert will disappear after 3 seconds.
</sample-alert>
```

### Alert with Title
```html
<sample-alert variant="error" title="Validation Error">
  Please fill in all required fields before submitting.
</sample-alert>
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system-educkf/components/sample-alert';

function AlertExample() {
  const handleDismiss = (e) => {
    console.log('Alert dismissed:', e.detail);
  };

  return (
    <sample-alert 
      variant="success" 
      dismissible
      onSampleAlertDismiss={handleDismiss}
    >
      React alert content
    </sample-alert>
  );
}
```

### Vue
```vue
<template>
  <sample-alert 
    variant="success" 
    :dismissible="true"
    @sample-alert-dismiss="handleDismiss"
  >
    Vue alert content
  </sample-alert>
</template>

<script>
import 'sample-design-system-educkf/components/sample-alert';

export default {
  methods: {
    handleDismiss(event) {
      console.log('Alert dismissed:', event.detail);
    }
  }
}
</script>
```

## ♿ Accessibility

### WCAG 2.1 Compliance
- **Color Contrast**: All variants meet WCAG AA standards
- **Screen Readers**: Proper ARIA roles and labels
- **Keyboard Navigation**: Dismiss button is keyboard accessible
- **Focus Management**: Clear focus indicators

### ARIA Attributes
```html
<sample-alert 
  role="alert"
  aria-live="polite"
  aria-label="Success notification"
>
  Alert content
</sample-alert>
```

## 📝 TypeScript

```typescript
import { SampleAlert } from 'sample-design-system-educkf';

// Type-safe property access
const alert = document.querySelector('sample-alert') as SampleAlert;
alert.variant = 'success';
alert.dismissible = true;

// Event typing
alert.addEventListener('sample-alert-dismiss', (e: CustomEvent<{variant: string}>) => {
  console.log('Alert dismissed:', e.detail.variant);
});
```

## 🎯 Interactive Playground

{% playground %}
<div style="space-y: 16px;">
  <sample-alert variant="success" dismissible>
    <strong>Success!</strong> Your operation completed successfully.
  </sample-alert>
  
  <sample-alert variant="error" dismissible>
    <strong>Error!</strong> Something went wrong with your request.
  </sample-alert>
  
  <sample-alert variant="warning" dismissible>
    <strong>Warning!</strong> Please review your settings.
  </sample-alert>
  
  <sample-alert variant="info" dismissible>
    <strong>Info:</strong> Here's some helpful information.
  </sample-alert>
</div>

<script>
document.querySelectorAll('sample-alert').forEach(alert => {
  alert.addEventListener('sample-alert-dismiss', (e) => {
    console.log(`${e.detail.variant} alert dismissed`);
  });
});
</script>
{% /playground %} 
