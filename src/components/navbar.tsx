import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css';


const NavBar = () => {
    return (
        <div className="FullNavigationBar">
            <div className="ListItems">
                <ul><Link to="/" className="navItem">Home</Link></ul>
                <ul><Link to="/employers" className="navItem">Employers</Link></ul>
                <ul>Jobs</ul>
                <ul>Events</ul>
            </div>
        </div>
    )
}

export default NavBar;