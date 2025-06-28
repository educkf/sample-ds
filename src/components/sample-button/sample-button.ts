import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A sample button component for the Design System
 *
 * @slot - Content to display inside the button
 * @csspart button - The button element
 */
@customElement('sample-button')
export class SampleButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }

    .button {
      background-color: var(--sample-button-bg, #007bff);
      color: var(--sample-button-color, white);
      border: 1px solid var(--sample-button-border, #007bff);
      border-radius: var(--sample-button-radius, 4px);
      padding: var(--sample-button-padding, 8px 16px);
      font-size: var(--sample-button-font-size, 14px);
      font-family: var(--sample-button-font-family, inherit);
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      outline: none;
    }

    .button:hover {
      background-color: var(--sample-button-bg-hover, #0056b3);
      border-color: var(--sample-button-border-hover, #0056b3);
    }

    .button:focus {
      box-shadow: 0 0 0 2px var(--sample-button-focus-ring, rgba(0, 123, 255, 0.25));
    }

    .button:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .button.variant-secondary {
      background-color: var(--sample-button-secondary-bg, transparent);
      color: var(--sample-button-secondary-color, #007bff);
      border-color: var(--sample-button-secondary-border, #007bff);
    }

    .button.variant-secondary:hover {
      background-color: var(--sample-button-secondary-bg-hover, #007bff);
      color: var(--sample-button-secondary-color-hover, white);
    }

    .button.size-small {
      padding: var(--sample-button-small-padding, 4px 8px);
      font-size: var(--sample-button-small-font-size, 12px);
    }

    .button.size-large {
      padding: var(--sample-button-large-padding, 12px 24px);
      font-size: var(--sample-button-large-font-size, 16px);
    }
  `;

  /**
   * The button variant
   */
  @property({ type: String })
  variant: 'primary' | 'secondary' = 'primary';

  /**
   * The button size
   */
  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * Whether the button is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * The button type
   */
  @property({ type: String })
  type: 'button' | 'submit' | 'reset' = 'button';

  render() {
    const classes = [
      'button',
      `variant-${this.variant}`,
      `size-${this.size}`
    ].join(' ');

    return html`
      <button
        part="button"
        class=${classes}
        type=${this.type}
        ?disabled=${this.disabled}
        @click=${this._handleClick}
      >
        <slot></slot>
      </button>
    `;
  }

  private _handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    // Dispatch a custom event
    this.dispatchEvent(new CustomEvent('sample-click', {
      bubbles: true,
      composed: true,
      detail: { variant: this.variant, size: this.size }
    }));
  }
} 