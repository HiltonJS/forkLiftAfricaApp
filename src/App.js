import React from "react";

import "./App.css";
import Home from "./pages/home/home.component";

import { Route, Switch } from "react-router-dom";
import LogIn from "./pages/login/login.component";
import CreateBirthPage from "./pages/create BirthCertificate/createBirth.jsx";
import SingleFork from "./pages/singleForkLift/singleFork.component.jsx";
import axios from "axios";
import { SET_AUTHENTICATED } from "./redux/types";
import { SET_UNAUTHENTICATED } from "./redux/types";
import jwtDecode from "jwt-decode";
import { logout } from "./redux/user/userActions";
import store from "./redux/store";
import AuthRoute from "./util/AuthRoute";
import SignUp from "./pages/signup/signup.component";
import CreateJob from "./pages/createJob/createJob.component";

axios.defaults.baseURL = "http://localhost:4003";

const token = localStorage.FBIToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    axios.defaults.headers.common["Authrization"] = token;
  }
} else {
  store.dispatch({ type: SET_UNAUTHENTICATED });
}

function App() {
  return (
    <Switch>
      <AuthRoute exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/signup" component={SignUp} />
      <AuthRoute exact path="/createBirth" component={CreateBirthPage} />
      <AuthRoute exact path="/createBirth" component={CreateBirthPage} />
      <AuthRoute exact path="/singleMachine" component={SingleFork} />
      <AuthRoute exact path="/createBirth" component={CreateBirthPage} />
      <AuthRoute exact path="/createJob" component={CreateJob} />
    </Switch>
  );
}

export default App;
