/**
Save the bride
Sara Graveline

This game is about a groom and bride getting married at the beach but for nowhere they are attacked by zombies.
During this panic, the bride is lost somewhere in the crowd of these creature. The groom must
find a way to the bride, in order to save her and marry her.

citations:
https://www.flaticon.com/free-icon/bride_703218?term=bride&page=1&position=36
https://www.flaticon.com/free-icon/groom_703219?related_id=703219&origin=search
https://www.flaticon.com/premium-icon/zombie_2274555?term=zombie&page=1&position=57&page=1&position=57&related_id=2274555&origin=search
https://freesound.org/people/plumaudio/sounds/488227/
*/

"use strict";

//basic configuration for the game
let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 800,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play] //calls the other js files
};

let game = new Phaser.Game(config);
