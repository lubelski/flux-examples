var React = require('react');
var list = require('./list');
var store = require('./store');

window.React = React;

store.addItem('Some Item', 5);
store.addItem('Another Item', 25);

document.addEventListener('DOMContentLoaded', function () {
  React.render(list(), document.getElementById('container'))
});



