import { createAction } from '@reduxjs/toolkit';

export const addContact = createAction('contacts/add');
export const deleteContact = createAction('contacts/delete');
export const filterContacts = createAction('contacts/filter');

// WITHOUT TOOLKIT
//
// export const addContact = payload => ({
//   type: types.ADD,
//   payload,
// });
// // id
// export const deleteContact = payload => ({
//   type: types.DELETE,
//   payload,
// });
// export const filterContacts = payload => ({
//   type: types.FILTER,
//   payload,
// });
