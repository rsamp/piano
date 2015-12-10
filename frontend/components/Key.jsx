var React = require('react'),
    Tones = require('../constants/Tones'),
    Note = require('../util/Note'),
    KeyStore = require('../stores/KeyStore'),
    KeyListener = require('../util/KeyListener.js');


var Key = React.createClass({

  // getInitialState: function() {
  //   return { playing: false };
  // },

  _keyIsInStore: function(){
    if (KeyStore.include(this.props.noteName)) {
      // console.log(this.note);
      // debugger;
      this.note.start();
    } else {
      this.note.stop();
    }
  },

  componentDidMount: function(){
    var noteName = this.props.noteName;
    var freq = Tones[noteName];
    this.note = new Note(freq);
    KeyStore.addListener(this._keyIsInStore);
  },

  componentWillUnmount: function(){
    KeyStore.removeListener(this._keyIsInStore);
  },

  render: function(){
    return(
      <div className="key">{this.note}</div>
    );
  }
});

module.exports = Key;
