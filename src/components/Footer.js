import React from 'react'
import { useSelector } from 'react-redux'

const Footer = () => {
    const userdetails = useSelector(store => store.user)
  return (
<>
{!userdetails?
        <div className=' relative bottom-0 w-full h-24 text-white z-20   bg-black bg-gradient-to-b from-black '>
        footer
        </div>
        :
        <></>
    }

</>
   
    
  )
}

export default Footer