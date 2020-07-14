import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../constants/types';

const initialState = {
  isloggedin: false,
  user: null,
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case SIGNIN_SUCCESS:
      return { ...state, isloggedin: true, user: payload };
    case SIGNIN_FAILURE:
    case LOGOUT_FAILURE:
      return { ...state, error };
    case LOGOUT_SUCCESS:
      return initialState;
    default:
      return state;
  }
};
