import React, { Component } from 'react';
import styled from 'styled-components';
const MeMain = styled.p`
    font-size: 20px;
    font-weight: 500;
    font-style: italic;
`;
class AboutMe extends Component{
  render(){
    return (
        <div>
            <h1>About Me</h1>
            <MeMain>
                I'm a full stack developer currently looking for a junior developer job. My technical expertise currently lies in React/Javascript, Node.js, HTML, and MongoDB. However, I'm also proficient
                at CSS, jQuery and SQL while also being experienced in Java and C++.
            </MeMain>
            <h2>My Mindset:</h2>
            <p>
                &emsp;&emsp;My primary goal is to produce highly functional and organized software. For web development, this translates to impressive,but bug free websites. I understand the importance
                of clean code and the heavy costs of maintaining software with poor architecture. Ultimately, doing things right the first time saves more time and money than hacking out a functional
                but buggy website. I'm also not afraid to learn new things. The technology for the web stack is developing incredibly quickly, and I'm always eager to jump in to learn more where my skills are lacking.
            </p>
            <h2>Short Bio:</h2>
            <p>
                &emsp;&emsp;I graduated from UCLA in 2016 with a Global Studies Major and a Japanese Language Minor. 
                Soon after, I found work at Gromax Enteprises Corp. Due to its small size, I helped out in many fields including Accounting, Logistics, Shipping, Customer Service, and IT.
                Through helping IT, I became eager to enter the tech industry. I began to self-teach at home, using courses such as CS106A to familiarize myself with Java. 
                Looking for more practical skills, I entered the UCI Coding Bootcamp, an intensive, full-stack web development course from Sept. 2017 - Apr. 2018. 
                Here, I honed my abilities to become a web-developer by adapting to many new computer languages and technologies such as Javascript, React, Node.js, SQL, and MongoDB. 
                Now, having put in the work for code, I'm looking to code for work!
            </p>
        </div>
    );
  }
}

export default AboutMe;