import React from 'react'
import Navbar from './components/Navbar'
import Sidebar  from './components/Sidebar'
import Signupbar from './components/Signupbar'
import Player from './components/player'

const App = () => {

  return (
    <div className='h-screen bg-black'>
      <div className='h-16 flex'>
        <Navbar />
      </div>
      <div className='flex h-[80%] px-4'>
        <Sidebar/>
      </div>
      {/* {token && (
        <Player
          isPlaying={isPlaying}
          onPlayPause={() => setIsPlaying(!isPlaying)}
        />
      )} */}
      <div className='flex h-[10%] bg-black text-white items-center justify-between px-6'>
        <Player />
      </div>

    </div>
  )
}

export default App