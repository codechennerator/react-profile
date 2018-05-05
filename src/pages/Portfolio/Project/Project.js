import React, { Component } from 'react';
import styled from 'styled-components';
import projects from '../projects.json';

const ProjectWrapper = styled.div`
    text-align: center;
    display: grid;
`;
const StyledImg = styled.img`
    max-width: 100%
`;
class Project extends Component{
    constructor(props){
        super(props);
        this.state = {
            project:{}
        }
    }
    componentDidMount(){
        let project = projects.find(project => project.path === this.props.match.params.path);
        if(project === undefined){
            console.log('return 404 here');
        }else{
            this.setState({project});
        }
    }
    render(){
      return (
        <div>
            <h1>{this.state.project.name}</h1>
            <StyledImg src = {this.state.project.img}/>
            <p>{this.state.project.description}</p>
        </div>
      )
    }
}
export default Project;