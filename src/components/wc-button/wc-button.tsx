import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'wc-button',
  shadow: true,
})
export class WcButton {
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() disabled = false;

  render() {
    return (
      <Host>
        <button class="inline-flex items-center justify-center px-4 py-2 rounded bg-primary-300 text-neutral-0">
          <slot></slot>
        </button>
      </Host>
    );
  }
}
