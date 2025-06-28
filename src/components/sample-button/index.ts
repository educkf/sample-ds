// Standalone entry point for sample-button component
// This ensures the component is self-contained and auto-registers
import { SampleButton } from './sample-button.js';

// Auto-register the component when this script loads
if (!customElements.get('sample-button')) {
  customElements.define('sample-button', SampleButton);
}

// Export for programmatic usage
export { SampleButton }; 