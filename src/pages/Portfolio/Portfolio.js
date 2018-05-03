import React, { Component } from 'react';
import styled from 'styled-components';
import imgplaceholder from '../../images/placeholder-400x400.png';

const ProjectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 400px);
  grid-column-gap: 20px;
  grid-row-gap: 30px;
`;
const ProjectImg = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Overlay = styled.div`
  background: rgba(85, 122, 149, 0.7);
  grid-column: 1 / -1;
  grid-row: 1/ -1;
  position: relative;
  display: grid;
  justify-items: center;
  align-items: center;
  transition: 0.1s;
  transform: translateY(200%);
`;
const ProjectDiv = styled.div`

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

class Portfolio extends Component{
  render(){
    return (
        <div>
          <h1>Portfolio</h1>
          <ProjectWrapper>
            <ProjectDiv>
              <OverlayDiv>
                <ProjectImg src = {imgplaceholder} />
                <Overlay>
                <button>View-></button>
              </Overlay>
              </OverlayDiv>
              <h3>Project Name Here:</h3>
              <p>Project Description Here: Lorem ipsum balldaskbjasoibjsaoiwaj ladskfjalkfjwe dflkajdfse</p>
            </ProjectDiv>
            <ProjectDiv>
              <OverlayDiv>
                <ProjectImg src = {imgplaceholder} />
                <Overlay>
                <button>View-></button>
              </Overlay>
              </OverlayDiv>
              <h3>Project Name Here:</h3>
              <p>Project Description Here: Lorem ipsum balldaskbjasoibjsaoiwaj ladskfjalkfjwe dflkajdfse</p>
            </ProjectDiv>
          </ProjectWrapper>
        </div>
    );
  }
}

export default Portfolio;