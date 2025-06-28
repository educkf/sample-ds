import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

const ComponentsSidebar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  
  const components = [
    { name: 'Overview', href: '/components', icon: '📋' },
    { name: 'Accordion', href: '/components/accordion', icon: '🪗' },
    { name: 'Alert', href: '/components/alert', icon: '⚠️' },
    { name: 'Breadcrumb', href: '/components/breadcrumb', icon: '🧭' },
    { name: 'Button', href: '/components/button', icon: '🔘' },
    { name: 'Card', href: '/components/card', icon: '🃏' },
    { name: 'Modal', href: '/components/modal', icon: '🪟' },
  ];

  return (
    <>
      {/* Mobile menu button */}
      <div className="lg:hidden bg-white border-b border-gray-100 px-6 py-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center text-gray-600 hover:text-gray-900 font-medium"
        >
          <span className="mr-3 text-lg">☰</span>
          Components Menu
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`w-72 bg-white border-r border-gray-100 min-h-screen sticky top-0 overflow-y-auto transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      } lg:block fixed lg:static z-10`}>
        <div className="px-6 py-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Components</h3>
          <nav className="space-y-2">
            {components.map((component) => {
              const isActive = router.asPath === component.href;
              return (
                <Link
                  key={component.href}
                  href={component.href}
                  className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border border-blue-100'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="mr-3 text-base">{component.icon}</span>
                  {component.name}
                </Link>
              );
            })}
          </nav>
        </div>
        
        {/* Quick Links Section */}
        <div className="px-6 py-6 border-t border-gray-100">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-4">
            Quick Links
          </h4>
          <div className="space-y-2">
            <Link 
              href="/how-to-use" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg transition-colors hover:bg-gray-50"
            >
              <span className="mr-3">📖</span>
              How to Use
            </Link>
            <Link 
              href="/" 
              className="flex items-center text-sm text-gray-600 hover:text-gray-900 px-4 py-2 rounded-lg transition-colors hover:bg-gray-50"
            >
              <span className="mr-3">🏠</span>
              Home
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-5 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default ComponentsSidebar; 