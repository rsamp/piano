var KeyActions = require('../actions/KeyActions');
var KeyStore = require('../stores/KeyStore');

var Mapping = {
  65: 'C4',
  87: 'D4',
  83: 'E4',
  69: 'F4',
  68: 'G4',
  82: 'A4',
  70: 'B4',
  74: 'C5',
  73: 'D5',
  75: 'E5',
  79: 'F5',
  76: 'G5',
  186: 'A6'

};

$(document).on("keydown", function(e){
  if(!KeyStore.include(Mapping[e.keyCode])){
    KeyActions.keyPressed(Mapping[e.keyCode]);
  }
});

$(document).on("keyup", function(e){
  KeyActions.keyReleased(Mapping[e.keyCode]);
});
