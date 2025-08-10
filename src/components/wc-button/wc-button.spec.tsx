import { newSpecPage } from '@stencil/core/testing';
import { WcButton } from './wc-button';

describe('wc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcButton],
      html: `<wc-button></wc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-button>
        <mock:shadow-root>
          <button class="inline-flex items-center justify-center px-4 py-2 rounded bg-primary-300 text-neutral-0">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </wc-button>
    `);
  });
});
