import React from 'react'
import nlogo1 from '../images/nlogo1.png'
import profile from '../images/profile.jpeg'
import { signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'


const Header = () => {
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user)
  


  const handleSignOut = () => {
    signOut(auth).then(() => {
      
     navigate("/")
    }).catch((error) => {
      navigate("/error")
    });
    
  }

  return (
    <div className='absolute flex justify-between px-8 py-4 bg-gradient-to-b from-black w-full z-10 '>
      <img className='w-44  ' alt="nlogo1" src={nlogo1} />
      {user && <div className='flex'>
        <img className='w-10 m-2' alt="profile" src={user.photoURL}/>
        <button onClick={handleSignOut} className='font-bold text-md text-white px-2 py-1 rounded-sm'> Sign Out</button>
      </div>}
    </div>
  )
}

export default Header