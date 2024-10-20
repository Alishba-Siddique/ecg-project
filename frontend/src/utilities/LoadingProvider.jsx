// utilities/LoadingProvider.jsx
import React, { createContext, useContext } from 'react';

const LoadingContext = createContext();

const LoadingProvider = ({ children, value }) => {
  return (
    <LoadingContext.Provider value={value}>
      {children}
    </LoadingContext.Provider>
  );
};

export default { LoadingProvider, LoadingContext };