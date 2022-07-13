import { c, css, useRef, useProp } from "atomico";
import { useSlot } from "@atomico/hooks/use-slot";
import { tokensSpace, tokensBorder, tokensColors } from "./tokens";

function bot() {
  const ref = useRef();
  const slot = useSlot(ref).filter((el) => el instanceof Element);
  const refAvatar = useRef();
  const slotAvatar = useSlot(refAvatar);
  const [, setShow] = useProp("show");
  return (
    <host
      shadowDom
      onclick={(event) => {
        if (event.target.hasAttribute("for")) {
          const value = event.target.getAttribute("for");
          const message = slot.find((el) => el.id === value);
          if (message) message.show = true;
        }
      }}
    >
      <div class="bot">
        <div class="bot-messages">
          <slot ref={ref} />
        </div>
        <div
          class={`bot-avatar ${!slotAvatar.length ? "hidden" : ""}`}
          onclick={(el) => setShow((value) => !value)}
        >
          <slot name="avatar" ref={refAvatar} />
        </div>
      </div>
    </host>
  );
}

bot.props = {
  show: {
    type: Boolean,
    reflect: true,
  },
  position: {
    type: String,
    reflect: true,
  },
};

bot.styles = [
  tokensSpace,
  tokensBorder,
  tokensColors,
  css`
    ::slotted([slot="avatar"]) {
      width: 100%;
    }
    :host([position]) {
      position: fixed;
      display: block;
      z-index: 10;
    }
    :host([position="right bottom"]) {
      right: var(--offset);
      bottom: var(--offset);
    }
    :host([position="left bottom"]) {
      left: var(--offset);
      bottom: var(--offset);
    }
    :host(:not([show])) .bot-messages {
      display: none;
    }
    .bot {
      display: flex;
      flex-flow: row;
      align-items: flex-end;
      gap: var(--space-x);
    }
    .bot-messages {
      width: 200px;
      display: flex;
      flex-flow: column nowrap;
      gap: var(--space-y);
    }
    .bot-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      overflow: hidden;
      cursor: pointer;
    }
    .hidden {
      display: none;
    }
  `,
];

export const Bot = c(bot);
