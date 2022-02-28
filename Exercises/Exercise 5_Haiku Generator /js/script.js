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
// undefind lines from html
let line1P = [];
let line2P = [];
let line3P = [];

// getting the element by id from html and assigned it in js.
id ();
// function for apply random syllables to lines/paragraph
innerText ();
//animations the clicking on each lines
addEventListener ();

// getting the element by id from html and assigning random lines to them in js.

// three elements from html containing random lines from the lines above
function id() {
  line1P = document.getElementById('line-1');
  line2P = document.getElementById('line-2');
  line3P = document.getElementById('line-3');
}

// apply which type of syllables belongs to which line/paragraph
function innerText() {
  line1P.innerText = random(fiveSyllables);
  line2P.innerText = random(sevenSyllables);
  line3P.innerText = random(fiveSyllables);
}

// Animation of fade in and out for each lines with clicked upon //

// animation for the clicking on each lines
function addEventListener() {
  line1P.addEventListener(`click`, lineClicked);
  line2P.addEventListener(`click`, lineClicked);
  line3P.addEventListener(`click`, lineClicked);
}

// makes the line fadeout when clicked upon
function lineClicked(event) {
  fadeOut(event.target, 1);
};

// function for fadeoout with opacity.
function fadeOut(element, opacity) {
  // decreases the opacity
  opacity -= 0.01;
  element.style[`opacity`] = opacity;
  // opacity is less then 0 and if it reach 0, it stops
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
  // increase in opacity
  opacity += 0.01;
  element.style[`opacity`] = opacity;
  // less than 1 number of the opacity, if it reaches 1 then animation stops
  if (opacity < 1 ) {
    requestAnimationFrame(function() {
      fadeIn(element, opacity);
    })
  }
};

// function for when the mouse is over lines it will make them black
function mouseOver() {
  document.getElementById("line-1").style.color = "black";
  document.getElementById("line-2").style.color = "black";
  document.getElementById("line-3").style.color = "black";
}

// function for when the mouse is not over the lines it will make them different colors.
function mouseOut() {
  document.getElementById("line-1").style.color = "blue";
  document.getElementById("line-2").style.color = "red";
  document.getElementById("line-3").style.color = "green";
}
// assigning the different syllables line to the 3 lines and return array function for returning a random element //

// appears the change of lines depending on the syllables
function setNewLine(element) {
  // line 1 and 3 is five syllables
  if (element === line1P || element === line3P) {
    element.innerText = random(fiveSyllables);
  }
  else if (element === line2P) {
    // middle line is seven syllables
    element.innerText = random(sevenSyllables);
  }
};

// return array function for returning a random element.
function random(array) {
  //gives us a random number
  let index = Math.floor(Math.random() * array.length);
  return array[index];
};

// thank you
