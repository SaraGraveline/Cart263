/**
Activity 5: Bubble Popper
Sara Graveline

This activity is about playing around with ml5 and the feature of handpose. And also too get confortable with it.
To do list:
  - Get handpose working
  - Bubble Popper
  - Drawing a pin
  - Movement of Bubble
*/

"use strict";

//Access the users webcam
let video = undefined;

//Access the handpose
let handpose = undefined;


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
}

function draw() {

}
