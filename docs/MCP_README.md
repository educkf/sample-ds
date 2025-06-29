# 🧠 Hello World MCP Server

A simple Model Context Protocol (MCP) server built with Next.js and Vercel's MCP adapter.

## 🚀 Features

- **Single Tool**: `hello_world` - Returns a friendly greeting with optional name parameter
- **Vercel Compatible**: Uses `@vercel/mcp-adapter` for seamless deployment
- **SSE Support**: Works with Server-Sent Events without Redis (in-memory state)
- **TypeScript**: Full TypeScript support with Zod schema validation

## 🛠️ Available Tools

### `hello_world`
- **Description**: Returns a friendly Hello World greeting
- **Parameters**: 
  - `name` (optional): String - Name to personalize the greeting
- **Returns**: Friendly greeting message

## 🏃‍♂️ Quick Start

### 1. Start the Development Server

```bash
npm run dev
```

The server will be available at `http://localhost:3000`

### 2. MCP Endpoint

The MCP server is available at:
- **HTTP Transport**: `http://localhost:3000/api/mcp/mcp`
- **SSE Transport**: `http://localhost:3000/api/mcp/sse`

### 3. Test with MCP Inspector

```bash
npx @modelcontextprotocol/inspector http://localhost:3000/api/mcp/mcp
```

Then open `http://localhost:6274` in your browser to interact with the MCP server.

## 🔧 Configure with Cursor

Create or update `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "hello-world-server": {
      "url": "http://localhost:3000/api/mcp/mcp"
    }
  }
}
```

## 🎯 Using the MCP Server

### With Cursor
1. Ensure the dev server is running (`npm run dev`)
2. Configure `.cursor/mcp.json` as shown above
3. In Cursor, ask: "Use the hello_world tool to greet me"
4. Or with a name: "Use the hello_world tool to greet Alice"

### Example Requests

**Basic greeting:**
```
Use the hello_world tool
```

**Personalized greeting:**
```
Use the hello_world tool with name "Alice"
```

## 🚀 Deploy to Vercel

1. Push your code to GitHub
2. Connect to Vercel
3. Deploy (no additional configuration needed)
4. Update your MCP client configuration to use the deployed URL

## 🔍 Testing

### Manual Testing with curl

```bash
# Test the MCP server
curl -X POST http://localhost:3000/api/mcp/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/list",
    "params": {}
  }'
```

### Test the hello_world tool

```bash
curl -X POST http://localhost:3000/api/mcp/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 2,
    "method": "tools/call",
    "params": {
      "name": "hello_world",
      "arguments": {"name": "World"}
    }
  }'
```

## 📁 Project Structure

```
├── app/
│   ├── api/
│   │   └── mcp/
│   │       └── [transport]/
│   │           └── route.ts        # MCP server implementation
│   └── page.tsx                    # Main page with MCP info
├── .cursor/
│   └── mcp.json                    # Cursor MCP configuration
└── package.json                    # Dependencies
```

## 🔧 Dependencies

- `@vercel/mcp-adapter` - Vercel's MCP adapter
- `zod` - Schema validation
- `next` - Next.js framework
- `typescript` - TypeScript support

## 🌐 Transport Options

This server supports both transport options:

1. **HTTP Transport** (Recommended): Stateless, works without Redis
2. **SSE Transport**: Uses in-memory state (not suitable for production scaling)

## 📝 Notes

- The SSE transport uses in-memory state, so it won't persist across serverless function restarts
- For production SSE usage, consider adding Redis for state management
- The HTTP transport is stateless and recommended for production use

## 🤝 Contributing

Feel free to extend this server with additional tools and features!

## 📜 License

MIT 