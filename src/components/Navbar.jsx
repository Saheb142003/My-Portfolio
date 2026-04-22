import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            About
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/resume"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            Resume
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            Projects
          </NavLink>
        </li>

        <li className="navbar-item">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
