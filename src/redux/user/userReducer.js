import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR,
  UNSET_ERROR,
  ADD_USER,
  UNSET_MODAL,
  SET_USER,
} from "../types";

const intialState = {
  authenticated: false,
  errors: false,
  error: "",
  modal: false,
  user: { level: "tech" },
  successMessage: "",
};
export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
        user: action.payload,
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      };
    case ADD_USER:
      return {
        ...state,
        modal: true,
        successMessage: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case UNSET_ERROR:
      return {
        ...state,
        errors: action.payload,
      };

    case UNSET_MODAL:
      return {
        ...state,
        modal: false,
        successMessage: "",
      };

    case SET_ERROR:
      return {
        ...state,
        errors: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
