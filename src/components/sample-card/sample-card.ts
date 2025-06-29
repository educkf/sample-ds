import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A sample card component for the Design System
 *
 * @slot - Main content of the card
 * @slot header - Header content (optional)
 * @slot footer - Footer content (optional)
 * @csspart card - The main card container
 * @csspart header - The card header section
 * @csspart body - The card body section
 * @csspart footer - The card footer section
 * @fires sample-card-click - Fired when the card is clicked (if clickable)
 */
@customElement('sample-card')
export class SampleCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      
      /* CSS custom properties for theming */
      --sample-card-bg: var(--sample-surface-color, white);
      --sample-card-color: var(--sample-text-color, #212529);
      --sample-card-border: var(--sample-border-color, #dee2e6);
      --sample-card-border-width: var(--sample-border-width, 1px);
      --sample-card-border-radius: var(--sample-border-radius, 8px);
      --sample-card-shadow: var(--sample-card-shadow-default, 0 2px 4px rgba(0,0,0,0.1));
      --sample-card-padding: var(--sample-spacing-lg, 16px);
      --sample-card-gap: var(--sample-spacing-md, 12px);
    }

    .card {
      background: var(--sample-card-bg);
      color: var(--sample-card-color);
      border: var(--sample-card-border-width) solid var(--sample-card-border);
      border-radius: var(--sample-card-border-radius);
      box-shadow: var(--sample-card-shadow);
      overflow: hidden;
      transition: all 0.2s ease-in-out;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    .card.clickable {
      cursor: pointer;
    }

    .card.clickable:hover {
      box-shadow: var(--sample-card-shadow-hover, 0 4px 12px rgba(0,0,0,0.15));
      transform: translateY(-2px);
    }

    .card.clickable:focus-within {
      outline: 2px solid var(--sample-card-focus-ring, #007bff);
      outline-offset: 2px;
    }

    .card-header {
      padding: var(--sample-card-padding);
      border-bottom: var(--sample-card-border-width) solid var(--sample-card-border);
      background: var(--sample-card-header-bg, transparent);
      font-weight: var(--sample-card-header-font-weight, 600);
    }

    .card-body {
      padding: var(--sample-card-padding);
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: var(--sample-card-gap);
    }

    .card-footer {
      padding: var(--sample-card-padding);
      border-top: var(--sample-card-border-width) solid var(--sample-card-border);
      background: var(--sample-card-footer-bg, transparent);
      margin-top: auto;
    }

    /* Variant styles */
    .card.variant-elevated {
      --sample-card-shadow: var(--sample-card-shadow-elevated, 0 4px 12px rgba(0,0,0,0.15));
      border: none;
    }

    .card.variant-outlined {
      --sample-card-shadow: none;
      --sample-card-border-width: 2px;
    }

    .card.variant-filled {
      --sample-card-bg: var(--sample-card-filled-bg, #f8f9fa);
      --sample-card-shadow: none;
      border: none;
    }

    /* Size variants */
    .card.size-compact {
      --sample-card-padding: var(--sample-spacing-sm, 8px);
      --sample-card-gap: var(--sample-spacing-sm, 8px);
    }

    .card.size-spacious {
      --sample-card-padding: var(--sample-spacing-xl, 24px);
      --sample-card-gap: var(--sample-spacing-lg, 16px);
    }

    /* Hide sections when slots are empty */
    .card-header:not([has-content]) {
      display: none;
    }

    .card-footer:not([has-content]) {
      display: none;
    }
  `;

  /**
   * The card variant style
   */
  @property({ type: String })
  variant: 'default' | 'elevated' | 'outlined' | 'filled' = 'default';

  /**
   * The card size
   */
  @property({ type: String })
  size: 'compact' | 'default' | 'spacious' = 'default';

  /**
   * Whether the card is clickable
   */
  @property({ type: Boolean })
  clickable = false;

  /**
   * Whether the card is disabled (only applies if clickable)
   */
  @property({ type: Boolean })
  disabled = false;

  render() {
    const classes = [
      'card',
      `variant-${this.variant}`,
      `size-${this.size}`,
      this.clickable && !this.disabled ? 'clickable' : ''
    ].filter(Boolean).join(' ');

    return html`
      <div
        part="card"
        class=${classes}
        tabindex=${this.clickable && !this.disabled ? '0' : '-1'}
        role=${this.clickable ? 'button' : 'article'}
        aria-disabled=${this.disabled}
        @click=${this._handleClick}
        @keydown=${this._handleKeydown}
      >
        <div part="header" class="card-header">
          <slot name="header"></slot>
        </div>
        
        <div part="body" class="card-body">
          <slot></slot>
        </div>
        
        <div part="footer" class="card-footer">
          <slot name="footer"></slot>
        </div>
      </div>
    `;
  }

  private _handleClick(_event?: Event) {
    if (!this.clickable || this.disabled) {
      return;
    }

    this.dispatchEvent(new CustomEvent('sample-card-click', {
      bubbles: true,
      composed: true,
      detail: {
        variant: this.variant,
        size: this.size,
        timestamp: Date.now()
      }
    }));
  }

  private _handleKeydown(event: KeyboardEvent) {
    if (!this.clickable || this.disabled) {
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._handleClick(event);
    }
  }

  // Update slot visibility based on content
  firstUpdated() {
    this._updateSlotVisibility();

    // Listen for slot changes
    const slots = this.shadowRoot?.querySelectorAll('slot');
    slots?.forEach(slot => {
      slot.addEventListener('slotchange', () => this._updateSlotVisibility());
    });
  }

  private _updateSlotVisibility() {
    const headerSlot = this.shadowRoot?.querySelector('slot[name="header"]') as HTMLSlotElement;
    const footerSlot = this.shadowRoot?.querySelector('slot[name="footer"]') as HTMLSlotElement;
    const headerDiv = this.shadowRoot?.querySelector('.card-header');
    const footerDiv = this.shadowRoot?.querySelector('.card-footer');

    if (headerSlot && headerDiv) {
      const hasHeaderContent = headerSlot.assignedNodes().length > 0;
      if (hasHeaderContent) {
        headerDiv.setAttribute('has-content', '');
      } else {
        headerDiv.removeAttribute('has-content');
      }
    }

    if (footerSlot && footerDiv) {
      const hasFooterContent = footerSlot.assignedNodes().length > 0;
      if (hasFooterContent) {
        footerDiv.setAttribute('has-content', '');
      } else {
        footerDiv.removeAttribute('has-content');
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-card': SampleCard;
  }
} 