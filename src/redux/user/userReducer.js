import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_ERROR,
  UNSET_ERROR,
} from "../types";

const intialState = {
  authenticated: false,
  errors: false,
  error: "",
};
export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    case SET_UNAUTHENTICATED:
      return {
        ...state,
        authenticated: false,
      };
    case UNSET_ERROR:
      return {
        ...state,
        errors: action.payload,
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
