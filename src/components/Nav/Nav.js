import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import me from '../../images/me.jpg';
const NavWrapper = styled.div`
    display: grid;
    background-color: #557A95;
    grid-template-areas: "head"
                         "nav";
    grid-template-rows: 1fr 3fr;
    align-items: center;
    padding-top: 25px;
    @media (max-width: 980px){
        grid-template-columns: 1fr;
        grid-template-rows: 3fr auto;
        grid-template-areas: "head"
                             "nav";
        padding-top: 10px;
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
const Menu = styled.div`
    display: grid;
    grid-area: nav;
    grid-template-rows: repeat(auto-fit, 45px);
    height: 100%
    padding-left: 50px;
    align-items: center;
`;
const NavItem = styled(Link)`
    text-decoration: none;
    color: white;
    opacity: 0.7;
    text-transform: uppercase
    &:hover{
        opacity: 1.0;
        text-decoration: underline;
    }
`;
const Me = styled.img`
    height: 150px;
    width: 150px;
    border: 3px solid white;
    border-radius: 50%;
`;
class Nav extends Component{
    render(){
        return(
            <NavWrapper>
                <NameHeader to = "/">
                    <Me src={me} alt = "me"/>
                    <h2>NATHAN CHEN</h2>
                    <p>Full-Stack Web Developer</p>
                </NameHeader>
                <Menu>
                    <NavItem to = "/#">&#9776;</NavItem>
                    <NavItem to = "/about">About</NavItem>
                    <NavItem to = "/portfolio">Portfolio</NavItem>
                    <NavItem to = "/contact">Contact</NavItem>
                </Menu>
            </NavWrapper>
        )
    }
}

export default Nav;