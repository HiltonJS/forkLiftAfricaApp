import { LOADING_DATA, SET_DATA, POST_DATA, SET_ERROR } from "../types";
import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get("/inventory").then((res) => {
    dispatch({ type: SET_DATA, payload: res.data.inventory });
  });
};

export const postInventoryData = (inventoryData) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post("/inventory", inventoryData)
    .then((res) => {
      dispatch({ type: POST_DATA });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
      console.log(error);
    });
};
