var _ = require('lodash');

var store = {

  _items: [],

  _callbacks: [],

  _triggerRegisteredCallbacks: function () {
    _.each(this._callbacks, function (callback) {callback();});
  },

  registerChangeCallback: function (callback) {
    this._callbacks.push(callback);
  },

  unregisterChangeCallback: function (callback) {
    _.pull(this._callbacks, callback);
  },

  getItems: function () {
    return this._items;
  },

  addItem: function (name, quantity) {
    this._items.push({name: name, quantity: quantity});
    this._triggerRegisteredCallbacks();
  }
};

module.exports = window.store = store
