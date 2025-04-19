import React from 'react'
import {Route, Routes} from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'


const Display = () => {
  return (
    <div className='w-full m-2 px-6 pt-4 rounded bg-black text-white h-[90%] overflow-auto lg:w-[80%] lg:mx-0 lg:mt-0'>
        <Routes>
            <Route path='/' element={<DisplayHome />} />
            <Route path='/album/:id' element={<DisplayAlbum />} />
            {/* Add more routes here as needed */}
            {/* <Route path='/another' element={<AnotherComponent />} /> */}
        </Routes>
    </div>
  )
}

export default Display