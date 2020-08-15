import React from "react";

import "./App.css";
import Home from "./pages/home/home.component";

import { Route, Switch } from "react-router-dom";
import LogIn from "./pages/login/login.component";

function App() {
  // return <NavbarPage />;
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LogIn} />
    </>
  );
}

export default App;
