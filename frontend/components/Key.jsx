var React = require('react'),
    Tones = require('../constants/Tones'),
    Note = require('../util/Note'),
    KeyStore = require('../stores/KeyStore'),
    KeyListener = require('../util/KeyListener.js');

var WHITE = ['C4', 'E4', 'G4', 'B4', 'C5', 'E5', 'G5', 'A6'];

var BLACK = ['D4', 'F4', 'A4', 'D5', 'F5'];


var Key = React.createClass({

  getInitialState: function() {
    return { playing: false, note: new Note(Tones[this.props.noteName]) };
  },

  _keyIsInStore: function(){
    if (KeyStore.include(this.props.noteName)) {
      this.state.note.start();
      this.setState({playing: true});
    } else {
      this.state.note.stop();
      this.setState({playing: false});
    }
  },

  componentDidMount: function(){
    KeyStore.addListener(this._keyIsInStore);
  },

  componentWillUnmount: function(){
    KeyStore.removeListener(this._keyIsInStore);
  },

  render: function(){
    var color = WHITE.indexOf(this.props.noteName) === -1 ? "black" : "white";
    var playing = this.state.playing ? color + " pressed" : color;
    return(
      <div className={playing} />
    );
  }
});

module.exports = Key;
