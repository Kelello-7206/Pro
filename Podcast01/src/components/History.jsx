import React, { useEffect, useState } from 'react';
import Preview from './Preview';

const History = () => {
  const [listeningHistory, setListeningHistory] = useState(
    JSON.parse(localStorage.getItem('listeningHistory')) || []
  );

  const handleEpisodeComplete = (episode) => {
    if (!listeningHistory.some((item) => item.id === episode.id)) {
      setListeningHistory((prevHistory) => [...prevHistory, episode]);
    }
  };

  const handleEpisodeProgress = (episode, currentTime) => {
    if (currentTime >= episode.duration - 10) {
      setListeningHistory((prevHistory) => {
        const updatedHistory = prevHistory.map((item) =>
          item.id === episode.id ? { ...item, progress: currentTime } : item
        );
        return updatedHistory;
      });
    }
  };

  useEffect(() => {
    localStorage.setItem('listeningHistory', JSON.stringify(listeningHistory));
  }, [listeningHistory]);

  return (
    <div className="history-container">
      <h1>Listening History</h1>
      {listeningHistory.length > 0 ? (
        <ul>
          {listeningHistory.map((episode, index) => (
            <li key={index}>
              <p>Show: {episode.show}</p>
              <p>Episode: {episode.title}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No listening history found.</p>
      )}
      <Preview
        onEpisodeComplete={handleEpisodeComplete}
        onEpisodeProgress={handleEpisodeProgress}
      />
    </div>
  );
};

export default History;
