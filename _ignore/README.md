# Simple Hello World MCP Server

A very simple Model Context Protocol (MCP) server built with Next.js and Vercel's MCP adapter.

## What's This?

This is a minimal MCP server that demonstrates how to create a basic MCP service with just one tool: `say_hello`.

## Features

- ✅ **Single Tool**: Just one `say_hello` tool that returns a greeting
- ✅ **Vercel MCP Adapter**: Uses `@vercel/mcp-adapter` for easy deployment
- ✅ **SSE Support**: Works with both Streamable HTTP and Server-Sent Events
- ✅ **TypeScript**: Full TypeScript support
- ✅ **Simple**: Minimal implementation for learning

## Installation

```bash
npm install
```

## Development

```bash
npm run dev
```

The MCP server will be available at:
- **Streamable HTTP**: `http://localhost:3000/app/mcp`
- **SSE**: `http://localhost:3000/app/sse`

## MCP Tool

### `say_hello`

Returns a simple greeting message.

**Parameters:**
- `name` (optional): Name to greet

**Examples:**
- `say_hello()` → "Hello, World!"
- `say_hello({ name: "Alice" })` → "Hello, Alice!"

## Connecting from MCP Clients

### Cursor

Add this to your `~/.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "hello-world": {
      "url": "http://localhost:3000/app/mcp"
    }
  }
}
```

### Claude Desktop

Add this to your MCP config:

```json
{
  "hello-world": {
    "command": "npx",
    "args": ["mcp-remote", "-y", "http://localhost:3000/app/mcp"]
  }
}
```

### Windsurf

Add this to your `~/.codeium/windsurf/mcp_config.json`:

```json
{
  "mcpServers": {
    "hello-world": {
      "url": "http://localhost:3000/app/mcp"
    }
  }
}
```

## Deployment

This MCP server works great on Vercel:

1. Deploy to Vercel
2. Update your MCP client configs to use your Vercel URL instead of localhost
3. That's it!

## Architecture

- **Framework**: Next.js (App Router)
- **MCP Implementation**: `@vercel/mcp-adapter`
- **Transport**: Supports both Streamable HTTP (`/mcp`) and SSE (`/sse`)
- **Validation**: Zod for input validation

## Files

- `app/[transport]/route.ts` - The main MCP server implementation
- `next.config.ts` - Next.js configuration with CORS headers for MCP

## License

MIT
