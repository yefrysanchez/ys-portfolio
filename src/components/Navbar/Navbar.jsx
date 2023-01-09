import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <NavLink
          to="/"
          className={`links links-home ${({ isActive }) =>
            isActive ? "home" : ""}`}
        >
          <i className="fa-solid fa-house "></i>
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/about"
          className={`links links-about ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-solid fa-user "></i>
          <span>About</span>
        </NavLink>

        <NavLink
          to="projects"
          className={`links links-project ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-regular fa-folder-open"></i>
          <span>Projects</span>
        </NavLink>
        <NavLink
          to="skills"
          className={`links links-skill ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-solid fa-laptop-code"></i>
          <span>Skills</span>
        </NavLink>
        <NavLink
          to="contact"
          className={`links links-contact ${({ isActive }) =>
            isActive ? "active" : ""}`}
        >
          <i className="fa-solid fa-envelope"></i>
          <span>Contact</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
