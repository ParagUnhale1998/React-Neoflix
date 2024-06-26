import React, { useReducer, useCallback, useEffect } from 'react';
import DataContext from './DataContext';
import dataFetchReducer from './reducers/dataReducer';
import { fetchInit, fetchSuccess, fetchFailure } from './actions/dataActions';
import { fetchDataFromApi } from '../utils/api';

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    isLoading: false,
    isError: false,
    data: {},
  });

  const fetchData = useCallback(async (endpoint, urlGenerator) => {
    dispatch(fetchInit());
    try {
      const result = await fetchDataFromApi(urlGenerator(endpoint));
      dispatch(fetchSuccess(endpoint, result));
    } catch (error) {
      dispatch(fetchFailure());
    }
  }, []);

  return (
    <DataContext.Provider value={{ state, fetchData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
