import React, { Component } from "react";
import './Nav.css';
class Nav extends Component{
    render(){
        return(
            <nav className = "top">
                <div className = "header">
                    <h2>Nathan Chen</h2>
                </div>
                <a href = "/" className = "navitem">Home</a>
                <a href = "/portfolio" className = "navitem">Portfolio</a>
            </nav>
        )
    }
}

export default Nav;