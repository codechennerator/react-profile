import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import me from '../../images/me.jpg';
const NavWrapper = styled.div`
    display: grid;
    background-color: rgba(85, 122, 149, 0.9);
    grid-template-areas: "head"
                         "nav";
    grid-template-rows: 1fr 2fr;
    padding-top: 25px;
    @media (max-width: 980px){
        grid-template-columns: 1fr;
        grid-template-rows: 1fr auto;
        grid-template-areas: "head"
                             "nav";
        padding-top: 10px;
        grid-gap: 0px;
    }
`;
const NameHeader = styled(Link)`
    grid-area: head;
    text-decoration: none;
    color: white;
    text-align: center;
    height: 90%
    &:hover{
        text-decoration: underline;
    }
    @media (max-width: 980px){
        height: auto;
    }
`;
const Me = styled.img`
    height: 150px;
    width: 150px;
    border: 3px solid white;
    border-radius: 50%;
`;
const Name = styled.h2`
    margin-bottom: 0;
`;
const JobTitle = styled.p`
    margin-top: 0.1em;
`
const Menu = styled.div`
    display: grid;
    grid-area: nav;
    grid-template-rows: repeat(auto-fill, 45px);
    height: auto;
    padding-left: 50px;
    @media (max-width: 980px){
        grid-template-rows: auto;
        height: auto;
    }
`;
const MenuToggle = styled.span`
    display: none;
    cursor: pointer;
    opacity: 0.7;
    color: white;
    font-size: 20px;
    @media (max-width: 980px){
        display: block;
        padding-top: 15px;
        padding-bottom: 15px;
    }
`;
const StyledLink = styled(Link)`
    text-decoration: none;
    color: white;
    opacity: 0.7;
    font-size: 20px;
    &:hover{
        opacity: 1.0;
        text-decoration: underline;
    }
    @media (max-width: 980px){
        padding-top: 15px;
        padding-bottom: 15px;
        display: ${props => props.toggle || 'none'};
    }
`;

class Nav extends Component{
    constructor(props){
        super(props);
        this.state = {
            toggleMenu: false
        }
        this.menuHandler = this.menuHandler.bind(this);
        this.hideMenu = this.hideMenu.bind(this);
    }
    menuHandler(){
        this.setState((prevState) =>{
            return {toggleMenu: !prevState.toggleMenu};
        });
    }
    hideMenu(){
        this.setState({
            toggleMenu: false
        })
    }
    render(){
        return(
            <NavWrapper>
                <NameHeader to = "/">
                    <Me src={me} alt = "me"/>
                    <Name>NATHAN CHEN</Name>
                    <JobTitle>Full-Stack Web Developer</JobTitle>
                </NameHeader>
                <Menu>
                    <MenuToggle onClick = {this.menuHandler}>&#9776;</MenuToggle>
                    <StyledLink toggle = {(this.state.toggleMenu) ? 'block' : 'none'} to = "/portfolio" onClick = {this.hideMenu}>
                        Portfolio
                    </StyledLink>
                    <StyledLink toggle = {(this.state.toggleMenu) ? 'block' : 'none'} to = "/about" onClick = {this.hideMenu}>
                        About
                    </StyledLink>
                    <StyledLink toggle = {(this.state.toggleMenu) ? 'block' : 'none'} to = "/contact" onClick = {this.hideMenu}>
                        Contact
                    </StyledLink>
                </Menu>
            </NavWrapper>
        )
    }
}

export default Nav;