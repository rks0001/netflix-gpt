import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-6 md:px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className=' text-2xl font-bold md:text-6xl'>{title}</h1>
        <p className='hidden md:inline-block py-6 text-md w-5/12'>{overview}</p>
        <div >
            <button  className='bg-white  text-black p-2 px-4 md:p-4 md:px-12 text-xl 
              rounded-md hover:bg-opacity-80'>▶ Play</button>
            <button className=' hidden md:inline-block mx-2 bg-gray-500  text-white p-2 px-4 md:p-4 md:px-12 text-xl 
             bg-opacity-50 rounded-md
             '>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle