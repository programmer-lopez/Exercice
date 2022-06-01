import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink className="navbar-brand navbar-logo" to="/" exact>
        Portfolio
      </NavLink>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-babel="Toggle navigation"
      >
        <i className="fas fa-bars text-white"></i>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <div className="hori-selector">
            <div className="left"></div>
            <div className="right"></div>
          </div>
          <li className="nav-item active">
            <NavLink className="navLink" to="/" exact>
              <i className="fas fa-tachometer-alt"></i>Home
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="navLink" to="/about" exact>
              <i className="fas fa-tachometer-alt"></i>about
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="navLink" to="/service" exact>
              <i className="fas fa-tachometer-alt"></i>service
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="navLink" to="/portfolio" exact>
              <i className="fas fa-tachometer-alt"></i>portfolio
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="navLink" to="/blogs" exact>
              <i className="fas fa-tachometer-alt"></i>blogs
            </NavLink>
          </li>
          <li className="nav-item active">
            <NavLink className="navLink" to="/contact" exact>
              <i className="fas fa-tachometer-alt"></i>contact
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
