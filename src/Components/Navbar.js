import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const showMenu = () => {
    const menus = document.getElementById("menus");
    if (menus.style.maxHeight === "0px") {
      menus.style.maxHeight = "200px";
      // menus.style.display = "block";
    } else {
      menus.style.maxHeight = "0px";
      // menus.style.display = "none";
    }
  };

  return (
    <>
      <div className="navbar">
        <h2>
          <NavLink to="/">ProSupplier</NavLink>
        </h2>
        <nav>
          <ul id="menus">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/courses">Courses</NavLink>
            </li>
            <li>
              <NavLink to="/topcontent">Top Contents</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li className="login-btn btn">
              <NavLink to="/login">Login</NavLink>
            </li>
            <li className="signup-btn btn">
              <NavLink to="/signup">Signup</NavLink>
            </li>
          </ul>
        </nav>
        <h4 className="menu-icon" onClick={showMenu}>
          menu
        </h4>
      </div>
    </>
  );
};

export default Navbar;
