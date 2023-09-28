import React, { useEffect, useState} from 'react'
import nlogo1 from '../images/nlogo1.png'

import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'


import nlogo2 from '../images/Nlogo.png'

const Header = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user)

  const [show, setShow] = useState(false); 


  const [smallScreen, setSmallScreen] = useState(false); 

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  


  const handleSignOut = () => {
    signOut(auth).then(() => {
      
    
    }).catch((error) => {
      navigate("/error")
    });
    
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({
          uid:uid, email:email, displayName:displayName, photoURL:photoURL
        })); 
        navigate("/browse")
        
       
      } 
      else {
        dispatch(removeUser());
        navigate("/")
       
      }
    });


    return () =>{
      return () => unsubscribe();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  const handleGptSearchClick = () =>{
    // Toggle GPT Search 
      dispatch(toggleGptSearchView());

  }

 
  const checkScreenSize = () => {
    setSmallScreen(window.innerWidth <768); 
  }

  useEffect(()=>{
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize); 

    return () => {
      window.removeEventListener('resize', checkScreenSize); 
    }
  },[])

  const handleDrop = () => {
    setShow(!show); 
  }

  return (
    <div className='absolute flex flex-row md:flex-row justify-between px-8 py-6 bg-gradient-to-b from-black w-full z-10 '>
      <img className='my-2 md:my-0 w-10 h-12 md:w-40 md:h-12 md:mx-6' alt="nlogo1" src={smallScreen ? nlogo2 : nlogo1} />

      {user && <>
      
        <div className=' flex  flex-row text-xl text-white font-bold' > 
     

    <div className=' cursor-pointer flex flex-col ' onClick={() => handleDrop()}>
      <img className='w-10 m-2 justify-end ml-auto' alt="profile" src={user.photoURL}/> 
      {show &&  <>

<div className='flex flex-col bg-gray-900 py-2 px-4 rounded-lg  md:p-2'>
<button className=' py-1 px-2 md:px-4 md:m-2 bg-[#10A37F] text-white rounded-md md:mx-4 my-2' onClick={handleGptSearchClick}>{showGptSearch? 'Homepage' : 'Search'  }</button>
<button onClick={handleSignOut} className='text-sm md:font-bold text-white px-2 py-1 rounded-sm'> Sign Out</button> 
</div>
</>
}
      </div>
</div>
      </>}

 
      
    


    </div>
  )
}

export default Header