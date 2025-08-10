import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'wc-button',
  shadow: true,
})
export class WcButton {
  @Prop() variant: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' = 'primary';
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop() disabled = false;

  private variantClasses = {
    primary: 'bg-primary-300 hover:bg-primary-400 focus-visible:ring-primary-light text-neutral-0',
    secondary: 'bg-secondary-300 hover:bg-secondary-400 focus-visible:ring-secondary-100 text-neutral-0',
    success: 'bg-success-300 hover:bg-success-400 focus-visible:ring-success-100 text-neutral-0',
    warning: 'bg-warning-300 hover:bg-warning-400 focus-visible:ring-warning-100 text-neutral-500',
    danger: 'bg-danger-300 hover:bg-danger-400 focus-visible:ring-danger-100 text-neutral-0',
  };

  render() {
    return (
      <Host>
        <button
          type={this.type}
          disabled={this.disabled}
          class={[
            'inline-flex items-center justify-center rounded px-4 py-2 font-medium transition-colors',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
            'disabled:opacity-60 disabled:cursor-not-allowed',
            this.variantClasses[this.variant],
          ].join(' ')}
        >
          <slot name="left"></slot>
          <slot></slot>
          <slot name="right"></slot>
        </button>
      </Host>
    );
  }
}
