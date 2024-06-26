export const actionTypes = {
    FETCH_INIT: 'FETCH_INIT',
    FETCH_SUCCESS: 'FETCH_SUCCESS',
    FETCH_FAILURE: 'FETCH_FAILURE',
  };
  
  export const fetchInit = () => ({
    type: actionTypes.FETCH_INIT,
  });
  
  export const fetchSuccess = (endpoint, result) => ({
    type: actionTypes.FETCH_SUCCESS,
    payload: { endpoint, result },
  });
  
  export const fetchFailure = () => ({
    type: actionTypes.FETCH_FAILURE,
  });
  