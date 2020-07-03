import { FETCH_AGENCE_FAILURE, FETCH_AGENCE_SUCCESS } from 'constants/types';

const initialState = {
  agenceList: [],
};

export default (state = initialState, { type, payload, error }) => {
  switch (type) {
    case FETCH_AGENCE_FAILURE:
      return { ...state, error };
    case FETCH_AGENCE_SUCCESS:
      return { ...state, agenceList: payload };

    default:
      return state;
  }
};
