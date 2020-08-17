import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Home from "./components/Home";
import Projects from "./components/Projects";
import Error from "./components/Error";

function App() {
   return (
      <BrowserRouter>
         <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/projects" component={Projects} />
            {/* <Route path="/skills" component="" /> */}
            <Route component={Error} />
         </Switch>
      </BrowserRouter>
   );
}

export default App;
