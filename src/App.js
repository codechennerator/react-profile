import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio } from "./pages";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div className = "router">
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/portfolio" component = {Portfolio} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
