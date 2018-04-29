import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio } from "./pages";
import { Nav, Footer } from "./components";


const appStyle = {
  "height": "100%"
}
const routerStyle = {
  "display": "grid", 
  "margin": "20px 100px 0px 100px",
  "minHeight": "100%",
  "gridTemplateRows": "auto 1fr auto",
  "gridTemplateColumns": "100%"
}
class App extends Component {
  render() {
    return (
      <div className="App" style = {appStyle}>
        
        <Router>
          <div className = "router" style = {routerStyle}>
            <Nav />
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/portfolio" component = {Portfolio} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
