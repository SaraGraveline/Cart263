/**
Activity 5: Bubble Popper
Sara Graveline

This activity is about playing around with ml5 and the feature of handpose. And also too get confortable with it.
To do list:
  - Get handpose working - Bubble Popper - Drawing a pin - Movement of Bubble
  1) Add sound to when the bubble is popping
  2) put how many of the bubbles were poped
  3) and other bubble if they are poped then the game ends.
  4) put the wording on the blue bubble: homework
  5) and the wording on new bubble: break 
*/

"use strict";

//Access the users webcam
let video = undefined;

//Access the handpose
let handpose = undefined;

//Set for the predictions
let prediction = [];

// the undefined bubble
let bubble = undefined;

function preload() {

}

function setup() {
  createCanvas(640, 480);

  //This access the user's webcam
  video = createCapture(VIDEO);
  video.hide();

  //Loads the handpose model
  handpose = ml5.handpose(video, {
    flipHorizontal: true
  },  function() {
    console.log(`Model loaded.`);
  });

  //console a log of if the hand is in the cam view.
  handpose.on(`predict`, function(results) {
    console.log(results);
    prediction = results;
  });

  //Proporties of the bubble
  bubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  };
};


function draw() {
  background(0);

  //all the prediction and different numbers for tip, basae and index.
  if (prediction.length > 0) {
    let hand = prediction[0];
    let index = hand.annotations.indexFinger;
    let tip = index[3];
    let base = index[0];
    let tipX = tip[0];
    let tipY = tip[1];
    let baseX = base[0];
    let baseY = base[1];

    //draws the line
    push();
    noFill();
    stroke(255, 255, 255);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    //draws the red circle at the end of the line
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    //sees if the bubble pops or not
    let d = dist(tipX, tipY, bubble.x, bubble.y);
    if (d < bubble.size/2) {
      bubble.x = random(width);
      bubble.y = random(height);
    }
  };

  //makes the main bubble move
  bubble.x += bubble.vx;
  bubble.y += bubble.vy;

  //makes the bubble appear randomly on the width.
  if (bubble.y < 0) {
    bubble.x = random(width);
    bubble.y = height;
  };
  if (bubble.x < 0) {
    bubble.x = width;
    bubble.y = random(height);
  };

//draws the main bubble that needs to be poped.
  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(bubble.x, bubble.y, bubble.size);
  pop();
};
