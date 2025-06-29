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