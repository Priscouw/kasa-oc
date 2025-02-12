import { NavLink } from "react-router-dom";
import logoHeader from "../../assets/img/logoHeader.png";

const Header = () => {
  return (
    <header>
      <NavLink to="/">
        <img src={logoHeader} alt="logo kasa" />
      </NavLink>
      <div className="navigation">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="nav-item">Accueil</li>
          </NavLink>
          <NavLink
            to="/apropos"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li className="nav-item">A Propos</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
};

export default Header;
