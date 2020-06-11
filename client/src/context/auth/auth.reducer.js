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
  switch (type) {
    case REGISTER_SUCCESS:
      return 'temp';

    case REGISTER_FAIL:
      return 'temp';

    case LOGIN_SUCCESS:
      return;

    case LOGIN_FAIL:
      return;

    case LOGOUT:
      return;

    case USER_LOADED:
      return;

    case AUTH_ERROR:
      return;

    case CLEAR_ERRORS:
      return;

    default:
      return state;
  }
}

export default AuthReducer;
