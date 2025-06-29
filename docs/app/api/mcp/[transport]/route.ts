import { z } from 'zod';
import { createMcpHandler } from '@vercel/mcp-adapter';

const handler = createMcpHandler(
  async (server) => {
    // Define a simple "Hello World" tool
    server.tool(
      'hello_world',
      'Returns a friendly Hello World greeting with an optional name parameter',
      {
        name: z.string().optional().describe('Optional name to personalize the greeting')
      },
      async ({ name }) => {
        const greeting = name 
          ? `Hello, ${name}! Welcome to our MCP server! 🌟` 
          : 'Hello, World! Welcome to our MCP server! 🌟';
        
        return {
          content: [{ 
            type: 'text', 
            text: greeting 
          }],
        };
      }
    );

    // Server is ready with the hello_world tool
  },
  {
    // Server options - empty for basic setup
  },
  {
    // Transport options - let Vercel auto-determine
  }
);

export { handler as GET, handler as POST, handler as DELETE }; 