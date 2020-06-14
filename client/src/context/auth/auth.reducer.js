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

function AuthReducer(state, { type, payload }) {
  console.log(payload);
  switch (type) {
    case REGISTER_SUCCESS:
      localStorage.setItem('contact_keeper', payload.token);
      return { ...state, ...payload, isAuthenticated: true, loading: false };

    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('contact_keeper');
      return {
        ...state,
        error: payload,
        token: null,
        user: null,
        isAuthenticated: false,
        loading: false,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };

    case LOGIN_SUCCESS:
      return;

    case LOGIN_FAIL:
      return;

    case LOGOUT:
      return;

    case CLEAR_ERRORS:
      return { ...state, error: null };

    default:
      return state;
  }
}

export default AuthReducer;
