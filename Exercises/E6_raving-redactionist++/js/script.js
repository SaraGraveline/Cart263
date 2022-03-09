/**
E6: Raving Redactionist

This codes a webpage of text with some passage redacted. And the redacted text appears randomly.
The main goal is to try to hide the redacted text that is being revealy randomly.
*/

"use strict";


//makes tge h1 disappear and appear over and over with mouse click on top-secret class.
$( `.top-secret` ).on(`click`, function(event) {
  $( `h1`).fadeOut(500, function() {
    $(`h1`).fadeIn(500);
  });
});

//enables the mouse click for the text to redact.
$(`.top-secret`).on(`click`, redact);
//calls the revelation function and try to reveal the secret.
setInterval(revelation, 500);


//hides the text that was revealed with a mouse click over it.
function redact(event) {
  $(this).removeClass(`revealed`);
  $(this).addClass(`redacted`);
};

//calls each element from html with redacted class.
function revelation() {
  $(`.redacted`).each(attemptReveal);
};

//reveal the redacted text randomly with removeclass and reveals it with add class.
function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
};

//thank you
