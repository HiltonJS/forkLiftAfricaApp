import React, { useEffect } from "react";

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
import Jobs from "./pages/jobs/jobs.component";

import SingleJob from "./pages/singleJob/singleJob.component";
import NavbarPage from "./components/navbar/navbar.component";
import AddUser from "./pages/addUser/addUser";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/user/userActions";
import { getJobs } from "./redux/data/dataActions";

import Fulfil from "./pages/fulfil/fulfil";

axios.defaults.baseURL = "http://localhost:4003";

const token = localStorage.FBIToken;
if (token) {
  const decodedToken = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout());
    window.location.href = "/login";
  } else {
    store.dispatch({ type: SET_AUTHENTICATED });
    store.dispatch(setUser());

    axios.defaults.headers.common["Authrization"] = token;
  }
} else {
  store.dispatch({ type: SET_UNAUTHENTICATED });
}

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {}, [dispatch]);
  console.log(user);
  return (
    <>
      <NavbarPage user={user}>
        <Switch>
          <AuthRoute exact path="/" component={Home} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/signup" component={SignUp} />
          <AuthRoute exact path="/createBirth" component={CreateBirthPage} />
          <AuthRoute exact path="/addUser" component={AddUser} />
          <AuthRoute exact path="/singleMachine" component={SingleFork} />
          <AuthRoute exact path="/createJob" component={CreateJob} />
          <AuthRoute exact path="/jobs" component={Jobs} />
          <AuthRoute exact path="/Fulfiljobs" component={Fulfil} />
          <AuthRoute exact path="/jobs/:_id" component={SingleJob} />
        </Switch>
      </NavbarPage>
    </>
  );
}

export default App;
