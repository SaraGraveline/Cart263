/**
Project 1 - A Night at the Movies
Sara Graveline

This project is loosely based on the movie called Nerve. In this movie, the player needs to get the dare given by the watcher.
The dare can be anything and at the end, there is only one player. This project looks at two made up dare that the user needs to preform to finish the game.
Dare 1 is to drop a worse picture of oneself and dare 2 is to name the family member one dislike the most.

gif sources: 1) https://gfycat.com/allhandmadeisopod 2) https://www.pinterest.com/pin/82894449376104569/ 3) https://tenor.com/search/fingerprint-gifs 4)https://giphy.com/explore/countdown-timer
             5) https://vapor95.com/blogs/darknet/hackers 6) https://gifer.com/en/gifs/nerve-movie 7) https://tenor.com/view/nerve-emma-roberts-gif-7390424 8)https://tenor.com/view/eye-see-you-look-animation-gif-10833857
Reference:   P5js.org reference, class lecture and videos and hacker by cassie on p5js.
**/

"use strict";
let state = 0; // state for different pages of the game

let vid, shot, eye, file, skull, fingerprint, timer, hacker, goodluck; // variable for all the gif used on state 2 and on function preload.

let mostHated = { // variable for the dare 2 - to fill a family member name.
  name: `stranger`
};

//Preload
//This preloads all the gifs that are displayed on state 2 and 3.
function preload() {
  vid = loadImage('assets/player.gif');
  shot = loadImage(`assets/shoting.gif`);
  eye = loadImage(`assets/eye.gif`);
  file = loadImage(`assets/files.gif`);
  skull = loadImage(`assets/skull.gif`);
  fingerprint = loadImage(`assets/fingerprint.gif`);
  timer = loadImage(`assets/timer.gif`);
  hacker = loadImage(`assets/hacker.gif`);
  goodluck = loadImage(`assets/goodluck.gif`);
};

//Setup
// This function creates the canvas which has the whole window height and width.
function setup() {
  createCanvas(windowWidth, windowHeight);
};

//Draw
//This function displays all the states and there if statements. It controlls the change between states.
function draw() {
  if (state == 0) {
    startScreen() //Title name of the movie/this game
  } else if (state == 1) {
    intro() //This state is filled with gifs of the movie to introduce the movie to the player.
  } else if (state == 2) {
    endintro() //good luck to the player and ending the intro states
  } else if (state == 3) {
    startGame() //this state is where the game starts
  } else if (state == 4) {
    challengeOne() //the player gets their first challenge
  } else if (state == 5) {
    challengeOneEnd() //the player finished the challenge 1 successfully and acception to challenge 2 appares.
  } else if (state == 6) {
    challengeTwo() //the palyer gets their second challenge with a pop-up block to add a person's name
  } else if (state == 7) {
    challengTwoEnd() //Player completed the second challenge and moves towards the end of the game.
  } else if (state == 8) {
    endgame() //This state ends the game and thanks the player.
  };
};

//State 0
//This function is for the start screen where the title of the game appares.
function startScreen() {
  background(0);
  textAlign(CENTER);
  textSize(60);
  fill(255, 68, 204);
  textFont(`gasalt`);
  textStyle(BOLD);

  //if statement when any key is pressed, it will create strokes around the title text otherwise it will not.
  if (keyIsPressed) {
    stroke(255);
    strokeWeight(4);
  } else {
    noStroke();
  };
  //Nerve text's color, size and position number
  push();
  fill(0, 242, 222)
  textSize(200);
  text('NERVE', width / 2, height / 2);
  pop();
  //watcher or text position on the canvas
  push();
  text('WATCHER OR', width / 2 - 100, height / 2 + 50);
  pop();
  //Player text's position on the canvas
  push();
  text('PLAYER', width / 2 + 160, height / 2 + 50);
  pop();
  //draws the linestroke across the 'watcher or' text.
  push();
  stroke(255);
  strokeWeight(2);
  line(950, 497, 635, 497);
  pop();
};

//State 1
//This function displays all the gif onto the canvas.
function intro() {
  background(0); //black bg.
  image(vid, 0, 0);
  image(shot, 100, 600, 700, 400);
  image(eye, 1400, 600, 300, 300);
  image(file, 900, 0, 900, 400);
  image(skull, 450, 250);
  image(fingerprint, 950, 450);
  image(timer, 600, 50, 100, 100);
  image(hacker, 70, 280, 250, 250);
};

//State 2
//This function display's the good luck gif to the player and gives the instruction to move forward by pressing the mouse.
function endintro() {
  background(0); //black bg
  fill(0, 242, 222); //neon blue fill
  textFont(`gasalt`);
  textSize(30);
  text('Press mouse to start', width / 2, 800); //Instruction to press the mouse to go to the next state
  image(goodluck, 500, -40, 800, 800); //loads the goodluck gif onto the canvas
};

//State 3
//This function ask the player if they are ready to start playing byt pressing 1 on their keyword to accept the challenge.
function startGame() {
  //Question to the player displays on the screen with challengeCompleted function.
  push();
  challengeCompleted(); //this function contains all the fill, type, font and size requirement.
  text(`Are you ready for your first challenge!`, width / 2, height / 4);
  pop();
  //this displays the white fake button with the instruction to how to move forward.
  push();
  fill(255);
  rect(width / 2.4, height / 2, 300, 120, 40); //white rectangle
  acceptButton(); //this function is all about text size, font, style for fake button
  text(`1 to ACCEPT`, width / 2, height / 2 + 70);
  pop();

  emojis(); //this function is just a fun boucing emojis on the canvas to create excitment.

  //if statement for when the player press 1, the state should switch to state 4 which is challenge one.
  if (key === `1`) {
    state = 4
  };
};

//State 4
//This function introduces the challenge One and require the player to drop a file onto the canvas in order to move forward.
function challengeOne() {
  let f = createCanvas(windowWidth, windowHeight); //defines the f where the drop block becomes the whole width and height of the canvas.
  f.drop(worsePhoto); //the p5 term to drop a file of worse photo onto the canvas

  //Instruction for what challenge 1 is.
  push();
  challengeTypography(); //this function displays the text size, font, style and fill for this text.
  text('Challenge 1 -', width / 2, height / 2 - 100)
  text('Drag and Drop a worse image of youself onto this canvas.', width / 2, height / 2);
  pop();
};

//State 5
//This function is display when challenge one is completed successfully. The displays the result and how much money the player recieved after completed the challenge.
function challengeOneEnd() {
  //Well done text and money recieved text with challengeCompleted function.
  push();
  challengeCompleted(); //this function contains all the fill, type, font and size requirement.
  text(`  Well Done!
    "🎊" You recieved $300. "🎉",
    Next Challenge`, width / 2, height / 4);
  pop();

  //instruction to move on the the next challenge.
  push();
  fill(255);
  rect(width / 2.4, height / 2 + 100, 300, 120, 40);
  acceptButton(); //this function is all about text size, font, style for fake button
  text(`2 to Accept`, width / 2, height / 2 + 170);
  pop();

  emojis(); //this function is just a fun boucing emojis on the canvas to create excitment.

  //if statement for when the player press 2, the state should switch to state 6 which is challenge one.
  if (key === `2`) {
    state = 6
  };
};

//State 6
//This function displays the second challenge with a pop-up where the player will put their family member's name.
function challengeTwo() {
  //introduces what challenge 2 is.
  push();
  challengeTypography(); //this function contains all the fill, type, font and size requirement.
  text('Challenge 2 -', width / 2, height / 2 - 100);
  text('Who do you dislike the most in your family?', width / 2, height / 2);
  pop();

  // a pop-up block where the player will put a name in.
  //video Web storge AP1 from class
  let data = JSON.parse(localStorage.getItem(`family-name`));
  if (data !== null) {
    mostHated.name = data.name
  } else {
    mostHated.name = prompt(`Disliked family member?`);
    localStorage.setItem(`family-name`, JSON.stringify(mostHated));
  };
};

//State 7
//This function is for the ending of challenge two where it displays the amount of money won through this challenge and also the total amount of money recieved.
function challengTwoEnd() {
  //Well done and amount of the money recieved text.
  push();
  challengeCompleted(); //this function contains all the fill, type, font and size requirement.
  text(`  Well Done!
    "🎊" You recieved $700. "🎉"`, width / 2, height / 3);
  pop();
  //This text displays the total amount of money recieved by a player, playing this game.
  push();
  fill(255);
  rect(width / 3.1, height / 2 + 100, 610, 120, 40);
  acceptButton(); //this function is all about text size, font, style for fake button
  text(`Total money recieved = $10,000`, width / 2, height / 2 + 170);
  pop();

  emojis(); //this function is just a fun boucing emojis on the canvas to create excitment.
};

//State 8
//this function ends the game and shows thank you text.
function endgame() {
  push();
  challengeCompleted(); //this function contains all the fill, type, font and size requirement.
  text(`"🎊" Thank you & I hope
  you enjoyed this little game. "🎉"`, width / 2, height / 2 - 150);
  pop();
};

//MousePressed
//This function also changes the starts indicated in the if statement when the mouse is pressed.
function mousePressed() {
  if (state == 0) { //startscreen state
    state = 1 //intro state
  } else if (state == 1) {
    state = 2 //endintro state
  } else if (state == 2) {
    state = 3 //stateGame state
  } else if (state == 6) { //intro to challenge 2 state
    state = 7 //end to challenge 2 state
  } else if (state == 7) {
    state = 8 //endgame state
  };
};

//Drag and Drop challenge 1 function
//https://p5js.org/reference/#/p5.Element/drop
function worsePhoto(file) {
  // Checks if it's an image file
  if (file.type === 'image') {
    // Image DOM element and hide it with hide()
    let worsePhoto = createImg(file.data).hide();
    // Displays the image on the canvas
    image(worsePhoto, 0, 0, width, height);
  };
  state = 5; //switches to state 5.
};

//Emojis
//This function displays the emojis randomly across x and y axis.
function emojis() {
  //hacker by cassie on p5js
  push();
  textSize(50);
  let emojis = ["🎉", "🎊", "🥳", "💖", "🌈", "🤑", "💸", "💰", "💵"];
  let emoji = emojis[floor(random(0, emojis.length))];
  text(emoji, random(0, width), random(0, height));
  pop();
};

//This function contains the same type and fill requirement for every beginning of the challenge.
function challengeTypography() {
  background(255, 68, 204);
  fill(255);
  noStroke();
  textSize(80);
  textAlign(CENTER);
};

//This function contains the same type and fill requirement for every ending of the challenge.
function challengeCompleted() {
  background(0, 242, 222);
  fill(255, 68, 204);
  textFont(`gasalt`);
  textSize(100);
};

//This function contains the fake white accept button's type and fill requirment.
function acceptButton() {
  fill(255, 68, 204);
  textSize(50);
  textStyle(BOLD);
  textFont(`gasalt`);
};

/*Thank you*/
