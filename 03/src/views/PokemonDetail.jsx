import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PokemonDetail.css";
import Pokemones from "./Pokemones"


const PokemonDetail = () => {
  const { nombre } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      .then(response => response.json())
      .then(data => setPokemon(data))
      .catch(error => console.error("Error fetching Pokémon details:", error));
  }, [nombre]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="container">
      
      <div className="pokemon-details">
      <div className="cover-img">
  <img
    src={pokemon.sprites.other.dream_world.front_default !== null
      ? pokemon.sprites.other.dream_world.front_default
      : pokemon.sprites.front_default
    }
    alt={nombre}
  />
</div>
        <div className="pokemon-info">
        <p style={{ textAlign: 'center' }}>
  <strong>{nombre}</strong>
</p>

          <p>HP: {pokemon.stats.find(stat => stat.stat.name === "hp").base_stat}</p>
          <p>Ataque: {pokemon.stats.find(stat => stat.stat.name === "attack").base_stat}</p>
          <p>Defensa: {pokemon.stats.find(stat => stat.stat.name === "defense").base_stat}</p>
          <p>Ataque Especial: {pokemon.stats.find(stat => stat.stat.name === "special-attack").base_stat}</p>
          <p>Defensa Especial: {pokemon.stats.find(stat => stat.stat.name === "special-defense").base_stat}</p>
          <p>Velocidad: {pokemon.stats.find(stat => stat.stat.name === "speed").base_stat}</p>
        </div>
      </div>
    </div>

  );
};

export default PokemonDetail;
