import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/img/logoHeader.png";

const Header = () => {
  return (
    <header>
      <img src={logoHeader} alt="logo kasa" />
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/apropos"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>A Propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
