import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar2 from './Navbar2'
import { albumsData, assets, songsData } from '../assets/assets'

const DisplayAlbum = () => {
  const { id } = useParams()
  const album = albumsData.find((a) => a.id.toString() === id)

  if (!album) {
    return <p className='text-white p-4'>Album not found.</p>
  }

  return (
    <>
      <Navbar2 />
      <div className='mt-10 flex gap-8 md:flex-row md:items-end flex-col items-center text-white px-6'>
        <img className='w-48 rounded' src={album.image} alt={album.name} />
        <div className='flex flex-col gap-2'>
          <h1 className='text-4xl font-bold mb-4 md:text-7xl'>{album.name}</h1>
          <h4 className='text-gray-400'>{album.desc}</h4>
          <p className='mt-1 flex items-center gap-2 text-sm text-gray-300'>
            <img src={assets.spotify_logo} alt="Spotify" className='w-5 h-5' />
            <span className='font-bold'>Spotify</span> •
            1,141,124 likes •
            <b>50 songs</b> •
            about 2 hr 30 min
          </p>
        </div>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-4 px-6'>
        <p><b className='mr-4'>#</b></p>
        <p>Album</p>
        <p>Artist</p>
        <p>Time</p>
      </div>

      {songsData.map((song, index) => (
        <div key={index} className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mb-4 px-6'>
          <p className='text-gray-400'>{index + 1}</p>
          <div className='flex items-center gap-4'>
            <img src={song.image} alt={song.name} className='w-12 h-12 rounded' />
            <div>
              <h4 className='font-bold'>{song.name}</h4>
              <p className='text-gray-400'>{song.artist}</p>
            </div>
          </div>
          <p>{song.desc}</p>
          <p>{song.duration}</p>
        </div>
      ))}

      <div className='flex items-center gap-4 mt-10 mb-4 px-6'>
        <img src={assets.spotify_logo} alt="Spotify" className='w-5 h-5' />
        <p className='text-gray-400'>Play on Spotify</p>
        <p className='text-gray-400'>Add to Playlist</p>
        <p className='text-gray-400'>Share</p>
        <p className='text-gray-400'>More</p>
      </div>


    </>
  )
}

export default DisplayAlbum
