import { LOADING_DATA, SET_DATA } from "../types";

const initialState = {
  loading: false,
  data: {},
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
        data: action.payload,
      };
    default:
      return state;
  }
};
