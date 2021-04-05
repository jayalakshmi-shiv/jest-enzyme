import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import {routes} from './Config/Routes';

function App() {
  return (
    <div data-test="component-app" className="container">
      <Router>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              component={route.component}
            />
          ))}
      </Router>
    </div>
  );
}

export default App;