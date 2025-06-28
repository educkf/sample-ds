// Standalone entry point for sample-card component
// This ensures the component is self-contained and auto-registers
import { SampleCard } from './sample-card.js';

// Auto-register the component when this script loads
if (!customElements.get('sample-card')) {
  customElements.define('sample-card', SampleCard);
}

// Export for programmatic usage
export { SampleCard }; 