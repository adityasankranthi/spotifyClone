import React from 'react'

const Navbar2 = () => {
  return (
    <div className='w-full gap-2 bg-black text-white flex items-center justify-between px-6'>
        <div className='flex items-center gap-2'>
            <p className='bg-white text-black px-2 py-1 text-s rounded-2xl hidden md:block cursor-pointer hover:scale-105 transition-all duration-200'>All</p>
            <p className='bg-grey text-white px-2 py-1 text-s rounded-2xl hidden md:block cursor-pointer hover:scale-105 transition-all duration-200'>Music</p>
            <p className='bg-grey text-white px-2 py-1 text-s rounded-2xl hidden md:block cursor-pointer hover:scale-105 transition-all duration-200'>Podcasts</p>
            <p className='bg-grey text-white px-2 py-1 text-s rounded-2xl hidden md:block cursor-pointer hover:scale-105 transition-all duration-200'>Audiobooks</p>
        </div>
        <div className='flex items-center gap-4 hover:bg-white-800 p-2 rounded-lg '>

        </div>
        
    </div>
  )
}

export default Navbar2