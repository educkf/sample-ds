# Model Context Protocol (MCP) Server

This design system provides a fully compliant **Model Context Protocol (MCP) Server** that follows the [MCP 2025-06-18 specification](https://modelcontextprotocol.io/specification/2025-06-18/server/). The server enables AI assistants to access design system documentation, validate component usage, and provide implementation guidance.

## 🚀 Quick Start

Access the MCP server via HTTP at:
```
http://localhost:3000/api/mcp/http
```

Or via SSE (Server-Sent Events):
```
http://localhost:3000/api/mcp/sse
```

## 📋 Full MCP Specification Support

Our implementation includes complete support for all MCP capabilities:

### Core Capabilities
- ✅ **Tools** - Interactive design system assistance
- ✅ **Resources** - Structured component documentation 
- ✅ **Prompts** - Pre-built guidance templates
- ✅ **Completion** - Intelligent auto-completion
- ✅ **Logging** - Configurable logging levels

### Advanced Features
- ✅ **Pagination** - Efficient data handling
- ✅ **Error Handling** - Comprehensive error responses
- ✅ **Input Validation** - Schema-based validation
- ✅ **Structured Output** - JSON Schema compliance

## 🛠️ Tools Available

### Enhanced Tool Set

#### 1. **list_components**
List all available design system components with metadata.

**Input Schema:**
```json
{
  "type": "object",
  "properties": {},
  "additionalProperties": false
}
```

**Output:** Complete component inventory with features and examples.

#### 2. **get_component_info** 
Get detailed information about a specific component.

**Input Schema:**
```json
{
  "type": "object", 
  "properties": {
    "component": {
      "type": "string",
      "description": "Component name",
      "enum": ["button", "card", "modal", "alert", "breadcrumb", "accordion"],
      "pattern": "^[a-z][a-z0-9-]*$"
    }
  },
  "required": ["component"],
  "additionalProperties": false
}
```

#### 3. **get_implementation_guide**
Get framework-specific implementation guides.

**Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "framework": {
      "type": "string", 
      "enum": ["vanilla", "react", "vue", "angular", "svelte"],
      "default": "vanilla"
    },
    "includeAdvanced": {
      "type": "boolean",
      "description": "Include advanced integration patterns",
      "default": false
    }
  },
  "required": ["framework"],
  "additionalProperties": false
}
```

#### 4. **search_components** 
Advanced component search with filtering.

**Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "query": {
      "type": "string",
      "minLength": 1,
      "maxLength": 100
    },
    "category": {
      "type": "string",
      "enum": ["form", "navigation", "feedback", "layout", "data-display", "overlay"]
    },
    "complexity": {
      "type": "string", 
      "enum": ["simple", "moderate", "complex"]
    },
    "limit": {
      "type": "integer",
      "minimum": 1,
      "maximum": 50,
      "default": 10
    }
  },
  "required": ["query"],
  "additionalProperties": false
}
```

#### 5. **validate_component_usage** 🆕
Validate component implementation and get improvement suggestions.

**Input Schema:**
```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string",
      "description": "Component implementation code to validate",
      "minLength": 1,
      "maxLength": 10000
    },
    "component": {
      "type": "string",
      "description": "Specific component to validate (optional)",
      "enum": ["button", "card", "modal", "alert", "breadcrumb", "accordion"]
    },
    "framework": {
      "type": "string",
      "enum": ["vanilla", "react", "vue", "angular", "svelte"],
      "default": "vanilla"
    },
    "strict": {
      "type": "boolean",
      "description": "Enable strict validation mode",
      "default": false
    }
  },
  "required": ["code"],
  "additionalProperties": false
}
```

**Output Example:**
```json
{
  "is_valid": true,
  "component_detected": "button",
  "errors": [],
  "warnings": ["Button should have visible text content"],
  "suggestions": ["Use addEventListener for better event handling"],
  "accessibility_issues": [],
  "performance_tips": ["Consider using async/defer for script loading"],
  "score": 85
}
```

## 📚 Resources

Access structured documentation via the resources API:

### Available Resources

#### 1. **design-system://components/all**
Complete component documentation with API details.

#### 2. **design-system://architecture** 
Technical architecture and implementation specifications.

#### 3. **design-system://browser-support**
Browser compatibility matrix and feature support.

### Resource Access
```javascript
// Example: Read all components resource
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "resources/read",
  "params": {
    "uri": "design-system://components/all"
  }
}
```

## 💬 Prompts

Pre-built prompt templates for common tasks:

### Available Prompts

#### 1. **component_integration**
Get step-by-step integration instructions.

**Arguments:**
- `component` (required): Component name
- `framework` (optional): Target framework

#### 2. **troubleshoot_component** 
Get help troubleshooting component issues.

**Arguments:**
- `component` (required): Component having issues
- `issue` (required): Problem description

#### 3. **design_review**
Review code for design system best practices.

**Arguments:**
- `code` (required): Code to review

### Prompt Usage
```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "prompts/get",
  "params": {
    "name": "component_integration",
    "arguments": {
      "component": "button",
      "framework": "react"
    }
  }
}
```

## 🔄 Completion Support

Intelligent auto-completion for:
- Component names
- Framework types  
- Resource URIs
- Prompt arguments

### Example Completion Request
```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "completion/complete",
  "params": {
    "ref": {
      "type": "ref/prompt",
      "name": "component_integration"
    },
    "argument": {
      "name": "component",
      "value": "bu"
    }
  }
}
```

## 📝 Logging

Configure server logging levels:

### Available Log Levels
- `debug` - Detailed debugging information
- `info` - General information (default)
- `notice` - Normal but significant condition
- `warning` - Warning conditions
- `error` - Error conditions
- `critical` - Critical conditions
- `alert` - Action must be taken immediately
- `emergency` - System is unusable

### Set Log Level
```javascript
{
  "jsonrpc": "2.0",
  "id": 1,
  "method": "logging/setLevel",
  "params": {
    "level": "debug"
  }
}
```

## 🔧 Server Capabilities

Full MCP server capabilities:

```json
{
  "tools": {
    "listChanged": false
  },
  "resources": {
    "subscribe": false,
    "listChanged": false
  },
  "prompts": {
    "listChanged": false
  },
  "completions": {},
  "logging": {}
}
```

## 🌐 Transport Support

- **HTTP** - Standard request/response
- **SSE** - Server-Sent Events for streaming
- **JSON-RPC 2.0** - Full protocol compliance

## 📊 Error Handling

Comprehensive error responses following JSON-RPC 2.0:

### Standard Error Codes
- `-32700` - Parse error
- `-32600` - Invalid Request
- `-32601` - Method not found
- `-32602` - Invalid params
- `-32603` - Internal error
- `-32002` - Resource not found

### Example Error Response
```json
{
  "jsonrpc": "2.0",
  "id": 1,
  "error": {
    "code": -32602,
    "message": "Invalid params",
    "data": "Component parameter is required"
  }
}
```

## 🎯 Use Cases

### For AI Assistants
- **Component Discovery**: Find components by functionality
- **Implementation Help**: Get framework-specific code examples  
- **Code Validation**: Validate and improve component usage
- **Troubleshooting**: Diagnose and fix component issues
- **Best Practices**: Learn design system patterns

### For Developers
- **Interactive Documentation**: Query components programmatically
- **Code Review**: Automated design system compliance checking
- **Integration Support**: Step-by-step framework integration
- **Performance Optimization**: Get performance recommendations

## 🔍 Example Workflows

### 1. Component Discovery & Implementation
```bash
# 1. Search for form components
POST /api/mcp/http
{
  "method": "tools/call",
  "params": {
    "name": "search_components", 
    "arguments": {
      "query": "form",
      "category": "form",
      "limit": 5
    }
  }
}

# 2. Get detailed button information
{
  "method": "tools/call",
  "params": {
    "name": "get_component_info",
    "arguments": {
      "component": "button"
    }
  }
}

# 3. Get React implementation guide
{
  "method": "tools/call", 
  "params": {
    "name": "get_implementation_guide",
    "arguments": {
      "framework": "react",
      "includeAdvanced": true
    }
  }
}
```

### 2. Code Validation & Review
```bash
# Validate component implementation
{
  "method": "tools/call",
  "params": {
    "name": "validate_component_usage",
    "arguments": {
      "code": "<sample-button onclick=\"alert('test')\">Click me</sample-button>",
      "framework": "vanilla",
      "strict": true
    }
  }
}
```

### 3. Resource Access
```bash
# Get system architecture
{
  "method": "resources/read",
  "params": {
    "uri": "design-system://architecture"
  }
}
```

## 🚀 Integration Examples

### MCP Client Configuration
```json
{
  "mcpServers": {
    "design-system": {
      "command": "node",
      "args": ["mcp-server.js"],
      "env": {
        "PORT": "3000"
      }
    }
  }
}
```

### Claude Desktop Integration
```json
{
  "anthropic": {
    "mcpServers": {
      "design-system": {
        "command": "npx",
        "args": ["--yes", "@sample/mcp-server"],
        "env": {}
      }
    }
  }
}
```

## 🔗 Specification Compliance

This server implements the complete [Model Context Protocol 2025-06-18 specification](https://modelcontextprotocol.io/specification/2025-06-18/server/):

- ✅ [Core Server Spec](https://modelcontextprotocol.io/specification/2025-06-18/server/index)
- ✅ [Tools Implementation](https://modelcontextprotocol.io/specification/2025-06-18/server/tools) 
- ✅ [Resources Implementation](https://modelcontextprotocol.io/specification/2025-06-18/server/resources)
- ✅ [Prompts Implementation](https://modelcontextprotocol.io/specification/2025-06-18/server/prompts)
- ✅ [Completion Utilities](https://modelcontextprotocol.io/specification/2025-06-18/server/utilities/completion)
- ✅ [Logging Utilities](https://modelcontextprotocol.io/specification/2025-06-18/server/utilities/logging)
- ✅ [Pagination Utilities](https://modelcontextprotocol.io/specification/2025-06-18/server/utilities/pagination)

The implementation provides production-ready MCP server capabilities with comprehensive design system integration, making it easy for AI assistants to understand and work with your component library. 