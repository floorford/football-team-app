import React from "react";

import Players from "./containers/Players";

const App = () => (
  <React.Fragment>
    { /* header should show on all pages */ }
    <header><h1 style={{ textAlign: "center" }}>Create Your Team!</h1></header>
    <Players/>
  </React.Fragment>
);

export default App;
