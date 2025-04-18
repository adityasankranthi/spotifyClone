import React from 'react'
import Navbar from './components/Navbar'
import Sidebar  from './components/Sidebar'
import Signupbar from './components/Signupbar'


const App = () => {
  return (
    <div className='h-screen bg-black'>
      <div className='h-16 flex'>
        <Navbar />
      </div>
      <div className='flex h-[80%] px-4'>
        <Sidebar/>
      </div>
      <div className='flex px-4'>
        <Signupbar />
      </div>
    </div>
  )
}

export default App