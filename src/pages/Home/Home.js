import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HomeWrapper = styled.div`
  @media (min-width: 980px){
    display: grid;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 11fr 1fr;
    grid-template-areas: "intro ."
                         "learn ."
                         ".     .";
    height: 100%;
  }
`;
const HomeText = styled.div`
  grid-area: intro;
  align-self: end;
`;
const HomeH = styled.h1`
  font-size: 45px;
`;
const HomeP = styled.p`
  font-size: 25px;
`;
const LearnMore = styled.div`
  grid-area: learn;
  align-self: center;
  display: grid;
  grid-gap: 15px;
  grid-template-rows: repeat(auto-fill, 50px);
`;
const Button = styled.button`
  border: 0px;
  border-radius: 5%;
  background-color: #557A95;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 18px;
  color: white;
  padding: 15px 25px 15px 25px;
  align-self: center;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    cursor: pointer;
  }
`;  
class Home extends Component{
  render(){
    return (
      <HomeWrapper>
        <HomeText>
          <HomeH>Hello, I am Nathan Chen</HomeH>
          <HomeP>
            I am a full stack developer, ready to take on new challenges and develop highly functional 
            and organized websites!
          </HomeP>
        </HomeText>
        <LearnMore>
          <h2>Learn More: </h2>
          <Link to = {process.env.PUBLIC_URL + "/portfolio"}>
            <Button>
              Portfolio
            </Button>
          </Link>
          <Link to = {process.env.PUBLIC_URL + "/about"}>
            <Button>
              About Me
            </Button>
          </Link>
        </LearnMore>
      </HomeWrapper>
    );
  }
}

export default Home;