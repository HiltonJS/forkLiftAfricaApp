import { LOADING_DATA, SET_DATA, POST_DATA } from "../types";
import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get("/inventory").then((res) => {
    dispatch({ SET_DATA, payload: res.data });
  });
};

export const postInventoryDAta = (inventoryData) => (dispatch) => {
  dispatch({ LOADING_DATA });
  axios
    .post("/inventory", inventoryData)
    .then((res) => {
      dispatch({ POST_DATA, payload: res.data });
    })
    .catch((error) => {
      console.log(error);
    });
};
