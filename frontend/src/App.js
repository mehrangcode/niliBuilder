import React from 'react';
import './scss/App.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/Aboute';

function App() {
  return (
    <div className="App">
      

      <Router>
        <Switch>
          <Route path="/about" component={About} />
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
