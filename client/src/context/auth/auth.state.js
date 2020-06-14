import React, { useReducer } from 'react';
import axios from 'axios';
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

  const apiCall = axios.create({
    baseURL: '/api',
    timeout: 8000,
    headers: {
      'Content-Type': 'application/json',
    },
  });

  // Register User
  const registerUser = async (formData) => {
    try {
      const res = await apiCall.post('/users', formData);

      dispatch({ type: REGISTER_SUCCESS, payload: res.data });
    } catch (error) {
      console.log('error', error.response);
      const { data } = error.response;

      registerFailed(data.error);
    }
  };

  const registerFailed = (payload) =>
    dispatch({ type: REGISTER_FAIL, payload });

  const login = () => dispatch({ type: LOGIN_SUCCESS, payload: '' });

  const loginFailed = () => dispatch({ type: LOGIN_FAIL, payload: '' });

  const logout = () => dispatch({ type: LOGOUT, payload: '' });

  const loadUser = async () => {
    try {
      const res = await apiCall.get('/auth');

      dispatch({ type: USER_LOADED, payload: res.data });
    } catch (error) {
      authError();
    }
  };

  const authError = () => dispatch({ type: AUTH_ERROR });

  const clearErrors = () => dispatch({ type: CLEAR_ERRORS });

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        loading: state.loading,
        error: state.error,
        isAuthenticated: state.isAuthenticated,
        user: state.user,
        registerUser,
        clearErrors,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthState;
