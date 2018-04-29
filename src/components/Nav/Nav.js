import React, { Component } from "react";
import { Link } from 'react-router-dom';

const style = {
    "top": {
      "display": "grid",
      "gridTemplateColumns": "1fr",
      "gridAutoFlow": "column",
      "alignItems": "center",
      "gridGap": "20px"
    },
    "navitem": {
      "display": "block",
      "textDecoration": "none",
      "padding": "10px",
      "textAlign": "center",
      "fontSize": "18px"
    },
    "navitem_hover": {
      "textDecoration": "underline"
    }
  }
class Nav extends Component{
    render(){
        return(
            <nav className = "top" style = {style.top}>
                <div className = "header">
                    <h2>Nathan Chen</h2>
                </div>
                <Link to = "/" className = "navitem" style = {style.navitem}>Home</Link>
                <Link to = "/portfolio" className = "navitem" style = {style.navitem}>Portfolio</Link>
            </nav>
        )
    }
}

export default Nav;