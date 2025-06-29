export default function handler(req, res) {
  const { component } = req.query;
  
  // Validate component name to prevent path traversal
  if (!/^[a-z-]+$/.test(component)) {
    return res.status(400).json({ error: 'Invalid component name' });
  }

  // Component examples mapping
  const componentExamples = {
    'accordion': `
      <sample-accordion>
        <sample-accordion-item title="Getting Started" open>
          <p>Welcome to our design system! This section is open by default.</p>
          <p>You can click on the header to collapse it.</p>
        </sample-accordion-item>
        <sample-accordion-item title="Advanced Features">
          <p>Click here to learn about advanced features.</p>
          <ul>
            <li>Keyboard navigation</li>
            <li>Accessibility support</li>
            <li>Smooth animations</li>
          </ul>
        </sample-accordion-item>
        <sample-accordion-item title="API Reference">
          <p>Complete API documentation and examples.</p>
          <code>title="Section Title" open</code>
        </sample-accordion-item>
      </sample-accordion>`,
    'button': `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <sample-button variant="primary">Primary Button</sample-button>
        <sample-button variant="secondary">Secondary</sample-button>
        <sample-button variant="outline">Outline</sample-button>
        <sample-button disabled>Disabled</sample-button>
      </div>`,
    'card': `
      <div style="display: grid; gap: 16px; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
        <sample-card>
          <h3>Basic Card</h3>
          <p>This is a simple card with some content.</p>
        </sample-card>
        <sample-card>
          <h3>Interactive Card</h3>
          <p>Cards can contain any HTML content.</p>
          <sample-button variant="primary">Action</sample-button>
        </sample-card>
      </div>`,
    'alert': `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <sample-alert type="info">This is an information alert.</sample-alert>
        <sample-alert type="success">Operation completed successfully!</sample-alert>
        <sample-alert type="warning">Please check your input.</sample-alert>
        <sample-alert type="error">An error occurred. Please try again.</sample-alert>
      </div>`,
    'modal': `
      <div>
        <sample-button onclick="document.getElementById('demo-modal').open = true" variant="primary">
          Open Modal
        </sample-button>
        
        <sample-modal id="demo-modal">
          <div slot="header">
            <h3>Interactive Modal Demo</h3>
            <p>This modal demonstrates the interactive capabilities</p>
          </div>
          
          <div style="padding: 16px 0;">
            <p>Welcome to the modal playground! This is a fully functional modal that you can interact with.</p>
            <p>Try clicking outside the modal or pressing the Escape key to close it.</p>
            
            <div style="margin: 16px 0;">
              <label for="demo-input" style="display: block; margin-bottom: 8px; font-weight: 500;">Sample Input:</label>
              <input type="text" id="demo-input" placeholder="Type something here..." style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;" />
            </div>
          </div>
          
          <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
            <sample-button onclick="document.getElementById('demo-modal').open = false" variant="secondary">
              Cancel
            </sample-button>
            <sample-button onclick="alert('Modal action confirmed!'); document.getElementById('demo-modal').open = false" variant="primary">
              Confirm
            </sample-button>
          </div>
        </sample-modal>
      </div>`,
    'breadcrumb': `
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #6b7280;">Basic Breadcrumb</h4>
          <sample-breadcrumb>
            <sample-breadcrumb-item href="#" onclick="alert('Navigate to Home'); return false;">Home</sample-breadcrumb-item>
            <sample-breadcrumb-item href="#" onclick="alert('Navigate to Products'); return false;">Products</sample-breadcrumb-item>
            <sample-breadcrumb-item href="#" onclick="alert('Navigate to Electronics'); return false;">Electronics</sample-breadcrumb-item>
            <sample-breadcrumb-item>Current Page</sample-breadcrumb-item>
          </sample-breadcrumb>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #6b7280;">With Icons & Custom Separator</h4>
          <sample-breadcrumb separator="→">
            <sample-breadcrumb-item href="#" icon="🏠" onclick="alert('Navigate to Home'); return false;">Home</sample-breadcrumb-item>
            <sample-breadcrumb-item href="#" icon="📚" onclick="alert('Navigate to Documentation'); return false;">Documentation</sample-breadcrumb-item>
            <sample-breadcrumb-item href="#" icon="🧩" onclick="alert('Navigate to Components'); return false;">Components</sample-breadcrumb-item>
            <sample-breadcrumb-item icon="🍞">Breadcrumb</sample-breadcrumb-item>
          </sample-breadcrumb>
        </div>
        
        <div>
          <h4 style="margin: 0 0 12px 0; font-size: 14px; color: #6b7280;">E-commerce Navigation</h4>
          <sample-breadcrumb separator="•">
            <sample-breadcrumb-item href="#" onclick="alert('Navigate to Home'); return false;">Home</sample-breadcrumb-item>
            <sample-breadcrumb-item href="#" onclick="alert('Navigate to Category'); return false;">Electronics</sample-breadcrumb-item>
            <sample-breadcrumb-item href="#" onclick="alert('Navigate to Subcategory'); return false;">Laptops</sample-breadcrumb-item>
            <sample-breadcrumb-item href="#" onclick="alert('Navigate to Brand'); return false;">Gaming</sample-breadcrumb-item>
            <sample-breadcrumb-item>MacBook Pro</sample-breadcrumb-item>
          </sample-breadcrumb>
        </div>
      </div>`
  };

  const componentHtml = componentExamples[component] || `<sample-${component}>Example ${component} component</sample-${component}>`;

  // Create complete HTML page with web components
  const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${component} Playground</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            margin: 0;
            padding: 24px;
            background: #ffffff;
            color: #374151;
            line-height: 1.6;
        }
        .playground-container {
            max-width: 100%;
            margin: 0;
        }
        .demo-label {
            margin: 0 0 20px 0;
            font-size: 12px;
            font-weight: 600;
            color: #9ca3af;
            text-transform: uppercase;
            letter-spacing: 0.5px;
        }
    </style>
</head>
<body>
    <div class="playground-container">
        <p class="demo-label">Interactive ${component} Component</p>
        ${componentHtml}
    </div>

    <!-- Load the web components library -->
    <script type="module">
        // Load the design system components
        try {
            await import('/api/ds-components/${component}');
            console.log('${component} component loaded successfully');
        } catch (error) {
            console.error('Error loading ${component} component:', error);
            document.body.innerHTML = '<div style="padding: 20px; text-align: center; color: #dc2626;">Error loading component: ' + error.message + '</div>';
        }
    </script>
</body>
</html>`;

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 'no-cache');
  res.status(200).send(html);
} 