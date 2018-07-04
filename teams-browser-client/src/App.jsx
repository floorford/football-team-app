import React from "react";

import Players from "./containers/Players";
import Header from "./components/Header";
import Teams from "./containers/Teams";

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

const App = () => (
  <Router>
    <React.Fragment>
      { /* header should show on all pages */ }
      <Header>5 Aside</Header>
      <Route exact path="/" component={ Players }/>
      <Route path="/my-teams" component={ Teams }/>
    </React.Fragment>
  </Router>
);

export default App;
