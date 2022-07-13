import { c, css } from "atomico";
import { tokensSpace, tokensBorder, tokensColors } from "./tokens";

function botButton({ href, target }) {
  return (
    <host shadowDom>
      <a href={href} target={target}>
        <slot />
      </a>
    </host>
  );
}

botButton.props = {
  slot: {
    type: String,
    value: "button",
    reflect: true,
  },
  href: String,
  target: {
    type: String,
    value: "_blank",
  },
};

botButton.styles = [
  tokensSpace,
  tokensBorder,
  tokensColors,
  css`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--border-radius);
      background: var(--color-primary);
      color: var(--color-primary-contrast);
      padding: calc(var(--space-y)/2) calc(var(--space-x)/2);
      font-size: 0.85em;
      cursor: pointer;
    }
    a {
      color: unset;
      text-decoration: none;
    }
  `,
];

export const BotButton = c(botButton);
