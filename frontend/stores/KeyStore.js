var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/Dispatcher');


var KeyStore = new Store(AppDispatcher);

var _keys = [];

KeyStore.all = function() {
  return _keys.slice();
};

KeyStore.include = function(key) {
  if (_keys.indexOf(key) !== -1) {
    return true;
  }
  return false;
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ADD_KEY":
      addKey(payload.noteName);
      KeyStore.__emitChange();
      break;
    case "DELETE_KEY":
      deleteKey(payload.noteName);
      KeyStore.__emitChange();
      break;
  }
};

var addKey = function(key) {
  _keys.push(key);
};

var deleteKey = function(key) {
  var idx = _keys.indexOf(key);
  _keys.splice(idx, 1);
};

module.exports = KeyStore;
