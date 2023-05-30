import { useReducer, useContext, createContext, useEffect } from 'react';
import reducer from './reducer';
import {
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  HANDLE_CHANGE,
} from './actions';
//useContext is for things that change infrequently that will likely be needed in a lot of places. Examples: Theme State, Whether You're Logged In
const initialState = {
  isLoading: false,
  alert: { type: '', message: '' },
  user: null,
};

const AppContext = createContext();
const ThemeContext = createContext({});
const LoginContext = createContext({});

const AppProvider = ({ children }) => {};

const ThemeProvider = ({ children, value }) => {
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

const LoginProvider = ({ children, value }) => {
  return <LoginContext.Provider value={value}>{children}</LoginContext.Provider>;
};

// custom hook to use app context
const useAppContext = () => useContext(AppContext);
const useThemeContext = () => useContext(ThemeContext);
const useLoginContext = () => useContext(LoginContext);

export { initialState, AppProvider, useAppContext, ThemeProvider, useThemeContext, LoginProvider, useLoginContext };

///////////////////////////////////////////////////////////////

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Axios config
  // TODO move to separate file
  const authFetch = axios.create({
    baseURL: '/api/v1',
  });

  // alternative way to add token to header
  // authFetch.defaults.headers.common['Authorization'] = `Bearer ${state.token}`;

  /* Adding the token to the header of the request. */
  // authFetch.interceptors.request.use(
  //   (config) => {
  //     config.headers['Authorization'] = `Bearer ${state.token}`;
  //     return config;
  //   },
  //   (error) => {
  //     return Promise.reject(error);
  //   }
  // );

  /* Adding the token to the header of the response. */
  authFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      // console.log(error.response);
      if (error.response?.status === 401) {
        logoutUser();
      }
      return Promise.reject(error);
    }
  );

  const displayAlert = (message) => {
    dispatch({
      type: DISPLAY_ALERT,
      payload: { message: message || 'Unexpected Error' },
    });
    clearAlert();
  };

  const clearAlert = () => {
    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
  };

  const registerUser = async (newUser) => {
    dispatch({ type: REGISTER_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/register', newUser);
      const { user } = response.data;
      dispatch({ type: REGISTER_USER_SUCCESS, payload: { user } });

      if (!user) {
        throw new Error('User not found');
      }
    } catch (error) {
      dispatch({
        type: REGISTER_USER_ERROR,
        payload: {
          message:
            error.message ||
            error.response?.data?.message ||
            'Registration error',
        },
      });
    }
    clearAlert();
  };

  const loginUser = async (currentUser) => {
    dispatch({ type: LOGIN_USER_BEGIN });
    try {
      const response = await axios.post('/api/v1/auth/login', currentUser);
      const { user } = response.data;

      if (!user) {
        throw new Error('User not found');
      }

      dispatch({ type: LOGIN_USER_SUCCESS, payload: { user } });
    } catch (error) {
      dispatch({
        type: LOGIN_USER_ERROR,
        payload: { message: error.response?.data?.message || 'Login failed' },
      });
    }
    clearAlert();
  };

  const logoutUser = async () => {
    try {
      await authFetch.get('/auth/logout');
    } catch (error) {
      displayAlert(
        error.response?.data?.message || error.message || 'Logout failed'
      );
    }

    dispatch({ type: LOGOUT_USER });
  };

  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  const getCurrentUser = async () => {
    dispatch({ type: GET_CURRENT_USER_BEGIN });
    try {
      const { data } = await authFetch.get('/auth/getCurrentUser');

      if (!data) {
        throw new Error('User not found');
      }

      const { user } = data;

      if (!user) {
        throw new Error('User not found');
      }

      dispatch({ type: GET_CURRENT_USER_SUCCESS, payload: { user } });
    } catch (error) {
      if (error.response?.status === 401) return;

      displayAlert(
        error.response?.data?.message || 'Getting current user failed'
      );
      logoutUser();
    }
  };

  const handleChange = ({ name, value }) => {
    dispatch({ type: HANDLE_CHANGE, payload: { name, value } });
  };

  const clearValues = () => {
    dispatch({ type: CLEAR_VALUES });
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        displayAlert,
        clearAlert,
        registerUser,
        loginUser,
        toggleSidebar,
        logoutUser,
        updateUser,
        getSubscriptions,
        clearValues,
        handleChange,
        createSubscription,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// custom hook to use app context
const useAppContext = () => useContext(AppContext);

export { initialState, AppProvider, useAppContext };