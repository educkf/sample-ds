import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { component } = req.query;
  
  // Validate component name to prevent path traversal
  if (!/^[a-z-]+$/.test(component)) {
    return res.status(400).json({ error: 'Invalid component name' });
  }

  const componentPath = path.join(
    process.cwd(), 
    'node_modules', 
    'sample-design-system-educkf', 
    'dist', 
    'components', 
    `sample-${component}.js`
  );

  try {
    if (!fs.existsSync(componentPath)) {
      return res.status(404).json({ error: 'Component not found' });
    }

    const componentCode = fs.readFileSync(componentPath, 'utf8');
    
    res.setHeader('Content-Type', 'application/javascript');
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.status(200).send(componentCode);
  } catch (error) {
    console.error('Error serving component:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
} 