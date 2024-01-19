import { newSpecPage } from '@stencil/core/testing';
import { KhAccrodion } from '../kh-accrodion';

describe('kh-accrodion', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [KhAccrodion],
      html: `<kh-accrodion></kh-accrodion>`,
    });
    expect(page.root).toEqualHtml(`
      <kh-accrodion>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </kh-accrodion>
    `);
  });
});
