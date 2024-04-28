import React from "react";

const Card = ({ pokemon }) => {
  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  const { name, sprites, stats } = pokemon;

  return (
    <div>
      <h2>Detalles de {name}</h2>
      <div className="pokemon-details">
        <img src={sprites.front_default} alt={name} />
        <div className="pokemon-info">
          <p>Nombre: {name}</p>
          <p>HP: {getStatValue(stats, "hp")}</p>
          <p>Ataque: {getStatValue(stats, "attack")}</p>
          <p>Defensa: {getStatValue(stats, "defense")}</p>
          <p>Ataque Especial: {getStatValue(stats, "special-attack")}</p>
          <p>Defensa Especial: {getStatValue(stats, "special-defense")}</p>
          <p>Velocidad: {getStatValue(stats, "speed")}</p>
        </div>
      </div>
    </div>
  );
};

const getStatValue = (stats, statName) => {
  const stat = stats.find(stat => stat.stat.name === statName);
  return stat ? stat.base_stat : "N/A";
};

export default Card;
