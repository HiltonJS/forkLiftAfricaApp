import { SET_AUTHENTICATED, SET_UNAUTHENTICATED, LOADING_USER } from "../types";
import axios from "axios";

export const login = (userdata, history) => (dispatch) => {
  dispatch({ type: LOADING_USER });
  axios
    .post("users/login", userdata)
    .then((res) => {
      setAuthorisedHeader(res.data.token);
    })
    .catch((err) => {
      console.log(err);
    });
};

const setAuthorisedHeader = (token) => {
  const FBIToken = `Bearer ${token}`;
  localStorage.setItem("FBIToken", FBIToken);
  axios.defaults.headers.common["Authorization"] = FBIToken;
};
