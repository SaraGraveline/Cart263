/**
Project 1 - A Night at the Movies
Sara Graveline

This project is losely based on the movie called Nerve. In this movie, the player needs to get the dare given by the watcher.
The dare can be anything and at the end, there is only one player. This project looks at two made up dare that the user needs to preform to finish the game.
Dare 1 is to drop a worse picture of oneself and dare 2 is to name the family member one dislike the most.
**/

"use strict";
let state = 0; // state for different pages of the game

let vid, shot, eye, file, skull, fingerprint, timer, hacker, goodluck; // variable for all the gif used on state 2 and on function preload.

let mostHated = { // variable for the dare 2 - to fill a family member name.
  name: `stranger`
};

//
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

//
// This function creates the canvas which has the whole window height and width.
function setup() {
  createCanvas(windowWidth, windowHeight);
};

//
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

//
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

function intro(){
  background(0);
  image(vid, 0,0);
  image(shot, 100, 600, 700, 400);
  image(eye, 1400, 600, 300, 300);
  image(file, 900, 0, 900, 400);
  image(skull, 450, 250);
  image(fingerprint, 950, 450);
  image(timer, 600, 50, 100, 100);
  image(hacker, 70, 280, 250, 250);
}

function endintro(){
  background(0); //background image
  fill(0, 242, 222);
  textFont(`gasalt`);
  textSize(30);
  text('Press mouse to start', width/2, 800);
  image(goodluck, 500,-40, 800, 800);
};

function startGame() {
  push();
  challengeCompleted();
  text(`Are you ready for your first challenge!`, width/2, height/4);
  pop();

  push();
  fill(255);
  rect(width/2.4, height/2, 300, 120, 40);
  acceptButton();
  text(`1 to ACCEPT`, width/2, height/2+70)
  pop();

  emojis();

  if(key ===`1`) {
    state = 4
  };
};

function challengeOne() {
  let f = createCanvas(windowWidth, windowHeight);
 // Add an event for when a file is dropped onto the canvas
 f.drop(kidPhoto);

 push();
 challengeTypography();
 text('Challenge 1 -', width/2, height/2 - 100)
 text('Drag and Drop a worse image of youself onto this canvas.', width / 2, height / 2);
 pop();
};

function challengeOneEnd() {
  push();
  challengeCompleted();
  text(`  Well Done!
    "🎊" You recieved $300. "🎉",
    Next Challenge`, width/2, height/4);
  pop();

  push();
  fill(255);
  rect(width/2.4, height/2+100, 300, 120, 40);
  acceptButton();
  text(`2 to Accept`, width/2, height/2+170)
  pop();

  emojis();

  if(key ===`2`) {
    state = 6
  };
};

function challengeTwo() {
  push();
  challengeTypography();
  text('Challenge 2 -', width/2, height/2 - 100);
  text('Who do you dislike the most in your family?', width / 2, height/2);
  pop();

  let data = JSON.parse(localStorage.getItem(`family-name`));
  if (data !==null) {
    mostHated.name = data.name
  } else {
    mostHated.name = prompt(`Disliked family member?`);
    localStorage.setItem(`family-name`, JSON.stringify(mostHated));
  }
};

function challengTwoEnd() {
  push();
  challengeCompleted();
  text(`  Well Done!
    "🎊" You recieved $700. "🎉"`, width/2, height/3);
  pop();

  push();
  fill(255);
  rect(width/3.1, height/2+100, 610, 120, 40);
  acceptButton();
  text(`Total money recieved = $10,000`, width/2, height/2+170)
  pop();

  emojis();
};

function endgame(){
  push();
  challengeCompleted();
  text(`"🎊" Thank you & I hope
  you enjoyed this little game. "🎉"`, width/2, height/2-150);
  pop();
};

function mousePressed (){
  if(state == 0){
    state = 1
} else if(state == 1) {
    state = 2
  } else if (state == 2) {
    state = 3
  } else if (state == 6) {
    state = 7
  }else if (state == 7) {
    state = 8
  };
};

function emojis() {
  //by cassie titled hacker on p5js
  push();
  textSize(50);
  let emojis = ["🎉", "🎊", "🥳", "💖", "🌈","🤑", "💸", "💰", "💵"];
  let emoji = emojis[floor(random(0, emojis.length))];
  text(emoji, random(0, width), random(0, height));
  pop();
};

//https://p5js.org/reference/#/p5.Element/drop
function kidPhoto(file) {
  // If it's an image file
  if (file.type === 'image') {
    // Create an image DOM element but don't show it
    let kidphoto = createImg(file.data).hide();
    // Draw the image onto the canvas
    image(kidphoto, 0, 0, width, height);
  }; state = 5;
};

function challengeTypography() {
  background(255, 68, 204);
  fill(255);
  noStroke();
  textSize(80);
  textAlign(CENTER);
};

function challengeCompleted() {
  background(0, 242, 222);
  fill(255, 68, 204);
  textFont(`gasalt`);
  textSize(100);
};

function acceptButton() {
  fill(255, 68, 204);
  textSize(50);
  textStyle(BOLD);
  textFont(`gasalt`);
};
