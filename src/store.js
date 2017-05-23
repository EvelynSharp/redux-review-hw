import { createStore, compose } from 'redux';
import rootReducer from './reducers/index';
//same as import rootReducer from './reducers'?;
//if import from a folder with no specification, will import index.js
//1st step, privider, 2nd, make store, 3rd, make reducer
//reducer isa pure function that keeps track of a tree branch of the store
//dispatch action is the only way to update state

const enhancers = compose (
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

const store= createStore(rootReducer, {}, enhancers);

if (module.hot) {
  module.hot.accept('./reducers/', () => {
    const nextRootReducer = require('./reducers/index').default;
    store.replaceReducer(nextRootReducer);
  });
}


export default store;
