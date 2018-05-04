import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import imgplaceholder from '../../images/placeholder-400x400.png';
import projects from './projects.json';

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px,400px));
  grid-column-gap: 20px;
  grid-row-gap: 30px;
`;
const ProjectImg = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  object-fit: cover;
  max-width: 100%;
  height: auto;
`;
const Overlay = styled(Link)`
  background: rgba(85, 122, 149, 0.7);
  grid-column: 1 / -1;
  grid-row: 1/ -1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: 0.1s;
  transform: translateY(100%);
`;
const ProjectDiv = styled.div`
  display: grid;
`;
const OverlayDiv = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 1;
  &:hover{
    cursor: pointer;
  };
  &:hover ${Overlay}{
    transform: translateY(0);
  }
`;
const StyledH3 = styled.h3`
  margin-bottom: 0;
`;
const StyledButton = styled.button`
  border: 3px solid white;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  color: white;
  font-size: 15px;
  text-decoration: none;
  padding: 15px 25px 15px 25px;
  background: none;
  &:hover{
    cursor: pointer;
  }
`;
class Portfolio extends Component{
  render(){
    return (
        <div>
          <h1>Portfolio</h1>
          <ProjectWrapper>
            {
              projects.map((project, index) => 
                <ProjectDiv key = {index}>
                  <OverlayDiv>
                    <ProjectImg src = {project.img} />
                    <Overlay to = {`/project/" + ${index}`}>
                      <StyledButton>View-></StyledButton>
                    </Overlay>
                  </OverlayDiv>
                  <StyledH3>{project.name}</StyledH3>
                  <p>{project.description}</p>
                </ProjectDiv>
              )
            }
          </ProjectWrapper>
        </div>
    );
  }
}

export default Portfolio;