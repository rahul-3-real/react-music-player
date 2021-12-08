import React from "react";
import { RiPlayListLine } from "react-icons/ri";
import LibrarySong from "./LibrarySong";

const Library = ({
  songs,
  setCurrentSong,
  audioRef,
  isPlaying,
  setSongs,
  libraryStatus,
  setLibraryStatus,
}) => {
  return (
    <aside className={`library ${libraryStatus ? "active" : ""}`}>
      <h5 className="title">
        <span>Library</span>
        <button
          className="toggle"
          onClick={() => setLibraryStatus(!libraryStatus)}
        >
          <RiPlayListLine />
        </button>
      </h5>
      <ul className="list">
        {songs.map((song) => (
          <LibrarySong
            song={song}
            id={song.id}
            key={song.id}
            songs={songs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
            setSongs={setSongs}
          />
        ))}
      </ul>
    </aside>
  );
};

export default Library;
