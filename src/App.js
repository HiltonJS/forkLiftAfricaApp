import React from "react";

import "./App.css";
import Home from "./pages/home/home.component";
import FormPage from "./pages/login/login.component";
import { Route, Switch } from "react-router-dom";

function App() {
  // return <NavbarPage />;
  return (
    <>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={FormPage} />
    </>
  );
}

export default App;
