import React from "react";

import Players from "./containers/Players";
import Header from "./components/Header";
import Teams from "./containers/Teams";

import {
  HashRouter as Router, // was BrowserRouter
  Route,
} from "react-router-dom";

const App = () => (
  <Router basename="/">
    <React.Fragment>
      { /* header should show on all pages */ }
      <Header>5 Aside</Header>
      <Route exact path="/" component={ Players }/>
      <Route path="/my-teams" component={ Teams }/>
    </React.Fragment>
  </Router>
);

export default App;
