/**
Project 1 - A Night at the Movies
Sara Graveline

Some ideas:
- minions movie
  -
- One eposide of run BTS
- game of throne where the user will have to climb the wall
- up movie where the user has to add and pop some ballons to go up and down
- Despicale me where the guy is trying to enter into the villan's house so the idea is to not let that happen.
- texting game where you get to try to stop the
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
