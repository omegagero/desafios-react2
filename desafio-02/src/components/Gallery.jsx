import React, { useState, useEffect, useContext } from "react";
import data from "../photos.json";
import IconHeart from "./IconHeart";
import "./Gallery.css";
import { FavoritesContext } from "../FavoritesContext";

const Gallery = () => {
  const [photos, setPhotos] = useState(data.photos);
  const { addToFavorites, removeFromFavorites, likedState, setLikedState } = useContext(FavoritesContext);

  useEffect(() => {
   
    const updatedPhotos = photos.map((photo) => ({
      ...photo,
      liked: likedState.some((likedPhoto) => likedPhoto.id === photo.id),
    }));
    setPhotos(updatedPhotos);
  }, [likedState]);

  const handleLikeClick = (id) => {
    const updatedPhotos = photos.map((photo) =>
      photo.id === id ? { ...photo, liked: !photo.liked } : photo
    );
    setPhotos(updatedPhotos);

    const selectedPhoto = updatedPhotos.find((photo) => photo.id === id);
    if (selectedPhoto.liked) {
      addToFavorites(selectedPhoto);
    } else {
      removeFromFavorites(selectedPhoto.id);
    }
  };

  return (
    <div className="gallery">
      {photos.map((photo) => (
        <div key={photo.id} className="gallery-item">
          <div className="image-container" onClick={() => handleLikeClick(photo.id)}>
            <img src={photo.src.medium} alt={photo.alt} />
            <div className="icon-heart">
            <IconHeart
              filled={photo.liked}
              position="top"
              onClick={() => handleLikeClick(photo.id)}
            /></div>
          </div>
          <div className="image-overlay" onClick={() => handleLikeClick(photo.id)}>{photo.alt}</div>
        </div>
      ))}
    </div>
  );
};

export default Gallery;








