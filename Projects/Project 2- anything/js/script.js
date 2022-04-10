/**
Project 2 - Reality Check
Sara Graveline

Reality check is a game where the user test her/his knowledge by taking some quizzes.
This prototype has the quiz where the user need to figure out the name of shows based on the emojis showed on the page and put the answer in the box.

***
For the final game quiz ideas:
  - match the right tv show diolgue with the right show.
  - guess the movie from emojis
  - match the right emoji to the diolgue.
  - guess the right sport with sport logos
  - write the lyrics to the song after listening to it.
  - use the drag and drop optioncas xdass
  - use the hand moment
  - use voice words
  - after listening, guess the singer/artist

  *** sources
  https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_fullscreen_video
  Video by Johnson Cherian from Pixabay
  Video by Stefania Buzatu from Pixabay
  https://giphy.com/explore/friends-tv-show // gifs of friends
*/

"use strict";
//the answer dialog from html
$(`#solved-dialog`).dialog({
  autoOpen: false, //prevents the pop-up to open before the solution
  //button so the user can close the pop-up
  buttons: {
    "Next Quiz!!": function() {
      $(this).dialog(`close`);
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
    if($(this).text() ===`🦖🥳👨‍💻🤪🛍🧹`) {
      $(`#solved-dialog`).dialog(`open`);
    }
    //if statement for when the answer is wrong and pop-up opens up
    if($(this).text() === `🥳🤪🦖🛍👨‍💻🧹`) {
      $(`#failed-dialog`).dialog(`open`);
    }
  }
});

// thank you.
