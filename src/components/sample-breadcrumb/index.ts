// Standalone entry point for sample-breadcrumb component
// This ensures the component is self-contained and auto-registers
import { SampleBreadcrumb, SampleBreadcrumbItem } from './sample-breadcrumb.js';

// Auto-register the components when this script loads
if (!customElements.get('sample-breadcrumb')) {
  customElements.define('sample-breadcrumb', SampleBreadcrumb);
}

if (!customElements.get('sample-breadcrumb-item')) {
  customElements.define('sample-breadcrumb-item', SampleBreadcrumbItem);
}

// Export for programmatic usage
export { SampleBreadcrumb, SampleBreadcrumbItem }; 