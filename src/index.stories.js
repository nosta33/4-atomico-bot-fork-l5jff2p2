import "./index.js";

export default {
  parameters: {
    layout: "centered",
  },
};

export const story1 = () => /*html*/ `<atomico-bot show>
  <img slot="avatar" src="https://pbs.twimg.com/profile_images/1218401963139903488/Ikw1jzUD_400x400.jpg"/>
  <atomico-bot-message show>
    👋 Hi, My name is Atomico and I invite you to play with me
    <atomico-bot-button for="how">How?</atomico-bot-button>
    <atomico-bot-button for="fuck">Fuck you!</atomico-bot-button>
  </atomico-bot-message>
  <atomico-bot-message id="how">
    Visiting my site and following us on github with a ⭐
    <img src="https://media3.giphy.com/media/xUPGGDNsLvqsBOhuU0/giphy.gif?cid=ecf05e47rwmnilnnsaee2hmhajupgqx3ec4b655p1asxny0y&rid=giphy.gif&ct=g"/>
    <atomico-bot-button href="https://atomicojs.github.io/">Site</atomico-bot-button>
    <atomico-bot-button href="https://github.com/atomicojs/atomico">Github</atomico-bot-button>
    <atomico-bot-button href="https://twitter.com/atomicojs">Twitter</atomico-bot-button>
  </atomico-bot-message>
  <atomico-bot-message id="fuck">
    Because if I also like cats
    <img src="https://media0.giphy.com/media/BzyTuYCmvSORqs1ABM/giphy.gif?cid=ecf05e47lr56qwk0jc7s87xeey78uhnmv0i4518plcqvv1ml&rid=giphy.gif&ct=g"/>
    <atomico-bot-button for="fuck-2">Fuck you again!</atomico-bot-button>
  </atomico-bot-message>
  <atomico-bot-message id="fuck-2">
    Fuck you too!, but with tenderness
  </atomico-bot-message>
</atomico-bot>`;
