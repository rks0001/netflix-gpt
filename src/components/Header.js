import React, { useEffect } from 'react'
import nlogo1 from '../images/nlogo1.png'

import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'
import { SUPPORTED_LANGUAGES } from '../utils/constants'
import { changeLanguage } from '../utils/configSlice'


const Header = () => {
  const dispatch = useDispatch(); 
  const navigate = useNavigate(); 
  const user = useSelector((store) => store.user)

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
  }, [])


  const handleGptSearchClick = () =>{
    // Toggle GPT Search 
      dispatch(toggleGptSearchView());

  }

  const handleLanguageChange = (e)=>{ 
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute flex flex-row md:flex-row justify-between px-8 py-6 bg-gradient-to-b from-black w-full z-10 '>
      <img className='my-2 md:my-0 w-28 h-10 md:w-44 md:h-20  md:mx-0' alt="nlogo1" src={nlogo1} />

      
      {user && <div className='flex  flex-col md:p-2'>
        {showGptSearch && <select className='px-4 py-2 bg-gray-900 text-white m-2 rounded-lg' onChange={handleLanguageChange}>
          {SUPPORTED_LANGUAGES.map((lang)=>( <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>))}
         
        </select>}
        <button className='py-2 px-2 md:px-4 md:m-2 bg-[#10A37F] text-white rounded-md md:mx-4 my-2' onClick={handleGptSearchClick}>{showGptSearch? 'Homepage' : 'Search'  }</button>
      
        <div className='flex flex-row justify-start'>   <img className='w-10 m-2' alt="profile" src={user.photoURL}/>
        <button onClick={handleSignOut} className='text-sm md:font-bold text-white px-2 py-1 rounded-sm'> Sign Out</button> </div>
      
      </div>}
    </div>
  )
}

export default Header