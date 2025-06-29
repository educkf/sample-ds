import React from 'react';
import { useRouter } from 'next/router';

// Test component - simple div with styled content
export function PlaygroundComponent(props) {
  const { component, description } = props;
  
  return React.createElement('div', {
    style: {
      margin: '24px 0',
    }
  }, [
    React.createElement('h3', {
      key: 'title',
      style: { 
        margin: '0 0 12px 0',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '20px',
        fontWeight: '600',
        color: '#1f2937'
      }
    }),
    
    description && React.createElement('p', {
      key: 'description',
      style: { 
        margin: '0 0 16px 0', 
        fontSize: '14px',
        color: '#6b7280'
      }
    }, description),
    
    React.createElement('div', {
      key: 'iframe-container',
      style: {
        borderRadius: '8px',
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        border: '1px solid #e5e7eb'
      }
    }, [
      React.createElement('iframe', {
        key: 'playground-iframe',
        src: `/api/playground/${component}`,
        style: {
          width: '100%',
          height: '350px',
          border: 'none',
          display: 'block'
        },
        title: `${component} Interactive Playground`,
        onLoad: () => console.log(`${component} playground loaded`)
      })
    ]),
    
    React.createElement('p', {
      key: 'status',
      style: { 
        margin: '12px 0 0 0',
        fontSize: '13px',
        color: '#059669',
        fontWeight: '500'
      }
    }, `✨ Interactive component - try clicking and interacting!`)
  ]);
}

// API Table component
export function ApiTable({ type, data }) {
  const headers = {
    properties: ['Property', 'Type', 'Default', 'Description'],
    events: ['Event', 'Detail', 'Description'],
    css: ['Property', 'Default', 'Description'],
    parts: ['Part', 'Description']
  };

  return React.createElement('div', {
    className: "my-6 overflow-x-auto"
  }, 
    React.createElement('table', {
      className: "min-w-full divide-y divide-gray-200"
    }, [
      React.createElement('thead', {
        key: 'thead',
        className: "bg-gray-50"
      },
        React.createElement('tr', { key: 'tr' },
          headers[type]?.map((header) =>
            React.createElement('th', {
              key: header,
              className: "px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            }, header)
          )
        )
      ),
      React.createElement('tbody', {
        key: 'tbody',
        className: "bg-white divide-y divide-gray-200"
      },
        data?.map((row, index) =>
          React.createElement('tr', { key: index },
            Object.values(row).map((cell, cellIndex) =>
              React.createElement('td', {
                key: cellIndex,
                className: "px-6 py-4 whitespace-nowrap text-sm text-gray-900"
              }, 
                typeof cell === 'string' && cell.startsWith('`') && cell.endsWith('`') 
                  ? React.createElement('code', {
                      className: "bg-gray-100 px-1 py-0.5 rounded text-xs font-mono"
                    }, cell.slice(1, -1))
                  : cell
              )
            )
          )
        )
      )
    ])
  );
}

// Current URL component  
export function CurrentUrl({ path = '/api/mcp/http' }) {
  const router = useRouter();
  const [currentUrl, setCurrentUrl] = React.useState('');

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const protocol = window.location.protocol;
      const host = window.location.host;
      const fullUrl = `${protocol}//${host}${path}`;
      setCurrentUrl(fullUrl);
    }
  }, [router, path]);

  // Server-side fallback
  if (!currentUrl) {
    return React.createElement('code', {
      className: "bg-gray-100 px-2 py-1 rounded text-sm font-mono"
    }, `{your-domain}${path}`);
  }

  return React.createElement('code', {
    className: "bg-gray-100 px-2 py-1 rounded text-sm font-mono text-blue-600"
  }, currentUrl);
}

// Callout component
export function Callout({ children, type = 'note', title }) {
  const styles = {
    note: 'bg-blue-50 border-blue-200 text-blue-800',
    warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
    tip: 'bg-green-50 border-green-200 text-green-800',
    danger: 'bg-red-50 border-red-200 text-red-800'
  };

  const icons = {
    note: 'ℹ️',
    warning: '⚠️',
    tip: '💡',
    danger: '🚨'
  };

  return React.createElement('div', {
    className: `my-6 p-4 rounded-lg border ${styles[type] || styles.note}`
  },
    React.createElement('div', { className: "flex" }, [
      React.createElement('div', {
        key: 'icon',
        className: "flex-shrink-0"
      },
        React.createElement('span', {
          className: "text-lg"
        }, icons[type] || icons.note)
      ),
      React.createElement('div', {
        key: 'content',
        className: "ml-3"
      }, [
        title && React.createElement('h3', {
          key: 'title',
          className: "text-sm font-medium mb-2"
        }, title),
        React.createElement('div', {
          key: 'children',
          className: "text-sm"
        }, children)
      ])
    ])
  );
}

// Export individual tags for @markdoc/next.js
export const playground = {
  render: PlaygroundComponent,
  description: 'Simple test component',
  attributes: {
    component: {
      type: String,
      description: 'Component name',
      default: 'unknown'
    },
    title: {
      type: String,
      description: 'Title of the playground'
    },
    description: {
      type: String,
      description: 'Description of the playground'
    }
  }
};

export const apiTable = {
  render: ApiTable,
  description: 'Component API documentation table',
  attributes: {
    type: {
      type: String,
      description: 'Type of API table (properties, events, css, parts)',
      required: true
    },
    data: {
      type: Array,
      description: 'Array of API data objects',
      required: true
    }
  }
};

export const callout = {
  render: Callout,
  description: 'Information callout box',
  attributes: {
    type: {
      type: String,
      description: 'Type of callout (note, warning, tip, danger)',
      default: 'note'
    },
    title: {
      type: String,
      description: 'Callout title'
    }
  }
};

export const currentUrl = {
  render: CurrentUrl,
  description: 'Display the current URL dynamically',
  attributes: {
    path: {
      type: String,
      description: 'Path to append to the current URL',
      default: '/api/mcp/http'
    }
  }
}; 