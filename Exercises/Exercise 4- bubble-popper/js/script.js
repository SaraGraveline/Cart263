/**
Activity 5: blueBubble  Popper
Sara Graveline

This activity is about playing around with ml5 and the feature of handpose. And also too get confortable with it.
To do list:
  - Get handpose working - blueBubble  Popper - Drawing a pin - Movement of Bubble
  1) Add sound to when the blueBubble  is popping
  2) put how many of the bubbles were poped
  3) and other blueBubble  if they are poped then the game ends.
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
let blueBubble = undefined;

let redBubble = undefined;

let state =`title`;

function preload() {

}

function setup() {
  createCanvas(500, 700);

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

  //Proporties of the bluebubble
  blueBubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  };

  //Proporties of the redbubble
  redBubble = {
    x: random(width),
    y: height,
    size: 100,
    vx: 0,
    vy: -2
  };
};


function draw() {
  background(220,245,255);

  //if statement for the title, simulation and failed.
  if (state === `title`) {
    title();
  }
  else if (state === `simulation`) {
    simulation();
  }
  else if (state === `failed`) {
    failed();
  };

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
    stroke(120, 150, 210);
    strokeWeight(2);
    line(baseX, baseY, tipX, tipY);
    pop();

    //draws the red circle at the end of the line
    push();
    noStroke();
    fill(255, 0, 0);
    ellipse(baseX, baseY, 20);
    pop();

    //sees if the blueBubble  pops or not
    let d = dist(tipX, tipY, blueBubble.x, blueBubble.y);
    if (d < blueBubble.size/2) {
      blueBubble.x = random(width);
      blueBubble.y = random(height);
    }

    //sees if the tip touches the redbubble or not
    let x = dist(tipX, tipY, redBubble.x, redBubble.y);
    if (x < redBubble.size/2) {
      redBubble.x = random(width);
      redBubble.y = random(height);
    }
  };
};

function title() {
  push();
  textSize(40);
  fill(150, 150, 255);
  textAlign(CENTER, CENTER);
  text(`  Destroy Covid
    so human being's can
    return to their normal life.`, width/2, height/2);
  pop();
};

function simulation() {
  //makes the main blueBubble move
  blueBubble.x += blueBubble.vx;
  blueBubble.y += blueBubble.vy;

  //makes the main redBubble move
  redBubble.x += redBubble.vx;
  redBubble.y += redBubble.vy;

  //makes the blueBubble appear randomly on the width.
  if (blueBubble.y < 0) {
    blueBubble.x = random(width);
    blueBubble.y = height;
  };
  if (blueBubble.x < 0) {
    blueBubble.x = width;
    blueBubble.y = random(height);
  };

  //makes the redBubble appear randomly on the width.
  if (redBubble.y < 0) {
    redBubble.x = random(width);
    redBubble.y = height;
  };
  if (redBubble.x < 0) {
    redBubble.x = width;
    redBubble.y = random(height);
  };


//draws the main blueBubble that needs to be poped.
  push();
  fill(0, 100, 200);
  noStroke();
  ellipse(blueBubble.x, blueBubble.y, blueBubble.size);
  pop();

//draws the main redBubble that should not be poped.
  push();
  fill(255, 99, 71);
  noStroke();
  ellipse(redBubble.x, redBubble.y, redBubble.size);
  pop();
};

//Starts the game. This leads to the simulation when you press the mouse.
function mousePressed() {
  if (state === `title`) {
    state = `simulation`;
  }
};
