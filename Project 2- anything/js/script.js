/**
Project 2 - Anything
Sara Graveline

Ideas for this project:
1. A music video where there is a list of songs to pick from and
   after selecting the lyrics to the song appears and you sing it with your microphone on.
2. A ecapse room inspired by BTS.
3. A website where you create a collage by dragging and dropping stuff.
4. The whole process of graphic design where you talk with the client, design the stuff and print it.
5. escape room with graphic design.
6. save the earth where you clean the ocean by picking up plastic, clean the air with your hand etc.
7. guess the right person and show
8. Type experiment where you create your own create your own type.
9. party games where you do what you want to do: 1)chess, poker, uno,
10: guess the rbg color where I give the whole theory of color and the person has to follow it.

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

**********
Game names brainstorm:
1. Reality check
2. How much do you think you know
3. do you know your stuff
4. Do you know the classic stuff that shapes american culture.
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
