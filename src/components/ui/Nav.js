import { NavLink } from "react-router-dom";
import { scrollToTop } from "../../helpers/helpers";

function Nav() {
  return (
    <nav className="nav">
      <ul className="nav__links">
        <li>
          <NavLink className="nav__link" to="/" onClick={scrollToTop}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/headphones" onClick={scrollToTop}>
            Headphones
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/speakers" onClick={scrollToTop}>
            Speakers
          </NavLink>
        </li>
        <li>
          <NavLink className="nav__link" to="/earphones" onClick={scrollToTop}>
            Earphones
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
