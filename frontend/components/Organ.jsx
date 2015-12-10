var React = require('react'),
    Tones = require('../constants/Tones'),
    Key = require('./Key');

var Organ = React.createClass({

  render: function() {
    var noteNames = Object.keys(Tones);
    var keys = noteNames.map(function(note, idx) {
      return <Key key={idx} noteName={note} />;
    });

    return(
      <div className="container">
        {keys}
      </div>
    );
  }
});

module.exports = Organ;
