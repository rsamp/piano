var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher');


var KeyStore = Store.new(AppDispatcher);

var _keys = [];

KeyStore.all = function() {
  return _keys.slice();
};

KeyStore.__onDispatch = function(payload) {
  switch(payload.actionType) {
    case "ADD_KEY":
      addKey(payload.key);
      break;
    case "DELETE_KEY":
      deleteKey(payload.key);
      break;
  }
};

var addKey = function(key) {
  _keys.push(key);
  KeyStore.__emitChange();
};

var deleteKey = function(key) {
  var idx = _keys.indexOf(key);
  _keys.slice(idx, 1);
  KeyStore.__emitChange();
};

module.exports = KeyStore;
