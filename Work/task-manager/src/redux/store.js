import thunk from 'redux-thunk';
import reducer from './reducer/index.js';
import { createStore, applyMiddleware, compose } from 'redux';


const store = createStore(reducer, compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.subscribe(() => {})

export default store;