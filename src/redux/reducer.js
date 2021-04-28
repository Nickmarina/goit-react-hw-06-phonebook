import { combineReducers, createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, filterContacts } from './actions';

const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const items = createReducer(initialState.contacts.items, {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, action) =>
    state.filter(contact => contact.id !== action.payload.id),
});
const filter = createReducer(initialState.contacts.filter, {
  [filterContacts]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });

// WITHOUT TOOLKIT
//
// const items = (state = initialState.contacts.items, action) => {
//   switch (action.type) {
//     case types.ADD:
//       return [...state, action.payload];
//     case types.DELETE:
//       return state.filter(contact => contact.id !== action.payload.id);
//     default:
//       return state;
//   }
// };
// const filter = (state = initialState.contacts.filter, action) => {
//   switch (action.type) {
//     case 'contacts/filter':
//       return action.payload;
//     default:
//       return state;
//   }
// };
// export default combineReducers({
//   items,
//   filter,
// });
