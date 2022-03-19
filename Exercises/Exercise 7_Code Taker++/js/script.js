/**
E7: Code Taker++

This codes a webpage with hidden letters which is revealed when the user hovers on it and
after discovering all the letters, the user will have to write it in the box.

images and gif sources:
https://www.freepik.com/ // all animal images comes from this website.
https://tenor.com/search/bts-gifs // all the gifs comes from this website.
*/

"use strict";

//the answer dialog from html
$(`#solved-dialog`).dialog({
  autoOpen: false, //prevents the pop-up to open before the solution
  //button so the user can close the pop-up
  buttons: {
    "I know!": function() {
      $(this).dialog(`close`);
    }
  }
});

//this pop-up opens when the user answer it wrong
$(`#failed-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "Nooooooo!! One more try!": function() {
      $(this).dialog(`close`);
    }
  }
});

//Mouseover event which reveals the letters in red and also makes clone of the letter.
$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

//Makes the letters drappable and draggable
$(`#answer`).droppable({
  drop: function(event, ui){
    let letter = ui.draggable.text();
    $(this).append(letter); //when added to the red border box.
    ui.draggable.draggable(`disable`); //after it is not draggable
    ui.draggable.removeClass(`found`); //and the found class is removes after the task is done.
    //if statement for when the answer is right and the pop-up opens up
    if($(this).text() ===`🤗bangtan - sonyeondan`) {
      $(`#solved-dialog`).dialog(`open`);
    }
    //if statement for when the answer is wrong and pop-up opens up
    if($(this).text() === `bangtan - sonyeondan`) {
      $(`#failed-dialog`).dialog(`open`);
    }
  }
});

// thank you.
