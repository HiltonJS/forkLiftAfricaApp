import React from "react";

import "./App.css";
import Home from "./pages/home/home.component";

import { Route, Switch } from "react-router-dom";
import LogIn from "./pages/login/login.component";
import CreateBirthPage from "./pages/create BirthCertificate/createBirth.jsx";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
      <Route exact path="/createBirth" component={CreateBirthPage} />
    </Switch>
  );
}

export default App;
