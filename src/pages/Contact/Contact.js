import React, { Component } from 'react';
import styled from 'styled-components';
import email from '../../images/email.png';
import github from '../../images/github.png';
import linkedin from '../../images/linkedin.png';

const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: repeat(auto-fill, 30px);
    grid-row-gap: 10px;
    font-size: 25px;
    align-items: start;
`;
const ContactType = styled.p`
    margin: 0px;
`;
const ContactA = styled.a`
    color: rgba(85, 122, 149);
`;
class Contact extends Component{
    render(){
      return (
          <div>
            <h1>Contact</h1>
            <p>Please contact me if you are interested in my work!</p>
            <ContactWrapper>
                <ContactType>Email: </ContactType>      <ContactA href = "mailto:chenl.nathan@gmail.com"><span><img src = {email} alt = "email"/></span>chenl.nathan@gmail.com</ContactA>
                <ContactType>Github: </ContactType>     <ContactA href = "https://github.com/codechennerator"><span><img src = {github} alt = "git"/></span>codechennerator</ContactA>
                <ContactType>LinkedIn: </ContactType>   <ContactA href = "https://www.linkedin.com/in/nathan-chen-66416b7a/"><img src = {linkedin} alt = "linkedin"/>Nathan Chen</ContactA>
            </ContactWrapper> 
          </div>
      );
    }
  }
  
  export default Contact;