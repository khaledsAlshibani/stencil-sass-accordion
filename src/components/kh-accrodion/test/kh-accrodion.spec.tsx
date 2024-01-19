import { newSpecPage } from '@stencil/core/testing';
import { KhAccordion } from '../kh-accordion';

describe('kh-accordion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KhAccordion],
      html: `<kh-accordion></kh-accordion>`,
    });
    expect(page.root).toEqualHtml(`
      <kh-accordion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kh-accordion>
    `);
  });
});
