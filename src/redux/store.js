import { configureStore } from '@reduxjs/toolkit';
import combineReducers from './reducer';

export const store = configureStore({ reducer: combineReducers });

// WITHOUT TOOLKIT
//
// export const store = createStore(
//   combineReducers,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );
// console.log(store.getState());
