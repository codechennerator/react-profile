import React, { Component } from "react";
import styled from 'styled-components';

const ContentWrapper = styled.div`
    padding: 25px 75px 25px 75px;
    background-color: whitesmoke;
    @media (max-width: 980px){
        padding: 15px 50px 15px 50px;
    }
`;
class Content extends Component{
    render(){
        return(
            <ContentWrapper>
                {this.props.children}
            </ContentWrapper>
        )
    }
}

export default Content;