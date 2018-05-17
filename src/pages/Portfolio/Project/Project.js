import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import projects from '../../../data/projects.json';
import openpage from '../../../images/openpage.png';

const ProjectWrapper = styled.div`
    display: grid;
    grid-gap: 10px;
    text-align: center;
`;
const ProjectNav = styled.div`
    display: grid;
    grid-template-columns: 3fr 10fr 3fr;
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
    font-size: 10px;
`;
const StyledImg = styled.img`
    max-width: 90%;
    justify-self: center;
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
  padding: 10px 15px 10px 15px;
  :hover {
    box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    cursor: pointer;
  }
`; 
const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (max-width: 980px){
    grid-template-columns: 1fr;
  }
`;
const LinkWrapper = styled.div`
  border-left: 1px solid #A6A6A6;
  @media (max-width: 980px){
    border-left: none
  }
`;
const DescriptionWrapper = styled.div`
  border-right: 1px solid #A6A6A6;
  @media (max-width: 980px){
    border-right: none
  }
`;
const DescriptionList = styled.ul`
  text-align: left;
  font-size: 18px;
  display: grid;
  grid-row-gap: 10px;
`;
const IconWrapper = styled.div`
  display: grid;
  grid-row-gap: 10px;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(115px, 1fr));
`;
const TechImage = styled.img`
  height: 115px;
  width: 115px;
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
                        <StyledArrows to = {{pathname: process.env.PUBLIC_URL + "/project/" + projects[this.state.index-1].path}}><h1>&#60; Previous</h1></StyledArrows>
                    }
                    </ArrowBackground>
                    <h1>{project.name}</h1>
                    <ArrowBackground>
                    {this.state.index + 1 !== projects.length && this.state.index !== undefined &&
                        <StyledArrows to = {{pathname: process.env.PUBLIC_URL + "/project/" + projects[this.state.index+1].path}}><h1>Next &#62;</h1></StyledArrows>
                    }
                    </ArrowBackground>
                </ProjectNav>
                <StyledImg src = {project.img}/>
                {/* Below needs to be restructured into two columns.  */}

                <DetailWrapper>
                    <DescriptionWrapper>
                        <h3>Details:</h3>
                        <DescriptionList>
                            <li><strong>Created:</strong> {project.details.createdOn}</li>
                            <li><strong>Purpose:</strong> {project.details.purpose}</li>
                            <li><strong>Role:</strong> {project.details.role}</li>
                        </DescriptionList>
                    </DescriptionWrapper>
                    <LinkWrapper>
                        <h3>Tech:</h3>
                        <IconWrapper>
                            {project.details !== undefined &&
                                project.details.tech.map((technames,index) => {
                                    
                                    return (
                                        <div key = {index}>
                                            <TechImage src = {`${Object.values(technames)}`} />
                                            <Button>{Object.keys(technames)}</Button>
                                        </div>
                                    );
                                })
                            }
                        </IconWrapper>
                        <h3>Links:</h3>
                        {project.details !== undefined &&
                            <Button>
                                <AToRepository href = {project.details.github} target="_blank">
                                    <OpenIcon src = {openpage} alt = 'open'/> See Git Repo
                                </AToRepository>
                            </Button>
                        }

                    </LinkWrapper>
                </DetailWrapper>
            </ProjectWrapper>
        )
    }
}
export default Project;