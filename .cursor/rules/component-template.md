# Design System Component Template

Replace `[name]` and `[Name]` with your component name (e.g., button, Button).

```typescript
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * [Component Description] for the Design System
 *
 * @slot - Content to display inside the component
 * @csspart component - The main component element
 * @fires component-event - Fired when user interacts with component
 */
@customElement('sample-[name]')
export class Sample[Name] extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      
      /* CSS custom properties for theming */
      --sample-[name]-bg: var(--sample-primary-color, #007bff);
      --sample-[name]-color: var(--sample-text-color, white);
      --sample-[name]-padding: var(--sample-spacing-md, 8px 16px);
      --sample-[name]-radius: var(--sample-border-radius, 4px);
    }

    .component {
      background: var(--sample-[name]-bg);
      color: var(--sample-[name]-color);
      padding: var(--sample-[name]-padding);
      border-radius: var(--sample-[name]-radius);
      border: none;
      cursor: pointer;
      font-family: inherit;
      transition: opacity 0.2s ease;
    }

    .component:hover {
      opacity: 0.9;
    }

    .component:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    /* Variant styles */
    .component--primary {
      --sample-[name]-bg: var(--sample-primary-color, #007bff);
    }

    .component--secondary {
      --sample-[name]-bg: var(--sample-secondary-color, #6c757d);
    }
  `;

  /**
   * The component variant
   */
  @property()
  variant: 'primary' | 'secondary' = 'primary';

  /**
   * Whether the component is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  render() {
    return html`
      <div
        class="component component--${this.variant}"
        part="component"
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </div>
    `;
  }

  private _handleClick() {
    if (this.disabled) return;
    
    this.dispatchEvent(new CustomEvent('component-event', {
      detail: { variant: this.variant },
      bubbles: true
    }));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-[name]': Sample[Name];
  }
}
```

## Index File Template

Create `src/components/sample-[name]/index.ts`:

```typescript
import './sample-[name].js';
export { Sample[Name] } from './sample-[name].js';
``` 