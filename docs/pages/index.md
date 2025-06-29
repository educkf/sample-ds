---
title: Sample Design System
description: A modern web component library built with Lit Framework that works everywhere
---

# Sample Design System

Welcome to the comprehensive documentation for the Sample Design System - a modern web component library built with Lit Framework.

## 🌟 Key Features

### ✅ Dual Usage Patterns
- **NPM Package** - For modern bundlers with tree-shaking (~15KB)
- **Script Tags** - For direct HTML usage, self-contained (~21KB)

### ✅ Framework Agnostic
- Works with React, Vue, Angular, Svelte, and vanilla HTML
- Native web components with standard APIs

### ✅ Full TypeScript Support
- Complete type definitions
- Intelligent autocompletion
- Type-safe property access

### ✅ Comprehensive Theming
- CSS custom properties for all styling
- Global and per-component theming
- Dark mode support

### ✅ Accessibility First
- WCAG 2.1 compliant
- Keyboard navigation
- Screen reader support

## 🚀 Quick Start

### NPM Installation
```bash
npm install sample-design-system-educkf
```

```javascript
// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-button';

// Use in your HTML/templates
// <sample-button variant="primary">Click me!</sample-button>
```

### Script Tag Usage
```html
<sample-button variant="primary">Click me!</sample-button>
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-button.js"></script>
```

## 📚 Documentation Structure

- **[How to Use](/how-to-use)** - Installation, usage patterns, and framework integration
- **[Components](/components)** - Complete component library with examples

## 🎯 Available Components

- **[Button](/components/button)** - Interactive button with variants and sizes
- **[Card](/components/card)** - Flexible content container with multiple variants
- **[Alert](/components/alert)** - Contextual feedback messages with dismissible functionality
- **[Accordion](/components/accordion)** - Collapsible content sections for information organization
- **[Breadcrumb](/components/breadcrumb)** - Hierarchical navigation with customizable separators
- **[Modal](/components/modal)** - Dialog overlay with comprehensive accessibility features

## 🌐 Browser Support

| Browser | Version | Native Support | With Polyfill |
|---------|---------|----------------|---------------|
| Chrome | 61+ | ✅ | ✅ |
| Firefox | 63+ | ✅ | ✅ |
| Safari | 13+ | ✅ | ✅ |
| Edge | 79+ | ✅ | ✅ |
| IE 11 | - | ❌ | ✅ |

## 📈 Bundle Sizes

| Usage Pattern | Size | Dependencies | Best For |
|---------------|------|--------------|----------|
| Individual Component (NPM) | ~3KB | Lit (external) | Modern bundlers |
| Complete Library (NPM) | ~15KB | Lit (external) | Bundled projects |
| Individual Component (Script) | ~21KB | Self-contained | Direct HTML usage |
| Complete Library (Script) | ~21KB | Self-contained | Script tag usage | 