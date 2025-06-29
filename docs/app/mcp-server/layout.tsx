import Link from "next/link";
import { ReactNode } from "react";

interface McpServerLayoutProps {
  children: ReactNode;
}

export default function McpServerLayout({ children }: McpServerLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link 
                href="/" 
                className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Sample Design System
              </Link>
              <span className="text-gray-400 dark:text-gray-500">/</span>
              <span className="text-gray-600 dark:text-gray-300 font-medium">MCP Server</span>
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
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Components
              </Link>
              <Link 
                href="/mcp-server" 
                className="text-blue-600 dark:text-blue-400 font-medium"
              >
                MCP Server
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Main Content */}
        <main>
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
            <div className="px-8 py-8">
              <div className="prose prose-gray dark:prose-invert max-w-none">
                {children}
              </div>
            </div>
          </div>
          
          {/* Footer Navigation */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <div className="flex justify-between items-center">
              <Link 
                href="/components"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                <span>←</span>
                <span>Components</span>
              </Link>
              <Link 
                href="/"
                className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
              >
                <span>Home</span>
                <span>→</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 