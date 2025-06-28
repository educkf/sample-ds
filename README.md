# Sample Design System

A modern Design System library built with [Lit Framework](https://lit.dev/) and TypeScript.

## Features

- 🚀 Built with Lit Framework for high-performance web components
- 📦 TypeScript support for better development experience
- 🎨 CSS custom properties for easy theming
- 🔧 Vite for fast development and building
- 📱 Responsive and accessible components
- 🧪 Development environment for testing components
- 🎯 **Individual component bundles** - Each component can be used standalone with a single `<script>` tag
- 🔗 **Drop-in components** - No build process required for consumers
- 📦 **Self-contained** - CSS and JavaScript bundled together for each component

## Quick Start

### For Script Tag Usage (No Build Required)

```html
<!DOCTYPE html>
<html>
<body>
  <sample-button variant="primary">Click me!</sample-button>
  <script src="https://unpkg.com/sample-design-system/dist/components/sample-button.js"></script>
</body>
</html>
```

### For Bundled Projects (Vite, Webpack, etc.)

```bash
npm install sample-design-system
```

```javascript
import 'sample-design-system/components/sample-button';
// or
import { SampleButton } from 'sample-design-system';
```

### Development

Start the development server to test and showcase components:

```bash
npm run dev
```

This will start a development server at `http://localhost:5173/dev/` where you can see all components in action.

### Building

Build the library for production:

```bash
npm run build
```

This creates multiple build formats:
- `dist/index.es.js` - ES modules for bundlers (~15KB, lit externalized)
- `dist/standalone/index.js` - Complete standalone library (~21KB)
- `dist/components/[name].js` - Individual standalone components (~21KB each)
- `dist/*.d.ts` - TypeScript definitions

### Demo

View standalone component demos:

```bash
npm run demo
```

### Linting

Check code quality:

```bash
npm run lint
```

Fix linting issues automatically:

```bash
npm run lint:fix
```

## Project Structure

```
src/
├── components/           # Component library
│   └── sample-button/   # Example button component
│       ├── sample-button.ts
│       └── index.ts     # Individual component entry
└── index.ts             # Main entry point

dev/
└── index.html          # Development playground

demo/
└── standalone-button.html  # Standalone component demo

dist/                   # Built library (generated)
├── index.es.js         # ES modules for bundlers
├── index.d.ts          # TypeScript definitions
├── standalone/         # Standalone versions
│   └── index.js        # Complete standalone library
└── components/         # Individual standalone components
    └── sample-button.js
```

## Components

### Button (`sample-button`)

A versatile button component with multiple variants and sizes.

#### Properties

- `variant`: `'primary' | 'secondary'` (default: `'primary'`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)

#### Events

- `sample-click`: Fired when the button is clicked (custom event)

#### CSS Custom Properties

- `--sample-button-bg`: Background color
- `--sample-button-color`: Text color
- `--sample-button-border`: Border color
- `--sample-button-radius`: Border radius
- `--sample-button-padding`: Padding
- `--sample-button-font-size`: Font size
- And many more for customization

#### Example Usage

**Option 1: Standalone (no build process required):**

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <!-- Just add the component -->
  <sample-button variant="primary" size="large">
    Click me!
  </sample-button>

  <!-- Single script tag - that's it! -->
  <script src="path/to/dist/components/sample-button.js"></script>
</body>
</html>
```

**Option 2: Bundled project (npm install):**

```bash
npm install sample-design-system
```

```javascript
// Import individual component
import 'sample-design-system/components/sample-button';

// Or import from main library
import { SampleButton } from 'sample-design-system';

// Or import everything
import 'sample-design-system';
```

```html
<sample-button variant="primary" size="large">
  Click me!
</sample-button>
```

## Adding New Components

1. Create a new folder in `src/components/`
2. Add your component TypeScript file
3. Export it from `src/index.ts`
4. Add examples to the development HTML file

## Contributing

1. Follow the existing code style
2. Add proper TypeScript types
3. Include CSS custom properties for theming
4. Test your components in the development environment
5. Update documentation

## License

MIT 

## Using Individual Components

Each component is built as a standalone UMD bundle that can be used directly in any HTML page without a build process.

### Standalone Usage

1. Download or host the component file: `dist/components/sample-button.js`
2. Add a single script tag to your HTML:

```html
<script src="path/to/sample-button.js"></script>
```

3. Use the component anywhere in your HTML:

```html
<sample-button variant="secondary" size="large">
  My Button
</sample-button>
```

### Benefits of Standalone Components

- 🚀 **Zero build step** - Works immediately in any HTML file
- 📦 **Self-contained** - All dependencies (including Lit) are bundled
- 🎨 **Themeable** - CSS custom properties work out of the box
- 🔧 **Framework agnostic** - Works with React, Vue, Angular, or vanilla HTML
- 📱 **Progressive enhancement** - Add interactivity to existing sites
- 🎯 **Selective loading** - Only load the components you need

### Bundle Information

| Usage Pattern | Size | Dependencies | Best For |
|---------------|------|--------------|----------|
| Individual Component (NPM) | ~3KB | Lit (external) | Modern bundlers |
| Complete Library (NPM) | ~15KB | Lit (external) | Bundled projects |
| Individual Component (Script) | ~21KB | Self-contained | Direct HTML usage |
| Complete Library (Script) | ~21KB | Self-contained | Script tag usage |

## 📊 Available Components

| Component | Status | NPM | Script Tag | Documentation |
|-----------|--------|-----|------------|---------------|
| Button | ✅ Stable | ✅ | ✅ | [View Docs](./docs/components/button.md) |
| Input | 🚧 Coming Soon | ⏳ | ⏳ | Coming Soon |
| Card | 📋 Planned | ⏳ | ⏳ | Coming Soon |

## 📚 Complete Documentation

- **[Getting Started Guide](./docs/getting-started.md)** - Installation, usage patterns, and framework integration
- **[Documentation Overview](./docs/README.md)** - Complete documentation index  
- **[Button Component](./docs/components/button.md)** - Comprehensive button component guide

### Quick Testing
- **Development**: `npm run dev` - Component development environment (bundled mode)
- **Demo**: `npm run demo` - Standalone component demo (script tag mode)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch following our [Component Development Guidelines](./.cursor/rules/component-development.mdc)
3. Test in both bundled and standalone modes
4. Add comprehensive documentation
5. Submit a pull request

See our [Getting Started Guide](./docs/getting-started.md#development-setup) for development setup.

## 📄 License

MIT License - see LICENSE file for details.
