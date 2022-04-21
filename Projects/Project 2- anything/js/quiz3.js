/**
Quiz 2: A note for the Teacher and TA.

The goal is to complete the three sentenses by dragging and droping them into the box. It have a nice note for the teacher and ta.
I use the ui.draggable and droppable in this quiz.

citation:
https://giphy.com/gifs/sticker-osjgQPWRx3cac
*/

"use strict";
//the answer dialog from html
$(`#solved-dialog`).dialog({
  autoOpen: false, //prevents the pop-up to open before the solution
  //button so the user can close the pop-up
  buttons: {
    "The end!!": function() {
      $(this).dialog(`close`);
      location.replace("index.html")
    }
  }
});

//this pop-up opens when the user answer it wrong
$(`#failed-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "Nooooooo!! Try again": function() {
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
    if($(this).text() ===`Thank you so much Pippin and Sharon. I have learned a lot in this class. I hope you have a great summer and good health.`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  }
});

// thank you.
