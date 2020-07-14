import api from '../../api';
import {
  SIGNIN_SUCCESS,
  SIGNIN_FAILURE,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
} from '../../constants/types';

export const signin = (username, password, history) => async dispatch => {
  try {
    const response = await api.post(
      '/utilisateur/login',
      {},
      {
        params: {
          username,
          password,
        },
      },
    );
    localStorage.setItem('token', response.data.id);
    dispatch({ type: SIGNIN_SUCCESS, payload: response.data });
    history.push('/home');
  } catch (error) {
    dispatch({ type: SIGNIN_FAILURE, error });
  }
};
export const signout = history => async (dispatch, getState) => {
  try {
    const state = getState();
    console.log(state.user);
    const token = localStorage.getItem('token');

    const config = {
      headers: {
        Authorization: token,
      },
    };
    await api.post('/utilisateur/logout', undefined, config);
    localStorage.removeItem('token');
    dispatch({ type: LOGOUT_SUCCESS });
    history.push('/login');
  } catch (error) {
    console.log(error);
    dispatch({ type: LOGOUT_FAILURE, error });
  }
};
