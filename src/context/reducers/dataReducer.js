import { actionTypes } from '../actions/dataActions';

const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case actionTypes.FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        data: {
          ...state.data,
          [action.payload.endpoint]: action.payload.result,
        },
      };
    case actionTypes.FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      throw new Error('Unsupported action type');
  }
};

export default dataFetchReducer;
