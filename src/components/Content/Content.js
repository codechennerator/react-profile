import React, { Component } from "react";
import styled from 'styled-components';

const ContentWrapper = styled.div`
    padding: 25px 75px 25px 75px;
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