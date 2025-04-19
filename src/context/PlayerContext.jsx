import { createContext, useRef } from "react";
import { songsData } from "../assets/assets";
import { useState } from "react";

export const PlayerContext = createContext();

const PlayerContextProvider = ({ children }) => {
    const audioRef = useRef(new Audio(songsData[0].song)); // OR: use <audio ref={audioRef} />
  const seekBg = useRef();
  const seekBar = useRef();

  const [track, setTrack] = useState(songsData[0]);
  const [playstatus, setPlaystatus] = useState(false);
  const [time, setTime] = useState({
    currentTime: {
        minutes: 0,
        seconds: 0,
    },
    totalTime: {
        minutes: 0,
        seconds: 0,
    },
  });

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlaystatus(true);
    }
  }
  const pauseAudio = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlaystatus(false);
    }
  }

  const contextValue = {
    audioRef,
    seekBg,
    seekBar,
    track,
    setTrack,
    playstatus,
    setPlaystatus,
    time,
    setTime,
    playAudio,
    pauseAudio
  };



  return (
    <PlayerContext.Provider value={contextValue}>
      {children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
