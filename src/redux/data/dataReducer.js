import { LOADING_DATA, SET_DATA, POST_DATA } from "../types";

const initialState = {
  loading: false,
  inventory: [],
  errors: "",
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_DATA:
      return {
        ...state,
        inventory: action.payload,
      };
    case POST_DATA:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
