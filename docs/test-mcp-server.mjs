// Simple test for MCP server
// Run with: node test-mcp-server.mjs

async function testMCPServer() {
  console.log('🧪 Testing MCP Server...');

  const headers = {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };

  try {
    // Test tools/list
    console.log('\n1. Testing tools/list...');
    const listResponse = await fetch('http://localhost:3000/mcp', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'tools/list',
        params: {}
      })
    });

    if (listResponse.ok) {
      const listData = await listResponse.json();
      console.log('✅ Tools list response:');
      console.log(JSON.stringify(listData, null, 2));
    } else {
      console.log('❌ Tools list failed:', listResponse.status, listResponse.statusText);
      const errorText = await listResponse.text();
      console.log('Error details:', errorText);
      return;
    }

    // Test hello_world tool
    console.log('\n2. Testing hello_world tool...');
    const toolResponse = await fetch('http://localhost:3000/http', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 2,
        method: 'tools/call',
        params: {
          name: 'hello_world',
          arguments: {}
        }
      })
    });

    if (toolResponse.ok) {
      const toolData = await toolResponse.json();
      console.log('✅ Hello world tool response:');
      console.log(JSON.stringify(toolData, null, 2));
    } else {
      console.log('❌ Hello world tool failed:', toolResponse.status, toolResponse.statusText);
    }

    // Test hello_world tool with name
    console.log('\n3. Testing hello_world tool with name...');
    const namedResponse = await fetch('http://localhost:3000/http', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 3,
        method: 'tools/call',
        params: {
          name: 'hello_world',
          arguments: {
            name: 'Alice'
          }
        }
      })
    });

    if (namedResponse.ok) {
      const namedData = await namedResponse.json();
      console.log('✅ Hello world with name response:');
      console.log(JSON.stringify(namedData, null, 2));
    } else {
      console.log('❌ Hello world with name failed:', namedResponse.status, namedResponse.statusText);
    }

  } catch (error) {
    console.error('❌ Error testing MCP server:', error.message);
    console.log('💡 Make sure the dev server is running with: npm run dev');
  }
}

testMCPServer(); 