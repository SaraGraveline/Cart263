/**
Project 2 - Anything
Sara Graveline


*********
game 7: guessing game
  - This game will match the right tv show or diolgue with the right show.
  - guess the write emjio to the movie
  - guess the right emjio to the diolgue.
  - guess the right sport with sport logos
  - write the lyrics to the song after listening to it.
  - use the drag and drop option
  - use the hand moment
  - use voice words
  - after listening, guess the singer/artist
  - map which test your history of places (you drag and drop stuff on the map) - this could be mine prototype.
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
