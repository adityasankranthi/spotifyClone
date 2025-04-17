import React from 'react'
import Navbar from './components/Navbar'
import Sidebar  from './components/Sidebar'

const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-16 flex'>
        <Navbar />
      </div>
      <div className='flex h-[90%] px-4'>
        <Sidebar/>
      </div>
    </div>
  )
}

export default App