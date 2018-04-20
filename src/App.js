import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio } from "./pages";
import { Nav, Footer } from "./components";

const appStyle = {
  "display": "grid", 
  "margin": "20px 100px 0px 100px",
  "minHeight": "100%",
  "gridTemplateRows": "1fr auto",
  "gridTemplateColumns": "100%"
}
class App extends Component {
  render() {
    return (
      <div className="App" style = {appStyle}>
        
        <Router>
          <div className = "router">
            <Nav />
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/portfolio" component = {Portfolio} />
            </Switch>
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
