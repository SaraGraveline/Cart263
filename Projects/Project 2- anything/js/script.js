/**
Project 2 - Reality Check - Quiz 1
Sara Graveline

Reality check is a game where the user test her/his knowledge by taking some quizzes.
This game has the quiz where the user need to answer three question to move on to the next question. The first one is about the name of Ross' monkey.
The Second question is who first find out about Monica and Chandler. and The third question is about the order of the color in friends show logo. 

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
      location.replace("quiz2.html")
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
    if($(this).text() ===`Marcel Joey 🔴 🟡 🔵 🔴 🟡 🔵`) {
      $(`#solved-dialog`).dialog(`open`);
    }
  //  if statement for when the answer is wrong and pop-up opens up
    if($(this).text() === `Marcus Joey 🔴 🟡 🔵 🔴 🟡 🔵`) {
      $(`#failed-dialog`).dialog(`open`);
    }
  }
});

// thank you.
