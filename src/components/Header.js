import React from 'react'
import nlogo1 from '../images/nlogo1.png'

const Header = () => {
  return (
    <div className='absolute px-8 py-4 bg-gradient-to-b from-black w-full z-10 '>
      <img className='w-44  ' alt="nlogo1" src={nlogo1} />
    </div>
  )
}

export default Header