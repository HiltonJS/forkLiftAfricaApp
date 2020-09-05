import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_DATA,
  SET_ERROR,
  LOADING_USER,
  UNSET_ERROR,
} from "../types";
import axios from "axios";

export const login = (userdata, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("users/login", userdata)
    .then((res) => {
      setAuthorisedHeader(res.data.token);
      dispatch({ type: SET_AUTHENTICATED, payload: res.data.user });
      history.push("/");
    })
    .catch((err) => {
      dispatch({ type: SET_ERROR, payload: err });
      console.log(err);
    });
};

export const signUp = (userData) => (dispatch) => {
  // dispatch({ type: LOADING_USER });
  axios
    .post("/users", userData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("FBIToken");
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const errorHandler = () => (dispatch) => {
  dispatch({ type: UNSET_ERROR, payload: false });

  console.log("cancel");
};

const setAuthorisedHeader = (token) => {
  const FBIToken = `Bearer ${token}`;
  localStorage.setItem("FBIToken", FBIToken);
  axios.defaults.headers.common["Authorization"] = FBIToken;
};
