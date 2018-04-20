import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio } from "./pages";
import { Nav } from "./components";

class App extends Component {
  render() {
    return (
      <div className="App" style = {{"display": "grid", "gridGap": "20px", "margin": "50px"}}>
        <Router>
          <div className = "router">
            <Nav />
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
