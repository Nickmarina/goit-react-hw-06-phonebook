// import { configureStore } from '@reduxjs/toolkit';
// import combineReducers from './reducer';
// export const store = configureStore({ reducer: combineReducers });

import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import contactsReducer from './reducer';

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const store = configureStore({
  reducer: persistReducer(persistConfig, contactsReducer),
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
