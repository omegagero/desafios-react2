import React, { createContext, useState, useEffect } from "react";

const FavoritesContext = createContext({
  favorites: [],
  addToFavorites: (photo) => {},
  removeFromFavorites: (photoId) => {},
  likedState: [],
  setLikedState: (likedState) => {},
});

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [likedState, setLikedState] = useState([]);

  useEffect(() => {
    // Load likedState from localStorage
    const persistedLikedState = JSON.parse(localStorage.getItem("likedState"));
    if (persistedLikedState) {
      setLikedState(persistedLikedState);
    }
  }, []);

  useEffect(() => {
    // Update localStorage with likedState changes
    localStorage.setItem("likedState", JSON.stringify(likedState));
  }, [likedState]);

  const addToFavorites = (photo) => {
    setFavorites((prevFavorites) => [...prevFavorites, photo]);
    setLikedState((prevLikedState) => [...prevLikedState, photo]);
  };

  const removeFromFavorites = (photoId) => {
    setFavorites((prevFavorites) => prevFavorites.filter((photo) => photo.id !== photoId));
    setLikedState((prevLikedState) => prevLikedState.filter((photo) => photo.id !== photoId));
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    likedState,
    setLikedState,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>;
};

export { FavoritesContext, FavoritesProvider };
