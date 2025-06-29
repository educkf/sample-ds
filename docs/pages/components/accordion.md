---
title: "Accordion Component"
description: "Collapsible content sections for information organization with smooth animations and accessibility features"
---

# Accordion Component

The `sample-accordion` component provides collapsible content sections for information organization. It features smooth animations, keyboard navigation, and comprehensive accessibility support.

## 📦 Installation

### NPM Package
```bash
npm install sample-design-system-educkf
```

```javascript
// Import the component
import 'sample-design-system-educkf/components/sample-accordion';

// Use in your templates
<sample-accordion>
  <sample-accordion-item title="Section 1">
    <p>Content for section 1</p>
  </sample-accordion-item>
</sample-accordion>
```

### Script Tag
```html
<sample-accordion>
  <sample-accordion-item title="Section 1">
    <p>Content for section 1</p>
  </sample-accordion-item>
</sample-accordion>

<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-accordion.js"></script>
```

## 🎯 Basic Usage

### Simple Accordion
```html
<sample-accordion>
  <sample-accordion-item title="Getting Started">
    <p>Welcome to our design system! This section covers the basics.</p>
  </sample-accordion-item>
  <sample-accordion-item title="Advanced Features">
    <p>Learn about advanced features and customization options.</p>
  </sample-accordion-item>
</sample-accordion>
```

### Multiple Open Sections
```html
<sample-accordion allow-multiple>
  <sample-accordion-item title="Section 1" open>
    <p>This section is open by default.</p>
  </sample-accordion-item>
  <sample-accordion-item title="Section 2">
    <p>This section can be opened independently.</p>
  </sample-accordion-item>
</sample-accordion>
```

## 🎨 Properties

### Accordion Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `allow-multiple` | `boolean` | `false` | Allow multiple sections to be open simultaneously |
| `disabled` | `boolean` | `false` | Disable the entire accordion |

### Accordion Item Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `title` | `string` | `""` | The title text for the accordion section |
| `open` | `boolean` | `false` | Whether the section is initially open |
| `disabled` | `boolean` | `false` | Whether the section is disabled |
| `icon` | `string` | `"chevron"` | Icon type: `"chevron"`, `"plus"`, `"arrow"` |

## 🔥 Events

### Accordion Events
| Event | Detail | Description |
|-------|---------|-------------|
| `sample-accordion-change` | `{ openItems: string[] }` | Fired when accordion state changes |

### Accordion Item Events
| Event | Detail | Description |
|-------|---------|-------------|
| `sample-accordion-item-toggle` | `{ open: boolean, title: string }` | Fired when item is toggled |
| `sample-accordion-item-open` | `{ title: string }` | Fired when item opens |
| `sample-accordion-item-close` | `{ title: string }` | Fired when item closes |

```javascript
// Listen for accordion changes
document.querySelector('sample-accordion').addEventListener('sample-accordion-change', (e) => {
  console.log('Open items:', e.detail.openItems);
});
```

## 🎨 CSS Custom Properties

### Accordion Styling
```css
sample-accordion {
  --sample-accordion-border: 1px solid #e2e8f0;
  --sample-accordion-border-radius: 8px;
  --sample-accordion-gap: 0px;
}
```

### Accordion Item Styling
```css
sample-accordion-item {
  /* Header styling */
  --sample-accordion-header-bg: #ffffff;
  --sample-accordion-header-bg-hover: #f8fafc;
  --sample-accordion-header-bg-active: #f1f5f9;
  --sample-accordion-header-color: #1e293b;
  --sample-accordion-header-font-weight: 600;
  --sample-accordion-header-font-size: 16px;
  --sample-accordion-header-padding: 16px;
  --sample-accordion-header-border: 1px solid #e2e8f0;
  
  /* Content styling */
  --sample-accordion-content-bg: #ffffff;
  --sample-accordion-content-color: #475569;
  --sample-accordion-content-font-size: 14px;
  --sample-accordion-content-padding: 16px;
  --sample-accordion-content-border: 1px solid #e2e8f0;
  
  /* Icon styling */
  --sample-accordion-icon-size: 20px;
  --sample-accordion-icon-color: #64748b;
  --sample-accordion-icon-transition: transform 0.2s ease;
  
  /* Animation */
  --sample-accordion-animation-duration: 0.3s;
  --sample-accordion-animation-easing: ease-in-out;
}
```

## 🎨 CSS Parts

```css
/* Style the accordion container */
sample-accordion::part(container) {
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

/* Style accordion item headers */
sample-accordion-item::part(header) {
  font-weight: bold;
  text-transform: uppercase;
}

/* Style accordion item content */
sample-accordion-item::part(content) {
  line-height: 1.6;
}

/* Style accordion icons */
sample-accordion-item::part(icon) {
  filter: drop-shadow(0 1px 2px rgba(0,0,0,0.1));
}
```

## 🖼️ Examples

### FAQ Accordion
```html
<sample-accordion>
  <sample-accordion-item title="What is the refund policy?">
    <p>We offer a 30-day money-back guarantee for all purchases.</p>
  </sample-accordion-item>
  <sample-accordion-item title="How do I contact support?">
    <p>You can reach our support team at support@example.com or via live chat.</p>
  </sample-accordion-item>
  <sample-accordion-item title="Do you offer discounts?">
    <p>Yes! We offer student discounts and volume pricing for enterprises.</p>
  </sample-accordion-item>
</sample-accordion>
```

### Settings Panel
```html
<sample-accordion allow-multiple>
  <sample-accordion-item title="Account Settings" open>
    <form>
      <label>Email: <input type="email" /></label>
      <label>Name: <input type="text" /></label>
    </form>
  </sample-accordion-item>
  <sample-accordion-item title="Privacy Settings">
    <label><input type="checkbox" /> Email notifications</label>
    <label><input type="checkbox" /> Marketing emails</label>
  </sample-accordion-item>
</sample-accordion>
```

## 🎨 Custom Theming

### Dark Theme
```css
.dark-theme sample-accordion-item {
  --sample-accordion-header-bg: #1e293b;
  --sample-accordion-header-bg-hover: #334155;
  --sample-accordion-header-color: #f1f5f9;
  --sample-accordion-content-bg: #0f172a;
  --sample-accordion-content-color: #cbd5e1;
  --sample-accordion-header-border: 1px solid #334155;
  --sample-accordion-content-border: 1px solid #334155;
}
```

### Custom Icon Theme
```css
.custom-accordion sample-accordion-item {
  --sample-accordion-icon-color: #3b82f6;
  --sample-accordion-icon-size: 24px;
}

.custom-accordion sample-accordion-item[open] {
  --sample-accordion-icon-color: #1d4ed8;
}
```

## 🔧 Framework Integration

### React
```jsx
import 'sample-design-system-educkf/components/sample-accordion';

function AccordionExample() {
  return (
    <sample-accordion 
      allow-multiple
      onSampleAccordionChange={(e) => console.log(e.detail)}
    >
      <sample-accordion-item title="Section 1">
        <p>React content here</p>
      </sample-accordion-item>
    </sample-accordion>
  );
}
```

### Vue
```vue
<template>
  <sample-accordion 
    :allow-multiple="true"
    @sample-accordion-change="handleChange"
  >
    <sample-accordion-item title="Section 1">
      <p>Vue content here</p>
    </sample-accordion-item>
  </sample-accordion>
</template>

<script>
import 'sample-design-system-educkf/components/sample-accordion';

export default {
  methods: {
    handleChange(event) {
      console.log('Accordion changed:', event.detail);
    }
  }
}
</script>
```

### Angular
```typescript
// app.component.ts
import { Component } from '@angular/core';
import 'sample-design-system-educkf/components/sample-accordion';

@Component({
  selector: 'app-root',
  template: `
    <sample-accordion 
      [allow-multiple]="true"
      (sample-accordion-change)="onAccordionChange($event)"
    >
      <sample-accordion-item title="Section 1">
        <p>Angular content here</p>
      </sample-accordion-item>
    </sample-accordion>
  `
})
export class AppComponent {
  onAccordionChange(event: CustomEvent) {
    console.log('Accordion changed:', event.detail);
  }
}
```

### Svelte
```svelte
<script>
  import 'sample-design-system-educkf/components/sample-accordion';
  
  function handleAccordionChange(event) {
    console.log('Accordion changed:', event.detail);
  }
</script>

<sample-accordion 
  allow-multiple
  on:sample-accordion-change={handleAccordionChange}
>
  <sample-accordion-item title="Section 1">
    <p>Svelte content here</p>
  </sample-accordion-item>
</sample-accordion>
```

## ♿ Accessibility

### WCAG 2.1 Compliance
- **AA Compliant**: Color contrast ratios meet WCAG AA standards
- **Keyboard Navigation**: Full keyboard support with arrow keys
- **Screen Readers**: Proper ARIA attributes and announcements
- **Focus Management**: Logical tab order and visible focus indicators

### Keyboard Interactions
| Key | Action |
|-----|--------|
| `Tab` | Move focus to next accordion item |
| `Shift + Tab` | Move focus to previous accordion item |
| `Enter` / `Space` | Toggle accordion item |
| `Arrow Down` | Move to next accordion item |
| `Arrow Up` | Move to previous accordion item |
| `Home` | Move to first accordion item |
| `End` | Move to last accordion item |

### ARIA Attributes
```html
<sample-accordion role="tablist">
  <sample-accordion-item 
    role="tab"
    aria-expanded="false"
    aria-controls="content-1"
    id="header-1"
  >
    <div role="tabpanel" aria-labelledby="header-1" id="content-1">
      Content here
    </div>
  </sample-accordion-item>
</sample-accordion>
```

## 🌐 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | 61+ | ✅ Full |
| Firefox | 63+ | ✅ Full |
| Safari | 13+ | ✅ Full |
| Edge | 79+ | ✅ Full |
| IE 11 | - | ❌ No Support |

## 📝 TypeScript

```typescript
import { SampleAccordion, SampleAccordionItem } from 'sample-design-system-educkf';

// Type-safe property access
const accordion = document.querySelector('sample-accordion') as SampleAccordion;
accordion.allowMultiple = true;

// Event typing
accordion.addEventListener('sample-accordion-change', (e: CustomEvent<{openItems: string[]}>) => {
  console.log('Open items:', e.detail.openItems);
});

// Accordion item typing
const item = document.querySelector('sample-accordion-item') as SampleAccordionItem;
item.open = true;
item.title = 'New Title';
```

## 🎯 Interactive Playground

{% playground %}
<sample-accordion>
  <sample-accordion-item title="Getting Started" open>
    <p>Welcome to the Sample Design System! This accordion component provides a clean way to organize content into collapsible sections.</p>
    <p>Try clicking on the headers to expand and collapse sections.</p>
  </sample-accordion-item>
  <sample-accordion-item title="Customization Options">
    <p>The accordion supports extensive customization through CSS custom properties:</p>
    <ul>
      <li>Header and content styling</li>
      <li>Animation duration and easing</li>
      <li>Icon customization</li>
      <li>Border and spacing options</li>
    </ul>
  </sample-accordion-item>
  <sample-accordion-item title="Accessibility Features">
    <p>Built with accessibility in mind:</p>
    <ul>
      <li>Full keyboard navigation support</li>
      <li>Screen reader compatible</li>
      <li>WCAG 2.1 AA compliant</li>
      <li>Proper focus management</li>
    </ul>
  </sample-accordion-item>
</sample-accordion>

<script>
// Event handling demonstration
document.querySelectorAll('sample-accordion').forEach(accordion => {
  accordion.addEventListener('sample-accordion-change', (e) => {
    console.log('Accordion state changed:', e.detail);
  });
});
</script>
{% /playground %} 
