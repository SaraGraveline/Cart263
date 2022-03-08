/**
E6: Raving Redactionist

This codes a webpage of text with some passage redacted. And the redacted text appears randoml.
*/

"use strict";

//telling the revelation function.
setInterval(revelation, 500);

function revelation() {
  $(`.redacted`).each(attemptReveal);
};

//reveal text
function attemptReveal() {
  let r = Math.random();
  if (r < 0.1) {
    $(this).removeClass(`redacted`);
    $(this).addClass(`revealed`);
  }
};

//hides the text
