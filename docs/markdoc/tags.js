import React, { useState } from 'react';

export const playground = {
  render: 'Playground',
  description: 'Interactive playground for web components',
  attributes: {
    component: {
      type: 'String',
      description: 'The component name (e.g., "button", "card")',
      required: true
    },
    title: {
      type: 'String',
      description: 'Title for the playground section',
      default: 'Interactive Example'
    },
    description: {
      type: 'String',
      description: 'Description of the example'
    },
    code: {
      type: 'String',
      description: 'HTML code to render in the playground',
      required: true
    },
    css: {
      type: 'String',
      description: 'Optional CSS styling for the example'
    },
    height: {
      type: 'String',
      description: 'Height of the playground area',
      default: '200px'
    }
  }
};

export const apiTable = {
  render: 'ApiTable',
  description: 'Component API documentation table',
  attributes: {
    type: {
      type: 'String',
      description: 'Type of API table (properties, events, css, parts)',
      required: true
    },
    data: {
      type: 'Array',
      description: 'Array of API data objects',
      required: true
    }
  }
};

export const codeBlock = {
  render: 'CodeBlock',
  description: 'Enhanced code block with syntax highlighting',
  attributes: {
    language: {
      type: 'String',
      description: 'Programming language for syntax highlighting',
      default: 'html'
    },
    title: {
      type: 'String',
      description: 'Title for the code block'
    },
    showLineNumbers: {
      type: 'Boolean',
      description: 'Show line numbers',
      default: false
    }
  }
};

export const tabs = {
  render: 'Tabs',
  description: 'Tabbed content container',
  attributes: {
    defaultTab: {
      type: 'String',
      description: 'Default active tab',
      default: '0'
    }
  }
};

export const tab = {
  render: 'Tab',
  description: 'Individual tab content',
  attributes: {
    title: {
      type: 'String',
      description: 'Tab title',
      required: true
    },
    icon: {
      type: 'String',
      description: 'Optional icon for the tab'
    }
  }
};

export const callout = {
  render: 'Callout',
  description: 'Information callout box',
  attributes: {
    type: {
      type: 'String',
      description: 'Type of callout (note, warning, tip, danger)',
      default: 'note'
    },
    title: {
      type: 'String',
      description: 'Callout title'
    }
  }
};

// React components for rendering the tags
export const components = {
  Playground: ({ component, title, description, code, css, height }) => {
    const playgroundId = `playground-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <div className="component-example">
        <div className="component-example-title">{title}</div>
        {description && <p className="text-slate-600 mb-4">{description}</p>}

        <div className="border border-slate-200 rounded-lg overflow-hidden">
          <div className="bg-slate-50 p-4 border-b border-slate-200">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">Live Example</span>
              <div className="flex space-x-2">
                <button
                  className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded hover:bg-blue-200 transition-colors"
                  onClick={() => {
                    const iframe = document.getElementById(playgroundId);
                    if (iframe) {
                      iframe.src = iframe.src; // Refresh iframe
                    }
                  }}
                >
                  Refresh
                </button>
                <button
                  className="text-xs px-2 py-1 bg-slate-100 text-slate-700 rounded hover:bg-slate-200 transition-colors"
                  onClick={() => {
                    navigator.clipboard.writeText(code);
                  }}
                >
                  Copy Code
                </button>
              </div>
            </div>
          </div>

          <div className="p-4 bg-white" style={{ minHeight: height }}>
            <iframe
              id={playgroundId}
              className="w-full border-0"
              style={{ height: height }}
              srcDoc={`
                <!DOCTYPE html>
                <html>
                  <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <style>
                      body {
                        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                        margin: 0;
                        padding: 20px;
                        background: white;
                      }
                      ${css || ''}
                    </style>
                  </head>
                  <body>
                    ${code}
                    <script src="https://unpkg.com/sample-design-system/dist/components/sample-${component}.js"></script>
                    <script>
                      // Add event listeners for interactivity
                      document.addEventListener('DOMContentLoaded', function() {
                        const components = document.querySelectorAll('sample-${component}');
                        components.forEach(component => {
                          component.addEventListener('sample-${component}-event', function(e) {
                            console.log('Component event:', e.detail);
                          });
                        });
                      });
                    </script>
                  </body>
                </html>
              `}
            />
          </div>
        </div>

        <details className="mt-4">
          <summary className="text-sm font-medium text-slate-700 cursor-pointer hover:text-blue-600">
            View Source Code
          </summary>
          <div className="mt-2">
            <pre className="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto text-sm">
              <code>{code}</code>
            </pre>
          </div>
        </details>
      </div>
    );
  },

  ApiTable: ({ type, data }) => {
    const headers = {
      properties: ['Property', 'Type', 'Default', 'Description'],
      events: ['Event', 'Detail', 'Description'],
      css: ['Property', 'Default', 'Description'],
      parts: ['Part', 'Description']
    };

    return (
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-slate-200 mb-6">
          <thead>
            <tr className="bg-slate-50">
              {headers[type]?.map((header, index) => (
                <th key={index} className="border border-slate-200 px-4 py-2 text-left font-semibold text-slate-900">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-slate-50">
                {Object.values(item).map((value, cellIndex) => (
                  <td key={cellIndex} className="border border-slate-200 px-4 py-2 text-slate-700">
                    {typeof value === 'string' && value.startsWith('`') && value.endsWith('`') ? (
                      <code className="bg-slate-100 text-slate-800 px-1.5 py-0.5 rounded text-sm font-mono">
                        {value.slice(1, -1)}
                      </code>
                    ) : (
                      value
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },

  CodeBlock: ({ language, title, children }) => {
    return (
      <div className="code-block">
        {title && (
          <div className="code-block-header">
            {title}
          </div>
        )}
        <pre className={`bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto ${title ? 'rounded-t-none' : ''}`}>
          <code className={`language-${language}`}>
            {children}
          </code>
        </pre>
      </div>
    );
  },

  Tabs: ({ defaultTab, children }) => {
    const [activeTab, setActiveTab] = useState(parseInt(defaultTab));

    return (
      <div className="tabs">
        <div className="flex border-b border-slate-200 mb-4">
          {children.map((child, index) => (
            <button
              key={index}
              className={`px-4 py-2 font-medium text-sm border-b-2 transition-colors ${activeTab === index
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-slate-600 hover:text-slate-900'
                }`}
              onClick={() => setActiveTab(index)}
            >
              {child.props.title}
            </button>
          ))}
        </div>
        <div className="tab-content">
          {children[activeTab]}
        </div>
      </div>
    );
  },

  Tab: ({ children }) => {
    return <div>{children}</div>;
  },

  Callout: ({ type, title, children }) => {
    const styles = {
      note: 'bg-blue-50 border-blue-200 text-blue-900',
      warning: 'bg-yellow-50 border-yellow-200 text-yellow-900',
      tip: 'bg-green-50 border-green-200 text-green-900',
      danger: 'bg-red-50 border-red-200 text-red-900'
    };

    const icons = {
      note: 'ℹ️',
      warning: '⚠️',
      tip: '💡',
      danger: '🚨'
    };

    return (
      <div className={`border rounded-lg p-4 my-4 ${styles[type] || styles.note}`}>
        <div className="flex items-start space-x-2">
          <span className="text-lg">{icons[type] || icons.note}</span>
          <div className="flex-1">
            {title && <div className="font-semibold mb-1">{title}</div>}
            <div>{children}</div>
          </div>
        </div>
      </div>
    );
  }
};

// Default export for Markdoc
export default {
  playground,
  apiTable,
  codeBlock,
  tabs,
  tab,
  callout
}; 