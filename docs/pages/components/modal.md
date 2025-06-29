---
title: 'Modal'
description: 'Dialog overlay with comprehensive accessibility features, animations, and flexible content support'
---

# Modal

Dialog overlay component with comprehensive accessibility features, smooth animations, and flexible content support. Perfect for confirmations, forms, and displaying additional content without navigation.

## 🎮 Interactive Playground

{% playground component="modal" /%}

## 📋 Example

### Basic Modal Usage
```html
<sample-button onclick="document.getElementById('simple-modal').open = true">
  Open Modal
</sample-button>

<sample-modal id="simple-modal">
  <h2>Welcome!</h2>
  <p>This is a simple modal dialog.</p>
  <sample-button onclick="document.getElementById('simple-modal').open = false">
    Close
  </sample-button>
</sample-modal>

<!-- Modal with slots -->
<sample-modal id="structured-modal">
  <div slot="header">
    <h3>Modal Title</h3>
  </div>
  <p>Modal content goes in the body.</p>
  <div slot="footer">
    <sample-button>Cancel</sample-button>
    <sample-button>Confirm</sample-button>
  </div>
</sample-modal>
```

## 📦 Installation

### NPM Package (Bundled Projects)
```bash
npm install sample-design-system-educkf
```

```javascript
// Import individual component (recommended)
import 'sample-design-system-educkf/components/sample-modal';

// Or import from main library
import { SampleModal } from 'sample-design-system-educkf';
```

### Script Tag (Standalone)
```html
<!-- Individual component -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/components/sample-modal.js"></script>

<!-- Or complete library -->
<script src="https://unpkg.com/sample-design-system-educkf/dist/standalone/index.js"></script>
```

## 🎨 Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `open` | boolean | `false` | Whether the modal is open |
| `size` | `'small' \| 'medium' \| 'large' \| 'fullscreen'` | `'medium'` | Modal size variant |
| `closable` | boolean | `true` | Whether modal can be closed by user |
| `closeOnOverlay` | boolean | `true` | Close modal when clicking overlay |
| `closeOnEscape` | boolean | `true` | Close modal when pressing Escape |
| `autoFocus` | boolean | `true` | Auto-focus first interactive element |
| `persistent` | boolean | `false` | Prevent closing until action is taken |
| `animation` | `'fade' \| 'slide' \| 'scale'` | `'fade'` | Animation type |

## 📚 Properties with Code Examples

### `open` Property
```html
<!-- Programmatically control modal -->
<sample-button onclick="toggleModal()">Toggle Modal</sample-button>

<sample-modal id="controlled-modal">
  <h3>Controlled Modal</h3>
  <p>This modal is controlled programmatically.</p>
</sample-modal>

<script>
function toggleModal() {
  const modal = document.getElementById('controlled-modal');
  modal.open = !modal.open;
}
</script>
```

### `size` Property
```html
<!-- Different modal sizes -->
<sample-modal size="small">
  <h3>Small Modal</h3>
  <p>Compact modal for simple messages.</p>
</sample-modal>

<sample-modal size="large">
  <h3>Large Modal</h3>
  <p>Spacious modal for complex content.</p>
</sample-modal>

<sample-modal size="fullscreen">
  <h3>Fullscreen Modal</h3>
  <p>Takes up the entire viewport.</p>
</sample-modal>
```

### `closable` Property
```html
<!-- Non-closable modal -->
<sample-modal closable="false" id="persistent-modal">
  <h3>Important Notice</h3>
  <p>This modal cannot be closed with the X button.</p>
  <sample-button onclick="document.getElementById('persistent-modal').open = false">
    Acknowledge
  </sample-button>
</sample-modal>
```

### `closeOnOverlay` and `closeOnEscape` Properties
```html
<!-- Prevent overlay/escape closing -->
<sample-modal closeOnOverlay="false" closeOnEscape="false">
  <h3>Confirmation Required</h3>
  <p>Please use the buttons below to proceed.</p>
  <div>
    <sample-button>Cancel</sample-button>
    <sample-button>Confirm</sample-button>
  </div>
</sample-modal>
```

### `autoFocus` Property
```html
<!-- Control auto-focus behavior -->
<sample-modal autoFocus="false">
  <h3>No Auto Focus</h3>
  <p>Focus will not automatically move to this modal.</p>
  <input type="text" placeholder="Manual focus required">
</sample-modal>
```

### `animation` Property
```html
<!-- Different animation types -->
<sample-modal animation="slide">
  <h3>Slide Animation</h3>
  <p>This modal slides in from the top.</p>
</sample-modal>

<sample-modal animation="scale">
  <h3>Scale Animation</h3>
  <p>This modal scales in from the center.</p>
</sample-modal>
```

### Modal with Slots
```html
<!-- Structured modal with header and footer -->
<sample-modal id="form-modal">
  <div slot="header">
    <h3>User Registration</h3>
    <p>Please fill out the form below</p>
  </div>
  
  <form>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" required>
    </div>
    <div>
      <label for="email">Email:</label>
      <input type="email" id="email" required>
    </div>
  </form>
  
  <div slot="footer">
    <sample-button onclick="document.getElementById('form-modal').open = false">
      Cancel
    </sample-button>
    <sample-button type="submit">
      Register
    </sample-button>
  </div>
</sample-modal>
```

## 🎨 Customization

### CSS Custom Properties
```css
sample-modal {
  --sample-modal-backdrop-bg: rgba(0, 0, 0, 0.5);
  --sample-modal-backdrop-blur: blur(4px);
  --sample-modal-border-radius: 12px;
  --sample-modal-box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  --sample-modal-background: #ffffff;
  --sample-modal-border: 1px solid #e5e7eb;
  --sample-modal-padding: 24px;
  --sample-modal-max-width: 500px;
  --sample-modal-max-height: 90vh;
  --sample-modal-animation-duration: 0.3s;
  --sample-modal-animation-timing: ease-out;
}

/* Size variants */
sample-modal[size="small"] {
  --sample-modal-max-width: 400px;
  --sample-modal-padding: 20px;
}

sample-modal[size="large"] {
  --sample-modal-max-width: 800px;
  --sample-modal-padding: 32px;
}

sample-modal[size="fullscreen"] {
  --sample-modal-max-width: 100vw;
  --sample-modal-max-height: 100vh;
  --sample-modal-border-radius: 0;
}

/* Header and footer styling */
sample-modal .modal-header {
  --sample-modal-header-border-bottom: 1px solid #e5e7eb;
  --sample-modal-header-padding-bottom: 16px;
  --sample-modal-header-margin-bottom: 20px;
}

sample-modal .modal-footer {
  --sample-modal-footer-border-top: 1px solid #e5e7eb;
  --sample-modal-footer-padding-top: 16px;
  --sample-modal-footer-margin-top: 20px;
  --sample-modal-footer-gap: 8px;
}
```

### Custom Styling Example
```html
<style>
.premium-modal {
  --sample-modal-backdrop-bg: rgba(0, 0, 0, 0.8);
  --sample-modal-backdrop-blur: blur(8px);
  --sample-modal-background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --sample-modal-border-radius: 20px;
  --sample-modal-box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  --sample-modal-border: none;
  color: white;
}

.glass-modal {
  --sample-modal-background: rgba(255, 255, 255, 0.1);
  --sample-modal-backdrop-blur: blur(20px);
  --sample-modal-border: 1px solid rgba(255, 255, 255, 0.2);
  --sample-modal-border-radius: 16px;
  backdrop-filter: blur(20px);
}

.minimal-modal {
  --sample-modal-backdrop-bg: rgba(0, 0, 0, 0.3);
  --sample-modal-border-radius: 0;
  --sample-modal-box-shadow: none;
  --sample-modal-border: none;
  --sample-modal-animation-duration: 0.2s;
}
</style>

<sample-modal class="premium-modal">
  <h3>Premium Modal</h3>
  <p>A beautiful modal with gradient background and enhanced effects.</p>
</sample-modal>
```

## ♿ Accessibility

The modal component includes comprehensive accessibility features:

- **Focus Management**: 
  - Traps focus within modal when open
  - Returns focus to trigger element when closed
  - Auto-focuses first interactive element (optional)
- **ARIA Support**: 
  - `role="dialog"` or `role="alertdialog"`
  - `aria-modal="true"` for screen readers
  - `aria-labelledby` and `aria-describedby` support
- **Keyboard Navigation**: 
  - `Escape` to close (optional)
  - `Tab` and `Shift+Tab` for focus navigation
  - Focus trap prevents tabbing outside modal
- **Screen Reader Support**: 
  - Announces modal opening/closing
  - Proper heading hierarchy
  - Content structure announcements

### ARIA Implementation
```html
<!-- The component automatically generates proper ARIA attributes -->
<sample-modal 
  role="dialog"
  aria-modal="true"
  aria-labelledby="modal-title"
  aria-describedby="modal-description"
>
  <h2 id="modal-title">Confirmation</h2>
  <p id="modal-description">Are you sure you want to delete this item?</p>
</sample-modal>

<!-- Alert dialog for urgent messages -->
<sample-modal 
  role="alertdialog"
  aria-modal="true"
  closeOnOverlay="false"
  closeOnEscape="false"
>
  <h2>Critical Error</h2>
  <p>A critical error has occurred. Please contact support.</p>
</sample-modal>
```

### Accessibility Best Practices
- Use descriptive headings for modal titles
- Provide clear, actionable button labels
- Use `role="alertdialog"` for urgent messages
- Ensure sufficient color contrast
- Include skip links for complex modals
- Test with keyboard-only navigation
- Verify screen reader announcements
- Avoid nested modals when possible

## 🔧 Framework Integration

### React
```jsx
import { useState } from 'react';
import 'sample-design-system-educkf/components/sample-modal';

function ModalExample() {
  const [isOpen, setIsOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleModalOpen = () => {
    setIsOpen(true);
  };

  const handleModalClose = (e) => {
    console.log('Modal closed:', e.detail);
    setIsOpen(false);
  };

  const handleConfirm = () => {
    console.log('Confirmed with data:', formData);
    setConfirmOpen(false);
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={handleModalOpen}>
        Open Modal
      </button>

      <sample-modal 
        open={isOpen}
        size="medium"
        closeOnOverlay={true}
        onSampleModalClose={handleModalClose}
      >
        <div slot="header">
          <h3>User Information</h3>
        </div>
        
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input 
              type="text" 
              id="name"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input 
              type="email" 
              id="email"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>
        </form>
        
        <div slot="footer">
          <button onClick={() => setIsOpen(false)}>
            Cancel
          </button>
          <button onClick={() => setConfirmOpen(true)}>
            Save
          </button>
        </div>
      </sample-modal>

      <sample-modal 
        open={confirmOpen}
        size="small"
        closeOnOverlay={false}
        closeOnEscape={false}
      >
        <h3>Confirm Changes</h3>
        <p>Are you sure you want to save these changes?</p>
        <div style={{display: 'flex', gap: '8px', justifyContent: 'flex-end'}}>
          <button onClick={() => setConfirmOpen(false)}>Cancel</button>
          <button onClick={handleConfirm}>Confirm</button>
        </div>
      </sample-modal>
    </div>
  );
}
```

### Vue.js
```vue
<template>
  <div>
    <button @click="openModal">Open Modal</button>
    
    <sample-modal 
      :open="isModalOpen"
      :size="modalSize"
      :closable="isClosable"
      @sample-modal-open="handleModalOpen"
      @sample-modal-close="handleModalClose"
    >
      <div slot="header">
        <h3>{{ modalTitle }}</h3>
      </div>
      
      <div class="modal-content">
        <p>{{ modalContent }}</p>
        <input 
          v-if="showInput"
          v-model="inputValue"
          type="text"
          placeholder="Enter value"
        />
      </div>
      
      <div slot="footer">
        <button @click="closeModal">Cancel</button>
        <button @click="submitModal" :disabled="!canSubmit">
          {{ submitLabel }}
        </button>
      </div>
    </sample-modal>
  </div>
</template>

<script>
import 'sample-design-system-educkf/components/sample-modal';

export default {
  data() {
    return {
      isModalOpen: false,
      modalSize: 'medium',
      modalTitle: 'Sample Modal',
      modalContent: 'This is a Vue.js modal example.',
      isClosable: true,
      showInput: true,
      inputValue: '',
      submitLabel: 'Submit'
    };
  },
  computed: {
    canSubmit() {
      return this.showInput ? this.inputValue.trim() !== '' : true;
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true;
    },
    
    closeModal() {
      this.isModalOpen = false;
      this.inputValue = '';
    },
    
    submitModal() {
      console.log('Submitted value:', this.inputValue);
      this.$emit('modal-submit', {
        value: this.inputValue,
        timestamp: new Date()
      });
      this.closeModal();
    },
    
    handleModalOpen(event) {
      console.log('Modal opened:', event.detail);
      this.$nextTick(() => {
        // Focus management or other actions
      });
    },
    
    handleModalClose(event) {
      console.log('Modal closed:', event.detail);
      this.isModalOpen = false;
    }
  }
};
</script>
```

### Angular
```typescript
import { Component, ViewChild, ElementRef } from '@angular/core';
import 'sample-design-system-educkf/components/sample-modal';

interface ModalConfig {
  size: 'small' | 'medium' | 'large' | 'fullscreen';
  closable: boolean;
  closeOnOverlay: boolean;
  animation: 'fade' | 'slide' | 'scale';
}

@Component({
  selector: 'app-modal',
  template: `
    <div>
      <button (click)="openModal()">Open Modal</button>
      
      <sample-modal 
        #modal
        [attr.open]="isModalOpen"
        [attr.size]="config.size"
        [attr.closable]="config.closable"
        [attr.close-on-overlay]="config.closeOnOverlay"
        [attr.animation]="config.animation"
        (sample-modal-open)="onModalOpen($event)"
        (sample-modal-close)="onModalClose($event)"
      >
        <div slot="header">
          <h3>{{ modalData.title }}</h3>
          <p>{{ modalData.subtitle }}</p>
        </div>
        
        <div class="modal-body">
          <ng-container [ngSwitch]="modalData.type">
            <div *ngSwitchCase="'form'">
              <form [formGroup]="modalForm" (ngSubmit)="onSubmit()">
                <div class="form-group">
                  <label for="name">Name:</label>
                  <input 
                    type="text" 
                    id="name" 
                    formControlName="name"
                    [class.invalid]="modalForm.get('name')?.invalid && modalForm.get('name')?.touched"
                  />
                </div>
                <div class="form-group">
                  <label for="description">Description:</label>
                  <textarea 
                    id="description" 
                    formControlName="description"
                    rows="3"
                  ></textarea>
                </div>
              </form>
            </div>
            
            <div *ngSwitchCase="'confirmation'">
              <p>{{ modalData.message }}</p>
              <div class="warning" *ngIf="modalData.isDestructive">
                <strong>Warning:</strong> This action cannot be undone.
              </div>
            </div>
            
            <div *ngSwitchDefault>
              <p>{{ modalData.content }}</p>
            </div>
          </ng-container>
        </div>
        
        <div slot="footer">
          <button 
            type="button" 
            (click)="closeModal()"
            [disabled]="isLoading"
          >
            {{ modalData.cancelLabel || 'Cancel' }}
          </button>
          <button 
            type="button"
            [class]="modalData.isDestructive ? 'btn-danger' : 'btn-primary'"
            [disabled]="!canSubmit || isLoading"
            (click)="onSubmit()"
          >
            {{ isLoading ? 'Processing...' : (modalData.submitLabel || 'Submit') }}
          </button>
        </div>
      </sample-modal>
    </div>
  `
})
export class ModalComponent {
  @ViewChild('modal', { static: false }) modal!: ElementRef;

  isModalOpen = false;
  isLoading = false;
  
  config: ModalConfig = {
    size: 'medium',
    closable: true,
    closeOnOverlay: true,
    animation: 'fade'
  };

  modalData = {
    type: 'form',
    title: 'Create New Item',
    subtitle: 'Fill out the form below',
    content: '',
    message: '',
    isDestructive: false,
    submitLabel: 'Create',
    cancelLabel: 'Cancel'
  };

  modalForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    description: ['']
  });

  constructor(private fb: FormBuilder) {}

  get canSubmit(): boolean {
    return this.modalData.type === 'form' 
      ? this.modalForm.valid 
      : true;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
    this.modalForm.reset();
    this.isLoading = false;
  }

  onModalOpen(event: CustomEvent) {
    console.log('Modal opened:', event.detail);
  }

  onModalClose(event: CustomEvent) {
    console.log('Modal closed:', event.detail);
    this.closeModal();
  }

  async onSubmit() {
    if (!this.canSubmit) return;

    this.isLoading = true;
    
    try {
      if (this.modalData.type === 'form') {
        const formData = this.modalForm.value;
        await this.submitForm(formData);
      } else {
        await this.handleConfirmation();
      }
      
      this.closeModal();
    } catch (error) {
      console.error('Submit error:', error);
    } finally {
      this.isLoading = false;
    }
  }

  private async submitForm(data: any): Promise<void> {
    // Simulate API call
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  private async handleConfirmation(): Promise<void> {
    // Handle confirmation logic
    console.log('Confirmed action');
  }
}
```
