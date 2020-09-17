import {
  LOADING_DATA,
  SET_DATA,
  POST_DATA,
  SET_ERROR,
  SET_JOBS,
  POST_JOB,
  UNSET_MODAL,
  SET_USERS,
} from "../types";
import axios from "axios";

export const getData = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get("/inventory").then((res) => {
    dispatch({ type: SET_DATA, payload: res.data.inventory });
  });
};

export const editJob = (data) => (dispatch) => {
  axios.post("/edit", data).then((res) => {
    console.log(res.data);
  });
};
export const deleteJob = (data) => (dispatch) => {
  console.log(data);
  axios.post("/delete", data).then((res) => {
    console.log(res.data);
  });
};
export const getJobs = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .get("/jobs")
    .then((res) => {
      dispatch({ type: SET_JOBS, payload: res.data.jobs });
    })
    .catch((err) => {
      dispatch({
        type: SET_JOBS,
        payload: [],
      });
    });
};
export const getUsers = () => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios.get("/users").then((users) => {
    dispatch({ type: SET_USERS, payload: users.data.users });

    console.log(users.data.users);
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
export const changeModal = () => (dispatch) => {
  dispatch({ type: UNSET_MODAL });
};

export const postCreateJob = (JobData) => (dispatch) => {
  dispatch({ type: LOADING_DATA });
  axios
    .post("/jobCreation", JobData)
    .then((res) => {
      dispatch({ type: POST_JOB, payload: res.data.message });
    })
    .catch((error) => {
      dispatch({ type: SET_ERROR, payload: error });
      console.log(error);
    });
};
