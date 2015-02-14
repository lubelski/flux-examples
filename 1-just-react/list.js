var React = require('react');
var _ = require('lodash');
var store = require('./store');

var div = React.DOM.div
var input = React.DOM.input
var button = React.DOM.button

var list = {
  displayName: 'list',

  getInitialState: function () {
    return {
      items: store.getItems(),
      name: '',
      quantity: 1
    };
  },

  componentDidMount: function () {
    store.registerChangeCallback(this.onStoreChange);
  },

  componentWillUnmount: function () {
    store.unregisterChangeCallback(this.onStoreChange);
  },

  onStoreChange: function () {
    this.setState({items: store.getItems()});
  },

  onNameChange: function (event) {
    this.setState({name: event.target.value});
  },

  onQuantityChange: function (event) {
    this.setState({quantity: event.target.value});
  },

  onKeyPress: function (event){
    if (event.key === 'Enter') store.addItem();
  },

  onClickAdd: function () {
    this.addItem()
  },

  addItem: function () {
    store.addItem(this.state.name, this.state.quantity);
    this.setState({name: '', quanity: 1});
  },

  render: function () {

    displayItems = _.map(this.state.items, function (item) {
      return div({className: 'item'},
        div({className: 'item-name'}, item.name),
        div({className: 'item-quantity'}, item.quantity)
      );
    });

    return div({className: 'list'},
      div({className: 'items'}, displayItems ),
      div({className: 'add-item-section'},
        input({className: 'add-item-name', value: this.state.name, onChange: this.onNameChange}),
        input({className: 'add-item-quantity', value: this.state.quantity, onChange: this.onQuantityChange}),
        button({className: 'add-item-button', onClick: this.onClickAdd}, 'Add an Item' )
      )
    );
  }
};

module.exports = React.createFactory(React.createClass(list));

