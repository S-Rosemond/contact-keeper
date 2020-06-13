import React from 'react';
import { v4 } from 'uuid';
import AlertContext from './alert.context';
import AlertReducer from './alert.reducer';

import { SET_ALERT, REMOVE_ALERT } from './alert.type';

export default function AlertState(props) {
  const initialState = [];

  const [state, dispatch] = React.useReducer(AlertReducer, initialState);

  const setAlert = (msg, type, timeout = 5000) => {
    const id = v4();

    dispatch({ type: SET_ALERT, payload: { msg, type, id } });

    setTimeout(() => removeAlert(id), timeout);
  };

  const removeAlert = (id) => dispatch({ type: REMOVE_ALERT, payload: id });

  const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if (!emailRegex.test(email) && email !== '') {
      setAlert('Please use a valid email format', 'danger');
    }
  };

  return (
    <AlertContext.Provider
      value={{
        alerts: state,
        setAlert,
        validateEmail,
      }}
    >
      {props.children}
    </AlertContext.Provider>
  );
}
