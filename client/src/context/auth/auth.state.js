import React, { useReducer } from 'react';
import AuthContext from './auth.context';
import AuthReducer from './auth.reducer';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  USER_LOADED,
  AUTH_ERROR,
  CLEAR_ERRORS,
} from '../types';

function AuthState(props) {
  const initialState = {
    token: localStorage.getItem('contact_keeper'),
    isAuthenticated: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const payload = 'temp';

  // Register User
  const registerUser = () => dispatch({ type: REGISTER_SUCCESS, payload });

  const registerFailed = () => dispatch({ type: REGISTER_FAIL, payload });

  const login = () => dispatch({ type: LOGIN_SUCCESS, payload });

  const loginFailed = () => dispatch({ type: LOGIN_FAIL, payload });

  const logout = () => dispatch({ type: LOGOUT, payload });

  const userLoaded = () => dispatch({ type: USER_LOADED, payload });

  const authError = () => dispatch({ type: AUTH_ERROR, payload });

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS, payload });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        registerUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
