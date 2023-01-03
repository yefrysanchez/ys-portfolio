import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="nav">
      <ul className="nav-links">
        <li className="links links-home">
          <i className="fa-solid fa-house "></i>
          <span>Home</span>
        </li>
        <li className="links links-about">
          <i className="fa-solid fa-user "></i>
          <span>About</span>
        </li>
        <li className="links links-skill">
          <i className="fa-solid fa-laptop-code"></i>
          <span>Skills</span>
        </li>
        <li className="links links-project">
          <i className="fa-regular fa-folder-open"></i>
          <span>Projects</span>
        </li>
        <li className="links links-contact">
          <i className="fa-solid fa-envelope"></i>
          <span>Contact</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
