import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.div`
    display: grid;
    background-color: #557A95;
    grid-template-rows: 6fr repeat(16, 1fr);
    align-items: center;
    grid-gap: 5px;
`;
const NameHeader = styled(Link)`
    text-decoration: none;
    color: black;
    text-align: center;
    &:hover{
        text-decoration: underline;
    }
`;
const NavItem = styled(Link)`
    text-decoration: none;
    color: black
    &:hover{
        text-decoration: underline;
    }
`;
class Nav extends Component{
    render(){
        return(
            <NavWrapper>
                <NameHeader to = "/">
                    <h2>Nathan Chen</h2>
                </NameHeader>
                <NavItem to = "/">Home</NavItem>
                <NavItem to = "/portfolio">Portfolio</NavItem>
            </NavWrapper>
        )
    }
}

export default Nav;