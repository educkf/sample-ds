# Sample Design System Documentation

This is the comprehensive documentation site for the Sample Design System, built with **Next.js 15.3.4** and **Markdoc** for enhanced interactive documentation.

## 🌟 Features

- **Interactive Playgrounds** - Live component examples with event logging
- **Complete API Reference** - Properties, events, CSS variables, and CSS parts
- **Framework Integration** - Examples for React, Vue, Angular, and Svelte
- **Responsive Design** - Mobile and desktop optimized layout
- **Custom Markdoc Tags** - Enhanced documentation components
- **Syntax Highlighting** - Code blocks with Prism.js
- **Navigation** - Sidebar navigation with component status tracking

## 🚀 Getting Started

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

### Build for Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## 📁 Project Structure

```
docs/
├── pages/                    # Next.js pages (Markdoc files)
│   ├── _app.js              # App layout with Header/Sidebar
│   ├── _document.js         # HTML document structure
│   ├── index.md             # Documentation homepage
│   ├── how-to-use.md        # Installation & usage guide
│   └── components/          # Component documentation
│       ├── index.md         # Components overview
│       ├── button.md        # Button component docs
│       ├── card.md          # Card component docs
│       ├── alert.md         # Alert component docs
│       ├── accordion.md     # Accordion component docs
│       ├── breadcrumb.md    # Breadcrumb component docs
│       └── modal.md         # Modal component docs
├── components/              # React components for docs
│   ├── Header.js           # Main navigation header
│   └── ComponentsSidebar.js # Components navigation sidebar
├── markdoc/                # Markdoc configuration
│   └── tags.js             # Custom Markdoc tags
├── public/                 # Static assets
├── globals.css             # Global Tailwind CSS styles
├── package.json            # Dependencies and scripts
└── next.config.ts          # Next.js + Markdoc configuration
```

## 🏷️ Custom Markdoc Tags

### Interactive Components

#### `{% playground %}`
Live component playground with interactive examples:
```markdown
{% playground 
   component="button" 
   title="Button Example"
   code="<sample-button variant=\"primary\">Click me!</sample-button>"
   height="200px" 
/%}
```

#### `{% apiTable %}`
API documentation tables:
```markdown
{% apiTable 
   type="properties"
   data=[
     { property: "variant", type: "`'primary' | 'secondary'`", default: "`'primary'`", description: "Button style" }
   ]
/%}
```

#### `{% tabs %}` / `{% tab %}`
Tabbed content organization:
```markdown
{% tabs defaultTab="0" %}
  {% tab title="NPM" icon="📦" %}
  npm install sample-design-system-educkf
  {% /tab %}
  {% tab title="Script Tag" icon="🎯" %}
  <script src="dist/components/sample-button.js"></script>
  {% /tab %}
{% /tabs %}
```

#### `{% codeBlock %}`
Enhanced code blocks with syntax highlighting:
```markdown
{% codeBlock language="javascript" title="React Example" %}
import 'sample-design-system-educkf/components/sample-button';
{% /codeBlock %}
```

#### `{% callout %}`
Information callouts:
```markdown
{% callout type="tip" title="Best Practice" %}
Always import individual components for optimal bundle size.
{% /callout %}
```

## 🎨 Styling

The documentation uses **Tailwind CSS 4.1.11** with:
- Custom color palette for the design system
- Responsive design with mobile-first approach
- Dark mode support (via `next-themes`)
- Consistent typography and spacing

## 📊 Component Status Tracking

Components are tracked with status indicators:
- ✅ **Stable** - Production ready
- 🚧 **Beta** - Feature complete, testing in progress
- ⏳ **Coming Soon** - In development

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.4
- **React**: 19.0.0
- **Markdown**: Markdoc 0.4.0
- **Styling**: Tailwind CSS 4.1.11
- **Syntax Highlighting**: Prism.js 1.29.0
- **TypeScript**: Full type support
- **Theme**: next-themes for dark mode

## 📝 Adding New Component Documentation

1. **Create the documentation file**:
   ```
   docs/pages/components/[component-name].md
   ```

2. **Update the sidebar navigation**:
   ```javascript
   // docs/components/ComponentsSidebar.js
   const components = [
     // ... existing components
     { name: 'New Component', href: '/components/new-component', icon: '🆕' },
   ];
   ```

3. **Update the components index**:
   ```markdown
   // docs/pages/components/index.md
   | [New Component](/components/new-component) | ✅ Stable | ✅ | ✅ | ✅ | ✅ |
   ```

4. **Follow the documentation template** with required sections:
   - Installation instructions
   - Interactive playgrounds
   - Complete API reference
   - Framework integration examples
   - Accessibility guidelines
   - Browser support information

## 🚀 Deployment

The documentation site can be deployed as a static site:

```bash
npm run build
```

The built site will be in the `.next` directory and can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- GitHub Pages
- Any static hosting service

## 🤝 Contributing

When contributing to the documentation:

1. **Follow the component template** for consistency
2. **Test interactive playgrounds** to ensure they work
3. **Verify responsive design** on mobile and desktop
4. **Update navigation** when adding new pages
5. **Use semantic HTML** and proper accessibility attributes
6. **Test all Markdoc tags** render correctly

## 📚 Learn More

- **[Next.js Documentation](https://nextjs.org/docs)** - Learn about Next.js features
- **[Markdoc Documentation](https://markdoc.dev/)** - Learn about Markdoc syntax
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Sample Design System](http://localhost:3000)** - View the live documentation

## 📄 License

This documentation is part of the Sample Design System project and follows the same MIT license.
