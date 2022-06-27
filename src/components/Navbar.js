import React from "react";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const linkStyle = {
        display: "inline-block",
        width: "50px",
        padding: "10px",
        margin: "10px 10px 3px",
        background: "blue",
        textDecoration: "none",
        color: "yellow",
      };
    return (
        <div>
            <NavLink to="/" style={linkStyle}>
                Home
            </NavLink>
            <NavLink to="/About" style={linkStyle}>
                About
            </NavLink>
            <NavLink to="/Blog" style={linkStyle}>
                Blogs
            </NavLink>
        </div>
    )
}

export default Navbar;