import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A sample alert component for the Design System
 *
 * @slot - Main alert content
 * @slot icon - Custom icon for the alert
 * @slot actions - Action buttons or links
 * @csspart alert - The main alert container
 * @csspart icon - The alert icon container
 * @csspart content - The alert content area
 * @csspart actions - The alert actions container
 * @csspart dismiss - The dismiss button
 * @fires sample-alert-dismiss - Fired when the alert is dismissed
 * @fires sample-alert-action - Fired when an action is triggered
 */
@customElement('sample-alert')
export class SampleAlert extends LitElement {
  static styles = css`
    :host {
      display: block;
      
      /* CSS custom properties for theming */
      --sample-alert-bg: var(--sample-surface-color, white);
      --sample-alert-color: var(--sample-text-color, #212529);
      --sample-alert-border: var(--sample-border-color, #dee2e6);
      --sample-alert-border-width: var(--sample-border-width, 1px);
      --sample-alert-border-radius: var(--sample-border-radius, 8px);
      --sample-alert-padding: var(--sample-alert-default-padding, 16px);
      --sample-alert-gap: var(--sample-spacing-sm, 12px);
      --sample-alert-icon-size: var(--sample-icon-size, 20px);
      --sample-alert-transition: var(--sample-transition, all 0.3s ease);
    }

    .alert {
      background: var(--sample-alert-bg);
      color: var(--sample-alert-color);
      border: var(--sample-alert-border-width) solid var(--sample-alert-border);
      border-radius: var(--sample-alert-border-radius);
      padding: var(--sample-alert-padding);
      display: flex;
      align-items: flex-start;
      gap: var(--sample-alert-gap);
      transition: var(--sample-alert-transition);
      position: relative;
      box-shadow: var(--sample-alert-shadow, 0 2px 4px rgba(0,0,0,0.1));
    }

    /* Variant styles */
    .alert.variant-success {
      --sample-alert-bg: var(--sample-alert-success-bg, #d1e7dd);
      --sample-alert-color: var(--sample-alert-success-color, #0f5132);
      --sample-alert-border: var(--sample-alert-success-border, #badbcc);
      --sample-alert-icon-color: var(--sample-alert-success-icon, #198754);
    }

    .alert.variant-warning {
      --sample-alert-bg: var(--sample-alert-warning-bg, #fff3cd);
      --sample-alert-color: var(--sample-alert-warning-color, #664d03);
      --sample-alert-border: var(--sample-alert-warning-border, #ffecb5);
      --sample-alert-icon-color: var(--sample-alert-warning-icon, #f59e0b);
    }

    .alert.variant-error {
      --sample-alert-bg: var(--sample-alert-error-bg, #f8d7da);
      --sample-alert-color: var(--sample-alert-error-color, #721c24);
      --sample-alert-border: var(--sample-alert-error-border, #f5c2c7);
      --sample-alert-icon-color: var(--sample-alert-error-icon, #dc3545);
    }

    .alert.variant-info {
      --sample-alert-bg: var(--sample-alert-info-bg, #d1ecf1);
      --sample-alert-color: var(--sample-alert-info-color, #055160);
      --sample-alert-border: var(--sample-alert-info-border, #b6d4dc);
      --sample-alert-icon-color: var(--sample-alert-info-icon, #0dcaf0);
    }

    .alert.variant-neutral {
      --sample-alert-bg: var(--sample-alert-neutral-bg, #f8f9fa);
      --sample-alert-color: var(--sample-alert-neutral-color, #495057);
      --sample-alert-border: var(--sample-alert-neutral-border, #dee2e6);
      --sample-alert-icon-color: var(--sample-alert-neutral-icon, #6c757d);
    }

    /* Size variants */
    .alert.size-compact {
      --sample-alert-padding: var(--sample-alert-compact-padding, 12px);
      --sample-alert-gap: 8px;
      --sample-alert-icon-size: 16px;
    }

    .alert.size-spacious {
      --sample-alert-padding: var(--sample-alert-spacious-padding, 24px);
      --sample-alert-gap: 16px;
      --sample-alert-icon-size: 24px;
    }

    /* Icon container */
    .icon-container {
      flex-shrink: 0;
      width: var(--sample-alert-icon-size);
      height: var(--sample-alert-icon-size);
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--sample-alert-icon-color);
      font-size: var(--sample-alert-icon-size);
    }

    .default-icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Content area */
    .content {
      flex: 1;
      min-width: 0; /* Allow text to wrap */
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .title {
      font-weight: var(--sample-alert-title-font-weight, 600);
      margin: 0;
      color: var(--sample-alert-title-color, currentColor);
    }

    .message {
      margin: 0;
      line-height: var(--sample-alert-line-height, 1.5);
    }

    /* Actions container */
    .actions {
      flex-shrink: 0;
      display: flex;
      gap: 8px;
      align-items: flex-start;
      margin-top: auto;
    }

    /* Dismiss button */
    .dismiss-button {
      flex-shrink: 0;
      background: none;
      border: none;
      color: var(--sample-alert-dismiss-color, currentColor);
      cursor: pointer;
      padding: 4px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      transition: var(--sample-alert-transition);
      opacity: 0.7;
      position: absolute;
      top: 8px;
      right: 8px;
    }

    .dismiss-button:hover {
      opacity: 1;
      background: var(--sample-alert-dismiss-hover-bg, rgba(0,0,0,0.1));
    }

    .dismiss-button:focus {
      outline: 2px solid var(--sample-alert-focus-ring, #007bff);
      outline-offset: 2px;
      opacity: 1;
    }

    .dismiss-button:active {
      transform: scale(0.95);
    }

    /* Dismissed state */
    :host([dismissed]) {
      display: none;
    }

    /* Hide state for animations */
    :host(.hiding) .alert {
      opacity: 0;
      transform: translateY(-100%);
    }

    /* RTL support */
    :host([dir="rtl"]) .dismiss-button {
      left: 8px;
      right: auto;
    }

    /* High contrast mode support */
    @media (prefers-contrast: high) {
      .alert {
        border-width: 2px;
      }
    }

    /* Reduced motion support */
    @media (prefers-reduced-motion: reduce) {
      .alert {
        transition: none;
      }
      
      .dismiss-button {
        transition: none;
      }
      
      :host(.hiding) .alert {
        transition: none;
      }
    }

    /* Focus within styles */
    .alert:focus-within {
      box-shadow: var(--sample-alert-shadow, 0 2px 4px rgba(0,0,0,0.1)), 
                  0 0 0 2px var(--sample-alert-focus-ring, #007bff);
    }

    /* Responsive design */
    @media (max-width: 480px) {
      .alert {
        flex-direction: column;
        align-items: stretch;
      }

      .dismiss-button {
        position: relative;
        top: auto;
        right: auto;
        align-self: flex-end;
        margin-top: -4px;
      }

      :host([dir="rtl"]) .dismiss-button {
        left: auto;
        align-self: flex-start;
      }
    }
  `;

  /**
   * The alert variant style
   */
  @property({ type: String })
  variant: 'success' | 'warning' | 'error' | 'info' | 'neutral' = 'info';

  /**
   * The alert size
   */
  @property({ type: String })
  size: 'compact' | 'default' | 'spacious' = 'default';

  /**
   * Alert title text
   */
  @property({ type: String })
  title = '';

  /**
   * Whether the alert can be dismissed
   */
  @property({ type: Boolean })
  dismissible = false;

  /**
   * Whether the alert is dismissed
   */
  @property({ type: Boolean, reflect: true })
  dismissed = false;

  /**
   * Custom icon to display (text, emoji, or HTML)
   */
  @property({ type: String })
  icon = '';

  /**
   * Whether to show default icons for variants
   */
  @property({ type: Boolean, attribute: 'show-icon' })
  showIcon = true;

  /**
   * ARIA role for the alert
   */
  @property({ type: String })
  role: 'alert' | 'status' | 'region' = 'alert';

  render() {
    if (this.dismissed) {
      return html``;
    }

    const classes = [
      'alert',
      `variant-${this.variant}`,
      `size-${this.size}`
    ].join(' ');

    const iconToShow = this.icon || (this.showIcon ? this._getDefaultIcon() : '');

    return html`
      <div
        part="alert"
        class=${classes}
        role=${this.role}
        aria-live=${this.role === 'alert' ? 'assertive' : 'polite'}
        aria-atomic="true"
      >
        ${iconToShow ? html`
          <div part="icon" class="icon-container">
            <slot name="icon">
              <div class="default-icon">${iconToShow}</div>
            </slot>
          </div>
        ` : ''}
        
        <div part="content" class="content">
          ${this.title ? html`<div class="title">${this.title}</div>` : ''}
          <div class="message">
            <slot></slot>
          </div>
          
          <slot name="actions" @click=${this._handleActionClick}></slot>
        </div>

        ${this.dismissible ? html`
          <button
            part="dismiss"
            class="dismiss-button"
            type="button"
            aria-label="Dismiss alert"
            @click=${this._handleDismiss}
            @keydown=${this._handleDismissKeydown}
          >
            ✕
          </button>
        ` : ''}
      </div>
    `;
  }

  private _getDefaultIcon(): string {
    switch (this.variant) {
      case 'success':
        return '✓';
      case 'warning':
        return '⚠';
      case 'error':
        return '✕';
      case 'info':
        return 'ℹ';
      case 'neutral':
        return '◐';
      default:
        return 'ℹ';
    }
  }

  private _handleDismiss() {
    this._dismiss();
  }

  private _handleDismissKeydown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      this._dismiss();
    }
  }

  private _handleActionClick(event: Event) {
    const target = event.target as HTMLElement;
    if (target.closest('[data-action]')) {
      const action = target.closest('[data-action]')?.getAttribute('data-action');
      this._dispatchActionEvent(action || 'click', target);
    }
  }

  private _dismiss() {
    // Add hiding animation class
    this.classList.add('hiding');

    // Dispatch dismiss event
    this.dispatchEvent(new CustomEvent('sample-alert-dismiss', {
      bubbles: true,
      composed: true,
      detail: {
        variant: this.variant,
        title: this.title,
        timestamp: Date.now()
      }
    }));

    // Remove after animation
    setTimeout(() => {
      this.dismissed = true;
      this.classList.remove('hiding');
    }, 300);
  }

  private _dispatchActionEvent(action: string, target: HTMLElement) {
    this.dispatchEvent(new CustomEvent('sample-alert-action', {
      bubbles: true,
      composed: true,
      detail: {
        action,
        target,
        variant: this.variant,
        title: this.title,
        timestamp: Date.now()
      }
    }));
  }

  /**
   * Show the alert (if it was dismissed)
   */
  show() {
    this.dismissed = false;
    this.classList.remove('hiding');
  }

  /**
   * Hide the alert with animation
   */
  hide() {
    this._dismiss();
  }

  /**
   * Toggle the alert visibility
   */
  toggle() {
    if (this.dismissed) {
      this.show();
    } else {
      this.hide();
    }
  }

  /**
   * Focus the dismiss button (if dismissible)
   */
  focus() {
    const dismissButton = this.shadowRoot?.querySelector('.dismiss-button') as HTMLButtonElement;
    if (dismissButton) {
      dismissButton.focus();
    } else {
      super.focus();
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-alert': SampleAlert;
  }
} 