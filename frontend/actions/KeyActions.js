var AppDispatcher = require('../dispatcher');

var KeyActions = {
  keyPressed: function(key){
    AppDispatcher.dispatch({
      actionType: "ADD_KEY",
      key: key
    });
  },

  keyReleased: function(key){
    AppDispatcher.dispatch({
      actionType: "DELETE_KEY",
      key: key
    });
  }

};

module.exports = KeyActions;
