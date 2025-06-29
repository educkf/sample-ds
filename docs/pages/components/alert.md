---
title: 'Alert'
description: 'Contextual feedback messages for user actions and system notifications'
---

# Alert

Contextual feedback messages for user actions and system notifications. Provides clear visual communication for information, success, warning, and error states.

## 🎮 Interactive Playground

{% playground component="alert" /%}

## 📋 Example

### Basic Alert Usage
```html
<sample-alert type="info">
  This is an informational alert message.
</sample-alert>

<sample-alert type="success">
  Operation completed successfully!
</sample-alert>

<sample-alert type="warning">
  Please review your settings before proceeding.
</sample-alert>

<sample-alert type="error">
  An error occurred while processing your request.
</sample-alert>
```

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system-educkf
```

```javascript
// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-alert';

// Or import from main library
import { SampleAlert } from 'sample-design-system-educkf';
```

### Script Tag (Standalone)
```html
<!-- Individual component -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-alert.js"></script>

<!-- Or complete library -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/standalone/index.js"></script>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `type` | `'info' \| 'success' \| 'warning' \| 'error'` | `'info'` | Alert type determining color and icon |
| `dismissible` | boolean | `false` | Whether the alert can be dismissed |
| `title` | string | `""` | Optional alert title |
| `icon` | boolean | `true` | Whether to show the type icon |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Alert size variant |

## 📚 Properties with Code Examples

### `type` Property
```html
<!-- Different alert types -->
<sample-alert type="info">
  Information: This is helpful information for the user.
</sample-alert>

<sample-alert type="success">
  Success: Your action was completed successfully.
</sample-alert>

<sample-alert type="warning">
  Warning: Please review this before proceeding.
</sample-alert>

<sample-alert type="error">
  Error: Something went wrong with your request.
</sample-alert>
```

### `dismissible` Property
```html
<!-- Dismissible alerts -->
<sample-alert type="info" dismissible>
  This alert can be closed by clicking the × button.
</sample-alert>

<sample-alert type="warning" dismissible title="Important Notice">
  This warning can be dismissed after reading.
</sample-alert>
```

### `title` Property
```html
<!-- Alerts with titles -->
<sample-alert type="success" title="Success!">
  Your changes have been saved successfully.
</sample-alert>

<sample-alert type="error" title="Upload Failed">
  The file could not be uploaded. Please try again.
</sample-alert>
```

### `icon` Property
```html
<!-- Alert without icon -->
<sample-alert type="info" icon="false">
  This alert displays without an icon.
</sample-alert>

<!-- Alert with icon (default) -->
<sample-alert type="success">
  This alert shows the success icon.
</sample-alert>
```

### `size` Property
```html
<!-- Different alert sizes -->
<sample-alert type="info" size="small">
  Small alert for compact spaces.
</sample-alert>

<sample-alert type="info" size="medium">
  Medium alert (default size).
</sample-alert>

<sample-alert type="info" size="large">
  Large alert for important messages.
</sample-alert>
```

## 🎨 Customization

### CSS Custom Properties
```css
sample-alert {
  --sample-alert-border-radius: 8px;
  --sample-alert-padding: 16px;
  --sample-alert-font-size: 14px;
  --sample-alert-line-height: 1.5;
  --sample-alert-border-width: 1px;
  --sample-alert-icon-size: 20px;
}

/* Type-specific colors */
sample-alert[type="info"] {
  --sample-alert-bg: #e3f2fd;
  --sample-alert-color: #1976d2;
  --sample-alert-border-color: #bbdefb;
}

sample-alert[type="success"] {
  --sample-alert-bg: #e8f5e8;
  --sample-alert-color: #2e7d32;
  --sample-alert-border-color: #c8e6c9;
}

sample-alert[type="warning"] {
  --sample-alert-bg: #fff3cd;
  --sample-alert-color: #f57c00;
  --sample-alert-border-color: #ffcc02;
}

sample-alert[type="error"] {
  --sample-alert-bg: #f8d7da;
  --sample-alert-color: #d32f2f;
  --sample-alert-border-color: #f5c6cb;
}
```

### Custom Styling Example
```html
<style>
.premium-alert {
  --sample-alert-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --sample-alert-color: white;
  --sample-alert-border-radius: 12px;
  --sample-alert-padding: 20px;
  --sample-alert-border-width: 0;
  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
}
</style>

<sample-alert type="info" class="premium-alert" title="Premium Feature">
  This alert uses custom gradient styling for a premium look.
</sample-alert>
```

## ♿ Accessibility

The alert component includes comprehensive accessibility features:

- **ARIA Roles**: Proper `alert` or `status` roles based on urgency
- **Screen Reader Support**: 
  - Immediate announcement for `alert` role (urgent messages)
  - Polite announcement for `status` role (non-urgent updates)
- **Keyboard Navigation**: 
  - Dismissible alerts support `Tab` and `Enter`/`Space` for closing
- **Color Independence**: Not relying solely on color to convey meaning
- **High Contrast**: Sufficient color contrast ratios for readability
- **Focus Management**: Proper focus handling for dismissible alerts

### ARIA Implementation
```html
<!-- The component automatically generates proper ARIA attributes -->
<sample-alert 
  type="error" 
  role="alert" 
  aria-live="assertive"
  aria-atomic="true"
>
  Critical error message
</sample-alert>

<sample-alert 
  type="info" 
  role="status" 
  aria-live="polite"
  aria-atomic="true"
>
  Informational update
</sample-alert>
```

### Accessibility Best Practices
- Use `error` type for critical messages that require immediate attention
- Use `warning` type for important but not critical information
- Use `success` type for positive confirmations
- Use `info` type for general informational messages
- Provide clear, concise messaging
- Include actionable instructions when appropriate

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system-educkf/components/sample-alert';

function AlertExample() {
  const [showAlert, setShowAlert] = useState(true);

  const handleDismiss = (e) => {
    console.log('Alert dismissed:', e.detail);
    setShowAlert(false);
  };

  return (
    <>
      {showAlert && (
        <sample-alert 
          type="success" 
          dismissible 
          title="Success!"
          onSampleAlertDismiss={handleDismiss}
        >
          Your operation completed successfully.
        </sample-alert>
      )}
      
      <sample-alert type="info" icon="false">
        Welcome to our application!
      </sample-alert>
    </>
  );
}
```

### Vue.js
```vue
<template>
  <div>
    <sample-alert 
      v-if="showAlert"
      type="success" 
      :dismissible="true" 
      title="Success!"
      @sample-alert-dismiss="handleDismiss"
    >
      Your operation completed successfully.
    </sample-alert>
    
    <sample-alert type="warning" :size="alertSize">
      {{ warningMessage }}
    </sample-alert>
  </div>
</template>

<script>
import 'sample-design-system-educkf/components/sample-alert';

export default {
  data() {
    return {
      showAlert: true,
      alertSize: 'medium',
      warningMessage: 'Please review your input.'
    };
  },
  methods: {
    handleDismiss(event) {
      console.log('Alert dismissed:', event.detail);
      this.showAlert = false;
    }
  }
};
</script>
```

### Angular
```typescript
import { Component } from '@angular/core';
import 'sample-design-system-educkf/components/sample-alert';

@Component({
  selector: 'app-alert',
  template: `
    <sample-alert 
      *ngIf="showAlert"
      type="error" 
      [attr.dismissible]="true"
      title="Error"
      (sample-alert-dismiss)="handleDismiss($event)"
    >
      {{ errorMessage }}
    </sample-alert>
    
    <sample-alert 
      type="info" 
      [attr.icon]="showIcon"
      [attr.size]="alertSize"
    >
      Welcome to our Angular application!
    </sample-alert>
  `
})
export class AlertComponent {
  showAlert = true;
  showIcon = true;
  alertSize = 'medium';
  errorMessage = 'An error occurred while processing your request.';

  handleDismiss(event: CustomEvent) {
    console.log('Alert dismissed:', event.detail);
    this.showAlert = false;
  }
}
```
