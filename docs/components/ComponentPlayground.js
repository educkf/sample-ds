import React from 'react';

const ComponentPlayground = ({ 
  component, 
  title = 'Interactive Example', 
  description, 
  code, 
  css, 
  height = '200px' 
}) => {
  return (
    <div style={{
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#fef3c7',
      border: '2px solid #f59e0b',
      borderRadius: '8px',
      color: '#92400e'
    }}>
      <h3 style={{ margin: '0 0 10px 0' }}>🎮 Playground Component Test</h3>
      <p style={{ margin: '0 0 10px 0' }}>Component: {component}</p>
      <p style={{ margin: '0 0 10px 0' }}>Title: {title}</p>
      <p style={{ margin: '0' }}>If you see this yellow box, the ComponentPlayground is being rendered!</p>
      {description && <p style={{ margin: '10px 0 0 0', fontSize: '14px' }}>Description: {description}</p>}
    </div>
  );
};

export default ComponentPlayground; 