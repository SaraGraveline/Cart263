/*****************
Project 2: Quiz 2 - Finding Nemo
Sara Graveline

This quiz is about finding Nemo but through a sea full of sharks. The user will have to move with arrowkeys to go find Nemo and save her from all the sharks.
When Nemo is saved, she get lost again because she keeps on forgetting. So the user have to save her endlessly. When she is found, sound plays. The not limites on finding Nemo makes this game relaxing. 

https://github.com/dariusk/corpora/ by Darius Kazemi
https://www.flaticon.com/search?word=user
https://www.pngaaa.com/download/65581
******************/
"use strict";

//basic configuration for the game
let config = {
  type: Phaser.AUTO,
  width: 1200,
  height: 650,
  physics: {
    default: `arcade`
  },
  scene: [Boot, Play] //calls the other js files
};

let game = new Phaser.Game(config);
