import React, { useState, useRef } from "react";
import { RiPlayListLine } from "react-icons/ri";
import Library from "./components/Library";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/app.scss";
import data from "./data";

const App = () => {
  const audioRef = useRef(null);

  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  return (
    <main>
      <section className={`${libraryStatus ? "" : "active-player"}`}>
        <header>
          <h1 className="logo">
            LoFi
            <span>.</span>
          </h1>
          <button
            className="toggle"
            onClick={() => setLibraryStatus(!libraryStatus)}
          >
            <RiPlayListLine />
          </button>
        </header>
        <div className="container">
          <Song currentSong={currentSong} />
          <Player
            currentSong={currentSong}
            isPlaying={isPlaying}
            setIsPlaying={setIsPlaying}
            audioRef={audioRef}
            songInfo={songInfo}
            setSongInfo={setSongInfo}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
          />
        </div>
      </section>
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        audioRef={audioRef}
        isPlaying={isPlaying}
        setSongs={setSongs}
        libraryStatus={libraryStatus}
        setLibraryStatus={setLibraryStatus}
      />
    </main>
  );
};

export default App;
