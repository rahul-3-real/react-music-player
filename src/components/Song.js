import React from "react";

const Song = ({ currentSong }) => {
  return (
    <div className="content">
      <div className="image">
        <img src={currentSong.cover} alt={currentSong.name} />
      </div>
      <div className="text">
        <h4>{currentSong.name}</h4>
        <h6>{currentSong.album}</h6>
      </div>
    </div>
  );
};

export default Song;
