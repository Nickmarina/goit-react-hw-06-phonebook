import { createStore } from 'redux';
import combineReducers from './reducer';

export const store = createStore(
  combineReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
// console.log(store.getState());