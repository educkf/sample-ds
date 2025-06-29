# Sample Design System Documentation

A comprehensive documentation site for the Sample Design System, built with Next.js, Markdoc, and Tailwind CSS. This documentation showcases interactive examples of web components from the `sample-design-system-educkf` NPM package.

## ✨ Features

- **Interactive Playground**: Live component examples with real NPM package components
- **Comprehensive API Documentation**: Properties, events, CSS custom properties, and CSS parts
- **Framework Integration Examples**: React, Vue.js, and Angular usage examples
- **Accessibility Guidelines**: WCAG compliance information and best practices
- **Custom Theming**: CSS custom properties for component customization
- **Responsive Design**: Mobile-first documentation layout

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📦 NPM Package Integration

This documentation site integrates directly with the `sample-design-system-educkf` NPM package to provide:

- **Live Component Examples**: Real components loaded from the package
- **Interactive Playgrounds**: Components that respond to user interactions
- **API Route Serving**: Components served via Next.js API routes for iframe embedding

### Available Components

- **Button**: Interactive buttons with variants and sizes
- **Card**: Flexible content containers with slots
- **Alert**: Contextual feedback messages
- **Accordion**: Collapsible content sections
- **Breadcrumb**: Navigation breadcrumbs
- **Modal**: Overlay dialogs and modals

## 🏗️ Architecture

### Technology Stack

- **Next.js 15**: React framework with Pages Router
- **Markdoc**: Markdown-based documentation system
- **Tailwind CSS 4**: Utility-first CSS framework
- **React 19**: UI library for interactive components

### Project Structure

```
docs/
├── components/           # React components for documentation
│   ├── ComponentPlayground.js  # Interactive component playground
│   ├── Header.js        # Site header
│   └── ComponentsSidebar.js    # Navigation sidebar
├── markdoc/             # Markdoc configuration
│   ├── config.js        # Main configuration
│   ├── tags.js          # Custom Markdoc tags
│   └── index.js         # Configuration export
├── pages/               # Next.js pages
│   ├── api/             # API routes
│   │   └── ds-components/  # Component serving API
│   ├── components/      # Component documentation
│   └── _app.js          # App configuration
├── public/              # Static assets
└── globals.css          # Global styles
```

## 📝 Writing Documentation

### Component Documentation Template

Each component documentation follows this structure:

```markdown
---
title: Component Name
description: Brief component description
---

# Component Name

Brief description and usage overview.

## 📦 Installation
## 🎯 Basic Usage
## 🎮 Interactive Playground
## 🎨 Properties
## 🔥 Events
## 🎨 CSS Custom Properties
## 🖼️ Examples
## 🔧 Framework Integration
## ♿ Accessibility
```

### Custom Markdoc Tags

#### Playground Tag
```markdown
{% playground component="button" title="Example Title" description="Description" code="<sample-button>Click me</sample-button>" height="150px" /%}
```

#### API Table Tag
```markdown
{% apiTable type="properties" data=[
  { "Property": "variant", "Type": "string", "Default": "primary", "Description": "Button variant" }
] /%}
```

#### Callout Tag
```markdown
{% callout type="tip" title="Pro Tip" %}
This is a helpful tip for users.
{% /callout %}
```

## 🔧 Development

### Adding New Components

1. Install/update the NPM package:
   ```bash
   npm update sample-design-system-educkf
   ```

2. Create component documentation in `pages/components/[component-name].md`

3. Add component to sidebar navigation in `components/ComponentsSidebar.js`

4. Update API route if needed in `pages/api/ds-components/[component].js`

### Testing Component Integration

The playground system automatically:
- Loads components via the API route
- Falls back to unpkg.com if local loading fails
- Adds event listeners for component interactions
- Provides interactive examples with source code

## 🚀 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Static Export

```bash
npm run build
npm run export
```

## 🤝 Contributing

1. Update component documentation as needed
2. Test interactive examples work correctly
3. Ensure accessibility guidelines are followed
4. Update this README if architecture changes

## 📄 License

MIT License - feel free to use this documentation template for your own design systems.

---

Built with ❤️ using Next.js, Markdoc, and the Sample Design System.
