import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio } from "./pages";
import { Nav } from "./components";
import styled from 'styled-components';

const AppWrapper = styled.div`
  height: 100%;
`;
const StyledNav = styled(Nav)`
  grid-area: menu
`;
const StyledSwitch = styled(Switch)`
  grid-area: content
`
const RouterWrapper =styled.div`
  display: grid; 
  min-height: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "menu content";
  @media (max-width: 980px){
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 3fr;
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
            <StyledSwitch>
              <Route exact path = "/" component = {Home} />
              <Route exact path = "/portfolio" component = {Portfolio} />
            </StyledSwitch>
          </RouterWrapper>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
