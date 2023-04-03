import React from 'react'
import './Navbar.css';
import {NavLink} from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-mainbg">
            <NavLink className="navbar-header" to="/" exact>
            <img src="Images/wt-logo2.png" alt="flower-logo" />
            </NavLink>

            <button 
                className="navbar-toggler"
                type="button" data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <i className="fas fa-bars text-white"></i>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto">
                <div className="hori-selector">
                    <div className="left"></div>
                    <div className="right"></div>
                </div>

                <li className="nav-item active">
                    <NavLink className="nav-link" to="/" exact>
                        <i className="far fa-clone"></i> 
                        Home
                    </NavLink>
                </li>

                <li className="nav-item">
                    <NavLink className="nav-link" to="/products" exact>
                        <i className="fas fa-shopping-bag"></i>Products
                    </NavLink>
                </li>
                
                <li className="nav-item">
                    <NavLink className="nav-link" to="/contact" exact>
                        <i className="far fa-address-book"></i>Contact
                    </NavLink>
                </li>
            </ul>
            </div>
        </nav>
    )

} 
export default Navbar;