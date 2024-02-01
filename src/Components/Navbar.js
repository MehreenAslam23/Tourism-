import { useState } from "react";
import "./NavbarStyle.css";
import { NavLink } from 'react-router-dom';

function Navbar() {
    const [click, setClick] = useState(true);

    const responsivebar = () => {
        setClick(!click);
    };

    return (
        <div className="navbar-div">
            <h1 className="navbar-heading">Wanderer</h1>
            <div className="nav-response_div">
                <i className={click ? "fa-solid fa-bars" : "fa-solid fa-circle-xmark "} onClick={responsivebar}></i>
            </div>
            <ul className={click? "navbar-items":"navbar-items active"} onClick={responsivebar}>
                <li>
                    <NavLink to="/" className="links">
                        <i className="fa-solid fa-house-chimney"></i>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="links">
                        <i className="fa-solid fa-circle-info"></i>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/services" className="links">
                        <i className="fa-solid fa-briefcase"></i>
                        Services
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="links">
                        <i className="fa-solid fa-address-book"></i>
                        Contact
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/signup" className="links">
                        Sign Up
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;