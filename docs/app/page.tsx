import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Sample Design System
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A modern web component library built with Lit Framework that works everywhere
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🌟 Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ✅ Dual Usage Patterns
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li><strong>NPM Package</strong> - For modern bundlers with tree-shaking (~15KB)</li>
                <li><strong>Script Tags</strong> - For direct HTML usage, self-contained (~21KB)</li>
              </ul>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ✅ Framework Agnostic
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>Works with React, Vue, Angular, Svelte, and vanilla HTML</li>
                <li>Native web components with standard APIs</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ✅ Full TypeScript Support
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>Complete type definitions</li>
                <li>Intelligent autocompletion</li>
                <li>Type-safe property access</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ✅ Comprehensive Theming
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>CSS custom properties for all styling</li>
                <li>Global and per-component theming</li>
                <li>Dark mode support</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ✅ Accessibility First
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li>WCAG 2.1 compliant</li>
                <li>Keyboard navigation</li>
                <li>Screen reader support</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                ✅ AI Integration Ready
              </h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2 text-sm">
                <li><strong>Model Context Protocol (MCP) Server</strong> for LLM integration</li>
                <li>AI assistants can access component information</li>
                <li>Automatic code generation assistance</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Start */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🚀 Quick Start
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                NPM Installation
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md mb-4">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  npm install sample-design-system-educkf
                </code>
              </div>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  {`// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-button';

// Use in your HTML/templates
// <sample-button variant="primary">Click me!</sample-button>`}
                </code>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Script Tag Usage
              </h3>
              <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md">
                <code className="text-sm text-gray-800 dark:text-gray-200">
                  {`<sample-button variant="primary">Click me!</sample-button>
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-button.js"></script>`}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            📚 Documentation Structure
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/how-to-use"
              className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                How to Use →
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Installation, usage patterns, and framework integration
              </p>
            </Link>

            <Link
              href="/components"
              className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                Components →
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Complete component library with examples
              </p>
            </Link>

            <Link
              href="/mcp-server"
              className="group bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3 group-hover:text-blue-700 dark:group-hover:text-blue-300">
                MCP Server →
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                AI/LLM integration via Model Context Protocol
              </p>
            </Link>
          </div>
        </div>

        {/* Available Components */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            🎯 Available Components
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { name: 'Button', href: '/components/button', desc: 'Interactive button with variants and sizes' },
              { name: 'Card', href: '/components/card', desc: 'Flexible content container with multiple variants' },
              { name: 'Alert', href: '/components/alert', desc: 'Contextual feedback messages with dismissible functionality' },
              { name: 'Accordion', href: '/components/accordion', desc: 'Collapsible content sections for information organization' },
              { name: 'Breadcrumb', href: '/components/breadcrumb', desc: 'Hierarchical navigation with customizable separators' },
              { name: 'Modal', href: '/components/modal', desc: 'Dialog overlay with comprehensive accessibility features' }
            ].map((component) => (
              <Link
                key={component.name}
                href={component.href}
                className="group bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                  {component.name} →
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {component.desc}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Browser Support */}
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            🌐 Browser Support
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Browser</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Version</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">Native Support</th>
                  <th className="text-left p-3 font-semibold text-gray-900 dark:text-white">With Polyfill</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 dark:text-gray-300">
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-3">Chrome</td>
                  <td className="p-3">61+</td>
                  <td className="p-3">✅</td>
                  <td className="p-3">✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-3">Firefox</td>
                  <td className="p-3">63+</td>
                  <td className="p-3">✅</td>
                  <td className="p-3">✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-3">Safari</td>
                  <td className="p-3">13+</td>
                  <td className="p-3">✅</td>
                  <td className="p-3">✅</td>
                </tr>
                <tr className="border-b border-gray-100 dark:border-gray-700">
                  <td className="p-3">Edge</td>
                  <td className="p-3">79+</td>
                  <td className="p-3">✅</td>
                  <td className="p-3">✅</td>
                </tr>
                <tr>
                  <td className="p-3">IE 11</td>
                  <td className="p-3">-</td>
                  <td className="p-3">❌</td>
                  <td className="p-3">✅</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
