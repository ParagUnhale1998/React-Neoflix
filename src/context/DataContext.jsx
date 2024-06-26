import { createContext, useContext } from 'react';

const DataContext = createContext();

export const useDataContext = () => useContext(DataContext);

export default DataContext;
