import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Home, Portfolio, Contact, AboutMe, Project } from "./pages";
import { Nav } from "./components";
import styled from 'styled-components';
import ttower from './images/ttower.JPG';

const AppWrapper = styled.div`
  height: 100%;
`;
const StyledNav = styled(Nav)`
  grid-area: menu;
  min-height: 0;
`;
const Content = styled.div`
  grid-area: content;
  padding: 25px 75px 25px 75px;
  background-color: #f5f5f5;
  background-color: rgba(245, 245, 245, 0.85);
  @media (max-width: 980px){
      padding: 15px 50px 15px 50px;
  };
  @media (max-width: 640px){
    padding: 5px 25px 5px 25px;
}
`;
const RouterWrapper =styled.div`
  display: grid; 
  min-height: 100%;
  grid-template-columns: 1fr 3fr;
  grid-template-areas: "menu content";
  background-image: url(${ttower});
  background-repeat:no-repeat;
  -webkit-background-size:cover;
  -moz-background-size:cover;
  -o-background-size:cover;
  background-size:cover;
  background-position:center;
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
              <Content>
                <Route exact path = {process.env.PUBLIC_URL + "/"} component = {Home} />
                <Route exact path = {process.env.PUBLIC_URL + "/portfolio"} component = {Portfolio} />
                <Route exact path = {process.env.PUBLIC_URL + "/about"} component = {AboutMe} />
                <Route exact path = {process.env.PUBLIC_URL + "/contact"} component = {Contact} />
                <Route exact path = {process.env.PUBLIC_URL + "/project/:path"} component = {Project} />
              </Content>
            </Switch>
          </RouterWrapper>
        </Router>
      </AppWrapper>
    );
  }
}

export default App;
