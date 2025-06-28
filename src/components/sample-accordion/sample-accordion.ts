import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A sample accordion component for the Design System
 *
 * @slot - Accordion items (sample-accordion-item elements)
 * @csspart accordion - The main accordion container
 * @csspart item - Individual accordion item container
 * @csspart header - Accordion item header/trigger
 * @csspart content - Accordion item content area
 * @csspart icon - Expand/collapse icon
 * @fires sample-accordion-toggle - Fired when an item is toggled
 * @fires sample-accordion-expand - Fired when an item is expanded
 * @fires sample-accordion-collapse - Fired when an item is collapsed
 */
@customElement('sample-accordion')
export class SampleAccordion extends LitElement {
  static styles = css`
    :host {
      display: block;
      
      /* CSS custom properties for theming */
      --sample-accordion-bg: var(--sample-surface-color, white);
      --sample-accordion-border: var(--sample-border-color, #dee2e6);
      --sample-accordion-border-width: var(--sample-border-width, 1px);
      --sample-accordion-border-radius: var(--sample-border-radius, 8px);
      --sample-accordion-spacing: var(--sample-spacing-sm, 4px);
    }

    .accordion {
      background: var(--sample-accordion-bg);
      border: var(--sample-accordion-border-width) solid var(--sample-accordion-border);
      border-radius: var(--sample-accordion-border-radius);
      overflow: hidden;
    }

    /* Variant styles */
    .accordion.variant-minimal {
      border: none;
      background: transparent;
    }

    .accordion.variant-filled {
      background: var(--sample-accordion-filled-bg, #f8f9fa);
      border: none;
    }

    .accordion.variant-outlined {
      border-width: calc(var(--sample-accordion-border-width) * 2);
      background: transparent;
    }

    /* Size variants */
    .accordion.size-compact {
      --sample-accordion-spacing: 2px;
    }

    .accordion.size-spacious {
      --sample-accordion-spacing: 8px;
    }
  `;

  /**
   * The accordion variant style
   */
  @property({ type: String })
  variant: 'default' | 'minimal' | 'filled' | 'outlined' = 'default';

  /**
   * The accordion size
   */
  @property({ type: String })
  size: 'compact' | 'default' | 'spacious' = 'default';

  /**
   * Whether multiple items can be expanded simultaneously
   */
  @property({ type: Boolean, attribute: 'allow-multiple' })
  allowMultiple = false;

  /**
   * Whether the accordion is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  render() {
    const classes = [
      'accordion',
      `variant-${this.variant}`,
      `size-${this.size}`
    ].join(' ');

    return html`
      <div
        part="accordion"
        class=${classes}
        role="region"
        aria-disabled=${this.disabled}
      >
        <slot @slotchange=${this._handleSlotChange}></slot>
      </div>
    `;
  }

  firstUpdated() {
    this._setupItems();
  }

  private _handleSlotChange() {
    this._setupItems();
  }

  private _setupItems() {
    const items = this._getAccordionItems();
    items.forEach((item, index) => {
      item.accordion = this;
      item.index = index;
    });
  }

  private _getAccordionItems(): SampleAccordionItem[] {
    const slot = this.shadowRoot?.querySelector('slot') as HTMLSlotElement;
    if (!slot) return [];

    return slot.assignedElements().filter(
      (el): el is SampleAccordionItem => el.tagName.toLowerCase() === 'sample-accordion-item'
    );
  }

  /**
   * Toggle an accordion item
   */
  toggleItem(item: SampleAccordionItem) {
    if (this.disabled || item.disabled) return;

    const wasExpanded = item.expanded;

    // If not allowing multiple, collapse all others first
    if (!this.allowMultiple && !wasExpanded) {
      this._getAccordionItems().forEach(otherItem => {
        if (otherItem !== item && otherItem.expanded) {
          otherItem.expanded = false;
          this._dispatchItemEvent('sample-accordion-collapse', otherItem);
        }
      });
    }

    // Toggle the target item
    item.expanded = !wasExpanded;

    // Dispatch appropriate events
    const eventType = item.expanded ? 'sample-accordion-expand' : 'sample-accordion-collapse';
    this._dispatchItemEvent(eventType, item);
    this._dispatchItemEvent('sample-accordion-toggle', item);
  }

  private _dispatchItemEvent(eventType: string, item: SampleAccordionItem) {
    this.dispatchEvent(new CustomEvent(eventType, {
      bubbles: true,
      composed: true,
      detail: {
        item,
        index: item.index,
        expanded: item.expanded,
        label: item.label,
        variant: this.variant,
        size: this.size,
        timestamp: Date.now()
      }
    }));
  }

  /**
   * Expand all items (only if allowMultiple is true)
   */
  expandAll() {
    if (!this.allowMultiple) return;

    this._getAccordionItems().forEach(item => {
      if (!item.expanded && !item.disabled) {
        item.expanded = true;
        this._dispatchItemEvent('sample-accordion-expand', item);
      }
    });
  }

  /**
   * Collapse all items
   */
  collapseAll() {
    this._getAccordionItems().forEach(item => {
      if (item.expanded) {
        item.expanded = false;
        this._dispatchItemEvent('sample-accordion-collapse', item);
      }
    });
  }
}

/**
 * Individual accordion item component
 */
@customElement('sample-accordion-item')
export class SampleAccordionItem extends LitElement {
  static styles = css`
    :host {
      display: block;
      
      /* CSS custom properties for theming */
      --sample-accordion-item-header-bg: var(--sample-accordion-header-bg, transparent);
      --sample-accordion-item-header-color: var(--sample-accordion-header-color, #212529);
      --sample-accordion-item-header-padding: var(--sample-accordion-header-padding, 16px);
      --sample-accordion-item-content-bg: var(--sample-accordion-content-bg, transparent);
      --sample-accordion-item-content-color: var(--sample-accordion-content-color, #212529);
      --sample-accordion-item-content-padding: var(--sample-accordion-content-padding, 16px);
      --sample-accordion-item-border: var(--sample-accordion-border, #dee2e6);
      --sample-accordion-item-transition: var(--sample-accordion-transition, all 0.3s ease);
    }

    .item {
      border-bottom: 1px solid var(--sample-accordion-item-border);
    }

    .item:last-child {
      border-bottom: none;
    }

    .header {
      background: var(--sample-accordion-item-header-bg);
      color: var(--sample-accordion-item-header-color);
      padding: var(--sample-accordion-item-header-padding);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: space-between;
      transition: var(--sample-accordion-item-transition);
      outline: none;
      border: none;
      width: 100%;
      text-align: left;
      font-family: inherit;
      font-size: inherit;
    }

    .header:hover:not(:disabled) {
      background: var(--sample-accordion-item-header-hover-bg, rgba(0,0,0,0.04));
    }

    .header:focus {
      outline: 2px solid var(--sample-accordion-focus-ring, #007bff);
      outline-offset: -2px;
    }

    .header:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    .header-content {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .label {
      font-weight: var(--sample-accordion-label-font-weight, 600);
      margin: 0;
    }

    .description {
      font-size: var(--sample-accordion-description-font-size, 0.875em);
      color: var(--sample-accordion-description-color, #6c757d);
      margin: 0;
    }

    .icon {
      margin-left: 12px;
      transition: var(--sample-accordion-item-transition);
      transform: rotate(0deg);
      color: var(--sample-accordion-icon-color, #6c757d);
    }

    .icon.expanded {
      transform: rotate(180deg);
    }

    .content {
      background: var(--sample-accordion-item-content-bg);
      color: var(--sample-accordion-item-content-color);
      max-height: 0;
      overflow: hidden;
      transition: var(--sample-accordion-item-transition);
    }

    .content.expanded {
      max-height: 1000px; /* Large enough for most content */
    }

    .content-inner {
      padding: var(--sample-accordion-item-content-padding);
      border-top: 1px solid var(--sample-accordion-item-border);
    }

    /* Remove border-top for minimal variant */
    :host([data-variant="minimal"]) .content-inner {
      border-top: none;
    }
  `;

  /**
   * The accordion item label/title
   */
  @property({ type: String })
  label = '';

  /**
   * Optional description text
   */
  @property({ type: String })
  description = '';

  /**
   * Whether this item is expanded
   */
  @property({ type: Boolean })
  expanded = false;

  /**
   * Whether this item is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Custom icon for the expand/collapse indicator
   */
  @property({ type: String })
  icon = '▼';

  /**
   * Reference to parent accordion
   */
  accordion?: SampleAccordion;

  /**
   * Item index within the accordion
   */
  index = 0;

  render() {
    return html`
      <div 
        part="item" 
        class="item"
        data-variant=${this.accordion?.variant || 'default'}
      >
        <button
          part="header"
          class="header"
          type="button"
          ?disabled=${this.disabled}
          aria-expanded=${this.expanded}
          aria-controls="content-${this.index}"
          @click=${this._handleToggle}
          @keydown=${this._handleKeydown}
        >
          <div class="header-content">
            <div class="label">${this.label}</div>
            ${this.description ? html`<div class="description">${this.description}</div>` : ''}
          </div>
          <span part="icon" class="icon ${this.expanded ? 'expanded' : ''}">${this.icon}</span>
        </button>
        
        <div
          part="content"
          class="content ${this.expanded ? 'expanded' : ''}"
          id="content-${this.index}"
          role="region"
          aria-labelledby="header-${this.index}"
        >
          <div class="content-inner">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }

  private _handleToggle() {
    if (this.accordion) {
      this.accordion.toggleItem(this);
    } else {
      // Standalone usage
      this.expanded = !this.expanded;
      this._dispatchToggleEvent();
    }
  }

  private _handleKeydown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this._handleToggle();
        break;
      case 'ArrowDown':
        event.preventDefault();
        this._focusNextItem();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this._focusPreviousItem();
        break;
      case 'Home':
        event.preventDefault();
        this._focusFirstItem();
        break;
      case 'End':
        event.preventDefault();
        this._focusLastItem();
        break;
    }
  }

  private _focusNextItem() {
    const items = this._getAllItems();
    const nextIndex = (this.index + 1) % items.length;
    items[nextIndex]?.focus();
  }

  private _focusPreviousItem() {
    const items = this._getAllItems();
    const prevIndex = this.index === 0 ? items.length - 1 : this.index - 1;
    items[prevIndex]?.focus();
  }

  private _focusFirstItem() {
    const items = this._getAllItems();
    items[0]?.focus();
  }

  private _focusLastItem() {
    const items = this._getAllItems();
    items[items.length - 1]?.focus();
  }

  private _getAllItems(): HTMLButtonElement[] {
    if (!this.accordion) return [];
    return Array.from(this.accordion.querySelectorAll('sample-accordion-item .header'));
  }

  private _dispatchToggleEvent() {
    this.dispatchEvent(new CustomEvent('sample-accordion-item-toggle', {
      bubbles: true,
      composed: true,
      detail: {
        expanded: this.expanded,
        label: this.label,
        index: this.index,
        timestamp: Date.now()
      }
    }));
  }

  focus() {
    const header = this.shadowRoot?.querySelector('.header') as HTMLButtonElement;
    header?.focus();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-accordion': SampleAccordion;
    'sample-accordion-item': SampleAccordionItem;
  }
} 