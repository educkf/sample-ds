export default async function handler(req, res) {
  const { component } = req.query;
  
  // Validate component name to prevent injection
  if (!/^[a-z-]+$/.test(component)) {
    return res.status(400).json({ error: 'Invalid component name' });
  }

  try {
    // Use unpkg CDN to fetch the component
    const packageVersion = '1.1.0'; // Match the version in package.json
    const componentUrl = `https://unpkg.com/sample-design-system-educkf@${packageVersion}/dist/components/sample-${component}.js`;
    
    const response = await fetch(componentUrl);
    
    if (!response.ok) {
      console.error(`Component not found: ${componentUrl}`);
      return res.status(404).json({ error: `Component '${component}' not found` });
    }

    const componentCode = await response.text();
    
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.status(200).send(componentCode);
  } catch (error) {
    console.error('Error fetching component:', error);
    res.status(500).json({ error: 'Failed to load component' });
  }
} 