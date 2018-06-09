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
    @media(max-width: 640px){
        grid-template-columns: 1fr;
    };
    @media(max-width: 370px){
       font-size: 20px;
    };
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
            <p>I'm currently looking for a job as a junior developer! Feel free to contact me if you're interested in my skills!</p>
            <ContactWrapper>
                <ContactType>Email: </ContactType>      <ContactA href = "mailto:chenl.nathan@gmail.com"><img src = {email} alt = "email"/>chenl.nathan@gmail.com</ContactA>
                <ContactType>Github: </ContactType>     <ContactA href = "https://github.com/codechennerator"><img src = {github} alt = "git"/>codechennerator</ContactA>
                <ContactType>LinkedIn: </ContactType>   <ContactA href = "https://www.linkedin.com/in/nathan-chen-66416b7a/"><img src = {linkedin} alt = "linkedin"/>Nathan Chen</ContactA>
            </ContactWrapper> 
          </div>
      );
    }
  }
  
  export default Contact;