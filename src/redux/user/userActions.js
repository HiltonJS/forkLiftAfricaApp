import {
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  SET_DATA,
  SET_ERROR,
  LOADING_USER,
  UNSET_ERROR,
  ADD_USER,
  UNSET_MODAL,
  SET_USER,
} from "../types";
import axios from "axios";

export const login = (userdata, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("users/login", userdata)
    .then((res) => {
      setAuthorisedHeader(res.data.token, res.data.user);
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
      dispatch({ type: ADD_USER, payload: res.data.message });
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
export const setUser = () => (dispatch) => {
  var user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  dispatch({ type: SET_USER, payload: user });
};
export const changeModal = () => (dispatch) => {
  dispatch({ type: UNSET_MODAL });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("FBIToken");
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const errorHandler = () => (dispatch) => {
  dispatch({ type: UNSET_ERROR, payload: false });

  console.log("cancel");
};

const setAuthorisedHeader = (token, user) => {
  const User = user;
  const FBIToken = `Bearer ${token}`;
  localStorage.setItem("user", JSON.stringify(User));

  localStorage.setItem("FBIToken", FBIToken);
  axios.defaults.headers.common["Authorization"] = FBIToken;
};
