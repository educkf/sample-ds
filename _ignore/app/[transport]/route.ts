import { createMcpHandler } from "@vercel/mcp-adapter";
import { z } from "zod";

const handler = createMcpHandler(
  (server) => {
    server.tool(
      "say_hello",
      "Returns a simple hello world message",
      {
        name: z.string().optional().describe("Optional name to greet")
      },
      async ({ name }) => {
        const greeting = name ? `Hello, ${name}!` : "Hello, World!";
        return {
          content: [{ type: "text", text: greeting }],
        };
      }
    );
  },
  {
    // Server options - empty for simplicity
  },
  {
    // Configuration options
    basePath: "/app",
    maxDuration: 60,
    verboseLogs: true,
  }
);

export { handler as GET, handler as POST }; 