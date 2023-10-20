import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-12 text-lg rounded-lg hover:opacity-50'>▶️ Play</button>
            <button className='bg-gray-500 text-white py-4 mx-2 px-12 text-lg rounded-lg opacity-50 hover:opacity-100'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle

