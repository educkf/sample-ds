// Model Context Protocol (MCP) Server Implementation
// Following JSON-RPC 2.0 specification as per https://modelcontextprotocol.io/
// Supports tools for Cursor and other MCP clients

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

// Server state
let isInitialized = false;

// Server capabilities - Support tools, resources, and prompts
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
  }
};

// Available tools
const TOOLS = [
  {
    name: "list_components",
    description: "Lists all available design system components with their basic information",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    }
  },
  {
    name: "get_component_info",
    description: "Gets detailed information about a specific design system component including usage examples, props, and implementation details",
    inputSchema: {
      type: "object",
      properties: {
        component: {
          type: "string",
          description: "The component name (e.g., 'button', 'card', 'alert')",
          enum: ["accordion", "button", "card", "alert", "modal", "breadcrumb"]
        }
      },
      required: ["component"],
      additionalProperties: false
    }
  },
  {
    name: "get_system_architecture",
    description: "Provides detailed information about the design system architecture, browser support, and technical specifications",
    inputSchema: {
      type: "object",
      properties: {},
      additionalProperties: false
    }
  }
];

// Available resources
const RESOURCES = [
  {
    uri: "design-system://components/all",
    name: "All Components",
    description: "Complete documentation for all design system components",
    mimeType: "application/json"
  },
  {
    uri: "design-system://architecture",
    name: "System Architecture", 
    description: "Technical architecture and implementation details",
    mimeType: "application/json"
  },
  {
    uri: "design-system://browser-support",
    name: "Browser Support",
    description: "Browser compatibility matrix and feature support",
    mimeType: "application/json"
  }
];

// Available prompts
const PROMPTS = [
  {
    name: "component_integration",
    description: "Get step-by-step integration instructions for a specific component",
    arguments: [
      {
        name: "component",
        description: "The component to integrate",
        required: true
      },
      {
        name: "framework",
        description: "Target framework (vanilla, react, vue, angular, svelte)",
        required: false
      }
    ]
  },
  {
    name: "troubleshoot_component",
    description: "Get help troubleshooting component implementation issues",
    arguments: [
      {
        name: "component", 
        description: "Component having issues",
        required: true
      },
      {
        name: "issue",
        description: "Description of the problem",
        required: true
      },
      {
        name: "framework",
        description: "Framework being used",
        required: false
      }
    ]
  },
  {
    name: "design_review",
    description: "Review code for design system best practices and compliance",
    arguments: [
      {
        name: "code",
        description: "Code to review",
        required: true
      },
      {
        name: "focus",
        description: "What to focus on (accessibility, performance, best-practices)",
        required: false
      }
    ]
  }
];

export default function handler(req, res) {
  // Set CORS headers for remote MCP clients
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle OPTIONS preflight request
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  // Only allow POST requests for JSON-RPC
  if (req.method !== 'POST') {
    return sendError(res, null, ERROR_CODES.InvalidRequest, "Method not allowed. MCP requires POST requests.");
  }

  let message;
  try {
    message = req.body;
    
    // Validate JSON-RPC 2.0 format
    if (!message || message.jsonrpc !== "2.0") {
      return sendError(res, null, ERROR_CODES.InvalidRequest, "Invalid JSON-RPC 2.0 request");
    }

    // Log incoming requests (to stderr in production)
    console.error(`[MCP] Received ${message.method || 'notification'}${message.id ? ` (id: ${message.id})` : ''}`);

    // Handle different message types
    if (message.id !== undefined) {
      // Request - expects response
      return handleRequest(res, message);
    } else {
      // Notification - no response expected
      return handleNotification(res, message);
    }
    
  } catch (error) {
    console.error('[MCP] Parse Error:', error);
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
        return handleResourcesList(res, id);
      
      case 'resources/read':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handleResourcesRead(res, id, params);
      
      case 'prompts/list':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handlePromptsList(res, id);
      
      case 'prompts/get':
        if (!isInitialized) {
          return sendError(res, id, ERROR_CODES.InvalidRequest, "Server not initialized");
        }
        return handlePromptsGet(res, id, params);
      
      default:
        return sendError(res, id, ERROR_CODES.MethodNotFound, `Method '${method}' not found`);
    }
  } catch (error) {
    console.error(`[MCP] Internal error in ${method}:`, error);
    return sendError(res, id, ERROR_CODES.InternalError, "Internal server error");
  }
}

// Handle JSON-RPC notifications (no response expected)
function handleNotification(res, message) {
  const { method } = message;

  try {
    switch (method) {
      case 'initialized':
        console.error('[MCP] Client initialized notification received');
        break;
      
      default:
        console.error(`[MCP] Unknown notification: ${method}`);
        break;
    }
    
    // Notifications don't send responses
    return res.status(200).end();
  } catch (error) {
    console.error(`[MCP] Error handling notification ${method}:`, error);
    return res.status(200).end();
  }
}

// Handle initialization request
function handleInitialize(res, id, params) {
  const { protocolVersion, clientInfo } = params;

  console.error(`[MCP] Initializing with client: ${clientInfo?.name || 'unknown'} v${clientInfo?.version || 'unknown'}`);
  console.error(`[MCP] Protocol version: ${protocolVersion || 'unknown'}`);

  // Mark as initialized
  isInitialized = true;

  return sendResult(res, id, {
    protocolVersion: MCP_VERSION,
    capabilities: serverCapabilities,
    serverInfo: SERVER_INFO
  });
}

// Handle tools/list request
function handleToolsList(res, id) {
  console.error(`[MCP] Listing ${TOOLS.length} available tools`);
  
  return sendResult(res, id, {
    tools: TOOLS
  });
}

// Handle tools/call request
function handleToolsCall(res, id, params) {
  const { name, arguments: args = {} } = params;

  if (!name) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Tool name is required");
  }

  console.error(`[MCP] Calling tool: ${name}`);

  try {
    switch (name) {
      case 'list_components':
        return executeListComponents(res, id);
      
      case 'get_component_info':
        return executeGetComponentInfo(res, id, args);
      
      case 'get_system_architecture':
        return executeGetSystemArchitecture(res, id);
      
      default:
        return sendError(res, id, ERROR_CODES.InvalidParams, `Unknown tool: ${name}`);
    }
  } catch (error) {
    console.error(`[MCP] Error executing tool ${name}:`, error);
    return sendError(res, id, ERROR_CODES.InternalError, `Error executing tool: ${error.message}`);
  }
}

// Tool implementations
function executeListComponents(res, id) {
  const componentList = Object.entries(COMPONENTS).map(([key, component]) => ({
    id: key,
    name: component.name,
    description: component.description,
    features: component.features
  }));

  const content = `📦 **Available Design System Components**

${componentList.map(comp => 
  `• **${comp.name}** (${comp.id})
  ${comp.description}
  Features: ${comp.features.join(', ')}`
).join('\n\n')}

Use \`get_component_info\` with a component name to get detailed information.`;

  return sendResult(res, id, {
    content: [
      { 
        type: "text", 
        text: content
      }
    ]
  });
}

function executeGetComponentInfo(res, id, args) {
  const { component } = args;
  
  if (!component) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Component parameter is required");
  }

  const componentData = COMPONENTS[component.toLowerCase()];
  
  if (!componentData) {
    const availableComponents = Object.keys(COMPONENTS).join(', ');
    return sendResult(res, id, {
      content: [
        { 
          type: "text", 
          text: `❌ Component "${component}" not found.\n\nAvailable components: ${availableComponents}`
        }
      ]
    });
  }

  const propsInfo = Object.entries(componentData.props)
    .map(([prop, desc]) => `• **${prop}**: ${desc}`)
    .join('\n');

  const content = `# ${componentData.name}

${componentData.description}

## Usage
\`\`\`html
${componentData.usage}
\`\`\`

## Properties
${propsInfo}

## Features
${componentData.features.map(f => `• ${f}`).join('\n')}

## Use Cases
${componentData.examples.map(e => `• ${e}`).join('\n')}`;

  return sendResult(res, id, {
    content: [
      { 
        type: "text", 
        text: content
      }
    ]
  });
}

function executeGetSystemArchitecture(res, id) {
  const content = `# ${DESIGN_SYSTEM_INFO.name} Architecture

## Technical Overview

**Package**: ${DESIGN_SYSTEM_INFO.package}
**Version**: ${DESIGN_SYSTEM_INFO.version}
**Architecture**: ${DESIGN_SYSTEM_INFO.architecture}

## Browser Support
${DESIGN_SYSTEM_INFO.browser_support.map(browser => `• ${browser}`).join('\n')}

## Framework Compatibility
${DESIGN_SYSTEM_INFO.framework_support.map(fw => `• ${fw}`).join('\n')}

## Key Features
• **Web Components**: Built using Custom Elements API for maximum compatibility
• **Shadow DOM**: Encapsulated styling prevents CSS conflicts
• **Accessibility**: WCAG 2.1 AA compliant components
• **Theming**: CSS custom properties for consistent customization
• **TypeScript**: Full TypeScript definitions included
• **Tree Shaking**: Optimized bundles with unused code elimination

## Installation Methods

### NPM
\`\`\`bash
${DESIGN_SYSTEM_INFO.installation}
\`\`\`

### CDN
\`\`\`html
<script src="${DESIGN_SYSTEM_INFO.cdn}index.js"></script>
\`\`\``;

  return sendResult(res, id, {
    content: [
      { 
        type: "text", 
        text: content
      }
    ]
  });
}

// Resource implementations
function handleResourcesList(res, id) {
  console.error(`[MCP] Listing ${RESOURCES.length} available resources`);
  
  return sendResult(res, id, {
    resources: RESOURCES
  });
}

function handleResourcesRead(res, id, params) {
  const { uri } = params;
  
  if (!uri) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Resource URI is required");
  }

  console.error(`[MCP] Reading resource: ${uri}`);

  try {
    switch (uri) {
      case 'design-system://components/all':
        return sendResult(res, id, {
          contents: [
            {
              uri: uri,
              mimeType: "application/json",
              text: JSON.stringify({
                components: COMPONENTS,
                systemInfo: DESIGN_SYSTEM_INFO,
                totalComponents: Object.keys(COMPONENTS).length
              }, null, 2)
            }
          ]
        });
      
      case 'design-system://architecture':
        return sendResult(res, id, {
          contents: [
            {
              uri: uri,
              mimeType: "application/json", 
              text: JSON.stringify({
                ...DESIGN_SYSTEM_INFO,
                technicalSpecs: {
                  bundleSize: "~50KB minified",
                  treeshaking: true,
                  sideEffects: false,
                  exports: ["esm", "cjs", "umd"],
                  dependencies: [],
                  peerDependencies: []
                }
              }, null, 2)
            }
          ]
        });
      
      case 'design-system://browser-support':
        return sendResult(res, id, {
          contents: [
            {
              uri: uri,
              mimeType: "application/json",
              text: JSON.stringify({
                supportMatrix: {
                  "Chrome": "54+",
                  "Firefox": "63+", 
                  "Safari": "10.1+",
                  "Edge": "79+",
                  "IE": "Not supported"
                },
                features: {
                  "Custom Elements": "Full support",
                  "Shadow DOM": "Full support",
                  "ES Modules": "Required",
                  "CSS Custom Properties": "Required"
                },
                polyfills: {
                  required: false,
                  optional: ["@webcomponents/webcomponentsjs"]
                }
              }, null, 2)
            }
          ]
        });
      
      default:
        return sendError(res, id, ERROR_CODES.InvalidParams, `Unknown resource URI: ${uri}`);
    }
  } catch (error) {
    console.error(`[MCP] Error reading resource ${uri}:`, error);
    return sendError(res, id, ERROR_CODES.InternalError, `Error reading resource: ${error.message}`);
  }
}

// Prompt implementations
function handlePromptsList(res, id) {
  console.error(`[MCP] Listing ${PROMPTS.length} available prompts`);
  
  return sendResult(res, id, {
    prompts: PROMPTS
  });
}

function handlePromptsGet(res, id, params) {
  const { name, arguments: args = {} } = params;
  
  if (!name) {
    return sendError(res, id, ERROR_CODES.InvalidParams, "Prompt name is required");
  }

  console.error(`[MCP] Getting prompt: ${name}`);

  const prompt = PROMPTS.find(p => p.name === name);
  if (!prompt) {
    return sendError(res, id, ERROR_CODES.InvalidParams, `Unknown prompt: ${name}`);
  }

  try {
    switch (name) {
      case 'component_integration':
        const component = args.component || '[COMPONENT_NAME]';
        const framework = args.framework || 'vanilla';
        
        return sendResult(res, id, {
          description: `Integration guide for ${component} component`,
          messages: [
            {
              role: "user",
              content: {
                type: "text",
                text: `I need help integrating the ${component} component from the sample-design-system-educkf package into my ${framework} project. Please provide step-by-step instructions including:

1. Installation and setup
2. Import statements
3. Basic usage example
4. Common configuration options
5. Best practices and tips

Component: ${component}
Framework: ${framework}`
              }
            }
          ]
        });
      
      case 'troubleshoot_component':
        const problemComponent = args.component || '[COMPONENT_NAME]';
        const issue = args.issue || '[DESCRIBE_THE_ISSUE]';
        const problemFramework = args.framework || 'unknown';
        
        return sendResult(res, id, {
          description: `Troubleshooting guide for ${problemComponent} component`,
          messages: [
            {
              role: "user", 
              content: {
                type: "text",
                text: `I'm having an issue with the ${problemComponent} component from the sample-design-system-educkf package. Here are the details:

**Issue:** ${issue}
**Component:** ${problemComponent}
**Framework:** ${problemFramework}

Please help me:
1. Identify the likely cause of this issue
2. Provide step-by-step troubleshooting steps
3. Suggest possible solutions
4. Share any known workarounds
5. Recommend best practices to avoid this issue in the future

Please be specific and include code examples where helpful.`
              }
            }
          ]
        });
      
      case 'design_review':
        const code = args.code || '[PASTE_YOUR_CODE_HERE]';
        const focus = args.focus || 'best-practices';
        
        return sendResult(res, id, {
          description: `Design system code review focusing on ${focus}`,
          messages: [
            {
              role: "user",
              content: {
                type: "text", 
                text: `Please review my code for design system compliance and best practices. Focus on: ${focus}

**Code to review:**
\`\`\`
${code}
\`\`\`

Please check for:
1. Proper component usage and configuration
2. Accessibility compliance (WCAG 2.1 AA)
3. Performance best practices
4. Code maintainability and readability
5. Design system consistency
6. Framework-specific best practices

Provide specific feedback with examples and suggestions for improvement.`
              }
            }
          ]
        });
      
      default:
        return sendError(res, id, ERROR_CODES.InvalidParams, `Unknown prompt: ${name}`);
    }
  } catch (error) {
    console.error(`[MCP] Error getting prompt ${name}:`, error);
    return sendError(res, id, ERROR_CODES.InternalError, `Error getting prompt: ${error.message}`);
  }
}

// Utility functions
function sendResult(res, id, result) {
  const response = {
    jsonrpc: "2.0",
    id: id,
    result: result
  };
  
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(response);
}

function sendError(res, id, code, message, data = null) {
  const response = {
    jsonrpc: "2.0",
    id: id,
    error: {
      code: code,
      message: message,
      ...(data && { data })
    }
  };
  
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(response);
} 