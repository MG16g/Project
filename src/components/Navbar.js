import React from "react";

import {Link,NavLink} from "react-router-dom"

import "./Navbar.css"
export const Navbar = () => {
    return (
    <nav>
        <Link to="/" className="title">
            BooKaro.com
        </Link>
        
        <ul>
            <li>
                <NavLink to="/Login/SignUp">Login/SignUp</NavLink>
            </li>
            <li>
                <NavLink to="/services">Services</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact</NavLink>
                </li>
        </ul>
    </nav>
);
};