import React from 'react';
import { assets, songsData } from '../assets/assets';

const Player = () => {
  return (
    <div className="h-[10%] bg-black flex items-center justify-between px-6 text-white w-full gap-4">
      {/* Left: Song Info */}
      <div className="hidden lg:flex items-center gap-4 w-[250px]">
        <img
          src={songsData[0].image}
          alt="song cover"
          className="w-12 h-12 rounded-lg"
        />
        <div className="flex flex-col">
          <p className="text-sm font-semibold">{songsData[0].name}</p>
          <p className="text-xs text-gray-400">
            {songsData[0].desc.slice(0, 12)}
          </p>
        </div>
      </div>

      {/* Center: Playback Controls */}
      <div className="flex-1 flex flex-col gap-1 items-center justify-center">
        <div className="flex gap-4 items-center">
          <img className="w-4 cursor-pointer" src={assets.shuffle_icon} alt="shuffle" />
          <img className="w-4 cursor-pointer" src={assets.prev_icon} alt="previous" />
          <img className="w-6 cursor-pointer" src={assets.play_icon} alt="play" />
          <img className="w-4 cursor-pointer" src={assets.next_icon} alt="next" />
          <img className="w-4 cursor-pointer" src={assets.loop_icon} alt="loop" />
        </div>
        <div className="flex items-center gap-3 w-full justify-center px-4">
          <p className="text-xs text-gray-400">0:00</p>
          <div className="w-full max-w-[500px] h-1 bg-gray-500 rounded-full relative cursor-pointer">
            <div className="h-1 w-[30%] bg-green-500 rounded-full absolute top-0 left-0" />
          </div>
          <p className="text-xs text-gray-400">3:20</p>
        </div>
      </div>

      {/* Right: Extra Controls */}
      <div className="hidden lg:flex items-center gap-3 w-[250px] justify-end opacity-80">
        <img className="w-4 cursor-pointer" src={assets.plays_icon} alt="plays" />
        <img className="w-4 cursor-pointer" src={assets.mic_icon} alt="mic" />
        <img className="w-4 cursor-pointer" src={assets.queue_icon} alt="queue" />
        <img className="w-4 cursor-pointer" src={assets.speaker_icon} alt="speaker" />
        <img className="w-4 cursor-pointer" src={assets.volume_icon} alt="volume" />
        <div className="w-20 h-1 bg-slate-50 rounded-full" />
        <img className="w-4 cursor-pointer" src={assets.mini_player_icon} alt="mini" />
        <img className="w-4 cursor-pointer" src={assets.zoom_icon} alt="zoom" />
      </div>
    </div>
  );
};

export default Player;
