import { LOADING_FINISHED, LOADING_START } from 'constants/types';

export const startLoading = () => dispatch => {
  dispatch({ type: LOADING_START });
};

export const stopLoading = () => dispatch => {
  dispatch({ type: LOADING_FINISHED });
};
