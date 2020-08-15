import { SET_AUTHENTICATED, SET_UNAUTHENTICATED } from "../types";

const intialState = {
  authenticated: false,
  errors: false,
};
export const userReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
        loading: false,
      };
    default:
      return state;
  }
};
