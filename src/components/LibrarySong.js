import React from "react";

const LibrarySong = ({
  song,
  songs,
  id,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
}) => {
  const songSelectHandler = async () => {
    await setCurrentSong(song);
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });
    setSongs(newSongs);
    if (isPlaying) audioRef.current.play();
  };

  return (
    <li
      onClick={songSelectHandler}
      className={`item ${song.active ? "active" : ""}`}
    >
      <div className="image">
        <img src={song.cover} alt={song.name} />
      </div>
      <div className="text">
        <h5>{song.name}</h5>
        <h6>{song.album}</h6>
      </div>
    </li>
  );
};

export default LibrarySong;
