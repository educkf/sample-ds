import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

/**
 * A sample breadcrumb item component for navigation
 *
 * @slot - The breadcrumb item content
 * @slot icon - Custom icon for the breadcrumb item
 * @csspart item - The breadcrumb item container
 * @csspart link - The breadcrumb item link
 * @csspart separator - The breadcrumb separator
 * @fires sample-breadcrumb-click - Fired when a breadcrumb item is clicked
 */
@customElement('sample-breadcrumb-item')
export class SampleBreadcrumbItem extends LitElement {
  static styles = css`
    :host {
      display: contents;
    }
  `;

  /**
   * The href for the breadcrumb link
   */
  @property({ type: String })
  href = '';

  /**
   * Whether this breadcrumb item is disabled
   */
  @property({ type: Boolean })
  disabled = false;

  /**
   * Whether this is the current (active) breadcrumb item
   */
  @property({ type: Boolean })
  current = false;

  /**
   * Custom icon for the breadcrumb item
   */
  @property({ type: String })
  icon = '';

  render() {
    return html`<slot></slot>`;
  }
}

/**
 * A sample breadcrumb component for navigation
 *
 * @slot - Breadcrumb items
 * @csspart breadcrumb - The main breadcrumb container
 * @csspart list - The breadcrumb list
 * @csspart item - Individual breadcrumb items
 * @csspart link - Breadcrumb item links
 * @csspart separator - Breadcrumb separators
 * @fires sample-breadcrumb-navigate - Fired when a breadcrumb is clicked
 */
@customElement('sample-breadcrumb')
export class SampleBreadcrumb extends LitElement {
  static styles = css`
    :host {
      display: block;
      
      /* CSS custom properties for theming */
      --sample-breadcrumb-bg: var(--sample-surface-color, transparent);
      --sample-breadcrumb-color: var(--sample-text-color, #495057);
      --sample-breadcrumb-link-color: var(--sample-link-color, #007bff);
      --sample-breadcrumb-link-hover-color: var(--sample-link-hover-color, #0056b3);
      --sample-breadcrumb-current-color: var(--sample-text-muted-color, #6c757d);
      --sample-breadcrumb-separator-color: var(--sample-border-color, #dee2e6);
      --sample-breadcrumb-padding: var(--sample-breadcrumb-default-padding, 12px 16px);
      --sample-breadcrumb-border-radius: var(--sample-border-radius, 8px);
      --sample-breadcrumb-font-size: var(--sample-font-size, 14px);
      --sample-breadcrumb-line-height: var(--sample-line-height, 1.5);
      --sample-breadcrumb-gap: var(--sample-spacing-xs, 8px);
      --sample-breadcrumb-separator: var(--sample-breadcrumb-default-separator, '/');
      --sample-breadcrumb-transition: var(--sample-transition, all 0.2s ease);
    }

    .breadcrumb {
      background: var(--sample-breadcrumb-bg);
      color: var(--sample-breadcrumb-color);
      padding: var(--sample-breadcrumb-padding);
      border-radius: var(--sample-breadcrumb-border-radius);
      font-size: var(--sample-breadcrumb-font-size);
      line-height: var(--sample-breadcrumb-line-height);
      border: var(--sample-breadcrumb-border, 1px solid transparent);
      box-shadow: var(--sample-breadcrumb-shadow, none);
    }

    /* Variant styles */
    .breadcrumb.variant-default {
      --sample-breadcrumb-bg: var(--sample-breadcrumb-default-bg, transparent);
      --sample-breadcrumb-border: var(--sample-breadcrumb-default-border, 1px solid transparent);
    }

    .breadcrumb.variant-minimal {
      --sample-breadcrumb-bg: var(--sample-breadcrumb-minimal-bg, transparent);
      --sample-breadcrumb-padding: var(--sample-breadcrumb-minimal-padding, 4px 0);
      --sample-breadcrumb-border: var(--sample-breadcrumb-minimal-border, none);
    }

    .breadcrumb.variant-filled {
      --sample-breadcrumb-bg: var(--sample-breadcrumb-filled-bg, #f8f9fa);
      --sample-breadcrumb-border: var(--sample-breadcrumb-filled-border, 1px solid #e9ecef);
    }

    .breadcrumb.variant-outlined {
      --sample-breadcrumb-bg: var(--sample-breadcrumb-outlined-bg, transparent);
      --sample-breadcrumb-border: var(--sample-breadcrumb-outlined-border, 1px solid #dee2e6);
    }

    /* Size variants */
    .breadcrumb.size-compact {
      --sample-breadcrumb-padding: var(--sample-breadcrumb-compact-padding, 8px 12px);
      --sample-breadcrumb-font-size: 12px;
      --sample-breadcrumb-gap: 6px;
    }

    .breadcrumb.size-spacious {
      --sample-breadcrumb-padding: var(--sample-breadcrumb-spacious-padding, 16px 24px);
      --sample-breadcrumb-font-size: 16px;
      --sample-breadcrumb-gap: 12px;
    }

    .breadcrumb-list {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      gap: var(--sample-breadcrumb-gap);
    }

    .breadcrumb-item {
      display: flex;
      align-items: center;
      gap: 4px;
      position: relative;
    }

    .breadcrumb-item:not(:last-child)::after {
      content: var(--sample-breadcrumb-separator);
      color: var(--sample-breadcrumb-separator-color);
      margin-left: var(--sample-breadcrumb-gap);
      font-size: 0.9em;
      user-select: none;
      pointer-events: none;
    }

    .breadcrumb-link {
      color: var(--sample-breadcrumb-link-color);
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      border-radius: 4px;
      transition: var(--sample-breadcrumb-transition);
      cursor: pointer;
      position: relative;
      border: 1px solid transparent;
    }

    .breadcrumb-link:hover {
      color: var(--sample-breadcrumb-link-hover-color);
      background: var(--sample-breadcrumb-link-hover-bg, rgba(0, 123, 255, 0.1));
      text-decoration: underline;
    }

    .breadcrumb-link:focus {
      outline: 2px solid var(--sample-breadcrumb-focus-ring, #007bff);
      outline-offset: 2px;
    }

    .breadcrumb-link:active {
      transform: translateY(1px);
    }

    .breadcrumb-link.current {
      color: var(--sample-breadcrumb-current-color);
      cursor: default;
      font-weight: var(--sample-breadcrumb-current-font-weight, 500);
      pointer-events: none;
    }

    .breadcrumb-link.disabled {
      color: var(--sample-breadcrumb-disabled-color, #adb5bd);
      cursor: not-allowed;
      opacity: 0.6;
      pointer-events: none;
    }

    .breadcrumb-icon {
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .breadcrumb-text {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: var(--sample-breadcrumb-max-width, 200px);
    }

    /* Home icon as default first item */
    .breadcrumb-item:first-child .breadcrumb-link::before {
      content: var(--sample-breadcrumb-home-icon, '🏠');
      margin-right: 4px;
      font-size: 0.9em;
    }

    .breadcrumb-item:first-child .breadcrumb-link.has-custom-icon::before {
      content: none;
    }

    /* Responsive design */
    @media (max-width: 480px) {
      .breadcrumb-list {
        flex-wrap: nowrap;
        overflow-x: auto;
        scrollbar-width: thin;
        scrollbar-color: var(--sample-breadcrumb-separator-color) transparent;
      }
      
      .breadcrumb-list::-webkit-scrollbar {
        height: 4px;
      }
      
      .breadcrumb-list::-webkit-scrollbar-track {
        background: transparent;
      }
      
      .breadcrumb-list::-webkit-scrollbar-thumb {
        background: var(--sample-breadcrumb-separator-color);
        border-radius: 2px;
      }

      .breadcrumb-text {
        max-width: 120px;
      }

      .breadcrumb-item:not(:last-child):not(:first-child) {
        display: none;
      }

      .breadcrumb-item:nth-last-child(2) {
        display: flex;
      }

      .breadcrumb-item:nth-last-child(2)::before {
        content: '...';
        color: var(--sample-breadcrumb-separator-color);
        margin-right: var(--sample-breadcrumb-gap);
      }
    }

    /* RTL support */
    :host([dir="rtl"]) .breadcrumb-item:not(:last-child)::after {
      content: var(--sample-breadcrumb-separator-rtl, '\\');
      margin-left: 0;
      margin-right: var(--sample-breadcrumb-gap);
    }

    /* High contrast mode */
    @media (prefers-contrast: high) {
      .breadcrumb-link {
        border-color: currentColor;
      }
      
      .breadcrumb-link:focus {
        outline-width: 3px;
      }
    }

    /* Reduced motion */
    @media (prefers-reduced-motion: reduce) {
      .breadcrumb-link {
        transition: none;
      }
    }

    /* Dark mode support */
    @media (prefers-color-scheme: dark) {
      :host {
        --sample-breadcrumb-color: #e9ecef;
        --sample-breadcrumb-link-color: #6ea8fe;
        --sample-breadcrumb-link-hover-color: #9ec5fe;
        --sample-breadcrumb-current-color: #adb5bd;
        --sample-breadcrumb-separator-color: #495057;
        --sample-breadcrumb-filled-bg: #212529;
        --sample-breadcrumb-filled-border: 1px solid #495057;
        --sample-breadcrumb-outlined-border: 1px solid #495057;
      }
    }

    /* Print styles */
    @media print {
      .breadcrumb {
        background: transparent !important;
        border: none !important;
        box-shadow: none !important;
        padding: 0 !important;
      }
      
      .breadcrumb-link {
        color: black !important;
        text-decoration: none !important;
      }
      
      .breadcrumb-link:after {
        content: " (" attr(href) ")";
        font-size: 0.8em;
      }
    }
  `;

  /**
   * The breadcrumb variant style
   */
  @property({ type: String })
  variant: 'default' | 'minimal' | 'filled' | 'outlined' = 'default';

  /**
   * The breadcrumb size
   */
  @property({ type: String })
  size: 'compact' | 'default' | 'spacious' = 'default';

  /**
   * Custom separator character
   */
  @property({ type: String })
  separator = '/';

  /**
   * Whether to show icons for breadcrumb items
   */
  @property({ type: Boolean, attribute: 'show-icons' })
  showIcons = true;

  /**
   * Maximum number of items to show before collapsing
   */
  @property({ type: Number, attribute: 'max-items' })
  maxItems = 0;

  render() {
    const classes = [
      'breadcrumb',
      `variant-${this.variant}`,
      `size-${this.size}`
    ].join(' ');

    // Update CSS custom property for separator
    this.style.setProperty('--sample-breadcrumb-separator', `'${this.separator}'`);

    return html`
      <nav
        part="breadcrumb"
        class=${classes}
        aria-label="Breadcrumb navigation"
        role="navigation"
      >
        <ol part="list" class="breadcrumb-list" @click=${this._handleClick}>
          ${this._renderItems()}
        </ol>
      </nav>
    `;
  }

  private _renderItems() {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return html``;

    return html`<slot @slotchange=${this._handleSlotChange}></slot>`;
  }

  private _handleSlotChange() {
    const items = this.querySelectorAll('sample-breadcrumb-item');
    items.forEach((item, index) => {
      const isLast = index === items.length - 1;

      // Create the breadcrumb item structure
      const itemElement = this._createBreadcrumbItem(item, isLast);

      // Replace the original item with the styled version
      if (item.parentNode) {
        item.parentNode.replaceChild(itemElement, item);
      }
    });
  }

  private _createBreadcrumbItem(item: SampleBreadcrumbItem, isLast: boolean) {
    const li = document.createElement('li');
    li.className = 'breadcrumb-item';
    li.setAttribute('part', 'item');

    const content = item.textContent || '';
    const href = item.href;
    const disabled = item.disabled;
    const current = item.current || isLast;
    const icon = item.icon;

    if (href && !disabled && !current) {
      const link = document.createElement('a');
      link.className = `breadcrumb-link ${icon ? 'has-custom-icon' : ''}`;
      link.setAttribute('part', 'link');
      link.href = href;
      link.setAttribute('data-breadcrumb-href', href);
      link.setAttribute('data-breadcrumb-text', content);

      if (icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'breadcrumb-icon';
        iconSpan.textContent = icon;
        link.appendChild(iconSpan);
      }

      const textSpan = document.createElement('span');
      textSpan.className = 'breadcrumb-text';
      textSpan.textContent = content;
      link.appendChild(textSpan);

      li.appendChild(link);
    } else {
      const span = document.createElement('span');
      span.className = `breadcrumb-link ${current ? 'current' : ''} ${disabled ? 'disabled' : ''} ${icon ? 'has-custom-icon' : ''}`;
      span.setAttribute('part', 'link');

      if (current) {
        span.setAttribute('aria-current', 'page');
      }

      if (icon) {
        const iconSpan = document.createElement('span');
        iconSpan.className = 'breadcrumb-icon';
        iconSpan.textContent = icon;
        span.appendChild(iconSpan);
      }

      const textSpan = document.createElement('span');
      textSpan.className = 'breadcrumb-text';
      textSpan.textContent = content;
      span.appendChild(textSpan);

      li.appendChild(span);
    }

    return li;
  }

  private _handleClick(event: Event) {
    const target = event.target as HTMLElement;
    const link = target.closest('.breadcrumb-link') as HTMLAnchorElement;

    if (link && link.hasAttribute('data-breadcrumb-href')) {
      event.preventDefault();

      const href = link.getAttribute('data-breadcrumb-href');
      const text = link.getAttribute('data-breadcrumb-text');

      this.dispatchEvent(new CustomEvent('sample-breadcrumb-navigate', {
        bubbles: true,
        composed: true,
        detail: {
          href,
          text,
          element: link,
          timestamp: Date.now()
        }
      }));
    }
  }

  /**
   * Get all breadcrumb items
   */
  getItems() {
    return Array.from(this.querySelectorAll('sample-breadcrumb-item'));
  }

  /**
   * Add a new breadcrumb item
   */
  addItem(text: string, href?: string, icon?: string) {
    const item = document.createElement('sample-breadcrumb-item');
    item.textContent = text;
    if (href) item.href = href;
    if (icon) item.icon = icon;

    this.appendChild(item);
    return item;
  }

  /**
   * Remove a breadcrumb item by index
   */
  removeItem(index: number) {
    const items = this.getItems();
    if (index >= 0 && index < items.length) {
      items[index].remove();
    }
  }

  /**
   * Clear all breadcrumb items
   */
  clear() {
    const items = this.getItems();
    items.forEach(item => item.remove());
  }

  /**
   * Navigate to a specific breadcrumb item
   */
  navigateTo(index: number) {
    const items = this.getItems();
    if (index >= 0 && index < items.length) {
      const item = items[index];
      if (item.href) {
        this.dispatchEvent(new CustomEvent('sample-breadcrumb-navigate', {
          bubbles: true,
          composed: true,
          detail: {
            href: item.href,
            text: item.textContent,
            element: item,
            timestamp: Date.now()
          }
        }));
      }
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sample-breadcrumb': SampleBreadcrumb;
    'sample-breadcrumb-item': SampleBreadcrumbItem;
  }
} 