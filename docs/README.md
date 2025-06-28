# Sample Design System Documentation

Welcome to the comprehensive documentation for the Sample Design System - a modern web component library built with Lit Framework.

## 📚 Documentation Structure

### Getting Started
- **[Getting Started Guide](./getting-started.md)** - Installation, usage patterns, and framework integration
- **[Component Overview](#components)** - Available components and their documentation

### Components
- **[Button Component](./components/button.md)** - Interactive button with variants and sizes
- **[Input Component](./components/input.md)** *(Coming Soon)* - Text input with validation
- **[Card Component](./components/card.md)** *(Coming Soon)* - Content container

### Advanced Topics
- **[Theming Guide](./theming.md)** *(Coming Soon)* - Custom CSS properties and theming
- **[Accessibility](./accessibility.md)** *(Coming Soon)* - WCAG compliance and best practices
- **[Migration Guide](./migration.md)** *(Coming Soon)* - Upgrading between versions

## 🎯 Quick Navigation

### For Developers
- 📦 [NPM Package Usage](./getting-started.md#npm-package-installation)
- 🎯 [Script Tag Usage](./getting-started.md#script-tag-installation)
- 🔧 [Framework Integration](./getting-started.md#framework-integration)

### For Designers
- 🎨 [Global Theming](./getting-started.md#global-theming)
- 🎨 [Component Theming](./components/button.md#custom-theming)
- 📐 [Design Tokens](./theming.md) *(Coming Soon)*

### For Contributors
- 🏗️ [Development Setup](./getting-started.md#development-setup)
- 📝 [Component Guidelines](../.cursor/rules/component-development.mdc)
- 🚀 [Build System](../.cursor/rules/build-configuration.mdc)

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
npm install sample-design-system
```

```javascript
import 'sample-design-system/components/sample-button';
```

```html
<sample-button variant="primary">Click me!</sample-button>
```

### Script Tag Usage
```html
<sample-button variant="primary">Click me!</sample-button>
<script src="https://unpkg.com/sample-design-system/dist/components/sample-button.js"></script>
```

## 📊 Component Status

| Component | Status | NPM | Script Tag | Docs | Tests |
|-----------|--------|-----|------------|------|-------|
| Button | ✅ Stable | ✅ | ✅ | ✅ | ✅ |
| Input | 🚧 In Progress | ⏳ | ⏳ | ⏳ | ⏳ |
| Card | 📋 Planned | ⏳ | ⏳ | ⏳ | ⏳ |
| Modal | 📋 Planned | ⏳ | ⏳ | ⏳ | ⏳ |

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

## 🤝 Community

- 💬 [GitHub Discussions](https://github.com/your-org/sample-design-system/discussions)
- 🐛 [Report Issues](https://github.com/your-org/sample-design-system/issues)
- 📧 [Email Support](mailto:support@yourorg.com)
- 🐦 [Follow Updates](https://twitter.com/yourorg)

## 📄 License

MIT License - see [LICENSE](../LICENSE) for details.

---

**Need help?** Start with the [Getting Started Guide](./getting-started.md) or check out our [Button Component](./components/button.md) documentation. 