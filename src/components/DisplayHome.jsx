import React from 'react'
import Navbar2 from './Navbar2'
import { albumsData, assets } from '../assets/assets'
import { songsData } from '../assets/assets'
import { Album } from 'lucide-react'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar2 />
      <div className="w-full px-6 pt-4 bg-black text-white h-[90%] overflow-auto">
        <h1 className="text-2xl font-bold m-4">Featured Charts</h1>
        <p className="text-gray-400 m-4">Explore our collection of albums</p>

        {/* charts */}
        <div className="w-full overflow-x-auto">
          <div className="flex gap-6 px-6 pb-6 w-max">
            {albumsData.map((album) => (<AlbumItem key={album.id} image={album.image} name={album.name} desc={album.desc} id={album.id}/>))}
            </div>
        </div>

        {/* Songs */}
        <h1 className="text-2xl font-bold m-4">Top Songs</h1>
        <div className="w-full overflow-x-auto">
          <div className="flex gap-6 px-6 pb-6 w-max">
            {songsData.map((song) => (<SongItem key={song.id} image={song.image} name={song.name} desc={song.desc} id={song.id}/>))}
          </div>
        </div>
      </div>
    </>
  )
}

export default DisplayHome
