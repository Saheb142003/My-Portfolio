import React from "react";

const Navbar = ({ activePage, setActivePage }) => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === "about" ? "active" : ""}`}
            onClick={() => setActivePage("about")}
          >
            About
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === "resume" ? "active" : ""}`}
            onClick={() => setActivePage("resume")}
          >
            Resume
          </button>
        </li>
        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === "projects" ? "active" : ""}`}
            onClick={() => setActivePage("projects")}
          >
            Projects
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${activePage === "contact" ? "active" : ""}`}
            onClick={() => setActivePage("contact")}
          >
            Contact
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
