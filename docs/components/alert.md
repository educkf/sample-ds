# Alert Component

The `sample-alert` component provides contextual feedback messages for user actions. It supports multiple variants, dismissible functionality, and comprehensive accessibility features while maintaining consistent theming across the Design System.

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system
```

```javascript
// Import the component
import 'sample-design-system/components/sample-alert';
// Or import the class for programmatic usage
import { SampleAlert } from 'sample-design-system';
```

### Script Tag (Standalone)
```html
<script src="https://unpkg.com/sample-design-system/dist/components/sample-alert.js"></script>
```

## 🎯 Basic Usage

### Simple Alert
```html
<sample-alert variant="info" title="Information">
  This is an informational message for the user.
</sample-alert>
```

### Dismissible Alert
```html
<sample-alert variant="success" title="Success!" dismissible>
  Your action was completed successfully. Click the × to dismiss.
</sample-alert>
```

### Alert with Actions
```html
<sample-alert variant="warning" title="Confirmation Required">
  <p>Are you sure you want to delete this item?</p>
  <div slot="actions">
    <button data-action="cancel">Cancel</button>
    <button data-action="confirm">Delete</button>
  </div>
</sample-alert>
```

### Custom Icon Alert
```html
<sample-alert variant="error" title="Custom Icon" icon="🚨">
  This alert uses a custom emoji icon instead of the default.
</sample-alert>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'success' \| 'warning' \| 'error' \| 'info' \| 'neutral'` | `'info'` | Visual style variant of the alert |
| `size` | `'compact' \| 'default' \| 'spacious'` | `'default'` | Size variation affecting padding and spacing |
| `title` | `string` | `''` | Optional title text displayed prominently |
| `dismissible` | `boolean` | `false` | Whether the alert can be dismissed by the user |
| `dismissed` | `boolean` | `false` | Whether the alert is currently dismissed (hidden) |
| `icon` | `string` | `''` | Custom icon to display (overrides default variant icons) |
| `showIcon` | `boolean` | `true` | Whether to show default icons for variants |
| `role` | `'alert' \| 'status' \| 'region'` | `'alert'` | ARIA role for the alert |

## 🔥 Events

| Event | Type | Description |
|-------|------|-------------|
| `sample-alert-dismiss` | `CustomEvent<AlertDismissDetail>` | Fired when the alert is dismissed |
| `sample-alert-action` | `CustomEvent<AlertActionDetail>` | Fired when an action button is clicked |

### Event Detail Types

```typescript
interface AlertDismissDetail {
  variant: string;
  title: string;
  timestamp: number;
}

interface AlertActionDetail {
  action: string;
  target: HTMLElement;
  variant: string;
  title: string;
  timestamp: number;
}
```

### Event Usage Example
```javascript
document.querySelector('sample-alert').addEventListener('sample-alert-dismiss', (event) => {
  console.log('Alert dismissed:', event.detail);
  // { variant: "success", title: "Success!", timestamp: 1640995200000 }
});

document.querySelector('sample-alert').addEventListener('sample-alert-action', (event) => {
  console.log('Action clicked:', event.detail.action);
  // Handle specific actions
  if (event.detail.action === 'confirm') {
    // Perform confirmation action
  }
});
```

## 🎨 CSS Custom Properties

### Container Styling

| Property | Default | Description |
|----------|---------|-------------|
| `--sample-alert-bg` | `white` | Background color of the alert |
| `--sample-alert-color` | `#212529` | Text color |
| `--sample-alert-border` | `#dee2e6` | Border color |
| `--sample-alert-border-width` | `1px` | Border width |
| `--sample-alert-border-radius` | `8px` | Border radius |
| `--sample-alert-padding` | `16px` | Internal padding |
| `--sample-alert-gap` | `12px` | Gap between elements |
| `--sample-alert-shadow` | `0 2px 4px rgba(0,0,0,0.1)` | Box shadow |

### Variant-Specific Properties

| Property | Default | Description |
|----------|---------|-------------|
| `--sample-alert-success-bg` | `#d1e7dd` | Success variant background |
| `--sample-alert-success-color` | `#0f5132` | Success variant text color |
| `--sample-alert-success-border` | `#badbcc` | Success variant border |
| `--sample-alert-success-icon` | `#198754` | Success variant icon color |
| `--sample-alert-warning-bg` | `#fff3cd` | Warning variant background |
| `--sample-alert-warning-color` | `#664d03` | Warning variant text color |
| `--sample-alert-error-bg` | `#f8d7da` | Error variant background |
| `--sample-alert-error-color` | `#721c24` | Error variant text color |
| `--sample-alert-info-bg` | `#d1ecf1` | Info variant background |
| `--sample-alert-info-color` | `#055160` | Info variant text color |

### Interactive Elements

| Property | Default | Description |
|----------|---------|-------------|
| `--sample-alert-dismiss-color` | `currentColor` | Dismiss button color |
| `--sample-alert-dismiss-hover-bg` | `rgba(0,0,0,0.1)` | Dismiss button hover background |
| `--sample-alert-focus-ring` | `#007bff` | Focus ring color for accessibility |
| `--sample-alert-transition` | `all 0.3s ease` | Animation transition |

### Typography

| Property | Default | Description |
|----------|---------|-------------|
| `--sample-alert-title-font-weight` | `600` | Title font weight |
| `--sample-alert-title-color` | `currentColor` | Title text color |
| `--sample-alert-line-height` | `1.5` | Content line height |

## 🎨 CSS Parts

| Part | Description |
|------|-------------|
| `alert` | The main alert container |
| `icon` | The alert icon container |
| `content` | The alert content area |
| `actions` | The alert actions container |
| `dismiss` | The dismiss button |

### External Styling Example
```css
sample-alert::part(alert) {
  box-shadow: 0 8px 32px rgba(0,0,0,0.15);
  border-radius: 12px;
}

sample-alert::part(icon) {
  background: rgba(255,255,255,0.2);
  border-radius: 50%;
  padding: 4px;
}

sample-alert::part(dismiss) {
  background: rgba(255,255,255,0.9);
  border-radius: 50%;
  color: #dc3545;
}
```

## 🖼️ Examples

### Variants
```html
<!-- Success Alert -->
<sample-alert variant="success" title="Success!" dismissible>
  Your changes have been saved successfully.
</sample-alert>

<!-- Warning Alert -->
<sample-alert variant="warning" title="Warning">
  This action cannot be undone. Please proceed with caution.
</sample-alert>

<!-- Error Alert -->
<sample-alert variant="error" title="Error" dismissible>
  An error occurred while processing your request.
</sample-alert>

<!-- Info Alert -->
<sample-alert variant="info" title="Information">
  Your session will expire in 5 minutes.
</sample-alert>

<!-- Neutral Alert -->
<sample-alert variant="neutral">
  This is a neutral message without specific semantic meaning.
</sample-alert>
```

### Sizes
```html
<!-- Compact Alert -->
<sample-alert variant="info" size="compact" title="Compact">
  Reduced padding for dense layouts.
</sample-alert>

<!-- Default Alert -->
<sample-alert variant="info" size="default" title="Default">
  Standard padding for most use cases.
</sample-alert>

<!-- Spacious Alert -->
<sample-alert variant="info" size="spacious" title="Spacious">
  Extra padding for comfortable reading and breathing room.
</sample-alert>
```

### Advanced Features
```html
<!-- Alert with Actions -->
<sample-alert variant="warning" title="Confirm Deletion">
  <p>Are you sure you want to delete "project-files.zip"? This action cannot be undone.</p>
  <div slot="actions">
    <button type="button" data-action="cancel" style="margin-right: 8px;">Cancel</button>
    <button type="button" data-action="delete" style="background: #dc3545; color: white; border: none; padding: 8px 16px; border-radius: 4px;">Delete</button>
  </div>
</sample-alert>

<!-- Custom Icon Alert -->
<sample-alert variant="success" icon="🎉" title="Celebration!">
  You've completed all your tasks for today! Great job!
</sample-alert>

<!-- No Icon Alert -->
<sample-alert variant="info" show-icon="false" title="Clean Design">
  This alert doesn't show any icon for a minimalist appearance.
</sample-alert>

<!-- Custom Icon Slot -->
<sample-alert variant="error" title="Server Error">
  <svg slot="icon" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
  </svg>
  A server error occurred. Our team has been notified.
</sample-alert>
```

### Real-World Use Cases
```html
<!-- Form Validation -->
<sample-alert variant="error" title="Form Validation Error" dismissible>
  <p>Please correct the following errors:</p>
  <ul>
    <li>Email address is required</li>
    <li>Password must be at least 8 characters</li>
    <li>Terms and conditions must be accepted</li>
  </ul>
</sample-alert>

<!-- System Notification -->
<sample-alert variant="info" title="System Maintenance" role="status">
  <p>Scheduled maintenance will occur tonight from 2:00 AM to 4:00 AM EST.</p>
  <p>Some features may be temporarily unavailable during this time.</p>
  <div slot="actions">
    <a href="/maintenance-details" data-action="learn-more">Learn More</a>
  </div>
</sample-alert>

<!-- Progress Update -->
<sample-alert variant="success" title="Upload Complete" dismissible>
  <p>Your file "presentation.pdf" has been uploaded successfully.</p>
  <div slot="actions">
    <button data-action="view-file">View File</button>
    <button data-action="share">Share</button>
  </div>
</sample-alert>

<!-- Security Alert -->
<sample-alert variant="warning" title="Security Notice" icon="🔒">
  <p>We detected a login from a new device:</p>
  <ul>
    <li><strong>Device:</strong> iPhone (Safari)</li>
    <li><strong>Location:</strong> New York, NY</li>
    <li><strong>Time:</strong> 2 minutes ago</li>
  </ul>
  <div slot="actions">
    <button data-action="secure-account">Secure My Account</button>
    <button data-action="ignore">This Was Me</button>
  </div>
</sample-alert>
```

## 🎨 Custom Theming

### Global Theming
```css
:root {
  --sample-alert-border-radius: 12px;
  --sample-alert-shadow: 0 8px 32px rgba(0,0,0,0.12);
  --sample-alert-success-bg: #f0f9ff;
  --sample-alert-success-color: #0c4a6e;
  --sample-alert-success-border: #0ea5e9;
}
```

### Dark Mode Support
```css
@media (prefers-color-scheme: dark) {
  :root {
    --sample-alert-bg: #1f2937;
    --sample-alert-color: #f9fafb;
    --sample-alert-border: #374151;
    --sample-alert-success-bg: #065f46;
    --sample-alert-success-color: #d1fae5;
    --sample-alert-error-bg: #7f1d1d;
    --sample-alert-error-color: #fecaca;
  }
}
```

### Per-Instance Theming
```html
<sample-alert variant="info" title="Custom Themed Alert" style="
  --sample-alert-bg: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --sample-alert-color: white;
  --sample-alert-border: transparent;
  --sample-alert-icon-color: rgba(255,255,255,0.9);
">
  This alert has a beautiful gradient background.
</sample-alert>
```

### Brand Integration
```css
.brand-alerts {
  --sample-alert-success-bg: var(--brand-success-light);
  --sample-alert-success-color: var(--brand-success-dark);
  --sample-alert-success-border: var(--brand-success);
  --sample-alert-error-bg: var(--brand-error-light);
  --sample-alert-error-color: var(--brand-error-dark);
  --sample-alert-border-radius: var(--brand-border-radius);
}
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system/components/sample-alert';

function AlertExample() {
  const [alerts, setAlerts] = useState([]);

  const handleDismiss = (event) => {
    console.log('Alert dismissed:', event.detail);
    // Remove alert from state if managing programmatically
  };

  const handleAction = (event) => {
    const { action } = event.detail;
    if (action === 'delete') {
      // Perform delete action
      console.log('Delete confirmed');
    }
  };

  return (
    <div>
      <sample-alert
        variant="success"
        title="React Integration"
        dismissible
        onSampleAlertDismiss={handleDismiss}
        onSampleAlertAction={handleAction}
      >
        This alert works perfectly with React state management!
      </sample-alert>
    </div>
  );
}
```

### Vue
```vue
<template>
  <div>
    <sample-alert
      variant="warning"
      title="Vue Integration"
      :dismissible="true"
      @sample-alert-dismiss="handleDismiss"
      @sample-alert-action="handleAction"
    >
      Vue's reactive system works seamlessly with web components.
      <div slot="actions">
        <button data-action="confirm">Confirm</button>
        <button data-action="cancel">Cancel</button>
      </div>
    </sample-alert>
  </div>
</template>

<script>
import 'sample-design-system/components/sample-alert';

export default {
  methods: {
    handleDismiss(event) {
      console.log('Alert dismissed in Vue:', event.detail);
    },
    handleAction(event) {
      console.log('Action triggered:', event.detail.action);
    }
  }
}
</script>
```

### Angular
```typescript
// app.component.ts
import 'sample-design-system/components/sample-alert';

@Component({
  selector: 'app-root',
  template: `
    <sample-alert
      variant="error"
      title="Angular Integration"
      [dismissible]="true"
      (sample-alert-dismiss)="handleDismiss($event)"
      (sample-alert-action)="handleAction($event)"
    >
      Angular's event binding works great with custom events.
      <div slot="actions">
        <button data-action="retry">Retry</button>
        <button data-action="report">Report Issue</button>
      </div>
    </sample-alert>
  `
})
export class AppComponent {
  handleDismiss(event: CustomEvent) {
    console.log('Alert dismissed:', event.detail);
  }

  handleAction(event: CustomEvent) {
    const { action } = event.detail;
    if (action === 'retry') {
      // Retry the failed operation
    } else if (action === 'report') {
      // Open issue reporting
    }
  }
}
```

### Svelte
```svelte
<script>
  import 'sample-design-system/components/sample-alert';
  
  let showAlert = true;
  
  function handleDismiss(event) {
    console.log('Alert dismissed:', event.detail);
    showAlert = false;
  }
  
  function handleAction(event) {
    console.log('Action:', event.detail.action);
  }
</script>

{#if showAlert}
  <sample-alert
    variant="info"
    title="Svelte Integration"
    dismissible
    on:sample-alert-dismiss={handleDismiss}
    on:sample-alert-action={handleAction}
  >
    Svelte's reactivity pairs well with web component events.
    <div slot="actions">
      <button data-action="learn-more">Learn More</button>
    </div>
  </sample-alert>
{/if}
```

## ♿ Accessibility

### WCAG Compliance Features

- **Screen Reader Support**: Proper ARIA attributes and semantic HTML
- **Keyboard Navigation**: Full keyboard accessibility for dismiss and actions
- **Focus Management**: Clear focus indicators and logical tab order
- **Live Regions**: Automatic announcement when alerts appear
- **High Contrast**: Supports high contrast mode preferences
- **Reduced Motion**: Respects user motion preferences

### ARIA Attributes

| Attribute | Purpose | Default Value |
|-----------|---------|---------------|
| `role` | Defines the alert type | `"alert"` |
| `aria-live` | Controls live region behavior | `"assertive"` for alerts, `"polite"` for status |
| `aria-atomic` | Announces entire content | `"true"` |
| `aria-label` | Labels dismiss button | `"Dismiss alert"` |

### Keyboard Support

| Key | Action |
|-----|--------|
| `Tab` | Navigate to dismiss button or actions |
| `Enter` / `Space` | Activate dismiss button |
| `Escape` | Dismiss alert (if dismissible) |

### Best Practices

```html
<!-- Use appropriate roles -->
<sample-alert role="alert" variant="error">
  Critical error requiring immediate attention
</sample-alert>

<sample-alert role="status" variant="info">
  Background process completed
</sample-alert>

<!-- Provide clear, actionable content -->
<sample-alert variant="warning" title="Action Required">
  <p>Your password will expire in 3 days.</p>
  <div slot="actions">
    <button data-action="change-password">Change Password</button>
    <button data-action="remind-later">Remind Me Later</button>
  </div>
</sample-alert>

<!-- Use semantic HTML in actions -->
<sample-alert variant="error" title="Upload Failed">
  <p>The file could not be uploaded due to size restrictions.</p>
  <div slot="actions">
    <button type="button" data-action="choose-file">Choose Different File</button>
    <a href="/help/file-limits" data-action="learn-more">Learn About Limits</a>
  </div>
</sample-alert>
```

## 🌐 Browser Support

- **Modern Browsers**: Chrome 63+, Firefox 63+, Safari 12+, Edge 79+
- **Web Components**: Requires modern browser with Custom Elements support
- **Polyfills**: Use `@webcomponents/webcomponentsjs` for older browsers

### Legacy Support
```html
<!-- For older browsers -->
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-bundle.js"></script>
<script src="https://unpkg.com/sample-design-system/dist/components/sample-alert.js"></script>
```

## 📝 TypeScript

### Type Safety
```typescript
import { SampleAlert } from 'sample-design-system';

// Type-safe property access
const alert = document.querySelector('sample-alert') as SampleAlert;
alert.variant = 'success';
alert.dismissible = true;
alert.title = 'Operation Complete';

// Type-safe event handling
alert.addEventListener('sample-alert-dismiss', (event: CustomEvent<{
  variant: string;
  title: string;
  timestamp: number;
}>) => {
  console.log('Alert dismissed:', event.detail.title);
});

// Programmatic control
alert.show();
alert.hide();
alert.toggle();
```

### Custom Type Extensions
```typescript
declare global {
  interface HTMLElementTagNameMap {
    'sample-alert': SampleAlert;
  }
}

// Interface for alert configurations
interface AlertConfig {
  variant: 'success' | 'warning' | 'error' | 'info' | 'neutral';
  title?: string;
  message: string;
  dismissible?: boolean;
  actions?: Array<{
    label: string;
    action: string;
    primary?: boolean;
  }>;
}

// Helper function for creating alerts
function createAlert(config: AlertConfig): SampleAlert {
  const alert = document.createElement('sample-alert') as SampleAlert;
  alert.variant = config.variant;
  alert.title = config.title || '';
  alert.dismissible = config.dismissible || false;
  alert.textContent = config.message;
  
  if (config.actions) {
    const actionsSlot = document.createElement('div');
    actionsSlot.slot = 'actions';
    config.actions.forEach(actionConfig => {
      const button = document.createElement('button');
      button.textContent = actionConfig.label;
      button.setAttribute('data-action', actionConfig.action);
      if (actionConfig.primary) {
        button.style.background = '#007bff';
        button.style.color = 'white';
      }
      actionsSlot.appendChild(button);
    });
    alert.appendChild(actionsSlot);
  }
  
  return alert;
}
```

## 🔧 Advanced Usage

### Programmatic Alert Management
```javascript
class AlertManager {
  constructor(container) {
    this.container = container || document.body;
    this.alerts = new Map();
  }

  show(id, config) {
    const alert = createAlert(config);
    alert.id = id;
    
    // Add event listeners
    alert.addEventListener('sample-alert-dismiss', () => {
      this.dismiss(id);
    });
    
    this.container.appendChild(alert);
    this.alerts.set(id, alert);
    
    return alert;
  }

  dismiss(id) {
    const alert = this.alerts.get(id);
    if (alert) {
      alert.hide();
      setTimeout(() => {
        alert.remove();
        this.alerts.delete(id);
      }, 300);
    }
  }

  dismissAll() {
    this.alerts.forEach((alert, id) => {
      this.dismiss(id);
    });
  }
}

// Usage
const alertManager = new AlertManager();

alertManager.show('success-1', {
  variant: 'success',
  title: 'Success!',
  message: 'Operation completed successfully.',
  dismissible: true
});
```

### Toast-like Notifications
```javascript
function showToast(message, variant = 'info', duration = 5000) {
  const alert = document.createElement('sample-alert');
  alert.variant = variant;
  alert.textContent = message;
  alert.dismissible = true;
  
  // Position as toast
  alert.style.position = 'fixed';
  alert.style.top = '20px';
  alert.style.right = '20px';
  alert.style.zIndex = '1000';
  alert.style.maxWidth = '400px';
  
  document.body.appendChild(alert);
  
  // Auto-dismiss after duration
  setTimeout(() => {
    alert.hide();
  }, duration);
  
  // Remove from DOM after animation
  alert.addEventListener('sample-alert-dismiss', () => {
    setTimeout(() => alert.remove(), 300);
  });
}

// Usage
showToast('File saved successfully!', 'success');
showToast('Network error occurred', 'error', 8000);
```

### Integration with Form Validation
```javascript
class FormValidator {
  constructor(form) {
    this.form = form;
    this.alertContainer = form.querySelector('.form-alerts') || form;
  }

  showFieldErrors(errors) {
    this.clearAlerts();
    
    const alert = document.createElement('sample-alert');
    alert.variant = 'error';
    alert.title = 'Please correct the following errors:';
    alert.dismissible = true;
    
    const errorList = document.createElement('ul');
    errors.forEach(error => {
      const li = document.createElement('li');
      li.textContent = error.message;
      errorList.appendChild(li);
    });
    
    alert.appendChild(errorList);
    this.alertContainer.appendChild(alert);
  }

  showSuccess(message) {
    this.clearAlerts();
    
    const alert = document.createElement('sample-alert');
    alert.variant = 'success';
    alert.title = 'Success!';
    alert.textContent = message;
    alert.dismissible = true;
    
    this.alertContainer.appendChild(alert);
  }

  clearAlerts() {
    this.alertContainer.querySelectorAll('sample-alert').forEach(alert => {
      alert.remove();
    });
  }
}
``` 