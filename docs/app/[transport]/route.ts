import { z } from 'zod';
import { createMcpHandler } from '@vercel/mcp-adapter';

const handler = createMcpHandler(
  async (server) => {
    // Define a components list tool
    server.tool(
      'list_components',
      'Returns a list of all available components in the Sample Design System',
      {
        // No parameters needed for this tool
      },
      async () => {
        const components = [
          {
            name: 'Button',
            href: '/components/button',
            description: 'Interactive button with variants and sizes',
            features: ['Multiple variants (primary, secondary, outline)', 'Different sizes', 'Loading states', 'Icon support']
          },
          {
            name: 'Card',
            href: '/components/card',
            description: 'Flexible content container with multiple variants',
            features: ['Header and footer sections', 'Multiple styles', 'Image support', 'Action buttons']
          },
          {
            name: 'Alert',
            href: '/components/alert',
            description: 'Contextual feedback messages with dismissible functionality',
            features: ['Success, warning, error, info types', 'Dismissible option', 'Icon display', 'Custom styling']
          },
          {
            name: 'Accordion',
            href: '/components/accordion',
            description: 'Collapsible content sections for information organization',
            features: ['Expandable/collapsible sections', 'Multiple items support', 'Animation transitions', 'Keyboard navigation']
          },
          {
            name: 'Breadcrumb',
            href: '/components/breadcrumb',
            description: 'Hierarchical navigation with customizable separators',
            features: ['Customizable separators', 'Link navigation', 'Current page indication', 'Responsive design']
          },
          {
            name: 'Modal',
            href: '/components/modal',
            description: 'Dialog overlay with comprehensive accessibility features',
            features: ['Overlay backdrop', 'Focus management', 'Escape key handling', 'Scroll lock', 'ARIA compliant']
          }
        ];

        const componentList = components.map(comp => 
          `🎯 **${comp.name}**\n   📍 ${comp.description}\n   🔗 ${comp.href}\n   ✨ Features: ${comp.features.join(', ')}`
        ).join('\n\n');

        const summary = `📦 **Sample Design System Components** (Total: ${components.length})\n\n${componentList}\n\n🚀 **Usage**: All components are framework-agnostic web components built with Lit\n💡 **Installation**: npm install sample-design-system-educkf\n🌐 **Browser Support**: Modern browsers with Web Components support`;

        return {
          content: [{ 
            type: 'text', 
            text: summary
          }],
        };
      }
    );

    // Define a component details tool
    server.tool(
      'get_component_details',
      'Returns detailed documentation for a specific component from the Sample Design System',
      {
        componentName: z.enum(['button', 'card', 'alert', 'accordion', 'breadcrumb', 'modal'])
          .describe('The name of the component to get details for (case-sensitive)')
      },
      async ({ componentName }: { componentName: 'button' | 'card' | 'alert' | 'accordion' | 'breadcrumb' | 'modal' }) => {
        // Component documentation file mapping
        const componentDocs: Record<string, {
          filePath: string;
          description: string;
          properties: Array<{
            name: string;
            type: string;
            default: string;
            description: string;
          }>;
        }> = {
          'button': {
            filePath: 'app/components/button/page.mdx',
            description: 'Interactive button component with multiple variants, sizes, and comprehensive theming options. Supports various use cases from primary actions to form submissions.',
            properties: [
              { name: 'variant', type: "'primary' | 'secondary' | 'outline' | 'ghost'", default: "'primary'", description: 'Visual style variant' },
              { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Button size' },
              { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether button is disabled' },
              { name: 'type', type: "'button' | 'submit' | 'reset'", default: "'button'", description: 'HTML button type' },
              { name: 'loading', type: 'boolean', default: 'false', description: 'Show loading state with spinner' },
              { name: 'icon', type: 'string', default: '""', description: 'Icon to display (icon name)' },
              { name: 'iconPosition', type: "'left' | 'right'", default: "'left'", description: 'Position of the icon' }
            ]
          },
          'card': {
            filePath: 'app/components/card.mdx',
            description: 'Flexible container component for displaying content in a structured format. Supports headers, footers, and various content layouts with customizable styling options.',
            properties: [
              { name: 'variant', type: "'default' | 'outlined' | 'elevated' | 'flat'", default: "'default'", description: 'Visual style variant' },
              { name: 'padding', type: "'none' | 'small' | 'medium' | 'large'", default: "'medium'", description: 'Internal padding size' },
              { name: 'borderRadius', type: "'none' | 'small' | 'medium' | 'large'", default: "'medium'", description: 'Border radius size' },
              { name: 'shadow', type: "'none' | 'small' | 'medium' | 'large'", default: "'small'", description: 'Shadow depth' },
              { name: 'hoverable', type: 'boolean', default: 'false', description: 'Whether card responds to hover' },
              { name: 'clickable', type: 'boolean', default: 'false', description: 'Whether card is clickable' }
            ]
          },
          'alert': {
            filePath: 'app/components/alert.mdx',
            description: 'Contextual feedback messages for user actions and system notifications. Provides clear visual communication for information, success, warning, and error states.',
            properties: [
              { name: 'type', type: "'info' | 'success' | 'warning' | 'error'", default: "'info'", description: 'Alert type determining color and icon' },
              { name: 'dismissible', type: 'boolean', default: 'false', description: 'Whether the alert can be dismissed' },
              { name: 'title', type: 'string', default: '""', description: 'Optional alert title' },
              { name: 'icon', type: 'boolean', default: 'true', description: 'Whether to show the type icon' },
              { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Alert size variant' }
            ]
          },
          'accordion': {
            filePath: 'app/components/accordion.mdx',
            description: 'Collapsible content sections for information organization. Provides expandable/collapsible functionality with smooth animations.',
            properties: [
              { name: 'expanded', type: 'boolean', default: 'false', description: 'Whether the accordion item is expanded' },
              { name: 'disabled', type: 'boolean', default: 'false', description: 'Whether the accordion item is disabled' },
              { name: 'multiple', type: 'boolean', default: 'false', description: 'Allow multiple items to be expanded simultaneously' },
              { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Accordion size variant' }
            ]
          },
          'breadcrumb': {
            filePath: 'app/components/breadcrumb.mdx',
            description: 'Hierarchical navigation component with customizable separators. Shows the current page location within a navigational hierarchy.',
            properties: [
              { name: 'separator', type: 'string', default: '"/"', description: 'Separator character between breadcrumb items' },
              { name: 'maxItems', type: 'number', default: 'undefined', description: 'Maximum number of items to show before collapsing' },
              { name: 'showRoot', type: 'boolean', default: 'true', description: 'Whether to show the root item' },
              { name: 'size', type: "'small' | 'medium' | 'large'", default: "'medium'", description: 'Breadcrumb size variant' }
            ]
          },
          'modal': {
            filePath: 'app/components/modal.mdx',
            description: 'Dialog overlay component with comprehensive accessibility features. Provides modal dialogs with focus management, keyboard navigation, and backdrop interaction.',
            properties: [
              { name: 'open', type: 'boolean', default: 'false', description: 'Whether the modal is open' },
              { name: 'size', type: "'small' | 'medium' | 'large' | 'fullscreen'", default: "'medium'", description: 'Modal size variant' },
              { name: 'closable', type: 'boolean', default: 'true', description: 'Whether the modal can be closed' },
              { name: 'backdrop', type: "'static' | 'clickable'", default: "'clickable'", description: 'Backdrop interaction behavior' },
              { name: 'centered', type: 'boolean', default: 'false', description: 'Whether to center the modal vertically' },
              { name: 'scrollable', type: 'boolean', default: 'false', description: 'Whether modal content is scrollable' }
            ]
          }
        };

        const componentInfo = componentDocs[componentName];
        if (!componentInfo) {
          return {
            content: [{ 
              type: 'text', 
              text: `❌ Component "${componentName}" not found. Available components: ${Object.keys(componentDocs).join(', ')}`
            }],
          };
        }

        // Format properties table
        const propertiesTable = componentInfo.properties.map((prop: {
          name: string;
          type: string;
          default: string;
          description: string;
        }) => 
          `| \`${prop.name}\` | \`${prop.type}\` | \`${prop.default}\` | ${prop.description} |`
        ).join('\n');

        // Format basic usage examples
        const basicExamples: Record<string, string> = {
          'button': '<sample-button>Click me!</sample-button>\n<sample-button variant="secondary">Secondary</sample-button>\n<sample-button size="large" disabled>Disabled</sample-button>',
          'card': '<sample-card>\n  <h3>Card Title</h3>\n  <p>Card content goes here...</p>\n</sample-card>',
          'alert': '<sample-alert type="info">This is an informational alert message.</sample-alert>\n<sample-alert type="success">Operation completed successfully!</sample-alert>',
          'accordion': '<sample-accordion>\n  <div slot="header">Section 1</div>\n  <div>Content for section 1</div>\n</sample-accordion>',
          'breadcrumb': '<sample-breadcrumb>\n  <a href="/">Home</a>\n  <a href="/products">Products</a>\n  <span>Current Page</span>\n</sample-breadcrumb>',
          'modal': '<sample-modal open>\n  <div slot="header">Modal Title</div>\n  <p>Modal content goes here...</p>\n</sample-modal>'
        };

        const detailedInfo = `🎯 **${componentName.charAt(0).toUpperCase() + componentName.slice(1)} Component**

📍 **Description**: ${componentInfo.description}

🔗 **Documentation**: ${componentInfo.filePath}

## 📋 Basic Usage
\`\`\`html
${basicExamples[componentName]}
\`\`\`

## 📦 Installation
\`\`\`bash
npm install sample-design-system-educkf
\`\`\`

\`\`\`javascript
// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-${componentName}';
\`\`\`

\`\`\`html
<!-- Script tag usage -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-${componentName}.js"></script>
\`\`\`

## 🎨 Properties
| Property | Type | Default | Description |
|----------|------|---------|-------------|
${propertiesTable}

## ✨ Key Features
${componentInfo.properties.map((prop: {
  name: string;
  type: string;
  default: string;
  description: string;
}) => `• **${prop.name}**: ${prop.description}`).join('\n')}

## 🎯 Framework Compatibility
✅ **Works with**: React, Vue, Angular, Svelte, Vanilla HTML
✅ **TypeScript**: Full type definitions included
✅ **Accessibility**: WCAG 2.1 compliant with keyboard navigation
✅ **Theming**: CSS custom properties for complete customization`;

        return {
          content: [{ 
            type: 'text', 
            text: detailedInfo
          }],
        };
      }
    );

    // Server is ready with hello_world, calculator, list_components, and get_component_details tools
  },
  {
    // Server options - empty for basic setup
  },
  {
    // Transport options
  }
);

export { handler as GET, handler as POST, handler as DELETE }; 