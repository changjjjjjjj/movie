import React from "react";
import { HashRouter, Route } from "react-router-dom";
//import { About } from "./routes/About";
import { Home } from "./routes/Home";
import { Detail } from "./routes/Detail";

const App = () => {
  return (
    <HashRouter>
      <Route path="/" exact={true} component={Home} />
      <Route path="/:id" exact={true} component={Detail} />
    </HashRouter>
  );
};

export default App;
