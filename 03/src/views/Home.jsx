import React from 'react';
import pokeballImage2 from "../assets/img/pika.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="centered"> {/* Div para centrar horizontalmente */}
        <h1>Bienvenido maestro pokemón</h1>
        <div className="pokeball-wrapper"> 
          <img src={pokeballImage2} alt="Pikachu" className="pika" /> 
        </div>
      </div>
    </div>
  );
};
export default Home;
