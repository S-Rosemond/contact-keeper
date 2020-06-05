import React, { useReducer } from 'react';
import uuid from 'uuid';
import ContactContext from './contact.context';
import ContactReducer from './contact.reducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from './../types';
import contactArray from './contact.temp';

function ContactState(props) {
  const initialState = {
    contacts: contactArray,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //    Add Contact
  const addContact = () => dispatch();

  //    Delete Contact
  const deleteContact = () => dispatch();

  //    Set Contact
  const setContact = () => dispatch();

  //    Clear Contact
  const clearContact = () => dispatch();

  //   Update Contact
  const updateContact = () => dispatch();

  //    Filter Contact
  const filterContact = () => dispatch();

  //   Clear Filter
  const clearFilter = () => dispatch();

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
