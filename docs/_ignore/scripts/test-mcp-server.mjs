#!/usr/bin/env node

/**
 * Simple test script for the MCP server
 * Usage: node scripts/test-mcp-server.mjs
 */

const SERVER_URL = 'http://localhost:3000/api/mcp/mcp';

async function testMcpServer() {
  console.log('🧪 Testing MCP Server...\n');

  try {
    // Test 1: Initialize
    console.log('1. Testing initialization...');
    const initResponse = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'initialize',
        params: {
          protocolVersion: '2025-06-18',
          capabilities: {
            tools: {}
          },
          clientInfo: {
            name: 'test-client',
            version: '1.0.0'
          }
        }
      })
    });

    if (!initResponse.ok) {
      throw new Error(`HTTP ${initResponse.status}: ${initResponse.statusText}`);
    }

    const initResult = await initResponse.json();
    console.log('✅ Initialization successful');
    console.log(`   Server: ${initResult.result?.serverInfo?.name || 'Unknown'} v${initResult.result?.serverInfo?.version || 'Unknown'}`);
    console.log(`   Protocol: ${initResult.result?.protocolVersion || 'Unknown'}\n`);

    // Test 2: List tools
    console.log('2. Testing tools/list...');
    const toolsResponse = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/list'
      })
    });

    const toolsResult = await toolsResponse.json();
    console.log('✅ Tools list successful');
    console.log(`   Found ${toolsResult.result?.tools?.length || 0} tools:`);
    toolsResult.result?.tools?.forEach(tool => {
      console.log(`   - ${tool.name}: ${tool.description}`);
    });
    console.log();

    // Test 3: Call a tool
    console.log('3. Testing list_components tool...');
    const toolCallResponse = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: 'list_components',
          arguments: {}
        }
      })
    });

    const toolCallResult = await toolCallResponse.json();
    console.log('✅ Tool call successful');
    console.log('   Response preview:', toolCallResult.result?.content?.[0]?.text?.substring(0, 200) + '...\n');

    // Test 4: Get component info
    console.log('4. Testing get_component_info tool...');
    const componentInfoResponse = await fetch(SERVER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 4,
        method: 'tools/call',
        params: {
          name: 'get_component_info',
          arguments: {
            component: 'button'
          }
        }
      })
    });

    const componentInfoResult = await componentInfoResponse.json();
    console.log('✅ Component info tool successful');
    console.log('   Response preview:', componentInfoResult.result?.content?.[0]?.text?.substring(0, 200) + '...\n');

    console.log('🎉 All tests passed! MCP server is working correctly.');
    console.log('\n📋 Connection details for MCP clients:');
    console.log(`   HTTP URL: ${SERVER_URL}`);
    console.log('   SSE URL: http://localhost:3000/api/mcp/sse');
    console.log('\n📖 For Claude Desktop, add this to your config:');
    console.log(`   "sample-design-system": {
     "command": "npx",
     "args": [
       "mcp-remote",
       "-y",
       "${SERVER_URL}"
     ]
   }`);

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.cause) {
      console.error('   Cause:', error.cause);
    }
    process.exit(1);
  }
}

// Run tests if called directly
if (import.meta.url === `file://${process.argv[1]}`) {
  testMcpServer();
} 