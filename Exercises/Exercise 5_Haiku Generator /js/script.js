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

// this is the data where the five syllables haiku lines are made from
let fiveSyllables = [
    `O, be a tree`,
    `The cat does not know`,
    `We are all forests`,
    `You have done your best`,
    `They are all gone now`
];

// this is the data where the seven syllables haiku lines are made from
let sevenSyllables = [
    `Say the things left unsaid`,
    `Never believe the wind's lies`,
    `The autumn stretches its legs`,
    `Nothing can satisfy you`,
    `They will not come back again`
];

// three elements from html containing random lines from the lines above
let line1P = document.getElementById('line-1');
let line2P = document.getElementById('line-2');
let line3P = document.getElementById('line-3');

// apply which type of syllables belongs to which line/paragraph
line1P.innerText = random(fiveSyllables);
line2P.innerText = random(sevenSyllables);
line3P.innerText = random(fiveSyllables);

// appears the change of lines depending on the syllables
function setNewLine(element) {
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllables);
  }
  else if (element === line2P) {
    element.innerText = random(sevenSyllables);
  }
};

// animation for the clicking on each lines
line1P.addEventListener(`click`, lineClicked);
line2P.addEventListener(`click`, lineClicked);
line3P.addEventListener(`click`, lineClicked);

// makes the line fadeout when clicked upon
function lineClicked(event) {
  fadeOut(event.target, 1);
};

// function for fadeoout with opacity.
function fadeOut(element, opacity) {
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  if (opacity > 0) {
    requestAnimationFrame(function() {
        fadeOut(element, opacity);
    });
  }
  else {
    // if statement for the new line to fade in when the first line is faded-out
    setNewLine(element);
    fadeIn(element, 0);
  }
};

// function for fadeIn with opacity animation
function fadeIn(element, opacity) {
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  if (opacity < 1 ) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    })
  }
};

// return array function for returning a random element.
function random(array) {
  //gives us a random number
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};
