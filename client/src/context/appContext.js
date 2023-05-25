import { useContext, createContext } from 'react';

//useContext is for things that change infrequently that will likely be needed in a lot of places. Examples: Theme State, Whether You're Logged In

const ThemeContext = createContext({});
const LoginContext = createContext({});

const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const LoginProvider = ({ children, value }) => {
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

// custom hook to use app context
const useThemeContext = () => useContext(ThemeContext);
const useLoginContext = () => useContext(LoginContext);

export { ThemeProvider, useThemeContext, LoginProvider, useLoginContext };
