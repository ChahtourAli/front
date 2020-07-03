import api from 'api';
import { FETCH_AGENCE_FAILURE, FETCH_AGENCE_SUCCESS } from 'constants/types';

export const fetchAgenceList = () => async (dispatch, getState) => {
  try {
    const response = await api.get('/agence');
    dispatch({ type: FETCH_AGENCE_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_AGENCE_FAILURE, error });
  }
};
