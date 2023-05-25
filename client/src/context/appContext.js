import { useContext, createContext } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

// custom hook to use app context
const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
