/**
E7: Code Taker++

This codes a webpage with hidden letters which is revealed when the user hovers on it and
after discovering all the letters, the user will have to write it in the box.
*/

"use strict";

$(`#solved-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "I know!": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`#failed-dialog`).dialog({
  autoOpen: false,
  buttons: {
    "Nooooooo!! One more try!": function() {
      $(this).dialog(`close`);
    }
  }
});

$(`.secret`).one(`mouseover`, function(event) {
  $(this).addClass(`found`, 500);
  $(this).draggable({
    helper: `clone`
  });
});

$(`#answer`).droppable({
  drop: function(event, ui){
    let letter = ui.draggable.text();
    $(this).append(letter);
    ui.draggable.draggable(`disable`);
    ui.draggable.removeClass(`found`);
    if($(this).text() ===`🤗bangtan - sonyeondan`) {
      $(`#solved-dialog`).dialog(`open`);
    }
    if($(this).text() === `bangtan - sonyeondan`) {
      $(`#failed-dialog`).dialog(`open`);
    }
  }
});
