import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projects from '../../../data/projects.json';

const ProjectWrapper = styled.div`
    text-align: center;
`;
const ProjectNav = styled.div`
    display: grid;
    grid-template-columns: 1fr 10fr 1fr;
    align-items: center;
`;
const StyledImg = styled.img`
    max-width: 75%;
`;
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            project:{},
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
      return (
        <ProjectWrapper>
            <ProjectNav>
                <span>
                {this.state.index !== 0 && this.state.index !== undefined &&
                    <Link to = {{pathname: "/project/" + projects[this.state.index-1].path}}><h1>&#60;</h1></Link>
                }
                </span>
                <h1>{this.state.project.name}</h1>
                <span>
                {this.state.index + 1 !== projects.length && this.state.index !== undefined &&
                    <Link to = {{pathname: "/project/" + projects[this.state.index+1].path}}><h1>&#62;</h1></Link>
                }
                </span>
            </ProjectNav>
            <StyledImg src = {this.state.project.img}/>
            <p>{this.state.project.description}</p>
        </ProjectWrapper>
      )
    }
}
export default Project;