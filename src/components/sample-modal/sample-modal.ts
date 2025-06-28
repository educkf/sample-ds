import { LitElement, html, css, nothing } from 'lit';
import { customElement, property, state, query } from 'lit/decorators.js';

/**
 * Modal Component
 * 
 * A versatile modal dialog component with overlay, customizable content sections,
 * and comprehensive accessibility features.
 * 
 * @element sample-modal
 * 
 * @fires sample-modal-open - Fired when modal opens
 * @fires sample-modal-close - Fired when modal closes  
 * @fires sample-modal-cancel - Fired when modal is cancelled (ESC or backdrop click)
 * 
 * @slot header - Content for the modal header
 * @slot - Main content for the modal body
 * @slot footer - Content for the modal footer
 * 
 * @csspart overlay - The modal overlay/backdrop
 * @csspart modal - The main modal container
 * @csspart header - The modal header section
 * @csspart body - The modal body section
 * @csspart footer - The modal footer section
 * @csspart close-button - The close button
 */
@customElement('sample-modal')
export class SampleModal extends LitElement {
  static styles = css`
    :host {
      --sample-modal-overlay-bg: rgba(0, 0, 0, 0.5);
      --sample-modal-bg: white;
      --sample-modal-border-radius: 8px;
      --sample-modal-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
      --sample-modal-padding: 24px;
      --sample-modal-header-border: 1px solid #e9ecef;
      --sample-modal-footer-border: 1px solid #e9ecef;
      --sample-modal-close-color: #6c757d;
      --sample-modal-close-hover-color: #495057;
      --sample-modal-close-bg: transparent;
      --sample-modal-close-hover-bg: #f8f9fa;
      --sample-modal-animation-duration: 0.3s;
      --sample-modal-width-small: 400px;
      --sample-modal-width-medium: 600px;
      --sample-modal-width-large: 800px;
      --sample-modal-width-xl: 1000px;
      --sample-modal-max-height: 80vh;
      --sample-modal-z-index: 1050;
      
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      z-index: var(--sample-modal-z-index);
      pointer-events: none;
    }

    :host([open]) {
      display: flex;
      pointer-events: auto;
    }

    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: var(--sample-modal-overlay-bg);
      opacity: 0;
      transition: opacity var(--sample-modal-animation-duration) ease;
      cursor: pointer;
    }

    :host([open]) .overlay {
      opacity: 1;
    }

    .modal {
      position: relative;
      margin: auto;
      background: var(--sample-modal-bg);
      border-radius: var(--sample-modal-border-radius);
      box-shadow: var(--sample-modal-shadow);
      max-height: var(--sample-modal-max-height);
      display: flex;
      flex-direction: column;
      transform: scale(0.8) translateY(-50px);
      opacity: 0;
      transition: all var(--sample-modal-animation-duration) ease;
      pointer-events: auto;
      cursor: default;
      max-width: 90vw;
      width: 100%;
    }

    :host([open]) .modal {
      transform: scale(1) translateY(0);
      opacity: 1;
    }

    /* Size variants */
    :host([size="small"]) .modal {
      width: var(--sample-modal-width-small);
    }

    :host([size="medium"]) .modal,
    :host(:not([size])) .modal {
      width: var(--sample-modal-width-medium);
    }

    :host([size="large"]) .modal {
      width: var(--sample-modal-width-large);
    }

    :host([size="xl"]) .modal {
      width: var(--sample-modal-width-xl);
    }

    :host([size="full"]) .modal {
      width: 95vw;
      height: 95vh;
      max-height: 95vh;
      margin: 2.5vh auto;
    }

    /* Variant styles */
    :host([variant="centered"]) {
      align-items: center;
      justify-content: center;
    }

    :host([variant="slideup"]) .modal {
      margin-top: auto;
      margin-bottom: 0;
      transform: translateY(100%);
      border-radius: var(--sample-modal-border-radius) var(--sample-modal-border-radius) 0 0;
    }

    :host([variant="slideup"][open]) .modal {
      transform: translateY(0);
    }

    :host([variant="slidedown"]) .modal {
      margin-top: 0;
      margin-bottom: auto;
      transform: translateY(-100%);
      border-radius: 0 0 var(--sample-modal-border-radius) var(--sample-modal-border-radius);
    }

    :host([variant="slidedown"][open]) .modal {
      transform: translateY(0);
    }

    .header {
      padding: var(--sample-modal-padding);
      border-bottom: var(--sample-modal-header-border);
      display: flex;
      align-items: center;
      justify-content: space-between;
      min-height: 60px;
      flex-shrink: 0;
    }

    .header.no-border {
      border-bottom: none;
    }

    .header-content {
      flex: 1;
      margin-right: 16px;
    }

    .close-button {
      background: var(--sample-modal-close-bg);
      border: none;
      color: var(--sample-modal-close-color);
      cursor: pointer;
      padding: 8px;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 32px;
      height: 32px;
      font-size: 18px;
      transition: all 0.2s ease;
      flex-shrink: 0;
    }

    .close-button:hover {
      background: var(--sample-modal-close-hover-bg);
      color: var(--sample-modal-close-hover-color);
    }

    .close-button:focus {
      outline: 2px solid #007bff;
      outline-offset: 2px;
    }

    .body {
      padding: var(--sample-modal-padding);
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

    .footer {
      padding: var(--sample-modal-padding);
      border-top: var(--sample-modal-footer-border);
      flex-shrink: 0;
      min-height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      gap: 12px;
    }

    .footer.no-border {
      border-top: none;
    }

    .footer.center {
      justify-content: center;
    }

    .footer.start {
      justify-content: flex-start;
    }

    .footer.between {
      justify-content: space-between;
    }

    /* Hide sections without content */
    .header:not(.has-content):not(.always-show),
    .footer:not(.has-content):not(.always-show) {
      display: none;
    }

    /* Mobile responsiveness */
    @media (max-width: 768px) {
      .modal {
        margin: 16px;
        max-width: calc(100vw - 32px);
        max-height: calc(100vh - 32px);
      }

      :host([size="full"]) .modal {
        width: calc(100vw - 16px);
        height: calc(100vh - 16px);
        margin: 8px;
      }

      .header,
      .body,
      .footer {
        padding: 16px;
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host {
        --sample-modal-bg: #2d3748;
        --sample-modal-overlay-bg: rgba(0, 0, 0, 0.7);
        --sample-modal-header-border: 1px solid #4a5568;
        --sample-modal-footer-border: 1px solid #4a5568;
        --sample-modal-close-color: #a0aec0;
        --sample-modal-close-hover-color: #f7fafc;
        --sample-modal-close-hover-bg: #4a5568;
      }
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      :host {
        --sample-modal-overlay-bg: rgba(0, 0, 0, 0.8);
        --sample-modal-shadow: 0 0 0 2px currentColor;
        --sample-modal-header-border: 2px solid currentColor;
        --sample-modal-footer-border: 2px solid currentColor;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      :host {
        --sample-modal-animation-duration: 0.1s;
      }
      
      .overlay,
      .modal {
        transition: none;
      }
    }

    /* Print styles */
    @media print {
      :host {
        position: static !important;
        display: block !important;
      }
      
      .overlay {
        display: none;
      }
      
      .modal {
        position: static;
        transform: none;
        opacity: 1;
        box-shadow: none;
        border: 2px solid #000;
      }
    }
  `;

  /**
   * Whether the modal is open
   */
  @property({ type: Boolean, reflect: true })
  open = false;

  /**
   * Size of the modal
   */
  @property({ reflect: true })
  size: 'small' | 'medium' | 'large' | 'xl' | 'full' = 'medium';

  /**
   * Visual variant of the modal
   */
  @property({ reflect: true })
  variant: 'default' | 'centered' | 'slideup' | 'slidedown' = 'default';

  /**
   * Whether to show close button in header
   */
  @property({ type: Boolean, attribute: 'show-close' })
  showClose = true;

  /**
   * Whether clicking backdrop closes the modal
   */
  @property({ type: Boolean, attribute: 'backdrop-dismiss' })
  backdropDismiss = true;

  /**
   * Whether ESC key closes the modal
   */
  @property({ type: Boolean, attribute: 'escape-dismiss' })
  escapeDismiss = true;

  /**
   * Footer alignment
   */
  @property({ attribute: 'footer-align' })
  footerAlign: 'start' | 'center' | 'end' | 'between' = 'end';

  /**
   * Whether to always show header even without content
   */
  @property({ type: Boolean, attribute: 'always-show-header' })
  alwaysShowHeader = false;

  /**
   * Whether to always show footer even without content
   */
  @property({ type: Boolean, attribute: 'always-show-footer' })
  alwaysShowFooter = false;

  /**
   * Custom close button label for accessibility
   */
  @property({ attribute: 'close-label' })
  closeLabel = 'Close modal';

  @query('.modal')
  private _modalElement!: HTMLElement;

  @state()
  private _hasHeaderContent = false;

  @state()
  private _hasFooterContent = false;

  private _previousActiveElement: Element | null = null;
  private _keydownHandler = this._handleKeydown.bind(this);

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('keydown', this._keydownHandler);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('keydown', this._keydownHandler);
    this._restoreBodyScroll();
    this._restoreFocus();
  }

  updated(changedProperties: Map<string, any>) {
    super.updated(changedProperties);

    if (changedProperties.has('open')) {
      if (this.open) {
        this._handleOpen();
      } else {
        this._handleClose();
      }
    }
  }

  /**
   * Opens the modal
   */
  show() {
    if (!this.open) {
      this.open = true;
    }
  }

  /**
   * Closes the modal
   */
  hide() {
    if (this.open) {
      this.open = false;
    }
  }

  /**
   * Toggles the modal open/closed state
   */
  toggle() {
    this.open = !this.open;
  }

  /**
   * Focuses the modal for accessibility
   */
  focus() {
    if (this._modalElement) {
      this._modalElement.focus();
    }
  }

  private _handleOpen() {
    this._saveFocus();
    this._lockBodyScroll();

    // Focus the modal after animation
    setTimeout(() => {
      this.focus();
    }, 100);

    this._dispatchEvent('sample-modal-open', {
      size: this.size,
      variant: this.variant
    });
  }

  private _handleClose() {
    this._restoreBodyScroll();
    this._restoreFocus();

    this._dispatchEvent('sample-modal-close', {
      size: this.size,
      variant: this.variant
    });
  }

  private _handleBackdropClick(event: Event) {
    if (this.backdropDismiss && event.target === event.currentTarget) {
      this._cancelModal();
    }
  }

  private _handleCloseClick() {
    this.hide();
  }

  private _handleKeydown(event: KeyboardEvent) {
    if (!this.open) return;

    if (event.key === 'Escape' && this.escapeDismiss) {
      event.preventDefault();
      this._cancelModal();
    }

    // Basic focus trap - keep focus within modal
    if (event.key === 'Tab') {
      this._handleTabKey(event);
    }
  }

  private _handleTabKey(event: KeyboardEvent) {
    const focusableElements = this._getFocusableElements();
    if (focusableElements.length === 0) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey) {
      if (document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      }
    } else {
      if (document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    }
  }

  private _getFocusableElements(): HTMLElement[] {
    const focusableSelectors = [
      'button:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      'a[href]',
      '[tabindex]:not([tabindex="-1"])'
    ];

    return Array.from(
      this.querySelectorAll(focusableSelectors.join(', '))
    ) as HTMLElement[];
  }

  private _cancelModal() {
    this._dispatchEvent('sample-modal-cancel', {
      size: this.size,
      variant: this.variant,
      reason: 'user-action'
    });
    this.hide();
  }

  private _saveFocus() {
    this._previousActiveElement = document.activeElement;
  }

  private _restoreFocus() {
    if (this._previousActiveElement && 'focus' in this._previousActiveElement) {
      (this._previousActiveElement as HTMLElement).focus();
    }
  }

  private _lockBodyScroll() {
    document.body.style.overflow = 'hidden';
  }

  private _restoreBodyScroll() {
    document.body.style.overflow = '';
  }

  private _handleSlotChange(event: Event) {
    const slot = event.target as HTMLSlotElement;
    const slotName = slot.name;

    if (slotName === 'header') {
      this._hasHeaderContent = slot.assignedElements().length > 0;
    } else if (slotName === 'footer') {
      this._hasFooterContent = slot.assignedElements().length > 0;
    }
  }

  private _dispatchEvent(type: string, detail: any = {}) {
    this.dispatchEvent(new CustomEvent(type, {
      detail,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div 
        part="overlay" 
        class="overlay"
        @click=${this._handleBackdropClick}
      ></div>
      
      <div 
        part="modal" 
        class="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-header"
        aria-describedby="modal-body"
        tabindex="-1"
      >
        <div 
          part="header" 
          class="header ${this._hasHeaderContent || this.alwaysShowHeader ? 'has-content' : ''} ${this.alwaysShowHeader ? 'always-show' : ''} ${!this._hasHeaderContent && !this.showClose ? 'no-border' : ''}"
          id="modal-header"
        >
          <div class="header-content">
            <slot name="header" @slotchange=${this._handleSlotChange}></slot>
          </div>
          ${this.showClose ? html`
            <button 
              part="close-button"
              class="close-button"
              type="button"
              aria-label=${this.closeLabel}
              @click=${this._handleCloseClick}
            >
              ✕
            </button>
          ` : nothing}
        </div>

        <div 
          part="body" 
          class="body"
          id="modal-body"
        >
          <slot></slot>
        </div>

        <div 
          part="footer" 
          class="footer ${this._hasFooterContent || this.alwaysShowFooter ? 'has-content' : ''} ${this.alwaysShowFooter ? 'always-show' : ''} ${!this._hasFooterContent ? 'no-border' : ''} ${this.footerAlign}"
        >
          <slot name="footer" @slotchange=${this._handleSlotChange}></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-modal': SampleModal;
  }
} 