import React from 'react';

const Favorite = ({ favorites, removeFromFavorites }) => {
const handleRemoveFromFavorites = (episode) => {
    removeFromFavorites(episode);
  };

  return (
    <div className="favorite-container">
      <h1>Your Favorites</h1>
      {favorites.length > 0 ? (
        <ul className="favorite-list">
          {favorites.map((episode) => (
            <li key={episode.id} className="favorite-item">
              <h4>Season: {episode.season}</h4>
              <h4>Title: {episode.title}</h4>
              <h4>Episode: {episode.episode}</h4>
              <p>Description: {episode.description}</p>
              <button onClick={() => handleRemoveFromFavorites(episode)}>Remove from Favorites</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite episodes found.</p>
      )}
    </div>
  );
};

export default Favorite;
