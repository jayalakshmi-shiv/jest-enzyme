import React from 'react';
// import { BrowserRouter as Router, Route} from "react-router-dom";
import {routes} from './Config/Routes';
import Jotto from "./Containers/Jotto"

function App() {
  return (
    // <div data-test="component-app" className="container">
    //   <Router>
    //       {routes.map((route) => (
    //         <Route
    //           key={route.path}
    //           path={route.path}
    //           component={route.component}
    //         />
    //       ))}
    //   </Router>
    // </div>
    <div data-test="component-app">
    <Jotto/>
    </div>
  );
}

export default App;