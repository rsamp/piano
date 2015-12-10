var KeyActions = require('../actions/KeyActions');
var KeyStore = require('../stores/KeyStore');

var Mapping = {
  65: 'C4',
  83: 'D4',
  68: 'E4',
  70: 'F4',
  74: 'G4',
  75: 'A4',
  76: 'B4',
  186: 'C5'
};

$(document).on("keydown", function(e){
  if(!KeyStore.include(Mapping[e.keyCode])){
    KeyActions.keyPressed(Mapping[e.keyCode]);
  }
});

$(document).on("keyup", function(e){
  KeyActions.keyReleased(Mapping[e.keyCode]);
});
