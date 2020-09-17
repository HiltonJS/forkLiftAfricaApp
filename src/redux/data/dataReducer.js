import {
  LOADING_DATA,
  SET_DATA,
  POST_DATA,
  SET_JOBS,
  POST_JOB,
  UNSET_MODAL,
  SET_USERS,
} from "../types";

const initialState = {
  loading: false,
  inventory: [],
  errors: "",
  successMessage: "",
  jobs: [],
  modal: false,
  users: [],
};

export const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_DATA:
      return {
        ...state,
        loading: true,
      };
    case SET_JOBS:
      return {
        ...state,
        jobs: action.payload,
      };
    case SET_USERS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };

    case SET_DATA:
      return {
        ...state,
        inventory: action.payload,
        loading: false,
      };
    case POST_DATA:
      return {
        ...state,
        loading: false,
      };
    case POST_JOB:
      return {
        ...state,
        successMessage: action.payload,
        loading: false,
        modal: true,
      };
    case UNSET_MODAL:
      return {
        ...state,
        successMessage: "",
        modal: false,
      };
    default:
      return state;
  }
};
