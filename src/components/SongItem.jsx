import React from 'react'
import { useNavigate } from 'react-router-dom';

const SongItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/song/${id}`);
  }

  return (
    <div
      onClick={handleClick}
      className='cursor-pointer min-w-[200px] w-[200px] h-[300px] bg-gray-800 rounded-lg p-4 m-2 flex flex-col items-center justify-between hover:scale-[1.02] transition-transform'
    >
      <img src={image} alt="" className='w-full h-40 object-cover rounded-lg mb-2' />
      <p className='font-bold mt-2 mb-1'>{name}</p>
      <p className='text-gray-400 text-sm mb-2'>{desc}</p>
    </div>
  )
}

export default SongItem
