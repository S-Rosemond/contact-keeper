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

function AuthState() {
  const initialState = { () =>};

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const registerUser = () => dispatch();
  const registerFailed = () => dispatch();
  const loginSuccess = () => dispatch();
  const loginFailed = () => dispatch();
  const logout = () => dispatch();
  const userLoaded = () => dispatch();
  const authError = () => dispatch();
  const clearErrors = () => dispatch();
}

export default AuthState;
