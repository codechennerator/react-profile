import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio } from "./pages";
import { Nav } from "./components";
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100%;
`;
const RouterWrapper =styled.div`
  display: grid;
  background-color: grey; 
  min-height: 100%;
  grid-template-columns: 1fr 3fr;
`;
const StyledRoute = styled(Route)`
  padding: 50px;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        
        <Router>
          <RouterWrapper>
            <Nav />
            <Switch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/portfolio" component = {Portfolio} />
            </Switch>
          </RouterWrapper>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
