import {
    DISPLAY_ALERT,
  REMOVE_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_ERROR,
  LOGOUT_USER,
  GET_CURRENT_USER_BEGIN,
  GET_CURRENT_USER_SUCCESS,
  HANDLE_CHANGE,
  } from './actions';
  
  import { initialState } from './appContext';
  
  // TODO: Refactor this to use a switch statement
  
  const reducer = (state, action) => {
    if (action.type === DISPLAY_ALERT) {
      return {
        ...state,
        showAlert: true,
        alert: {
          type: 'danger',
          message: action.payload.message || 'Unexpected Error',
        },
      };
    }
  
    if (action.type === REMOVE_ALERT) {
      return {
        ...state,
        showAlert: false,
        alert: { type: '', message: '' },
      };
    }
  
    if (action.type === REGISTER_USER_BEGIN) {
      return { ...state, isLoading: true };
    }
  
    if (action.type === REGISTER_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        showAlert: true,
        alert: { type: 'success', message: 'User registered successfully!' },
      };
    }
  
    if (action.type === REGISTER_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alert: {
          type: 'danger',
          message:
            action.payload.message ||
            'Unexpected Error. User could not be registered.',
        },
      };
    }
  
    if (action.type === LOGIN_USER_BEGIN) {
      return { ...state, isLoading: true };
    }
  
    if (action.type === LOGIN_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        user: action.payload.user,
        showAlert: true,
        alert: { type: 'success', message: 'Login Successful! Redirecting...' },
      };
    }
  
    if (action.type === LOGIN_USER_ERROR) {
      return {
        ...state,
        isLoading: false,
        showAlert: true,
        alert: {
          type: 'danger',
          message:
            action.payload.message ||
            'Unexpected Error. User could not be logged in.',
        },
      };
    }
  
    if (action.type === LOGOUT_USER) {
      return {
        ...initialState,
        userLoading: false,
      };
    }
  
    if (action.type === GET_CURRENT_USER_BEGIN) {
      return { ...state, isLoading: true, showAlert: false };
    }
  
    if (action.type === GET_CURRENT_USER_SUCCESS) {
      return {
        ...state,
        isLoading: false,
        userLoading: false,
        user: action.payload.user,
      };
    }
  
    if (action.type === HANDLE_CHANGE) {
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    }
  
    throw new Error(`Unhandled action type: ${action.type}`);
  };
  
  export default reducer;
  