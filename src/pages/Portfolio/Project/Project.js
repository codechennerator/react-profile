import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projects from '../../../data/projects.json';
import openpage from '../../../images/openpage.png';

const ProjectWrapper = styled.div`
    text-align: center;
`;
const ProjectNav = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    align-items: center;
`;
const ArrowBackground = styled.span`
    &:hover{
        background: #DCDCDC;
    }
`;
const StyledArrows = styled(Link)`
    text-decoration: none;
    color: black;
`;
const StyledImg = styled.img`
    max-width: 75%;
`;
const AToRepository = styled.a`
    text-decoration: none;
    color: white;
`;
const OpenIcon = styled.img`
    height: 15px;
    width: 15px;
`;
const Button = styled.button`
  border: 0px;
  background-color: #557A95;
  font-family: 'Raleway', sans-serif;
  font-weight: 500;
  font-size: 15px;
  color: white;
  padding: 10px 20px 10px 20px;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    cursor: pointer;
  }
`; 
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            project:null,
        }
    }
    componentDidMount(){
        const project = projects.find(project => project.path === this.props.match.params.path);
        const index = projects.findIndex(project => project.path === this.props.match.params.path);
        if(project === undefined){
            console.log('return 404 here');
        }else{
            this.setState({project, index});
        }
    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps);
        if(nextProps.match.params.path !== this.props.match.params.path){
            const project = projects.find(project => project.path === nextProps.match.params.path);
            const index = projects.findIndex(project => project.path === nextProps.match.params.path);
            if(project === undefined){
                console.log('return 404 here');
            }else{
                this.setState({project, index});
            }
        }
    }
    render(){
      let project = this.state.project;
        if (!this.state.project){
            return <div>Loading...</div>
        }
        return (
            <ProjectWrapper>
                <ProjectNav>
                    <ArrowBackground>
                    {this.state.index !== 0 && this.state.index !== undefined &&
                        <StyledArrows to = {{pathname: "/project/" + projects[this.state.index-1].path}}><h1>&#60;</h1></StyledArrows>
                    }
                    </ArrowBackground>
                    <h1>{project.name}</h1>
                    <ArrowBackground>
                    {this.state.index + 1 !== projects.length && this.state.index !== undefined &&
                        <StyledArrows to = {{pathname: "/project/" + projects[this.state.index+1].path}}><h1>&#62;</h1></StyledArrows>
                    }
                    </ArrowBackground>
                </ProjectNav>
                <StyledImg src = {project.img}/>
                <p>{project.description}</p>
                {project.details !== undefined &&
                    <Button>
                        <AToRepository href = {project.details.github}>
                            <OpenIcon src = {openpage} alt = 'open'/> See repository
                        </AToRepository>
                    </Button>
                }
                <h3>Tech:</h3>
                {project.details !== undefined &&
                    project.details.tech.map(technames => {
                        return <Button key = {technames}>{technames}</Button>
                    })
                }
                
            </ProjectWrapper>
        )
    }
}
export default Project;