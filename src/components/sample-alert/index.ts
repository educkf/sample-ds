// Standalone entry point for sample-alert component
// This ensures the component is self-contained and auto-registers
import { SampleAlert } from './sample-alert.js';

// Auto-register the component when this script loads
if (!customElements.get('sample-alert')) {
  customElements.define('sample-alert', SampleAlert);
}

// Export for programmatic usage
export { SampleAlert }; 