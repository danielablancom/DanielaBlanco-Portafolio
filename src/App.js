import React, { Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';

function App() {
  
  return (

    <Fragment>
    <Router>
      <Switch>
        <Route path="/" exact>
        <Home />
        
        </Route>
  
       
      </Switch>
    </Router>
  </Fragment>
  );
  }


export default App;
