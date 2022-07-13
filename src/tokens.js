import { css } from "atomico";

export const tokensSpace = css`
  :host {
    --offset: var(--bot--offset, 1rem);
    --space-y: var(--bot--space-y, 0.5rem);
    --space-x: var(--bot--space-x, 1rem);
  }
`;

export const tokensBorder = css`
  :host {
    --border-radius: var(--bot--border-radius, 1rem);
  }
`;

export const tokensColors = css`
  :host {
    --color-primary: var(--bot--color-primary, #0080FF);
    --color-primary-contrast: var(--bot--color-primary-contrast, #fff);
  }
`;
