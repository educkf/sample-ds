# Using Sample Design System with Script Tags

This shows how to use the Design System components directly in HTML without any build process.

## Individual Components (Recommended)

Use individual component files for optimal loading:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <!-- Use the component -->
  <sample-button variant="primary" size="large">
    Click me!
  </sample-button>

  <!-- Load the component (only ~21KB) -->
  <script src="https://unpkg.com/sample-design-system/dist/components/sample-button.js"></script>
  
  <!-- Add event listeners -->
  <script>
    document.querySelector('sample-button').addEventListener('sample-click', (e) => {
      console.log('Button clicked!', e.detail);
    });
  </script>
</body>
</html>
```

## Complete Library

Load all components at once:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My App</title>
</head>
<body>
  <!-- Use any component -->
  <sample-button variant="primary">Primary Button</sample-button>
  <sample-button variant="secondary">Secondary Button</sample-button>
  
  <!-- Future components will work automatically -->
  <!-- <sample-input placeholder="Enter text..."></sample-input> -->

  <!-- Load complete library -->
  <script src="https://unpkg.com/sample-design-system/dist/standalone/index.js"></script>
</body>
</html>
```

## CDN Usage

### Individual Components

```html
<!-- From unpkg -->
<script src="https://unpkg.com/sample-design-system@latest/dist/components/sample-button.js"></script>

<!-- From jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/sample-design-system@latest/dist/components/sample-button.js"></script>

<!-- From esm.sh -->
<script src="https://esm.sh/sample-design-system/dist/components/sample-button.js"></script>
```

### Complete Library

```html
<!-- From unpkg -->
<script src="https://unpkg.com/sample-design-system@latest/dist/standalone/index.js"></script>

<!-- From jsdelivr -->
<script src="https://cdn.jsdelivr.net/npm/sample-design-system@latest/dist/standalone/index.js"></script>
```

## Local Development

Download the files and host them locally:

```html
<!-- Local files -->
<script src="./js/sample-button.js"></script>
```

## Advanced Usage

### Dynamic Loading

```html
<script>
  // Load components on demand
  async function loadButton() {
    await import('https://unpkg.com/sample-design-system/dist/components/sample-button.js');
    
    // Component is now available
    const button = document.createElement('sample-button');
    button.textContent = 'Dynamically loaded!';
    document.body.appendChild(button);
  }
  
  // Load when needed
  document.getElementById('load-btn').addEventListener('click', loadButton);
</script>
```

### Progressive Enhancement

```html
<!-- Fallback for when JavaScript is disabled -->
<noscript>
  <button class="fallback-button">Click me!</button>
  <style>
    .fallback-button {
      background: #007bff;
      color: white;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
    }
  </style>
</noscript>

<!-- Enhanced with web component -->
<sample-button variant="primary">
  Click me!
</sample-button>

<script src="./js/sample-button.js"></script>
```

## Theming

Customize components with CSS:

```html
<style>
  /* Global theming */
  :root {
    --sample-button-bg: #28a745;
    --sample-button-color: white;
    --sample-button-radius: 8px;
  }
  
  /* Custom button styles */
  .hero-button {
    --sample-button-bg: linear-gradient(45deg, #ff6b6b, #4ecdc4);
    --sample-button-color: white;
    --sample-button-padding: 16px 32px;
    --sample-button-font-size: 18px;
  }
</style>

<sample-button class="hero-button">
  Hero Button
</sample-button>
```

## Browser Support

- ✅ Chrome 61+
- ✅ Firefox 63+
- ✅ Safari 13+
- ✅ Edge 79+

For older browsers, you can use polyfills:

```html
<script src="https://unpkg.com/@webcomponents/webcomponentsjs@2/webcomponents-bundle.js"></script>
<script src="./js/sample-button.js"></script>
``` 