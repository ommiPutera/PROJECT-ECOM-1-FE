import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/buyers/Home";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
