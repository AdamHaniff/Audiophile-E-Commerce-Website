import { NavLink } from "react-router-dom";

function Nav() {
  // HANDLER FUNCTIONS
  function handleNavLinkClick() {
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <NavLink className="nav__link" to="/" onClick={handleNavLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link"
            to="/headphones"
            onClick={handleNavLinkClick}
          >
            Headphones
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link"
            to="/speakers"
            onClick={handleNavLinkClick}
          >
            Speakers
          </NavLink>
        </li>
        <li>
          <NavLink
            className="nav__link"
            to="/earphones"
            onClick={handleNavLinkClick}
          >
            Earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
