/**
Desperately Seeking Sadness
Sara Graveline

This game is trying to find a emoji that is different from the other emoji. It tries to seek unhappiness because its life is way to happy.

https://www.flaticon.com/free-icon/bride_703218?term=bride&page=1&position=36
https://www.flaticon.com/free-icon/groom_703219?related_id=703219&origin=search
https://www.flaticon.com/premium-icon/zombie_2274555?term=zombie&page=1&position=57&page=1&position=57&related_id=2274555&origin=search
https://freesound.org/people/plumaudio/sounds/488227/
*/

"use strict";

let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 800,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play]
};

let game = new Phaser.Game(config);
