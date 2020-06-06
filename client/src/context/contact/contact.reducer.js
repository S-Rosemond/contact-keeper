import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from './../types';

function ContactReducer(state, { type, payload }) {
  switch (type) {
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, payload],
      };
    case DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((contact) => contact.id !== payload),
      };
    case SET_CURRENT:
      return {
        ...state,
        contacts: payload,
      };
    case CLEAR_CURRENT:
      return { ...state, payload };
    case UPDATE_CONTACT:
      return { ...state, payload };
    case FILTER_CONTACTS:
      return { ...state, payload };
    case CLEAR_FILTER:
      return { ...state, payload };
    default:
      return state;
  }
}

export default ContactReducer;
