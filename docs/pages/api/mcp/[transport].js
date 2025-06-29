// Model Context Protocol (MCP) Server Implementation
// Protocol Revision: 2025-06-18
// Implements: https://modelcontextprotocol.io/specification/2025-06-18

// Design system components data
const COMPONENTS = {
  'accordion': {
    name: 'Accordion',
    description: 'A collapsible content container that allows users to expand and collapse sections',
    usage: `<sample-accordion>
  <sample-accordion-item title="Section Title" open>
    Content goes here
  </sample-accordion-item>
</sample-accordion>`,
    props: {
      'title': 'String - The header text for the accordion item',
      'open': 'Boolean - Whether the item is initially expanded'
    },
    features: ['Keyboard navigation', 'Accessibility support', 'Smooth animations'],
    examples: ['FAQ sections', 'Documentation navigation', 'Settings panels']
  },
  'button': {
    name: 'Button',
    description: 'Interactive button component with multiple variants and states',
    usage: `<sample-button variant="primary">Click me</sample-button>`,
    props: {
      'variant': 'String - "primary" | "secondary" | "outline" - Button style variant',
      'disabled': 'Boolean - Disables the button',
      'type': 'String - "button" | "submit" | "reset" - Button type'
    },
    features: ['Multiple variants', 'Disabled state', 'Focus management'],
    examples: ['Form submissions', 'Call-to-action buttons', 'Navigation actions']
  },
  'card': {
    name: 'Card',
    description: 'Flexible container component for grouping related content',
    usage: `<sample-card>
  <h3>Card Title</h3>
  <p>Card content</p>
</sample-card>`,
    props: {
      'elevated': 'Boolean - Adds shadow elevation to the card',
      'clickable': 'Boolean - Makes the entire card clickable'
    },
    features: ['Flexible content slots', 'Optional elevation', 'Responsive design'],
    examples: ['Product listings', 'User profiles', 'Content previews']
  },
  'alert': {
    name: 'Alert',
    description: 'Notification component for displaying important messages',
    usage: `<sample-alert type="info">This is an alert message</sample-alert>`,
    props: {
      'type': 'String - "info" | "success" | "warning" | "error" - Alert type and styling',
      'dismissible': 'Boolean - Shows close button to dismiss alert'
    },
    features: ['Multiple alert types', 'Dismissible option', 'Icon integration'],
    examples: ['Error messages', 'Success notifications', 'Warning alerts']
  },
  'modal': {
    name: 'Modal',
    description: 'Overlay component for displaying content above the main interface',
    usage: `<sample-modal id="my-modal">
  <div slot="header">Modal Title</div>
  <p>Modal content</p>
  <div slot="footer">Footer content</div>
</sample-modal>`,
    props: {
      'open': 'Boolean - Controls modal visibility',
      'closable': 'Boolean - Allows closing with ESC key or backdrop click'
    },
    features: ['Slot-based content', 'Keyboard navigation', 'Focus management', 'Backdrop interaction'],
    examples: ['Confirmation dialogs', 'Form overlays', 'Image galleries']
  },
  'breadcrumb': {
    name: 'Breadcrumb',
    description: 'Navigation component showing the current page location in a hierarchy',
    usage: `<sample-breadcrumb>
  <sample-breadcrumb-item href="/home">Home</sample-breadcrumb-item>
  <sample-breadcrumb-item href="/products">Products</sample-breadcrumb-item>
  <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
</sample-breadcrumb>`,
    props: {
      'separator': 'String - Custom separator between breadcrumb items',
      'href': 'String - Link URL for breadcrumb item',
      'icon': 'String - Icon to display with the breadcrumb item'
    },
    features: ['Custom separators', 'Icon support', 'Keyboard navigation'],
    examples: ['E-commerce navigation', 'Documentation hierarchy', 'Website navigation']
  }
};

const DESIGN_SYSTEM_INFO = {
  name: 'Sample Design System',
  package: 'sample-design-system-educkf',
  version: '1.1.0',
  architecture: 'Web Components using Custom Elements API',
  installation: 'npm install sample-design-system-educkf',
  cdn: 'https://unpkg.com/sample-design-system-educkf@1.1.0/dist/components/',
  framework_support: ['Vanilla JS', 'React', 'Vue.js', 'Angular', 'Svelte'],
  browser_support: ['Chrome 54+', 'Firefox 63+', 'Safari 10.1+', 'Edge 79+']
};

// MCP Protocol Constants
const MCP_VERSION = "2025-06-18";
const SERVER_INFO = {
  name: "sample-design-system-mcp",
  version: "1.0.0"
};

// JSON-RPC 2.0 Error Codes (as per MCP specification)
const ERROR_CODES = {
  ParseError: -32700,
  InvalidRequest: -32600,
  MethodNotFound: -32601,
  InvalidParams: -32602,
  InternalError: -32603
};

// Server state management
let isInitialized = false;
let currentLogLevel = 'info';
const serverCapabilities = {
  tools: {
    listChanged: false
  },
  resources: {
    subscribe: false,
    listChanged: false
  },
  prompts: {
    listChanged: false
  },
  completions: {},
  logging: {}
};

// MCP Server Implementation
export default function handler(req, res) {
  // Only allow POST requests for MCP
  if (req.method !== 'POST') {
    return res.status(405).json({
      jsonrpc: "2.0",
      error: {
        code: ERROR_CODES.InvalidRequest,
        message: "Method not allowed. MCP requires POST requests."
      }
    });
  }

  let message;
  try {
    message = req.body;
    
    // Validate JSON-RPC 2.0 format
    if (!message || message.jsonrpc !== "2.0") {
      return sendError(res, null, ERROR_CODES.InvalidRequest, "Invalid JSON-RPC 2.0 request");
    }

    // Handle different message types
    if (message.id !== undefined) {
      // Request - expects response
      return handleRequest(res, message);
    } else {
      // Notification - no response expected
      return handleNotification(res, message);
    }
    
  } catch (error) {
    console.error('MCP Server Parse Error:', error);
    return sendError(res, null, ERROR_CODES.ParseError, "Invalid JSON");
  }
}

// Handle JSON-RPC requests (expect response)
function handleRequest(res, message) {
  const { id, method, params = {} } = message;

  try {
    switch (method) {
      case 'initialize':
        return handleInitialize(res, id, params);
      
      case 'tools/list':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handleToolsList(res, id);
      
      case 'tools/call':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handleToolsCall(res, id, params);
      
      case 'resources/list':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handleResourcesList(res, id, params);
      
      case 'resources/read':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handleResourcesRead(res, id, params);
      
      case 'prompts/list':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handlePromptsList(res, id, params);
      
      case 'prompts/get':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handlePromptsGet(res, id, params);
      
      case 'completion/complete':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handleCompletionComplete(res, id, params);
      
      case 'logging/setLevel':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handleLoggingSetLevel(res, id, params);
      
      case 'ping':
        return sendResult(res, id, {});
      
      default:
        return sendError(res, id, ERROR_CODES.MethodNotFound, `Unknown method: ${method}`);
    }
  } catch (error) {
    console.error('MCP Request Error:', error);
    return sendError(res, id, ERROR_CODES.InternalError, "Internal server error");
  }
}

// Handle JSON-RPC notifications (no response)
function handleNotification(res, message) {
  const { method } = message;

  try {
    switch (method) {
      case 'initialized':
        // Client acknowledges initialization
        console.log('MCP Client initialized');
        return res.status(200).end();
      
      case 'notifications/tools/list_changed':
        // Tool list changed notification
        return res.status(200).end();
      
      default:
        console.warn(`Unknown notification method: ${method}`);
        return res.status(200).end();
    }
  } catch (error) {
    console.error('MCP Notification Error:', error);
    return res.status(200).end();
  }
}

// Initialize the MCP connection
function handleInitialize(res, id, params) {
  const { protocolVersion } = params;

  // Validate protocol version
  if (protocolVersion !== MCP_VERSION) {
    return sendError(res, id, ERROR_CODES.InvalidParams, 
      `Unsupported protocol version: ${protocolVersion}. Expected: ${MCP_VERSION}`);
  }

  isInitialized = true;

  return sendResult(res, id, {
    protocolVersion: MCP_VERSION,
    capabilities: serverCapabilities,
    serverInfo: SERVER_INFO,
    instructions: "This MCP server provides comprehensive information about the Sample Design System components, implementation guides, and architecture details."
  });
}

// List available tools
function handleToolsList(res, id) {
  const tools = [
    {
      name: "list_components",
      title: "List Design System Components",
      description: "List all available design system components with basic information",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      },
      outputSchema: {
        type: "object",
        properties: {
          design_system: { type: "string" },
          total_components: { type: "number" },
          components: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                displayName: { type: "string" },
                description: { type: "string" },
                features: { type: "array", items: { type: "string" } },
                examples: { type: "array", items: { type: "string" } }
              }
            }
          }
        }
      }
    },
    {
      name: "get_component_info",
      title: "Get Component Information",
      description: "Get detailed information about a specific component including usage examples, props, and features",
      inputSchema: {
        type: "object",
        properties: {
          component: {
            type: "string",
            description: "Component name",
            enum: Object.keys(COMPONENTS),
            pattern: "^[a-z][a-z0-9-]*$"
          }
        },
        required: ["component"],
        additionalProperties: false
      },
      outputSchema: {
        type: "object",
        properties: {
          component: { type: "string" },
          name: { type: "string" },
          description: { type: "string" },
          api: { type: "object" },
          examples: { type: "array" },
          installation: { type: "string" },
          cdn_url: { type: "string" },
          npm_package: { type: "string" },
          version: { type: "string" }
        }
      }
    },
    {
      name: "get_implementation_guide",
      title: "Get Framework Implementation Guide",
      description: "Get framework-specific implementation guides for integrating the design system",
      inputSchema: {
        type: "object",
        properties: {
          framework: {
            type: "string",
            description: "Target framework for implementation",
            enum: ["vanilla", "react", "vue", "angular", "svelte"],
            default: "vanilla"
          },
          includeAdvanced: {
            type: "boolean",
            description: "Include advanced integration patterns",
            default: false
          }
        },
        required: ["framework"],
        additionalProperties: false
      },
      outputSchema: {
        type: "object",
        properties: {
          framework: { type: "string" },
          guide: { type: "string" },
          examples: { type: "array" },
          dependencies: { type: "array" },
          setup_steps: { type: "array" }
        }
      }
    },
    {
      name: "get_system_architecture",
      title: "Get System Architecture",
      description: "Get information about the design system architecture and technical details",
      inputSchema: {
        type: "object",
        properties: {
          includeSpecs: {
            type: "boolean",
            description: "Include detailed technical specifications",
            default: true
          }
        },
        additionalProperties: false
      },
      outputSchema: {
        type: "object",
        properties: {
          architecture: { type: "object" },
          technical_specs: { type: "object" },
          browser_support: { type: "array" },
          build_system: { type: "object" },
          testing_strategy: { type: "object" }
        }
      }
    },
    {
      name: "search_components",
      title: "Search Components",
      description: "Search components by feature, use case, or keyword with advanced filtering",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search term (e.g., 'navigation', 'form', 'overlay')",
            minLength: 1,
            maxLength: 100
          },
          category: {
            type: "string",
            description: "Filter by component category",
            enum: ["form", "navigation", "feedback", "layout", "data-display", "overlay"]
          },
          complexity: {
            type: "string",
            description: "Filter by complexity level",
            enum: ["simple", "moderate", "complex"]
          },
          limit: {
            type: "integer",
            description: "Maximum number of results to return",
            minimum: 1,
            maximum: 50,
            default: 10
          }
        },
        required: ["query"],
        additionalProperties: false
      },
      outputSchema: {
        type: "object",
        properties: {
          query: { type: "string" },
          total_results: { type: "integer" },
          results: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                displayName: { type: "string" },
                description: { type: "string" },
                category: { type: "string" },
                complexity: { type: "string" },
                relevance_score: { type: "number" }
              }
            }
          }
        }
      }
    },
    {
      name: "validate_component_usage",
      title: "Validate Component Usage",
      description: "Validate component implementation and provide improvement suggestions",
      inputSchema: {
        type: "object",
        properties: {
          code: {
            type: "string",
            description: "Component implementation code to validate",
            minLength: 1,
            maxLength: 10000
          },
          component: {
            type: "string",
            description: "Specific component to validate (optional for auto-detection)",
            enum: Object.keys(COMPONENTS)
          },
          framework: {
            type: "string",
            description: "Framework context for validation",
            enum: ["vanilla", "react", "vue", "angular", "svelte"],
            default: "vanilla"
          },
          strict: {
            type: "boolean",
            description: "Enable strict validation mode",
            default: false
          }
        },
        required: ["code"],
        additionalProperties: false
      },
      outputSchema: {
        type: "object",
        properties: {
          is_valid: { type: "boolean" },
          component_detected: { type: "string" },
          errors: { type: "array", items: { type: "string" } },
          warnings: { type: "array", items: { type: "string" } },
          suggestions: { type: "array", items: { type: "string" } },
          accessibility_issues: { type: "array", items: { type: "string" } },
          performance_tips: { type: "array", items: { type: "string" } },
          score: { type: "number", minimum: 0, maximum: 100 }
        }
      }
    }
  ];

  return sendResult(res, id, { tools });
}

// Execute tool calls
function handleToolsCall(res, id, params) {
  const { name, arguments: args = {} } = params;

  if (!name) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Tool name is required");
  }

  try {
    switch (name) {
      case "list_components":
        return executeListComponents(res, id);
      
      case "get_component_info":
        return executeGetComponentInfo(res, id, args);
      
      case "get_implementation_guide":
        return executeGetImplementationGuide(res, id, args);
      
      case "get_system_architecture":
        return executeGetSystemArchitecture(res, id);
      
      case "search_components":
        return executeSearchComponents(res, id, args);
      
      case "validate_component_usage":
        return executeValidateComponentUsage(res, id, args);
      
      default:
        return sendError(res, id, ERROR_CODES.InvalidParams, `Unknown tool: ${name}`);
    }
  } catch (error) {
    console.error(`Tool execution error for ${name}:`, error);
    return sendError(res, id, ERROR_CODES.InternalError, `Tool execution failed: ${error.message}`);
  }
}

// Tool implementations
function executeListComponents(res, id) {
  const content = JSON.stringify({
    design_system: DESIGN_SYSTEM_INFO.name,
    total_components: Object.keys(COMPONENTS).length,
    components: Object.keys(COMPONENTS).map(key => ({
      name: key,
      displayName: COMPONENTS[key].name,
      description: COMPONENTS[key].description,
      features: COMPONENTS[key].features,
      examples: COMPONENTS[key].examples
    }))
  }, null, 2);

  return sendResult(res, id, {
    content: [{ type: "text", text: content }]
  });
}

function executeGetComponentInfo(res, id, args) {
  const { component } = args;
  
  if (!component) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Component parameter is required");
  }

  const componentData = COMPONENTS[component];
  if (!componentData) {
    return sendError(res, id, ERROR_CODES.InvalidParams, `Component '${component}' not found. Available components: ${Object.keys(COMPONENTS).join(', ')}`);
  }

  const content = JSON.stringify({
    component: component,
    ...componentData,
    installation: DESIGN_SYSTEM_INFO.installation,
    cdn_url: `${DESIGN_SYSTEM_INFO.cdn}sample-${component}.js`,
    npm_package: DESIGN_SYSTEM_INFO.package,
    version: DESIGN_SYSTEM_INFO.version
  }, null, 2);

  return sendResult(res, id, {
    content: [{ type: "text", text: content }]
  });
}

function executeGetImplementationGuide(res, id, args) {
  const { framework } = args;
  
  if (!framework) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Framework parameter is required");
  }

  const guides = {
    vanilla: `# Vanilla JavaScript Implementation

## 1. Installation
\`\`\`bash
npm install ${DESIGN_SYSTEM_INFO.package}
\`\`\`

## 2. Import Components
\`\`\`javascript
import '${DESIGN_SYSTEM_INFO.package}/dist/components/sample-button.js';
\`\`\`

## 3. Use in HTML
\`\`\`html
<sample-button variant="primary">Click me</sample-button>
\`\`\`

## 4. Or via CDN
\`\`\`html
<script type="module" src="${DESIGN_SYSTEM_INFO.cdn}sample-button.js"></script>
\`\`\``,

    react: `# React Implementation

## 1. Installation
\`\`\`bash
npm install ${DESIGN_SYSTEM_INFO.package}
\`\`\`

## 2. Component Registration
\`\`\`jsx
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    import('${DESIGN_SYSTEM_INFO.package}/dist/components/sample-button.js');
  }, []);

  return (
    <sample-button variant="primary">
      Click me
    </sample-button>
  );
}
\`\`\`

## 3. TypeScript Support
\`\`\`tsx
declare namespace JSX {
  interface IntrinsicElements {
    'sample-button': any;
    'sample-modal': any;
    // ... other components
  }
}
\`\`\``,

    vue: `# Vue.js Implementation

## 1. Installation
\`\`\`bash
npm install ${DESIGN_SYSTEM_INFO.package}
\`\`\`

## 2. Component Setup
\`\`\`vue
<template>
  <sample-button variant="primary" @click="handleClick">
    Click me
  </sample-button>
</template>

<script>
import '${DESIGN_SYSTEM_INFO.package}/dist/components/sample-button.js';

export default {
  name: 'MyComponent',
  methods: {
    handleClick() {
      console.log('Button clicked');
    }
  }
}
</script>
\`\`\`

## 3. Configure Custom Elements
\`\`\`javascript
// In main.js
app.config.compilerOptions.isCustomElement = (tag) => tag.startsWith('sample-')
\`\`\``,

    angular: `# Angular Implementation

## 1. Installation
\`\`\`bash
npm install ${DESIGN_SYSTEM_INFO.package}
\`\`\`

## 2. Import in main.ts
\`\`\`typescript
import '${DESIGN_SYSTEM_INFO.package}/dist/components/sample-button.js';
\`\`\`

## 3. Configure Custom Elements Schema
\`\`\`typescript
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
\`\`\`

## 4. Use in Templates
\`\`\`html
<sample-button variant="primary" (click)="handleClick()">
  Click me
</sample-button>
\`\`\``,

    svelte: `# Svelte Implementation

## 1. Installation
\`\`\`bash
npm install ${DESIGN_SYSTEM_INFO.package}
\`\`\`

## 2. Component Usage
\`\`\`svelte
<script>
  import '${DESIGN_SYSTEM_INFO.package}/dist/components/sample-button.js';
  
  function handleClick() {
    console.log('Button clicked');
  }
</script>

<sample-button variant="primary" on:click={handleClick}>
  Click me
</sample-button>
\`\`\``
  };

  const guide = guides[framework];
  if (!guide) {
    return sendError(res, id, ERROR_CODES.InvalidParams, `Framework '${framework}' not supported. Available frameworks: ${Object.keys(guides).join(', ')}`);
  }

  return sendResult(res, id, {
    content: [{ type: "text", text: guide }]
  });
}

function executeGetSystemArchitecture(res, id) {
  const content = JSON.stringify({
    ...DESIGN_SYSTEM_INFO,
    protocol_version: MCP_VERSION,
    technical_details: {
      base_technology: 'Web Components (Custom Elements API)',
      styling: 'CSS Custom Properties for theming',
      bundling: 'Individual component modules',
      tree_shaking: 'Supported - import only needed components',
      ssr_support: 'Compatible with SSR frameworks',
      accessibility: 'ARIA attributes and keyboard navigation built-in',
      browser_polyfills: 'Not required for modern browsers',
      performance: 'Lazy loading and code splitting supported'
    },
    file_structure: {
      components: 'dist/components/sample-{component}.js',
      types: 'dist/types/{component}.d.ts (if available)',
      styles: 'Embedded in component files',
      documentation: 'Available via MCP server'
    },
    development: {
      local_development: 'npm run dev for development server',
      testing: 'Interactive playgrounds available',
      customization: 'CSS custom properties for theming'
    }
  }, null, 2);

  return sendResult(res, id, {
    content: [{ type: "text", text: content }]
  });
}

function executeSearchComponents(res, id, args) {
  const { query, category, complexity, limit = 10 } = args;
  
  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Query parameter is required and must be a non-empty string");
  }

  const searchQuery = query.toLowerCase().trim();
  
  // Component categories and complexity mapping
  const componentCategories = {
    'button': 'form',
    'card': 'data-display', 
    'modal': 'overlay',
    'alert': 'feedback',
    'breadcrumb': 'navigation',
    'accordion': 'data-display'
  };
  
  const componentComplexity = {
    'button': 'simple',
    'card': 'simple',
    'alert': 'simple', 
    'breadcrumb': 'moderate',
    'accordion': 'moderate',
    'modal': 'complex'
  };

  const matchingComponents = Object.entries(COMPONENTS).filter(([componentKey, comp]) => {
    // Apply category filter
    if (category && componentCategories[componentKey] !== category) {
      return false;
    }
    
    // Apply complexity filter
    if (complexity && componentComplexity[componentKey] !== complexity) {
      return false;
    }
    
    // Check if query matches
    return comp.name.toLowerCase().includes(searchQuery) ||
           comp.description.toLowerCase().includes(searchQuery) ||
           comp.features.some(f => f.toLowerCase().includes(searchQuery)) ||
           comp.examples.some(e => e.toLowerCase().includes(searchQuery)) ||
           componentKey.includes(searchQuery);
  });

  // Calculate relevance scores and sort
  const scoredResults = matchingComponents.map(([componentKey, comp]) => {
    let score = 0;
    if (componentKey.includes(searchQuery)) score += 10;
    if (comp.name.toLowerCase().includes(searchQuery)) score += 8;
    if (comp.description.toLowerCase().includes(searchQuery)) score += 5;
    comp.features.forEach(f => {
      if (f.toLowerCase().includes(searchQuery)) score += 3;
    });
    
    return {
      name: componentKey,
      displayName: comp.name,
      description: comp.description,
      category: componentCategories[componentKey] || 'other',
      complexity: componentComplexity[componentKey] || 'moderate',
      relevance_score: score / 10 // Normalize to 0-1+ scale
    };
  }).sort((a, b) => b.relevance_score - a.relevance_score);

  // Apply limit
  const limitedResults = scoredResults.slice(0, Math.min(limit, 50));

  const content = JSON.stringify({
    query: query,
    total_results: matchingComponents.length,
    results: limitedResults
  }, null, 2);

  return sendResult(res, id, {
    content: [{ type: "text", text: content }]
  });
}

function executeValidateComponentUsage(res, id, args) {
  const { code, component, framework = 'vanilla', strict = false } = args;
  
  if (!code || typeof code !== 'string' || code.trim().length === 0) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Code parameter is required and must be a non-empty string");
  }

  const validation = {
    is_valid: true,
    component_detected: component || detectComponentFromCode(code),
    errors: [],
    warnings: [],
    suggestions: [],
    accessibility_issues: [],
    performance_tips: [],
    score: 100
  };

  try {
    // Basic HTML/framework validation
    if (framework === 'vanilla') {
      validateVanillaUsage(code, validation, strict);
    } else {
      validateFrameworkUsage(code, framework, validation, strict);
    }
    
    // Component-specific validation
    if (validation.component_detected) {
      validateComponentSpecific(code, validation.component_detected, validation, strict);
    }
    
    // Accessibility validation
    validateAccessibility(code, validation, strict);
    
    // Performance validation
    validatePerformance(code, validation, strict);
    
    // Calculate final score
    validation.score = calculateValidationScore(validation);
    validation.is_valid = validation.errors.length === 0;

    const content = JSON.stringify(validation, null, 2);

    return sendResult(res, id, {
      content: [{ type: "text", text: content }]
    });
    
  } catch (error) {
    console.error('Validation error:', error);
    return sendError(res, id, ERROR_CODES.InternalError, `Validation failed: ${error.message}`);
  }
}

// Helper functions for validation
function detectComponentFromCode(code) {
  const componentMatches = Object.keys(COMPONENTS).filter(comp => 
    code.includes(`sample-${comp}`) || code.includes(`<${comp}`)
  );
  return componentMatches[0] || null;
}

function validateVanillaUsage(code, validation, strict) {
  // Check for proper custom element syntax
  if (!/sample-\w+/.test(code)) {
    validation.errors.push("No design system components detected");
  }
  
  // Check for script tag imports
  if (!code.includes('import') && !code.includes('<script')) {
    validation.warnings.push("Consider importing component scripts");
  }
  
  // Check for proper attribute usage
  if (strict && code.includes('class=') && !code.includes('variant=')) {
    validation.suggestions.push("Use 'variant' attribute instead of 'class' for component styling");
  }
}

function validateFrameworkUsage(code, framework, validation, strict) {
  switch (framework) {
    case 'react':
      if (!code.includes('import') && !code.includes('require')) {
        validation.warnings.push("Component import statement recommended");
      }
      if (code.includes('class=') && !code.includes('className=')) {
        validation.errors.push("Use 'className' instead of 'class' in React");
      }
      if (strict && !code.includes('useEffect') && code.includes('addEventListener')) {
        validation.suggestions.push("Consider using useEffect hook for event listeners in React");
      }
      break;
      
    case 'vue':
      if (code.includes('v-') && strict) {
        validation.suggestions.push("Use kebab-case for component names in Vue templates");
      }
      if (strict && !code.includes('ref=') && code.includes('document.querySelector')) {
        validation.suggestions.push("Use Vue refs instead of direct DOM queries");
      }
      break;
      
    case 'angular':
      if (!code.includes('selector:') && strict) {
        validation.warnings.push("Consider using component selector pattern");
      }
      if (strict && !code.includes('@ViewChild') && code.includes('document.querySelector')) {
        validation.suggestions.push("Use ViewChild instead of direct DOM queries in Angular");
      }
      break;
      
    case 'svelte':
      if (strict && !code.includes('bind:') && code.includes('addEventListener')) {
        validation.suggestions.push("Consider using Svelte's event binding syntax");
      }
      break;
  }
}

function validateComponentSpecific(code, componentName, validation, strict) {
  const component = COMPONENTS[componentName];
  if (!component) return;
  
  // Check for deprecated patterns
  if (componentName === 'button' && code.includes('onclick=')) {
    validation.suggestions.push("Use addEventListener for better event handling");
  }
  
  if (componentName === 'modal' && !code.includes('aria-')) {
    validation.accessibility_issues.push("Modal should include ARIA attributes for accessibility");
  }
  
  // Check for missing required patterns
  if (componentName === 'button' && !code.match(/>[\w\s]+</)) {
    validation.warnings.push("Button should have visible text content");
  }
  
  // Strict validation checks
  if (strict) {
    if (componentName === 'card' && !code.includes('role=')) {
      validation.accessibility_issues.push("Card components should have appropriate ARIA roles");
    }
    
    if (componentName === 'accordion' && !code.includes('aria-expanded')) {
      validation.accessibility_issues.push("Accordion should include aria-expanded attribute");
    }
    
    if (!code.includes('variant=') && !code.includes('type=')) {
      validation.suggestions.push("Consider using variant or type attributes for component styling");
    }
  }
}

function validateAccessibility(code, validation, strict) {
  // Check for missing alt text on images
  if (code.includes('<img') && !code.includes('alt=')) {
    validation.accessibility_issues.push("Images should have alt text for accessibility");
  }
  
  // Check for button accessibility
  if (code.includes('sample-button') && !code.includes('aria-label') && !code.match(/>[\w\s]+</)) {
    validation.accessibility_issues.push("Buttons should have accessible text or aria-label");
  }
  
  // Check for semantic HTML
  if (strict && code.includes('<div') && code.includes('onclick')) {
    validation.accessibility_issues.push("Use semantic elements (button, a) instead of div for interactive elements");
  }
  
  // Check for keyboard navigation
  if (code.includes('tabindex') && !code.includes('tabindex="0"') && !code.includes('tabindex="-1"')) {
    validation.accessibility_issues.push("Use tabindex='0' or '-1' for proper keyboard navigation");
  }
}

function validatePerformance(code, validation, strict) {
  // Check for inefficient imports
  if (code.includes('import *')) {
    validation.performance_tips.push("Use specific imports instead of wildcard imports");
  }
  
  // Check for inline styles
  if (code.includes('style=') && strict) {
    validation.performance_tips.push("Consider using CSS classes instead of inline styles");
  }
  
  // Check for redundant components
  const componentMatches = code.match(/sample-\w+/g);
  if (componentMatches && componentMatches.length > 10) {
    validation.performance_tips.push("Consider lazy loading for pages with many components");
  }
  
  // Check for missing async/defer on scripts
  if (code.includes('<script') && !code.includes('async') && !code.includes('defer') && !code.includes('type="module"')) {
    validation.performance_tips.push("Consider using async/defer or type='module' for better script loading");
  }
}

function calculateValidationScore(validation) {
  let score = 100;
  score -= validation.errors.length * 20;
  score -= validation.warnings.length * 10;
  score -= validation.accessibility_issues.length * 15;
  score -= validation.performance_tips.length * 5;
  return Math.max(0, score);
}

// Resources handlers
function handleResourcesList(res, id, params) {
  const { cursor } = params;
  
  // Define available resources (component documentation, guides, etc.)
  const resources = [
    {
      uri: "design-system://components/all",
      name: "All Components",
      title: "Complete component documentation",
      description: "Comprehensive documentation for all design system components",
      mimeType: "application/json"
    },
    {
      uri: "design-system://architecture",
      name: "System Architecture",
      title: "Design System Architecture",
      description: "Technical architecture and implementation details",
      mimeType: "application/json"
    },
    {
      uri: "design-system://browser-support",
      name: "Browser Support",
      title: "Browser Compatibility Matrix",
      description: "Supported browsers and feature compatibility",
      mimeType: "application/json"
    }
  ];

  // Simple pagination implementation
  const pageSize = 10;
  const startIndex = cursor ? parseInt(cursor) : 0;
  const endIndex = startIndex + pageSize;
  const hasMore = endIndex < resources.length;
  
  return sendResult(res, id, {
    resources: resources.slice(startIndex, endIndex),
    nextCursor: hasMore ? endIndex.toString() : null
  });
}

function handleResourcesRead(res, id, params) {
  const { uri } = params;
  
  if (!uri || typeof uri !== 'string') {
    return sendError(res, id, ERROR_CODES.InvalidParams, "URI parameter is required");
  }

  try {
    let content;
    
    switch (uri) {
      case "design-system://components/all":
        content = {
          uri,
          name: "All Components",
          title: "Complete component documentation",
          mimeType: "application/json",
          text: JSON.stringify({
            designSystem: DESIGN_SYSTEM_INFO,
            components: COMPONENTS,
            totalComponents: Object.keys(COMPONENTS).length
          }, null, 2)
        };
        break;
        
      case "design-system://architecture":
        content = {
          uri,
          name: "System Architecture",
          title: "Design System Architecture",
          mimeType: "application/json",
          text: JSON.stringify({
            ...DESIGN_SYSTEM_INFO,
            technicalSpecs: {
              baseFramework: "Web Components (Custom Elements API)",
              bundleFormat: "ESM and UMD",
              styling: "CSS Custom Properties",
              accessibility: "WCAG 2.1 AA compliant",
              testing: "Jest and Playwright integration tests"
            }
          }, null, 2)
        };
        break;
        
      case "design-system://browser-support":
        content = {
          uri,
          name: "Browser Support",
          title: "Browser Compatibility Matrix", 
          mimeType: "application/json",
          text: JSON.stringify({
            supportMatrix: DESIGN_SYSTEM_INFO.browser_support,
            features: {
              "Custom Elements": "Full support in all listed browsers",
              "CSS Custom Properties": "Full support with fallbacks",
              "ES2020 Features": "Transpiled for older browsers"
            },
            polyfills: "Not required for supported browsers"
          }, null, 2)
        };
        break;
        
      default:
        return sendError(res, id, -32002, `Resource not found: ${uri}`);
    }

    return sendResult(res, id, {
      contents: [content]
    });
    
  } catch (error) {
    console.error('Resource read error:', error);
    return sendError(res, id, ERROR_CODES.InternalError, `Failed to read resource: ${error.message}`);
  }
}

// Prompts handlers
function handlePromptsList(res, id, params) {
  const { cursor } = params;
  
  const prompts = [
    {
      name: "component_integration",
      title: "Component Integration Guide",
      description: "Get step-by-step integration instructions for a specific component",
      arguments: [
        {
          name: "component",
          description: "The component name to get integration help for",
          required: true
        },
        {
          name: "framework",
          description: "Target framework (react, vue, angular, etc.)",
          required: false
        }
      ]
    },
    {
      name: "troubleshoot_component",
      title: "Component Troubleshooting",
      description: "Get help troubleshooting common component issues",
      arguments: [
        {
          name: "component",
          description: "The component having issues",
          required: true
        },
        {
          name: "issue",
          description: "Description of the problem",
          required: true
        }
      ]
    },
    {
      name: "design_review",
      title: "Design System Review",
      description: "Review code for design system best practices",
      arguments: [
        {
          name: "code",
          description: "Code to review for design system compliance",
          required: true
        }
      ]
    }
  ];

  // Simple pagination
  const pageSize = 10;
  const startIndex = cursor ? parseInt(cursor) : 0;
  const endIndex = startIndex + pageSize;
  const hasMore = endIndex < prompts.length;
  
  return sendResult(res, id, {
    prompts: prompts.slice(startIndex, endIndex),
    nextCursor: hasMore ? endIndex.toString() : null
  });
}

function handlePromptsGet(res, id, params) {
  const { name, arguments: args = {} } = params;
  
  if (!name) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Prompt name is required");
  }

  try {
    let promptContent;
    
    switch (name) {
      case "component_integration":
        const component = args.component || "button";
        const framework = args.framework || "vanilla";
        promptContent = {
          description: `Integration guide for ${component} component in ${framework}`,
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `Please provide step-by-step integration instructions for the ${component} component in ${framework}. Include:\n\n1. Installation steps\n2. Import/setup code\n3. Basic usage example\n4. Common configuration options\n5. Best practices and gotchas\n\nComponent: ${component}\nFramework: ${framework}\n\nUse the design system documentation as reference.`
              }
            }
          ]
        };
        break;
        
      case "troubleshoot_component":
        const troubleComponent = args.component || "unknown";
        const issue = args.issue || "general issues";
        promptContent = {
          description: `Troubleshooting guide for ${troubleComponent} component`,
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `Help troubleshoot this ${troubleComponent} component issue:\n\nIssue: ${issue}\n\nPlease provide:\n1. Likely causes of this issue\n2. Step-by-step debugging approach\n3. Common solutions\n4. Prevention tips for the future\n\nUse the design system documentation to ensure solutions are compatible.`
              }
            }
          ]
        };
        break;
        
      case "design_review":
        const code = args.code || "";
        promptContent = {
          description: "Design system code review",
          messages: [
            {
              role: "user", 
              content: {
                type: "text",
                text: `Please review this code for design system best practices:\n\n\`\`\`\n${code}\n\`\`\`\n\nProvide feedback on:\n1. Proper component usage\n2. Accessibility considerations\n3. Performance implications\n4. Styling approach\n5. Integration patterns\n\nRefer to the design system documentation for guidelines.`
              }
            }
          ]
        };
        break;
        
      default:
        return sendError(res, id, ERROR_CODES.InvalidParams, `Unknown prompt: ${name}`);
    }

    return sendResult(res, id, promptContent);
    
  } catch (error) {
    console.error('Prompt get error:', error);
    return sendError(res, id, ERROR_CODES.InternalError, `Failed to get prompt: ${error.message}`);
  }
}

// Completion handler
function handleCompletionComplete(res, id, params) {
  const { ref, argument } = params;
  
  if (!ref || !argument) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Reference and argument are required");
  }

  try {
    let completionValues = [];
    
    if (ref.type === "ref/prompt") {
      // Provide completions based on prompt and argument
      if (argument.name === "component") {
        const partial = argument.value?.toLowerCase() || "";
        completionValues = Object.keys(COMPONENTS)
          .filter(comp => comp.startsWith(partial))
          .slice(0, 10);
      } else if (argument.name === "framework") {
        const partial = argument.value?.toLowerCase() || "";
        const frameworks = ["vanilla", "react", "vue", "angular", "svelte"];
        completionValues = frameworks
          .filter(fw => fw.startsWith(partial))
          .slice(0, 10);
      }
    } else if (ref.type === "ref/resource") {
      // Provide URI completions
      const partial = argument.value?.toLowerCase() || "";
      const uris = [
        "design-system://components/all",
        "design-system://architecture", 
        "design-system://browser-support"
      ];
      completionValues = uris
        .filter(uri => uri.includes(partial))
        .slice(0, 10);
    }

    return sendResult(res, id, {
      completion: {
        values: completionValues,
        total: completionValues.length,
        hasMore: false
      }
    });
    
  } catch (error) {
    console.error('Completion error:', error);
    return sendError(res, id, ERROR_CODES.InternalError, `Completion failed: ${error.message}`);
  }
}

// Logging handler
function handleLoggingSetLevel(res, id, params) {
  const { level } = params;
  
  const validLevels = ['debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency'];
  
  if (!level || !validLevels.includes(level)) {
    return sendError(res, id, ERROR_CODES.InvalidParams, `Invalid log level. Must be one of: ${validLevels.join(', ')}`);
  }

  currentLogLevel = level;
  
  // Send a log message about the level change
  sendLogMessage('info', 'MCP-Server', `Log level changed to: ${level}`);
  
  return sendResult(res, id, {});
}

// Logging utility function
function sendLogMessage(level, logger, message, data = null) {
  const logLevels = ['debug', 'info', 'notice', 'warning', 'error', 'critical', 'alert', 'emergency'];
  const currentLevelIndex = logLevels.indexOf(currentLogLevel);
  const messageLevelIndex = logLevels.indexOf(level);
  
  // Only send if message level is at or above current log level
  if (messageLevelIndex >= currentLevelIndex) {
    // In a real implementation, this would send a notification to the client
    // For now, we'll just log to console
    console.log(`[${level.toUpperCase()}] ${logger}: ${message}`, data || '');
  }
}

// Helper functions for JSON-RPC responses
function sendResult(res, id, result) {
  return res.status(200).json({
    jsonrpc: "2.0",
    id: id,
    result: result
  });
}

function sendError(res, id, code, message, data = null) {
  const error = { code, message };
  if (data !== null) {
    error.data = data;
  }
  
  return res.status(200).json({
    jsonrpc: "2.0",
    id: id,
    error: error
  });
} 