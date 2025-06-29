import Link from "next/link";
import { ReactNode } from "react";

interface ComponentsLayoutProps {
  children: ReactNode;
}

const components = [
  { name: 'Overview', href: '/components', icon: '📋' },
  { name: 'Button', href: '/components/button', icon: '🔘' },
  { name: 'Card', href: '/components/card', icon: '🃏' },
  { name: 'Alert', href: '/components/alert', icon: '⚠️' },
  { name: 'Accordion', href: '/components/accordion', icon: '📁' },
  { name: 'Breadcrumb', href: '/components/breadcrumb', icon: '🍰' },
  { name: 'Modal', href: '/components/modal', icon: '🪟' },
];

export default function ComponentsLayout({ children }: ComponentsLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sample Design System
              </Link>
              <span className="hidden sm:inline text-gray-400 dark:text-gray-500">/</span>
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300 font-medium">Components</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link 
                href="/how-to-use" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                How to Use
              </Link>
              <Link 
                href="/components" 
                className="text-blue-600 dark:text-blue-400 font-medium"
              >
                Components
              </Link>
              <Link 
                href="/mcp-server" 
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                MCP Server
              </Link>
            </nav>
            
            {/* Mobile menu button */}
            <button className="md:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          {/* Mobile Components Navigation */}
          <div className="lg:hidden">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-6">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                Components Navigation
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {components.map((component) => (
                  <Link
                    key={component.name}
                    href={component.href}
                    className="flex items-center space-x-2 px-3 py-2 text-xs font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <span className="text-sm">{component.icon}</span>
                    <span className="truncate">{component.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-6 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Components
              </h3>
              <nav className="space-y-1">
                {components.map((component) => (
                  <Link
                    key={component.name}
                    href={component.href}
                    className="flex items-center space-x-3 px-3 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <span className="text-lg">{component.icon}</span>
                    <span>{component.name}</span>
                  </Link>
                ))}
              </nav>
              
              {/* Quick Stats */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Quick Stats
                </h4>
                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex justify-between">
                    <span>Components:</span>
                    <span className="font-medium">6</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Status:</span>
                    <span className="text-green-600 dark:text-green-400 font-medium">✅ Stable</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Bundle Size:</span>
                    <span className="font-medium">~15KB</span>
                  </div>
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
                <h4 className="text-sm font-medium text-gray-900 dark:text-white mb-3">
                  Resources
                </h4>
                <div className="space-y-2">
                  <a 
                    href="https://www.npmjs.com/package/sample-design-system-educkf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>📦</span>
                    <span>NPM Package</span>
                  </a>
                  <a 
                    href="https://github.com/educkf/sample-ds" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                  >
                    <span>🐙</span>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="px-6 py-6 sm:px-8 sm:py-8">
                <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-24 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-700">
                  {children}
                </div>
              </div>
            </article>
            
            {/* Footer Navigation */}
            <nav className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700" aria-label="Page navigation">
              <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center space-y-4 sm:space-y-0">
                <Link 
                  href="/how-to-use"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <span>←</span>
                  <span>How to Use</span>
                </Link>
                <Link 
                  href="/mcp-server"
                  className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                >
                  <span>MCP Server</span>
                  <span>→</span>
                </Link>
              </div>
            </nav>
          </main>
        </div>
      </div>
    </div>
  );
} 