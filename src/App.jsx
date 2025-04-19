import React, { useContext } from 'react'
import Navbar from './components/Navbar'
import Sidebar  from './components/Sidebar'
import Player from './components/player'
import Display from './components/Display'
import { PlayerContext } from './context/PlayerContext'

const App = () => {
  const {audioRef} = useContext(PlayerContext);
  return (
    <>
      
    <div className='h-screen bg-black'>
      <div className='h-16 flex'>
        <Navbar />
      </div>
      <div className='flex h-[80%] px-6 pt-4 bg-black text-white overflow-hidden'>
        <Sidebar/>
        <Display />
      </div>
      <div className='flex h-[10%] bg-black text-white items-center justify-between px-6'>
        <Player />
        <audio ref={audioRef} preload='auto'></audio>
      </div>
    </div>
      </>
  )
}

export default App