import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio } from "./pages";
import { Nav } from "./components";
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100%;
`;
const StyledNav = styled(Nav)`
  grid-area: menu;
  height: 100%;
`;
const Content = styled.div`
  grid-area: content;
  padding: 25px 75px 25px 75px;
  background-color: whitesmoke;
  @media (max-width: 980px){
      padding: 15px 50px 15px 50px;
  }
`;
const RouterWrapper =styled.div`
  display: grid; 
  min-height: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "menu content";
  @media (max-width: 980px){
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr;
    grid-template-areas: "menu"
                         "content";
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Router>
          <RouterWrapper>
            <StyledNav />
            <Switch>
              <Content className = "test">
                <Route exact path = "/" component = {Home} />
                <Route exact path = "/portfolio" component = {Portfolio} />
              </Content>
            </Switch>
          </RouterWrapper>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
