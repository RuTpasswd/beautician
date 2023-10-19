import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <ul className="links">
        <li>
          <NavLink to="/" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active">
            About Us
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Header;
