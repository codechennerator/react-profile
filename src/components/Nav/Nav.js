import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './Nav.css';
class Nav extends Component{
    render(){
        return(
            <nav className = "top">
                <div className = "header">
                    <h2>Nathan Chen</h2>
                </div>
                <Link to = "/" className = "navitem">Home</Link>
                <Link to = "/portfolio" className = "navitem">Portfolio</Link>
            </nav>
        )
    }
}

export default Nav;