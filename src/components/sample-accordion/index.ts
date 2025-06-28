// Standalone entry point for sample-accordion component
// This ensures the component is self-contained and auto-registers
import { SampleAccordion, SampleAccordionItem } from './sample-accordion.js';

// Auto-register the components when this script loads
if (!customElements.get('sample-accordion')) {
  customElements.define('sample-accordion', SampleAccordion);
}

if (!customElements.get('sample-accordion-item')) {
  customElements.define('sample-accordion-item', SampleAccordionItem);
}

// Export for programmatic usage
export { SampleAccordion, SampleAccordionItem }; 