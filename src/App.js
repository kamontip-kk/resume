import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import Resume from './Resume';
import Portfolio from './Portfolio';

function App() {
  return(
    <Router>
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/resume" exact component={Resume}/>
        <Route path="/resume/portfolio" exact component={Portfolio}/>
      </Switch>
    </div>
    </Router>
  )
}

export default App;
