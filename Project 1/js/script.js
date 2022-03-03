/**
Project 1 - A Night at the Movies
Sara Graveline

Movie Nerve
**/

"use strict";

let state = 0;

let vid;
let shot;
let eye;
let file;
let skull;
let fingerprint;
let timer;
let hacker;
let goodluck;

let userData = {
  name: `stranger`
};

function preload() {
  vid = loadImage('assets/player.gif');
  shot = loadImage(`assets/shoting.gif`);
  eye = loadImage( `assets/eye.gif`);
  file = loadImage(`assets/files.gif`);
  skull = loadImage(`assets/skull.gif`);
  fingerprint = loadImage(`assets/fingerprint.gif`);
  timer = loadImage(`assets/timer.gif`);
  hacker = loadImage(`assets/hacker.gif`);
  goodluck = loadImage(`assets/goodluck.gif`);
};

function setup() {
  createCanvas(windowWidth, windowHeight);
};

function draw() {
  //if statement for the state variable. This changes the screens from start, middle or to end.
  if(state == 0) {
    startScreen()
  }else if (state == 1) {
    intro()
  }else if (state == 2) {
    endintro()
  }else if (state == 3) {
    startGame()
  } else if (state == 4) {
    challengeOne()
  } else if (state == 5) {
    challengeOneEnd()
  } else if (state == 6) {
    challengeTwo()
  };
};

//This function is for the start screen/ intro screen.
function startScreen(){
  background(0);
  textAlign(CENTER);
  textSize(60);
  fill(255, 68, 204)
  textFont(`gasalt`);
  textStyle(BOLD);

  if (keyIsPressed) {
    stroke(255);
    strokeWeight(4);
  }
  else {
    noStroke();
  }

  push();
  fill(0, 242, 222)
  textSize(200);
  text('NERVE', width/2, height/2);
  pop();

  push();
  text('WATCHER OR', width/2-100, height/2+50);
  pop();

  push();
  text('PLAYER', width/2+160, height/2+50);
  pop();

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
  text('Press any key to start', width/2, 800);
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
 text('Drag and Drop a image of your child onto this canvas.', width / 2, height / 2);
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
  text('Challenge 2 -', width/2, height/2 - 300);
  text('Rob a bank by finding the bank code.', width / 2, height/2 - 200);
  pop();

  push();
  fill(0);
  textSize(20);
  text(`hint: console`, width/2, height/2+350);
  pop();

  let data =  JSON.parse(localStorage.getItem(`web-storage-example-personalization`));
  if (data !== null) {
    userData.name = data.name;
  }
  else {
    userData.name = prompt(`What is your SIN number?`);
    localStorage.setItem(`web-storage-example-personalization`, JSON.stringify(userData));
  }

  display();
};

function display(){
  textSize(64);
  textAlign(CENTER);
  text(`Hello, Pippin!`, width/2, height/2);
}

function mousePressed (){
  if(state == 0){
    state = 1
} else if(state == 1) {
    state = 2
  } else if (state == 2) {
    state = 3
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
