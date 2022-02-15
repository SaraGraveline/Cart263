/**
Project 1 - A Night at the Movies
Sara Graveline

Some ideas:
- minions movie
  - minions trying to find other villains to connent with
  - like moving from one side of the screen sqaure, it starts a small game which ends in bad and then the minions comes back to the main page and they die again.
- One eposide of run BTS
- game of throne where the user will have to climb the wall
- up movie where the user has to add and pop some ballons to go up and down
- Despicale me where the guy is trying to enter into the villan's house so the idea is to not let that happen.
- emotion game where you need to find good emotions to change the negative emotions
- tron game where you grab the disk and bring it to the other side and make a goal however there will be some obstacles.
- Nerve movies - based on texting - someone asks a question and you reply and  it tells you next steps.
  - and depending on the dares you get to do some those things. Like different games:
    - 1) like if the dare is to say something bad you did that you never told anyone and the player has to turn on their microphone to say it out loud
    - so on
**/

"use strict";

// Current state of program
let state = `loading`; // loading, running
// User's webcam
let video;
// The name of our model
let modelName = `Handpose`;
// Handpose object (using the name of the model for clarity)
let handpose;
// The current set of predictions made by Handpose once it's running
let predictions = [];

/**
Starts the webcam and the Handpose
*/
function setup() {
  createCanvas(640, 480);

  // Start webcam and hide the resulting HTML element
  video = createCapture(VIDEO);
  video.hide();

  // Start the Handpose model and switch to our running state when it loads
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  }, function() {
    // Switch to the running state
    state = `running`;
  });

  // Listen for prediction events from Handpose and store the results in our
  // predictions array when they occur
  handpose.on(`predict`, function(results) {
    predictions = results;
  });
}

/**
Handles the two states of the program: loading, running
*/
function draw() {
  if (state === `loading`) {
    loading();
  }
  else if (state === `running`) {
    running();
  }
}

/**
Displays a simple loading screen with the loading model's name
*/
function loading() {
  background(255);

  push();
  textSize(32);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
  text(`Loading ${modelName}...`, width / 2, height / 2);
  pop();
}

/**
Displays the webcam.
If there is a hand it outlines it and highlights the tip of the index finger
*/
function running() {
  // Display the webcam with reveresd image so it's a mirror
  let flippedVideo = ml5.flipImage(video);
  image(flippedVideo, 0, 0, width, height);

  // Check if there currently predictions to display
  if (predictions.length > 0) {
    // Technically there will only be ONE because it only detects ONE hand
    // Get the hand predicted
    let hand = predictions[0];
    // Highlight it on the canvas
    highlightHand(hand);
  }
}

/**
Provided with a detected hand it highlights the tip of the index finger
*/
function highlightHand(hand) {
  // Display a circle at the tip of the index finger
  let index = hand.annotations.indexFinger[3];
  let indexX = index[0];
  let indexY = index[1];

  let thumb = hand.annotations.thumb[3];
  let thumbX = thumb[0];
  let thumbY = thumb[1];

  let d = dist(indexX, indexY, thumbX, thumbY);
  if (d < 20) {
    fill(0, 255, 0);
  } else {
    fill(255, 0, 0);
  }

  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(indexX, indexY, 20);
  pop();

  push();
  fill(255, 255, 0);
  noStroke();
  ellipse(thumbX, thumbY, 20);
  pop();
};
