import { c, css, useProp } from "atomico";
import { tokensSpace, tokensBorder, tokensColors } from "./tokens";

function botMessage() {
  const [, setDisabled] = useProp("disabled");
  return (
    <host shadowDom>
      <slot />
      <div
        class="buttons"
        onclick={(event) => {
          if (event.target.hasAttribute("for")) {
            setDisabled(true);
          }
        }}
      >
        <slot name="button" />
      </div>
    </host>
  );
}

botMessage.props = {
  show: {
    type: Boolean,
    reflect: true,
    value: false,
  },
  for: {
    type: String,
    reflect: true,
  },
  disabled: {
    type: Boolean,
    reflect: true,
  },
};

botMessage.styles = [
  tokensSpace,
  tokensBorder,
  tokensColors,
  css`
    :host {
      display: block;
      background: #f1f1f9;
      padding: 0.5rem 1rem;
      border-radius: var(--border-radius) var(--border-radius) 0px var(--border-radius);
    }

    :host(:not([show])){
      display: none;
    }

    :host([disabled]){
      pointer-events: none;
    }

    .buttons {
      display: flex;
      gap:calc(var(--space-x) / 2);
      padding-top: var(--space-y);
      flex-flow: row wrap;
    }

    ::slotted(:not([slot="button"])){
      width: 100%;
      border-radius: calc(var(--border-radius) / 2);
      margin-top: var(--space-y)
    }
  `,
];

export const BotMessage = c(botMessage);
