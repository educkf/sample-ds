# Model Context Protocol (MCP) Server

This documentation site includes a **Model Context Protocol (MCP) server** that provides LLMs with comprehensive information about the Sample Design System components, implementation guides, and architecture details.

The MCP server is fully compliant with the [official MCP specification 2025-06-18](https://modelcontextprotocol.io/specification/2025-06-18) and implements proper JSON-RPC 2.0 message handling with complete lifecycle management.

## 🌐 Server Endpoint

**HTTP Transport**: `/api/mcp/http`

The server is available at: {% currentUrl /%}

## 📋 Available Tools

The MCP server provides 5 comprehensive tools for accessing design system information:

### 1. `list_components`
Lists all available design system components with basic information.

**Parameters**: None

**Returns**: JSON with component names, descriptions, features, and example use cases.

### 2. `get_component_info`
Get detailed information about a specific component including usage examples, props, and features.

**Parameters**:
- `component` (string, required): Component name (`accordion`, `button`, `card`, `alert`, `modal`, `breadcrumb`)

**Returns**: Complete component documentation including usage examples, properties, CDN URLs, and implementation details.

### 3. `get_implementation_guide`
Get framework-specific implementation guides for integrating the design system.

**Parameters**:
- `framework` (string, required): Target framework (`vanilla`, `react`, `vue`, `angular`, `svelte`)

**Returns**: Step-by-step implementation guide with code examples for the specified framework.

### 4. `get_system_architecture`
Get information about the design system architecture and technical details.

**Parameters**: None

**Returns**: Technical architecture details, browser support, file structure, and development information.

### 5. `search_components`
Search components by feature, use case, or keyword.

**Parameters**:
- `query` (string, required): Search term (e.g., "navigation", "form", "overlay")

**Returns**: Matching components with relevance details and usage examples.

## 🚀 MCP Client Integration

### Connection Lifecycle

The server follows the standard MCP lifecycle:

1. **Initialize**: Client sends `initialize` request with protocol version
2. **Initialized**: Client sends `initialized` notification  
3. **Ready**: Server is ready to handle tool requests

### Example Client Code

```javascript
// 1. Initialize connection
const initRequest = {
  jsonrpc: "2.0",
  id: "init-1",
  method: "initialize",
  params: {
    protocolVersion: "2025-06-18",
    capabilities: { tools: {} },
    clientInfo: { name: "my-client", version: "1.0.0" }
  }
};

// 2. Send initialized notification
const initNotification = {
  jsonrpc: "2.0",
  method: "initialized"
};

// 3. Use tools
const toolRequest = {
  jsonrpc: "2.0",
  id: "tool-1", 
  method: "tools/call",
  params: {
    name: "get_component_info",
    arguments: { component: "button" }
  }
};
```

## 🧪 Testing

Test the MCP server using the included test script:

```bash
node scripts/test-mcp-proper.mjs {% currentUrl path="" /%}
```

This will run a comprehensive test of all MCP functionality including:
- Connection initialization
- Tool listing
- Each tool's functionality
- Error handling
- JSON-RPC 2.0 compliance

## 🛠️ Implementation Details

### Protocol Compliance
- **JSON-RPC 2.0**: Strict adherence to JSON-RPC 2.0 specification
- **MCP 2025-06-18**: Full compliance with latest MCP specification
- **Error Handling**: Proper JSON-RPC error codes and messages
- **State Management**: Proper initialization state tracking

### Security Features
- **Validation**: Input validation for all parameters
- **Error Boundaries**: Graceful error handling and reporting
- **Type Safety**: Schema validation for all tool parameters

### Performance
- **Stateless**: Each request is independent
- **Efficient**: Minimal memory footprint
- **Fast**: Quick response times for all operations

## 📚 Use Cases

The MCP server enables LLMs to:

1. **Discover Components**: Explore available design system components
2. **Get Implementation Help**: Receive framework-specific integration guidance
3. **Search Functionality**: Find components by features or use cases
4. **Architecture Understanding**: Learn about the technical implementation
5. **Code Generation**: Generate accurate implementation code

## 🔗 Integration Examples

### Claude Desktop

Add to your Claude Desktop MCP configuration:

```json
{
  "mcpServers": {
    "sample-design-system": {
      "command": "node",
      "args": ["/path/to/mcp-server.js"],
      "env": {
        "SERVER_URL": "{% currentUrl path="" /%}"
      }
    }
  }
}
```

### Custom LLM Application

```typescript
import { MCPClient } from '@modelcontextprotocol/client';

const client = new MCPClient({
  transport: 'http',
  url: '{% currentUrl /%}'
});

await client.initialize();
const tools = await client.listTools();
```

## 🎯 Benefits

- **Comprehensive**: Complete design system information access
- **Standardized**: Following official MCP specification
- **Framework Agnostic**: Support for all major frameworks
- **Real-time**: Always up-to-date component information
- **Developer Friendly**: Clear documentation and examples

---

*This MCP server implementation demonstrates best practices for creating educational and development-focused MCP servers that help LLMs provide better assistance with specific technology stacks.* 