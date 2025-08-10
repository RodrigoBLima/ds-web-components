import { newSpecPage } from "@stencil/core/testing";
import { WcButton } from "./wc-button";

describe("wc-button", () => {
  it("renders with primary variant and default props", async () => {
    const page = await newSpecPage({
      components: [WcButton],
      html: `<wc-button></wc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-button>
        <mock:shadow-root>
          <button type="button" class="cursor-pointer inline-flex items-center justify-center rounded px-4 py-2 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed bg-primary-300 hover:bg-primary-400 focus-visible:ring-primary-light text-neutral-0">
            <slot name="left"></slot>
            <slot></slot>
            <slot name="right"></slot>
          </button>
        </mock:shadow-root>
      </wc-button>
    `);
  });
});
