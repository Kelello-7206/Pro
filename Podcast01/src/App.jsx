import React, { useEffect, useState } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Favorite from './components/Favorite';
import Preview from './components/Preview';
import History from './components/History';

function App() {
  const [currentPage, setCurrentPage] = useState(
    localStorage.getItem("currentPage") || "home"
  );
  const [selectedPodcast, setSelectedPodcast] = useState(
    JSON.parse(localStorage.getItem("selectedPodcast")) || null
  );
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favoriteEpisodes")) || []
  );

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  // Define listeningHistory and setListeningHistory if used
  const [listeningHistory, setListeningHistory] = useState([]);

  const handleEpisodeComplete = (episode) => {
    if (!listeningHistory.some((item) => item.id === episode.id)) {
      setListeningHistory((prevHistory) => [...prevHistory, episode]);
    }
  };

  // Define handleFavoriteClick function to handle favoriting episodes
  const handleFavoriteClick = (episode) => {
    if (!favorites.some((fav) => fav.id === episode.id)) {
      setFavorites((prevFavorites) => [...prevFavorites, episode]);
    }
  };

  useEffect(() => {
    localStorage.setItem("currentPage", currentPage);
    localStorage.setItem("selectedPodcast", JSON.stringify(selectedPodcast));
  }, [currentPage, selectedPodcast]);

  useEffect(() => {
    localStorage.setItem("favoriteEpisodes", JSON.stringify(favorites));
  }, [favorites]);

  // Define removeFromFavorites function in the App component
  const removeFromFavorites = (episode) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favEpisode) => favEpisode.id !== episode.id)
    );
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      <br />
      <div className="content">
        {currentPage === "home" && (
          <Home
            onPodcastClick={setSelectedPodcast}
            selectedPodcast={selectedPodcast}
          />
        )}
        {currentPage === "favorite" && (
          <Favorite
            favorites={favorites}
            removeFromFavorites={removeFromFavorites}
          />
        )}
        {currentPage === "preview" && (
          <Preview
            podcastId={selectedPodcast?.id}
            onFavoriteClick={handleFavoriteClick}
            onEpisodeComplete={handleEpisodeComplete}
          />
        )}
        {currentPage === "history" && <History />}
      </div>
    </div>
  );
}

export default App;
