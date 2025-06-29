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
const serverCapabilities = {
  tools: {},
  resources: {},
  prompts: {}
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
      description: "List all available design system components with basic information",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      }
    },
    {
      name: "get_component_info",
      description: "Get detailed information about a specific component including usage examples, props, and features",
      inputSchema: {
        type: "object",
        properties: {
          component: {
            type: "string",
            description: "Component name",
            enum: Object.keys(COMPONENTS)
          }
        },
        required: ["component"],
        additionalProperties: false
      }
    },
    {
      name: "get_implementation_guide",
      description: "Get framework-specific implementation guides for integrating the design system",
      inputSchema: {
        type: "object",
        properties: {
          framework: {
            type: "string",
            description: "Target framework for implementation",
            enum: ["vanilla", "react", "vue", "angular", "svelte"]
          }
        },
        required: ["framework"],
        additionalProperties: false
      }
    },
    {
      name: "get_system_architecture",
      description: "Get information about the design system architecture and technical details",
      inputSchema: {
        type: "object",
        properties: {},
        additionalProperties: false
      }
    },
    {
      name: "search_components",
      description: "Search components by feature, use case, or keyword",
      inputSchema: {
        type: "object",
        properties: {
          query: {
            type: "string",
            description: "Search term (e.g., 'navigation', 'form', 'overlay')",
            minLength: 1
          }
        },
        required: ["query"],
        additionalProperties: false
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
  const { query } = args;
  
  if (!query || typeof query !== 'string' || query.trim().length === 0) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Query parameter is required and must be a non-empty string");
  }

  const searchQuery = query.toLowerCase().trim();
  const matchingComponents = Object.entries(COMPONENTS).filter(([, comp]) => {
    return comp.name.toLowerCase().includes(searchQuery) ||
           comp.description.toLowerCase().includes(searchQuery) ||
           comp.features.some(f => f.toLowerCase().includes(searchQuery)) ||
           comp.examples.some(e => e.toLowerCase().includes(searchQuery));
  });

  const content = JSON.stringify({
    query: query,
    total_matches: matchingComponents.length,
    matches: matchingComponents.map(([componentKey, comp]) => ({
      component: componentKey,
      name: comp.name,
      description: comp.description,
      matching_features: comp.features.filter(f => f.toLowerCase().includes(searchQuery)),
      matching_examples: comp.examples.filter(e => e.toLowerCase().includes(searchQuery)),
      usage: comp.usage
    }))
  }, null, 2);

  return sendResult(res, id, {
    content: [{ type: "text", text: content }]
  });
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