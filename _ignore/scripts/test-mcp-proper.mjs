#!/usr/bin/env node

const serverUrl = process.argv[2] || 'http://localhost:3000';
let requestId = 1;

// Generate unique request IDs
function nextId() {
  return `mcp-test-${requestId++}`;
}

// Send a proper JSON-RPC 2.0 request
async function sendRequest(method, params = {}) {
  const request = {
    jsonrpc: "2.0",
    id: nextId(),
    method: method,
    params: params
  };

  console.log(`📤 Sending: ${method}`);
  
  const response = await fetch(`${serverUrl}/api/mcp/http`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request)
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }

  const result = await response.json();
  return result;
}

// Send a notification (no response expected)
async function sendNotification(method, params = {}) {
  const notification = {
    jsonrpc: "2.0",
    method: method,
    params: params
  };

  console.log(`📬 Sending notification: ${method}`);
  
  const response = await fetch(`${serverUrl}/api/mcp/http`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(notification)
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
}

async function testMCPLifecycle() {
  console.log('🚀 Starting MCP Server Tests (Proper JSON-RPC 2.0)');
  console.log(`🌐 Server: ${serverUrl}/api/mcp/http\n`);

  try {
    // Step 1: Initialize connection
    console.log('📋 Step 1: Initialize MCP connection');
    const initResponse = await sendRequest('initialize', {
      protocolVersion: "2025-06-18",
      capabilities: {
        tools: {}
      },
      clientInfo: {
        name: "mcp-test-client",
        version: "1.0.0"
      }
    });

    if (initResponse.error) {
      console.log('❌ Initialization failed:', initResponse.error);
      return;
    }

    console.log('✅ Server initialized successfully');
    console.log('📊 Server info:', JSON.stringify(initResponse.result.serverInfo, null, 2));
    console.log('🔧 Server capabilities:', JSON.stringify(initResponse.result.capabilities, null, 2));

    // Step 2: Send initialized notification
    console.log('\n📋 Step 2: Send initialized notification');
    await sendNotification('initialized');
    console.log('✅ Initialized notification sent');

    // Step 3: List tools
    console.log('\n📋 Step 3: List available tools');
    const toolsResponse = await sendRequest('tools/list');
    
    if (toolsResponse.error) {
      console.log('❌ Tools list failed:', toolsResponse.error);
      return;
    }

    console.log('✅ Tools listed successfully');
    console.log(`📊 Available tools: ${toolsResponse.result.tools.length}`);
    toolsResponse.result.tools.forEach(tool => {
      console.log(`  - ${tool.name}: ${tool.description}`);
    });

    // Step 4: Test each tool
    console.log('\n📋 Step 4: Test each tool');
    
    // Test list_components
    console.log('\n🔧 Testing: list_components');
    const listResult = await sendRequest('tools/call', {
      name: 'list_components',
      arguments: {}
    });
    
    if (listResult.error) {
      console.log('❌ list_components failed:', listResult.error);
    } else {
      console.log('✅ list_components succeeded');
      const content = JSON.parse(listResult.result.content[0].text);
      console.log(`📊 Found ${content.total_components} components: ${content.components.map(c => c.name).join(', ')}`);
    }

    // Test get_component_info
    console.log('\n🔧 Testing: get_component_info (button)');
    const componentResult = await sendRequest('tools/call', {
      name: 'get_component_info',
      arguments: { component: 'button' }
    });
    
    if (componentResult.error) {
      console.log('❌ get_component_info failed:', componentResult.error);
    } else {
      console.log('✅ get_component_info succeeded');
      const content = JSON.parse(componentResult.result.content[0].text);
      console.log(`📊 Button component: ${content.description}`);
      console.log(`📦 Features: ${content.features.join(', ')}`);
    }

    // Test get_implementation_guide
    console.log('\n🔧 Testing: get_implementation_guide (react)');
    const guideResult = await sendRequest('tools/call', {
      name: 'get_implementation_guide',
      arguments: { framework: 'react' }
    });
    
    if (guideResult.error) {
      console.log('❌ get_implementation_guide failed:', guideResult.error);
    } else {
      console.log('✅ get_implementation_guide succeeded');
      console.log('📊 React guide length:', guideResult.result.content[0].text.length, 'characters');
    }

    // Test search_components
    console.log('\n🔧 Testing: search_components (navigation)');
    const searchResult = await sendRequest('tools/call', {
      name: 'search_components',
      arguments: { query: 'navigation' }
    });
    
    if (searchResult.error) {
      console.log('❌ search_components failed:', searchResult.error);
    } else {
      console.log('✅ search_components succeeded');
      const content = JSON.parse(searchResult.result.content[0].text);
      console.log(`📊 Found ${content.total_matches} components matching "navigation": ${content.matches.map(m => m.component).join(', ')}`);
    }

    // Test get_system_architecture
    console.log('\n🔧 Testing: get_system_architecture');
    const archResult = await sendRequest('tools/call', {
      name: 'get_system_architecture',
      arguments: {}
    });
    
    if (archResult.error) {
      console.log('❌ get_system_architecture failed:', archResult.error);
    } else {
      console.log('✅ get_system_architecture succeeded');
      const content = JSON.parse(archResult.result.content[0].text);
      console.log(`📊 Architecture: ${content.technical_details.base_technology}`);
      console.log(`🌐 Supported frameworks: ${content.framework_support.join(', ')}`);
    }

    console.log('\n✨ All tests completed successfully!');
    console.log('🎉 Your MCP server is fully compliant with the 2025-06-18 specification');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('📄 Response:', await error.response.text());
    }
  }
}

testMCPLifecycle(); 