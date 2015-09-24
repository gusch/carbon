import Events from 'events';

class Store extends Events.EventEmitter {

  constructor(Dispatcher, data) {
    super();

    var _store = this;

    this.data = data;

    this.dispatchToken = Dispatcher.register(this.dispatcherCallback);
  }

  addChangeListener = (callback) => {
    this.on('change', callback);
  };

  removeChangeListener = (callback) => {
    this.removeListener('change', callback);
  };

  getState = () => {
    return this.data;
  };

  dispatcherCallback = (action) => {
    this[action.actionType].call(this, action)
    this.emit('change');
  }
}

export default Store