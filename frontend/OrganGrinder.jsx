var React = require('react');
var ReactDOM = require('react-dom');
var Key = require('./components/Key');
var Organ = require('./components/Organ');
require('./util/KeyListener');

document.addEventListener("DOMContentLoaded", function() {
  ReactDOM.render(<Organ />, document.getElementById('content'));
});
