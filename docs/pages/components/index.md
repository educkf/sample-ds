---
title: Components
description: Complete component library with interactive examples and playground
---

# Components

Explore our complete library of web components built with Lit Framework. Each component is designed to be accessible, themeable, and framework-agnostic.

## 📊 Component Status

| Component | Status | NPM | Script Tag | Docs | Interactive |
|-----------|--------|-----|------------|------|-------------|
| [Button](/components/button) | ✅ Stable | ✅ | ✅ | ✅ | ✅ |
| [Card](/components/card) | ✅ Stable | ✅ | ✅ | ✅ | ✅ |
| [Alert](/components/alert) | ✅ Stable | ✅ | ✅ | ✅ | ✅ |
| [Accordion](/components/accordion) | ✅ Stable | ✅ | ✅ | ✅ | ✅ |
| [Breadcrumb](/components/breadcrumb) | ✅ Stable | ✅ | ✅ | ✅ | ✅ |
| [Modal](/components/modal) | ✅ Stable | ✅ | ✅ | ✅ | ✅ |

## 🎯 Interactive Components

### Form Controls
- **[Button](/components/button)** - Interactive button with variants, sizes, and states
- **Input** *(Coming Soon)* - Text input with validation and theming

### Layout & Navigation
- **[Card](/components/card)** - Flexible content container with header, body, and footer slots
- **[Breadcrumb](/components/breadcrumb)** - Hierarchical navigation with customizable separators
- **[Accordion](/components/accordion)** - Collapsible content sections for information organization

### Feedback & Overlays
- **[Alert](/components/alert)** - Contextual feedback messages with dismissible functionality
- **[Modal](/components/modal)** - Dialog overlay with comprehensive accessibility features

## 🌟 Key Features

### ✅ Consistent API
- All components follow the same naming conventions
- Predictable property and event patterns
- Unified theming system

### ✅ Full Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader optimized
- Focus management

### ✅ Framework Integration
- React, Vue, Angular, Svelte support
- TypeScript definitions included
- Standard web component APIs

### ✅ Theming System
- CSS custom properties throughout
- Global and component-level theming
- Dark mode ready

## 🚀 Quick Examples

Each component page includes:

- **Installation** instructions for both NPM and script tag usage
- **Interactive playground** with live code examples
- **Complete API reference** with all properties, events, and CSS variables
- **Accessibility guidelines** and best practices
- **Framework integration** examples for popular frameworks
- **Theming examples** with custom CSS properties

## 🎨 Design Tokens

All components use consistent design tokens:

```css
:root {
  /* Colors */
  --sample-primary-color: #007bff;
  --sample-secondary-color: #6c757d;
  --sample-success-color: #28a745;
  --sample-danger-color: #dc3545;
  --sample-warning-color: #ffc107;
  
  /* Typography */
  --sample-font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --sample-font-size: 14px;
  
  /* Spacing */
  --sample-spacing-xs: 2px;
  --sample-spacing-sm: 4px;
  --sample-spacing-md: 8px;
  --sample-spacing-lg: 16px;
  --sample-spacing-xl: 24px;
}
```

## 🛠️ Development

All components are:
- Built with Lit Framework
- TypeScript first
- Tested in multiple environments
- Documented with Storybook-style examples 