var KeyActions = require('../actions/KeyActions');

var KeyListener = function(){

  $(document).on("keydown", KeyActions.keyPressed);
  $(document).on("keyup", KeyActions.keyReleased);

};


module.exports = KeyListener;
