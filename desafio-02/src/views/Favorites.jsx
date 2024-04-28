import React, { useContext } from "react";
import { FavoritesContext } from "../FavoritesContext";
import "./Favorites.css";


const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  return (
    <div className="favorites-container">
      <h1 style={{ display: "flex", justifyContent: "center", color: "#43a047" }}> Fotos Favoritas</h1>
      {favorites.length > 0 ? (
        <div className="favorites-grid">
          {/* Render favorite photos */}
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-item">
              <img src={favorite.src.medium} alt={favorite.alt} />
              {/* You can add additional functionality here */}
            </div>
          ))}
        </div>
      ) : (
        <div className="favorites-empty">
          <h2>Aún no tienes fotos favoritas</h2>
          <p>Agrega fotos a tu lista de favoritos dando click en el corazón de las fotos que te gusten.</p>
        </div>
      )}
    </div>
  );
};

export default Favorites;
