/**
Exercise 5: Haiku Generator++
Sara Graveline

This excerise if about experimenting with HTML, CSS and JS. It also generates a haiku which is random.

Plan:
1. Tidy up the program as per the suggestions in the activity and any other thoughts you have
2. Significantly improve the HTML and CSS presentation of the haiku
3. Add another DOM event into the user interaction that changes the poem somehow (maybe key presses or mouseovers change the color of the text?)
*/

"use strict";

// this is the data where the haiku lines are made from
let fiveSyllables = [
    `O, be a tree`,
    `The cat does not know`,
    `We are all forests`,
    `You have done your best`,
    `They are all gone now`
];

let sevenSyllables = [
    `Say the things left unsaid`,
    `Never believe the wind's lies`,
    `The autumn stretches its legs`,
    `Nothing can satisfy you`,
    `They will not come back again`
];

let line1 = random(fiveSyllables);
let line2 = random(sevenSyllables);
let line3 = random(fiveSyllables);

let line1P = document.getElementById('line-1');
let line2P = document.getElementById('line-2');
let line3P = document.getElementById('line-3');

line1P.innerText = line1;
line2P.innerText = line2;
line3P.innerText = line3;

function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllables);
  }
  else if (element === line2P) {
    element.innerText = random(sevenSyllables);
  }
};

line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

function lineClicked(event) {
  fadeOut(event.target, 1);
};

function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
        fadeOut(element, opacity);
    });
  }
  else {
    setNewLine(element);
    fadeIn(element, 0);
  }
};

function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1 ) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    })
  }
};


function random(array) {
  //gives us a random number
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};
