import { Bot } from "./bot.js";
import { BotMessage } from "./bot-message.js";
import { BotButton } from "./bot-button.js";
export { Bot } from "./bot.js";
export { BotMessage } from "./bot-message.js";
export { BotButton } from "./bot-button.js";

customElements.define("atomico-bot", Bot);
customElements.define("atomico-bot-message", BotMessage);
customElements.define("atomico-bot-button", BotButton);
