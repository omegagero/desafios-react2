import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar" style={{ display: "flex", justifyContent: "center" }}>
      <Link to="/"> Home </Link> <span style={{ margin: "0 10px" }}>|</span>{" "} <Link to="/favoritos"> Favoritos </Link>
    </nav>
  );
};
export default Navbar;
