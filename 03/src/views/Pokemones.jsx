import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Pokemones.css";


const Pokemones = () => {
  const [pokemones, setPokemones] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const navigate = useNavigate();

  // Fetch the list of Pokémon
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
      .then(response => response.json())
      .then(data => setPokemones(data.results))
      .catch(error => console.error("Error fetching pokemones:", error));
  }, []);

  const handlePokemonSelection = (event) => {
    setSelectedPokemon(event.target.value);
  };

  const verDetalle = () => {
    if (selectedPokemon) {
      navigate(`/pokemon/${selectedPokemon}`);
    } else {
      alert("Por favor, selecciona un Pokémon primero.");
    }
  };

  return (
    <div className="container">
      <h1>Selecciona un Pokemón</h1>
      <select value={selectedPokemon} onChange={handlePokemonSelection}>
        <option value="">Pokemones</option>
        {pokemones.map(pokemon => (
          <option key={pokemon.name} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      <button className="btn btn-dark" onClick={verDetalle}>Ver Detalle</button>
    </div>
  );
};

export default Pokemones;
