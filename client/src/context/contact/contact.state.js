import React, { useReducer } from 'react';
import { v4 } from 'uuid';
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
    current: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  //    Add Contact
  const addContact = (contact) => {
    contact.id = v4();

    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //    Delete Contact
  const deleteContact = (id) => dispatch({ type: DELETE_CONTACT, payload: id });

  //    Set Current Contact
  const setCurrent = (contact) =>
    dispatch({ type: SET_CURRENT, payload: contact });

  //    Clear Current Contact
  const clearCurrent = () => dispatch({ type: CLEAR_CURRENT });

  //   Update Contact
  const updateContact = (contact) =>
    dispatch({ type: UPDATE_CONTACT, payload: contact });

  //    Filter Contact
  const filterContact = () => dispatch();

  //   Clear Filter
  const clearFilter = () => dispatch();

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
}

export default ContactState;
