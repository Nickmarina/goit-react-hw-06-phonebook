import { combineReducers } from 'redux';
import types from './types';
const initialState = {
  contacts: {
    items: [],
    filter: '',
  },
};

const items = (state = initialState.contacts.items, action) => {
  switch (action.type) {
    case types.ADD:
      return [...state, action.payload];
    case types.DELETE:
      return state.filter(contact => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const filter = (state = initialState.contacts.filter, action) => {
  switch (action.type) {
    case 'contacts/filter':
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  items,
  filter,
});

// const reducer = (state = initialState.contacts, action) => {
//   switch (action.type) {
//     case types.ADD:
//       return [...state.items, action.payload];
//     case 'types.DELR':
//       return state.items.filter(
//         contact => contact.action.payload !== action.payload,
//       );
//     case 'contacts/filter':
//       return action.payload;
//     default:
//       return state;
//   }
// };

// export default reducer;
