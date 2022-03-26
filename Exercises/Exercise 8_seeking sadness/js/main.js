/**
Desperately Seeking Sadness
Sara Graveline

This game is trying to find a emoji that is different from the other emoji. It tries to seek unhappiness because its life is way to happy.

https://freesound.org/people/plumaudio/sounds/488227/
https://pngtree.com/freebackground/fresh-wedding-season-church-background-cartoon-design_954826.htmlHAPP
*/

"use strict";

let config = {
  type: Phaser.AUTO,
  width: 1000,
  height: 800,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);
