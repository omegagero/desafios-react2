import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CompraContext } from "../context/CompraContext"; 

const Header = () => {
  const { counter } = useContext(CompraContext);
  
    return (
      <div className="headerstyle">
        <Link to="/"><div>🍕<strong> Pizzería Mamma Mia!</strong></div></Link>  <Link to="components/carrito"> <div>🛒 ${counter.toLocaleString()}</div></Link>
      </div>
    );
  };
  export default Header;