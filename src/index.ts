// Main entry point for the Design System library
export { SampleButton } from './components/sample-button/index.js';
export { SampleCard } from './components/sample-card/index.js';
export { SampleAccordion, SampleAccordionItem } from './components/sample-accordion/index.js';
export { SampleAlert } from './components/sample-alert/index.js';
export { SampleBreadcrumb, SampleBreadcrumbItem } from './components/sample-breadcrumb/index.js';
export { SampleModal } from './components/sample-modal/index.js';

// Auto-register all components for standalone usage
import './components/sample-button/index.js';
import './components/sample-alert/index.js';
import './components/sample-card/index.js';
import './components/sample-accordion/index.js';
import './components/sample-breadcrumb/index.js';
import './components/sample-modal/index.js'; 