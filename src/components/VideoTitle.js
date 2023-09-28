import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[16%] px-6 md:px-16 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='hidden md:inline-block text-2xl font-bold md:text-6xl'>{title}</h1>
        <p className='hidden md:block py-6 text-md w-5/12'>{overview}</p>
        <div >
            <button  className=' hidden md:inline-block bg-white my-2 text-black text-lg p-1 px-2 md:p-4 md:px-12 md:text-xl 
              rounded-md hover:bg-opacity-80'>▶ Play</button>
            <button className=' hidden md:inline-block mx-2 bg-gray-500  text-white p-2 px-4 md:p-4 md:px-12 text-xl 
             bg-opacity-50 rounded-md
             '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle