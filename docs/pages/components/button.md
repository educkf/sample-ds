---
title: 'Button'
description: 'Interactive button with variants, sizes, and comprehensive theming options'
---

# Button

Interactive button component with multiple variants, sizes, and comprehensive theming options. Supports various use cases from primary actions to form submissions.

## 🎮 Interactive Playground

{% playground component="button" /%}

## 📋 Example

### Basic Button Usage
```html
<sample-button>Click me!</sample-button>
<sample-button variant="secondary">Secondary</sample-button>
<sample-button size="large" disabled>Disabled</sample-button>
```

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system-educkf
```

```javascript
// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-button';

// Or import from main library
import { SampleButton } from 'sample-design-system-educkf';
```

### Script Tag (Standalone)
```html
<!-- Individual component -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-button.js"></script>

<!-- Or complete library -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/standalone/index.js"></script>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Visual style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | boolean | `false` | Whether button is disabled |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |
| `loading` | boolean | `false` | Show loading state with spinner |
| `icon` | string | `""` | Icon to display (icon name) |
| `iconPosition` | `'left' \| 'right'` | `'left'` | Position of the icon |

## 📚 Properties with Code Examples

### `variant` Property
```html
<!-- Different button variants -->
<sample-button variant="primary">Primary Button</sample-button>
<sample-button variant="secondary">Secondary Button</sample-button>
<sample-button variant="outline">Outline Button</sample-button>
<sample-button variant="ghost">Ghost Button</sample-button>
```

### `size` Property
```html
<!-- Different button sizes -->
<sample-button size="small">Small Button</sample-button>
<sample-button size="medium">Medium Button</sample-button>
<sample-button size="large">Large Button</sample-button>
```

### `disabled` Property
```html
<!-- Disabled buttons -->
<sample-button disabled>Disabled Primary</sample-button>
<sample-button variant="secondary" disabled>Disabled Secondary</sample-button>
<sample-button variant="outline" disabled>Disabled Outline</sample-button>
```

### `type` Property
```html
<!-- Form buttons with different types -->
<form>
  <sample-button type="submit">Submit Form</sample-button>
  <sample-button type="reset" variant="secondary">Reset Form</sample-button>
  <sample-button type="button" variant="outline">Cancel</sample-button>
</form>
```

### `loading` Property
```html
<!-- Loading state buttons -->
<sample-button loading>Loading...</sample-button>
<sample-button variant="secondary" loading>Processing</sample-button>
<sample-button variant="outline" loading disabled>Submitting</sample-button>
```

### `icon` and `iconPosition` Properties
```html
<!-- Buttons with icons -->
<sample-button icon="download">Download</sample-button>
<sample-button icon="save" iconPosition="right">Save Changes</sample-button>
<sample-button variant="outline" icon="edit">Edit</sample-button>
<sample-button variant="ghost" icon="trash" size="small">Delete</sample-button>
```

## 🎨 Customization

### CSS Custom Properties
```css
sample-button {
  --sample-button-font-size: 14px;
  --sample-button-font-weight: 500;
  --sample-button-line-height: 1.5;
  --sample-button-border-radius: 6px;
  --sample-button-border-width: 1px;
  --sample-button-padding-x: 16px;
  --sample-button-padding-y: 8px;
  --sample-button-transition: all 0.2s ease;
}

/* Primary variant */
sample-button[variant="primary"] {
  --sample-button-bg: #3b82f6;
  --sample-button-color: #ffffff;
  --sample-button-border-color: #3b82f6;
  --sample-button-bg-hover: #2563eb;
  --sample-button-border-color-hover: #2563eb;
}

/* Secondary variant */
sample-button[variant="secondary"] {
  --sample-button-bg: #f3f4f6;
  --sample-button-color: #374151;
  --sample-button-border-color: #d1d5db;
  --sample-button-bg-hover: #e5e7eb;
  --sample-button-border-color-hover: #9ca3af;
}

/* Size variations */
sample-button[size="small"] {
  --sample-button-font-size: 12px;
  --sample-button-padding-x: 12px;
  --sample-button-padding-y: 6px;
}

sample-button[size="large"] {
  --sample-button-font-size: 16px;
  --sample-button-padding-x: 24px;
  --sample-button-padding-y: 12px;
}
```

### Custom Styling Example
```html
<style>
.hero-button {
  --sample-button-bg: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  --sample-button-color: white;
  --sample-button-padding-x: 32px;
  --sample-button-padding-y: 16px;
  --sample-button-font-size: 18px;
  --sample-button-border-radius: 25px;
  --sample-button-border-width: 0;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);
  transform: translateY(0);
  transition: all 0.3s ease;
}

.hero-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(255, 107, 107, 0.4);
}
</style>

<sample-button class="hero-button">Get Started</sample-button>
```

## ♿ Accessibility

The button component includes comprehensive accessibility features:

- **Semantic HTML**: Uses proper `<button>` element
- **Keyboard Navigation**: 
  - `Tab` to focus
  - `Enter` and `Space` to activate
  - Focus visible indicators
- **ARIA Support**: 
  - `aria-disabled` for disabled state
  - `aria-pressed` for toggle buttons
  - `aria-label` support for icon-only buttons
- **Screen Reader Support**: 
  - Loading state announcements
  - State change notifications
- **High Contrast**: Maintains visibility in high contrast modes
- **Focus Management**: Proper focus handling and visible focus rings

### ARIA Implementation
```html
<!-- The component automatically handles ARIA attributes -->
<sample-button 
  aria-label="Download file"
  aria-describedby="download-help"
  disabled
  aria-disabled="true"
>
  Download
</sample-button>

<!-- Loading state with aria-live -->
<sample-button 
  loading 
  aria-live="polite"
  aria-busy="true"
>
  Processing...
</sample-button>
```

### Accessibility Best Practices
- Use descriptive button text that explains the action
- Provide `aria-label` for icon-only buttons
- Use appropriate button types (`submit`, `reset`, `button`)
- Ensure sufficient color contrast (4.5:1 minimum)
- Make buttons large enough for touch targets (44px minimum)
- Group related buttons logically
- Use loading states for long-running operations

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system-educkf/components/sample-button';

function ButtonExample() {
  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    console.log('Button clicked:', e.detail);
    setLoading(true);
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 2000));
    setLoading(false);
  };

  return (
    <div>
      <sample-button 
        variant="primary"
        size="large"
        loading={loading}
        onClick={handleClick}
      >
        {loading ? 'Processing...' : 'Submit'}
      </sample-button>
      
      <sample-button 
        variant="outline" 
        icon="edit"
        disabled={loading}
      >
        Edit
      </sample-button>
    </div>
  );
}
```

### Vue.js
```vue
<template>
  <div>
    <sample-button 
      :variant="buttonVariant"
      :size="buttonSize"
      :loading="isLoading"
      :disabled="isDisabled"
      @sample-click="handleClick"
    >
      {{ buttonText }}
    </sample-button>
    
    <sample-button 
      variant="secondary"
      icon="settings"
      @click="openSettings"
    >
      Settings
    </sample-button>
  </div>
</template>

<script>
import 'sample-design-system-educkf/components/sample-button';

export default {
  data() {
    return {
      buttonVariant: 'primary',
      buttonSize: 'medium',
      isLoading: false,
      isDisabled: false,
      buttonText: 'Click me'
    };
  },
  methods: {
    async handleClick(event) {
      console.log('Button clicked:', event.detail);
      this.isLoading = true;
      
      try {
        await this.performAction();
        this.buttonText = 'Success!';
      } catch (error) {
        this.buttonText = 'Error occurred';
      } finally {
        this.isLoading = false;
      }
    },
    
    openSettings() {
      this.$router.push('/settings');
    },
    
    async performAction() {
      // Simulate API call
      return new Promise(resolve => setTimeout(resolve, 1500));
    }
  }
};
</script>
```

### Angular
```typescript
import { Component } from '@angular/core';
import 'sample-design-system-educkf/components/sample-button';

@Component({
  selector: 'app-button',
  template: `
    <div>
      <sample-button 
        [attr.variant]="buttonVariant"
        [attr.size]="buttonSize"
        [attr.loading]="isLoading"
        [attr.disabled]="isDisabled"
        [attr.type]="buttonType"
        (sample-click)="handleClick($event)"
      >
        {{ buttonText }}
      </sample-button>
      
      <sample-button 
        variant="outline"
        icon="download"
        [attr.disabled]="isLoading"
        (click)="downloadFile()"
      >
        Download
      </sample-button>
      
      <form (ngSubmit)="onSubmit()">
        <sample-button 
          type="submit"
          [attr.loading]="submitting"
        >
          Submit Form
        </sample-button>
      </form>
    </div>
  `
})
export class ButtonComponent {
  buttonVariant = 'primary';
  buttonSize = 'medium';
  buttonType = 'button';
  isLoading = false;
  isDisabled = false;
  submitting = false;
  buttonText = 'Click me';

  async handleClick(event: CustomEvent) {
    console.log('Button clicked:', event.detail);
    this.isLoading = true;
    
    try {
      await this.performAction();
      this.buttonText = 'Success!';
    } catch (error) {
      this.buttonText = 'Error occurred';
    } finally {
      this.isLoading = false;
    }
  }

  downloadFile() {
    // Download logic
    console.log('Downloading file...');
  }

  async onSubmit() {
    this.submitting = true;
    // Form submission logic
    await new Promise(resolve => setTimeout(resolve, 2000));
    this.submitting = false;
  }

  private async performAction(): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, 1500));
  }
}
```
