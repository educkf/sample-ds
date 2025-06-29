# Sample Design System

A modern Design System library built with [Lit Framework](https://lit.dev/) and TypeScript.

[![NPM Version](https://img.shields.io/npm/v/sample-design-system-educkf)](https://www.npmjs.com/package/sample-design-system-educkf)
[![NPM Downloads](https://img.shields.io/npm/dm/sample-design-system-educkf)](https://www.npmjs.com/package/sample-design-system-educkf)

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
  <sample-card variant="elevated" clickable>
    <div slot="header">Interactive Card</div>
    <p>This is a flexible card component with multiple variants.</p>
    <div slot="footer">Perfect for content organization!</div>
  </sample-card>
  <script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-button.js"></script>
  <script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-card.js"></script>
  <script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-alert.js"></script>
  <script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-accordion.js"></script>
  <script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-breadcrumb.js"></script>
</body>
</html>
```

### For Bundled Projects (Vite, Webpack, etc.)

```bash
npm install sample-design-system-educkf
```

```javascript
import 'sample-design-system-educkf/components/sample-button';
// or
import { SampleButton } from 'sample-design-system-educkf';
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

### Card (`sample-card`)

A flexible container for organizing and displaying content in a structured format.

### Alert (`sample-alert`)

Contextual feedback messages for user actions with multiple variants and dismissible functionality.

### Accordion (`sample-accordion`)

A collapsible content component for organizing information in expandable sections.

### Breadcrumb (`sample-breadcrumb`)

A hierarchical navigation component that displays the current page's location within a navigational hierarchy.

### Modal (`sample-modal`)

A versatile dialog overlay component with comprehensive accessibility features, multiple sizes and variants, and customizable content sections.

#### Properties

- `variant`: `'primary' | 'secondary'` (default: `'primary'`)
- `size`: `'small' | 'medium' | 'large'` (default: `'medium'`)
- `disabled`: `boolean` (default: `false`)
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)

#### Events

- `sample-click`: Fired when the button is clicked (custom event)

#### Card Properties

- `variant`: `'default' | 'elevated' | 'outlined' | 'filled'` (default: `'default'`)
- `size`: `'compact' | 'default' | 'spacious'` (default: `'default'`)
- `clickable`: `boolean` (default: `false`)
- `disabled`: `boolean` (default: `false`)

#### Card Events

- `sample-card-click`: Fired when a clickable card is clicked (custom event)

#### Accordion Properties

- `variant`: `'default' | 'minimal' | 'filled' | 'outlined'` (default: `'default'`)
- `size`: `'compact' | 'default' | 'spacious'` (default: `'default'`)
- `allowMultiple`: `boolean` (default: `false`)
- `disabled`: `boolean` (default: `false`)

#### Accordion Item Properties

- `label`: `string` - The header text/title
- `description`: `string` - Optional description text
- `expanded`: `boolean` (default: `false`)
- `disabled`: `boolean` (default: `false`)
- `icon`: `string` (default: `'▼'`)

#### Accordion Events

- `sample-accordion-toggle`: Fired when an item is toggled
- `sample-accordion-expand`: Fired when an item is expanded
- `sample-accordion-collapse`: Fired when an item is collapsed

#### CSS Custom Properties

- `--sample-button-bg`: Background color
- `--sample-button-color`: Text color
- `--sample-button-border`: Border color
- `--sample-button-radius`: Border radius
- `--sample-button-padding`: Padding
- `--sample-button-font-size`: Font size
- And many more for customization

#### Card CSS Custom Properties

- `--sample-card-bg`: Background color
- `--sample-card-color`: Text color
- `--sample-card-border`: Border color
- `--sample-card-shadow`: Box shadow
- `--sample-card-padding`: Internal padding
- `--sample-card-border-radius`: Border radius
- And many more for complete customization

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
npm install sample-design-system-educkf
```

```javascript
// Import individual component
import 'sample-design-system-educkf/components/sample-button';

// Or import from main library
import { SampleButton } from 'sample-design-system-educkf';

// Or import everything
import 'sample-design-system-educkf';
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
| Card | ✅ Stable | ✅ | ✅ | [View Docs](./docs/components/card.md) |
| Accordion | ✅ Stable | ✅ | ✅ | [View Docs](./docs/components/accordion.md) |
| Breadcrumb | ✅ Stable | ✅ | ✅ | [View Docs](./docs/components/breadcrumb.md) |
| Input | 🚧 Coming Soon | ⏳ | ⏳ | Coming Soon |

## 📚 Complete Documentation

Our documentation is built with **Next.js and Markdoc** for an enhanced interactive experience:

### 🚀 Documentation Site
```bash
cd docs
npm run dev
```
Visit `http://localhost:3000` for comprehensive documentation with:
- **Interactive Playgrounds** - Live component examples
- **Complete API Reference** - Properties, events, CSS variables
- **Framework Integration** - React, Vue, Angular, Svelte examples
- **Responsive Design** - Mobile and desktop optimized

### 📖 Key Documentation Pages
- **[How to Use](http://localhost:3000/how-to-use)** - Installation, usage patterns, and framework integration
- **[Components Overview](http://localhost:3000/components)** - Complete component library
- **[Button Component](http://localhost:3000/components/button)** - Interactive button guide
- **[Card Component](http://localhost:3000/components/card)** - Flexible content container
- **[Accordion Component](http://localhost:3000/components/accordion)** - Collapsible content sections
- **[Breadcrumb Component](http://localhost:3000/components/breadcrumb)** - Hierarchical navigation
- **[Alert Component](http://localhost:3000/components/alert)** - Contextual feedback messages
- **[Modal Component](http://localhost:3000/components/modal)** - Dialog overlay component

### 🧪 Testing & Development
- **Documentation**: `cd docs && npm run dev` - Interactive documentation site
- **Component Development**: `npm run dev` - Component development environment (bundled mode)
- **Standalone Demos**: `npm run demo` - Standalone component demos (script tag mode)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch following our [Component Development Guidelines](./.cursor/rules/component-development.mdc)
3. Test in both bundled and standalone modes
4. Add comprehensive documentation
5. Submit a pull request

See our [Getting Started Guide](./docs/getting-started.md#development-setup) for development setup.

## 📄 License

MIT License - see LICENSE file for details.
