import { NavLink, useLocation } from "react-router-dom";
import pokeballImage from "../assets/img/pokeball.png";

const Navbar = () => {
  const location = useLocation();

  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div>
      <nav>
        <div className="pokeball-wrapper">
          <img src={pokeballImage} alt="Pokeball" className="pokeball" />
        </div>
        <div className="nav-links">
          <NavLink
            className={setActiveClass}
            to="/"
          >
            Home
          </NavLink>

          <NavLink
            className={location.pathname !== "/" ? "active" : undefined}
            to="/pokemones"
          >
            Pokemones
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
