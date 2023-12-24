import React from "react";
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';


const NavBar = () => {
    return (
        <div className="FullNavigationBar">
            <div className="ListItems">
                <ul>
                    <li><NavLink to="/" className="navItem">Home</NavLink></li>
                    <li><NavLink to="/employers" className="navItem">Employers</NavLink></li>
                    <li><NavLink to="/jobs" className="navItem">Jobs</NavLink></li>
                    <li><NavLink to="/events" className="navItem">Events</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;