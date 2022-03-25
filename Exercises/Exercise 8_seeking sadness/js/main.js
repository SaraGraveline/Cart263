/**
Desperately Seeking Sadness
Sara Graveline

This game is trying to find a emoji that is different from the other emoji. It tries to seek unhappiness because its life is way to happy.
*/

"use strict";

let config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);
