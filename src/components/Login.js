import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';

import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BACKGROUND_URL, PHOTO_URL } from '../utils/constants';


const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null); 

const dispatch = useDispatch(); 

  const name = useRef(null); 
  const email = useRef(null); 
  const password = useRef(null); 

  const handleButtonClick =()=>{
    //  Validate the form data
    const message =  checkValidData(!isSignInForm ? name.current.value : null, email.current.value, password.current.value);
    setErrorMessage(message);
    if(message) return ; 

    if(!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, photoURL: PHOTO_URL
    }).then(() => {
      const {uid, email, displayName, photoURL} = auth.currentUser;
      dispatch(addUser({
        uid:uid, email:email, displayName:displayName, photoURL:photoURL
      })); 
    
    }).catch((error) => {
     setErrorMessage(error.message); 
    });
    console.log(user);
  
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode + "" + errorMessage)
    
  });

    }
    else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
   
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode +""+ errorMessage)
  });
    }
  }

  const toggleSignInForm =() =>{   
    setIsSignInForm(!isSignInForm);
  }

  
  return (
    <div >
       <Header/>
       <div className="absolute w-screen h-screen  ">
           <img className="w-screen h-screen object-cover md:object-fill" alt="netflix-bg" src={BACKGROUND_URL}/>
       </div>
       <form onSubmit={(e) => e.preventDefault()} className='p-12 absolute w-10/12 md:w-4/12 bg-black mx-auto right-0 left-0 text-white my-36 bg-opacity-80 rounded-md'>
         <h1 className='font-bold text-3xl py-4 '>{isSignInForm? "Sign In" : "Sign Up" } </h1>
{!isSignInForm &&  <input ref={name} type="text" placeholder='Full Name' className='p-4 my-4 w-full bg-[#333] rounded-md'/>}

         <input ref={email} type="text" placeholder='Email Address' className='p-4 my-4 w-full bg-[#333] rounded-md'/>
         <input ref={password} type="password" placeholder='Password' className='p-4 my-4 w-full bg-[#333] rounded-md'/>
         <p className='text-red-500 font-bold text-md'>{errorMessage}</p>
         <button className='p-4 my-6 bg-[#e50914] w-full rounded-md font-bold text-md' onClick={handleButtonClick}>{isSignInForm? "Sign In" : "Sign Up" }</button>
         <p className='py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm? "New to Netflix? Sign Up Now" : "Already a User? Sign In" }</p>
       </form>
   </div>
   
 
   
  )
}

export default Login